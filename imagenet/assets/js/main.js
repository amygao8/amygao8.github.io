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

	$('.landing').click(function(){
		$('.landing').addClass('move');
	});

//filter

	$('.btn-full').click(function(){
		$('.item').addClass('hide');
		$('.item.full').removeClass('hide')
		$('.landing').addClass('move1');
	});

    $('.btn-melt').click(function(){
		$('.item').addClass('hide');
		$('.item.melt').removeClass('hide')
		$('.landing').addClass('move1');
	});

    $('.btn-half').click(function(){
		$('.item').addClass('hide');
		$('.item.half').removeClass('hide')
		$('.landing').addClass('move1');
	});

    $('.btn-new').click(function(){
		$('.item').addClass('hide');
		$('.item.new').removeClass('hide')
		$('.landing').addClass('move1');
	});	

    $('.btn-first').click(function(){
		$('.item').addClass('hide');
		$('.item.first').removeClass('hide')
		$('.landing').addClass('move1');
	});	

	$('.btn-reset').click(function(){
		$('.item').removeClass('hide')
		$('.landing').removeClass('move')
		$('.landing').removeClass('move1')
	});
//filter end


});