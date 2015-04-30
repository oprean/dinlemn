define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'layouts/EditorLayout',
  'layouts/GalleryLayout',
  'modules/Events',
], function($, _, Backbone, Marionette, EditorLayout, GalleryLayout, vent){
	var Controller = Marionette.Controller.extend({
	  initialize: function() {
		this.listenTo(vent, 'showModal', function(modalView){
			app.modalsRegion.show(modalView);
		});
	  },
	  
	  home: function() {
	  	console.log('home');
		app.mainRegion.show(new GalleryLayout());
	  },
	  
	  editor: function() {
	  	console.log('editor');
		app.mainRegion.show(new EditorLayout());
	  },
	  
	  about: function() {
	  	console.log('about');
	  },
	  
	  contact: function() {
	  	console.log('contact');
	  },
	  
	  product: function(id) {
	  	console.log('product');
	  },
	  
	  gallery: function() {
	  	console.log('gallery');
		app.mainRegion.show(new GalleryLayout());
	  }
	});
	
	return Controller;
});