define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'models/Item',
  'text!templates/calendar/header.html',
  'views/modals/EditColumnView',
  'modules/Constants',
  'modules/Events'
], function($, _, Backbone, Marionette, Item, headerTpl, EditColumnView, Constants, vent){
	var HeaderView = Backbone.Marionette.ItemView.extend({
		template : _.template(headerTpl),
		tagName: 'li',
		
		modelEvents : {
			'change' : 'render'
		},
		
		initialize : function() {
			this.originalModel = this.model;
			this.header = this.model.get('header');
			this.column = this.model.get('items');
			this.model = this.model.get('header');
		},
		
		events : {
			'click .headerName' : 'edit',
			'blur .headerName' : 'save',
			'click .addItem' : 'addItem',
			'click .editColumn' : 'editColumn',
			'click .removeColumn' : 'removeColumn'
		},
		
		edit : function(e) {
			$(e.target).attr('contenteditable', true);
			$(e.target).focus();
		},
	
		save : function(e) {
			this.header.set('title',$(e.target).html());
			$(e.target).removeAttr('contenteditable');			
		},
		
		addItem : function() {
			this.column.add(new Item());
		},
		
		editColumn : function(e) {
			var editColumnView = new EditColumnView({model:this.header});
			vent.trigger('showModal', editColumnView);
		},
		
		removeColumn : function() {
			if (confirm("Are you sure you want to remove this column?")) {
				vent.trigger('column.del', {data:this.originalModel});
			}
		},
		
		onRender : function() {
			if (this.model.get('width')!=null) this.$el.css('width', this.model.get('width') * Constants.scale);
		}
	}); 

	return HeaderView;
});