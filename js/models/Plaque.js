define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
	var Plaque = Backbone.Model.extend({
		defaults : {
			title : 'Family Birthdays',
			wood : 'default',
			width : null,
			height : null,
			columns : []
		}
	});

	return Plaque;
});