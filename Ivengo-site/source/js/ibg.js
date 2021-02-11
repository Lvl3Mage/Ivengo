$('.ibg').each(function(index, el) {
	str = '';
	$(this).children('img').each(function(index, el) {
		if (index>0){
			str += ', ';
		}
		str += "url('" + $(el).prop('src') + "')";
		$(el).remove();
	});
	$(this).css('background-image', str);
});