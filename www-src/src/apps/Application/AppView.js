/**
	Main application view representing the viewport for the application
	Coupled w/ Application object and encapsulates high-level layout and DOM structure for application
	Manages any modals or high-level "page" transitions
	
*/
define([
	'marionette',
	'text!apps/Application/AppView.html'
], function(
	Marionette,
	template
) {
	
	return Marionette.View.extend({
		
		className: "app-view",
		template: _.template(template),
		
		regions: {
			content: ".content-region"
		}
		
	});
	
});
