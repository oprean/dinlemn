define([
  'underscore',
  'backbone',
  'models/WProduct',
], function(_, Backbone, LocalStorage, WProduct){
	var WProducts = Parse.Collection.extend({
	  model: WProduct,
	});
	
	return WProducts;
});