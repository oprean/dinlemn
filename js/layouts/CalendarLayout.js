define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/calendar.html',
  'views/PlaqueView',
  'views/DisksView'
], function($, _, Backbone, Marionette, calendarTpl, PlaqueView, DisksView){
  var CalendarLayout = Backbone.Marionette.LayoutView.extend({
	template : calendarTpl,
	regions : {
		plaque : '#plaque',
		disks : '#disks'
	},

	initialize : function(options) {
		this.plaqueView = new PlaqueView();
		this.disksView = new DisksView();
	},

	onBeforeShow : function() {
		this.showChildView('plaque', this.plaqueView);
		this.showChildView('disks', this.disksView);
	},
  });

  return CalendarLayout;
});