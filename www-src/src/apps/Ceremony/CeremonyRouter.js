/**
*/
define([
	'marionette',
	'apps/Ceremony/CeremonyController'
], function(
	Marionette,
	CeremonyController
) {
	
	return Marionette.AppRouter.extend({
		
		controller: new CeremonyController(),
		
		appRoutes: {
			"ceremony": "showCeremony"
		}		

	});
	
});
