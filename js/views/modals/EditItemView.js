define([
  'jquery',
  'underscore',
  'backbone',
  'modules/Utils',
  'modules/Constants',
  'text!templates/modals/item-edit.html',
  'dropzone',
  'backbone.modal',
], function($, _, Backbone, Utils, Constants, editItemTpl, dropzone){
	var EditItemView = Backbone.Modal.extend({
		template: _.template(editItemTpl),
		submitEl: '.btn-submit',
		cancelEl: '.btn-cancel',
		events : {
			'click .image-url-tab' : 'toggleImageTabs',
			'click .image-file-tab' : 'toggleImageTabs'
		},
		initialize : function() {
			this.fileSource = 'url';
			console.log('init modal');
		},
		
		toggleImageTabs : function() {
			this.fileSource = (this.fileSource == 'url')?'file':'url';
			this.$('#image-url').toggle();
			this.$('#image-file').toggle();
			if (this.fileSource == 'url') {
				this.$('.image-url-tab').parent().addClass('active');
				this.$('.image-file-tab').parent().removeClass('active');				
			} else {
				this.$('.image-url-tab').parent().removeClass('active');
				this.$('.image-file-tab').parent().addClass('active');
			}
		},
		
		templateHelpers : function() {
			return {
				fileSource : this.fileSource,
				woodTypes : Constants.woodTypes,
				shapeTypes : Constants.shapeTypes
			};
		},
		
		onRender : function() {
			$("#image-file").dropzone({ url: "/file/post" });
		},
		
		submit: function() {
			console.log('submit');
			this.model.set({
				line1 : $('#line1').val(),
				line2 : $('#line2').val(),
				shape : $('#shape').val(),
				image : $('#image').val(),
				wood : $('#wood').val(),
				width : $('#width').val(),
				height : $('#height').val(),
			});
			//this.$('#item-edit-form').submit();
			Utils.upload('image-file',0);
		}	
			
	});

	return EditItemView;
});