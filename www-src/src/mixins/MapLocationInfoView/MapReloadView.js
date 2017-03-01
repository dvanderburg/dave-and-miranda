/**
*/
define([
	'marionette',
	'text!mixins/MapLocationInfoView/MapReloadView.html'
], function(
	Marionette,
	template
) {
	
	return Marionette.View.extend({
		
		className: "map-reload-view",
		template: _.template(template),
		
		ui: {
			message: ".error",
			button: ".button"
		},
		
		triggers: {
			"click @ui.button": "click:reload"
		}
		
	});
	
});
