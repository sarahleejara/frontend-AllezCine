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
  if ( a >= 18){
    $("#myModal").modal("hide");
  } else {
    alert("I'm sorry you must be 18 to access this website.");
    location.href="http://www.imdb.com/";
  }
});
// FOOTER ARROW
    $(function(){
    	$("#toparrow").click(function(){
        	$("html, body").animate({scrollTop: 0},"slow");
        });
    });
$(document).ready(function(){
  $("#toparrow").hide();
});
    $(window).scroll(function(){
 	posScroll = $(document).scrollTop();
 	if(posScroll >=300)
 		$('#toparrow').fadeIn("slow");
 	else
    $('#toparrow').fadeOut("slow");
 });

// SEND MESSAGE
$(".send button").click(function(){
  alert("Your message hase been sent.");
  location.reload();
});

// MORE FILMS
$('.morefilms').click(function(){
  $(".row-three").toggleClass("hide");
  $(".morefilms").toggleClass("hide");
  $(".lessfilms").toggleClass("hide");
});
$('.lessfilms').click(function(){
  $(".row-three").toggleClass("hide");
  $(".lessfilms").toggleClass("hide");
  $(".morefilms").toggleClass("hide");
});

// MORE SERIES
$('.moreseries').click(function(){
  $(".row3").toggleClass("hide");
  $(".moreseries").toggleClass("hide");
  $(".lessseries").toggleClass("hide");
});
$('.lessseries').click(function(){
  $(".row3").toggleClass("hide");
  $(".lessseries").toggleClass("hide");
  $(".moreseries").toggleClass("hide");
});

// GENRE BUTTONS

// $("#movies-adventure").click(function(){
//   if (a === ".adventure") {
//     return a;
//   } else {
//     return null;
//   }
// });
