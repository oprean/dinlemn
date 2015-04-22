define([
  'underscore',
  'backbone',
  'models/WProduct',
], function(_, Backbone, WProduct){
	var WProducts = Parse.Collection.extend({
	  model: WProduct,
	});
	
	return WProducts;
});