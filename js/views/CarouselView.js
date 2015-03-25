define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'text!templates/carousel.html',
], function($, _, Backbone, Marionette, carouselTpl){
	var CarouselView = Backbone.Marionette.ItemView.extend({
		template : _.template(carouselTpl),
	});
	 
	return CarouselView;
});