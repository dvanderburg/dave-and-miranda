/**
*/
define([
	'marionette',
	'backbone.radio',
	'mixins/MapLocationInfoView/MapLocationInfoView',
	'mixins/NavigationHeaderLayout/NavigationHeaderView',
	'mixins/NavigationHeaderLayout/NavigationHeaderLayout'
], function(
	Marionette,
	Radio,
	MapLocationInfoView,
	NavigationHeaderView,
	NavigationHeaderLayout
) {
	
	return Marionette.Object.extend({
		
		channelName: "reception",
		
		radioEvents: {
			"show:reception": "showReception"
		},
		
		/**
		*/
		showReception: function() {
			
			var navigationHeaderView = new NavigationHeaderView({
				header_text: "Reception"
			});
			
			var receptionView = new MapLocationInfoView({
				place_id: "ChIJhQsx0PxI04kRF6AipEcYixI",
				center: { lat: 43.149194, lng: -79.36837300000002 },
				zoom: 12,
				header_text: "Inn on the Twenty",
				street_address: "3845 Main Street",
				city_address: "Jordan, Ontario L0R 1S0",
				description: [
					"Cocktail and hors d'oeuvre reception at 5:00 pm. Enjoy dinner at 6:00 pm with Cave Spring wine followed by open bar and dancing.",
					"Parking available on site.",
				]
			});
			
			var headerLayout = new NavigationHeaderLayout({
				header: navigationHeaderView,
				content: receptionView
			});
			
			Radio.channel("app").trigger("show:content", headerLayout);

		}
		
	});
	
});
