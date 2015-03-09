define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/DiskColumnView',
  'collections/ColumnsDisks',
  'collections/ColumnDisks',
  'modules/Events',
], function($, _, Backbone, Marionette, DiskColumnView, ColumnsDisks, ColumnDisks, vent){
	var DisksView = Marionette.CollectionView.extend({
		childView: DiskColumnView,
		className : 'columns text-center',
		tagName : 'ul',
		initialize : function() {
			self = this;
			this.collection = new ColumnsDisks();
			this.listenTo(vent, 'column.new', function(columnHeader){
				console.log('add new disk colomn!');
				self.collection.add(new ColumnDisks());
			});
		},
	});

	return DisksView;
});