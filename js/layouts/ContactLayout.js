define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'text!templates/layouts/contact-layout.html',
  'modules/Constants',
  'modules/Utils',
  'modules/Events',
], function($, _, Backbone, Marionette, contactLayoutTpl, Constants, Utils, vent){
  var ContactLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(contactLayoutTpl),
	regions : {
		gallery : '.gallery-container',
	},
	
	initialize : function() {
	},

	onBeforeShow : function() {
	},
  });

  return ContactLayout;
});