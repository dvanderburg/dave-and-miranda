/**
*/
define([
	'marionette',
	'backbone.radio',
	'apps/Lodging/LodgingView',
	'mixins/NavigationHeaderLayout/NavigationHeaderView',
	'mixins/NavigationHeaderLayout/NavigationHeaderLayout'
], function(
	Marionette,
	Radio,
	LodgingView,
	NavigationHeaderView,
	NavigationHeaderLayout
) {
	
	return Marionette.Object.extend({
		
		channelName: "lodging",
		
		radioEvents: {
			"show:lodging": "showLodging"
		},
		
		/**
		*/
		showLodging: function() {
			
			var navigationHeaderView = new NavigationHeaderView({
				header_text: "Where to Stay"
			});
			
			var lodgingView = new LodgingView();
			
			var headerLayout = new NavigationHeaderLayout({
				header: navigationHeaderView,
				content: lodgingView
			});
			
			Radio.channel("app").trigger("show:content", headerLayout);

		}
		
	});
	
});
