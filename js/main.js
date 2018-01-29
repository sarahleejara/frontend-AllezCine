$(window).scroll(function() {
    if ($(window).scrollTop() == 0) {
        $('#monBouton').fadeOut("fast");
    } else {
        if ($('#monBouton').length == 0) {
            $('body').append('<div id="monBouton"></div>');
        }
        $('#monBouton').fadeIn("fast");
    }
});

$(function(){
	$("#monBouton").click(function(){
    	$("html, body").animate({scrollTop: 0},"slow");
    });
});
