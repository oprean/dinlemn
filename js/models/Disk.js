define([
  'jquery',
  'underscore',
  'backbone',
  'modules/consts'
], function($, _, Backbone, Consts){
	var Disk = Backbone.Model.extend({
		urlRoot : Consts.basePath + '/api/ticket',
		defaults : {
			name : 'none',
			day : '00',
			type : 'round',
			material : 'wood'
		},
	});

	return Disk;
});