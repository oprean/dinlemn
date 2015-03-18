define([
  'jquery',
  'underscore',
  'backbone',
  'modules/Constants',
  'text!templates/plaque-edit.html'
], function($, _, Backbone, Constants, editPlaqueTpl){
	var EditPlaqueView = Backbone.Modal.extend({
		template: _.template(editPlaqueTpl),
		submitEl: '.btn-submit',
		cancelEl: '.btn-cancel',
		events : {
			
		},
		initialize : function() {
			this.model.set({woodTypes : Constants.woodTypes });
			console.log('init modal');
		},
		
		onShow : function() {
			console.log('onShow');
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

	return EditPlaqueView;
});