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
			center: { lat: 43.18780020000001, lng: -79.44592060000002 },
			zoom: 11,
			name: "Cave Spring Vineyard",
			street_address: "Cave Spring Road",
			city_address: "Beamsville, Ontario L0R 1B1",
			description: [
				"The ceremony will take place outdoors at Cave Spring Vineyard. Please note this location is not the winery located in the Village of Jordan, but the vineyard located in Beamsville. From King Street, turn onto Cave Spring Road and follow signage for ceremony parking.",
// 				"If arriving from Niagara: Follow QEW to Victoria Avenue (exit 57). Head south on Victoria Avenue until reaching King Street. Head west on King Street and look for Cave Spring Road. Turn left on Cave Spring Road and follow signage for the ceremony parking.",
// 				"If arriving from Toronto: Follow QEW to Ontario Street (exit 64). Head south on Ontario Street until reaching King Street. Head east on King Street and look for Cave Spring Road. Turn right on Cave Spring Road and follow signage for the ceremony parking.",
				"In the case of inclement weather, the ceremony will be held at an indoor area at the same location."
			]
		}
		
	});
	
});
