define([
  'jquery',
  'underscore',
  'backbone',
  'modules/Events'
], function($, _, Backbone, vent){
	var Column = Backbone.Model.extend({
		defaults : {
			header : null,
			items : null,
		},
		
		initialize : function() {
			var self = this;
			/*this.listenTo(vent, 'item.new', function(item){
				console.log('listen column.new');
				console.log(self);
				self.items.add(item.data);
			});*/
		}
	});

	return Column;
});