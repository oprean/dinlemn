define([
  'jquery',
  'underscore',
  'backbone',
  'collections/WProducts',
  'modules/Constants',
  'text!templates/open.html'
], function($, _, Backbone, WProducts, Constants, editPlaqueTpl){
	var OpenView = Backbone.Modal.extend({
		template: _.template(editPlaqueTpl),
		submitEl: '.btn-submit',
		cancelEl: '.btn-cancel',

		initialize : function() {
			
		},
		
		onShow : function() {
			Backbone.Validation.bind(this);
		},

		beforeSubmit : function() {
		},
		
		submit: function() {
			this.fillModel(this.realModel);
		}				
	});

	return OpenView;
});