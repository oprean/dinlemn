define([
  'jquery',
  'underscore',
  'backbone',
  'modules/consts'
], function($, _, Backbone, Consts){
	var Disk = Backbone.Model.extend({
		urlRoot : Consts.basePath + '/api/ticket',
		stale: ['editMode', 'CUSTOMER_ID'],
		toJSON: function() {
			return _.omit(this.attributes, this.stale);
		}
	});

	return Disk;
});