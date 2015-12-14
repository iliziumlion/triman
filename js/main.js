$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	
	if(wScroll > $('#index-content').offset().top - ($(window).height() / 1.6)) {
		$('#index-content .tovars .tovar').each(function(i){
			setTimeout(function(){
				$('#index-content .tovars .tovar').eq(i).addClass('is-showing');
			}, 250 * (i + 1));
		});
	}
	if(wScroll > $('#header').offset().top) {
		$('#header .bit').each(function(){
			setTimeout(function(){
				$('#header .bit').addClass('carting');
			}, 150);
		});
	}
});