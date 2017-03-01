/**
	Generic layout to show a header bar and a view below
	
	Options
		header_text		string		The text to display in the header
	
*/
define([
	'marionette',
	'text!mixins/NavigationHeaderLayout/NavigationHeaderView.html'
], function(
	Marionette,
	template
) {
	
	return Marionette.View.extend({
		
		className: "navigation-header-view",
		template: _.template(template),
		
		/**
		*/
		initialize: function(options) {
			
			this.header_text = options.header_text;
			
		},
		
		/**
		*/
		serializeData: function() {
			
			return {
				header_text: this.header_text
			}
			
		}
		
	});
	
});
