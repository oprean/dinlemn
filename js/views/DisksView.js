define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/MonthView'
], function($, _, Backbone, Marionette, MonthView){
	var DisksView = Backbone.Marionette.CollectionView.extend({
		tagName : 'div',
		className : 'col-md-1 column',
		childView : MonthView,
	});

  	return DisksView;
});