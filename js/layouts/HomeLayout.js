define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'views/JumbotronView',
  'models/Calendar',
  'layouts/CalendarLayout',
  'text!templates/layouts/home-layout.html',
  'modules/Constants',
  'modules/Utils',
  'modules/Events',
], function($, _, Backbone, Marionette, JumbotronView, Calendar, CalendarLayout, homeLayoutTpl, Constants, Utils, vent){
  var HomeLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(homeLayoutTpl),
	regions : {
		jumbotron : '.jumbotron-container',
		randomCalendar : '.random-calendar-container',
	},
	
	initialize : function() {
		this.jumbotronView = new JumbotronView();
		this.randomCalendar = new CalendarLayout({
			calendarData:new Calendar({init:'random-calendar'})
		});
	},

	onRender : function() {
		/*$('body').css('background', 'url("assets/img/carousel/DSC_0001.jpg")');
		$('body').css('background-repeat', 'no-repeat');*/  
	},

	onBeforeShow : function() {
		this.showChildView('jumbotron', this.jumbotronView);
		this.showChildView('randomCalendar', this.randomCalendar);
		
		this.$('.icon-btn').css('display', 'none');
		this.$('.edit-mode-only').css('display', 'none');
		this.$('select').css('display', 'none');
	},
  });

  return HomeLayout;
});