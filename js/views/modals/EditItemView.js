define([
  'jquery',
  'underscore',
  'backbone',
  'modules/Constants',
  'text!templates/modals/item-edit.html'
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
		
		templateHelpers : function() {
			return {
				woodTypes : Constants.woodTypes,
				shapeTypes : Constants.shapeTypes
			};
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