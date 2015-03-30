define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'views/ColumnView',
  'collections/Columns',
  'collections/Items',
  'models/Column',
  'modules/Events',
], function($, _, Backbone, Marionette, ColumnView, Columns, Items, Column, vent){
	var ColumnsView = Marionette.CollectionView.extend({
		childView: ColumnView,
		className : 'columns text-center',
		tagName : 'ul',

		initialize : function(options) {
			console.log('init columns view');
			var self = this;
			this.collection = options.dataModel.get('columns');
			console.log(this.collection);
		},
	});

	return ColumnsView;
});