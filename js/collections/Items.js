define([
  'jquery',
  'underscore',
  'backbone',
  'models/Item'
], function($, _, Backbone, Item){
  var Items = Backbone.Collection.extend({ 
  	model: Item,
  });

  return Items;
});