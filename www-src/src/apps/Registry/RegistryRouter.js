/**
*/
define([
	'marionette',
	'apps/Registry/RegistryController'
], function(
	Marionette,
	RegistryController
) {
	
	return Marionette.AppRouter.extend({
		
		controller: new RegistryController(),
		
		appRoutes: {
			"registry": "showRegistry"
		}		

	});
	
});
