define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/DiskView',
  'text!templates/column.html',
  'collections/ColumnDisks',
  'models/Disk',
  'models/ColumnHeader',
  'modules/Events'
], function($, _, Backbone, Marionette, DiskView, columnTpl, ColumnDisks, Disk, ColumnHeader, vent){
	var DiskColumnView = Backbone.Marionette.CompositeView.extend({
		template : _.template(columnTpl),
		tagName : 'li',
		className : 'column',
		childView : DiskView,
		childViewContainer: "ul.disks",
		
		events : {
			'click .addNew' : 'add',
			'click .close' : 'removeColumn'
		},
		initialize : function() {
			this.collection = new ColumnDisks();
		},

		childViewOptions : function () { 
			return { disks : this.collection }; 
		},
		
		add : function() {
			this.collection.add(new Disk());
		},
		
		removeColumn : function() {
			this.destroy();
			vent.trigger('column.del');
		},
	});

  	return DiskColumnView;
});