define([
  'jquery',
  'underscore',
  'backbone',
  'collections/WProducts',
  'layouts/ProductsGridLayout',
  'modules/Constants',
  'text!templates/open.html'
], function($, _, Backbone, WProducts, ProductsGridLayout, Constants, openTpl){
	var OpenView = Backbone.Modal.extend({
		template: _.template(openTpl),
		submitEl: '.btn-submit',
		cancelEl: '.btn-cancel',

		initialize : function() {
			this.products = new WProducts();
			this.products.fetch({
				success: function(collection) {
					new ProductsGridLayout({products:collection});					
				}
			});
		},
		
		onShow : function() {
			var ww = $(window).width();
			this.$('.bbm-modal').css('max-width', ww/2);
			Backbone.Validation.bind(this);
		},
		
		onRender: function() {
			console.log('render');
		},

		beforeSubmit : function() {
		},
		
		submit: function() {
			this.fillModel(this.realModel);
		}				
	});

	return OpenView;
});