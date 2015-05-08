define([
  'jquery',
  'underscore',
  'backbone',
  'modules/Constants',
], function($, _, Backbone, Constants){
	var Product = Backbone.Model.extend({
		defaults : {
			name : Constants.quickSaveName,
			description : '',
			author : Constants.guestName,
			type : 'calendar',
			date : null,
		}
	});

	return Product;
});