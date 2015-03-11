define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/item.html',
], function($, _, Backbone, Marionette, itemTpl){
	var ItemView = Backbone.Marionette.ItemView.extend({
		template : _.template(itemTpl),
		tagName: 'li',
		events : {
			'click .editable' : 'edit',
			'blur .editable' : 'save',
			'click .close' : 'del',
			//'click .edit' : 'modalEdit'
		},
		
		initialize : function(options) {
			this.columnItems = options.items;
		},
		
		edit : function(e) {
			$(e.target).attr('contenteditable', true);
			$(e.target).focus();
		},

		modalEdit : function(e) {
			console.log('modal popup');
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
	});
	 
	return ItemView;
});