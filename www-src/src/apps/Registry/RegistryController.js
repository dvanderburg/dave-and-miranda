/**
*/
define([
	'marionette',
	'backbone.radio'
], function(
	Marionette,
	Radio
) {
	
	return Marionette.Object.extend({
		
		/**
		*/
		showRegistry: function() {
			
			console.log("Registry!");
			
//			Radio.channel("app").trigger("show:content", headerLayout);

		}
		
	});
	
});
