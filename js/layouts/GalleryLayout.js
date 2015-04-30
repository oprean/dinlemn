define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'collections/WProducts',
  'views/GalleryView',
  'text!templates/gallery-layout.html',
  'modules/Constants',
  'modules/Utils',
  'modules/Events',
], function($, _, Backbone, Marionette, WProducts, GalleryView, galleryLayoutTpl, Constants, Utils, vent){
  var GalleryLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(galleryLayoutTpl),
	regions : {
		gallery : '.gallery-container',
	},
	
	initialize : function() {
		var self = this;
		var products = new WProducts();
		products.fetch({
			success: function(collection) {
				var galleryView = new GalleryView({products: collection});
				console.log(galleryView);
				self.showChildView('gallery', galleryView);					
			}
		});
	},

	onBeforeShow : function() {
	},
  });

  return GalleryLayout;
});