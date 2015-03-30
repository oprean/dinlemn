define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
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
			
		initialize : function() {
			var self = this;
			this.collection = this.model.get('items');
			this.header = this.model.get('header');
		},

		childViewOptions : function () { 
			return { items : this.collection }; 
		},
		
		onRender : function() {
			if (this.header.get('width')!=null) this.$el.css('width', this.header.get('width'));
		},
	});

  	return DiskColumnView;
});