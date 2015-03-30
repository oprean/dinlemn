define([
  'jquery',
  'underscore',
  'backbone',
  'models/Product',
  'models/Plaque',
  'collections/Columns',
], function($, _, Backbone, Product, Plaque, Columns){
	var Calendar = Product.extend({
		defaults : _.extend({},Product.prototype.defaults, {
			plaque : new Plaque(),
			columns : new Columns(),
		}),
	});

	return Calendar;
});