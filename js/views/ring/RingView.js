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
		className : 'ring-zone',
		template :  _.template(ringTpl),
		events : {
		},
		
		modelEvents : {
			'change' : 'render',
		},
		
		initialize : function(options) {
			this.model = new Ring();
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

			if (this.model.get('size')!=null && this.model.get('size')!=0) {
				this.$('.the-ring').css('width', this.model.get('size') * Constants.rscale);
				this.$('.the-ring').css('height', this.model.get('size') * Constants.rscale);
				this.$('.inside-ring').css('width', (this.model.get('size')-3) * Constants.rscale);				
				this.$('.inside-ring').css('height', (this.model.get('size')-3) * Constants.rscale);
			}


		},
		
		selectWood : function(e) {
			this.model.set('wood', $(e.target).data('texture'));
		}
	});
	
	return RingView;
});