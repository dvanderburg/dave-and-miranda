/**
*/
define([
	'marionette',
	'backbone.radio',
	'apps/Rsvp/RsvpView',
	'mixins/NavigationHeaderLayout/NavigationHeaderView',
	'mixins/NavigationHeaderLayout/NavigationHeaderLayout'
], function(
	Marionette,
	Radio,
	RsvpView,
	NavigationHeaderView,
	NavigationHeaderLayout
) {
	
	return Marionette.Object.extend({
		
		channelName: "rsvp",
		
		radioEvents: {
			"show:rsvp": "showRsvp"
		},
		
		/**
		*/
		showRsvp: function() {
			
			var navigationHeaderView = new NavigationHeaderView({
				header_text: "RSVP"
			});
			
			var rsvpView = new RsvpView();
			
			var headerLayout = new NavigationHeaderLayout({
				header: navigationHeaderView,
				content: rsvpView
			});
			
			Radio.channel("app").trigger("show:content", headerLayout);

		}
		
	});
	
});
