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
  'modules/Constants',
  'modules/Events',
], function($, _, Backbone, Marionette, plaqueTpl, Plaque, Header, Headers, ColumnHeaderView, Constants, vent){
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
			self = this;
			this.model = new Plaque();
			this.collection = new Headers(); 
			this.listenTo(vent, 'column.del', function(header){
				console.log('del header!');
				console.log(header.get('hid'));
				console.log('plaque headers collection on remove header:');
				console.log(self.collection);
				var h = self.collection.findWhere({'hid':header.get('hid')});
				console.log(h);
				self.collection.remove(h);
				console.log(self.collection);
				this.render();
			});
		},
		
		templateHelpers : function() {
			return {
				woodTypes : Constants.woodTypes 
			};
		},
		
		onRender : function() {		
			this.$el.css('background-image', 'url("assets/img/plaque/' + this.model.get('wood') + '.png")');
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
			var header = new Header();
			this.collection.add(header);
			console.log('plaque headers collection on add new column:');
			console.log(this.collection);
			vent.trigger('column.new', header);
		},
		
		selectWood : function(e) {
			console.log($(e.target).val());
			this.model.set('wood', $(e.target).val());
			this.render();
		}
	});
	
	return PlaqueView;
});