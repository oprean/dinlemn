define([
  'jquery',
  'underscore',
  'backbone',
  'models/Disk'
], function($, _, Backbone, Disk){
  var ColumnDisks = Backbone.Collection.extend({ 
  	model: Disk
  });

  return ColumnDisks;
});