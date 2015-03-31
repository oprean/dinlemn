define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'views/ItemView',
  'text!templates/column.html',
  'models/Item',
  'modules/Events'
], function($, _, Backbone, Marionette, ItemView, columnTpl, Item, vent){
	var ColumnView = Backbone.Marionette.CompositeView.extend({
		template : _.template(columnTpl),
		tagName : 'li',
		className : 'column',
		childView : ItemView,
		childViewContainer: "ul.items",

		modelEvents : {
			'change' : 'render'
		},
			
		initialize : function() {
			var self = this;
			this.collection = this.model.get('items');
			this.model = this.model.get('header');
		},

		childViewOptions : function () { 
			return { 
				items : this.collection,
				header : this.model 
			}; 
		},
		
		onRender : function() {
			if (this.model.get('width')!=null) this.$el.css('width', this.model.get('width'));
		},
	});

  	return ColumnView;
});