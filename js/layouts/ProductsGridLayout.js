define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
], function($, _, Backbone, Marionette,WProducts){
	var ProductsGridLayout = Backbone.Marionette.LayoutView.extend({
		el:'.product.grid',
		regions : {
			grid : '.grid',
			paginator : '.paginator'
		},

		initialize : function(options) {
			var self = this;
			this.collection = options.products;				
			this.columns = [
			  {
			    name: "name",
			    label: "Name",
			    editable: false,
			    sortable: false,
			    cell: "string",
			  },
			  {
			    name: "author",
			    label: "Author",
			    editable: false,
			    sortable: false,
			    cell: "string",
			  },
			];
			
			this.collection.fetch({
				success : function(collection, response, options) {
					self.backgridView = new Backgrid.Grid({
					  className: 'backgrid items table table-striped table-bordered table-hover',
					  columns: self.columns,
					  collection: collection,
					  emptyText: "A man without history is a tree without roots.",
					});
					self.showChildView('grid', self.backgridView);

				},
				error : function(collection, response, options) {
				}
			}); 
		},
		
		onRender : function() {
		}
	});
	
  	return ProductsGridLayout;
});