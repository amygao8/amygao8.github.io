$(document).ready(function(){
	console.log('hello world');

	$('.btn-box').click(function(){
		$('.box').toggleClass('active');

	});

	$('.box').click(function(){
		$(this).toggleClass('active');
	});
    

    $('.btn-slide').click(function(){
		$('.slide').toggleClass('active');
	});

	$('.btn-alert').click(function(){
		$('.alert').toggleClass('active');
	});

	//images

	$('.btn').click(function(){
		$('.item').addClass('hide');
	});

	$('.btn-mag').click(function(){
		$('.item').addClass('hide');
		$('.item.mag').removeClass('hide')
	});

	$('.btn-reset').click(function(){
		$('.item').removeClass('hide')
	});


});