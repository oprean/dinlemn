define([
  'jquery',
  'underscore',
  'backbone',
  'collections/Items'
], function($, _, Backbone, Items){
  var Columns = Backbone.Collection.extend({ 
  	model: Items
  });

  return Columns;
});