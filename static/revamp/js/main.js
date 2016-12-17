


// materialize css
 $(document).ready(function() {
    $('select').material_select();
  });

  $('.datepicker').pickadate({
    format: 'dd-mm-yyyy',
	closeOnSelect: true,
	  min: new Date(),
  });
  $(".button-collapse").sideNav();

          
//Height Define
$(document).ready(function(){
var a = $(window).height();
	$("#home").height(a - 0)
});




//Scroll To
// $(".scroll").click(function(event){
// 	event.preventDefault();
// 	$("html,body").animate({scrollTop:$(this.hash).offset().top}, 400)
// });


$(function() {
	$('#message-cycle').cycle({
		timeout: 4000,
		pause: 1	
	});
});  
  


//Scroll Spy Refresh
// $('#navbar').scrollspy()





//Scroll To Top
$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 160) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});



//Onload FadeIn	
$(document).ready(function(){
	$(".fadeOnLoad").hide(0).delay(1000).fadeIn(700)
});


//Div FadeOut On Scroll
// $(window).scroll(function() {
//     if ($(this).scrollTop() == 0) {
//         $(".hero-text:hidden").fadeIn(400);
//     }
//     else {
//         $(".hero-text:visible").fadeOut(400);
//     }
// });




$(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes transparent*/
    {
		$('.navbar').addClass('navbar-opaque');
		$('.brand1').addClass('invisible');
		$('.brand2').addClass('visible');
    } else {
        $('.navbar').removeClass('navbar-opaque');
		$('.brand1').removeClass('visible');
		$('.brand2').removeClass('invisible');
    }
});


$('.service-card').click(function(event){
	$('.service-card').removeClass('selected');
	$('.service-card:hover').addClass('selected');
});


$('.form-submit').click(function(event){
	$('.service-headers').addClass('invisible');
	$('.service-headers').removeClass('visible');
	$('.form-row').addClass('visible');
	$('.form-row').removeClass('invisible');
	$('.vehicle-details').addClass('invisible');
	$('.vehicle-details').removeClass('visible');

});

$('.form-submit').click(function(event){
	$('.service-headers').addClass('invisible');
	$('.service-headers').removeClass('visible');
	$('.form-row').addClass('visible');
	$('.form-row').removeClass('invisible');
	$('.vehicle-details').addClass('invisible');
	$('.vehicle-details').removeClass('visible');

});


$('.book-btn').click(function(event){
	$('.infodiv').addClass('invisible');
	$('.home-form').removeClass('hide-on-med-and-down');
	$('.home-form').addClass('visible');
	var a = $('.home-form').height();
	$("#home").height(a + 30);
});











