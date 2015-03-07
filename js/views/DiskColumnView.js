define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/DiskView',
  'text!templates/column.html',
  'collections/ColumnDisks',
  'models/Disk',
  'models/ColumnHeader'
], function($, _, Backbone, Marionette, DiskView, monthTpl, ColumnDisks, Disk, ColumnHeader){
	var MonthView = Backbone.Marionette.CompositeView.extend({
		template : _.template(monthTpl),
		tagName : 'li',
		className : 'column',
		childView : DiskView,
		childViewContainer: "ul.disks",
		events : {
			'click .addNew' : 'add'
		},
		initialize : function() {
			this.column = new ColumnHeader(); 
			this.collection = new ColumnDisks();
		},
		
		add : function() {
			this.collection.add(new Disk());
		},
		
		templateHelpers : {
			header : this.column
		}
		
	});

  	return MonthView;
});