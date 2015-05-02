 define([
  'jquery',
  'underscore',
  'backbone',
  'I18N/ro_RO/names',
  //'I18N/en_US/names',
  'models/Product',
  'models/Plaque',
  'models/Column',
  'models/Header',
  'models/Item',
  'collections/Columns',
  'collections/Items',
  'moment'
], function($, _, Backbone, names, Product, Plaque, Column, Header, Item, Columns, Items, moment){
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
							name : options.init, 
							plaque : new Plaque({title:'_blank_', width:null}),
							columns : columns
						}); 
						break;
					case 'month-calendar':
						break;
					case 'random-calendar':
						this.randomize(options.init);
						break;
					default:
				}
				this.unset('init');
				delete options.init;
			}
			
			console.log(this);
		},
		
		randomColumnItems : function() {
			var items = new Items();
			for(i=0; i<_.random(0, 4);i++) {
				var item = new Item({
					line1: _.random(1, 28),
					line2: names.firstNameFemale[_.random(0,names.firstNameFemale.length-1)],
				});
				items.add(item);
			} 
			return items;
		},
		
		randomize : function(name) {
			var self = this;
			console.log(names);
			var columns = new Columns();
			var months = moment.months();
			_.each(months, function(month){
				var column = new Column({
					header : new Header({title:month}),
					items : self.randomColumnItems()
				});
				columns.add(column);
			});
			this.set({
				name : name, 
				plaque : new Plaque({width:320}),
				columns : columns
			});			
		}
	});

	return Calendar;
});