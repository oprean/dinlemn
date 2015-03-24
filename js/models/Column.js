define([
  'jquery',
  'underscore',
  'backbone',
  'models/Header',
  'collections/Items',
], function($, _, Backbone, Header, Items){
	var Column = Backbone.Model.extend({
		defaults : {
			header : new Header(),
			items : new Items(),
		}
	});

	return Column;
});