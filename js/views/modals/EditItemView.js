define([
  'jquery',
  'underscore',
  'backbone',
  'modules/Constants',
  'text!templates/item-edit.html'
], function($, _, Backbone, Constants, editItemTpl){
	var EditItemView = Backbone.Modal.extend({
		template: _.template(editItemTpl),
		submitEl: '.btn-submit',
		cancelEl: '.btn-cancel',
		events : {
			
		},
		initialize : function() {
			console.log('init modal');
		},
		
		onRender : function() {
		},
		
		submit: function() {
			console.log('submit');
			this.model.set({
				wood : $('#wood').val(),
				title : $('#title').val(),
				width : $('#width').val(),
				height : $('#height').val(),
			});
		}	
			
	});

	return EditItemView;
});