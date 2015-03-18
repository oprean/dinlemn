define([
  'jquery',
  'underscore',
  'backbone',
  'models/Plaque',
  'collections/Columns',
], function($, _, Backbone, Plaque, Columns){
	var Product = Backbone.Model.extend({
		defaults : {
			name : 'local.last.save',
			author : 'Guest',
			type : 'purty_wood',
			date : null,
			plaque : new Plaque(),
			headers : null,
			columns : new Columns(),
		}
	});

	return Product;
});