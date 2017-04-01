/**
	Models the ceremony location
	
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
			place_id: "ChIJx9NpL4mtLIgRkTrINbXVXWk",
			center: { lat: 43.18280020000001, lng: -79.44592060000002 },
			zoom: 11,
			name: "Cave Spring Vineyard",
			street_address: "4424 Cave Spring Road",
			city_address: "Beamsville, Ontario L0R 1B1",
			description: [
				"The ceremony will take place outdoors at Cave Spring Vineyard. Please note this location is not the winery located in the Village of Jordan, but rather the vineyard for the winery.",
				"In the case of inclement weather, the ceremony will be held at an indoor area at the same location."
			]
		}
		
	});
	
});
