
$(document).ready(function(){
	console.log('hello world');


$('.icon').click(function(){
	$('.quote').toggleClass('active');
	$('.pics').toggleClass('active');
	});

$('.boti').hover(function(){
	$('.info').toggleClass('active');
	});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

});

