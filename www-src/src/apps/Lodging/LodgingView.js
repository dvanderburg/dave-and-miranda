/**
*/
define([
	'marionette',
	'text!apps/Lodging/LodgingView.html'
], function(
	Marionette,
	template
) {
	
	return Marionette.View.extend({
		
		className: "lodging-view",
		template: _.template(template)
		
	});
	
});
