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
	};
	
	var Calendar = Product.extend({
		defaults : _.extend({},Product.prototype.defaults, {
			plaque : new Plaque({width:320}),
			columns : columnsDefault(),
		}),
		
		initialize : function(options) {
			if (options != undefined && options.init != undefined) {
				console.log(options.init);
				switch(options.init) {
					case 'blank-calendar':
						var columns = new Columns();
						columns.add(new Column({
							header : new Header({title:'_blank_'}),
							items : new Items()
						}));
						this.set({
							plaque : new Plaque({title:'_blank_', width:null}),
							columns : columns
						}); 
						break;
					case 'month-calendar':
						break;
					case 'random-calendar':
						this.randomize();
						break;
					default:
				}	
			}
		},
		
		randomize : function() {
			console.log('randomize');
		}
	});

	return Calendar;
});