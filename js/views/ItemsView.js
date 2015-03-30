define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'collections/Items',
  'views/ItemView',
], function($, _, Backbone, Marionette, Items, ItemView){
	var ItemsView = Backbone.Marionette.CollectionView.extend({
		tagName : 'li',
		className : 'column',
		childView : ItemView,
		
		initialize : function() {
			console.log('init items view');
			this.collection = new Items();
		},
		
		modelEvents : {
			'change' : 'render'
		},
	});

  	return ItemsView;
});