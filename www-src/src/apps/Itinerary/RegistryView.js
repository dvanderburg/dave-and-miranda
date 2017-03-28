/**
*/
define([
	'marionette',
	'text!apps/Itinerary/RegistryView.html'
], function(
	Marionette,
	template
) {
	
	return Marionette.View.extend({
		
		className: "registry-view",
		template: _.template(template)
		
	});
	
});
