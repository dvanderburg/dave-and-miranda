/**
*/
define([
	'marionette',
	'backbone.radio',
	'apps/Itinerary/ItineraryView',
	'apps/Itinerary/ItineraryListView',
	'mixins/MapLocationInfoView/MapLocationInfoView',
	'mixins/NavigationHeaderLayout/NavigationHeaderView',
	'mixins/NavigationHeaderLayout/NavigationHeaderLayout'
], function(
	Marionette,
	Radio,
	ItineraryView,
	ItineraryListView,
	MapLocationInfoView,
	NavigationHeaderView,
	NavigationHeaderLayout
) {
	
	return Marionette.Object.extend({
		
		channelName: "ceremony",
		
		radioEvents: {
			"show:ceremony": "showCeremony"
		},
		
		/**
		*/
		showCeremony: function() {
			
			var itineraryView = new ItineraryView({
				section: ItineraryListView.CEREMONY
			});
			
			Radio.channel("app").trigger("show:content", itineraryView);
			return;
			
			var navigationHeaderView = new NavigationHeaderView({
				header_text: "Ceremony"
			});
			
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
			
			var headerLayout = new NavigationHeaderLayout({
				header: navigationHeaderView,
				content: ceremonyView
			});
			
			Radio.channel("app").trigger("show:content", headerLayout);

		}
		
	});
	
});
