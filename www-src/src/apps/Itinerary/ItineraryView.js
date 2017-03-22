/**
	View to serve as a layout for the wedding program/itinerary
	Arranges child views to display a program header along
	
	Options
		section		Indicates which section of the itinerary should be highlighted when the view is rendered
						Supply ItineraryListView constants (ItineraryListView.CEREMONY)
						If none is provided, no section will be highlighted

	
*/
define([
	'backbone',
	'marionette',
	'apps/Itinerary/DateLocationView',
	'apps/Itinerary/ItineraryHeaderView',
	'apps/Itinerary/ItineraryListView',
	'apps/Lodging/LodgingView',
	'apps/Registry/RegistryView',
	'apps/Rsvp/RsvpView',
	'entities/models/CeremonyLocationModel',
	'entities/models/ReceptionLocationModel',
	'mixins/MapLocationInfoView/MapLocationInfoView',
	'text!apps/Itinerary/ItineraryView.html'
], function(
	Backbone,
	Marionette,
	DateLocationView,
	ItineraryHeaderView,
	ItineraryListView,
	LodgingView,
	RegistryView,
	RsvpView,
	CeremonyLocationModel,
	ReceptionLocationModel,
	MapLocationInfoView,
	template
) {
	
	return Marionette.View.extend({
		
		className: "itinerary-view",
		template: _.template(template),
		
		regions: {
			header: ".header-region",
			date: ".date-region",
			itinerary: ".itinerary-list-region",
			itineraryInfo: ".itinerary-info-region"
		},
		
		/**
		*/
		showSection: function(sectionID) {
			
			// build a mapping of section IDs to their respective "show" functions
			var sectionMapping = {}
			sectionMapping[ItineraryListView.CEREMONY] = this.showCeremony;
			sectionMapping[ItineraryListView.RECEPTION] = this.showReception;
			sectionMapping[ItineraryListView.LODGING] = this.showLodging;
			sectionMapping[ItineraryListView.REGISTRY] = this.showRegistry;
			sectionMapping[ItineraryListView.RSVP] = this.showRsvp;
			
			// call the appropriate show function in scope of this view
			sectionMapping[sectionID].apply(this);
			
		},
		
		/**
			Displays the ceremony details in the itinerary info region

		*/
		showCeremony: function() {
			
			Backbone.history.navigate("ceremony");

			var ceremonyView = new MapLocationInfoView({
				model: new CeremonyLocationModel()
			});
			
			this.getRegion("itineraryInfo").show(ceremonyView);

		},
		
		/**
			Displays the reception details in the itinerary info region
			
		*/
		showReception: function() {

			Backbone.history.navigate("reception");
			
			var receptionView = new MapLocationInfoView({
				model: new ReceptionLocationModel()
			});
			
			this.getRegion("itineraryInfo").show(receptionView);
			
		},
		
		/**
		*/
		showLodging: function() {
			
			Backbone.history.navigate("lodging");
			
			var lodgingView = new LodgingView();
			
			this.getRegion("itineraryInfo").show(lodgingView);

		},
		
		/**
		*/
		showRegistry: function() {
			
			Backbone.history.navigate("registry");
			
			var registryView = new RegistryView();
			
			this.getRegion("itineraryInfo").show(registryView);

		},
		
		/**
		*/
		showRsvp: function() {
			
			Backbone.history.navigate("rsvp");
			
			var rsvpView = new RsvpView();
			
			this.getRegion("itineraryInfo").show(rsvpView);
			
		},
		
		/**
		*/
		onBeforeAttach: function() {
			
			var section = _.isUndefined(this.options.section) ? ItineraryListView.CEREMONY : this.options.section;
			
			// create child views
			var header = new ItineraryHeaderView();
			var dateLocation = new DateLocationView();
			var itineraryList = new ItineraryListView({
				section: section
			});
			
			// attach event listeners for navigation events
			this.listenTo(itineraryList, "click:ceremony", this.showCeremony, this);
			this.listenTo(itineraryList, "click:reception", this.showReception, this);
			this.listenTo(itineraryList, "click:lodging", this.showLodging, this);
			this.listenTo(itineraryList, "click:registry", this.showRegistry, this);
			this.listenTo(itineraryList, "click:rsvp", this.showRsvp, this);
			
			// populate regions with child views
			this.getRegion("header").show(header);
			this.getRegion("date").show(dateLocation);
			this.getRegion("itinerary").show(itineraryList);
			
			// show the ceremony view by default
			this.showSection(section);
			
		}
		
	});
	
});
