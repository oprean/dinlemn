define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/plaque.html',
  'models/Plaque',
  'models/Header',
  'collections/Headers',
  'views/ColumnHeaderView',
  'views/modals/EditPlaqueView',
  'modules/Constants',
  'modules/Events',
], function($, _, Backbone, Marionette, plaqueTpl, Plaque, Header, Headers, ColumnHeaderView, EditPlaqueView, Constants, vent){
	var PlaqueView = Backbone.Marionette.CompositeView.extend({
		childView : ColumnHeaderView,
		childViewContainer: "ul.headers",
		className : 'plaque text-center center-block',
		template :  _.template(plaqueTpl),
		events : {
			'click h1' : 'edit',
			'blur h1' : 'save',
			'click #addColumn' : 'addColumn',
			'click #editPlaque' : 'editPlaque',
			'change #selectWood' : 'selectWood'
		},
		
		modelEvents : {
			'change' : 'render'
		},
		
		initialize : function() {
			var self = this;
			this.model = new Plaque();
			this.collection = new Headers(); 
			this.listenTo(vent, 'column.del', function(header){
				self.collection.remove(header);
			});
		},
		
		templateHelpers : function() {
			return {
				woodTypes : Constants.woodTypes 
			};
		},
		
		onRender : function() {		
			this.$el.css('background-image', 'url("assets/img/plaque/' + this.model.get('wood') + '.png")');
			if (this.model.get('width')!=null) this.$el.css('width', this.model.get('width'));
			if (this.model.get('height')!=null) this.$el.css('height', this.model.get('height'));
			
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
			var header = new Header();
			this.collection.add(header);
			vent.trigger('column.new', header);
		},
		
		selectWood : function(e) {
			this.model.set('wood', $(e.target).val());
			this.render();
		}
	});
	
	return PlaqueView;
});