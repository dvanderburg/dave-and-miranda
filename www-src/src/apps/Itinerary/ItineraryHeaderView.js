/**
*/
define([
	'marionette',
	'text!apps/Itinerary/ItineraryHeaderView.html'
], function(
	Marionette,
	template
) {
	
	return Marionette.View.extend({
		
		className: "itinerary-header-view",
		template: _.template(template)
		
	});
	
});
