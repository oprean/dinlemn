define([
  'jquery',
  'underscore',
  'backbone',
  'modules/Constants',
  'text!templates/modals/column-edit.html'
], function($, _, Backbone, Constants, editItemTpl){
	var EditColumnView = Backbone.Modal.extend({
		template: _.template(editItemTpl),
		submitEl: '.btn-submit',
		cancelEl: '.btn-cancel',
		
		initialize : function() {
			this.realModel = this.model;
			this.model = this.realModel.clone();
		},
		
		onShow : function() {
			Backbone.Validation.bind(this);
		},

		fillModel : function(model) {
			model.set({
				title : $('#title').val(),
				width : $('#width').val(),
			});
		},
		
		beforeSubmit : function() {
			this.fillModel(this.model);
			return this.model.isValid(true);
		},
		
		
		submit: function() {
			this.fillModel(this.realModel);
		}	
			
	});

	return EditColumnView;
});