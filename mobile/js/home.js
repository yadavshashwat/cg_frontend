
var Global = {
    init:function(){
        var _this = this;
        if(!_this.readyState){
        _this.readyState = true;            
        }else{
            return;
        }
    $("[data-role=panel]").panel().enhanceWithin();  
        _this.events();
        
        $("#checkoutForm").validate({
            rules: {
                    name: {
                        required:true,
                        minlength:3
                    }
            },
		errorPlacement: function(error, element) {
				error.insertAfter($(element).parent());
		}
	});

//        $('#submit-button').button('disable');
    },
    initFBHandlers:function(FBApi){
        $('#login').find('#facebook').on('click', function(evt){

          FBApi.getLoginStatus(function(response) {
      console.log(response)
      if(response.status && response.status == 'connected'){
          //user present

      }else{
          //user present
        FBApi.login(function(response){
            if (response.authResponse) {
             console.log('Welcome!  Fetching your information.... ');
                $('#login').find('.login-container').hide();
                $('#login').find('.logout-container').show();
                $('#login').find('.logout-container').find('.text-box h4').html('Welcome!  Fetching your information.... ');
             FBApi.api('/me', function(response) {
               console.log('Good to see you, ' + response.name + '.');
                $('#login').find('.logout-container').find('.text-box h4').html('You are logged in as <span class="username">'+response.name+'</span>');
             });
            } else {
             console.log('User cancelled login or did not fully authorize.');
            }
        })

      }
//    statusChangeCallback(response);
  });

        });
        FBApi.getLoginStatus(function(response) {
          if(response.status && response.status == 'connected'){
              //user present
                    $('#login').find('.login-container').hide();
                    $('#login').find('.logout-container').show();
                    $('#login').find('.logout-container').find('.text-box h4').html('Welcome!  Fetching your information.... ');
                    $('#logout-btn').attr('data-state', 'facebook');
                 FBApi.api('/me', function(response) {
                   console.log('Good to see you, ' + response.name + '.');
                    $('#login').find('.logout-container').find('.text-box h4').html('You are logged in as <span class="username">'+response.name+'</span>');
                 });
          }else{

          }
        });

    },
    initGoogleHandlers:function(){

     var OAUTHURL    =   'https://accounts.google.com/o/oauth2/auth?';
        var VALIDURL    =   'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';
        var SCOPE       =   'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
        var CLIENTID    =   '280103750695-c5eiv9cp9hp4qoj3kdaa2eiajpa25sfo.apps.googleusercontent.com';
        var REDIRECT    =   'http://m.clickgarage.in/'
        var LOGOUT      =   'http://m.clickgarage.in#login';
        var TYPE        =   'token';
        var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
        var acToken;
        var tokenType;
        var expiresIn;
        var user;
        var loggedIn    =   false;

        function login() {
            var win         =   window.open(_url, "windowname1", 'width=800, height=600');

            var pollTimer   =   window.setInterval(function() {
                try {
                    console.log(win.document.URL);
                    if (win.document.URL.indexOf(REDIRECT) != -1) {
                        window.clearInterval(pollTimer);
                        var url =   win.document.URL;
                        acToken =   gup(url, 'access_token');
                        tokenType = gup(url, 'token_type');
                        expiresIn = gup(url, 'expires_in');
                        win.close();

                        validateToken(acToken);
                    }
                } catch(e) {
                    console.log(e);
                }
            }, 500);
        }

        function validateToken(token) {
            $.ajax({
                url: VALIDURL + token,
                data: null,
                success: function(responseText){
                    getUserInfo();
                    loggedIn = true;
                    $('#loginText').hide();
                    $('#logoutText').show();
                },
                dataType: "jsonp"
            });
        }

        function getUserInfo() {
            $.ajax({
                url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + acToken,
                data: null,
                success: function(resp) {
                    user    =   resp;
                    console.log(user);
                    $('#uName').text('Welcome ' + user.name);
                    $('#imgHolder').attr('src', user.picture);
                },
                dataType: "jsonp"
            });
        }

        //credits: http://www.netlobo.com/url_query_string_javascript.html
        function gup(url, name) {
            name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
            var regexS = "[\\#&]"+name+"=([^&#]*)";
            var regex = new RegExp( regexS );
            var results = regex.exec( url );
            if( results == null )
                return "";
            else
                return results[1];
        }

        function startLogoutPolling() {
            $('#loginText').show();
            $('#logoutText').hide();
            loggedIn = false;
            $('#uName').text('Welcome ');
            $('#imgHolder').attr('src', 'none.jpg');
        }
        login();


    },
    events:function(){
        var _this = this;
        console.log('adding hanlder')
        
        $('#brand-dropdown').on('change', function(){
            var brand = $(this).val();
            Commons.ajaxData('fetch_car_list', {m_id:brand,cb_id:"Car"},"get",_this,_this.loadCarMake);
        });
        
        $('#make-dropdown').on('change', function(){
            var carmake = $(this).val();
            if(carmake){
                $('#submit-button').button('enable');
            }
        });
        
        $('#submit-button').on('click', function(){
            var car_model = $('#make-dropdown option:selected').text();
            var car_brand = $('#brand-dropdown option:selected').text();
            var car_fullname = [car_brand, car_model].join(' ');
            var selected_c_id = $('#make-dropdown option:selected').attr('data-id');
            Global.carSelected = {
                'model':car_model,
                'brand':car_brand,
                'fullname':car_fullname,
                'id':selected_c_id
            }
//            var loc = window.location.href;
//            console.log(loc);
//            window.location.hash = '#services';
            var carObjStr = JSON.stringify(Global.carSelected);
            local.clearKey('clgacarobj');
            local.save('clgacarobj', carObjStr);
            window.location.hash = '#services';
            console.log(car_fullname, selected_c_id);
//            $.mobile.changePage('#services',{'allowSamePageTransition':true});
            return false;
        });
        
        $('#services .service-option').on('click', function(){
            var loc = window.location.href;
            var service_type = $(this).attr('id').toLowerCase();
            $('#order-page-service').text(service_type);
            console.log(loc);
            console.log(service_type);
//            window.location.href = loc + '#order';
            if(['denting','additional'].indexOf(service_type)>=0){
                var serviceObj = {'service':'repair'};
                if(service_type == 'denting'){
                    serviceObj['id'] = 'dent-paint';
                }else if(service_type == 'additional'){
                    serviceObj['id'] = 'custom';
                }
                var serviceObjStr = JSON.stringify(serviceObj);
                local.clearKey('clgaserviceobj');
                local.save('clgaserviceobj', serviceObjStr);
                Global.serviceSelected = serviceObj;

                window.location.hash = '#'+service_type;
                $.mobile.changePage('#'+service_type,{'allowSamePageTransition':true});
            }else if(['servicing','cleaning','windshield'].indexOf(service_type)>=0){
                var serviceObj = {'service':service_type.toLowerCase()};
                var serviceObjStr = JSON.stringify(serviceObj);
                local.clearKey('clgaserviceobj');
                local.save('clgaserviceobj', serviceObjStr);
                Global.serviceSelected = serviceObj;

                window.location.hash = '#order';
                $.mobile.changePage('#order',{'allowSamePageTransition':true});
            }else if(service_type == 'emergency'){
                window.location.hash = '#'+service_type;
                $.mobile.changePage('#'+service_type,{'allowSamePageTransition':true});
            }
            Global.serviceCat = {
                'serviceType':service_type     
            }

        });
        
        
        $('.service-list .list-services').on('click', 'a', function(e){
//            var $target  = $(e.target);
//            var serviceName = $('#order-page-service').text();
            var serviceId = $(this).attr('data-id');

            Global.serviceSelected['id'] = serviceId;
            window.location.hash = '#vendor';
        });
        
        
        $('.vendor-list .vendors').on('click', 'a', function(e){
            var vendorType = $('#vendor-select').text();
            var vendorID = $(this).attr('data-id');
            var vendorName = $(this).attr('data-name');

            Global.vendorSelected = {
                'vendor':vendorName,
                'id':vendorID
            };
            window.location.hash = '#checkout';
        });
        $('#emergency .list-services').on('click', 'a', function(e){
            var serviceId = $(this).text();
            serviceId = serviceId.toLowerCase().split(' ').join('-');
            Global.serviceSelected['id'] = serviceId;
            window.location.hash = '#checkout';
        });
        $('#additionalCheckout').on('submit', function(e){
            var additionalInfo = {};
            var inps = $(this).find('input:checked');
            $.each(inps, function(i,inp){
               additionalInfo[$(inp).parent().find('label').text()] = true;
            });
            Global.serviceSelected['additional'] = additionalInfo;
            window.location.hash = '#checkout';
            return false;
        });
        
        $('#checkout #checkout-submit').on('click', function(e){
            
            console.log('place order requested change detected');
//            var classy = Global.serviceCat.serviceType;
            var car_select = Global.carSelected.fullname;
//            var servicename = Global.serviceSelected.id;
            var name = $('#checkout #name').val();
            var email = $('#checkout #email').val();
            var phone = $('#checkout #phonenumber').val();
            var pick_date = $('#dateinput option:selected').text();
            var pick_time = $('#pick-up-time option:selected').text();
            var car_reg_number = $('#checkout #regn').val();
            var pick_addr = $('#checkout #pickupadd1').val();
            var pick_pin = $('#checkout #pincode1').val();
            var pick_lmark = $('#checkout #landmark1').val();
            var pick_city = $('#city1 option:selected').text();
            var drop_addr = $('#checkout #pickupadd2').val();
            var drop_pin = $('#checkout #pincode2').val();
            var drop_lmark = $('#checkout #landmark2').val();
            var drop_city = $('#city2 option:selected').text();
            var timeStamp = Math.floor(Date.now() / 1000);

            var pick = {
                     street : pick_addr,
                     pincode : pick_pin,
                     landmark : pick_lmark,
                     city : pick_city,
                     time : pick_time,
                     date : pick_date
                 };

            var drop = {
                     street : pick_addr,
                     pincode : pick_pin,
                     landmark : pick_lmark,
                     city : pick_city
                 };

            /*
            var order_list = [{
                ts : timeStamp,
                service_id : servicename,
                service : classy,
                status: true
            }];
            */
            var service_type = Global.serviceSelected['service'];
            var service_id = null;
            var vendor_name = null;
            var additional = null;
            var order_list = [];
            if(['denting','additional'].indexOf(service_type)>=0){
                service_id = Global.serviceSelected['id'];
                vendor_name = '--';
                additional = Global.serviceSelected.additional;
                var orderObj =  {
                    ts:timeStamp,
                    service_id:service_id,
                    service:service_type
                }
                if(additional){
                    orderObj['additional'] = JSON.stringify(additional);
                }
                order_list.push(orderObj);

                Commons.ajaxData('add_guest_transaction', {
                             email             : email,
                             name              : name,
                             number            : phone,
                             reg_no:             car_reg_number ,
                             order_list        : JSON.stringify(order_list),
                             car_name          : car_select,
                             pick:JSON.stringify(pick),
                             drop:JSON.stringify(drop),
                             loc:'mobile'
                         },"GET", _this, _this.loadPlaced);

            }else if(['servicing','cleaning','windshield'].indexOf(service_type)>=0){
                service_id = Global.vendorSelected['id'];
                vendor_name = Global.vendorSelected['vendor'];
                var orderObj =  {
                    ts:timeStamp,
                    service_id:service_id,
                    service:service_type
                }
                order_list.push(orderObj);

                Commons.ajaxData('place_order', {
                             email             : email,
                             name              : name,
                             number            : phone,
                             reg_no:             car_reg_number ,
                             order_list        : JSON.stringify(order_list),
                             car_name          : car_select,
                             pick:JSON.stringify(pick),
                             drop:JSON.stringify(drop),
                             loc:'mobile'
                         },"GET", _this, _this.loadPlaced);

            }else if(service_type == 'emergency'){

            }


        });
        
        $('#checkout #checkbox-mini-0').on('change', function(e) {
            console.log('tick box clicked');
            $('#checkout .dropoff-toggle').toggle();            
        });    

        $('.vendor-list .vendors').on('click', '.servicing-item-detail', function(e){
            var servicingID = $(this).attr('data-id');
            var vendor = $(this).attr('data-name');
            Global.serviceSelected['detail-id'] = servicingID;
            Global.serviceSelected['vendor'] = vendor.split(' ').join('#$');
            window.location.hash = '#checkout';
        });
        $('.vendor-list .vendors').on('click', '.cleaning-item-detail', function(e){
            var cleaningID = $(this).attr('data-id');
            var vendor = $(this).attr('data-name');
            Global.serviceSelected['detail-id'] = cleaningID;
            Global.serviceSelected['vendor'] = vendor.split(' ').join('#$');
            window.location.hash = '#checkout';
        });

//    Signup link show script
    $("#signup-link").click(function(){
    $("#login-btn").hide();
    $("#signup-link").hide();
    $("#signup-btn").css({'display':'block'});
    $("#login-link").css({'display':'block'});
    $("#name").show();
    $("#password2").show();    
    });
        
//    Signup link hide script    
    $("#login-link").click(function(){
    $("#login-btn").show();
    $("#signup-link").show();
    $("#signup-btn").css({'display':'none'});
    $("#login-link").css({'display':'none'});
    $("#name").hide();
    $("#password2").hide();    
    });        

    $(window).on( "navigate", function( event, data ) {
          console.log( data.state.info )
          console.log( data.state.direction )
          console.log( data.state.url )
          console.log( data.state.hash )
            switch(data.state.hash){
                case "#/":

                    break;
                case "#services":
//                        var param_autocomplete = $('#service-page-car').text().split(' ').join('%20');
//                        console.log(param_autocomplete)
//                        Commons.ajaxData('fetch_car_autocomplete', {query:param_autocomplete},"get",_this, _this.loadCid)
                    Global.servicesPageInit();
                    break;
                case "#additional":
                    Global.additionalPageInit();
                    break;
                case "#order":
//                    console.log('p')
//                    console.log("_this.load"+$('#order-page-service').text())

                    Global.orderPageInit();
                        //Commons.ajaxData('fetch_car_cleaning', {r_id:"dmFydW5ndWxhdGlsaWtlc2dhbG91dGlrZWJhYg==",c_id:"56097f3c5e1b2d72585f54d4"},"get",_this, _this.loadCleaning)
                    break;
                case "#vendor":
                    console.log('vendor load')
//                    if(!(Global.carSelected && Global.carSelected.id && Global.serviceSelected)){
//                        console.log('pageinit')
//                        window.location.hash = '#index';
//                        return;
//                    }
//                    if(Global.serviceSelected.service == 'servicing' || Global.serviceSelected.service == 'cleaning'){
//                        Commons.ajaxData('fetch_'+Global.serviceSelected.service.toTitleCase()+'_details', {service_id:Global.serviceSelected.id, c_id:Global.carSelected.id, city_id:'Delhi'},"get",_this, eval("_this.load"+Global.serviceSelected.service.toTitleCase()+"Details"))
//                    }
                    Global.vendorPageInit();
                    break;
                case "#checkout":
                    Global.checkoutPageInit();
                    break;
                default:
                    break;
            }
            return;
        });

$( document ).delegate("#services", "pageinit", function() {
    Global.servicesPageInit();
});
$( document ).delegate("#order", "pageinit", function() {
    Global.orderPageInit();
});
$( document ).delegate("#denting", "pageinit", function() {
    Global.dentingPageInit();
});
$( document ).delegate("#checkout", "pageinit", function() {
    Global.servicesPageInit();
});
$( document ).delegate("#cart", "pageinit", function() {
    Global.checkoutPageInit();
});
$( document ).delegate("#booking", "pageinit", function() {
    Global.bookingPageInit();
});
$( document ).delegate("#additional", "pageinit", function() {
    Global.additionalPageInit();
});
$( document ).delegate("#emergency", "pageinit", function() {
    Global.emergencyPageInit();
});

$( document ).delegate("#order", "pagebeforeload", function() {
    if(!(Global.carSelected && Global.carSelected.id)){
        console.log('pagebeforeload')
        window.location.hash = '#index';
    }
});

    },


    loadServicing : function(data){
        console.log(data)
        var container = $('.service-list .list-services');
        container.html('');
        var html = '';
        $.each(data, function(idx, val){
            html += '<li><a data-id=' + val.id + ' href="#"><div class="header-div">';
            //if(val.odometer)
            //    html += String(val.odometer).replace(/(.)(?=(\d{3})+$)/g,'$1,')+'km';
//=======
//            html += '<li><a href="#"><div class="header-div">';
            if(val.type_service)
                if(val.type_service=='Not Defined')
                    html += "I am not sure <div class = 'description'>I will go with minor servicing and would like post check up recommendations</div>"
                //html += String(val.odometer).replace(/(.)(?=(\d{3})+$)/g,'$1,')+'km';
                else
                    html += val.type_service;
//>>>>>>> f0475a412421ded7713e6ec74648106c094d6356
            else
                html += 'Regular Servicing';
            //html += ' or ';

            //if(val.year)
            //    html += val.year;
            //else
            //    html += '--year';
            html += '</div>';
            html += '<div class="checks-div">Regular Checks</div>';
            html += '<div class="checks-div">Washing</div>';

            html += '<div class="parts-div">';
            // push the list

            if(val.car_bike=="Bike")
                html += '<span class="part">Engine Oil</span>'+'<span class="part">Oil Filter</span>'+'<span class="part">Other Parts As Required</span>';
            else
                $.each(val.parts_replaced, function(i, part){
                   html += '<span class="part">' + part + '</span>';
                });

            html += '</div></a></li>';

        });
        container.html(html);
        container.listview().listview("refresh")
         var container2 = $('.service-image-holder');
        container2.html('');
        var html = '';
        html +=  "<img src='img/servicing1.jpg'>"
        container2.html(html);
    },
    
    loadCleaning : function(data){
        console.log(data)
        var container = $('.service-list .list-services');
        container.html('');
        var html = '';
        $.each(data, function(idx, val){
            //console.log('alfa')
            html += '<li><a data-id=' + val.id + '  href="#"><div class="header-div">';
            html += val.category;
            html += '</div></a></li>';
        });
        console.log(html)
        container.html(html);
        container.listview().listview("refresh")
         var container2 = $('.service-image-holder');
        container2.html('');
        var html = '';
        html +=  "<img src='img/cleaning1.jpg'>"
        container2.html(html);
    },

    loadWindshield : function(data){
        var container = $('.service-list .list-services');
        container.html('');
        var html = '';
        $.each(data, function(idx, val){
            //console.log('alfa')
            html += '<li><a data-id=' + val.id + '  href="#"><div class="header-div">';
            html += val.ws_type;
            html += '</div></a></li>';
        });
        container.html(html);
        container.listview().listview("refresh")
         var container2 = $('.service-image-holder');
        container2.html('');
        var html = '';
        html +=  "<img src='img/windshield1.jpg'>"
        container2.html(html);
    },

    loadServicingDetails : function(data){
        console.log(data)
        var container = $('.service-selection .selected-category');
        container.html('');
        var html = '';
        var val = data[0]
            html += ' <div class="header">';
            //html += '<span class = "odo-read">' + String(val.odometer).replace(/(.)(?=(\d{3})+$)/g,'$1,')+'km </span><span class = "sub-cat">(Regular Servicing)</span></div>';
            html += '<span class = "odo-read">' + String(val.type_service) +'</span></div>';

            html += '</div>';
            html += '<div class="checks-div">Regular Checks</div>';
            html += '<div class="checks-div">Washing</div>';
             html += '<div class="parts-div">';
        if(val.car_bike=="Bike")
            html += '<span class="part">Engine Oil</span>'+'<span class="part">Oil Filter</span>'+'<span class="part">Other Parts As Required</span>';
        else
            $.each(val.parts_list, function(i, part){
               html += '<span class="part">' + part + '</span>';
            });

        container.html(html);
        //container.listview("refresh")
        var container2 = $('.vendor-list .vendors');
        container2.html('');
        var html = '';
        $.each(data, function(idx, val){
            html += '<li><a data-id="'+val.id+'" data-name="'+val.vendor+'" class="servicing-item-detail"><img src=';
                if(val.vendor=="Authorized")
                    if(val.car_bike=="Bike")
                        html+= logoMap['Authorized Bike'] + val.brand + '.jpg >';
                    else
                        html+= logoMap['Authorized Car'] + val.brand + '.jpg >';
                else
                    html+= logoMap[val.vendor] + '>';

            if(val.vendor=="Authorized")
                html+= '<div class="vendor-name">' + val.brand + ' Authorized ';
            else
                html+= '<div class="vendor-name">' + val.vendor;

            html += '</div><div class=prices>'



            //html += "<table> <tr><td>Parts</td><td>:&nbsp;&nbsp;&#8377;"+parseInt(val.parts_price)+"</td></tr><tr><td>Labour</td><td>:&nbsp;&nbsp;&#8377;"+Math.ceil(val.labour_price)+"</td></tr> <tr><td>Service Tax</td><td>:&nbsp;&nbsp;&#8377;"+Math.ceil((val.labour_price*0.14))+"</td></tr><tr><td>Pick-Up Fee</td><td>:&nbsp;&nbsp;<strike>&#8377;200</strike>&nbsp;&nbsp;&#8377;"+ (val.car_bike == 'Car' ? '0': '0')+"</td></tr><tr class='total-row'><td>Total</td><td>:&nbsp;&nbsp;&#8377;"+(parseInt(val.parts_price)+parseInt(Math.ceil((val.labour_price)))+parseInt(Math.ceil((val.labour_price*0.14)))+parseInt((val.car_bike == 'Car' ? '0': '0')))+"</td></tr></table>";

            if(val.car_bike=="Car")
                if(val.vendor=="Authorized")
                    html +="<table><tr>Service Centre Bill Amount</tr><tr><td>Pick-Up Fee</td><td>:&nbsp;&nbsp;<strike>&#8377;200</strike>&nbsp;&nbsp;&#8377;"+ (val.car_bike == 'Car' ? '0': '0')+"</td></tr></table>"
                else
                    html += "<table><tr><td>Parts</td><td>:&nbsp;&nbsp;&#8377;"+parseInt(val.parts_price)+"</td></tr><tr><td>Labour</td><td>:&nbsp;&nbsp;&#8377;"+Math.ceil(val.labour_price)+"</td></tr> <tr><td>Service Tax</td><td>:&nbsp;&nbsp;&#8377;"+Math.ceil((val.labour_price*0.14))+"</td></tr><tr><td>Pick-Up Fee</td><td>:&nbsp;&nbsp;<strike>&#8377;200</strike>&nbsp;&nbsp;&#8377;"+ (val.car_bike == 'Car' ? '0': '0')+"</td></tr><tr class='total-row'><td>Total</td><td>:&nbsp;&nbsp;&#8377;"+(parseInt(val.parts_price)+parseInt(Math.ceil((val.labour_price)))+parseInt(Math.ceil((val.labour_price*0.14)))+parseInt((val.car_bike == 'Car' ? '0': '0')))+"</td></tr></table>";
            else
                html += "<table> <tr><td>Parts</td><td>:&nbsp;&nbsp;&#8377;"+parseInt(val.parts_price)+"</td></tr><tr><td>Labour</td><td>:&nbsp;&nbsp;&#8377;"+Math.ceil(val.labour_price)+"</td></tr> <tr><td>Service Tax</td><td>:&nbsp;&nbsp;&#8377;"+Math.ceil((val.labour_price*0.14))+"</td></tr><tr><td>Pick-Up Fee</td><td>:&nbsp;&nbsp;<strike>&#8377;200</strike>&nbsp;&nbsp;&#8377;"+ (val.car_bike == 'Car' ? '0': '0')+"</td></tr><tr class='total-row'><td>Total</td><td>:&nbsp;&nbsp;&#8377;"+(parseInt(val.parts_price)+parseInt(Math.ceil((val.labour_price)))+parseInt(Math.ceil((val.labour_price*0.14)))+parseInt((val.car_bike == 'Car' ? '0': '0')))+"</td></tr></table>";

            html += '</div></div>';

        });
        container2.html(html);
        container2.listview().listview("refresh")
    },
    
    loadCleaningDetails : function(data){
        console.log(data)
        var container = $('.service-selection .selected-category');
        container.html('');
        var html = '';
        var val = data[0]
            html += ' <div class="header">';
            html += '<span class = "Category odo-read">' + (val.category) + ' (Cleaning) </span></div>';
            html += '</div>';

        container.html(html);
        //container.listview("refresh")
        var container2 = $('.vendor-list .vendors');
        container2.html('');
        var html = '';
        $.each(data, function(idx, val){
            html += '<li><a data-id="'+val.id+'" data-name="'+val.vendor+'" class="cleaning-item-detail"><img src=';
                if(val.vendor=="Authorized")
                    html+= logoMap['Authorized Car'] + val.brand + '.jpg >';
                else
                    html+= logoMap[val.vendor] + '>';

            if(val.vendor=="Authorized")
                html+= '<div class="vendor-name">' + val.brand + ' Authorized ';
            else
                html+= '<div class="vendor-name">' + val.vendor;

            html += "</div><div class='service-name'>" + val.service;
            html += "</div><div class='description prices'>" + val.description;
            html += "</div><div class='prices'>"
            html += "<table><tr><td>Service Price</td><td>:&nbsp;&nbsp;"+(val.discount=='0' ? '' : "<strike>")+"&#8377;"+val.total_price + (val.discount=='0' ? '' : "</strike>&nbsp;&#8377;")+ (val.discount=='0' ? '' : parseInt(parseFloat(val.total_price)*(1.0-parseFloat(val.discount))))+"</td></tr>"+ (val.doorstep == '0' ? "<tr><td>Pick-Up Fee</td><td>:<strike>&nbsp;&nbsp;&#8377;200</strike>&nbsp;&nbsp;&#8377;0</td></tr>" : '')+" <tr class='total-row' ><td>Total</td><td>:&nbsp;&nbsp;&#8377;"+parseInt(parseFloat(val.total_price)*(1.0-parseFloat(val.discount)))+"</td></tr></table>";
            if(val.doorstep=="1")
                html+= '<div class="doorstep"> &#x2302; Doorstep Service </div>';
            html += '</div></div>';

        });
        container2.html(html);
        container2.listview().listview("refresh")
    },
    loadWindshieldDetails : function(data){
        console.log(data)
        var container = $('.service-selection .selected-category');
        container.html('');
        var html = '';
        var val = data[0]
            html += ' <div class="header">';
            html += '<span class = "Category odo-read">' + (val.ws_type) + ' (Windshield) </span></div>';
            html += '</div>';


        container.html(html);
        //container.listview("refresh")
        var container2 = $('.vendor-list .vendors');
        container2.html('');
        var html = '';
        $.each(data, function(idx, val){
            html += '<li><a data-id="'+val.id+'" data-name="'+val.vendor+'" class="windshield-item-detail"><img src=';
                if(val.vendor=="Authorized")
                    html+= logoMap['Authorized Car'] + val.brand + '.jpg >';
                else
                    html+= logoMap[val.vendor] + '>';

            if(val.vendor=="Authorized")
                html+= '<div class="vendor-name">' + val.brand + ' Authorized ';
            else
                html+= '<div class="vendor-name">' + val.vendor;
            var service = '';
            if(val.ws_type=='Door Glass'){
                service += val.ws_subtype+' '+val.ws_type;
            }
            else{
                service += val.ws_type;
            }

            html += "</div><div class='service-name'>" + service;
            html += "</div><div class='description prices'>" + val.description;
            if(val.ws_subtype=='With Defogger'){
                    html += '<span class="part">'+val.ws_subtype+'</span>&nbsp;';
            }
            if(val.colour=='Green'){
                    html += '<span class="part">Green Tinted</span>&nbsp;';
            }

            html += "</div><div class='prices'>"
//            html += "<table><tr><td>Service Price</td><td>:&nbsp;&nbsp;"+(val.discount=='0' ? '' : "<strike>")+"&#8377;"+val.total_price + (val.discount=='0' ? '' : "</strike>&nbsp;&#8377;")+ (val.discount=='0' ? '' : parseInt(parseFloat(val.total_price)*(1.0-parseFloat(val.discount))))+"</td></tr>"+ (val.doorstep == '0' ? "<tr><td>Pick-Up Fee</td><td>:<strike>&nbsp;&nbsp;&#8377;200</strike>&nbsp;&nbsp;&#8377;0</td></tr>" : '')+" <tr class='total-row' ><td>Total</td><td>:&nbsp;&nbsp;&#8377;"+parseInt(parseFloat(val.total_price)*(1.0-parseFloat(val.discount)))+"</td></tr></table>";
//            if(val.doorstep=="1")
                html+= '<div class="doorstep"> &#x2302; Doorstep Service </div>';
            html += '</div></div>';

        });
        container2.html(html);
        container2.listview().listview("refresh")
    },

    loadCarMake : function(data){
        console.log(data)
        var container = $('#make-dropdown');
        container.html('');
            var html = '<option value="choose-one" data-placeholder="true">Select Model</option>'
        $.each(data, function(ix, val){
            html += '<option data-id="'+val.id+'" value="'+val.name+'">'+val.name+'</option>';

        })
        container.html(html);
        container.selectmenu('enable');
        container.selectmenu('refresh');
//        container.json2html(data, Templates2.carMake, {append:true});
//        $.each(data, function(idx, val){
//        });
    },

    servicesPageInit : function(){

        var carData = null;
        if(!Global.carSelected || !Global.carSelected.id){
            if(!carData && local.load() && local.load()['clgacarobj']){
                carData = JSON.parse(local.load()['clgacarobj']);
                Global.carSelected = carData;
            }
        }

        if(!Global.carSelected || !Global.carSelected.id){
            window.location.hash = '#index';
        }

    },
    orderPageInit : function(){
        if(!Global.carSelected || !Global.carSelected.id){
            if(local.load() && local.load()['clgacarobj']){
                var carData = JSON.parse(local.load()['clgacarobj']);
                Global.carSelected = carData;
            }
        }

        if(!Global.serviceSelected){
            if(local.load() && local.load()['clgaserviceobj']){
                var serviceData = JSON.parse(local.load()['clgaserviceobj']);
                Global.serviceSelected = serviceData;
            }
        }

        if(!(Global.carSelected && Global.carSelected.id) || !(Global.serviceSelected && Global.serviceSelected.service)){
            window.location.hash = '#index';
            return;
        }else{
            Commons.ajaxData('fetch_car_'+Global.serviceSelected.service.toLowerCase(), {c_id:Global.carSelected.id},"get",Global,eval("Global.load"+Global.serviceSelected.service.toTitleCase()))
        }
    },
    vendorPageInit : function(){
//            $('#order-page-service').text(service_type);
        if(!Global.carSelected || !Global.carSelected.id){
            if(local.load() && local.load()['clgacarobj']){
                var carData = JSON.parse(local.load()['clgacarobj']);
                Global.carSelected = carData;
            }
        }

        if(!Global.serviceSelected){
            if(local.load() && local.load()['clgaserviceobj']){
                var serviceData = JSON.parse(local.load()['clgaserviceobj']);
                Global.serviceSelected = serviceData;
            }
        }
        if(!(Global.carSelected && Global.carSelected.id) || !(Global.serviceSelected && Global.serviceSelected.service && Global.serviceSelected.id )){
            window.location.hash = '#index';
            return;
        }else{
            if(Global.serviceSelected.service == 'servicing' || Global.serviceSelected.service == 'cleaning' || Global.serviceSelected.service == 'windshield'){
                Commons.ajaxData('fetch_'+Global.serviceSelected.service+'_details', {service_id:Global.serviceSelected.id, c_id:Global.carSelected.id, city_id:'Delhi'},"get",Global, eval("Global.load"+Global.serviceSelected.service.toTitleCase()+"Details"))
    //            Commons.ajaxData('fetch_car_'+Global.serviceSelected.service.toLowerCase(), {c_id:Global.carSelected.id},"get",Global,eval("Global.load"+Global.serviceSelected.service))
            }
        }
    },
    dentingPageInit : function(){

    },
    checkoutPageInit : function(){

    },
    cartPageInit : function(){

    },
    bookingPageInit : function(){

    },
    additionalPageInit : function(){

    },
    emergencyPageInit : function(){

    }
};


var logoMap = {
    '3M':'img/dl-logo-3M.png',
    'AIS':'img/dl-logo-ais.png',
    'Tee Car Care':'img/dl-logo-Tee.png',
    'Exppress Car Wash':'img/dl-logo-Exppress.png',
    'ClickGarage On-The-Go':'img/dl-logo-OntheGo.png',
    'ClickGarage Doorstep':'img/dl-logo-doorstep.png',
    'Authorized':'img/brands/',
    'Authorized Bike':'img/brands/Bike/',
    'Authorized Car':'img/brands/Car/',
    'Bosch':'img/dl-logo-Bosch.jpg',
    'ClickGarage Verified':'img/dl-logo-cgverified.png',
    'Mahindra First Choice':'img/dl-logo-MFC.jpg',
    'ClickGarage Workshop':'img/dl-logo-cgverified.png',
    'Bosch Car Care':'img/dl-logo-Bosch.jpg'
};



$(".menu-toggle-btn").click(function() {
			$(this).toggleClass("open");
});

document.onreadystatechange = function () {
    console.log('onreadystatechange')
      Global.init();
}
document.onload = function(){
    console.log('p')
     if(FB){
        FB.getLoginStatus(function(response) {console.log(response);});
    }
}


