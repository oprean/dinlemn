define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/navbar.html',
], function($, _, Backbone, Marionette, navbarTpl){
	var NavbarView = Backbone.Marionette.ItemView.extend({
		template : _.template(navbarTpl),
	});
	 
	return NavbarView;
});