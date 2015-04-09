// See: http://kukuruku.co/hub/jquery/marionettejs-dragdrop-model-sorting-in-the-collection#comments
define([
  'jquery',
  'underscore',
  'backbone',
  'backbone.marionette',
  'jqueryui',
], function($, _, Backbone, Marionette){
	console.log('load behaviour');
	var Sortable = Marionette.Behavior.extend({ 
	    onRender:function(){
	        var  collection=this.view.collection // Close the collection
	            ,items=this.view.children._views // Get the list of  child elements
	            ,element 
	            ,view
	            ;
	        for(var v in items){
	            view=items[v];
	            // Hook the element to the model by cid
	            view.$el.attr('data-backbone-cid',view.originalModel.cid);
	        }
	        element = (this.options.element != undefined)?this.$(this.options.element):this.$el;
	        element.sortable({ // Make the list sortable
	            axis: this.options.axis||false,
	            grid: this.options.grid||false,
	            containment: this.options.containment||false,
	            cursor: "move",
	            handle:this.options.handle||false,
	            revert: this.options.revert||false,
	            update: function( event, ui ) {
	                var model=collection.get(ui.item.data('backbone-cid'));
	                // Get an attached model 
	                collection.remove(model,{silent:true});
	                 // On the quiet remove it from the collection 
	                collection.add(model,{at:ui.item.index(),silent:true});
	                 //And sneakily add it to the necessary index
	            }
	        });
	    }
	});
	
	return Sortable;
});