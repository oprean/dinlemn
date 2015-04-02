define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
	var Header = Backbone.Model.extend({
		defaults : {
			title : 'Column name',
			width : 25
		}
	});

	return Header;
});