jQuery(document).ready(function(){


	jQuery('.main-menu .bar').click(function(){
		jQuery('.main-menu ul').slideToggle();

		return false;
	});


	jQuery(window).resize(function(){
		var screenWidth = jQuery(window).width();
		// if (screenWidth > 768) {
		// 	jQuery('.main-menu ul').show();
		// }
		// else {
		// 	jQuery('.main-menu ul').hide();
		// }

		// alternative way and it's perfect and best way
		if (screenWidth > 768) {
			jQuery('.main-menu ul').removeAttr('style');
		}
	});


	// for Sub Menu
	jQuery('.main-menu ul li').hover(function(){
		jQuery(this).children('ul').slideToggle(1200, 'easeOutElastic');
	});

	// for dropdown icon
	jQuery('.main-menu ul ul').parent('li').children('a').append(' <i class="fas fa-chevron-down"></i>');




});

