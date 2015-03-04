define([
  'jquery',
  'underscore',
  'backbone',
  'models/Disk'
], function($, _, Backbone, Disk){
  var MonthDisks = Backbone.Collection.extend({ 
  	model: Disk
  });

  return MonthDisks;
});