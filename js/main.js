// FOOTER ARROW
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
// ENTRY MODAL
$(document).ready(function(){
    // Show the Modal on load
    $("#myModal").modal("show");

    // Hide the Modal
    $("#myBtn").click(function(){
        $("#myModal").modal("hide");
    });
});
$("#submitage").click(function(){
  var a = $("#Age").val();
    if ( a <= 18){
    $(this).hide();
  } else {
    alert("I'm sorry you must be 18 to access this website.")
  }
})
