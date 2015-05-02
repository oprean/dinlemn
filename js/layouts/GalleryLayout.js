define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'collections/WProducts',
  'views/GalleryView',
  'text!templates/layouts/gallery-layout.html',
  'modules/Constants',
  'modules/Utils',
  'modules/Events',
], function($, _, Backbone, Marionette, WProducts, GalleryView, galleryLayoutTpl, Constants, Utils, vent){
  var GalleryLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(galleryLayoutTpl),
	className : 'row',
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

	/*onRender: function () {
		console.log('onRender');
		// Get rid of that pesky wrapping-div.
		// Assumes 1 child element present in template.
		this.$el = this.$el.children();
		// Unwrap the element to prevent infinitely 
		// nesting elements during re-render.
		this.$el.unwrap();
		this.setElement(this.$el);
	},*/

	onBeforeShow : function() {
	},
  });

  return GalleryLayout;
});