define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'modules/Events',
], function($, _, Backbone, Marionette, vent){
	var Controller = Marionette.Object.extend({
	  initialize: function(app) {
	  	var self = this;
	  	this.app = app;
		this.listenTo(vent, 'showModal', function(modalView){
			self.app.modalsRegion.show(modalView);
		});
	  },
	});
	
	return Controller;
});