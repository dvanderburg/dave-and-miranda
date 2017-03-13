/**
*/
define([
	'marionette',
	'text!apps/Rsvp/RsvpView.html'
], function(
	Marionette,
	template
) {
	
	return Marionette.View.extend({
		
		className: "rsvp-view",
		template: _.template(template)
		
	});
	
});
