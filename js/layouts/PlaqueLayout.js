define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'collections/Columns',
  'models/Plaque',
  'text!templates/plaque-layout.html',
  'views/PlaqueView',
  'views/HeadersView',
  'modules/Events',
  'moment',
], function($, _, Backbone, Marionette, Columns, Plaque, plaqueLayoutTpl, PlaqueView, HeadersView, vent, moment){
  var PlaqueLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(plaqueLayoutTpl),
	className : 'plaque',
	regions : {
		plaque : '#plaque-top-container',
		headers : '#plaque-headers-container'
	},
	
	initialize : function(options) {
		console.log('init plaque layout');
		this.model = options.dataModel.get('plaque');
		var self = this;
		this.plaqueView = new PlaqueView({
			dataModel: options.dataModel,
		});
		
		this.headersView = new HeadersView({
			dataModel: options.dataModel,
		});
	},

	onRender : function() {
		this.$el.css('background-image', 'url("assets/img/plaque/' + this.model.get('wood') + '.png")');
	},

	onBeforeShow : function() {
		this.showChildView('plaque', this.plaqueView);
		this.showChildView('headers', this.headersView);
	},
  });

  return PlaqueLayout;
});