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
		
		validation : {
			width : {
				range : [100, 500],
				required : false
			},
			height : {
				range : [50, 100],
				required : false
			},
			image : {
				required : false
			}
		}
	});

	return Item;
});