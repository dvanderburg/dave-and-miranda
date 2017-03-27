/**
*/
define([
	'marionette',
	'text!apps/Itinerary/ItineraryHeaderView.html'
], function(
	Marionette,
	template
) {
	
	return Marionette.View.extend({
		
		// class can toggle between a large and small header, defaults to large
		//	this class is toggled by this.setLargeHeaderMode
		className: "itinerary-header-view large-header-mode",
		
		template: _.template(template),
		
		ui: {
			backButton: ".back-button",
			smallHeaderText: ".small-header-text"
		},
		
		/**
			Sets the small header text in the view
			
		*/
		setSmallHeaderText: function(text) {
			this.getUI("smallHeaderText").html(text);
		},
		
		/**
			Controls if the view displays the "large" header or not
			The large header displays text, date, etc. while the small header displays text and a navigation button linking to the main itinerary section
			
		*/
		setLargeHeaderMode: function(value) {
			
			if (!_.isUndefined(value) && value == true) {
				this.$el.addClass("large-header-mode");
			} else {
				this.$el.removeClass("large-header-mode")
			}
			
		}
		
	});
	
});
