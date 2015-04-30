define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'layouts/HomeLayout',
  'layouts/EditorLayout',
  'layouts/AboutLayout',
  'layouts/ContactLayout',
  'layouts/ShopLayout',
  'layouts/GalleryLayout',
  'modules/Events',
], function($, _, Backbone, Marionette, HomeLayout, EditorLayout, AboutLayout, ContactLayout, ShopLayout, GalleryLayout, vent){
	var Controller = Marionette.Controller.extend({
	  initialize: function() {
		this.listenTo(vent, 'showModal', function(modalView){
			app.modalsRegion.show(modalView);
		});
	  },
	  
	  home: function() {
	  	console.log('home');
		app.mainRegion.show(new HomeLayout());
	  },
	  
	  editor: function() {
	  	console.log('editor');
		app.mainRegion.show(new EditorLayout());
	  },
	  
	  about: function() {
	  	console.log('about');
		app.mainRegion.show(new AboutLayout());
	  },
	  
	  contact: function() {
	  	console.log('contact');
		app.mainRegion.show(new ContactLayout());
	  },
	  
	  shop: function(id) {
	  	console.log('shop');
		app.mainRegion.show(new ShopLayout());
	  },
	  
	  shopProduct: function(id) {
	  	console.log('shop product');
	  },
	  
	  gallery: function() {
	  	console.log('gallery');
		app.mainRegion.show(new GalleryLayout());
	  },
	  
	  galleryItem: function(id) {
	  	console.log('gallery item');
	  },
	});
	
	return Controller;
});