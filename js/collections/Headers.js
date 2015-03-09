define([
  'jquery',
  'underscore',
  'backbone',
  'models/Header'
], function($, _, Backbone, Header){
  var Headers = Backbone.Collection.extend({ 
  	model: Header
  });

  return Headers;
});