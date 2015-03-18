define([
  'underscore',
  'backbone',
  'backbone.localStorage',
  'models/Product'
], function(_, Backbone, LocalStorage, Product){
	var Products = Backbone.Collection.extend({
	  model: Product,
	  localStorage: new LocalStorage("products"), 
	});
	
	return Products;
});