require.config({
	urlArgs: new Date().getTime().toString(),
	"paths":{
		"jquery" : "lib/jquery-2.1.3.min",
 		"jquery.bootstrap": "lib/bootstrap.min",
		"jqueryui":"lib/jquery-ui.min",
		"jqueryui.custom":"modules/jquery-ui.custom",
		"underscore":"lib/lodash.min",
		
		"backbone":"lib/backbone-min",
		"backbone.marionette":"lib/backbone.marionette.min",
		"backbone.localStorage":"lib/backbone.localStorage.min",
		"backbone.validation":"lib/backbone-validation-min",		
		
		"moment":"lib/moment.min",

		"text":"lib/text",
		"i18n":"lib/i18n",
		"polyglot":"lib/polyglot.min",
		
		"html2canvas" : "lib/html2canvas-stable",
		
		"backbone.modal" : "lib/backbone.modal",
		"backbone.marionette.modals" : "lib/backbone.marionette.modals",

		"backgrid" : "lib/backgrid.min",
		
		"parse" : "lib/parse-1.4.0.min",
	},
	
	"shim":{
		"jquery.bootstrap": {
			"deps": ["jquery"]
		},
		"jqueryui.custom": {
			"deps": ["jqueryui"]
		},
		"html2canvas": {
			"deps": ["jquery"],
			"exports":"html2canvas"
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
		},
		"backgrid":{
			"deps":["jquery", "underscore", "backbone"],
			"exports": "Backgrid"
		}
	}
});

require([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'modules/Router',
  'views/TopHeaderView',
  'views/FooterView',
  'modules/Utils',
  'modules/Constants',
  'modules/Events',
  'i18n!nls/labels',
  'modules/backbone.validation.bootstrap',
  'jqueryui',
  'jqueryui.custom',
  'jquery.bootstrap',
  'html2canvas',
  'backbone.modal',
  'backbone.marionette.modals',
  'backgrid',
  'polyglot',
  'parse',
    ], function ($, _, Backbone, Marionette, Router, TopHeaderView, FooterView, Utils, Constants, vent, translations) {    
        window.app = new Backbone.Marionette.Application();
		app.addRegions({
			headerRegion : "#header-container",
			mainRegion: "#main-container",
			footerRegion: "#footer-container",
			modalsRegion: {
				selector: '#modals-container',
				regionClass: Backbone.Marionette.Modals
			}
		});
		
		app.addInitializer(function(){
			app.language = window.navigator.userLanguage || window.navigator.language;
			app.env = Utils.bootstrapEnv();
			//console.log('lang: ' + app.language + 'env: ' + app.env);
			Parse.initialize(Constants.parse.AppID, Constants.parse.JsKey);
			window.polyglot = new Polyglot({phrases: translations});
			app.router = new Router();
			if( ! Backbone.History.started) Backbone.history.start();
			app.headerRegion.show(new TopHeaderView());
			app.footerRegion.show(new FooterView());
		});
		
		app.start();
   });