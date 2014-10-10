/*  Author Details
	==============
	Author: Ranjith Pandi

	Author URL: http://ranjithpandi.com

	Attribution is must on every page, where this work is used.

	For Attribution removal request. please consider contacting us through http://ranjithpandi.com/#contact
*/

;(function($){
	rgb2hex = function(rgb) {
		var rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
	}

	hex = function(x) {
		var hexDigits = new Array ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");
		return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
	}

	$.fn.textColor = function(){
		var bright,
			color = this.css("background-color");

		if (typeof color == 'undefined' || color == 'transparent') return "#000000";

		if(color.match(/^rgb/)) {
			color = rgb2hex(color);
		}

		bright = parseInt(color.substr(1, 2), 16) + parseInt(color.substr(3, 2), 16) + parseInt(color.substr(5, 2), 16);
		if(bright < 400){
			$(this).css('color', '#FFFFFF');
		}else{
			$(this).css('color', '#000000');
		}
	}
})(jQuery);