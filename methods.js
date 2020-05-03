jQuery(document).ready(function(){


	var dhorbo = jQuery('.table').text(); // get system

	jQuery('.fan').html('<h1>'+dhorbo+'</h1>'); // set system


	// css method
	// jQuery('.table').css('color', 'red').css('background', 'yellow').text('onno kisu');
	jQuery('.table').css({'color' : 'red', 'background' : 'yellow'}); // this is better way for setting multiple value of css method


	// attr method er second argument er value na dialeo kaj korbe
	jQuery('.fan').attr('amra', 'sobai'); // attr = add attribute
	jQuery('[amra]').css('color', 'blue'); // attribute selection


	// addClass and removeClass method
	jQuery('.table2').addClass('tanvir').removeClass('table2');


	//removeAttr = remove attribute
	jQuery('.some').removeAttr('class');


	// toggle method
	jQuery('.mouse').click(function(){
		jQuery('.computer').toggle(1000);
	});


	// fadeToggle method
	jQuery('.fadebtn').click(function(){
		jQuery('.fadebox').fadeToggle(1000);

		return false; // ata dile a tag er mul kaj ar korbe na
	});


	// slideUp and slideDown method
	// akhane slideToggle method use korajabe but 1 ta annulimus function use korte hobe
	jQuery('.slidebtn').hover( // hover method a 2 ta annulimus function use kora jay
		function(){
			jQuery('.slidebox').slideUp(2000);
		},
		function(){
			jQuery('.slidebox').slideDown(500);
		}
	);
	// uporer kajtar alternative
	// jQuery('.slidebtn').click(function(){
	// 	jQuery('.slidebox').slideUp(2000);
	// 	jQuery('.slidebtn').click(function(){
	// 		jQuery('.slidebox').slideDown(500);
	// 	});

	// 	return false;
	// });


	// dblclick method
	jQuery('.dblbtn').dblclick(function(){
		jQuery('.dblclickbox').slideToggle(1000);
	});


	// animate method
	jQuery('.anibtn').click(function(){
		jQuery('.anibox').animate({'marginLeft' : '400'},1000).animate({'marginLeft' : '0'},1000);
	});


	// val method
	jQuery("form input[type='text']").val('type something');


	// append method
	jQuery('.appbtn').click(function(){
		jQuery('.app').append('<p>append content</p>');
		return false;
	});


	// prepend method
	jQuery('.prebtn').click(function(){
		jQuery('.pre').prepend('<p>prepend content</p>');
		return false;
	});


	// after method
	jQuery('.aftbtn').click(function(){
		jQuery('.aft').after('<p>after content</p>');
		return false;
	});


	// before method
	jQuery('.bfrbtn').click(function(){
		jQuery('.bfr').before('<p>before content</p>');
		return false;
	});






});

