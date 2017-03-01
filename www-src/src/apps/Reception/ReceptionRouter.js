/**
*/
define([
	'marionette',
	'apps/reception/ReceptionController'
], function(
	Marionette,
	ReceptionController
) {
	
	return Marionette.AppRouter.extend({
		
		controller: new ReceptionController(),
		
		appRoutes: {
			"reception": "showReception"
		}		

	});
	
});
