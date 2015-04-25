define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
	var Product = Backbone.Model.extend({
		defaults : {
			name : 'local.last.save',
			description : '',
			author : 'Guest',
			type : 'calendar',
			date : null,
		}
	});

	return Product;
});