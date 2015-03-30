define([
  'jquery',
  'underscore',
  'backbone',
  'modules/Constants',
  'text!templates/column-edit.html'
], function($, _, Backbone, Constants, editItemTpl){
	var EditColumnView = Backbone.Modal.extend({
		template: _.template(editItemTpl),
		submitEl: '.btn-submit',
		cancelEl: '.btn-cancel',
		events : {
			
		},
		
		submit: function() {
			console.log('submit');
			this.model.set({
				title : $('#title').val(),
				width : $('#width').val(),
			});
		}	
			
	});

	return EditColumnView;
});