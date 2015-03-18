define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/controls.html',
  'modules/Events'
], function($, _, Backbone, Marionette, controlsTpl, vent){
	var ControlsView = Backbone.Marionette.ItemView.extend({
		template : _.template(controlsTpl),
		events : {
			'click #export2png' : 'export2png',
			'click #export2json' : 'export2json',
			'click #save' : 'save'
		},
		
		save : function() {
			vent.trigger('save.editor');
		},
		
		export2png : function() {
			console.log('export2png');
		    html2canvas($('#editor-container'), {
			    onrendered: function(canvas) {
			    	document.body.appendChild(canvas);
			    }
		    });
		},
		
		export2json : function() {
			console.log('export2json');
		}
	});
	 
	return ControlsView;
});