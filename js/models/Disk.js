define([
  'jquery',
  'underscore',
  'backbone',
  'modules/Constants'
], function($, _, Backbone, Constants){
	var Disk = Backbone.Model.extend({
		urlRoot : Constants.basePath + '/api/ticket',
		defaults : {
			name : 'none',
			day : '00',
			type : 'round',
			material : 'wood'
		},
	});

	return Disk;
});