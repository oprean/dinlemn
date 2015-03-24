require.config({
	urlArgs: new Date().getTime().toString(),
	"paths":{
		"jquery" : "lib/jquery-2.1.3.min",
 		"jquery.bootstrap": "lib/bootstrap.min",
		"jqueryui":"lib/jquery-ui.min",
		"underscore":"lib/lodash.min",
		"backbone":"lib/backbone-min",
		"marionette":"lib/backbone.marionette.min",
		"backbone.localStorage":"lib/backbone.localStorage.min",
		"moment":"lib/moment.min",
		"backbone.validation":"lib/backbone-validation-min",
		"text":"lib/text",
		"html2canvas" : "lib/html2canvas.min",
		"backbone.modal" : "lib/backbone.modal-bundled",
	},
	"shim":{
		"jquery.bootstrap": {
			"deps": ["jquery"]
		},
		"html2canvas": {
			"deps": ["jquery"]
		},
		"backbone":{
			"deps":["jquery","underscore"],
			"exports":"Backbone"
		},
		"backbone.marionette":{
			"deps":["jquery","underscore","backbone"],
			"exports":"Marionette"
		},
		"backbone.localStorage":{
			"deps":["backbone"],
			"exports":"Backbone"
		},
		"backbone.validation":{
			"deps":["backbone"],
			"exports":"Backbone"
		}
	}
});

require([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/NavbarView',
  'views/CarouselView',
  'layouts/EditorLayout',
  'modules/Controller',
  'modules/Events',
  'modules/backbone.validation.bootstrap',
  'jquery.bootstrap',
  'html2canvas',
  'backbone.modal',
    ], function ($, _, Backbone, Marionette, NavbarView, CarouselView, EditorLayout, Controller, vent) {    
        var app = new Backbone.Marionette.Application();
		app.addRegions({
			navbarRegion : "#navbar-container",
			carouselRegion : "#carousel-container",
			editorRegion: "#editor-container",
			modalsRegion: {
				selector: '#modals-container',
				regionClass: Backbone.Marionette.Modals
			}
		});
		
		app.addInitializer(function(){
			if( ! Backbone.History.started) Backbone.history.start();
			//app.navbarRegion.show(new NavbarView());
			//app.carouselRegion.show(new CarouselView());
			app.editorRegion.show(new EditorLayout());
			var controller = new Controller(app);
		});
		
		app.start();
   });