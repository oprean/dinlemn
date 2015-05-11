 define([
  'jquery',
  'underscore',
  'backbone',
  'modules/Constants',
  'models/Product',

], function($, _, Backbone, Constants, Product){
	var Ring = Product.extend({
		defaults : _.extend({},Product.prototype.defaults, {
			size : 16,
			width : 4,
			profile: null,
			wood : null,
			type : 'ring',
			
		}),
	});

	return Ring;
});