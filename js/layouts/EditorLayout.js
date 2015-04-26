define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'modules/Constants',
  'modules/Utils',
  'collections/Products',
  'models/Calendar',
  'models/WProduct',
  'text!templates/editor-layout.html',
  'layouts/CalendarLayout',
  'views/ControlsView',
  'views/modals/OpenView',
  'views/modals/SaveView',
  'modules/Events',
  'moment',
], function($, _, Backbone, Marionette, Constants, Utils, Products, Calendar, WProduct, productEditorTpl, CalendarLayout, ControlsView, OpenView, SaveView, vent, moment){
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
		}

		this.listenTo(vent, 'editor.save', function(){
			self.save();
		});

		this.listenTo(vent, 'editor.saveas', function(){
			self.saveas();
		});
		
		this.listenTo(vent, 'editor.new', function(){
			self.new();
		});
		
		this.listenTo(vent, 'editor.open', function(){
			self.open();
		});
		
		this.listenTo(vent, 'editor.reload', function(model){
			self.model = new Calendar(JSON.parse(model.get('blueprint')));
			//console.log(model.get('blueprint'));
			self.productLayout = this.getProductLayout(model);
			this.showChildView('product', this.productLayout);
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
	
	new : function() {
		currentModel = this.products.findWhere({name: 'local.last.save'});
		currentModel.destroy();
	},
	
	open : function() {
		var openView = new OpenView({model:this.model});
		vent.trigger('showModal', openView);
	},
	
	save : function() {
		console.log('save product to local storage');
		this.model.set({
			author : Parse.User.current().get('username'),
			date : moment().format('MMMM Do YYYY h:mm:ss a'),
		});
		this.model.save();
	},

	saveas : function() {
		var openView = new SaveView({model:this.model});
		vent.trigger('showModal', openView);
	},

	onBeforeShow : function() {
		this.showChildView('controls', this.controlsView);
		this.showChildView('product', this.productLayout);
	},
  });

  return EditorLayout;
});