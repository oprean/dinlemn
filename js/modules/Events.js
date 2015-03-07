define([
  'jquery',
  'underscore',
  'backbone',
  'marionette'
], function($, _, Backbone, Marionette){
	 return new Backbone.Wreqr.EventAggregator();
});