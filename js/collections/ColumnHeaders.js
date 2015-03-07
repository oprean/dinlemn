define([
  'jquery',
  'underscore',
  'backbone',
  'models/ColumnHeader'
], function($, _, Backbone, ColumnHeader){
  var ColumnHeaders = Backbone.Collection.extend({ 
  	model: ColumnHeader
  });

  return ColumnHeaders;
});