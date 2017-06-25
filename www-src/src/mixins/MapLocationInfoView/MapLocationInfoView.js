/**
*/
define([
	'marionette',
	'GoogleMapsLoader',
	'mixins/MapLocationInfoView/MapLoadingView',
	'mixins/MapLocationInfoView/MapReloadView',
	'text!mixins/MapLocationInfoView/MapLocationInfoView.html'
], function(
	Marionette,
	GoogleMapsLoader,
	MapLoadingView,
	MapReloadView,
	Templates
) {
	
	return Marionette.View.extend({
		
		className: "map-location-info-view",
		template: _.template($(Templates).filter("#map-location-layout").html()),
		
		regions: {
			map: ".location-map"
		},
		
		ui: {
			map: ".location-map"
		},
		
		/**
		*/
		initialize: function(options) {
			
			// set the api key for the google maps loader
			GoogleMapsLoader.key = "AIzaSyDBUanIzVsKxTlfPDzy7f2_G6skZ2KaJ4w";
			GoogleMapsLoader.version = "3.27";
			GoogleMapsLoader.timeout = 5000;
			
		},
		
		/**
		*/
		onBeforeAttach: function() {
			
			// show a loading view in the map region
			var loadingView = new MapLoadingView();
			this.getRegion("map").show(loadingView)
			
			// load google maps and when loaded, attach the map to the dom
			GoogleMapsLoader
				.load()
				.done(_.bind(this.attachMap, this))
				.fail(_.bind(this.onMapError, this));
				
		},
		
		/**
		*/
		onMapError: function(e, xhr, settings, exception) {
			
			var reloadView = new MapReloadView();
			
			reloadView.on("click:reload", this.onBeforeAttach, this);
			
			var mapRegion = this.getRegion("map");
			
			// if the map region is undefined the view must have been closed
			//	the user most likely navigated from the page while the map was loading
			//	do not bother to the error view with nothing to attach it to
			if (_.isUndefined(mapRegion)) {
				return;
			}
			
			mapRegion.show(reloadView);
			
		},
		
		/**
		*/
		attachMap: function(GoogleMaps) {
			
			var that = this;
			
			var mapContainer = this.getUI("map")[0];
			
			// if the map container is not on the dom the view must have been closed
			//	the user most likely navigated from the page while the map was loading
			//	do not bother to attach the map with nothing to attach to
			if (_.isUndefined(mapContainer)) {
				return;
			}
			
			var map = new GoogleMaps.Map(mapContainer, {
				center: this.model.get("center"),
				zoom: this.model.get("zoom")
			});
			
			var service = new GoogleMaps.places.PlacesService(map);
			
			service.getDetails({
				placeId: this.model.get("place_id")
			}, function(result, status) {
				
				// create template function for the content of the info window
				var infoWindowTmpl = _.template($(Templates).filter("#map-info-window").html());
				
				// create an info window for when the marker is clicked
				var infoWindow = new GoogleMaps.InfoWindow({
					content: infoWindowTmpl(result)
				});
				
				// place a marker on the map labeled with the name of the location
				var marker = new GoogleMaps.Marker({
					map: map,
					place: {
						placeId: result.place_id,
						location: result.geometry.location
					}
				});
				
				// open the info window, pointing to the marker
				infoWindow.open(map, marker);
				
				// open the info window any time the marker is clicked
				marker.addListener("click", function() {
					infoWindow.open(map, marker);
				});
				
			});
			
		},
		
		/**
		*/
		serializeData: function() {
			
			var description = "";
			_.each(this.model.get("description"), function(paragraph) {
				description += "<p>"+paragraph+"</p>";
			});
			
			return {
				header_text: this.model.get("name"),
				street_address: this.model.get("street_address"),
				city_address: this.model.get("city_address"),
				description: description
			}
			
		}
		
	});
	
});
