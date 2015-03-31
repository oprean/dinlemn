define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'views/HeaderView',
  'modules/Events',
], function($, _, Backbone, Marionette, HeaderView, vent){
	var HeadersView = Backbone.Marionette.CollectionView.extend({
		tagName : 'ul',
		childView : HeaderView,
		className : 'headers text-center center-block',

		initialize : function(options) {
			console.log('init headers view');
			var self = this;
			this.collection = options.dataModel.get('columns');
			console.log(this.collection); 
			
			this.listenTo(vent, 'column.del', function(column){
				self.collection.remove(column.data);
				this.render();
			});
			
			this.listenTo(vent, 'column.new', function(column){
				console.log('listen column.new');
				self.collection.add(column.data);
			});
		},
	});
	
	return HeadersView;
});