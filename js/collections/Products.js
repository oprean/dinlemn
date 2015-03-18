define([
  'underscore',
  'backbone',
  'backbone.localStorage',
  'models/Product'
], function(_, Backbone, LocalStorage, Setting){
	var Products = Backbone.Collection.extend({
	  model: Product,
	  localStorage: new LocalStorage("products"), 
	});
	
	return Products;
});