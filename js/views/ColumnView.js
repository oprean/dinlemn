define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'views/ItemView',
  'text!templates/column.html',
  'models/Item',
  'modules/Constants',
  'modules/Events',
  'modules/behaviors.sortable'
], function($, _, Backbone, Marionette, ItemView, columnTpl, Item, Constants, vent, Sortable){
	var ColumnView = Backbone.Marionette.CompositeView.extend({
		template : _.template(columnTpl),
		tagName : 'li',
		className : 'column',
		childView : ItemView,
		childViewContainer: "ul.items",

		modelEvents : {
			'change' : 'render'
		},
			
		behaviors: { 
		    Sortable:{ 
		    	behaviorClass : Sortable,
		        containment:'parent',
		        element: 'ul.items',
		        axis:'x',
		    }
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
			if (this.model.get('width')!=null) this.$el.css('width', this.model.get('width') * Constants.scale);
		},
	});

  	return ColumnView;
});