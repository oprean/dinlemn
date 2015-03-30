define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'text!templates/plaque.html',
  'models/Plaque',
  'models/Header',
  'models/Column',
  'collections/Items',
  'views/modals/EditPlaqueView',
  'modules/Constants',
  'modules/Events',
], function($, _, Backbone, Marionette, plaqueTpl, Plaque, Header, Column, Items, EditPlaqueView, Constants, vent){
	var PlaqueView = Backbone.Marionette.ItemView.extend({
		className : 'text-center center-block',
		template :  _.template(plaqueTpl),
		events : {
			'click h1' : 'edit',
			'blur h1' : 'save',
			'click #addColumn' : 'addColumn',
			'click #editPlaque' : 'editPlaque',
			'change #selectWood' : 'selectWood'
		},
		
		initialize : function(options) {
			var self = this;
			this.model = options.dataModel.get('plaque');
		},
		
		templateHelpers : function() {
			return {
				woodTypes : Constants.woodTypes 
			};
		},
		
		onRender : function() {		
			//this.$el.css('background-image', 'url("assets/img/plaque/' + this.model.get('wood') + '.png")');
			if (this.model.get('width')!=null && this.model.get('width')!=0) 
				this.$el.css('width', this.model.get('width') * Constants.scale);
			if (this.model.get('height')!=null && this.model.get('height')!=0) 
				this.$el.css('height', this.model.get('height') * Constants.scale);
		},
		
		edit : function(e) {
			$(e.target).attr('contenteditable',true);
			$(e.target).focus();
		},

		editPlaque : function() {
			var editPlaqueView = new EditPlaqueView({model:this.model});
			vent.trigger('showModal', editPlaqueView);
		},

		save : function(e) {
			this.model.set('title',$(e.target).html());
			$(e.target).removeAttr('contenteditable');			
		},
		
		addColumn : function() {
			vent.trigger('column.new', {data:new Column({
				header : new Header(),
				items : new Items(),
			})});
		},
		
		selectWood : function(e) {
			this.model.set('wood', $(e.target).val());
			this.render();
		}
	});
	
	return PlaqueView;
});