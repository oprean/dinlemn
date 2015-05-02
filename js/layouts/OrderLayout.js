define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'text!templates/layouts/order-layout.html',
  'modules/Constants',
  'modules/Utils',
  'modules/Events',
], function($, _, Backbone, Marionette, orderLayoutTpl, Constants, Utils, vent){
  var OrderLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(orderLayoutTpl),
	regions : {
		gallery : '.gallery-container',
	},
	
	initialize : function() {
	},

	onBeforeShow : function() {
	},
  });

  return OrderLayout;
});