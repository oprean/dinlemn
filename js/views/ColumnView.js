define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/DiskView',
  'text!templates/column.html',
  'models/Disk',
  'modules/Events'
], function($, _, Backbone, Marionette, DiskView, columnTpl, Disk, vent){
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
			this.collection = this.model.get('disks');
			this.header = this.model.get('header');
		},

		childViewOptions : function () { 
			return { disks : this.collection }; 
		},
		
		add : function() {
			console.log(this.header);
			this.collection.add(new Disk());
		},
		
		removeColumn : function() {
			vent.trigger('column.del', this.header);
			//this.destroy();
		},
	});

  	return DiskColumnView;
});