define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'text!templates/product-preview.html',
], function($, _, Backbone, Marionette, productPreviewTpl){
	var ProductPreviewView = Backbone.Marionette.ItemView.extend({
		template : _.template(productPreviewTpl),
	});
	 
	return ProductPreviewView;
});