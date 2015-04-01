define([
  'jquery',
  'underscore',
  'backbone',
  'models/Product',
  'models/Plaque',
  'models/Column',
  'models/Header',
  'collections/Columns',
  'collections/Items',
  'moment'
], function($, _, Backbone, Product, Plaque, Column, Header, Columns, Items, moment){
	function columnsDefault() {
		var columns = new Columns();
		var months = moment.months();
		_.each(months, function(month){
			var column = new Column({
				header : new Header({title:month}),
				items : new Items()
			});
			columns.add(column);
		});
		
		return columns;
	}
	var Calendar = Product.extend({
		defaults : _.extend({},Product.prototype.defaults, {
			plaque : new Plaque(),
			columns : columnsDefault(),
		}),
	});

	return Calendar;
});