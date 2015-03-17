define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/modals/EditItemView',
  'text!templates/item-default.html',
  'text!templates/item-round.html',
  'text!templates/item-rectangle.html',
  'modules/Events'
], function($, _, Backbone, Marionette, EditItemView, itemDefaultTpl, itemRoundTpl, itemRectangleTpl, vent){
	var ItemView = Backbone.Marionette.ItemView.extend({
		//template : _.template(itemDefaultTpl),
		className : 'item',
		tagName: 'li',
		events : {
			'click .editable' : 'edit',
			'blur .editable' : 'save',
			'click .del' : 'del',
			'click .edit' : 'modalEdit'
		},
		
		modelEvents : {
			'change' : 'render'
		},
		
		onBeforeRender : function() {
			var tpl = null;
			switch(this.model.get('shape')) {
				case 'round':
					tpl = itemRoundTpl;
					break;
				case 'rectangular':
					tpl = itemRectangularTpl;
					break;
				default:
					tpl = itemDefaultTpl;
					break;
			}
			this.template = _.template(tpl);
		},
		
		initialize : function(options) {
			this.columnItems = options.items;
		},
		
		edit : function(e) {
			$(e.target).attr('contenteditable', true);
			$(e.target).focus();
		},

		modalEdit : function(e) {
			var editItemView = new EditItemView({model:this.model});
			vent.trigger('showModal', editItemView);
			e.stopPropagation();
		},
		
		del : function() {
			if (confirm("Are you sure you want to remove this item?")) {
    			this.columnItems.remove(this.model);
			}			
		},
		
		save : function(e) {
			console.log('save');
			this.model.set($(e.target).data('field'),$(e.target).html());
			$(e.target).removeAttr('contenteditable');	
		},
		
		onRender : function() {
			if (this.model.get('width')!=null) this.$el.css('width', this.model.get('width'));
			if (this.model.get('height')!=null) this.$el.css('height', this.model.get('height'));
			if (this.model.get('image')!=null) 
				this.$el.css('background-image', 'url("' + this.model.get('image') + '")');
		}
	});
	 
	return ItemView;
});