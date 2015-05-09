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
	events : {
		'body scroll' : 'slideShow' 
	},
	
	initialize : function() {
		_.bindAll(this, 'slideShow');
		$(window).scroll(this.slideShow);
		
		this.jumbotronView = new JumbotronView();
		this.randomCalendar = new CalendarLayout({
			calendarData:new Calendar({init:'home-calendar'})
		});
	},

	slideShow : function() {
		var scroll = $(window).scrollTop(); 
		$('.scroll-val').text(scroll);
		if (scroll > 100) {
			//this.showChildView('randomCalendar', this.randomCalendar);			
		}
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
		this.$('.select-texture-control').css('display', 'none');
	},
  });

  return HomeLayout;
});