define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/ColumnView',
  'collections/Columns',
  'collections/Disks',
  'models/Column',
  'modules/Events',
], function($, _, Backbone, Marionette, ColumnView, Columns, Disks, Column, vent){
	var DisksView = Marionette.CollectionView.extend({
		childView: ColumnView,
		className : 'columns text-center',
		tagName : 'ul',
		initialize : function() {
			self = this;
			this.collection = new Columns();
			this.listenTo(vent, 'column.new', function(columnHeader){
				console.log('add new disk column!');
				self.collection.add(new Column({
					header : columnHeader,
					disks : new Disks()
				}));
			});
		},
	});

	return DisksView;
});