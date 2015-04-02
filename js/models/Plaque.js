define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
	var Plaque = Backbone.Model.extend({
		defaults : {
			title : 'Family Birthdays',
			wood : 'purty_wood',
			width : 320,
			height : null,
		},
		
		validation : {
			title : {
				rangeLength : [3, 200],
				required : true
			},
			width : {
				range : [100, 500],
				required : false
			},
			height : {
				range : [50, 100],
				required : false
			},
		}
	});

	return Plaque;
});