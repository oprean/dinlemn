define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
	var ColumnHeader = Backbone.Model.extend({
		defaults : {
			headerName : 'Column name',
			headerFont : 'Arial',
			width : '100'
		}
	});

	return ColumnHeader;
});