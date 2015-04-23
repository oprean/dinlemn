define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'text!templates/controls.html',
  'modules/Constants',
  'modules/Events'
], function($, _, Backbone, Marionette, controlsTpl, Constants, vent){
	var ControlsView = Backbone.Marionette.ItemView.extend({
		template : _.template(controlsTpl),
		events : {
			'click #new' : 'new',
			'click #open' : 'open',
			'click #export2png' : 'export2png',
			'click #export2json' : 'export2json',
			'click #preview' : 'preview',
			'click #save' : 'save',
			'click #saveas' : 'saveas'
		},
		
		preview : function() {
			vent.trigger('editor.preview');
		},
		
		new : function() {
			vent.trigger('editor.new');
		},
		
		open : function() {
			vent.trigger('editor.open');
		},
		
		save : function() {
			vent.trigger('editor.save');
		},
		
		saveas : function() {
			vent.trigger('editor.saveas');
		},
		
		export2png : function() {
			console.log('export2png');
			vent.trigger('editor.preview');
		    html2canvas($('#product-container'), {
              onrendered: function(canvas) {         	
              	var scale = (100 * Constants.thumbSize) / Math.max(canvas.width, canvas.height);
              	var tw = (canvas.width * scale) / 100;
              	var th = (canvas.height * scale) / 100;
                var extra_canvas = document.createElement("canvas");
                extra_canvas.setAttribute('width',tw);
                extra_canvas.setAttribute('height',th);
                var ctx = extra_canvas.getContext('2d');
                ctx.drawImage(canvas,0,0,canvas.width, canvas.height,0,0,tw,th);
                var dataURL = extra_canvas.toDataURL();
                var img = $(document.createElement('img'));
                img.attr('src', dataURL);
                // insert the thumbnail at the top of the page
                $('body').append(img);
              },
		    });
		},
		
		export2json : function() {
			console.log('export2json');
		}
	});
	 
	return ControlsView;
});