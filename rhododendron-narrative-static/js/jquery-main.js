// JavaScript Document
$(document).ready(start);
	function start () {
	$('a').smoothScroll();
}

if (!Modernizr.csstransforms3d) {
    $('label').click(function() {
        $('.animate .front').removeClass('front');
        $(this).addClass('front');
    });
}

$('body').scroll(function() { 
    $('#FixedDiv').animate({top:$(this).scrollTop()},100,"linear");
}
)
