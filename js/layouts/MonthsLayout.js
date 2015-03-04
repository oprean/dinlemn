define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/months.html',
  'views/MonthView'
], function($, _, Backbone, Marionette, monthsTpl, MonthView){
  var MonthsLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(monthsTpl),
	regions : {
		month1 : '#month1',
		month2 : '#month2',
		month3 : '#month3',
		month4 : '#month4',
		month5 : '#month5',
		month6 : '#month6',
		month7 : '#month7',
		month8 : '#month8',
		month9 : '#month9',
		month10 : '#month10',
		month11 : '#month11',
		month12 : '#month12',
	},

	initialize : function(options) {
		this.month1 = new MonthView();
		this.month2 = new MonthView();
		this.month3 = new MonthView();
		this.month4 = new MonthView();
		this.month5 = new MonthView();
		this.month6 = new MonthView();
		this.month7 = new MonthView();
		this.month8 = new MonthView();
		this.month9 = new MonthView();
		this.month10 = new MonthView();
		this.month11 = new MonthView();
		this.month12 = new MonthView();

	},

	onBeforeShow : function() {
		this.showChildView('month1', this.month1);
		this.showChildView('month2', this.month2);
		this.showChildView('month3', this.month3);
		this.showChildView('month4', this.month4);
		this.showChildView('month5', this.month5);
		this.showChildView('month6', this.month6);
		this.showChildView('month7', this.month7);
		this.showChildView('month8', this.month8);
		this.showChildView('month9', this.month9);
		this.showChildView('month10', this.month10);
		this.showChildView('month11', this.month11);
		this.showChildView('month12', this.month12);
	},
  });

  return MonthsLayout;
});