define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/calendar.html',
  'views/PlaqueView',
  'layouts/MonthsLayout'
], function($, _, Backbone, Marionette, calendarTpl, PlaqueView, MonthsLayout){
  var CalendarLayout = Backbone.Marionette.LayoutView.extend({
	template : calendarTpl,
	regions : {
		plaque : '#plaque',
		months : '#disks'
	},

	initialize : function(options) {
		this.plaqueView = new PlaqueView();
		this.monthsLayout = new MonthsLayout();
	},

	onBeforeShow : function() {
		this.showChildView('plaque', this.plaqueView);
		this.showChildView('months', this.monthsLayout);
	},
  });

  return CalendarLayout;
});