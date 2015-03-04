define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/plaque.html'
], function($, _, Backbone, Marionette, plaqueTpl){
	var PlaqueView = Backbone.Marionette.ItemView.extend({
		className : 'plaque',
		template :  _.template(plaqueTpl),
	});
	
	return PlaqueView;
});