define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'views/modals/LoginView',
  'text!templates/top-header.html',
  'modules/Constants',
  'modules/Events',
], function($, _, Backbone, Marionette, LoginView, topHeaderTpl, Constants, vent){
	var TopHeaderView = Backbone.Marionette.ItemView.extend({
		template : _.template(topHeaderTpl),
		events : {
			'click .btn-login' : 'login',
			'click .btn-logout' : 'logout',
			'click .nav-item' : 'navigate',
		},
		
		initialize : function() {
			var self = this;
			this.selected = null;
			this.listenTo(vent, 'user.logout', function(){
				self.render();
			});	
			this.listenTo(vent, 'user.login', function(){
				self.render();
			});
		},
		
		templateHelpers : function() {
			return {
				menu : Constants.mainMenu,
				selected : this.selected
			};
		},
		
		navigate : function(e) {
			this.selected = $(e.target).attr('href');
			this.render();
		},
		
		login : function(e) {
			var loginView = new LoginView({model:this.model});
			vent.trigger('showModal', loginView);
			e.stopPropagation();
		},
		
		logout : function() {
			Parse.User.logOut();
			vent.trigger('user.logout');
			
		}
	});
	 
	return TopHeaderView;
});