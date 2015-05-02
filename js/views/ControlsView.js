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
			'click #open' : 'open',
			'click #export2png' : 'export2png',
			'click #export2json' : 'export2json',
			'click #preview' : 'preview',
			'click #save' : 'save',
			'click #saveas' : 'saveas',
			'change #wall' : 'changeWall',
			'click .new-product' : 'newItem'
		},
		
		initialize : function() {
			this.fileMenu = [
				{id: 'open', text:'Open...', href:'#'},
				{id: 'save', text:'Save', href:'#'},
				{id: 'saveas', text:'Save as...', href:'#'},
				{id: 'export2png', text:'Export as PNG...', href:'#'},
				{id: 'export2json', text:'Export as JSON...', href:'#'},
				{id: 'importJson', text:'Import from PNG...', href:'#'},
			];
			this.newMenu = [
				{id: null, role: 'presentation', cssclass: 'new-product dropdown-header', data: null, text:'Calendars', href:'#'},
				{id: null, role: null, cssclass: 'new-product', data: 'blank-calendar', text:'Blank', href:'#'},
				{id: null, role: null,  cssclass: 'new-product', data: 'month-calendar', text:'Months', href:'#'},
				{id: null, role: null,  cssclass: 'new-product', data: 'random-calendar', text:'Random', href:'#'},
				{id: null, role: 'presentation', cssclass: 'new-product dropdown-header', data: null, text:'Jewellery', href:'#'},
				{id: null, role: null,  cssclass: 'new-product', data: 'ring', text:'Ring', href:'#'},
				{id: null, role: null,  cssclass: 'new-product', data: 'earrings', text:'Earrings', href:'#'},
				{id: null, role: null,  cssclass: 'new-product', data: 'pendants', text:'Pendants', href:'#'},
			];
			this.walls = Constants.wallTypes;
		},

		templateHelpers : function() {
			return {
				filemenu: this.fileMenu,
				newmenu: this.newMenu,
				walls: this.walls
			};
		},
		
		changeWall : function(e) {
			$('body').css('background', 'url("assets/img/wall/' + $(e.target).val() + '.png")');
		},
		
		preview : function() {
			vent.trigger('editor.preview');
		},
		
		newItem : function(e) {
			e.preventDefault();
			vent.trigger('editor.new', $(e.target).data('id'));
		},
		
		open : function(e) {
			e.preventDefault();
			vent.trigger('editor.open');
		},
		
		save : function(e) {
			e.preventDefault();
			vent.trigger('editor.save');
		},
		
		saveas : function(e) {
			e.preventDefault();
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