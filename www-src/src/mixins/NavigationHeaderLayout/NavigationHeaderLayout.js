/**
	Options
		header		View		A view to display in the layout's header region
		content		View		A view to display in the layout's main content region
*/
define([
	'marionette',
	'text!mixins/NavigationHeaderLayout/NavigationHeaderLayout.html'
], function(
	Marionette,
	template
) {
	
	return Marionette.View.extend({
		
		className: "navigation-header-layout",
		template: _.template(template),
		
		regions: {
			heading: ".navigation-heading-region",
			content: ".navigation-header-content-region"
		},
		
		/**
		*/
		initialize: function(options) {
			
			this.header = options.header;
			this.content = options.content;
			
		},
		
		/**
		*/
		onBeforeAttach: function() {
			
			this.getRegion("heading").show(this.header);
			this.getRegion("content").show(this.content);
			
		}
		
	});
	
});
