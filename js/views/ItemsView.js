define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/ColumnView',
  'collections/Columns',
  'collections/Items',
  'models/Column',
  'modules/Events',
], function($, _, Backbone, Marionette, ColumnView, Columns, Items, Column, vent){
	var ItemsView = Marionette.CollectionView.extend({
		childView: ColumnView,
		className : 'columns text-center',
		tagName : 'ul',
		initialize : function() {
			var self = this;
			this.collection = new Columns();
			this.listenTo(vent, 'column.new', function(columnHeader){
				self.collection.add(new Column({
					header : columnHeader,
					items : new Items()
				}));
			});
		},
	});

	return ItemsView;
});