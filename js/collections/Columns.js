define([
  'jquery',
  'underscore',
  'backbone',
  'collections/Disks'
], function($, _, Backbone, Disks){
  var Columns = Backbone.Collection.extend({ 
  	model: Disks
  });

  return Columns;
});