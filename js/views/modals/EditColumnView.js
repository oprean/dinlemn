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
			var header = this.model.get('header');
			console.log('init modal');
			this.model.set({
				title : header.get('title'),
				width : header.get('width'), 
			});
		},
		
		submit: function() {
			console.log('submit');
			var header = this.model.get('header');
			header.set({
				title : $('#title').val(),
				width : $('#width').val(),
			});
		}	
			
	});

	return EditColumnView;
});