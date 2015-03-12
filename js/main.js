require.config({
	urlArgs: new Date().getTime().toString(),
	"paths":{
		"jquery" : "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery",
 		"jquery.bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min",
		"jqueryui":"//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min",
		"underscore":"//cdnjs.cloudflare.com/ajax/libs/lodash.js/3.3.1/lodash.min",
		"backbone":"//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min",
		"marionette":"//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/2.4.0/backbone.marionette.min",
		"backbone.localStorage":"//cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.16/backbone.localStorage-min",
		"moment":"//cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min",
		"contextmenu":"//cdnjs.cloudflare.com/ajax/libs/jquery-contextmenu/1.6.5/jquery.contextMenu.min",
		"backbone.validation":"//cdnjs.cloudflare.com/ajax/libs/backbone.validation/0.11.3/backbone-validation-min",
		"text":"//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text",
		"html2canvas" : "//cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas",
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