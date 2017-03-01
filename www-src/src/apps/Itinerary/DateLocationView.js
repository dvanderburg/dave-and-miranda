/**
*/
define([
	'marionette',
	'text!apps/Itinerary/DateLocationView.html'
], function(
	Marionette,
	template
) {
	
	return Marionette.View.extend({
		
		className: "date-location-view",
		template: _.template(template)
		
	});
	
});
