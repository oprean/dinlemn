define([
  'jquery',
  'underscore',
  'backbone',
  'models/Column'
], function($, _, Backbone, Column){
  var Columns = Backbone.Collection.extend({ 
  	model: Column
  });

  return Columns;
});