/**
*/
define([
	'marionette'
], function(
	Marionette
) {
	
	return Marionette.View.extend({
		
		className: "map-loading-view",
		template: _.template("loading map...")
		
	});
	
});
