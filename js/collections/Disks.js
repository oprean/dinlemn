define([
  'jquery',
  'underscore',
  'backbone',
  'models/Disk'
], function($, _, Backbone, Disk){
  var Disks = Backbone.Collection.extend({ 
  	model: Disk,
  });

  return Disks;
});