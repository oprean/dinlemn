define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text!templates/disk.html',
  'text!templates/disk-edit.html'
], function($, _, Backbone, Marionette, diskTpl, diskEditTpl){
	var DiskView = Backbone.Marionette.ItemView.extend({
		template : _.template(diskTpl),
		tagName: 'li',
		events : {
			'click .view' : 'edit',
			'click .save' : 'save',
			'click .close' : 'del'
		},
		
		initialize : function(options) {
			this.columnDisks = options.disks;
			this.editMode = false;
		},
		
		edit : function() {
			this.editMode = true;
			this.render();
		},
		
		del : function() {
			this.columnDisks.remove(this.model);
		},
		
		save : function() {
			console.log('save');
			this.editMode = false;
			var day = this.$el.closest('#day').val();
			var name = this.$el.closest('#name').val();
			console.log(day);console.log(name);
			this.model.set({day:day, name:name});
		},
		
		onBeforeRender:function() {
			if (this.editMode == true) {
				this.template =	_.template(diskEditTpl);	
			} else {
				this.template =	_.template(diskTpl);
			}
		},
	});
	 
	return DiskView;
});