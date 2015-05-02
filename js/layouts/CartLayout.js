define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'text!templates/layouts/cart-layout.html',
  'modules/Constants',
  'modules/Utils',
  'modules/Events',
], function($, _, Backbone, Marionette, cartLayoutTpl, Constants, Utils, vent){
  var CartLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(cartLayoutTpl),
	regions : {
		gallery : '.gallery-container',
	},
	
	initialize : function() {
	},

	onBeforeShow : function() {
	},
  });

  return CartLayout;
});