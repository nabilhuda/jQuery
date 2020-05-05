jQuery(document).ready(function(){


	jQuery('.form1').submit(function(){
		var textValue = jQuery("input[type='text']").val();

		jQuery(this).after('<p>'+textValue+'</p>');

		return false;
	});

	// for addition
	jQuery('.form2').submit(function(){
		var firstValue = jQuery('.first').val();
		var secondValue = jQuery('.second').val();

		var totalValue = parseInt(firstValue) + parseInt(secondValue); // parseInt er kaj holo integer banano

		jQuery(this).after(totalValue);
	});

	// focus and blur method form validation kora jay
	jQuery(".form3 input[type='text']").focus(function(){
		jQuery(".form3 input[type='text']").val('this is empty');
	});
	jQuery(".form3 input[type='text']").blur(function(){
		jQuery(".form3 input[type='text']").val('this is not empty');
	});

	// like form validation
	jQuery('.form4').submit(function(){
		if ( jQuery(".form4 input[type='text']").val() == '' ) {
			jQuery(".form4 input[type='text']").val('this is empty.. please write something');
		}
	});



});

