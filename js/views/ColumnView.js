define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/ItemView',
  'text!templates/column.html',
  'models/Item',
  'modules/Events'
], function($, _, Backbone, Marionette, ItemView, columnTpl, Item, vent){
	var DiskColumnView = Backbone.Marionette.CompositeView.extend({
		template : _.template(columnTpl),
		tagName : 'li',
		className : 'column',
		childView : ItemView,
		childViewContainer: "ul.items",
		
		modelEvents : {
			'change' : 'render'
		},
		
		events : {
			'click .addNew' : 'add',
			'click .close' : 'removeColumn'
		},
		
		initialize : function() {
			this.collection = this.model.get('items');
			this.header = this.model.get('header');
		},

		childViewOptions : function () { 
			return { items : this.collection }; 
		},
		
		add : function() {
			this.collection.add(new Item());
		},
		
		removeColumn : function() {
			if (confirm("Are you sure you want to remove this column?")) {
				vent.trigger('column.del', this.header);
				this.destroy();
			}
		},
	});

  	return DiskColumnView;
});