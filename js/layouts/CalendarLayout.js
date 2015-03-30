define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'models/Plaque',
  'collections/Columns',
  'text!templates/calendar-layout.html',
  'layouts/PlaqueLayout',
  'views/ColumnsView',
  'modules/Events',
  'moment',
], function($, _, Backbone, Marionette, Plaque, Columns, calendarLayoutTpl, PlaqueLayout, ColumnsView, vent, moment){
  var CalendarLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(calendarLayoutTpl),
	regions : {
		plaque : '#plaque-container',
		columns : '#columns-container'
	},
	
	initialize : function(options) {
		console.log('init calendar layout');
		this.model = options.calendarData;	
		this.buildModel();
		var self = this;
		this.plaqueLayout = new PlaqueLayout({
			dataModel : this.model
		});
		this.columnView = new ColumnsView({
			dataModel : this.model
		});
	},

	buildModel : function() {
		console.log('build calendar model');
		if (this.model.get('plaque').cid === undefined) {
			var plaqueData = this.model.get('plaque');
			console.log(plaqueData); 
			this.model.set({'plaque' : new Plaque(plaqueData)});
		}
		if (this.model.get('columns').cid === undefined) {
			var columnsData = this.model.get('columns');
			console.log(columnsData); 
			this.model.set({'columns' : new Columns(JSON.stringify(columnsData.s))});
		}
	},

	onBeforeShow : function() {
		this.showChildView('plaque', this.plaqueLayout);
		this.showChildView('columns', this.columnView);
	},
  });

  return CalendarLayout;
});