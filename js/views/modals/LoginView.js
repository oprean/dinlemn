define([
  'jquery',
  'underscore',
  'backbone',
  'modules/Constants',
  'text!templates/modals/login.html',
  'text!templates/modals/signup.html',
  'modules/Events',
], function($, _, Backbone, Constants, loginTpl, signupTpl, vent){
	var LoginView = Backbone.Modal.extend({
		template: _.template(loginTpl),
		submitEl: '.btn-submit',
		cancelEl: '.btn-cancel',
		events : {
			'click .signup-btn' : 'signup',
			'click .login-btn' : 'login'
		},
		initialize : function() {
			this.mode = 'login';
		},
		
		signup : function() {
			this.mode = 'signup';
			this.$('.signup-form-container').toggle();
			this.$('.login-form-container').toggle();
		},
		
		login : function() {
			this.mode = 'login';
			this.$('.signup-form-container').toggle();
			this.$('.login-form-container').toggle();
		},
		
		onRender : function() {
		},
		
		beforeSubmit : function() {
			var self = this;
			var result = true;
			if (this.mode == 'login') {
				Parse.User.logIn(this.$('#login-username').val(), this.$('#login-password').val(), {
				  success: function(user) {
					vent.trigger('user.login');
				  },
				  error: function(user, error) {
				  	self.$('.help-block').html(error.message);
				    console.log(error);
				    result = false;
				  }
				});	
			} else {
				var user = new Parse.User();
				user.set("username", this.$('#signup-username').val());
				user.set("password", this.$('#signup-password').val());
				user.set("email", this.$('#signup-email').val());
				user.signUp(null, {
				  success: function(user) {
					vent.trigger('user.login');
				  },
				  error: function(user, error) {
				  	self.$('.help-block').html(error.message);
				    console.log(error);
				    result = false;
				  }
				});		
			}
			
			return result;
		},
		
		submit: function() {
			console.log('you are logged in!');
		}	
			
	});

	return LoginView;
});