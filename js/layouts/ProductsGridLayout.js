define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'views/ProductPreview',
  'modules/Events',
], function($, _, Backbone, Marionette,ProductPreview, vent){
	var ProductsGridLayout = Backbone.Marionette.LayoutView.extend({
		el:'.product-grid',
		regions : {
			grid : '.grid',
			preview : '.preview',
			paginator : '.paginator'
		},

		initialize : function(options) {
			var self = this;
			products = options.products;

			var ProductRow = Backgrid.Row.extend({
			  events: {
			    click: 'preview',
			  },
			  preview: function() {
			    console.log(this.model);
			    var productPreview = new ProductPreview({model:this.model});
			    self.showChildView('preview', productPreview);
			    vent.trigger('product.selected', this.model);
			  }
			});
		
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
			  {
			    name: "date",
			    label: "Date",
			    editable: false,
			    sortable: false,
			    cell: "string",
			  },
			];
			
			this.backgridView = new Backgrid.Grid({
			  className: 'backgrid items table table-striped table-bordered table-hover table-condensed',
			  row: ProductRow,
			  columns: this.columns,
			  collection: products,
			  emptyText: "A man without history is a tree without roots.",
			});
			this.showChildView('grid', this.backgridView); 
		},
		
		onRender : function() {
		}
	});
	
  	return ProductsGridLayout;
});