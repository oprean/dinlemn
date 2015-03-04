define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/DiskView',
  'text!templates/month.html',
  'collections/MonthDisks',
  'models/Disk'
], function($, _, Backbone, Marionette, DiskView, monthTpl, MonthDisks, Disk){
	var MonthView = Backbone.Marionette.CompositeView.extend({
		template : _.template(monthTpl),
		tagName : 'div',
		className : 'month-list',
		childView : DiskView,
		childViewContainer: "ul.disks",
		events : {
			'click .addNew' : 'add'
		},
		initialize : function() {
			this.collection = new MonthDisks();
		},
		
		add : function() {
			this.collection.add(new Disk());
		}
		
	});

  	return MonthView;
});