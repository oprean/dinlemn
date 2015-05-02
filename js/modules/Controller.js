define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'layouts/HomeLayout',
  'layouts/EditorLayout',
  'layouts/AboutLayout',
  'layouts/ContactLayout',
  'layouts/OrderLayout',
  'layouts/CartLayout',
  'layouts/ShopLayout',
  'layouts/GalleryLayout',
  'modules/Events',
], function($, _, Backbone, Marionette, 
	HomeLayout, EditorLayout, AboutLayout, ContactLayout, OrderLayout, CartLayout, ShopLayout, GalleryLayout, 
	vent){
	var Controller = Marionette.Controller.extend({
	  initialize: function() {
		this.listenTo(vent, 'showModal', function(modalView){
			app.modalsRegion.show(modalView);
		});
	  },
	  
	  home: function() {
	  	console.log('home');
		$('body').css('background', 'inherit');
		app.mainRegion.show(new HomeLayout());
	  },
	  
	  editor: function(id) {
	  	console.log('editor/' + id);
		$('body').css('background', 'url("assets/img/wall/graphy.png")');
		app.mainRegion.show(new EditorLayout({id:id}));
	  },
	  
	  about: function() {
	  	console.log('about');
		$('body').css('background', 'inherit');
		app.mainRegion.show(new AboutLayout());
	  },
	  
	  contact: function() {
	  	console.log('contact');
		$('body').css('background', 'inherit');
		app.mainRegion.show(new ContactLayout());
		
	  },
	  
	  order: function() {
	  	console.log('order');
		$('body').css('background', 'inherit');
		app.mainRegion.show(new OrderLayout());
		
	  },

	  cart: function() {
	  	console.log('cart');
		$('body').css('background', 'inherit');
		app.mainRegion.show(new CartLayout());
		
	  },
	  
	  shop: function(id) {
	  	console.log('shop');
		$('body').css('background', 'inherit');
		app.mainRegion.show(new ShopLayout(id));
	  },
	  
	  shopProduct: function(id) {
	  	console.log('shop product');
		$('body').css('background', 'inherit');
	  },
	  
	  gallery: function() {
	  	console.log('gallery');
		$('body').css('background', 'inherit');
		app.mainRegion.show(new GalleryLayout());
	  },
	  
	  galleryItem: function(id) {
	  	console.log('gallery item');
		$('body').css('background', 'inherit');
	  },
	});
	
	return Controller;
});