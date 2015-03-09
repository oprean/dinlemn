define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
	var Column = Backbone.Model.extend({
		defaults : {
			header : null,
			disks : null
		}
	});

	return Column;
});