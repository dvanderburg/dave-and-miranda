/**
	View to serve as a layout for the wedding program/itinerary
	Arranges child views to display a program header along
	
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
			Displays the ceremony details in the itinerary info region

		*/
		showCeremony: function() {

			var ceremonyView = new MapLocationInfoView({
				model: new CeremonyLocationModel()
			});
			
			this.getRegion("itineraryInfo").show(ceremonyView);

		},
		
		/**
			Displays the reception details in the itinerary info region
			
		*/
		showReception: function() {
			
			var receptionView = new MapLocationInfoView({
				model: new ReceptionLocationModel()
			});
			
			this.getRegion("itineraryInfo").show(receptionView);
			
		},
		
		/**
		*/
		showLodging: function() {
			
			var lodgingView = new LodgingView();
			
			this.getRegion("itineraryInfo").show(lodgingView);

		},
		
		/**
		*/
		showRegistry: function() {
			
			var registryView = new RegistryView();
			
			this.getRegion("itineraryInfo").show(registryView);

		},
		
		/**
		*/
		showRsvp: function() {
			
			var rsvpView = new RsvpView();
			
			this.getRegion("itineraryInfo").show(rsvpView);
			
		},
		
		/**
		*/
		onBeforeAttach: function() {
			
			// create child views
			var header = new ItineraryHeaderView();
			var dateLocation = new DateLocationView();
			var itineraryList = new ItineraryListView();
			
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
			this.showCeremony();
			
		}
		
	});
	
});
