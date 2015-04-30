define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'text!templates/gallery-layout.html',
  'modules/Constants',
  'modules/Utils',
  'modules/Events',
], function($, _, Backbone, Marionette, galleryLayoutTpl, Constants, Utils, vent){
  var GalleryLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(galleryLayoutTpl),
	regions : {
		product : '#product-container',
		controls : '#controls-container',
	},
	
	initialize : function() {

	},

	onBeforeShow : function() {

	},
  });

  return GalleryLayout;
});