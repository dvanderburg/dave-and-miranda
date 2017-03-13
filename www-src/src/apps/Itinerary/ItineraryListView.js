	/**
*/
define([
	'backbone',
	'marionette',
	'backbone.radio',
	'text!apps/Itinerary/ItineraryListView.html'
], function(
	Backbone,
	Marionette,
	Radio,
	Templates
) {
	
	return Marionette.View.extend({
		
		className: "itinerary-list-view",
		template: _.noop,
		
		ui: {
			ceremony: ".itinerary-list-item.ceremony",
			reception: ".itinerary-list-item.reception",
			lodging: ".itinerary-list-item.hotel",
			registry: ".itinerary-list-item.registry",
			rsvp: ".itinerary-list-item.rsvp",
		},
		
		events: {
			"click @ui.ceremony": "onClickCeremony",
			"click @ui.reception": "onClickReception",
			"click @ui.lodging": "onClickLodging",
			"click @ui.registry": "onClickRegistry",
			"click @ui.rsvp": "onClickRsvp"
		},
		
		/**
		*/
		onClickCeremony: function() {
			
			Backbone.history.navigate("ceremony");
			Radio.channel("ceremony").trigger("show:ceremony");
			
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
