$(document).ready(function(){
	console.log('hello world');

//menu click
$('.logo').click(function(){
	$('.nav').toggleClass('active');

	});
//menu end

//Reset button
	$('.btn-reset').click(function(){
		$('.item').removeClass('hide')
	});
//End reset button

//filter

	$('.btn-full').click(function(){
		$('.item').addClass('hide');
		$('.item.full').removeClass('hide')
	});

    $('.btn-melt').click(function(){
		$('.item').addClass('hide');
		$('.item.melt').removeClass('hide')
	});

    $('.btn-half').click(function(){
		$('.item').addClass('hide');
		$('.item.half').removeClass('hide')
	});

    $('.btn-new').click(function(){
		$('.item').addClass('hide');
		$('.item.new').removeClass('hide')
	});	

    $('.btn-first').click(function(){
		$('.item').addClass('hide');
		$('.item.first').removeClass('hide')
	});	

	$('.btn-reset').click(function(){
		$('.item').removeClass('hide')
	});
//filter end


});