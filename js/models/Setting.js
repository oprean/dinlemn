define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var Setting = Backbone.Model.extend({
	defaults: {
		user_id : null,
		user_name : null,
		key: null,
		value: null
	},
  });
  return Setting;
});