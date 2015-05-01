define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'views/JumbotronView',
  'text!templates/layouts/home-layout.html',
  'modules/Constants',
  'modules/Utils',
  'modules/Events',
], function($, _, Backbone, Marionette, JumbotronView, homeLayoutTpl, Constants, Utils, vent){
  var HomeLayout = Backbone.Marionette.LayoutView.extend({
	template : _.template(homeLayoutTpl),
	regions : {
		jumbotron : '.jumbotron-container',
	},
	
	initialize : function() {
		this.jumbotronView = new JumbotronView();
	},

	onRender : function() {
		/*$('body').css('background', 'url("assets/img/carousel/DSC_0001.jpg")');
		$('body').css('background-repeat', 'no-repeat');*/  
	},

	onBeforeShow : function() {
		this.showChildView('jumbotron', this.jumbotronView);
	},
  });

  return HomeLayout;
});