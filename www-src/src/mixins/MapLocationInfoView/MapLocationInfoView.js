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
	template
) {
	
	return Marionette.View.extend({
		
		className: "map-location-info-view",
		template: _.template(template),
		
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
			
			this.place_id = options.place_id;
			this.center = { lat: 43.16712592, lng: -79.43939209 };
			this.zoom = 11;
			
			this.header_text = options.header_text;
			this.street_address = options.street_address;
			this.city_address = options.city_address;
			this.description = _.isArray(options.description) ? options.description : [ options.description ];	// ensure description is an array, each element will be made a paragraph
			
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
			
			this.getRegion("map").show(reloadView);
			
		},
		
		/**
		*/
		attachMap: function(GoogleMaps) {
			
			var mapContainer = this.getUI("map")[0];
			
			var map = new GoogleMaps.Map(mapContainer, {
				center: { lat: 43.16712592, lng: -79.43939209 },
				zoom: 11
			});
			
			var service = new GoogleMaps.places.PlacesService(map);
			
			service.getDetails({
				placeId: this.place_id
			}, function(result, status) {
				
				var marker = new GoogleMaps.Marker({
					map: map,
					place: {
						placeId: result.place_id,
						location: result.geometry.location
					}
				});
				
			});
			
		},
		
		/**
		*/
		serializeData: function() {
			
			var description = "";
			_.each(this.description, function(paragraph) {
				description += "<p>"+paragraph+"</p>";
			});
			
			return {
				header_text: this.header_text,
				street_address: this.street_address,
				city_address: this.city_address,
				description: description
			}
			
		}
		
	});
	
});
