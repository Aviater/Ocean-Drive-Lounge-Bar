$(function() {
  	$('#slides').slidesjs({
   		width: 940,
   		height: 528,
   		play: {
     		active: true,
     		auto: true,
     		interval: 4000,
     		swap: true
   		}
  	});
});


function initMap() {
    // Create a map object and specify the DOM element for display.
    var oceans = {lat: 36.540535, lng: -4.620449};
    var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 17,
    	center: oceans,
    	scrollwheel: false,
    });
    var marker = new google.maps.Marker({
    	position: oceans,
    	map: map
    })
}

$("#introduction").on("click",function(){
  var divPosition = $('#section1half').offset();
  $('html, body').animate({scrollTop: divPosition.top}, "slow");
});

$("#menu").on("click",function(){
  var divPosition = $('#menuImg').offset();
  $('html, body').animate({scrollTop: divPosition.top}, "slow");
});

$("#success").on("click",function(){
  var divPosition = $('.section2').offset();
  $('html, body').animate({scrollTop: divPosition.top}, "slow");
});

$("#offers").on("click",function(){
  var divPosition = $('#offerImg').offset();
  $('html, body').animate({scrollTop: divPosition.top}, "slow");
});

$("#pictures").on("click",function(){
  var divPosition = $('.container').offset();
  $('html, body').animate({scrollTop: divPosition.top}, "slow");
});

$("#location").on("click",function(){
  var divPosition = $('.section3').offset();
  $('html, body').animate({scrollTop: divPosition.top}, "slow");
});

$("#arrow").on("click",function(){
  var divPosition = $('.img-wrap').offset();
  $('html, body').animate({scrollTop: divPosition.top}, "slow");
});


$(".drinks-button").on("click", function(){
  $(".drinks-button").css("background-color", "rgba(255,255,255,0.25)");
  $(".cocktail-button").css("background-color", "rgba(255,255,255,0)");
  $(".menu1").addClass("hidden");
  $(".menu2").removeClass("hidden");
});

$(".cocktail-button").on("click", function(){
  $(".drinks-button").css("background-color", "rgba(255,255,255,0)");
  $(".cocktail-button").css("background-color", "rgba(255,255,255,0.25)");
  $(".menu2").addClass("hidden");
  $(".menu1").removeClass("hidden");
});
