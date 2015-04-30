define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'text!templates/layouts/about-layout.html',
  'modules/Constants',
  'modules/Utils',
  'modules/Events',
], function($, _, Backbone, Marionette, aboutLayoutTpl, Constants, Utils, vent){
  var AboutLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(aboutLayoutTpl),
	regions : {
		gallery : '.gallery-container',
	},
	
	initialize : function() {
	},

	onBeforeShow : function() {
	},
  });

  return AboutLayout;
});