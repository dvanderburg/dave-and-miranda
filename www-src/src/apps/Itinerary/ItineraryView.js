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
	'mixins/MapLocationInfoView/MapLocationInfoView',
	'text!apps/Itinerary/ItineraryView.html'
], function(
	Backbone,
	Marionette,
	DateLocationView,
	ItineraryHeaderView,
	ItineraryListView,
	MapLocationInfoView,
	template
) {
	
	return Marionette.View.extend({
		
		className: "itinerary-view",
		template: _.template(template),
		
		regions: {
			header: ".header-region",
			date: ".date-region",
			itinerary: ".itinerary-list-region",
			itineraryInfo: ".itinerary-info-region"
		},
		
		/**
			Event handler for when the ceremony navigation element is clicked
			Displays the ceremony details in the itinerary info region
			
		*/
		onClickCeremony: function() {
			
			var ceremonyView = new MapLocationInfoView({
				place_id: "ChIJx9NpL4mtLIgRkTrINbXVXWk",
				center: { lat: 43.15280020000001, lng: -79.44592060000002 },
				zoom: 11,
				header_text: "Cave Spring Vineyard",
				street_address: "4424 Cave Spring Road",
				city_address: "Beamsville, Ontario L0R 1B1",
				description: [
					"The ceremony will take place outdoors at Cave Spring Vineyard. Please note this location is not the winery located in the Village of Jordan, but rather the vineyard for the winery.",
					"In the case of inclement weather, the ceremony will be held at an indoor area at the same location."
				]
			});
			
			this.getRegion("itineraryInfo").show(ceremonyView);
			
		},
		
		/**
		*/
		onBeforeAttach: function() {
			
			var header = new ItineraryHeaderView();
			var dateLocation = new DateLocationView();
			var itineraryList = new ItineraryListView();
			
			itineraryList.on("click:ceremony", this.onClickCeremony, this);
			
			this.getRegion("header").show(header);
			this.getRegion("date").show(dateLocation);
			this.getRegion("itinerary").show(itineraryList);
			
		}
		
	});
	
});
