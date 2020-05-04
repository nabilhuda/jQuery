jQuery(document).ready(function(){


	jQuery('p').click(function(){
		jQuery(this).hide(); // this for remove every single p
	});


	var screenSize = jQuery(window).width();
	jQuery('.box').text(screenSize);

	// resize mothod
	jQuery(window).resize(function(){ // resize korar somoy kaj korar jonno
		var screenSize = jQuery(window).width();
		jQuery('.box').text(screenSize);
	});

	var uporThekeDurotto = jQuery(window).scrollTop();
	jQuery('.box2').text(uporThekeDurotto);

	// scroll mothod
	jQuery(window).scroll(function(){ // scroll korar somoy kaj korar jonno
		var uporThekeDurotto = jQuery(window).scrollTop();
		jQuery('.box2').text(uporThekeDurotto);
	});




});

