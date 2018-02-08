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

let movies = "https://sarahleejara.github.io/frontend-AllezCine/database/movies.json";
let series = "https://sarahleejara.github.io/frontend-AllezCine/database/tvseries.json";
let numberElementShop = 8;

let moviedatarequest = new XMLHttpRequest();

let moviedata;

let whendataloadshop = function(){
  let movietext = moviedatarequest.responseText;
  moviedata = JSON.parse(movietext);

  displayShopdata(moviedata, '#shop .list-movies > .row', 'shop', 0, numberElementShop);
}

function displayShopdata(data, parent, idPrefix, start = 0, numberElement = 8){
  for (let i = start; i < (start + numberElement) && i < data.length; i++) {
    createShopFeature(data[i], parent, idPrefix);
  }
}

function createShopFeature(data, parent, idPrefix){
  let shopid = idPrefix + '-' + data['id']; // we construct the HTML id of this movie
  let HTMLContent = '<div class="col-12 col-sm-6 col-md-6 col-lg-3 card shop-item" id="' + shopid + '"><div class="container-item"></div></div>'; // we open the div, insert class and ID
  $(HTMLContent).appendTo($(parent)); // we add our HTML content to the parent
  $('#' + shopid).attr({ // we insert some data-attribute
    'data-id': data['id']
  });
  $('<img src="../img/' + data['image'] + '" class="image card-img-top img-fluid" title="' + data['title'] + '">').appendTo($('#' + shopid + ' .container-item'));
  $('<div class="card-body"></div>').appendTo($('#' + shopid + ' .container-item'));
  $('<h5 class="card-title">' + data['title'] + '</h5>').appendTo($('#' + shopid + ' .card-body'));
  $('<div class="card-subtitle"></div>').appendTo($('#' + shopid + ' .card-body'));
  $('<div class="card-subtitle-item year">' + data['year'] + '</div><div class="card-subtitle-item price">' + data['price'] + ' €</div>').appendTo($('#' + shopid + ' .card-subtitle'));
}

// function createHTMLItemInformationInMovieShop(dataItem, parent) {
//   $('<div class="row trailer-row"></div>').appendTo($(parent));
//   $('<div class="col-12 embed-responsive embed-responsive-16by9"></div>').appendTo($(parent + ' .trailer-row'));
//   $('.trailer-row .col-12').html('<iframe class="embed-responsive-item" src="'dataItem['trailer'] + '" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
//   $('<div class="row title-row"></div>').appendTo($(parent));
//   $('<div class="col-12"></div>').appendTo($(parent + ' .title-row'));
//   $('.title-row .col-12').html('<h4>' + dataItem['title'] + '</h4>');
//   $('<div class="row story-row"></div>').appendTo($(parent));
//   $('<div class="col-12 col-md-4">Story line</div><div class="col-12 col-md-8"><p>' + dataItem['story'] + '</p></div>').appendTo($(parent + ' .story-row'));
//   $('<div class="row release-date-row"></div>').appendTo($(parent));
//   $('<div class="col-12 col-md-4">Released date</div><div class="col-12 col-md-8"><p>' + dataItem['date'] + '</p></div>').appendTo($(parent + ' .release-date-row'));
//   $('<div class="row genre-row"></div>').appendTo($(parent));
//   $('<div class="col-12 col-md-4">Genre(s)</div><div class="col-12 col-md-8"><p>' + dataItem['genre'].join(', ') + '</p></div>').appendTo($(parent + ' .genre-row'));
//   $('<div class="row price-row"></div>').appendTo($(parent));
//   $('<div class="col-12 col-md-4">Price</div><div class="col-12 col-md-8"><p>' + dataItem['price'] + ' €</p></div>').appendTo($(parent + ' .price-row'));
// }

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

moviedatarequest.onload = whendataloadshop; // we assign the function to excecute when the data are loading
moviedatarequest.open("GET", movies, true);
moviedatarequest.send(null);
