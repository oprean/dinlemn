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
			wood : 'wood',
			image : null,
			shape : 'round',
			width : null,
			height : null
		},
	});

	return Item;
});