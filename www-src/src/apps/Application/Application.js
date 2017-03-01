/**
	The application object is attached to the DOM via a region and is responsible for placing content on the DOM
	
*/
define([
	'marionette',
	'apps/Application/AppView'
], function(
	Marionette,
	AppView
) {
	
	return Marionette.Application.extend({
		
		// main application region
		//	attached to dom at this element
		region: "#app-region",
		
		// radio channel name
		channelName: "app",
		
		// backbone.radio events
		radioEvents: {
			"show:content": "showContent"
		},
		
		// reference to all routers in the application
		appRouters: [],
		
		// reference to all defined app routes in the application
		//	when a new router is added to the application this is used to ensure there is not a route collision
		appRoutes: [],
		
		/**
			Adds the given router to the application, allowing it to control application flow via a URL
			@paam	Router object
			
			@return	bool
		*/
		addRouter: function(router) {
			
			// get all app routes as an array
			var appRoutes = [];
			_.each(router.appRoutes, function(value, key, list) {
				
				//	check for duplicates to warn about route collisions
				//	todo: disable this behaviour in a production environment (davev)
				if (this.appRoutes.indexOf(key) != -1) {
					console.warn("Route collision on: '"+key+"'");
				}

				appRoutes.push(key);

			}, this);
			
			// record refrence of the router and the app routes it registers
			this.appRouters.push(router);
			this.appRoutes = this.appRoutes.concat(appRoutes);
			
			return true;

		},
		
		/**
			Application before start hook
			Sets up the application environment, ensuring there's a view in the application region, etc.
			
			@return	bool
		*/
		onBeforeStart: function() {
									
			// show an app view as application content
			this.showView(new AppView());

			return true;

		},
		
		/**
			Application start hook
			The application runtime environment should now be properly setup
			Does higher-level initialization such as fetching a session user from server
			
		*/
		onStart: function() {
			
			Backbone.history.start();
			
		},
		
		/**
			Displays the provided view in the application view's "content" region
			@param	view		The view to display as application content
			
		*/
		showContent: function(view) {
		
			// show the provided view in the content region of the app
			return this.getRegion().currentView.getRegion("content").show(view);			

		}
		
	});
	
});
