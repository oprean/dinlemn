define([
  'jquery',
  'underscore',
  'modules/Constants',
], function($, _, Constants){
	var Utils = {
		thumb: function(source) {
			var thumbData = null;
		    html2canvas(source, {
              onrendered: function(canvas) {         	
              	var scale = (100 * Constants.thumbSize) / Math.max(canvas.width, canvas.height);
              	var tw = (canvas.width * scale) / 100;
              	var th = (canvas.height * scale) / 100;
                var thumbCanvas = document.createElement("canvas");
                thumbCanvas.setAttribute('width',tw);
                thumbCanvas.setAttribute('height',th);
                var ctx = thumbCanvas.getContext('2d');
                ctx.drawImage(canvas,0,0,canvas.width, canvas.height,0,0,tw,th);
                thumbData = thumbCanvas.toDataURL();
              },
		    });

		    return thumbData;
		}
	};

	return Utils;
});
