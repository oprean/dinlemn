define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/DiskView'
], function($, _, Backbone, Marionette, DiskView){
	var MonthView = Backbone.Marionette.CollectionView.extend({
		tagName : 'ul',
		className : 'month-list',
		childView : DiskView,
	});

  	return MonthView;
});