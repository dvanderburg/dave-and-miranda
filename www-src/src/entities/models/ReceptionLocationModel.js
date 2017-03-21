/**
	Models the reception location
	
	Options
		place_id		Google Maps place id of the location
		center			Object containing latitude and longitude of the location to center Google Maps
		zoom			Zoom level of a Google Map displaying the location
		name			The name of the location
		street_address	The street number and name
		city_address	The city name, province, and postal code
		description		Array of strings where each element of the array represents a paragraph of text
	
*/
define([
	'backbone'
], function(
	Backbone
) {
	
	return Backbone.Model.extend({
		
		defaults: {
			place_id: "ChIJhQsx0PxI04kRF6AipEcYixI",
			center: { lat: 43.149194, lng: -79.36837300000002 },
			zoom: 12,
			name: "Inn on the Twenty",
			street_address: "3845 Main Street",
			city_address: "Jordan, Ontario L0R 1S0",
			description: [
				"Cocktail and hors d'oeuvre reception at 5:00 pm. Enjoy dinner at 6:00 pm with Cave Spring wine followed by open bar and dancing.",
				"Parking available on site.",
			]
		}
		
	});
	
});
