define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/editor.html',
  'views/PlaqueView',
  'views/DisksView'
], function($, _, Backbone, Marionette, editorTpl, PlaqueView, DisksView){
  var EditorLayout = Backbone.Marionette.LayoutView.extend({
	template : editorTpl,
	regions : {
		plaque : '#plaque-container',
		disks : '#disks-container'
	},
	
	events : {
		'click #export' : 'export'
	},

	initialize : function(options) {
		this.plaqueView = new PlaqueView();
		this.disksView = new DisksView();
	},

	onBeforeShow : function() {
		this.showChildView('plaque', this.plaqueView);
		this.showChildView('disks', this.disksView);
	},
	
	export : function() {
		console.log('export');
	}
  });

  return EditorLayout;
});