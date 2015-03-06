define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/plaque.html',
  'models/Plaque'
], function($, _, Backbone, Marionette, plaqueTpl, Plaque){
	var PlaqueView = Backbone.Marionette.ItemView.extend({
		className : 'plaque',
		template :  _.template(plaqueTpl),
		
		initialize : function() {
			this.model = new Plaque();
		}
	});
	
	return PlaqueView;
});