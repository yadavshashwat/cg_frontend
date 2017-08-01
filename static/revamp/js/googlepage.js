document.onreadystatechange = function () {
    Global.init();
}

$(document).ready(function() {
    // $('select').material_select();
    // $('select').select2();
    // $('select').selectize();
    $('#vehicle-select').find('select').selectize();

});



// Scroll To Top
$(document).ready(function(){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
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


// Navbar Colour - white transition

$(window).load(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth <= 600) {
        $('#howitworks .display-block').removeClass('display-block').addClass('display-inline-flex')
        $('#howitworks .line-horizontal').removeClass('line-horizontal').addClass('line-vertical')
        $('#howitworks .fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-down')
        $('#howitworks .horizontal_dotted_line').removeClass('horizontal_dotted_line').addClass('vertical_dotted_line')

    }else if (viewportWidth <= 992){
        $('#howitworks .display-block').removeClass('display-block').addClass('display-inline-flex')
        $('#howitworks .line-horizontal').removeClass('line-horizontal').addClass('line-vertical')
        $('#howitworks .fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-down')
        $('#howitworks .horizontal_dotted_line').removeClass('horizontal_dotted_line').addClass('vertical_dotted_line')
    }else{
        $('#howitworks .display-inline-flex').removeClass('display-inline-flex').addClass('display-block')
        $('#howitworks .line-vertical').removeClass('line-vertical').addClass('line-horizontal')
        $('#howitworks .fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-right')
        $('#howitworks .vertical_dotted_line').removeClass('vertical_dotted_line').addClass('horizontal_dotted_line')

    }

});

$(window).resize(function() {
    var viewportWidth = $(window).width();
   if (viewportWidth <= 600) {
        $('#howitworks .display-block').removeClass('display-block').addClass('display-inline-flex')
        $('#howitworks .line-horizontal').removeClass('line-horizontal').addClass('line-vertical')
        $('#howitworks .fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-down')
        $('#howitworks .horizontal_dotted_line').removeClass('horizontal_dotted_line').addClass('vertical_dotted_line')

    }else if (viewportWidth <= 992){
        $('#howitworks .display-block').removeClass('display-block').addClass('display-inline-flex')
        $('#howitworks .line-horizontal').removeClass('line-horizontal').addClass('line-vertical')
        $('#howitworks .fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-down')
        $('#howitworks .horizontal_dotted_line').removeClass('horizontal_dotted_line').addClass('vertical_dotted_line')
    }else{
        $('#howitworks .display-inline-flex').removeClass('display-inline-flex').addClass('display-block')
        $('#howitworks .line-vertical').removeClass('line-vertical').addClass('line-horizontal')
        $('#howitworks .fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-right')
        $('#howitworks .vertical_dotted_line').removeClass('vertical_dotted_line').addClass('horizontal_dotted_line')

    }
});

$(document).ready(function(){
    var viewportWidth = $(window).width();

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 20) {
            $('.navbar .nav-wrapper').removeClass('navbar-trans').removeClass('navbar-trans-ad').addClass('navbar-custom');
            $('.navbar .nav-wrapper .logo-trans').removeClass('visible').addClass('invisible');
            $('.navbar .nav-wrapper .logo-color').removeClass('invisible').addClass('visible');
            // $('.navbar .nav-wrapper').addClass('navbar-trans').addClass('navbar-trans-ad').removeClass('navbar-custom');
            // $('.navbar .nav-wrapper .logo-trans').addClass('visible').removeClass('invisible');
            // $('.navbar .nav-wrapper .logo-color').addClass('invisible').removeClass('visible');

        } else {
            // if (viewportWidth > 992){
            $('.navbar .nav-wrapper').removeClass('navbar-trans').removeClass('navbar-trans-ad').addClass('navbar-custom');
            $('.navbar .nav-wrapper .logo-trans').removeClass('visible').addClass('invisible');
            $('.navbar .nav-wrapper .logo-color').removeClass('invisible').addClass('visible');

            // $('.navbar .nav-wrapper').addClass('navbar-trans').addClass('navbar-trans-ad').removeClass('navbar-custom');
            // $('.navbar .nav-wrapper .logo-trans').addClass('visible').removeClass('invisible');
            // $('.navbar .nav-wrapper .logo-color').addClass('invisible').removeClass('visible');
            // }}
        }});
});






//Height Define
$(document).ready(function(){
    var a = $(window).height();
    var b = $('.home-form').height();
    var viewportWidth = $(window).width();
    // var btn_height = $('#home .infodiv').height();
    // console.log(btn_height)
    console.log(b)
    console.log(a)
    if (viewportWidth <= 992){
          $("#home").height(a)
        // console.log('1')
    }else{
        if (a>=b){
        // console.log('2')

            $("#home").height(a - 0)
            $('#background img').height(a)
        }else{
        // console.log('2')

            $("#home").height(b + 50)
            $('#background img').height(b + 50)
        }

    }

    if (viewportWidth <= 500){
        $('#info-div-adword').css('margin-left','-'+(viewportWidth/2)+'px');
    }else{
        $('#info-div-adword').css('margin-left','-250px');

    }


});

// materialize css



$('.datepicker').pickadate({
    format: 'dd-mm-yyyy',
    closeOnSelect: true,
    min: new Date() + 1,
    onSet: function( arg ){
        if ( 'select' in arg ){ //prevent closing on selecting month/year
            this.close();
            $('#time-slot').click()
        }
    }

});

$(".button-collapse").sideNav();




$(function() {
    $('#message-cycle').cycle({
        timeout: 4000,
        pause: 1
    });
});

var PAGEHEADER = "CAR & BIKE CARE <br> MADE EASY"
var FEATURES = "One Stop Shop&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;Doorstep Service&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;Instant Cost Estimate"
//Onload FadeIn

$(document).ready(function(){
    $(".fadeOnLoad").hide(0).delay(1000).fadeIn(700)

     var vehtype = $('#home').attr('data-vehicle-type')
     var service = $('#home').attr('data-service-type')
     var source_type = $('#home').attr('source-type')
    if (vehtype == "Car"){
    $('#home .ad-page-car').addClass('fa-car')
    }else{
    $('#home .ad-page-car').addClass('fa-motorcycle')
    }

    $('.howitworks-section-2').hide()
    if (vehtype == "Car" && service == "CarCare"){
        var PAGEHEADER = "BEST CAR CLEANING SERVICES IN  DELHI NCR"
        var FEATURES = "<div class='row lists'><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;Interior & Boot Vaccuming</li><li><i class='fa fa-check x10 icon'></i>&nbsp;Seats Dusting</li></ul></div><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;Exterior Shampoo</li><li><i class='fa fa-check x10 icon'></i>&nbsp;3M/Meguiar Products used</li></ul></div></div>"

        var DESC = "ClickGarage provides quality exterior and interior car cleaning. Its eco friendly car wash makes sure that there is less harm to the environment. For all our car cleaning, we only use 3M and Wurth products. With our doorstep service and mutiple payment options, we aim to make auto detailing a customer delight. Our service include - car wash, car dry cleaning, mobile car detailing, car polishing etc. ClickGarage provides you with the professional car cleaning service at your doorstep. "
        // var FEATURES = "3M/Meguiar products&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;Expert cleaners&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;doorstep service"
        $('.car-service').show()

    }else if(vehtype =="Car" && service == "Servicing"){
        var PAGEHEADER = "#1 Car Service in Delhi-NCR"
        var FEATURES = "<div class='row lists'><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;Full Car Service</li><li><i class='fa fa-check x10 icon'></i>&nbsp;Free Pick-Up & Drop</li></ul></div><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;Genuine Spares</li><li><i class='fa fa-check x10 icon'></i>&nbsp;2 Months Warranty</li></ul></div></div>"
        var DESC = "ClickGarage's scheduled maintenance services strictly follow processes recommended by OEM's. Standard Service includes a 40 point check up along with the consumables replacement and essential fluid top-ups. Standard service comes with free exterior wash, interior cleaning and free pick-up and drop. ClickGarage provides best online car service in Gurgaon making car maintenance easy, affordable and completely transparent. We also provide you with the best car service deals. Full car service is faciliated at one of the ClickGarage car service centre. So book car service now!"
        $('.car-service').show()

        // var FEATURES = "Lowest price - Upfront estimate&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;OES/OEM Parts used&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;Trained mechanics"
    }else if(vehtype =="Car" && service == "Repairing"){
        var PAGEHEADER = " TOP QUALITY CAR REPAIRS IN DELHI NCR"
        var FEATURES = "<div class='row lists'><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;40 point check-up</li><li><i class='fa fa-check x10 icon'></i>&nbsp;Expert mechanics</li></ul></div><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;Upfront estimates </li><li><i class='fa fa-check x10 icon'></i>&nbsp;Pick-up & drop</li></ul></div></div>"
        var DESC = "ClickGarage team of expert mechanics take care of car repair of your vehicle. From car ac service or car ac repair to clutch overhaul, the nearest ClickGarage car mechanic will take care of your vehicle and do the necessary car repairs. ClickGarage provides you will all repair solutions including steering repair, car headlight repair, tires for car, car engine repair etc. Book service now to get the best mechanic to fix your car. Looking for minor fixes such as wiper blade replacement, horn malfunctioning, headlight replacement etc. ? ClickGarage auto experts will come to your doorstep and fix it."
        // var FEATURES = "OES/OEM Parts used&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;Trained mechanics&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;Free pick up and drop"
        $('.car-service').show()

    }else if(vehtype =="Car" && service == "cgassist"){
        var PAGEHEADER = " EMERGENCY ASSISTANCE ANYTIME ANYWHERE"
        var FEATURES = "<div class='row lists'><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;PAN India Presence</li><li><i class='fa fa-check x10 icon'></i>&nbsp;40 Minutes TAT</li></ul></div><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;Free Towing</li><li><i class='fa fa-check x10 icon'></i>&nbsp;Unlimited Usage</li></ul></div></div>"
        var DESC = "ClickGarage ASSIT is a premium road-side assistance programe, providing assistance anytime, anywhere, 24 hours a day, 7 days a week and 365 days a year. We have best of its kind pan-India network along with 24x7 assistance centre, duly approved by DOT."
        // var FEATURES = "OES/OEM Parts used&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;Trained mechanics&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;Free pick up and drop"
        // $('.car-service').show()
        $('.car-image').show()
        $('.howitworks-section').hide()
        $('.howitworks-section-2').show()




    }else if(vehtype =="Car" && service == "Denting"){
        var PAGEHEADER = "BEST IN CLASS DENTING/ PAINTING FACILITY IN DELHI NCR"
        var FEATURES = "<div class='row lists'><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;High Quality paint only!</li><li><i class='fa fa-check x10 icon'></i>&nbsp;Lowest prices</li></ul></div><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;1 year warranty </li><li><i class='fa fa-check x10 icon'></i>&nbsp;Pick-up & drop</li></ul></div></div>"
        var DESC = "ClickGarage provides you with the best custom denting/painting job using high quality Du-Pont paint and provides a 1 year warranty on the painting. It also includes rubbing & polishing of the panel. We have the best car denting painting services. Quality car dent repair at a body shop. Car Paint lusture is restored and it is as good as new. All the car dent and car scratch are removed from the car by our expert mechanics"

        // var FEATURES = "Upto 60% less than market&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;No paint mismatch with 1 year warranty&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;Free pick up and drop&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;Dust free paint booths"
        $('.car-service').show()

    }else if(vehtype =="Bike" && service == "Repairing"){
        var PAGEHEADER = "DOORSTEP BIKE REPAIRS. NOW IN GURUGRAM"
        var FEATURES = "<div class='row lists'><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;Doorstep service</li><li><i class='fa fa-check x10 icon'></i>&nbsp;40 point check-up</li></ul></div><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;Spares replacement</li><li><i class='fa fa-check x10 icon'></i>&nbsp;Expert mechanics</li></ul></div></div>"
        var DESC = ""
        // var FEATURES = "Trained mechanics&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;OEM Parts used&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;Top quality repairs"
        $('.bike-service').show()

    }else if(vehtype =="Bike" && service == "Servicing"){
        $('.bike-service').show()
        if(source_type == "Mahindra"){
        $('.bike-service').show()
            var PAGEHEADER = "MAHINDRA AUTHORIZED DOORSTEP BIKE SERVICING. NOW IN GURUGRAM"
            // var FEATURES = "Trained mechanics&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;OEM Parts used&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;Mahindra Authorized Service"
        var FEATURES = "<div class='row lists'><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;Doorstep service</li><li><i class='fa fa-check x10 icon'></i>&nbsp;40 point check-up</li></ul></div><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;Spares replacement</li><li><i class='fa fa-check x10 icon'></i>&nbsp;Expert mechanics</li></ul></div></div>"
        var DESC = ""
        }else{
            var PAGEHEADER = "DOORSTEP BIKE SERVICING. NOW IN GURUGRAM"
            // var FEATURES = "Trained mechanics&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;OEM Parts used&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;From Rs. 249 only!"
           var FEATURES = "<div class='row lists'><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;Doorstep service</li><li><i class='fa fa-check x10 icon'></i>&nbsp;40 point check-up</li></ul></div><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;Spares replacement</li><li><i class='fa fa-check x10 icon'></i>&nbsp;Expert mechanics</li></ul></div></div>"
            var DESC = ""
        }

    }else{
        $('.car-service').show()
        var PAGEHEADER = "CAR & BIKE CARE <br> MADE EASY"
        // var FEATURES = "One Stop Shop&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;Doorstep Service&nbsp;<i class='fa fa-check x10 icon'></i>&nbsp;Instant Cost Estimate"
           var FEATURES = "<div class='row lists'><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;One Stop Shop</li><li><i class='fa fa-check x10 icon'></i>&nbsp;Doorstep Service</li></ul></div><div class='col l6 m6 s12'><ul><li><i class='fa fa-check x10 icon'></i>&nbsp;Instant Cost Estimate</li><li><i class='fa fa-check x10 icon'></i>&nbsp;Expert mechanics</li></ul></div></div>"
            var DESC = ""
    }

    if (vehtype== "Car"){
        $('.car-brands').show()
        $('.bike-brands').hide()
    }else if(vehtype == "Bike"){
        $('.car-brands').hide()
        $('.bike-brands').show()

    }
    $('#home span.header').html(PAGEHEADER);
    $('#home span.features').html(FEATURES);
    $('#service-desc .about-cg').text(DESC)

            if (vehtype == "Bike"){
                $('#city-bike').show()
                $('#city-car').hide()
                $('#city-bike').find('select').material_select();
            }else{
                $('#city-bike').hide()
                $('#city-car').show()
                $('#city-car').find('select').material_select();
            }

});


$('.close-more-info').click(function(){
    $('#info-div-adword').hide()
})

$('.book-now-info-button').click(function(){
    $('#info-div-adword').hide()
    $('.infodiv').addClass('invisible');
    var a = $('.home-form').removeClass('hide-on-med-and-down').addClass('visible').height();
    $("#home").height(a + 30);
   $('#info-div-adword').hide()
    $('#home .card-info').removeClass('card')

    // var a = $('.home-form').removeClass('hide-on-med-and-down').addClass('visible').height();
        $("#home").height(a + 30);
            $('body,html').animate(
                {'scrollTop':0},
                500
            );


})



$(window).ready(function() {
     setTimeout(function() {
         $('.loading-pane-2').hide();
         $('#overlay').hide();
            }, 2200);
});

var Global = {
    init:function() {
        var _this = this;
        _this.events();
        // Commons.eventHandlers();


    },

    events:function() {

        var _this = this;
        if (_this.eventsAdded)
            return false;
        _this.eventsAdded = true;
        console.log('adding hanlder')

        $('.book-now-button').on('click', function(e){
            $('body,html').animate(
                {'scrollTop':0},
                500
            );
        });

        $('.form-proceed').on('click', function(e){
            $('body,html').animate(
                {'scrollTop':0},
                500
            );
        });
        
        $('.service-info-button').on('click', function(e){
            $('#info-div-adword').show()
        });

        $('.learn-more-button').on('click', function(e){
         $('body,html').animate(
                {'scrollTop':$('#home').outerHeight()+$('#clients').outerHeight()},
                500
            );
        });


        $('.about-us-button').on('click', function(e){
            $('body,html').animate(
                {'scrollTop':$('#home').outerHeight()+$('#features').outerHeight()},
                500
            );
        });
        $('.service-button').on('click', function(e){
            $('body,html').animate(
                {'scrollTop':$('#home').outerHeight()+$('#features').outerHeight()+$('#howitworks').outerHeight()+$('#numbers').outerHeight()+$('#testimonials').outerHeight()+$('#clients').outerHeight()},
                500
            );
        });

         $('.hiw-button').on('click', function(e){
            $('body,html').animate(
                {'scrollTop':$('#home').outerHeight()+$('#features').outerHeight()+$('#clients').outerHeight()},
                500
            );
        });
         $('.partners-button').on('click', function(e){
            $('body,html').animate(
                // {'scrollTop':$('#home').outerHeight()+$('#service-detail').outerHeight()+$('#features').outerHeight()+$('#howitworks').outerHeight()},
                {'scrollTop':$('#home').outerHeight()},

                500
            );
        });

        // $('.testi-button').on('click', function(e){
        //     $('body,html').animate(
        //         {'scrollTop':$('#home').outerHeight()+$('#service-detail').outerHeight()+$('#features').outerHeight()+$('#clients').outerHeight()},
        //         500
        //     );
        // });
        $('.brands-button').on('click', function(e){
            $('body,html').animate(
                {'scrollTop':$('#home').outerHeight()+$('#service-detail').outerHeight()+$('#service-desc').outerHeight()+$('#howitworks').outerHeight()+$('#numbers').outerHeight()+$('#features').outerHeight()+$('#clients').outerHeight()+$('#testimonials').outerHeight()},
                500
            );
        });
        $('.contact-us-button').on('click', function(e){
            $('body,html').animate(
                {'scrollTop':$('#home').outerHeight()+$('#service-detail').outerHeight()+$('#service-desc').outerHeight()+$('#numbers').outerHeight()+$('#numbers-section').outerHeight()+$('#howitworks').outerHeight()+$('#features').outerHeight()+$('#clients').outerHeight()+$('#testimonials').outerHeight()+$('#brands').outerHeight()},
                500
            );
        });

        $(".side-nav").on("click", function() {
             $("#sidenav-overlay").trigger("click");
                return false;
        });



        $('.service-card').click(function (event) {
            $('.service-card').removeClass('selected');
            $('.service-card:hover').addClass('selected');
        });

        $('.book-btn').click(function (event) {
            $('.infodiv').addClass('invisible');
            var a = $('.home-form').removeClass('hide-on-med-and-down').addClass('visible').height();
           $('#home .card-info').removeClass('card')

            $("#home").height(a + 30);
        });



        $('.book-btn-2').click(function (event) {
            $('.infodiv').addClass('invisible');
            var a = $('.vehicle-select-form').removeClass('hide-on-med-and-down').addClass('visible').height();
            if ($('#home').height() > a){
            }else{
            $("#home").height(a + 30);
            }
        });



        // $('#home .form-proceed').click(function (event) {
        // });

        $('.autocomplete-option').click(function() {
          $input.val($(this).text().trim());
          $('.autocomplete-option').addClass('hide');
        });


        var callbrands =function(){
            vehtype = $('#home').attr('data-vehicle-type')

            // console.log(vehtype)
            if(vehtype == ""){
                vehtype ="Car"
            }else{
            }
            Commons.ajaxData('get_type_make', {vehicle_type: vehtype}, "get", _this, _this.loadBrands);
        }

        $(document).on('ready',callbrands);
        $('#home').on('click','.veh-cat-card',callbrands);
        // $(document).ready(function (event,data) {
        //
        //     Commons.ajaxData('get_type_make', {vehicle_type: vehtype}, "get", _this, _this.loadBrands2);
        // });




      $('#brand-select').change(function(event,data){
         vehtype = $('#home').attr('data-vehicle-type')
            // console.log(vehtype)
            if(vehtype == ""){
                vehtype ="Car"
            }else{

            }
            var make = $(this).find('.selectize-input').find('div').attr('data-value');
          console.log(make)
            Commons.ajaxData('get_make_model', {make_id: make, vehicle_type: vehtype}, "get", _this, _this.loadModels);
        });

        // $('#brand-select-index').change(function(event,data){
        //     var make = $(this).find('.active span').text();
        //     vehtype = $('#home .veh-cat-card').text()
        //     Commons.ajaxData('get_make_model', {make_id: make, vehicle_type: vehtype}, "get", _this, _this.loadModels);
        // });



       $('#home .veh-cat-card').click(function(){
            $('#home .veh-cat-card').removeClass('selected');
            $('#home .veh-cat-card:hover').addClass('selected');
            vehicle = $('#home .veh-cat-card:hover').text()
           $('#home .home-form-2 .vehicle-type').text(vehicle);
        });

        $('#locality').on('keyup',function(e,event,data){
            var code = (e.keyCode || e.which);
            // do nothing if it's an arrow key
            if(code == 37 || code == 38 || code == 39 || code == 40) {
                return;
            }
             var locality = $(this).val();
            Commons.ajaxData('get_location', {location_id: locality}, "get", _this, _this.loadLocation);
            $('#locality').removeClass('invalid')
        });


        // error removal form validation
        $('#telephone').on('keypress',function(e,event,data){
            var code = (e.keyCode || e.which);
            // do nothing if it's an arrow key
            if(code == 37 || code == 38 || code == 39 || code == 40) {
                return;
            }
            var number = $(this).val();
            if (number >= 100000000 && number <= 9999999999){
               $('#telephone').removeClass("invalid");
               error = 1;
           }
        });
            // / Commons.ajaxData('get_location', {location_id: locality}, "get", _this, _this.loadLocation);
            // $('#locality').removeClass('invalid')
        // });



       $('#home .home-form .proceed button').click(function(event){
           // var make = $('#brand-select').find('.active span').text();
           // var model = $('#vehicle-select').find('.active span').text();
           var make = $('#brand-select').find('.selectize-input').find('div').attr('data-value');
           var model = $('#vehicle-select').find('.selectize-input').find('div').attr('data-value');

           // var fuel = $('#fuel-type-select').find('.active span').text();
           // var category = $('#selected-service .selected').text();
           var additional = $('#additional').val();
           var error = 0 ;
           // console.log(make)
           // console.log(model)
           console.log(model)
            if (typeof(model) != "undefined"){
               fuel_start = model.indexOf("(")
               fuel_end = model.indexOf(")")
               var fuel =model.substr(fuel_start+1,fuel_end-fuel_start-1)
               model = model.substr(0,fuel_start-1)
            }
           if(typeof(model) == "undefined" ||typeof(make) == "undefined"  ) {
               $('#choose-vehicle-error').text('Please select vehicle');
                error = 1;
            }
           // if(category == "") {
           //     $('#choose-category-error').text('Please choose service category');
           //
           //     error = 1;
           //  }

           if(error==1){
               return;
           }

           // $('.service-headers').addClass('invisible').removeClass('visible');
           // $('.form-row').addClass('visible').removeClass('invisible');
           // $('.vehicle-details').addClass('invisible').removeClass('visible');
           // $('#home .home-form .proceed').addClass('invisible');
           // $('#home .home-form .submit').removeClass('invisible').addClass('visible');
           //

           $('.service-headers').hide();
           $('.form-row').show();
           $('.vehicle-details').hide();
           $('#home .home-form .proceed').hide();
           $('#home .home-form .submit').show();



       });


        $('#testimonials .image-testi').click(function(){
            $('#testimonials .image-testi img').removeClass('selected')
            // $(this).find('img').animate({top:'100px',left:'50px'}, 500);
            $(this).find('img').addClass('selected')

            testi = $(this).attr('data-class')
            // console.log(testi)
            $('#testimonials .testes').hide()
           alfa =  $('#testimonials .testis').find("[data-class='" + testi + "']")
            // console.log(alfa)
            alfa.show()
        });
        TESTI_COUNTER = 2
        window.onload = function start_testi() {
            testi();
        }
        function testi() {
            window.setInterval(function () {

                $('#testimonials .image-testi img').removeClass('selected')
                // $(this).find('img').animate({top:'100px',left:'50px'}, 500);
                $('#testimonials .image-testi .testiimage-'+TESTI_COUNTER).addClass('selected')

                testi =$('#testimonials .image-testi .testiimage-'+TESTI_COUNTER).closest('.image-testi').attr('data-class')
                // console.log(testi)
                $('#testimonials .testes').hide()
               alfa =  $('#testimonials .testis').find("[data-class='" + testi + "']")
                // console.log(alfa)
                alfa.show()
                if (TESTI_COUNTER == 3){
                    TESTI_COUNTER = 1
                }else{
                    TESTI_COUNTER = TESTI_COUNTER + 1
                }
                    // console.log(TESTI_COUNTER)
                }, 3000); // repeat forever, polling every 3 seconds
        }



        $('#home .home-form .submit button').click(function(event){
          var make = $('#brand-select').find('.selectize-input').find('div').attr('data-value');
           var model = $('#vehicle-select').find('.selectize-input').find('div').attr('data-value');
           var source_type = $('#home').attr('source-type')

            if (source_type == "Google"){
                source_type = "Google Adwords"
            }else if(source_type == "Facebook"){
                source_type ="Facebook Ad"
            }else if(source_type == "Mahindra"){
                source_type = "Mahindra Authorized"
            }else{
                // source_type = "Unknown"
            }

           // var fuel = $('#fuel-type-select').find('.active span').text();
           // var category = $('#selected-service .selected').text();
           // var additional = $('#additional').val();
           var name = $('#first_name').val();
           // var lname = $('#last_name').val();
           // var locality = $('#locality').val();
           var number = $('#telephone').val();
           // var email = $('#email').val();
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!

            var yyyy = today.getFullYear();
            if(dd<10){
                dd='0'+dd;
            }
            if(mm<10){
                mm='0'+mm;
            }
            var today = dd+'-'+mm+'-'+yyyy;
           var date = today;
           var time = $('#time-slot').find('.selectize-input').find('div').attr('data-value');
           // var city = $('#city').find('.selectize-input').find('div').attr('data-value');

            veh_type = $('#home').attr('data-vehicle-type')

            if (veh_type == "Bike"){
                var city = $('#city-bike input').val()
            }else{
                var city = $('#city-car input').val();
            }
            // form validation
            var error = 0 ;
           if(name==""){
               $('#first_name').addClass("invalid");
               error = 1;
           }
           // if(lname==""){
           //     $('#last_name').addClass("invalid");
           //     error = 1;
           // }

           if(city == "" || city == "City" ){
               $('#city').find('input').addClass("error-border");
                error = 1;
               console.log(city)

               // $('#city').find('.selectize-input').addClass('error-border')
               // // $('#locality').addClass("invalid");
               // error = 1;
           }
           if(number <= 100000000 || number >= 9999999999){
               $('#telephone').addClass("invalid");
               error = 1;
           }
           //  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
           //     $('#email').addClass("valid");
           //     // error = 1;
           // }else{
           //     $('#email').addClass("invalid");
           //     error =1;
           // }
           // if(date==""){
           //     $('#date').addClass("invalid");
           //     error = 1;
           // }
           // if(time==""){
           //     $('#time').addClass("invalid");
           //     $('#choose-time-slot').text('Choose Time Slot');
           //     error = 1;
           // }
            if(error==1){
               console.log("didnt work")
               return;
           }
            service = $('#home').attr('data-service-type')

            CURRENT_CART = [{"category": "Labour",
                        "name": service,
                        "price": 0,
                        "price_comp": 0,
                        "unit_price": 0,
                        "action": "Labour",
                        "type":"Labour",
                        "quantity": "1"}]

            var is_paid = false;
            var coupon  = "-";
            var paid_amt = "0";

            if (service == "CarCare"){
                doorstep = "1"
                category = "Cleaning"
            }else if(veh_type == "Bike"){
                doorstep="1"
                category = service
            }else{
                doorstep ="0"
                category = service
            }

            fuel_start = model.indexOf("(")
           fuel_end = model.indexOf(")")
           var fuel =model.substr(fuel_start+1,fuel_end-fuel_start-1)
           model = model.substr(0,fuel_start-1)


            JOBS_SUMMARY_TOTAL = [{'category':service,'job_name':service,'price_total':"TBD",'price_part':"TBD",'price_labour':"TBD",'price_discount':"TBD","doorstep":doorstep}];
            //
            ALL_JOBS_LIST = [{"Job":service,"Price":"0","Category":service,"Type":"Request"}]

           // console.log("worked");
            timestamp =  Date.now();
                        Commons.ajaxData('send_lead', {
                            name       : name
                            ,number     : number
                            ,email      : "--"
                            ,reg_number : "--"
                            ,address    : "--"
                            ,locality   : "--"
                            ,city       : city
                            ,order_list : JSON.stringify(CURRENT_CART)
                            ,make       : make
                            ,model      : model
                            ,fuel       : fuel
                            ,veh_type   : veh_type
                            ,date       : date
                            ,time       : "--"
                            // ,comment    : service + ', '+ additional
                            ,jobsummary_list : JSON.stringify(ALL_JOBS_LIST)
                            ,is_paid    : is_paid
                            ,paid_amt   : paid_amt
                            ,coupon     : coupon
                            ,price_total: 0
                            ,source     : source_type
                            ,int_summary :JSON.stringify(JOBS_SUMMARY_TOTAL)}, "post", _this, _this.loadPlaced,null, '.loading-pane');

            // Commons.ajaxData('get_location', {location_id: locality}, "get", _this, _this.loadLocation);
            // Commons.ajaxData('post_lead', {firstname       : fname,
            //                                 lastname        : lname,
            //                                 car_bike        : "Car",
            //                                 make            : make,
            //                                 model           : model,
            //                                 fuel_type       : fuel,
            //                                 service_category: category,
            //                                 additional         : additional,
            //                                 address         : "",
            //                                 locality        : locality,
            //                                 date_requested  : date,
            //                                 time_requested  : time,
            //                                 number          : number,
            //                                 email           : email,
            //                                 source          : "",
            //                                 time_stamp      : timestamp}, "get", _this, _this.loadPlaced,null, '.loading-pane');

       });

        $('#contact .contact-us .message-submit').click(function(event){
           // // var make = $('#brand-select').find('.active span').text();
           // // var model = $('#vehicle-select').find('.active span').text();
           // // var fuel = $('#fuel-type-select').find('.active span').text();
           // // var category = $('#selected-service .selected').text();
           // var additional = $('#additional').val();
           var fname = $('#first_name-2').val();
           var lname = $('#last_name-2').val();
           // var locality = $('#locality').val();
           var number = $('#telephone-2').val();
           var email = $('#email-2').val();
           var message = $('#message-2').val();
            var error = 0 ;

            // form validation

           if(fname==""){
               $('#first_name-2').addClass("invalid");
               error = 1;
           }
           if(lname==""){
               $('#last_name-2').addClass("invalid");
               error = 1;
           }
           if(number <= 100000000 || number >= 9999999999){
               $('#telephone-2').addClass("invalid");
               error = 1;
           }
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
               $('#email-2').addClass("valid");
               // error = 1;
           }else{
               $('#email-2').addClass("invalid");
               error =1;
           }
           if(message==""){
               $('#message-2').addClass("invalid");
               error = 1;
           }
            if(error==1){
                console.log("didnt work")
               return;
           }
           //
           // console.log("worked");
            timestamp =  Date.now();
            // Commons.ajaxData('get_location', {location_id: locality}, "get", _this, _this.loadLocation);
            Commons.ajaxData('post_message', {firstname       : fname,
                                            lastname        : lname,
                                            number          : number,
                                            email           : email,
                                            message          : message,
                                            time_stamp      : timestamp}, "get", _this, _this.loadMessaged,null, '.loading-pane');

       });
         $('#telephone-2').on('keypress',function(e,event,data){
            var code = (e.keyCode || e.which);
            // do nothing if it's an arrow key
            if(code == 37 || code == 38 || code == 39 || code == 40) {
                return;
            }
            var number = $(this).val();
            if (number >= 100000000 && number <= 9999999999){
               $('#telephone-2').removeClass("invalid");
               error = 1;
           }
        });

    },

    loadBrands:function(data){
        var source_type = $('#home').attr('source-type')

            var container = $('#brand-select');
              vehtype = $('#home').attr('data-vehicle-type')
            // console.log(vehtype)
            if(vehtype == ""){
                vehtype ="Car"
            }else{

            }
            // console.log(vehtype)
            container.html('');
            var html = '<select id="brand-select-list">';

            var POPULAR_BRANDS  = ["Maruti Suzuki", "Hyundai", "Honda", "Tata", "Toyota", "Mahindra", "Hero", "Bajaj","Yamaha"]
            var html2 = ""
            var html3 = ""
        if (source_type == "Mahindra"){
            html += '<option value="Mahindra" selected>Mahindra</option>';
        }else{
            html += '<option value="" disabled selected>Make</option>';
            $.each(data, function(ix, val){
            if (POPULAR_BRANDS.indexOf(val.make) >= 0){
                html2 += '<option value="' + val.make + '">'+ val.make + '</option>'
            }else{
                html3 += '<option value="' + val.make + '">'+ val.make + '</option>'
            }
            });
            html += '<optgroup label="Popular Brands">'
            html += html2
            html += '</optgroup>'
            html += '<optgroup label="Other Brands">'
            html += html3
            html += '</optgroup>'

        }



            html += '<select>';
            container.html(html);
            container.find('select').selectize({
            create: false,
            sortField: 'true',
            lockOptgroupOrder: true,
            render: {
                item: function(item, escape) {
                    // console.log(item.value)
                    if (vehtype=="Car") {
                        return '<div><img src="/../../static/revamp/img/Brands/Car/' + item.value + '.png" class="img-flag img-brand" alt="brand icon" />&nbsp;' + escape(item.value) + '</div>';
                    }else{
                        return '<div><img src="/../../static/revamp/img/Brands/Bikes/' + item.value + '.png" class="img-flag img-brand" alt="brand icon" />&nbsp;' + escape(item.value) + '</div>';
                    }
                    },
                 option: function(item, escape) {
                    if (vehtype=="Car") {
                        return '<div><img src="/../../static/revamp/img/Brands/Car/' + item.value + '.png" class="img-flag img-brand" alt="brand icon" />&nbsp;' + escape(item.value) + '</div>';
                    }else{
                        return '<div><img src="/../../static/revamp/img/Brands/Bikes/' + item.value + '.png" class="img-flag img-brand" alt="brand icon" />&nbsp;' + escape(item.value) + '</div>';
                    }


                }
            }

        })
        if (source_type == "Mahindra"){
            var dropdowntodisable = container.find('select').selectize();
            var dropdowntodisable_1 = dropdowntodisable[0].selectize;
            dropdowntodisable_1.disable();
            $('#brand-select').change()

        }
         var viewportWidth = $(window).width();
         if (viewportWidth <= 992){
              $(".selectize-input input").attr('readonly','readonly');
         }
    },

    // loadBrands2:function(data){
    //         var container = $('#brand-select');
    //         vehtype = $('#home .veh-cat-card.seleted').val
    //         console.log(vehtype)
    //         container.html('');
    //         var html = '<select id="brand-select-list">';
    //         html += '<option value="" disabled selected>Make</option>';
    //         if (vehtype=="Car"){
    //         $.each(data, function(ix, val){
    //             html += '<option value="' + val.make + 'data-placeholder="true" data-icon="../../static/revamp/img/Brands/Car/'+ val.make +'.png" class="left circle">'+ val.make + '</option>'});
    //         }else{
    //         $.each(data, function(ix, val){
    //             html += '<option value="' + val.make + 'data-placeholder="true" data-icon="../../static/revamp/img/Brands/Bike/'+ val.make +'.png" class="left circle">'+ val.make + '</option>'});
    //         }
    //         html += '<select>';
    //         container.html(html);
    //         container.find('select').material_select();
    //     },


    loadModels:function(data){
            //  vehtype = $('#home .veh-cat-card.selected').text().trim()
            // // console.log(vehtype)
            // if(vehtype == ""){
            //     vehtype ="Car"
            // }else{
            //
            // }
        vehtype = $('#home').attr('data-vehicle-type')

           var container = $('#vehicle-select');
            container.html('');
            var html = '<select id="vehicle-select-list" class="js-example-responsive">';
            html += '<option value="" disabled selected>Model</option>';
            $.each(data, function(ix, val){
                html += '<option value="' + val.full_veh_name + '" data-placeholder="true">'+ val.full_veh_name + '</option>'
                // console.log(val.model)

            });
            html += '</select>';
            container.html(html);
            // container.find('select').material_select();
            container.find('select').selectize();
            var viewportWidth = $(window).width();
         if (viewportWidth <= 992){
              $(".selectize-input input").attr('readonly','readonly');
         }

    },
    loadLocation:function(data){
            var container = $('input.autocomplete');
            var locations = {};
            container.autocomplete({
                data : locations
            })
            // var locations = {};

            $.each(data.predictions, function(ix, val){
                 locations[val.description] = null
            });
            // locations += '}';
            console.log(locations)
            container.autocomplete({
                data : locations
            })
    },
    loadPlaced:function(data){
        // $('#home .form-row').hide();
        // $('#home .button-row').hide();
        // $('#home .order-confirm').show();
        total= data['booking']['price_total']
        booking_id = data['booking']['booking_id']
        summary = data['booking']['Summary']

        console.log(total)
        console.log(booking_id)
        console.log(summary)

        COMPLETION_PATH = "/completebooking/?total="
        COMPLETION_PATH += total
        COMPLETION_PATH +=    "&booking_id="
        COMPLETION_PATH += booking_id
        COMPLETION_PATH += "&summary="
        COMPLETION_PATH += summary

        console.log(COMPLETION_PATH)
        // window.open(COMPLETION_PATH)
        window.location.href =  COMPLETION_PATH;


        // ga('require', 'ecommerce');
       // $.each(data['booking'], function(ix, val) {
       //  ga('ecommerce:addTransaction', {
       //    'id': val.booking_id,                     // Transaction ID. Required.
       //    'affiliation': val.Summary,   // Affiliation or store name.
       //    'revenue': val.price_total,               // Grand Total.
       //    'shipping': '0',                  // Shipping.
       //    'tax': '0'                     // Tax.
       //  });
       //     ga('ecommerce:send');
       // })

    },
    loadMessaged:function(data){
        $('#contact .contact-form').removeClass('visible').addClass('invisible');
        $('#contact .message-button').removeClass('visible').addClass('invisible');
        $('#contact .message-confirm').removeClass('invisible').addClass('visible');

    }
    
};





