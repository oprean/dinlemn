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
			this.model.set({woodTypes : Constants.woodTypes });
			this.model.set({shapeTypes : Constants.shapeTypes });
			console.log('init modal');
		},
		
		onRender : function() {
		},
		
		submit: function() {
			console.log('submit');
			this.model.set({
				line1 : $('#line1').val(),
				line2 : $('#line2').val(),
				shape : $('#shape').val(),
				image : $('#image').val(),
				wood : $('#wood').val(),
				width : $('#width').val(),
				height : $('#height').val(),
			});
		}	
			
	});

	return EditItemView;
});