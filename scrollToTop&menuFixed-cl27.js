jQuery(document).ready(function(){

	jQuery('.scrolltotop').click(function(){
		jQuery('html').animate({'scrollTop' : '0'}, 1000, 'easeOutExpo');

		return false;
	});

	// variable for menu fixed
	var headerHeight = jQuery('.header-area').outerHeight();

	jQuery(window).scroll(function(){

		var utd = jQuery(window).scrollTop();
		if (utd > 200) {
			// jQuery('.scrolltotop').show();
			jQuery('.scrolltotop').fadeIn();
		}
		else {
			// jQuery('.scrolltotop').removeAttr('style');
			jQuery('.scrolltotop').fadeOut();
		}


		// for menu fixed
		if (utd > headerHeight) {
			jQuery('.main-menu').addClass('fixed');
		}
		else {
			jQuery('.main-menu').removeClass('fixed');
		}


	});





});

