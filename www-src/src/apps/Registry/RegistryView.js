/**
*/
define([
	'marionette',
	'text!apps/Registry/RegistryView.html'
], function(
	Marionette,
	template
) {
	
	return Marionette.View.extend({
		
		className: "registry-view",
		template: _.template(template)
		
	});
	
});
