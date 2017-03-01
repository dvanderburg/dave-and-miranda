/**
	View to serve as a layout for the wedding program/itinerary
	Arranges child views to display a program header along
	
*/
define([
	'backbone',
	'marionette',
	'apps/Itinerary/DateLocationView',
	'apps/Itinerary/ItineraryHeaderView',
	'apps/Itinerary/ItineraryListView',
	'text!apps/Itinerary/ItineraryView.html'
], function(
	Backbone,
	Marionette,
	DateLocationView,
	ItineraryHeaderView,
	ItineraryListView,
	template
) {
	
	return Marionette.View.extend({
		
		className: "itinerary-view",
		template: _.template(template),
		
		regions: {
			header: ".header-region",
			date: ".date-region",
			itinerary: ".itinerary-list-region"
		},
		
		/**
		*/
		onBeforeAttach: function() {
			
			var header = new ItineraryHeaderView();
			var dateLocation = new DateLocationView();
			var itineraryList = new ItineraryListView();
			
			this.getRegion("header").show(header);
			this.getRegion("date").show(dateLocation);
			this.getRegion("itinerary").show(itineraryList);
			
		}
		
	});
	
});
