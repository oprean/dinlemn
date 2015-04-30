define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'views/GalleryItemView',
  'text!templates/gallery.html',
], function($, _, Backbone, Marionette, GalleryItemView, galleryTpl){
	var GalleryView = Backbone.Marionette.CompositeView.extend({
		template : _.template(galleryTpl),
		childView : GalleryItemView,
		childViewContainer: ".row-gallery",
		
		initialize : function(options) {
			this.collection = options.products;
		}
		
	});
	 
	return GalleryView;
});