define([
  'jquery',
  'underscore',
  'backbone',
  'modules/Constants',
  'text!templates/login.html',
  'modules/Events',
], function($, _, Backbone, Constants, loginTpl, vent){
	var LoginView = Backbone.Modal.extend({
		template: _.template(loginTpl),
		submitEl: '.btn-submit',
		cancelEl: '.btn-cancel',
		events : {
			
		},
		initialize : function() {
		},
		
		onRender : function() {
		},
		
		beforeSubmit : function() {
			var self = this;
			Parse.User.logIn(this.$('#userName').val(), this.$('#userPassword').val(), {
			  success: function(user) {
				vent.trigger('user.login');
			    return true;
			  },
			  error: function(user, error) {
			    console.log(error);
			    return false;
			  }
			});
		},
		
		submit: function() {
			console.log('you are logged in!');
		}	
			
	});

	return LoginView;
});