define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'text!templates/jumbotron.html',
  'modules/Events',
], function($, _, Backbone, Marionette, jumbotronTpl, vent){
	var JumbotronView = Backbone.Marionette.ItemView.extend({
		template : _.template(jumbotronTpl),
		
		initialize : function() {
		},
	});
	 
	return JumbotronView;
});