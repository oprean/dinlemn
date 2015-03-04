define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/disk.html'
], function($, _, Backbone, Marionette, diskTpl){
var DiskView = Backbone.Marionette.ItemView.extend({
	template : diskTpl,
	tagName: 'li',
}); 
  return DiskView;

});