define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
	var Plaque = Backbone.Model.extend({
		urlRoot : basePath + '/api/ticket',
		stale: ['editMode', 'CUSTOMER_ID'],
		toJSON: function() {
			return _.omit(this.attributes, this.stale);
		}
	});

	return Plaque;
});