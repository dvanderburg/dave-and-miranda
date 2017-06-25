/**
*/
define([
	'marionette',
	'backbone.radio',
	'apps/Itinerary/ItineraryView',
	'apps/Itinerary/ItineraryListView'
], function(
	Marionette,
	Radio,
	ItineraryView,
	ItineraryListView
) {
	
	return Marionette.Object.extend({
		
		channelName: "itinerary",
		
		radioEvents: {
			"show:ceremony": "showCeremony",
			"show:itinerary": "showItinerary",
			"show:lodging": "showLodging",
			"show:reception": "showReception",
			"show:registry": "showRegistry",
			"show:rsvp": "showRsvp"
		},
		
		/**
		*/
		showCeremony: function() {
			this.showItinerary(ItineraryListView.CEREMONY);
		},
		
		/**
		*/
		showItinerary: function(section) {
			
			// create an itinerary view set to show the provided section
			//	if no section was provided, should default to a list of all itinerary items
			//	the exact display depends on if the app is in wide (desktop) or narrow (mobile) layout
			//	expected behaviour for wide layout is to display the ceremony details
			//	expected behaviour for narrow layout is to display a list of all itinerary
			var itineraryView = new ItineraryView({
				section: section
			});

			Radio.channel("app").trigger("show:content", itineraryView);

		},
		
		/**
		*/
		showLodging: function() {
			this.showItinerary(ItineraryListView.LODGING);
		},
		
		/**
		*/
		showReception: function() {
			this.showItinerary(ItineraryListView.RECEPTION);
		},
		
		/**
		*/
		showRegistry: function() {
			this.showItinerary(ItineraryListView.REGISTRY);
		},
		
		/**
		*/
		showRsvp: function() {
			this.showItinerary(ItineraryListView.RSVP);
		}
		
	});
	
});
