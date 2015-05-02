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
  'text!templates/layouts/editor-layout.html',
  'layouts/CalendarLayout',
  'views/ControlsView',
  'views/modals/OpenView',
  'views/modals/SaveView',
  'modules/Events',
], function($, _, Backbone, Marionette, Constants, Utils, Products, Calendar, WProduct, productEditorTpl, CalendarLayout, ControlsView, OpenView, SaveView, vent){
  var EditorLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(productEditorTpl),
	regions : {
		product : '#product-container',
		controls : '#controls-container',
	},
	
	initialize : function(options) {
		var self = this;
		this.model = null;
		if(options.id != undefined) {
			var product = new WProduct({objectId: options.id});
			product.fetch({
				success: function(model){
					self.model = new Calendar(JSON.parse(model.get('blueprint')));
					//console.log(self.model);
					self.productLayout = self.getProductLayout();					
				}
			});
		} else {
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
		}

		this.listenTo(vent, 'editor.save', function(){
			self.save();
		});

		this.listenTo(vent, 'editor.saveas', function(){
			self.saveas();
		});
		
		this.listenTo(vent, 'editor.new', function(type){
			self.new(type);
		});
		
		this.listenTo(vent, 'editor.open', function(){
			self.open();
		});
		
		this.listenTo(vent, 'editor.reload', function(model){
			// this is when load from OpenView modal
			self.model = new Calendar(JSON.parse(model.get('blueprint')));
			self.productLayout = self.getProductLayout();
			self.showChildView('product', self.productLayout);
			
			var localModel = self.products.findWhere({name: 'local.last.save'});
			if (localModel != undefined) localModel.destroy();
			self.model.set({name: 'local.last.save'});
			self.products.add(self.model);
			self.model.save();
		});
				
		this.controlsView = new ControlsView();
		this.productLayout = this.getProductLayout();
	},

	getProductLayout : function(model) {
		switch(this.model.get('type')) {
			case 'calendar':
				return new CalendarLayout({calendarData:this.model});
			default :
				return new CalendarLayout({calendarData:this.model});
		}
	},
	
	new : function(type) {
		var localModel = this.products.findWhere({name: 'local.last.save'});
		localModel.destroy();
		switch (type) {
			case 'blank-calendar':
			case 'month-calendar':
			case 'random-calendar':
				this.model = new Calendar({init:type});
				break;
			default:
				this.model = new Calendar();
		}
		this.products.add(this.model);
		this.model.save();
		this.showChildView('product', new CalendarLayout({calendarData:this.model}));
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