define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
	var Plaque = Backbone.Model.extend({
		defaults : {
			title : 'Family Birthdays',
			wood : 'purty_wood',
			width : null,
			height : null,
			columns : []
		}
	});

	return Plaque;
});