/**
	View to display the various itinerary items in a list
	
	Triggers
		When any of the itinerary items are clicked, a "click" event is triggered to indicate which item was clicked
		See the view triggers for specific names
	
*/
define([
	'backbone',
	'marionette',
	'backbone.radio',
	'mixins/MapLocationInfoView/MapLocationInfoView',
	'text!apps/Itinerary/ItineraryListView.html'
], function(
	Backbone,
	Marionette,
	Radio,
	MapLocationInfoView,
	Templates
) {
	
	return Marionette.View.extend({
		
		className: "itinerary-list-view",
		template: _.template($(Templates).filter("#itinerary-list-layout").html()),
		
		regions: {
			details: "section.itinerary-item-details"
		},
		
		ui: {
			listContainer: "section.itinerary-list",
			ceremony: ".itinerary-list-item.ceremony",
			reception: ".itinerary-list-item.reception",
			lodging: ".itinerary-list-item.hotel",
			registry: ".itinerary-list-item.registry",
			rsvp: ".itinerary-list-item.rsvp",
		},
		
		triggers: {
			"click @ui.ceremony": "click:ceremony",
			"click @ui.reception": "click:reception",
			"click @ui.lodging": "click:lodging",
			"click @ui.registry": "click:registry",
			"click @ui.rsvp": "click:rsvp"
		},
		
		/**
		*/
		onClickCeremony: function() {
			
			this.getUI("ceremony").addClass("active");
			//Backbone.history.navigate("ceremony");
			
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
			
			this.getRegion("details").show(ceremonyView);
			
		},
		
		/**
		*/
		onClickReception: function() {
			
			Backbone.history.navigate("reception");
			Radio.channel("reception").trigger("show:reception");
			
		},
		
		/**
		*/
		onClickLodging: function() {
			
			Backbone.history.navigate("lodging");
			Radio.channel("lodging").trigger("show:lodging");
			
		},
		
		/**
		*/
		onClickRegistry: function() {
			
			Backbone.history.navigate("registry");
			Radio.channel("registry").trigger("show:registry");
			
		},
		
		/**
		*/
		onClickRsvp: function() {
			
			Backbone.history.navigate("rsvp");
			Radio.channel("rsvp").trigger("show:rsvp");
			
		},
		
		/**
			Populates the list of itinerary items before the view is attached to the DOM
			
		*/
		onBeforeAttach: function() {
			
			// template to render itinerary items with a subheading
			var listItemTemplate = _.template($(Templates).filter("#itinerary-list-item").html());
			
			// template to render itinerary items with informational text
			var listItemInfoTemplate = _.template($(Templates).filter("#itinerary-list-info-item").html());
			
			// template to render itinerary items with informational text and no link
			var listItemInfoNoLinkTemplate = _.template($(Templates).filter("#itinerary-list-info-item-no-link").html());
			
			this.$el.append(listItemTemplate({
				class_name: "ceremony",
				heading: "2:00pm Ceremony",
				subheading: "Cave Spring Vineyard",
				action: "Tap for directions",
				href: "#ceremony"
			}));
			
			this.$el.append(listItemTemplate({
				class_name: "reception",
				heading: "5:00pm Reception",
				subheading: "Inn on the Twenty",
				action: "Tap for directions and menu",
				href: "#reception"
			}));
			
			this.$el.append(listItemInfoTemplate({
				class_name: "hotel",
				heading: "Where to Stay",
				information: "Rooms have been held at both Inn on the Twenty as well as the Jordan House.",
				action: "Tap for booking",
				href: "#lodging"
			}));
			
			this.$el.append(listItemTemplate({
				class_name: "registry",
				heading: "Registry",
				subheading: "Hudson's Bay",
				action: "Tap for information",
				href: "#registry"
			}));
			
			this.$el.append(listItemInfoNoLinkTemplate({
				class_name: "rsvp",
				heading: "RSVP",
				information: "Invitations will follow the Save the Date cards with RSVP details.",
			}));
						
		}
		
	});
	
});
