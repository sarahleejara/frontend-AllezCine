// COOKIE
var cookieBar = {
  closeAfter: 5000, //ms
  cookieBar: null,

  init: function() {
    this.createCookieBar();
  },

  createCookieBar: function() {
    this.cookieBar = "<div id='cookieBar' class='bar'>This website uses cookies to provide the best experience, by using this site you are agreeing to our <a href='#'>cookie policy</a>.</div>";
    this.showCookieBar();
  },

  showCookieBar: function() {
    $('body').prepend(this.cookieBar);
    this.cookieBar = $('#cookieBar');
    this.cookieBar.hide().slideDown('slow');
    this.autoClose();
  },

  autoClose: function() {
    setTimeout(function(){
      this.cookieBar.slideUp('slow');
    }.bind(this), this.closeAfter);
  }

};

$(function() {
  cookieBar.init();
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

// SHOP FEATURES
let shop = "https://sarahleejara.github.io/frontend-AllezCine/js/shop.js";
let shopdatarequest = new XMLHttpRequest();

let whendataloadshop = function(){
  let shopdata = shopdatarequest.shop;
}

function displayShopdata(){

}
function createShopFeature(){

}
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

shopdatarequest.onload = whendataloadshop;
shopdatarequest.open("GET", shop, true)
