(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );
	} else {
		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

$.widget("ui.selectTexture", {
	options: {
		basePath: null,
		textures: null,
		ext: '.png',
		cssClass: 'btn-sm texture',
		display: 'inline',
		btnBorder: '1px solid #000000',
	},
	
	_create: function() {
		this._buttons = $("<span>");
		var self = this;
		$.each(this.options.textures, function( i, texture ) {
			self._buttons.append(
			'<button type="button" ' + 
				'class="btn btn-texture ' + self.options.cssClass + '" ' + 
  				'data-texture="' + texture + '" ' + 
  				'style="background: url(\''+ self.options.basePath + texture + self.options.ext + '\');' +
  						'border: ' + self.options.btnBorder + ';' +
  				'">&nbsp;&nbsp;' +
  			'</button>\n '
  			);
		});                 
		$(this.element).append(this._buttons); 
		$(this.element).css('display',this.options.display);
		$(this.element).addClass('select-texture-control');
		
	},
	
	_setOption: function(option, value) {
		$.Widget.prototype._setOption.apply( this, arguments );
	}
});

}));