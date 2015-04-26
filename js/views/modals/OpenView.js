define([
  'jquery',
  'underscore',
  'backbone',
  'collections/WProducts',
  'layouts/ProductsGridLayout',
  'modules/Constants',
  'text!templates/open.html',
  'modules/Events',
], function($, _, Backbone, WProducts, ProductsGridLayout, Constants, openTpl, vent){
	var OpenView = Backbone.Modal.extend({
		template: _.template(openTpl),
		submitEl: '.btn-submit',
		cancelEl: '.btn-cancel',

		initialize : function() {
			var self = this;
			this.products = new WProducts();
			this.products.fetch({
				success: function(collection) {
					new ProductsGridLayout({products:collection});					
				}
			});
			this.listenTo(vent, 'product.selected', function(model){
				self.model = model;
			});
		},
		
		onShow : function() {
			var ww = $(window).width();
			this.$('.bbm-modal').css('max-width', ww/2);
			Backbone.Validation.bind(this);
		},
		
		submit: function() {
			vent.trigger('editor.reload', this.model);
		}				
	});

	return OpenView;
});