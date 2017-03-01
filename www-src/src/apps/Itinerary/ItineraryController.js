/**
*/
define([
	'marionette',
	'backbone.radio',
	'apps/Itinerary/ItineraryView'
], function(
	Marionette,
	Radio,
	ItineraryView
) {
	
	return Marionette.Object.extend({
		
		/**
		*/
		showItinerary: function() {
			
			var itineraryView = new ItineraryView();
			
			Radio.channel("app").trigger("show:content", itineraryView);

		}
		
	});
	
});
