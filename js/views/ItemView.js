define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'views/modals/EditItemView',
  'text!templates/item-default.html',
  'text!templates/item-round.html',
  'text!templates/item-rect.html',
  'modules/Events'
], function($, _, Backbone, Marionette, EditItemView, itemDefaultTpl, itemRoundTpl, itemRectTpl, vent){
	var ItemView = Backbone.Marionette.ItemView.extend({
		template : _.template(itemDefaultTpl),
		className : 'item-container',
		tagName: 'li',
		events : {
			'click .editable' : 'edit',
			'blur .editable' : 'save',
			'click .del' : 'del',
			'click .edit' : 'modalEdit',
			'mouseover' : 'shake'
		},
		
		modelEvents : {
			'change' : 'render',
			'change:width' : 'updateWidth'
		},
		
		onBeforeRender : function() {
			var tpl = null;
			switch(this.model.get('shape')) {
				case 'round':
					tpl = itemRoundTpl;
					break;
				case 'rectangular':
					tpl = itemRectTpl;
					break;
				default:
					tpl = itemDefaultTpl;
					break;
			}
			this.template = _.template(tpl);
		},
		
		initialize : function(options) {
			this.columnItems = options.items;
			this.header = options.header;
			this.listenTo(vent, 'editor.preview', function(){
				this.$('.icon-btn').toggle();
			});
		},
		
		shake : function() {
			var d;
			switch(_.random(0,3)) {
				case 0:
					d = 'right';
					break;
				case 1:
					d = 'left';
					break;
				case 2:
					d = 'up';
					break;
				case 3:
					d = 'down';
					break;
			}
			
			this.$el.effect( "shake", {times: 1, distance: 2, direction:d});
		},
		
		updateWidth : function() {
			console.log('width change');
			if(this.model.get('width') > this.header.get('width')) {
				this.header.set({width:this.model.get('width')});
			}
			//vent.trigger('', editItemView);
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
			if (this.model.get('image')!=null) { 
				this.$el.css('background-image', 'url("' + this.model.get('image') + '")');
				this.$el.css('background-size', 'cover');
			}
		}
	});
	 
	return ItemView;
});