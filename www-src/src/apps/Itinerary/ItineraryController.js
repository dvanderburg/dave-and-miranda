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
		
		/**
		*/
		showCeremony: function() {
			this.showItinerary(ItineraryListView.CEREMONY);
		},
		
		/**
		*/
		showItinerary: function(section) {
			
			// default for landing page
			if (_.isUndefined(section)) {
				section = ItineraryListView.CEREMONY;
			}
			
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
