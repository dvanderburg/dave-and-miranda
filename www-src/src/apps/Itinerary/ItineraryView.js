/**
	View to serve as a layout for the wedding program/itinerary
	Displays each piece of itinerary within an ItineraryListView
	Clicking any item in the itinerary list will display details in a details region
	
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
	'apps/Itinerary/LodgingView',
	'apps/Itinerary/RegistryView',
	'apps/Itinerary/RsvpView',
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
			itineraryList: ".itinerary-list-region",
			itineraryInfo: ".itinerary-info-region"
		},
		
		/**
		*/
		setItineraryInfoVisible: function(value) {
			
			// toggle both this view, and the header view into a state indicating the user is viewing a specific section
			this.$el.addClass("itinerary-info-visible");
			this.getRegion("header").currentView.setLargeHeaderMode(false);
			
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
			
			// create a map location info view with the ceremony location details
			var ceremonyView = new MapLocationInfoView({
				model: new CeremonyLocationModel()
			});
			
			// update the small header text of the header view
			this.getRegion("header").currentView.setSmallHeaderText("Ceremony");
			
			// display the ceremony location in the itinerary info region
			this.getRegion("itineraryInfo").show(ceremonyView);
			
		},
		
		/**
			Displays the reception details in the itinerary info region
			
		*/
		showReception: function() {

			// create a map location info view to display reception details
			var receptionView = new MapLocationInfoView({
				model: new ReceptionLocationModel()
			});
			
			// update the small header text of the header view
			this.getRegion("header").currentView.setSmallHeaderText("Reception");
			
			// display the reception view in the itinerary info region
			this.getRegion("itineraryInfo").show(receptionView);
			
		},
		
		/**
		*/
		showLodging: function() {
			
			// create a logiding view to display hotel details
			var lodgingView = new LodgingView();
			
			// update the small header text of the header view
			this.getRegion("header").currentView.setSmallHeaderText("Where to Stay");

			// display the logding view in the itinerary info region
			this.getRegion("itineraryInfo").show(lodgingView);
			
		},
		
		/**
		*/
		showRegistry: function() {
			
			var registryView = new RegistryView();
			
			this.getRegion("header").currentView.setSmallHeaderText("Registry");
			
			this.getRegion("itineraryInfo").show(registryView);
			
		},
		
		/**
		*/
		showRsvp: function() {
			
			var rsvpView = new RsvpView();
			
			this.getRegion("header").currentView.setSmallHeaderText("RSVP");
			
			this.getRegion("itineraryInfo").show(rsvpView);
			
		},
		
		/**
		*/
		onBeforeAttach: function() {
			
			// determine which section to show, defaulting to ceremony
			var section = (!this.options.section) ? ItineraryListView.CEREMONY : this.options.section;
			
			// create child views
			var header = new ItineraryHeaderView();
			var itineraryList = new ItineraryListView({
				section: section
			});
			
			// populate regions with child views
			this.getRegion("header").show(header);
			this.getRegion("itineraryList").show(itineraryList);
			
			// show the appropriate section
			this.showSection(section);
			
			// if a section was explicitly set to be displayed, set the itinerary info visible to true
			//	this is primarily for narrow (mobile) layouts
			//	instead of a list of itinerary being visible, only the info for the specific section will be visible
			//	this is only applicable for narrow layout since the wide layout always shows the list
			if (this.options.section) {
				this.setItineraryInfoVisible(true);
			}
			
		}
		
	});
	
});
