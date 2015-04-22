define([
  'jquery',
  'underscore',
  'backbone',
  'parse'
], function($, _, Backbone){
	var WProduct = Parse.Object.extend({
		className: 'WoodItProduct'
	});

	return WProduct;
});