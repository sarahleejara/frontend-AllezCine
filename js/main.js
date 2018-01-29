    $(function(){
    	$("#monBouton").click(function(){
        	$("html, body").animate({scrollTop: 0},"slow");
        });
    });

    $(window).scroll(function(){
 	posScroll = $(document).scrollTop();
 	if(posScroll <=700)
 		$('#monBouton').fadeOut("slow");
 	else
 		$('#monBouton').fadeIn("slow");
 });
