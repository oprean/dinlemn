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
		initialize : function() {
			console.log('init modal');
		},
		
		submit: function() {
			console.log('submit');
			var header = this.model.get('header');
			header.set({
				headerName : $('#title').val(),
				width : $('#width').val(),
			});
		}	
			
	});

	return EditColumnView;
});