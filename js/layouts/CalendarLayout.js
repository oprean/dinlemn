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
	
	events : {
		'click #export' : 'export'
	},

	initialize : function(options) {
		this.plaqueView = new PlaqueView();
		this.monthsLayout = new MonthsLayout();
	},

	onBeforeShow : function() {
		this.showChildView('plaque', this.plaqueView);
		this.showChildView('months', this.monthsLayout);
	},
	
	export : function() {
		console.log('export');
		var month1 = this.monthsLayout.getRegion('month1');
		console.log(month1.currentView.collection.toJSON());
	}
  });

  return CalendarLayout;
});