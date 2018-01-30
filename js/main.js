    $(function(){
    	$("#monBouton").click(function(){
        	$("html, body").animate({scrollTop: 0},"slow");
        });
    });

    $(window).scroll(function(){
 	posScroll = $(document).scrollTop();
 	if(posScroll >=300)
 		$('#monBouton').fadeIn("slow");
 	else
    $('#monBouton').fadeOut("slow");
 });
