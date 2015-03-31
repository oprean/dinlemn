define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'models/Item',
  'text!templates/header.html',
  'views/modals/EditColumnView',
  'modules/Events'
], function($, _, Backbone, Marionette, Item, headerTpl, EditColumnView, vent){
	var HeaderView = Backbone.Marionette.ItemView.extend({
		template : _.template(headerTpl),
		tagName: 'li',
		
		initialize : function() {
			console.log('init header');
			console.log(this.model);
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
			//if (this.header.get('width')!=null) this.$el.css('width', this.header.get('width'));
			if (this.model.get('width')!=null) this.$el.css('width', this.model.get('width'));
		}
	}); 

	return HeaderView;
});