define([
  'jquery',
  'underscore',
  'backbone',
  'modules/Constants'
], function($, _, Backbone, Constants){
	var Item = Backbone.Model.extend({
		urlRoot : Constants.basePath + '/api/ticket',
		defaults : {
			line1 : 'text1',
			line2 : 'text2',
			form : 'round',
			type : 'text',
			material : 'wood',
			width : null,
			height : null
		},
	});

	return Item;
});