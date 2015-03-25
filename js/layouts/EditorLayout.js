define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'collections/Products',
  'models/Product',
  'text!templates/editor.html',
  'views/PlaqueView',
  'views/ColumnsView',
  'views/ControlsView',
  'modules/Events',
  'moment',
], function($, _, Backbone, Marionette, Products, Product, editorTpl, PlaqueView, ColumnsView, ControlsView, vent, moment){
  var EditorLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(editorTpl),
	regions : {
		controls : '#controls-container',
		plaque : '#plaque-container',
		items : '#items-container'
	},
	
	initialize : function(options) {
		var self = this;
		this.model = new Product();
		this.products = new Products();
		this.products.fetch();
		this.model = this.products.findWhere({name: 'local.last.save'});
		if (this.model === undefined) {
			this.model = new Product();
		} else {
			console.log(this.model);
		}
		this.listenTo(vent, 'editor.save', function(){
			self.save();
		});
		this.controlsView = new ControlsView();
		this.plaqueView = new PlaqueView({model: this.model.get('plaque')});
		this.itemsView = new ColumnsView();
	},

	save : function() {
		console.log('save');
		this.model.set({
			date : moment().format('MMMM Do YYYY h:mm:ss a'),
			plaque : this.plaqueView.model
		});
		this.products.add(this.model);
		this.model.save();
	},

	onBeforeShow : function() {
		this.showChildView('controls', this.controlsView);
		this.showChildView('plaque', this.plaqueView);
		this.showChildView('items', this.itemsView);
	},
  });

  return EditorLayout;
});