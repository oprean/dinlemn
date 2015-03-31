define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'collections/Products',
  'models/Calendar',
  'text!templates/editor-layout.html',
  'layouts/CalendarLayout',
  'views/ControlsView',
  'modules/Events',
  'moment',
], function($, _, Backbone, Marionette, Products, Calendar, productEditorTpl, CalendarLayout, ControlsView, vent, moment){
  var EditorLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(productEditorTpl),
	regions : {
		product : '#product-container',
		controls : '#controls-container',
	},
	
	initialize : function() {
		var self = this;
		this.products = new Products();
		this.products.fetch();
		this.model = this.products.findWhere({name: 'local.last.save'});
		if (this.model === undefined) {
			console.log('init a new product:');
			this.model = new Calendar();
			this.products.add(this.model);
			this.model.save();
		} else {
			console.log('loaded from local storage:');
			console.log(this.model);
			//this.model = JSON.parse(this.model);
			//var collection2 = new Backbone.Collection();
			//var restored = collection2.reset(json2);

		}

		this.listenTo(vent, 'editor.save', function(){
			var json = this.model.toJSON();
			var serializedString = JSON.stringify(json);
			console.log(serializedString);
			self.save();
		});
		this.controlsView = new ControlsView();
		this.productLayout = this.getProductLayout();
	},

	getProductLayout : function() {
		switch(this.model.get('type')) {
			case 'calendar':
				return new CalendarLayout({calendarData:this.model});
			default :
				return new CalendarLayout({calendarData:this.model});
		}
	},
	
	save : function() {
		console.log('save product to local storage');
		this.model.set({
			date : moment().format('MMMM Do YYYY h:mm:ss a'),
		});
		this.model.save();
	},

	onBeforeShow : function() {
		this.showChildView('controls', this.controlsView);
		this.showChildView('product', this.productLayout);
	},
  });

  return EditorLayout;
});