define([
  'jquery',
  'underscore',
  'backbone',
  'collections/ColumnDisks'
], function($, _, Backbone, ColumnDisks){
  var ColumnsDisks = Backbone.Collection.extend({ 
  	model: ColumnDisks
  });

  return ColumnsDisks;
});