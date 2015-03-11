define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/editor.html',
  'views/PlaqueView',
  'views/ItemsView'
], function($, _, Backbone, Marionette, editorTpl, PlaqueView, ItemsView){
  var EditorLayout = Backbone.Marionette.LayoutView.extend({
	template : editorTpl,
	regions : {
		plaque : '#plaque-container',
		items : '#items-container'
	},
	
	events : {
		'click #export' : 'export'
	},

	initialize : function(options) {
		this.plaqueView = new PlaqueView();
		this.itemsView = new ItemsView();
	},

	onBeforeShow : function() {
		this.showChildView('plaque', this.plaqueView);
		this.showChildView('items', this.itemsView);
	},
	
	export : function() {
		console.log('export');
	}
  });

  return EditorLayout;
});