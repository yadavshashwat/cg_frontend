document.onreadystatechange = function () {
    Global.init();
}

$(document).ready(function() {
    // $('select').material_select();
    // $('select').select2();
    $('select').selectize();

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

// $(window).load(function() {
//     var viewportWidth = $(window).width();
//     if (viewportWidth <= 600) {
//         $('.navbar .nav-wrapper').removeClass('navbar-trans').addClass('navbar-custom');
//         $('.navbar .nav-wrapper .logo-trans').removeClass('visible').addClass('invisible');
//         $('.navbar .nav-wrapper .logo-color').removeClass('invisible').addClass('visible');
//
//     }else if (viewportWidth <= 992){
//         $('.navbar .nav-wrapper').removeClass('navbar-trans').addClass('navbar-custom');
//         $('.navbar .nav-wrapper .logo-trans').removeClass('visible').addClass('invisible');
//         $('.navbar .nav-wrapper .logo-color').removeClass('invisible').addClass('visible');
//     }else{
//         $('.navbar .nav-wrapper').addClass('navbar-trans').removeClass('navbar-custom');
//         $('.navbar .nav-wrapper .logo-trans').addClass('visible').removeClass('invisible');
//         $('.navbar .nav-wrapper .logo-color').addClass('invisible').removeClass('visible');
//
//     }
//
// });
//
// $(window).resize(function() {
//     var viewportWidth = $(window).width();
//     if (viewportWidth <= 600) {
//         $('.navbar .nav-wrapper').removeClass('navbar-trans').addClass('navbar-custom');
//         $('.navbar .nav-wrapper .logo-trans').removeClass('visible').addClass('invisible');
//         $('.navbar .nav-wrapper .logo-color').removeClass('invisible').addClass('visible');
//     }else if (viewportWidth <= 992){
//         $('.navbar .nav-wrapper').removeClass('navbar-trans').addClass('navbar-custom');
//         $('.navbar .nav-wrapper .logo-trans').removeClass('visible').addClass('invisible');
//         $('.navbar .nav-wrapper .logo-color').removeClass('invisible').addClass('visible');
//
//     }else{
//         $('.navbar .nav-wrapper').addClass('navbar-trans').removeClass('navbar-custom');
//         $('.navbar .nav-wrapper .logo-trans').addClass('visible').removeClass('invisible');
//         $('.navbar .nav-wrapper .logo-color').addClass('invisible').removeClass('visible');
//
//     }
// });

$(document).ready(function(){
    var viewportWidth = $(window).width();

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 20) {
        $('.navbar .nav-wrapper').removeClass('navbar-trans').addClass('navbar-custom');
        $('.navbar .nav-wrapper .logo-trans').removeClass('visible').addClass('invisible');
        $('.navbar .nav-wrapper .logo-color').removeClass('invisible').addClass('visible');
        } else {
            // if (viewportWidth > 992){
            $('.navbar .nav-wrapper').addClass('navbar-trans').removeClass('navbar-custom');
            $('.navbar .nav-wrapper .logo-trans').addClass('visible').removeClass('invisible');
            $('.navbar .nav-wrapper .logo-color').addClass('invisible').removeClass('visible');
            // }}
        }});
});






//Height Define
$(document).ready(function(){
    var a = $(window).height();
    var b = $('.home-form').height();
    if (a>=b){
        $("#home").height(a - 0)
        $('#background img').height(a)
    }else{
        $("#home").height(b + 50)
        $('#background img').height(b + 50)

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
     vehtype = $('#home').attr('data-vehicle-type')
     service = $('#home').attr('data-service-type')
    if (vehtype == "Car" && service == "CarCare"){
        var PAGEHEADER = "BEST CAR CLEANING SERVICES IN GURUGRAM"
        var FEATURES = "3M/Meguiar products&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;Expert cleaners&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;doorstep service"
    }else if(vehtype =="Car" && service == "Servicing"){
        var PAGEHEADER = "BEST CAR SERVICING WORKSHOP IN GURUGRAM"
        var FEATURES = "Lowest price - Upfront estimate&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;OES/OEM Parts used&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;Trained mechanics"
    }else if(vehtype =="Car" && service == "Repairing"){
        var PAGEHEADER = " TOP QUALITY CAR REPAIRS IN GURUGRAM"
        var FEATURES = "OES/OEM Parts used&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;Trained mechanics&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;Free pick up and drop"
    }else if(vehtype =="Car" && service == "Denting"){
        var PAGEHEADER = "BEST IN CLASS DENTING/ PAINTING FACILITY IN GURUGRAM"
        var FEATURES = "Upto 60% less than market&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;No paint mismatch with 1 year warranty&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;Free pick up and drop"
    }else if(vehtype =="Bike" && service == "Repairing"){
        var PAGEHEADER = "DOORSTEP BIKE REPAIRS. NOW IN GURUGRAM"
        var FEATURES = "Trained mechanics&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;OEM Parts used&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;Top quality repairs"
    }else if(vehtype =="Bike" && service == "Servicing"){
        var PAGEHEADER = "DOORSTEP BIKE SERVICING. NOW IN GURUGRAM"
        var FEATURES = "Trained mechanics&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;OEM Parts used&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;From Rs. 249 only!"
    }else{
        var PAGEHEADER = "CAR & BIKE CARE <br> MADE EASY"
        var FEATURES = "One Stop Shop&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;Doorstep Service&nbsp;<i class='fa fa-circle x10 icon'></i>&nbsp;Instant Cost Estimate"
    }
    $('#home span.header').html(PAGEHEADER);
    $('#home span.features').html(FEATURES);

});

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
        
        $('.learn-more-button').on('click', function(e){
            $('body,html').animate(
                {'scrollTop':$('#home').outerHeight()},
                500
            );
        });
         $('.partners-button').on('click', function(e){
            $('body,html').animate(
                {'scrollTop':$('#home').outerHeight()+$('#features').outerHeight()},
                500
            );
        });
        $('.testi-button').on('click', function(e){
            $('body,html').animate(
                {'scrollTop':$('#home').outerHeight()+$('#features').outerHeight()+$('#clients').outerHeight()},
                500
            );
        });
        $('.brands-button').on('click', function(e){
            $('body,html').animate(
                {'scrollTop':$('#home').outerHeight()+$('#features').outerHeight()+$('#clients').outerHeight()+$('#testimonials').outerHeight()},
                500
            );
        });
        $('.contact-us-button').on('click', function(e){
            $('body,html').animate(
                {'scrollTop':$('#home').outerHeight()+$('#features').outerHeight()+$('#clients').outerHeight()+$('#testimonials').outerHeight()+$('#brands').outerHeight()},
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

        $('#home .home-form .submit button').click(function(event){
          var make = $('#brand-select').find('.selectize-input').find('div').attr('data-value');
           var model = $('#vehicle-select').find('.selectize-input').find('div').attr('data-value');
           // var fuel = $('#fuel-type-select').find('.active span').text();
           // var category = $('#selected-service .selected').text();
           var additional = $('#additional').val();
           var name = $('#first_name').val();
           // var lname = $('#last_name').val();
           // var locality = $('#locality').val();
           var number = $('#telephone').val();
           // var email = $('#email').val();
           var date = $('#date').val();
           var time = $('#time-slot').find('.selectize-input').find('div').attr('data-value');
           var city = $('#city').find('.selectize-input').find('div').attr('data-value');
           var error = 0 ;

            // form validation

           if(name==""){
               $('#first_name').addClass("invalid");
               error = 1;
           }
           // if(lname==""){
           //     $('#last_name').addClass("invalid");
           //     error = 1;
           // }
           if(typeof(city) == "undefined" ){
               $('#city').find('.selectize-input').addClass('error-border')
               // $('#locality').addClass("invalid");
               error = 1;
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
           if(date==""){
               $('#date').addClass("invalid");
               error = 1;
           }
           // if(time==""){
           //     $('#time').addClass("invalid");
           //     $('#choose-time-slot').text('Choose Time Slot');
           //     error = 1;
           // }
            if(error==1){
               console.log("didnt work")
               return;
           }
            veh_type = $('#home').attr('data-vehicle-type')
            service = $('#home').attr('data-service-type')

            CURRENT_CART = [{"category": "Labour",
                        "name": service,
                        "price": 0,
                        "price_comp": 0,
                        "unit_price": 0,
                        "action": "Labour",
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
                ,comment    : service + ', '+ additional
                ,is_paid    : is_paid
                ,paid_amt   : paid_amt
                ,coupon     : coupon
                ,price_total: 0
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
            html += '<option value="" disabled selected>Make</option>';

            $.each(data, function(ix, val){
                html += '<option value="' + val.make + '">'+ val.make + '</option>'
            });

            html += '<select>';
            container.html(html);

            // function formatmodelname (modelname) {
            //     if (!modelname.id) { return modelname.text; }
            //     if (vehtype=="Car"){
            //         var modelname = $('<span><img src="/../../static/revamp/img/Brands/Car/' + modelname.element.value + '.png" class="img-flag img-brand" /> ' + modelname.text + '</span>')
            //     }else{
            //         var modelname = $('<span><img src="/../../static/revamp/img/Brands/Bikes/' + modelname.element.value + '.png" class="img-flag img-brand" /> ' + modelname.text + '</span>')
            //     }
            //     return modelname;
            // };
            //
            // container.find('select').select2({
            //     templateResult: formatmodelname
            // });

             container.find('select').selectize({
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
        $('#home .form-row').hide();
        $('#home .button-row').hide();
        $('#home .order-confirm').show();
        ga('require', 'ecommerce');
       $.each(data['booking'], function(ix, val) {
        ga('ecommerce:addTransaction', {
          'id': val.booking_id,                     // Transaction ID. Required.
          'affiliation': val.Summary,   // Affiliation or store name.
          'revenue': val.price_total,               // Grand Total.
          'shipping': '0',                  // Shipping.
          'tax': '0'                     // Tax.
        });
           ga('ecommerce:send');
       })

    },
    loadMessaged:function(data){
        $('#contact .contact-form').removeClass('visible').addClass('invisible');
        $('#contact .message-button').removeClass('visible').addClass('invisible');
        $('#contact .message-confirm').removeClass('invisible').addClass('visible');

    }
    
};





