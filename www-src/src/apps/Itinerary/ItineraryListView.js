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
		onClickCeremony: function(view, event) {
			
			$(".itinerary-list-item", this.el).removeClass("active");
			$(".itinerary-list-item.ceremony", this.el).addClass("active");
//			Backbone.history.navigate("ceremony");
			
		},
		
		/**
		*/
		onClickReception: function() {
			
			$(".itinerary-list-item", this.el).removeClass("active");
			$(".itinerary-list-item.reception", this.el).addClass("active");
//			Backbone.history.navigate("reception");
			
		},
		
		/**
		*/
		onClickLodging: function() {
			
			$(".itinerary-list-item", this.el).removeClass("active");
			$(".itinerary-list-item.hotel", this.el).addClass("active");
// 			Backbone.history.navigate("lodging");
			
		},
		
		/**
		*/
		onClickRegistry: function() {
			
			$(".itinerary-list-item", this.el).removeClass("active");
			$(".itinerary-list-item.registry", this.el).addClass("active");
// 			Backbone.history.navigate("registry");
			
		},
		
		/**
		*/
		onClickRsvp: function() {
			
			$(".itinerary-list-item", this.el).removeClass("active");
			$(".itinerary-list-item.rsvp", this.el).addClass("active");
// 			Backbone.history.navigate("rsvp");
			
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
