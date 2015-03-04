require.config({
	"paths":{
		"jquery" : "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery",
		"jqueryui":"//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min",
		"underscore":"//cdnjs.cloudflare.com/ajax/libs/lodash.js/3.3.1/lodash.min",
		"backbone":"//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min",
		"marionette":"//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/2.4.0/backbone.marionette.min",
		"backbone.localStorage":"//cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.16/backbone.localStorage-min",
		"moment":"//cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min",
		"contextmenu":"//cdnjs.cloudflare.com/ajax/libs/jquery-contextmenu/1.6.5/jquery.contextMenu.min",
		"backbone.validation":"//cdnjs.cloudflare.com/ajax/libs/backbone.validation/0.11.3/backbone-validation-min",
		"text":"//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text"
	},
	"shim":{
		"backbone":{
			"deps":["jquery","underscore"],
			"exports":"Backbone"
		},
		"marionette":{
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
  'layouts/CalendarLayout'
    ], function ($, _, Backbone, Marionette, CalendarLayout) {    
        var app = new Backbone.Marionette.Application();
		app.addRegions({
			calendarRegion: "#calendar",
			previewRegion: '#preview'
		});
		
		app.addInitializer(function(){
			if( ! Backbone.History.started) Backbone.history.start();
			app.calendarRegion.show(new CalendarLayout());
		});
		
		app.start();
   });