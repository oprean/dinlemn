define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/plaque-edit.html'
], function($, _, Backbone, editPlaqueTpl){
	var EditPlaqueView = Backbone.Modal.extend({
		template: _.template(editPlaqueTpl),
		submitEl: '.bbm-button'
	});

	return EditPlaqueView;
});