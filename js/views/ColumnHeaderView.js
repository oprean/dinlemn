define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'text!templates/header.html',
  'modules/Events'
], function($, _, Backbone, Marionette, headerTpl, vent){
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
		
		edit : function(e) {
			$(e.target).attr('contenteditable', true);
			$(e.target).focus();
		},
	
		save : function(e) {
			this.model.set('title',$(e.target).html());
			$(e.target).removeAttr('contenteditable');			
		},
		
		onRender : function() {
			if (this.model.get('width')!=null) this.$el.css('width', this.model.get('width'));
		}
	}); 

	return ColumnHeaderView;
});