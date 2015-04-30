define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'text!templates/gallery-item.html',
], function($, _, Backbone, Marionette, galleryItemTpl){
	var GalleryItemView = Backbone.Marionette.ItemView.extend({
		template : _.template(galleryItemTpl),
	});
	 
	return GalleryItemView;
});