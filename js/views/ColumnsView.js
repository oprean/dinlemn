define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'views/ColumnView',
  'collections/Columns',
  'collections/Items',
  'models/Column',
  'models/Header',
  'modules/Events',
], function($, _, Backbone, Marionette, ColumnView, Columns, Items, Column, Header, vent){
	var ColumnsView = Marionette.CollectionView.extend({
		childView: ColumnView,
		className : 'columns text-center',
		tagName : 'ul',
		
		/*collectionEvents : {
			'add' : 'render'
		},*/
		
		initialize : function(options) {
			console.log('init columns view');
			var self = this;
			this.collection = new Columns();
			var columns = options.dataModel.get('columns');
			_.each(columns, function(column){
				var column = new Column({
					header : new Header(column.header),
					items : new Items(column.items)
				});
				self.collection.add(column);				
			}); 
			//this.collection.reset(options.dataModel.get('columns'));
						
			console.log(this.collection);
			this.listenTo(vent, 'column.del', function(column){
				self.collection.remove(column.data);
				self.render();
			});
		},
	});

	return ColumnsView;
});