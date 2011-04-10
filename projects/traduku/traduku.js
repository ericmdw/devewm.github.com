$(document).ready(function() {
	var bigimg_handler_code = "$(this).parents('div.img_takeover').remove();"
	
	var thumbnail_handler = function() {
		$(
			'<div class="img_takeover" style="position: fixed; top: 0; left: 0; width: 100%; height:100%; background-color: #4c4c4c; text-align: center; padding-top: 50px"><img src="' + this.src + '" onclick="' + bigimg_handler_code + '" style="margin: auto auto;"/></div>'
		).appendTo('body');
	};
	
	$('.screenshot img').bind('click', thumbnail_handler);
});