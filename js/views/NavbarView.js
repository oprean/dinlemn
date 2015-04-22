define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'views/modals/LoginView',
  'text!templates/navbar.html',
  'modules/Events',
], function($, _, Backbone, Marionette, LoginView, navbarTpl, vent){
	var NavbarView = Backbone.Marionette.ItemView.extend({
		template : _.template(navbarTpl),
		events : {
			'click .btn-login' : 'login',
			'click .btn-logout' : 'logout'
		},
		
		initialize : function() {
			var self = this;
			this.listenTo(vent, 'user.logout', function(){
				self.render();
			});	
			this.listenTo(vent, 'user.login', function(){
				self.render();
			});
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
	 
	return NavbarView;
});