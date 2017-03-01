/**
*/
define([
	'marionette',
	'GoogleMapsLoader',
	'mixins/MapLocationInfoView/MapLoadingView',
	'text!apps/Lodging/LodgingView.html'
], function(
	Marionette,
	GoogleMapsLoader,
	MapLoadingView,
	template
) {
	
	return Marionette.View.extend({
		
		className: "lodging-view",
		template: _.template(template),
		
		regions: {
			map: ".map"
		},
		
		/**
		*/
		initialize: function() {
			
			// set the api key for the google maps loader
			GoogleMapsLoader.key = "AIzaSyDBUanIzVsKxTlfPDzy7f2_G6skZ2KaJ4w";
			GoogleMapsLoader.version = "3.27";
			GoogleMapsLoader.timeout = 5000;
			
		},
		
		/**
		*/
		onBeforeAttach: function() {
			
			// show a loading view in the map1 region
			var loadingView = new MapLoadingView();
			this.getRegion("map").show(loadingView)
			
			// load google maps and when loaded, attach the map to the dom
			GoogleMapsLoader
				.load()
//				.done(_.bind(this.attachMap, this))
//				.fail(_.bind(this.onMapError, this));
			
		}
		
	});
	
});
