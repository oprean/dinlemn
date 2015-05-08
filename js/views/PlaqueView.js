define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'text!templates/calendar/plaque.html',
  'models/Plaque',
  'models/Header',
  'collections/Items',
  'models/Column',
  'collections/Columns',
  'views/HeaderView',
  'views/modals/EditPlaqueView',
  'modules/Constants',
  'modules/Events',
  'modules/behaviors.sortable'
], function($, _, Backbone, Marionette, plaqueTpl, Plaque, Header, Items, Column, Columns, HeaderView, EditPlaqueView, Constants, vent, Sortable){
	var PlaqueView = Backbone.Marionette.CompositeView.extend({
		childView : HeaderView,
		childViewContainer: "ul.headers",
		className : 'plaque text-center center-block',
		template :  _.template(plaqueTpl),
		events : {
			'click h1' : 'edit',
			'blur h1' : 'save',
			'click #addColumn' : 'addColumn',
			'click #editPlaque' : 'editPlaque',
			'change #selectWood' : 'selectWood',
			'click .select-wood .texture' : 'selectWood',
		},
		
		modelEvents : {
			'change' : 'render',
			'change:width' : 'changeWidth'
		},
		
		behaviors: { 
		    Sortable:{ 
		    	behaviorClass : Sortable,
		        containment:'parent',
		        element: 'ul.headers',
		        axis:'x',
		    }
		},
		
		initialize : function(options) {
			var self = this;
			this.model = options.dataModel.get('plaque');
			this.collection = options.dataModel.get('columns');
			this.listenTo(vent, 'column.del', function(column){
				self.collection.remove(column.data);
				self.render();
			});
			this.listenTo(vent, 'editor.preview', function(){
				this.$('.icon-btn').toggle();
				this.$('.edit-mode-only').toggle();
				this.$('select').toggle();
			});
		},
		
		templateHelpers : function() {
			return {
				woodTypes : Constants.woodTypes 
			};
		},
		
		onRender : function() {			
			this.$('.select-wood').selectTexture({
				basePath: 'assets/img/plaque/',
				textures: Constants.woodTypes
			});
			
			if (this.model.get('image')!= null && this.model.get('image')!= '') {
				this.$el.css('background-image', 'url("' + this.model.get('image') + '")');
				this.$el.css('background-size', 'cover');			
			} else {
				this.$el.css('background-image', 'url("assets/img/plaque/' + this.model.get('wood') + '.png")');
			}

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

		changeWidth : function() {
			vent.trigger('plaque.width', this.model.get('width'));
		},

		save : function(e) {
			this.model.set('title',$(e.target).html());
			$(e.target).removeAttr('contenteditable');			
		},
		
		addColumn : function() {	
			var column = new Column({
				header : new Header(),
				items : new Items()
			});
			this.collection.add(column);
		},
		
		selectWood : function(e) {
			this.model.set('wood', $(e.target).data('texture'));
		}
	});
	
	return PlaqueView;
});