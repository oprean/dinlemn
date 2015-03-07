define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/header.html',
  'modules/Events'
], function($, _, Backbone, Marionette, headerTpl, headerEditTpl, vent){
	var ColumnHeaderView = Backbone.Marionette.ItemView.extend({
		template : _.template(headerTpl),
		tagName: 'li',
		
		modelEvents : {
			'change' : 'render'
		},
		
		events : {
			'click .headerName' : 'edit',
			'blur .headerName' : 'save'
		},
		
		/*initialize : function() {
			self = this;
			this.listenTo(vent, 'column.new', function(){
				var plaqueWidth = $("#plaque-container").width();
				var columnWidth = plaqueWidth / 100;
				self.model.set({width:columnWidth});
			});
		},*/
		
		edit : function(e) {
			$(e.target).attr('contenteditable', true);
			$(e.target).focus();
		},
	
		save : function(e) {
			this.model.set('headerName',$(e.target).html());
			$(e.target).removeAttr('contenteditable');			
		},
	}); 

	return ColumnHeaderView;
});