define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/ItemView',
  'views/modals/EditColumnView',
  'text!templates/column.html',
  'models/Item',
  'modules/Events'
], function($, _, Backbone, Marionette, ItemView, EditColumnView, columnTpl, Item, vent){
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
			'click .addItem' : 'addItem',
			'click .editColumn' : 'editColumn',
			'click .removeColumn' : 'removeColumn'
		},
		
		initialize : function() {
			this.collection = this.model.get('items');
			this.header = this.model.get('header');
		},

		childViewOptions : function () { 
			return { items : this.collection }; 
		},
		
		onRender : function() {
			if (this.header.get('width')!=null) this.$el.css('width', this.header.get('width'));
		},
	
		addItem : function(e) {
			this.collection.add(new Item());
		},

		editColumn : function(e) {
			var editColumnView = new EditColumnView({model:this.model});
			vent.trigger('showModal', editColumnView);
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