define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'text!templates/ring/ring.html',
  'models/Ring',
  'modules/Constants',
  'modules/Events',

], function($, _, Backbone, Marionette, ringTpl, Ring, Constants, vent){
	var RingView = Backbone.Marionette.ItemView.extend({
		className : 'ring',
		template :  _.template(ringTpl),
		events : {
		},
		
		modelEvents : {
			'change' : 'render',
			'change:width' : 'changeWidth'
		},
		

		
		initialize : function(options) {
			var self = this;
		},
		
		templateHelpers : function() {
			return {
				profileTypes : Constants.profileTypes 
			};
		},
		
		onRender : function() {			
			this.$('.select-wood').selectTexture({
				basePath: 'assets/img/plaque/',
				textures: Constants.woodTypes
			});

			if (this.model.get('width')!=null && this.model.get('width')!=0) 
				this.$el.css('width', this.model.get('width') * Constants.scale);

		},
		
		selectWood : function(e) {
			this.model.set('wood', $(e.target).data('texture'));
		}
	});
	
	return RingView;
});