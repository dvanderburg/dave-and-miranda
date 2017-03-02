/**
*/
define([
	'marionette',
	'backbone.radio',
	'apps/Registry/RegistryView',
	'mixins/NavigationHeaderLayout/NavigationHeaderView',
	'mixins/NavigationHeaderLayout/NavigationHeaderLayout'
], function(
	Marionette,
	Radio,
	RegistryView,
	NavigationHeaderView,
	NavigationHeaderLayout
) {
	
	return Marionette.Object.extend({
		
		channelName: "registry",
		
		radioEvents: {
			"show:registry": "showRegistry"
		},
		
		/**
		*/
		showRegistry: function() {
			
			var navigationHeaderView = new NavigationHeaderView({
				header_text: "Registry"
			});
			
			var registryView = new RegistryView();
			
			var headerLayout = new NavigationHeaderLayout({
				header: navigationHeaderView,
				content: registryView
			});
			
			Radio.channel("app").trigger("show:content", headerLayout);

		}
		
	});
	
});
