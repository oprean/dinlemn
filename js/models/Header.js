define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
	var Header = Backbone.Model.extend({
		defaults : {
			hid : _.uniqueId('h'),
			headerName : 'Column name',
			headerFont : 'Arial',
			width : '100'
		}
	});

	return Header;
});