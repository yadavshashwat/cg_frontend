document.onreadystatechange = function () {
    Global.init();
}

$(document).ready(function() {
    $('select').material_select();
});

// $('select').change(function (event) {
//     $('select').material_select();
// })

// $("#brand-select").change( function(){
//     $(this).material_select();
// });

// $(select).change(function(){
//     $('select').material_select();
// });



//Scroll To Top
// 		$(document).ready(function(){
// 			//Check to see if the window is top if not then display button
// 			$(window).scroll(function(){
// 				if ($(this).scrollTop() > 160) {
// 					$('.scrollToTop').fadeIn();
// 				} else {
// 					$('.scrollToTop').fadeOut();
// 				}
// 			});
// 			//Click event to scroll to top
// 			$('.scrollToTop').click(function(){
// 				$('html, body').animate({scrollTop : 0},800);
// 				return false;
// 			});
// 		});

//Height Define
$(document).ready(function(){
    var a = $(window).height();
    $("#home").height(a - 0)
});

// materialize css


$('.datepicker').pickadate({
    format: 'dd-mm-yyyy',
    closeOnSelect: true,
    min: new Date(),
});

$(".button-collapse").sideNav();


$(function() {
    $('#message-cycle').cycle({
        timeout: 4000,
        pause: 1
    });
});

//Onload FadeIn
$(document).ready(function(){
    $(".fadeOnLoad").hide(0).delay(1000).fadeIn(700)
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


        $('.service-card').click(function (event) {
            $('.service-card').removeClass('selected');
            $('.service-card:hover').addClass('selected');
        });

        $('.book-btn').click(function (event) {
            $('.infodiv').addClass('invisible');
            var a = $('.home-form').removeClass('hide-on-med-and-down').addClass('visible').height();
            $("#home").height(a + 30);
        });

        // $('#home .form-proceed').click(function (event) {
        // });

        $('.autocomplete-option').click(function() {
          $input.val($(this).text().trim());
          $('.autocomplete-option').addClass('hide');
        });



        $(document).ready(function (event,data) {
            Commons.ajaxData('get_type_make', {vehicle_type: "Car"}, "get", _this, _this.loadBrands);
        });

      $('#brand-select').change(function(event,data){
            var make = $(this).find('.active span').text();
            console.log(make)
            Commons.ajaxData('get_make_model', {make_id: make, vehicle_type: "Car"}, "get", _this, _this.loadModels);
        });

        $('#locality').on('keypress',function(e,event,data){
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
           var make = $('#brand-select').find('.active span').text();
           var model = $('#vehicle-select').find('.active span').text();
           var fuel = $('#fuel-type-select').find('.active span').text();
           var category = $('#selected-service .selected').text();
           var additional = $('#additional').val();
           var error = 0 ;
           if(make == "" || model == "" || fuel == "") {
               $('#choose-vehicle-error').text('Please select vehicle');
                error = 1;
            }
           if(category == "") {
               $('#choose-category-error').text('Please choose service category');

               error = 1;
            }

           if(error==1){
               return;
           }

           $('.service-headers').addClass('invisible').removeClass('visible');
           $('.form-row').addClass('visible').removeClass('invisible');
           $('.vehicle-details').addClass('invisible').removeClass('visible');
           $('#home .home-form .proceed').addClass('invisible');
           $('#home .home-form .submit').removeClass('invisible').addClass('visible');

       });

        $('#home .home-form .submit button').click(function(event){
           var make = $('#brand-select').find('.active span').text();
           var model = $('#vehicle-select').find('.active span').text();
           var fuel = $('#fuel-type-select').find('.active span').text();
           var category = $('#selected-service .selected').text();
           var additional = $('#additional').val();
           var fname = $('#first_name').val();
           var lname = $('#last_name').val();
           var locality = $('#locality').val();
           var number = $('#telephone').val();
           var email = $('#email').val();
           var date = $('#date').val();
           var time = $('#time-slot').find('.active span').text();
           var error = 0 ;

            // form validation

           if(fname==""){
               $('#first_name').addClass("invalid");
               error = 1;
           }
           if(lname==""){
               $('#last_name').addClass("invalid");
               error = 1;
           }
           if(locality==""){
               $('#locality').addClass("invalid");
               error = 1;
           }
           if(number <= 100000000 || number >= 9999999999){
               $('#telephone').addClass("invalid");
               error = 1;
           }
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
               $('#email').addClass("valid");
               // error = 1;
           }else{
               $('#email').addClass("invalid");
               error =1;
           }
           if(date==""){
               $('#date').addClass("invalid");
               error = 1;
           }
           if(time==""){
               $('#time').addClass("invalid");
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
            Commons.ajaxData('post_lead', {firstname       : fname,
                                            lastname        : lname,
                                            car_bike        : "Car",
                                            make            : make,
                                            model           : model,
                                            fuel_type       : fuel,
                                            service_category: category,
                                            additional         : additional,
                                            address         : "",
                                            locality        : locality,
                                            date_requested  : date,
                                            time_requested  : time,
                                            number          : number,
                                            email           : email,
                                            source          : "",
                                            time_stamp      : timestamp}, "get", _this, _this.loadPlaced,null, '.loading-pane');

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
            var container = $('#brand-select');
            container.html('');
            var html = '<select id="brand-select-list">';
            html += '<option value="" disabled selected>Choose Make</option>';
            $.each(data, function(ix, val){
                html += '<option value="' + val.make + 'data-placeholder="true">'+ val.make + '</option>'});

            html += '<select>';
            container.html(html);
            container.find('select').material_select();
        },

    loadModels:function(data){
            var container = $('#vehicle-select');
            container.html('');
            var html = '<select id="vehicle-select-list">';
            html += '<option value="" disabled selected>Choose Model</option>';
            $.each(data, function(ix, val){
                html += '<option value="' + val.model + ' data-placeholder="true">'+ val.model + '</option>'});

            html += '<select>';
            container.html(html);
            container.find('select').material_select();
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
        $('#home .form-row').removeClass('visible').addClass('invisible');
        $('#home .button-row').removeClass('visible').addClass('invisible');
        $('#home .order-confirm').removeClass('invisible').addClass('visible');

    },
    loadMessaged:function(data){
        $('#contact .contact-form').removeClass('visible').addClass('invisible');
        $('#contact .message-button').removeClass('visible').addClass('invisible');
        $('#contact .message-confirm').removeClass('invisible').addClass('visible');

    }



};












