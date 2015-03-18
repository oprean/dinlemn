define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/editor.html',
  'views/PlaqueView',
  'views/ItemsView',
  'views/ControlsView'
], function($, _, Backbone, Marionette, editorTpl, PlaqueView, ItemsView, ControlsView){
  var EditorLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(editorTpl),
	regions : {
		controls : '#controls-container',
		plaque : '#plaque-container',
		items : '#items-container'
	},
	
	initialize : function(options) {
		this.controlsView = new ControlsView();
		this.plaqueView = new PlaqueView();
		this.itemsView = new ItemsView();
	},

	onBeforeShow : function() {
		this.showChildView('controls', this.controlsView);
		this.showChildView('plaque', this.plaqueView);
		this.showChildView('items', this.itemsView);
	},
  });

  return EditorLayout;
});