define([
  'jquery',
  'underscore',
  'backbone',
  'modules/Events'
], function($, _, Backbone, vent){
	var Column = Backbone.Model.extend({
		defaults : {
			header : null,
			items : null,
		},
	});

	return Column;
});