define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
	var Product = Backbone.Model.extend({
		defaults : {
			title : 'Family Birthdays',
			author : null,
			type : 'purty_wood',
			date : null,
			plaque : null,
			headers : null,
			columns : null,
		}
	});

	return Product;
});