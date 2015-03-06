define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
	var Plaque = Backbone.Model.extend({
		defaults : {
			title : 'Aniversarile familiei',
			month1 : 'Ianuarie',
			month2 : 'Februarie',
			month3 : 'Martie',
			month4 : 'Aprilie',
			month5 : 'Mai',
			month6 : 'Iunie',
			month7 : 'Iulie',
			month8 : 'August',
			month9 : 'Septembrie',
			month10 : 'Octombrie',
			month11 : 'Noiembrie',
			month12 : 'Decembrie'
		}
	});

	return Plaque;
});