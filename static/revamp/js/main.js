


document.onready = function () {
    // alert("Hi")
    Login.init()
    Global.init();

}

$(document).ready(function() {
    // $('select').material_select();
    $('select').select2();
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
    }else{
        $("#home").height(b + 50)
    }
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



        // $('.service-card').click(function (event) {
        //     $('.service-card').removeClass('selected');
        //     $('.service-card:hover').addClass('selected');
        // });

        // $('.book-btn').click(function (event) {
        //     $('.infodiv').addClass('invisible');
        //     var a = $('.home-form').removeClass('hide-on-med-and-down').addClass('visible').height();
        //     $("#home").height(a + 30);
        // });

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



        var callbrands =function(){
            vehtype = $('#home .veh-cat-card.selected').text().trim()
            console.log(vehtype)
            if(vehtype == ""){
                vehtype ="Car"
            }else{
            }
            Commons.ajaxData('get_type_make', {vehicle_type: vehtype}, "get", _this, _this.loadBrands);
        }

        $(document).on('ready',callbrands);
        $('#home').on('click','.veh-cat-card',callbrands);


      $('#brand-select').change(function(event,data){
            vehtype = $('#home .veh-cat-card.selected').text().trim()
            // console.log(vehtype)
            if(vehtype == ""){
                vehtype ="Car"
            }else{

            }
            var make = $(this).find('.select2-selection__rendered').text().trim();
          console.log(make)
            Commons.ajaxData('get_make_model', {make_id: make, vehicle_type: vehtype}, "get", _this, _this.loadModels);
        });


       $('#home .veh-cat-card').click(function(){
            $('#home .veh-cat-card').removeClass('selected');
            $('#home .veh-cat-card:hover').addClass('selected');
            vehicle = $('#home .veh-cat-card:hover').text()
           $('#home .home-form-2 .vehicle-type').text(vehicle);
        });

       $('#home .home-form-2 .form-proceed').click(function(event){
           var make = $('#brand-select').find('.select2-selection__rendered').text().trim();
           var model = $('#vehicle-select').find('.select2-selection__rendered').text().trim();
           // var fuel = $('#fuel-type-select').find('.active span').text();
           var vehtype = $('#home .veh-cat-card.selected').text().trim()
           var error = 0 ;
           if(make == "" || model == "") {
               $('#choose-vehicle-error').text('Please select vehicle');
                error = 1;
            }
           if(error==1){
               return;
           }
           local.save('vehmake',make);
           fuel_start = model.indexOf("(")
           fuel_end = model.indexOf(")")

           var fuel =model.substr(fuel_start+1,fuel_end-fuel_start-1)
           model = model.substr(0,fuel_start)
           local.clearKey('cgcart')
           local.save('vehmodel',model);
           local.save('vehfuel',fuel)
           local.save('vehtype',vehtype)
           local.save('fullname',make+" "+model+" "+fuel)
            // window.location.href = '/get_quote';
           window.location.href = '/'+vehtype+'/'+make+'_'+model+'_'+fuel;
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
            vehtype = $('#home .veh-cat-card.selected').text().trim()
            // console.log(vehtype)
            if(vehtype == ""){
                vehtype ="Car"
            }else{

            }
            // console.log(vehtype)
            container.html('');
            var html = '<select id="brand-select-list" class="js-example-responsive">';
            html += '<option value="" disabled selected>Make</option>';

            $.each(data, function(ix, val){
                html += '<option value="' + val.make + '">'+ val.make + '</option>'
            });

            html += '<select>';
            container.html(html);
            function formatmodelname (modelname) {
                if (!modelname.id) { return modelname.text; }
                if (vehtype=="Car"){
                    var modelname = $('<span><img src="/../../static/revamp/img/Brands/Car/' + modelname.element.value + '.png" class="img-flag img-brand" /> ' + modelname.text + '</span>')
                }else{
                    var modelname = $('<span><img src="/../../static/revamp/img/Brands/Bikes/' + modelname.element.value + '.png" class="img-flag img-brand" /> ' + modelname.text + '</span>')
                }
                return modelname;
            };

            // container.find('select').material_select();
            container.find('select').select2({
                  // allowClear: true
                templateResult: formatmodelname
            });

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
            var container = $('#vehicle-select');
            container.html('');
            var html = '<select id="vehicle-select-list" class="js-example-responsive">';
            html += '<option value="" disabled selected>Model</option>';
            $.each(data, function(ix, val){
                html += '<option value="' + val.make +' '+val.model+' '+val.fuel_type + '" data-placeholder="true">'+ val.full_veh_name + '</option>'
                console.log(val.model)

            });
            html += '</select>';
            container.html(html);
            // container.find('select').material_select();
            container.find('select').select2();

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





