define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'views/ProductPreview',
  'modules/Events',
  'moment'
], function($, _, Backbone, Marionette,ProductPreview, vent, moment){
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
			    var productPreview = new ProductPreview({model:this.model});
			    self.showChildView('preview', productPreview);
			    vent.trigger('product.selected', this.model);
			  }
			});
		
			Backgrid.ActionsCell = Backgrid.Cell.extend({
			  className: "actions-cell",
			  events : {
			  	'click .del' : 'delete'
			  },
			  
			  delete : function() {
			  	this.model.destroy();
			  },
			  
			  render : function() {
			  	this.$el.html('<button type="button" title="Delete item" class="del icon-btn pull-right"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>');
			  	return this;
			  }			
			});
			
			Backgrid.UpdatedCell = Backgrid.Cell.extend({
			  className: "updated-cell",
			  render : function() {
			  	this.$el.html(moment(this.model.updatedAt).format('YYYY-MM-DD'));
			  	return this;
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
			    name: "updatedAt",
			    label: "Updated",
			    editable: false,
			    sortable: false,
			    cell: "updated",
			  },
			  {
			    name: "actions",
			    label: "",
			    editable: false,
			    sortable: false,
			    cell: "actions",
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