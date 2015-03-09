define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/plaque.html',
  'models/Plaque',
  'models/ColumnHeader',
  'collections/ColumnHeaders',
  'views/ColumnHeaderView',
  'modules/Constants',
  'modules/Events',
], function($, _, Backbone, Marionette, plaqueTpl, Plaque, ColumnHeader, ColumnHeaders, ColumnHeaderView, Constants, vent){
	var PlaqueView = Backbone.Marionette.CompositeView.extend({
		childView : ColumnHeaderView,
		childViewContainer: "ul.headers",
		className : 'plaque',
		template :  _.template(plaqueTpl),
		events : {
			'click h1' : 'edit',
			'blur h1' : 'save',
			'click #addColumn' : 'addColumn',
			'change #selectWood' : 'selectWood'
		},
		
		initialize : function() {
			this.model = new Plaque();
			this.collection = new ColumnHeaders(); 
		},
		
		templateHelpers : function() {
			return {
				woodTypes : Constants.woodTypes 
			};
		},
		
		onRender : function() {		
			this.$el.css('background-image', 'url("assets/img/wood/' + this.model.get('wood') + '.jpg")');
		},
		
		edit : function(e) {
			$(e.target).attr('contenteditable',true);
			$(e.target).focus();
		},

		save : function(e) {
			this.model.set('title',$(e.target).html());
			$(e.target).removeAttr('contenteditable');			
		},
		
		addColumn : function() {	
			var columnHeader = new ColumnHeader();
			this.collection.add(columnHeader);
			vent.trigger('column.new', columnHeader);
		},
		
		selectWood : function(e) {
			console.log($(e.target).val());
			this.model.set('wood', $(e.target).val());
			this.render();
		}
	});
	
	return PlaqueView;
});