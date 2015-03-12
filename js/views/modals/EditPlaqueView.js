define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/plaque-edit.html'
], function($, _, Backbone, editPlaqueTpl){
	var EditPlaqueView = Backbone.Modal.extend({
		template: _.template(editPlaqueTpl),
		submitEl: '.btn-submit',
		events : {
			
		},
		initialize : function() {
			console.log('init modal');
		},
		
		onRender : function() {
		}		
	});

	return EditPlaqueView;
});