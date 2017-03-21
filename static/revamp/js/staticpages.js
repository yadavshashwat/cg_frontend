


document.onready = function () {
    // alert("Hi")
    Login.init()
    Global.init();

}

$(document).ready(function() {
    $('select').selectize();
});


$(window).ready(function() {
     setTimeout(function() {
         $('.loading-pane-2').hide();
         $('#overlay').hide();
            }, 2200);
});


$('.datepicker').pickadate({
    format: 'dd-mm-yyyy',
    closeOnSelect: true,
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


  var QueryString = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
          var query_string = {};
          var query = window.location.search.substring(1);
          var vars = query.split("&");
          for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
                // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
              query_string[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
              var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
              query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
              query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
          }
          return query_string;
   }();




// materialize css



$(".button-collapse").sideNav();

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


        $(document).ready(function(){
            vehtype = $('#veh_make').attr('veh-type')
            if (vehtype == "Car"){
                $('.make-model-prefix').addClass('fa-car')
            }else{
                $('.make-model-prefix').addClass('fa-motorcycle')
            }
            // console.log(vehtype)
            Commons.ajaxData('get_type_make', {vehicle_type: vehtype}, "get", _this, _this.loadBrands);
            Commons.ajaxData('get_all_models', {vehicle_type: "Car"}, "get", _this, _this.loadCarService);
            Commons.ajaxData('get_all_models', {vehicle_type: "Bike"}, "get", _this, _this.loadBikeService);
            });

        $('#veh_make').change(function(){
            vehtype = $('#veh_make').attr('veh-type')
            if(vehtype == ""){
                vehtype ="Car"
            }else{
            }
            var make = $(this).find('.selectize-input').find('div').attr('data-value');
          // console.log(make)
            Commons.ajaxData('get_make_model', {make_id: make, vehicle_type: vehtype}, "get", _this, _this.loadModels);
        });

            // Change Vehicle
        $('.order-page .nav2 .change-button').click(function () {
            $('#vehicle-select-form').show()
            $('#cover').show()
        })
        $('#cover').click(function () {
            // console.log('check')
            $('#vehicle-select-form').hide()
            $('#cover').hide()
        });

        var callbrands =function(){
            vehtype = $('#vehicle-select-form .veh-cat-card.selected').text().trim()
            // console.log(vehtype)
            if(vehtype == ""){
                vehtype ="Car"
            }else{
            }
            Commons.ajaxData('get_type_make', {vehicle_type: vehtype}, "get", _this, _this.loadBrands2);
        }
        $(document).on('ready',callbrands);
        $('#vehicle-select-form').on('click','.veh-cat-card',callbrands);
        $('#brand-select').change(function(event,data){
            vehtype = $('#vehicle-select-form .veh-cat-card.selected').text().trim()
            // console.log(vehtype)
            if(vehtype == ""){
                vehtype ="Car"
            }else{

            }
            var make = $(this).find('.selectize-input').find('div').attr('data-value');
            console.log(make)
            Commons.ajaxData('get_make_model', {make_id: make, vehicle_type: vehtype}, "get", _this, _this.loadModels2);
        });
        $('#vehicle-select-form .veh-cat-card').click(function(){
            $('#vehicle-select-form .veh-cat-card').removeClass('selected');
            $('#vehicle-select-form .veh-cat-card:hover').addClass('selected');
            vehicle = $('#vehicle-select-form .veh-cat-card:hover').text()
            var html = '<select id="vehicle-select-list" class="js-example-responsive">';
            html += '<option value="" disabled selected>Model</option>';
            html += '</select>';
            $('#vehicle-select-form #vehicle-select').html(html);
            // $('#vehicle-select-form #vehicle-select').selectize();
            $('#vehicle-select-form .home-form-2 .vehicle-type').text(vehicle);

        });
      $('#vehicle-select-form .home-form-2 .form-proceed').click(function(event){
            var make = $('#brand-select').find('.selectize-input').find('div').attr('data-value');
            var model = $('#vehicle-select').find('.selectize-input').find('div').attr('data-value');
            // var fuel = $('#fuel-type-select').find('.active span').text();
            var vehtype = $('#vehicle-select-form .veh-cat-card.selected').text().trim()
            var error = 0 ;
            // if(make == "" || model == "" ||make == "Make" || model == "Model" ) {
            //     $('#choose-vehicle-error').text('Please select vehicle');
            //     error = 1;
            // }
            // if(error==1){
            //     return;
            // }

            cookie = local.load()

            if(cookie['vehtype']==null || cookie['vehtype']===false){
                local.clearKey('cg_city')
            }else{
                if (vehtype != cookie['vehtype']){
                    console.log('check')
                    local.clearKey('cg_city')
                }
            }
            if (typeof(model) != "undefined") {
               fuel_start = model.indexOf("(")
               fuel_end = model.indexOf(")")
               var fuel = model.substr(fuel_start + 1, fuel_end - fuel_start - 1)
               model = model.substr(0, fuel_start - 1)
           }


           if(typeof(model) == "undefined" ||typeof(make) == "undefined"  ) {
               $('#choose-vehicle-error').text('Please select vehicle');
                error = 1;
            }
           if(error==1){
               return;
           }
            // var fuel =model.substr(fuel_start+1,fuel_end-fuel_start-1)
            // model = model.substr(0,fuel_start-1)
            local.clearKey('cgcart')
            local.save('vehmake',make);
            local.save('vehmodel',model);
            local.save('vehfuel',fuel);
            local.save('vehtype',vehtype);
            local.save('fullname',make+" "+model+" "+fuel)

            setTimeout(function(){
                window.location.href = '/Book/'+vehtype+'/'+make.replace(" ", "_")+'-'+model.replace(" ", "_")+'-'+fuel;

            },10);
        });



        $('.submit-rsa').click(function(){
                cust_fname              = $('#firstname').val()
                cust_lname              = $('#lastname').val()
                cust_num_p              = $('#telephone').val()
                cust_num_s              = $('#alt_telephone').val()
                cust_email              = $('#email').val()
                cust_add                = $('#address').val()
                cust_loc                = $('#locality').val()
                cust_city               = $('#city').val()
                cust_state              = $('#state').find('.selectize-input').find('div').attr('data-value');
                make                    = $('#veh_make').find('.selectize-input').find('div').attr('data-value');
                veh_type                = $('#veh_make').attr('veh-type')
                model                   = $('#veh_model').find('.selectize-input').find('div').attr('data-value');
                fuel_start              = model.indexOf("(")
                fuel_end                = model.indexOf(")")
                fuel                    = model.substr(fuel_start+1,fuel_end-fuel_start-1)
                model                   = model.substr(0,fuel_start-1)
                vehicle_vin             = $('#vin_number').val()
                vehicle_regno           = $('#reg_number').val()
                sub_type                = 'RSA'
                pack_name               = 'ClickGarage Assist'
                date_veh_purchase       = $('#date_purchase').val();
                error = 0
                if(cust_fname==""){
                    $('#firstname').addClass("invalid");
                    error = 1;
                }
                if(cust_lname==""){
                    $('#lastname').addClass("invalid");
                    error = 1;
                }
                if(cust_add==""){
                    $('#address').addClass("invalid");
                    error = 1;
                }
                if(cust_loc==""){
                    $('#locality').addClass("invalid");
                    error = 1;
                }
                if(cust_city==""){
                    $('#city').addClass("invalid");
                    error = 1;
                }
                if(cust_state==""){
                    $('#state').addClass("invalid");
                    error = 1;
                }
               if(make == "" || model == "" ||make == "Make" || model == "Model" ) {
                   $('#choose-vehicle-error').text('Please select vehicle');
                    error = 1;
                }

                if(cust_num_p <= 100000000 || cust_num_p >= 9999999999){
                    $('#telephone').addClass("invalid");
                    error = 1;
                }

                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cust_email)){
                    $('#email').addClass("valid");
                    // error = 1;
                }else{
                    $('#email').addClass("invalid");
                    error =1;
                }
                if(vehicle_vin==""){
                    $('#vin_number').addClass("invalid");
                    error = 1;
                }
                if(vehicle_regno==""){
                    $('#reg_number').addClass("invalid");
                    error = 1;
                }
                if(date_veh_purchase==""){
                    $('#date_purchase').addClass("invalid");
                    error = 1;
                }

                if(error==1){
                    return;
                }else{

                    Commons.ajaxData('add_modify_subscription', {cust_fname      :cust_fname           ,
                                                            cust_lname           :cust_lname           ,
                                                            cust_num_p           :cust_num_p           ,
                                                            cust_num_s           :cust_num_s           ,
                                                            cust_email           :cust_email           ,
                                                            cust_add             :cust_add             ,
                                                            cust_loc             :cust_loc             ,
                                                            cust_city            :cust_city            ,
                                                            cust_state           :cust_state           ,
                                                            make                 :make                 ,
                                                            veh_type             :veh_type             ,
                                                            fuel                 :fuel                 ,
                                                            model                :model                ,
                                                            vehicle_vin          :vehicle_vin          ,
                                                            vehicle_regno        :vehicle_regno        ,
                                                            sub_type             :sub_type             ,
                                                            pack_name            :pack_name            ,
                                                            date_veh_purchase    :date_veh_purchase    ,
                                                            }, "get", _this, _this.loadSubscrption);


                }





        });

    },

    loadCarService:function(data){
            var container = $('#dynamic-pages .cars .pre-data');
            container.html('')
            make_name = ""
            html = ""
             $.each(data, function(ix, val){
                 if (val.make != make_name) {
                     html += '<div class="header makename">'
                     html += '<h3>'+val.make+'</h3>'
                     html += '</div>'
                 }
                    html +=	'<div class="list-cars">'
			        html += '<div class="col l4 s4 m4">'
                    html += '<li class ="vehicle-name">'+val.full_veh_name+'</li>'
                    html += '</div>'
			        html += '<div class="col l8 s8 m8">'
                    html += '<ul class="left">'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/servicing/">Servicing</a></li>'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/repairing/">Repairing</a></li>'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/carcare/">Car Care</a></li>'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/denting/">Denting</a></li>'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/subscription/">Subscription</a></li>'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/emergency/">Emergency</a></li>'
    	    		html += '</ul>'
                    html += '</div>'
                    html += '<hr>'
        	        html +=	'</div>'
                 make_name = val.make
             });
            container.html(html)
        },
    loadBikeService:function(data){
            var container = $('#dynamic-pages .bikes .pre-data');
            container.html('')
            make_name = ""
            html = ""
             $.each(data, function(ix, val){
                 if (val.make != make_name) {
                     html += '<div class="header makename">'
                     html += '<h3>'+val.make+'</h3>'
                     html += '</div>'
                 }
                    html +=	'<div class="list-cars">'
			        html += '<div class="col l4 s4 m4">'
                    html += '<li class ="vehicle-name">'+val.full_veh_name+'</li>'
                    html += '</div>'
			        html += '<div class="col l8 s8 m8">'
                    html += '<ul class="left">'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/servicing/">Servicing</a></li>'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/repairing/">Repairing</a></li>'
    				// html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/carcare/">Car Care</a></li>'
    				// html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/denting/">Denting</a></li>'
    				// html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/subscription/">Subscription</a></li>'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/emergency/">Emergency</a></li>'
    	    		html += '</ul>'
                    html += '</div>'
                    html += '<hr>'
        	        html +=	'</div>'
                 make_name = val.make
             });
            container.html(html)
        },

    loadModels2:function(data){
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
            html += '<option value="'+val.model+' ('+val.fuel_type + ')" data-placeholder="true">'+ val.full_veh_name + '</option>'
            // console.log(val.model)

        });
        html += '</select>';
        container.html(html);
        // container.find('select').material_select();
        // container.find('select').select2();
        container.find('select').selectize();
        var viewportWidth = $(window).width();
        if (viewportWidth <= 992){
            $(".selectize-input input").attr('readonly','readonly');
        }

    },
    loadBrands2:function(data){
        var container = $('#brand-select');
        vehtype = $('#vehicle-select-form .veh-cat-card.selected').text().trim()
        // console.log(vehtype)
        if(vehtype == ""){
            vehtype ="Car"
        }else{

        }
        // console.log(vehtype)
        container.html('');
        var html = '<select id="brand-select-list" class="js-example-responsive">';
        html += '<option value="" disabled selected>Make</option>';

        var html2 = ""
        var html3 = ""
        var POPULAR_BRANDS  = ["Maruti Suzuki", "Hyundai", "Honda", "Tata", "Toyota", "Mahindra", "Hero", "Bajaj","Yamaha"]

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

        html += '<select>';
        container.html(html);
        container.find('select').selectize({
            create: false,
            sortField: 'true',
            lockOptgroupOrder: true,
            // openOnFocus:false,
            // maxOptions:10,
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
        });
        var viewportWidth = $(window).width();
        if (viewportWidth <= 992){
            $(".selectize-input input").attr('readonly','readonly');
        }


    },
    loadBrands:function(data){
        var container = $('#veh_make');
        vehtype = $('#veh_make').attr('veh-type')

        if(vehtype == ""){
                vehtype ="Car"
            }else{

            }
            // console.log(vehtype)
            container.html('');
            var html = '<select id="brand-select-list" class="">';
            html += '<option value="" disabled selected>Select Make</option>';

            $.each(data, function(ix, val){
                html += '<option value="' + val.make + '">'+ val.make + '</option>'
                // console.log(val.make)

            });
            html+= '</select>'
            // console.log(html)
            container.html(html);
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
        });
        var viewportWidth = $(window).width();
         if (viewportWidth <= 992){
              $(".selectize-input input").attr('readonly','readonly');
         }
    },
    loadModels:function(data){
        var container = $('#veh_model');
            container.html('');
            var html = '<select id="vehicle-select-list" class="">';
            html += '<option value="" disabled selected>Select Model</option>';
            $.each(data, function(ix, val){
                html += '<option value="'+val.model+' ('+val.fuel_type + ')" data-placeholder="true">'+ val.full_veh_name + '</option>'
            });
            html += '</select>';
            container.html(html);
            container.find('select').selectize();
         var viewportWidth = $(window).width();
         if (viewportWidth <= 992){
              $(".selectize-input input").attr('readonly','readonly');
         }

    },
    loadSubscrption:function(data){
        $('.rsa-form').hide()
        $('.rsa-thanks').show()
    },


};





