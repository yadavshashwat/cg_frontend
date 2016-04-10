
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
        _this.initGoogleHandlers();
        Commons.ajaxData('fetch_user_login',{},"get",_this,_this.userLoad);

        $("#checkoutForm").validate({
            rules: {
                    name: {
                        required:true,
                        minlength:3
                    },
                    pickupadd1: {
                        required:true,
                        minlength:10
                    },
                    'pick-up-time': {
                        required:true,
                    }
            },
            errorPlacement: function(error, element) {
                    error.insertAfter($(element).parent());
            },
            submitHandler:function(e){
                console.log('place order requested change detected');
    //            var classy = Global.serviceCat.serviceType;
                var car_select = Global.carSelected.fullname;
    //            var servicename = Global.serviceSelected.id;
                var name = $('#checkout #name').val();
                var email = $('#checkout #email').val();
                var phone = $('#checkout #phonenumber').val();
                var pick_date = $('#dateinput').val();
                var pick_time = $('#pick-up-time option:selected').text();
                var car_reg_number = $('#checkout #regn').val();
                var pick_addr = $('#checkout #pickupadd1').val();
                var pick_pin = $('#checkout #pincode1').val();
                var pick_lmark = $('#checkout #landmark1').val();
                var pick_city = $('#city1 option:selected').text();
//                var drop_addr = $('#checkout #pickupadd2').val();
//                var drop_pin = $('#checkout #pincode2').val();
//                var drop_lmark = $('#checkout #landmark2').val();
//                var drop_city = $('#city2 option:selected').text();
                var timeStamp = Math.floor(Date.now() / 1000);

                var pick = {
                         street : pick_addr,
    //                     pincode : pick_pin,
    //                     landmark : pick_lmark,
                         city : pick_city,
                         time : pick_time,
                         date : pick_date
                     };

                var drop = {
                         street : pick_addr,
    //                     pincode : pick_pin,
    //                     landmark : pick_lmark,
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
                        orderObj['additional_data'] = JSON.stringify(additional);
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
                             },"GET", Global, Global.loadPlaced);

                }else if(['servicing','cleaning','windshield'].indexOf(service_type)>=0){
                    service_id = Global.vendorSelected['id'];
                    vendor_name = Global.vendorSelected['vendor'];
                    var orderObj =  {
                        ts:timeStamp,
                        service_id:service_id,
                        service:service_type
                    }
                    order_list.push(orderObj);

                    if(service_type == 'servicing'){
                        additional = Global.serviceSelected.additional;
                        if(additional){
                            orderObj['additional_data'] = JSON.stringify(additional);
                        }
                    }
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
                             },"GET", Global, Global.loadPlaced);

                }else if(service_type == 'emergency'){


                }else if(service_type == 'repair'){
                    service_id = Global.serviceSelected['id'];
                    vendor_name = '--';
                    additional = Global.serviceSelected.additional;
                    var orderObj =  {
                        ts:timeStamp,
                        service_id:service_id,
                        service:service_type
                    }
                    if(additional){
                        orderObj['additional_data'] = JSON.stringify(additional);
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
                             },"GET", Global, Global.loadPlaced);

                }
                return false;
            }

	    });

        $("#emCheckoutForm").validate({
            rules: {
                    name: {
                        required:true,
                        minlength:3
                    },
                    pickupadd1: {
                        required:true,
                        minlength:10
                    }
            },
            errorPlacement: function(error, element) {
                    error.insertAfter($(element).parent());
            },
            submitHandler:function(e){
            var car_select = Global.carSelected.fullname;

            var name = $('#em-checkout #name').val();
            var email = $('#em-checkout #email').val();
            var phone = $('#em-checkout #phonenumber').val();
//            var pick_date = $('#dateinput option:selected').text();
//            var pick_time = $('#pick-up-time option:selected').text();
            var car_reg_number = $('#checkout #regn').val();
            var pick_addr = $('#checkout #pickupadd1').val();
            var pick_city = $('#city1 option:selected').text();
            var timeStamp = Math.floor(Date.now() / 1000);

            var date = new Date();
            var hrs = date.getHours();
            if(hrs<10){
                hrs = '0'+hrs
            }
            var mts = date.getMinutes();
            if(mts<10){
                mts = '0'+mts
            }

            var pick = {
                     street : pick_addr,
                     pincode : 'n/a',
                     landmark : '',
                     city : pick_city,
                     time : ((hrs) + ':' + (mts)),
                     date : ((date.getMonth()+1) + '/' + (date.getDate()) + '/' +(date.getYear()))
                 };
            var order_list = [];
            var service_type = 'emergency';
            var service_id = Global.serviceSelected['id'];
            var orderObj =  {
                ts:timeStamp,
                service_id:service_id,
                service:service_type
            };
            order_list.push(orderObj);

            Commons.ajaxData('place_emergency_order', {
                         email             : email,
                         name              : name,
                         number            : phone,
                         reg_no:             car_reg_number ,
                         order_list        : JSON.stringify(order_list),
                         car_name          : car_select,
                         pick:JSON.stringify(pick),
                         loc:'mobile'
                     },"GET", _this, _this.loadPlaced);


        }
        });
        var carObj = local.load()['clgacarobj'];
        if(carObj){
            carObj = JSON.parse(carObj);
        }
        if(carObj && carObj.fullname){
            $('#menuA .cardetails').show();
            $('#menuA .cardetails .cname').html(carObj.fullname);
        }else{
            $('#menuA .cardetails').hide();
        }

//        $('#submit-button').button('disable');
    },
    initFBHandlers:function(FBApi){
        var _this = this;
        $('#login').find('#facebook').on('click', function(evt){

          FBApi.getLoginStatus(function(response) {
      console.log(response)
      if(response.status && response.status == 'connected'){
          //user present

      }
      else{
          //user present
        FBApi.login(function(response){
            console.log(response)
            if (response.authResponse) {
             console.log('Welcome!  Fetching your information.... ');
//                $('#login').find('.login-container').hide();
//                $('#login').find('.logout-container').show();
//                $('#login').find('.logout-container').find('.text-box h4').html('Welcome!  Fetching your information.... ');
                Commons.ajaxData('fetch_user_login',{'access_token':response.authResponse.accessToken,'backend':'facebook'},"get",_this,_this.userLoad);
             FBApi.api('/me', function(response) {
               console.log('Good to see you, ' + response.name + '.');
//                $('#login').find('.logout-container').find('.text-box h4').html('You are logged in as <span class="username">'+response.name+'</span>');
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
//                    $('#login').find('.login-container').hide();
//                    $('#login').find('.logout-container').show();
//                    $('#logout-btn').attr('data-state', 'facebook');
                Commons.ajaxData('fetch_user_login',{'access_token':response.authResponse.accessToken,'backend':'facebook'},"get",_this,_this.userLoad);
                 FBApi.api('/me', function(response) {
                   console.log('Good to see you, ' + response.name + '.');
//                    $('#login').find('.logout-container').find('.text-box h4').html('You are logged in as <span class="username">'+response.name+'</span>');
                 });
          }else{

          }
        });


    },
    initGoogleHandlers:function(){
        var _this = this;
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
            Commons.ajaxData('fetch_user_login',{'access_token':token,'backend':'google-oauth2'},"get",_this,_this.userLoad);
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
        $('#login').find('#google').on('click', function(evt){
            login();
        });

    },
    userLoad : function(data){
        if(data.auth){
            $('#login').find('.login-container').hide();
            $('#login').find('.logout-container').show();
            if(data.email){
                $('#login').find('.logout-container').find('.text-box h4').html('You are logged in as <span class="username">'+data.email+'</span>');
            }else{
                $('#login').find('.logout-container').find('.text-box h4').html('You are logged in as <span class="username">'+data.username+'</span>');
            }

            $('#menuA #login-page-btn a').text('Logout').addClass('logout-state');
            $('#menuA .userdetails').show();
            $('#menuA .userdetails .uname').html(data.username);
            $('#menuA .userdetails .email').html(data.email);
            Global.userDetails = {
                name:data.username,
                phonenumber:data.contact,
                email:data.email
            };

        }else{
            $('#login').find('.login-container').show();
            $('#login').find('.login-container').find('#phone').removeAttr('disabled').val('').show().parent().not('.text-box').show();
            $('#login').find('.login-container').find('#name').val('').hide().parent().not('.text-box').hide();
            $('#login').find('.login-container').find('#otp').val('').hide().parent().not('.text-box').hide();
            $('#login').find('.login-container').find('#otp-btn').show();
            $('#login').find('.login-container').find('#login-btn').hide();


            $('#login').find('.logout-container').hide();

            $('#menuA #login-page-btn a').text('Sign In / Sign Up').removeClass('logout-state');
            $('#menuA .userdetails').hide();
            Global,userDetails = null;
//            $('#menuA .uname').html('').show();
        }
        Commons.ajaxData('fetch_car_booking', {type:'all'},"get",Global, Global.loadBooking);
    },
    events:function(){
        var _this = this;
        console.log('adding hanlder')
        $('#menuA #login-page-btn').on('click', '.logout-state', function(e){
            Commons.ajaxData('logout',{},"get",_this,_this.userLoad);
            return false;
        });
        $('#login .logout-container #logout-btn').on('click', function(){
            Commons.ajaxData('logout',{},"get",_this,_this.userLoad);
        });

        $('#carselect #brand-dropdown').on('change', function(){
            var brand = $(this).val();
            var cb_flag = $('#carselect .cb-select-wrapper input:checked').val();
            Commons.ajaxData('fetch_car_list', {m_id:brand,cb_id:cb_flag},"get",_this,_this.loadCarMake);
        });
        $('#preferred-center').on('change', function(e){
            var val = $(this).prop('checked');
            console.log(val)
            if(val){
                $(this).closest('fieldset').find('.dealer-select').show();
                $('#additional').find('input[type="submit"]').button('disable');
                if(Global.dealerAddressObj && Global.dealerAddressObj.activeRegionGrouped){
                    var container = $('#additional .authorized-additional').find('#dl-city-dropdown');
                    var html = '<option value="choose-one" data-placeholder="true">Select City</option>';
//                    $.each(Global.dealerAddressObj.activeRegionGrouped, function(city, cityObj){
//
//                        html += '<option data-id="'+city+'" value="'+city+'">'+city+'</option>';
//                    });
                        html += '<option data-id="Gurgaon" value="Gurgaon">Gurgaon</option>';

                    container.html(html);
                    container.selectmenu('enable');
                    container.selectmenu('refresh');
                    $('#additional .authorized-additional').find('#dl-region-dropdown').html('<option value="choose-one" data-placeholder="true">Select Region</option>').selectmenu('disable');
                    $('#additional .authorized-additional').find('#dl-detail-dropdown').html('<option value="choose-one" data-placeholder="true">Select Dealer</option>').selectmenu('disable');
                }
            }else{
                $(this).closest('fieldset').find('.dealer-select').hide();
                $('#additional').find('input[type="submit"]').button('enable');
            }
        });
        $('#dl-city-dropdown').on('change', function(e){
            var city = $(this).val();
            if(city && Global.dealerAddressObj && Global.dealerAddressObj.activeRegionGrouped && Global.dealerAddressObj.activeRegionGrouped[city]){
                var container = $('#additional .authorized-additional').find('#dl-region-dropdown');
                var html = '<option value="choose-one" data-placeholder="true">Select Region</option>';
                $.each(Global.dealerAddressObj.activeRegionGrouped[city], function(region, regionObj){
                    console.log(region)
                    html += '<option data-id="'+city+'" value="'+region+'">'+region+'</option>';
                });
                container.html(html);
                container.selectmenu('enable');
                container.selectmenu('refresh');
                $('#additional .authorized-additional').find('#dl-detail-dropdown').html('<option value="choose-one" data-placeholder="true">Select Dealer</option>').selectmenu('disable');
            }
        });

        $('#dl-region-dropdown').on('change', function(e){
            var region = $(this).val();
            var city = $(this).find('option:selected').attr('data-id');
            console.log(city, region);
            if(region && Global.dealerAddressObj && Global.dealerAddressObj.activeRegionGrouped && Global.dealerAddressObj.activeRegionGrouped[city] && Global.dealerAddressObj.activeRegionGrouped[city][region]){
                var container = $('#additional .authorized-additional').find('#dl-detail-dropdown');
                var html = '<option value="choose-one" data-placeholder="true">Select Dealer</option>';
                $.each(Global.dealerAddressObj.activeRegionGrouped[city][region], function(idx, dealerObj){
                    html += '<option data-name="'+dealerObj['name']+'" value="'+dealerObj['address']+'">'+dealerObj['name']+' ('+dealerObj['locality']+')</option>';
                });
                container.html(html);
                container.selectmenu('enable');
                container.selectmenu('refresh');
            }
        });

        $('#dl-detail-dropdown').on('change', function(e){
            var val = $(this).val();
            if(val){
                $('#additional').find('input[type="submit"]').button('enable');
            }
        });

        $('.cb-select-wrapper input').on('change', function(e){
            console.log($(this).is(":checked"))
            if($(this).is(":checked")){
                var container = $('#brand-dropdown');
                var val = $(this).val();
                container.html('');
                    var html = '<option value="choose-one" data-placeholder="true">Select Brand</option>';
                var data = eval("_this."+val.toLowerCase()+"Brands");
                $.each(data, function(ix, val){
                    html += '<option value="'+val+'">'+val+'</option>';

                })
                container.html(html);
                container.selectmenu('enable');
                container.selectmenu('refresh');
                $('#make-dropdown').selectmenu('disable');

            }else{

            }

        });
        $('#make-dropdown').on('change', function(){
            var carmake = $(this).val();
            if(carmake){
                $('#submit-button').button('enable');
            }
        });
        
        $('#submit-button').on('click', function(){
            var car_bike = $('#carselect input[name="cb-select"]:checked').val();
            var car_model = $('#make-dropdown option:selected').text();
            var car_brand = $('#brand-dropdown option:selected').text();
            var car_fullname = [car_brand, car_model].join(' ');
            var selected_c_id = $('#make-dropdown option:selected').attr('data-id');
            Global.carSelected = {
                'car_bike':car_bike,
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
            if(car_fullname){
                $('#menuA .cardetails').show();
                $('#menuA .cardetails .cname').html(car_fullname);
            }else{
                $('#menuA .cardetails').hide();
            }

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
            }else if(['servicing','cleaning','windshield', 'carcare'].indexOf(service_type)>=0){
                var serviceObj = {'service':service_type.toLowerCase()};
                var serviceObjStr = JSON.stringify(serviceObj);
                local.clearKey('clgaserviceobj');
                local.save('clgaserviceobj', serviceObjStr);
                Global.serviceSelected = serviceObj;

                window.location.hash = '#order';
                $.mobile.changePage('#order',{'allowSamePageTransition':true});
            }else if(service_type == 'repair'){
                var serviceObj = {'service':'repair'};
                var serviceObjStr = JSON.stringify(serviceObj);
                local.clearKey('clgaserviceobj');
                local.save('clgaserviceobj', serviceObjStr);
                Global.serviceSelected = serviceObj;

                window.location.hash = '#repair';
                $.mobile.changePage('#repair',{'allowSamePageTransition':true});
            }else if(service_type == 'emergency'){
                var serviceObj = {'service':'emergency'};
                var serviceObjStr = JSON.stringify(serviceObj);
                local.clearKey('clgaserviceobj');
                local.save('clgaserviceobj', serviceObjStr);
                Global.serviceSelected = serviceObj;
                window.location.hash = '#'+service_type;

                $.mobile.changePage('#'+service_type,{'allowSamePageTransition':true});
            }
            Global.serviceCat = {
                'serviceType':service_type     
            }

        });
        
        
        $('.order-body .service-list .list-services').on('click', 'a', function(e){
//            var $target  = $(e.target);
//            var serviceName = $('#order-page-service').text();
            var serviceId = $(this).attr('data-id');

            Global.serviceSelected['id'] = serviceId;
            window.location.hash = '#vendor';
        });
        
        $('.order-body .vendor-list .vendors').on('click', 'a', function(e){
            var vendorType = $('#vendor-select').text();
            var vendorID = $(this).attr('data-id');
            var vendorName = $(this).attr('data-name');

            Global.vendorSelected = {
                'vendor':vendorName,
                'id':vendorID
            };
            if(Global.serviceSelected && (Global.serviceSelected['service'] == 'servicing') ){
                window.location.hash = '#additional';
            }else{
                window.location.hash = '#cart';
            }
        });
        $('.repair-body .list-services').on('click', 'a', function(e){
            var serviceId = $(this).attr('data-id');

            Global.serviceSelected['id'] = serviceId;

            if(serviceId == 'custom'){
                window.location.hash = '#additional';
                $.mobile.changePage('#additional',{'allowSamePageTransition':true});

            }else if(serviceId == 'dent-paint'){
                window.location.hash = '#denting';
                $.mobile.changePage('#denting',{'allowSamePageTransition':true});

            }else if(serviceId == 'diagnostics'){
                window.location.hash = '#diagnostics';
                $.mobile.changePage('#diagnostics',{'allowSamePageTransition':true});

            }
//            serviceId = serviceId.toLowerCase().split(' ').join('-');
//            Global.serviceSelected['id'] = serviceId;
//            window.location.hash = '#checkout';
        });
        $('.booking-body .bottom-pane').on('click', '.cancel-booking-btn', function(e){
            if(!$(this).hasClass('cancelled')){
                var elem = $(this);
                elem.addClass('cancelled')
                var tran_id = elem.attr('tran_id')
                var classy = 'Booking';
                Commons.ajaxData('cancel_booking', {tran_id:tran_id},"get",_this,function(data){
                    if(data['cancelled_id']){
                        $('.booking-body .bottom-pane .confirmed-wrapper').find('.cancel-booking-btn[tran_id="'+data['cancelled_id']+'"]').text('Booking Cancelled');
                    }
                })
            }

        });
        $('.emergency-body .list-services').on('click', 'a', function(e){
            var serviceId = $(this).text();
            serviceId = serviceId.toLowerCase().split(' ').join('-');
            Global.serviceSelected['id'] = serviceId;
            window.location.hash = '#em-checkout';
        });
        $('#diagnosticsCheckout').on('submit', function(e){
            var additionalInfo = {};
            var car_bike = Global.carSelected.car_bike;
            if(!car_bike)
                car_bike = 'Car';
            if($(this).find('#diagnostics-queries').val().length){
                additionalInfo['Custom Requests'] = $(this).find('#diagnostics-queries').val();
            }
            Global.serviceSelected['additional'] = additionalInfo;
            window.location.hash = '#cart';
            return false;
        });
        $('#additionalCheckout').on('submit', function(e){
            var additionalInfo = {};
            var car_bike = Global.carSelected.car_bike;
            if(!car_bike)
                car_bike = 'Car';

            var inps = $(this).find('fieldset.'+car_bike.toLowerCase()+'-adder').not('.authorized-additional').find('input:checked');
            $.each(inps, function(i,inp){
               additionalInfo[$(inp).parent().find('label').text()] = true;
            });
            if($(this).find('#add-queries').val().length){
                additionalInfo['Custom Requests'] = $(this).find('#add-queries').val();
            }
            if(Global.serviceSelected && Global.serviceSelected.service.toLowerCase() == 'servicing'){
                if(Global.vendorSelected && Global.vendorSelected.vendor.toLowerCase() == 'authorized'){
                    var name = $('#additional').find('#dl-detail-dropdown option:selected').attr('data-name');
                    var address = $('#additional').find('#dl-detail-dropdown').val();
                    additionalInfo['Selected Authorized'] = {
                        name: name,
                        address: address
                    };
                }
            }

            Global.serviceSelected['additional'] = additionalInfo;
            window.location.hash = '#cart';
            return false;
        });
        $('#dentingCheckout').on('submit', function(e){
            var additionalInfo = {};
            if($(this).find('#damagedetails').val().length){
                additionalInfo['Custom Requests'] = $(this).find('#damagedetails').val();
            }
            additionalInfo['Damage Type'] = $(this).find('input[name="radio-choice-h-2"]:checked').val();
            Global.serviceSelected['additional'] = additionalInfo;
            window.location.hash = '#cart';
            return false;
        });
        $('#cart .coupon-apply-btn').on('click', function(e){
            var coupon = $(this).closest('.coupon-wrap').find('#coupon').val();
            if(coupon.length){
                $('#cart .coupon-status').html('').hide();
                Commons.ajaxData('apply_coupon', {c_cd:coupon},"get",_this, function(data){
                    this.loadCoupon(data);
                    return;
                    if(data.status){

                        var couponData = {};
                        if (local.load() && local.load()['clgacoup']) {
                            couponData = local.load()['clgacoup'];
                            couponData = JSON.parse(couponData);
                        }
                        if (!couponData.Global) {
                            console.log('no data')
                            couponData.Global = {}
                            couponData.Global[data['coupon_code']] = data['message']
                            $('#cart .coupon-status').html('Applied -' + data['message']).show();
                        } else {
                            if (!couponData.Global[data['coupon_code']]) {
                                couponData.Global[data['coupon_code']] = data['message']
                                $('#cart .coupon-status').html('Applied -' + data['message']).show();
                            } else {
                                $('#cart .coupon-status').html(data['coupon_code'] + ' Already Applied - ' + data['message']).show();
                                //already applied
                            }
                        }
                        local.save('clgacoup', JSON.stringify(couponData));
                    }else{
                        $('#cart .coupon-status').html('Invalid Coupon').show();
                    }
                });
            }else{
                $('#cart .coupon-status').html('Invalid Coupon').show();
            }
        });
        $('#cart #cart-submit-btn').on('click', function(e){
            window.location.hash = '#checkout';
            return false;
        });
        $('#em-checkout #em-checkout-submit').on('click', function(e){
            var car_select = Global.carSelected.fullname;

            var name = $('#em-checkout #name').val();
            var email = $('#em-checkout #email').val();
            var phone = $('#em-checkout #phonenumber').val();
//            var pick_date = $('#dateinput option:selected').text();
//            var pick_time = $('#pick-up-time option:selected').text();
            var car_reg_number = $('#checkout #regn').val();
            var pick_addr = $('#checkout #pickupadd1').val();
            var pick_city = $('#city1 option:selected').text();
            var timeStamp = Math.floor(Date.now() / 1000);

            var date = new Date();
            var hrs = date.getHours();
            if(hrs<10){
                hrs = '0'+hrs
            }
            var mts = date.getMinutes();
            if(mts<10){
                mts = '0'+mts
            }

            var pick = {
                     street : pick_addr,
                     pincode : 'n/a',
                     landmark : '',
                     city : pick_city,
                     time : ((hrs) + ':' + (mts)),
                     date : ((date.getMonth()+1) + '/' + (date.getDate()) + '/' +(date.getYear()))
                 };
            var order_list = [];
            var service_type = 'emergency';
            var service_id = Global.serviceSelected['id'];
            var orderObj =  {
                ts:timeStamp,
                service_id:service_id,
                service:service_type
            };
            order_list.push(orderObj);

            Commons.ajaxData('place_emergency_order', {
                         email             : email,
                         name              : name,
                         number            : phone,
                         reg_no:             car_reg_number ,
                         order_list        : JSON.stringify(order_list),
                         car_name          : car_select,
                         pick:JSON.stringify(pick),
                         loc:'mobile'
                     },"GET", _this, _this.loadPlaced);


        });
        $('#checkout #checkout-submit-2').off().on('click', function(e){

            console.log('place order requested change detected');
//            var classy = Global.serviceCat.serviceType;
            var car_select = Global.carSelected.fullname;
//            var servicename = Global.serviceSelected.id;
            var name = $('#checkout #name').val();
            var email = $('#checkout #email').val();
            var phone = $('#checkout #phonenumber').val();
            var pick_date = $('#dateinput').val();
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
//                     pincode : pick_pin,
//                     landmark : pick_lmark,
                     city : pick_city,
                     time : pick_time,
                     date : pick_date
                 };

            var drop = {
                     street : pick_addr,
//                     pincode : pick_pin,
//                     landmark : pick_lmark,
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
                    orderObj['additional_data'] = JSON.stringify(additional);
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
                         },"GET", Global, Global.loadPlaced);

            }else if(['servicing','cleaning','windshield'].indexOf(service_type)>=0){
                service_id = Global.vendorSelected['id'];
                vendor_name = Global.vendorSelected['vendor'];
                var orderObj =  {
                    ts:timeStamp,
                    service_id:service_id,
                    service:service_type
                }
                order_list.push(orderObj);

                if(service_type == 'servicing'){
                    additional = Global.serviceSelected.additional;
                    if(additional){
                        orderObj['additional_data'] = JSON.stringify(additional);
                    }
                }
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
                         },"GET", Global, Global.loadPlaced);

            }else if(service_type == 'emergency'){


            }else if(service_type == 'repair'){
                service_id = Global.serviceSelected['id'];
                vendor_name = '--';
                additional = Global.serviceSelected.additional;
                var orderObj =  {
                    ts:timeStamp,
                    service_id:service_id,
                    service:service_type
                }
                if(additional){
                    orderObj['additional_data'] = JSON.stringify(additional);
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
                         },"GET", Global, Global.loadPlaced);

            }
            return false;


        });
        
        $('#checkout #checkbox-mini-0').on('change', function(e) {
            console.log('tick box clicked');
            $('#checkout .dropoff-toggle').toggle();            
        });    

        /*
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
        */

        //
    $("#otp-btn").click(function(){
        var numb = $(this).closest('.login-container').find('input#phone').val();
        var checkThis = false;
        if(numb && numb.length == 10){
            var intNum = parseInt(numb);
            if(!isNaN(intNum)){
                checkThis = true;
            }
        }
        if(checkThis){
            $(this).closest('.login-container').find('.error-msg').hide().text('');
            $(this).closest('.login-container').find('input#phone').attr('disabled',true);
            Commons.ajaxData('send_otp', {phone:numb},"get",Global,function(data){
                $('#login .login-container').find('#login-btn').show();
                $('#login .login-container').find('#otp-btn').hide();
                $('#login .login-container').find('#otp').show().parent().not('.text-box').show();
                if(data.new_user){
                    $('#login .login-container').find('#name').attr("placeholder","Name").val('').show().parent().not('.text-box').show();
                }else if(data.username){
                    $('#login .login-container').find('#name').attr("placeholder",data.username).val(data.username).show().parent().not('.text-box').show();
                }else{
                    $('#login .login-container').find('#name').attr("placeholder","Name").val('').show().parent().not('.text-box').show();
                }
            })
        }else{
            $(this).closest('.login-container').find('.error-msg').show().text('Invalid Number');
        }
    });
    $("#login-btn").click(function(){
        var numb = $(this).closest('.login-container').find('input#phone').val();
        var name = $(this).closest('.login-container').find('input#name').val();
        var otp = $(this).closest('.login-container').find('input#otp').val();
        if(otp && String(otp).length == 6){
             $(this).closest('.login-container').find('.error-msg').hide().text('');
            Commons.ajaxData('create_otp_user', {phone:numb,otp:otp,name:name},"get",Global,Global.userLoad);
        }else{
            $(this).closest('.login-container').find('.error-msg').show().text('Invalid OTP');
        }
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
//          console.log( data.state.info )
//          console.log( data.state.direction )
//          console.log( data.state.url )
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
                case "#cart":
                    console.log('navigate cart')
                    Global.cartPageInit();
                    break;
                case "#checkout":
                    Global.checkoutPageInit();
                    break;
                case "#booking":
                    console.log('booking page navifagte')
                    Global.bookingPageInit();
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
    Global.checkoutPageInit();
});
$( document ).delegate("#booking", "pageinit", function() {
    Global.bookingPageInit();
});
$( document ).delegate("#cart", "pageinit", function() {
//    console.log('delegate cart')
//    Global.cartPageInit();
});
$( document ).delegate("#additional", "pageinit", function() {
    Global.additionalPageInit();
});
$( document ).delegate("#emergency", "pageinit", function() {
    Global.emergencyPageInit();
});

$( document ).delegate("#order", "pagebeforeload", function() {
    if(!(Global.carSelected && Global.carSelected.id)){
//        console.log('pagebeforeload')
        window.location.hash = '#index';
    }
});

    },
    expandCollapse:function(divvy){
        $(divvy).removeClass('minimized');
        if($(divvy).height() > 150){
            $(divvy).addClass('minimized min-max-toggle');
        }
        if($(divvy).is(':hidden') && ($(divvy).find('.token-class').length>5) ){
            $(divvy).addClass('minimized min-max-toggle');
        }
        $(divvy).off().on('click', '.show-hide', function(e){
            e.stopPropagation();
            e.stopImmediatePropagation();
            if($(this).closest('.minimized').length){
                $(this).closest('.minimized').removeClass('minimized').addClass('maximized');
            }else if($(this).closest('.maximized').length){
                $(this).closest('.maximized').addClass('minimized').removeClass('maximized');
            }
            return false;
        });
    },
    logout:function(btn){
        if(FB){
            eval("FB.logout()");
        }else{

        }
    },
    loadCoupon : function(data){
        if (data.status) {
            var c_key = data.price_key;
            var c_cap = data.cap;
            c_cap = parseFloat(c_cap)
            var c_type = data.type;
            var c_vendor = data.vendor;
            var c_service = data.category;
            var c_value = data.value;
            var c_cb = data.car_bike;
            if(! (c_cb && c_cb.length) ){
                c_cb = 'Car'
            }

//        var container = $('.coupon-holder .coupon-message');
//        container.html('');
//        var html = '<span class="message-test">'+data.message+'</span>';
            var counter = {'items':0, 'valid':0};
        $('.cart-entries').find('.t-price').each(function(){
            counter['items'] += 1;
            var p_vendor = $(this).attr('data-vendor');
            var p_service = $(this).attr('data-service');
            var car_bike = $(this).attr('data-type');
            if(p_vendor && p_vendor != 'Authorized' && (p_service.toLowerCase() == c_service.toLowerCase()) ){
                if( (car_bike.toLowerCase() == c_cb.toLowerCase()) &&
                    ( (p_vendor.toLowerCase() == c_vendor.toLowerCase()) ||
                        (c_vendor.toLowerCase() == 'all') ) ){
                    var p_labour = $(this).attr('data-labour');
                    var p_parts = $(this).attr('data-parts');
                    var p_total = $(this).attr('data-total');
                    var new_price = 0;
                    p_labour = parseFloat(p_labour);
                    p_parts = parseFloat(p_parts);
                    p_total = parseFloat(p_total);
                    var discount = 0;
                    var target = 0;

                    counter['valid'] += 1;
                    if(c_key && c_key.length){
                        if(c_key == 'labour')
                            target = p_labour;
                        else if(c_key == 'parts')
                            target = p_parts;
                        else
                            target = p_total

                        if(c_type == 'flat')
                            discount = target - c_value
                        else if(c_type == 'percent')
                            discount = (c_value)*(target)/100;
                        else
                            discount = c_value

                        if(c_cap && !isNaN(c_cap) && discount > c_cap)
                            discount = c_cap

                        if(c_key == 'labour')
                            new_price = (Math.ceil((p_labour - discount)*(114.5))/100) + (p_parts);
                        else if(c_key == 'parts')
                            new_price = (Math.ceil((p_labour)*(114.5))/100) + (p_parts - discount);
                        else
                            new_price = (Math.ceil((p_labour)*(114.5))/100) + (p_parts) - discount;
                    }
                    $(this).closest('li').find('.discounted').html(' &#8377; '+Math.ceil(new_price)).show();
                    $(this).css({
                        'text-decoration':'line-through'
                    });
                }
            }
        });

            if(counter.valid){
                if(counter.valid == counter.items)
                    $('#cart .coupon-status').html('Applied - [' + data['message']+'] - Coupon' ).show();
                else
                    $('#cart .coupon-status').html('Applied - [' + data['message']+'] - on '+counter.valid+' out of '+counter.items+' orders.' ).show();

            var couponData = {};
            if (local.load() && local.load()['clgacoup']) {
                couponData = local.load()['clgacoup'];
                couponData = JSON.parse(decodeURIComponent(couponData));
            }
            couponData['Singleton'] = {};
            couponData.Singleton[data['coupon_code']] = data['message'];
            local.save('clgacoup', encodeURIComponent(JSON.stringify(couponData)));
            Global.couponData = data;
            }else{
               $('#cart .coupon-status').html('Coupon not applicable on current order').show();
            }
        }else{
        $('#cart .coupon-status').html('Invalid Coupon').show();
        }

    },
    loadServicing : function(data){
        var container = $('.order-body .service-list .list-services');
        container.html('');
        var html = '';
        $.each(data, function(idx, val){
            html += '<li data-icon="false"><a data-id=' + val.id + ' href="#"><div class="header-div">';
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
            html += '<div class="checks-div">Exterior Washing</div>';
            html += '<div class="checks-div">Parts Check & Replacement</div>';
            if(val.car_bike == 'Car'){
                html += '<div class="checks-div">Interior Vacuuming</div>';
                html += '<div class="checks-div">Dashboard Polish</div>';
            }

            html += '<div class="parts-div">';
            // push the list

//            if(val.car_bike=="Bike")
//                html += '<span class="part">Engine Oil</span>'+'<span class="part">Oil Filter</span>'+'<span class="part">Other Parts As Required</span>';
//            else{
                html +='<span class="desc"><u>Description</u></span>';
                    var properObj = {
                        'Parts/ Fluids Replaced':[],
                        'Fluids Top-up':[],
                        'Filters Cleaned':[],
                        'Checks Done':[]
                    };
                    if(val['part_dic'] && val['part_dic'].length){
                        $.each(val.part_dic, function(i,part){
                            if(!properObj[part.part_action]){
                                properObj[part.part_action]=[];
                            }
                            properObj[part.part_action].push(part.part_name);
                        });
                    }
                    $.each(properObj, function(action,list){
                        if(list.length) {
                            html += '<div class="action-wrapper"><span class="action-name">' + action + '</span><div class="action-list">';
                            html += '<span class="token-class">'+list.join('</span><span class="token-class">')+'</span>';
                            html += '</div></div>';
                        }
                    });
                    html += "<span>Parts in healthy condition won't be replaced.</span>"

//            }
//                $.each(val.parts_replaced, function(i, part){
//                   html += '<span class="part">' + part + '</span>';
//                });

            html += '<div class="show-hide"></div></div></a></li>';

        });
        container.html(html);
        container.listview().listview("refresh")
        $.each(container.find('.parts-div'), function(i,val){
            Global.expandCollapse($(val));
        });
         var container2 = $('.order-body .service-img-holder');
        container2.html('');
        var html = '';
        html +=  "<img src='img/servicing_hz.jpg'>"
        container2.html(html);
    },
    
    loadCleaning : function(data){
        console.log(data)
        var container = $('.order-body .service-list .list-services');
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
         var container2 = $('.order-body .service-img-holder');
        container2.html('');
        var html = '';
        html +=  "<img src='img/cleaning_hz.jpg'>"
        container2.html(html);
    },

    loadWindshield : function(data){
        var container = $('.order-body .service-list .list-services');
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
         var container2 = $('.order-body .service-img-holder');
        container2.html('');
        var html = '';
        html +=  "<img src='img/windshield_hz.jpg'>"
        container2.html(html);
    },
    loadCarcare : function(data){
        var container = $('.order-body .service-list .list-services');
        container.html('');
        var html = '';
        $.each(data, function(idx, val){
            //console.log('alfa')
            html += '<li><a data-id=' + val.id + '  href="#"><div class="header-div">';
            html += val.category;
            html += '</div></a></li>';
        });
        container.html(html);
        container.listview().listview("refresh")
         var container2 = $('.order-body .service-img-holder');
        container2.html('');
        var html = '';
        html +=  "<img src='img/carcare_hz.jpg'>"
        container2.html(html);
    },

    loadServicingDetails : function(data){
        var container = $('#vendor .service-selection .selected-category');
        container.html('');
        var html = '';
        var val = data[0]
            html += ' <div class="header">';
            //html += '<span class = "odo-read">' + String(val.odometer).replace(/(.)(?=(\d{3})+$)/g,'$1,')+'km </span><span class = "sub-cat">(Regular Servicing)</span></div>';
            html += '<span class = "odo-read">' + String(val.type_service) +'</span></div>';

            html += '</div>';
            html += '<div class="checks-div">Exterior Washing</div>';
            html += '<div class="checks-div">Parts Check & Replacement</div>';
            if(val.car_bike == 'Car'){
                html += '<div class="checks-div">Interior Vacuuming</div>';
                html += '<div class="checks-div">Dashboard Polish</div>';
            }
            html += '<div class="parts-div">';
//        if(val.car_bike=="Bike"){
//            html += '<span class="part">Engine Oil</span>'+'<span class="part">Oil Filter</span>'+'<span class="part">Other Parts As Required</span>';
//        }
//        else{
//            $.each(val.parts_list, function(i, part){
//               html += '<span class="part">' + part + '</span>';
//            });
            html +='<span class="desc"><u>Description</u></span>';
                var properObj = {
                    'Parts/ Fluids Replaced':[],
                    'Fluids Top-up':[],
                    'Filters Cleaned':[],
                    'Checks Done':[]
                };
                if(val['part_dic'] && val['part_dic'].length){
                    $.each(val.part_dic, function(i,part){
                        if(!properObj[part.part_action]){
                            properObj[part.part_action]=[];
                        }
                        properObj[part.part_action].push(part.part_name);
                    });
                }
                $.each(properObj, function(action,list){
                    if(list.length) {
                        html += '<div class="action-wrapper"><span class="action-name">' + action + '</span><div class="action-list">';
                        html += '<span class="token-class">'+list.join('</span><span class="token-class">')+'</span>';
                        html += '</div></div>';
                    }
                });
                html += '<div class="show-hide"></div></div><span class="parts-notif">Parts in healthy condition won\'t be replaced.</span></div>'

//        }
        container.html(html);
        Global.expandCollapse(container.find('.parts-div').eq(0));
        //container.listview("refresh")
        var container2 = $('.vendor-list .vendors');
        container2.html('');
        var html = '';
        Global.dealerAddressObj = {};
        $.each(data, function(idx, val){
            if(val.vendor == 'Authorized'){
                Global.dealerAddressObj['raw'] = val.dealer_details
            }

            html += '<li><a data-id="'+val.id+'" data-name="'+val.vendor+'" class="servicing-item-detail"><img src="';
                if(val.vendor=="Authorized")
                    if(val.car_bike=="Bike")
                        html+= logoMap['Authorized Bike'] + val.brand + '.jpg" >';
                    else
                        html+= logoMap['Authorized Car'] + val.brand + '.jpg" >';
                else
                    html+= logoMap[val.vendor] + '">';

            if(val.vendor=="Authorized")
                html+= '<div class="vendor-name">' + val.brand + ' Authorized ';
            else
                html+= '<div class="vendor-name">' + val.vendor;

            html += '</div><div class=prices>'

            //html += "<table> <tr><td>Parts</td><td>:&nbsp;&nbsp;&#8377;"+parseInt(val.parts_price)+"</td></tr><tr><td>Labour</td><td>:&nbsp;&nbsp;&#8377;"+Math.ceil(val.labour_price)+"</td></tr> <tr><td>Service Tax</td><td>:&nbsp;&nbsp;&#8377;"+Math.ceil((val.labour_price*0.145))+"</td></tr><tr><td>Pick-Up Fee</td><td>:&nbsp;&nbsp;<strike>&#8377;200</strike>&nbsp;&nbsp;&#8377;"+ (val.car_bike == 'Car' ? '0': '0')+"</td></tr><tr class='total-row'><td>Total</td><td>:&nbsp;&nbsp;&#8377;"+(parseInt(val.parts_price)+parseInt(Math.ceil((val.labour_price)))+parseInt(Math.ceil((val.labour_price*0.145)))+parseInt((val.car_bike == 'Car' ? '0': '0')))+"</td></tr></table>";

            if (val.car_bike=="Car") {
                //if(val.vendor=="Authorized")
                //    html +="<table><tr>Service Centre Bill Amount</tr><tr><td>Pick-Up Fee</td><td>:&nbsp;&nbsp;<strike>&#8377;200</strike>&nbsp;&nbsp;&#8377;"+ (val.car_bike == 'Car' ? '0': '0')+"</td></tr></table>"
                //else
                html += "<table><tr><td>Parts</td><td>:&nbsp;&nbsp;&#8377;" + parseInt(val.parts_price) + "</td></tr><tr><td>Labour</td><td>:&nbsp;&nbsp;&#8377;" + Math.ceil(val.labour_price) + "</td></tr> <tr><td>Service Tax</td><td>:&nbsp;&nbsp;&#8377;" + Math.ceil((val.labour_price * 0.145)) + "</td></tr><tr><td>Pick-Up Fee</td><td>:&nbsp;&nbsp;<strike>&#8377;200</strike>&nbsp;&nbsp;&#8377;" + (val.car_bike == 'Car' ? '0' : '0') + "</td></tr><tr class='total-row'><td>Total</td><td>:&nbsp;&nbsp;&#8377;" + (parseInt(val.parts_price) + parseInt(Math.ceil((val.labour_price))) + parseInt(Math.ceil((val.labour_price * 0.145))) + parseInt((val.car_bike == 'Car' ? '0' : '0'))) + "</td></tr></table>";
            } else {
                html += "<table> <tr><td>Parts</td><td>:&nbsp;&nbsp;&#8377;" + parseInt(val.parts_price) + "</td></tr>" +
                    "<tr><td>Labour</td><td>:&nbsp;&nbsp;&#8377;" + Math.ceil(val.labour_price) + "</td></tr> " +
                    "<tr><td>Service Tax</td><td>:&nbsp;&nbsp;&#8377;" + Math.ceil((val.labour_price * 0.145)) + "</td></tr>";
                if(val.vendor == 'ClickGarage Doorstep'){
                    html += "<tr class='total-row'><td>Total</td><td>:&nbsp;&nbsp;&#8377;" + (parseInt(val.parts_price) + parseInt(Math.ceil((val.labour_price))) + parseInt(Math.ceil((val.labour_price * 0.145)))) + "</td></tr>";
                }else{
                    html += "<tr><td>Pick-Up Fee</td><td>:&nbsp;&nbsp;&#8377;150&nbsp;&nbsp; </td></tr>" +
                        "<tr class='total-row'><td>Total</td><td>:&nbsp;&nbsp;&#8377;" + (parseInt(val.parts_price) + parseInt(Math.ceil((val.labour_price))) + parseInt(Math.ceil((val.labour_price * 0.145))) + 150) + "</td></tr>";
                }
                    html += "</table>";
            }
            html += '</div></div>';

        });
        if(Global.dealerAddressObj['raw']){
            Global.dealerAddressObj['activeRegionGrouped'] = {};
            $.each(Global.dealerAddressObj['raw'], function(i,v){
                var city = v['city'];
                var name = v['name'];
                var region = v['region'];
                if(city){
                    if(!Global.dealerAddressObj['activeRegionGrouped'][city]){
                        Global.dealerAddressObj['activeRegionGrouped'][city] = {};
                    }
                    if(region){
                        if(!Global.dealerAddressObj['activeRegionGrouped'][city][region]){
                            Global.dealerAddressObj['activeRegionGrouped'][city][region] = [];
                        }
                        Global.dealerAddressObj['activeRegionGrouped'][city][region].push({'address':v['address'],'name':v['name'],'locality':v['locality']});
                    }
                }
            });
        }
        container2.html(html);
        container2.listview().listview("refresh")
    },
    
    loadCleaningDetails : function(data){
        console.log(data)
        var container = $('#vendor .service-selection .selected-category');
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
        var container = $('#vendor .service-selection .selected-category');
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
    loadCarcareDetails : function(data){
        console.log(data)
        var container = $('#vendor .service-selection .selected-category');
        container.html('');
        var html = '';
        var val = data[0]
            html += ' <div class="header">';
            html += '<span class = "Category odo-read">' + (val.category) + '</span></div>';
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

            html += "</div><div class='service-name'>" + val.service;
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
        var container = $('#carselect #make-dropdown');
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
        }else{
            if(Global.carSelected.car_bike == 'Bike')
                $('#services[data-role="page"]').find('.ui-block-solo').not('.bike_flag').hide();
            else
                $('#services[data-role="page"]').find('.ui-block-solo').show();

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
           var service = Global.serviceSelected.service.toLowerCase();
            if(["servicing","cleaning","carcare","windshield"].indexOf(service)>=0){
                Commons.ajaxData('fetch_car_'+Global.serviceSelected.service.toLowerCase(), {c_id:Global.carSelected.id},"get",Global,eval("Global.load"+Global.serviceSelected.service.toTitleCase()))
            }
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
            if(Global.serviceSelected.service == 'servicing' || Global.serviceSelected.service == 'cleaning' || Global.serviceSelected.service == 'windshield' || Global.serviceSelected.service == 'carcare'){
                Commons.ajaxData('fetch_'+Global.serviceSelected.service+'_details', {service_id:Global.serviceSelected.id, c_id:Global.carSelected.id, city_id:'Delhi'},"get",Global, eval("Global.load"+Global.serviceSelected.service.toTitleCase()+"Details"))
    //            Commons.ajaxData('fetch_car_'+Global.serviceSelected.service.toLowerCase(), {c_id:Global.carSelected.id},"get",Global,eval("Global.load"+Global.serviceSelected.service))
            }
        }
    },
    dentingPageInit : function(){

    },
    checkoutPageInit : function(){
        if(Global.userDetails){
            $('#checkout #checkoutForm').find('#email').val(Global.userDetails.email)
            $('#checkout #checkoutForm').find('#name').val(Global.userDetails.name)
            $('#checkout #checkoutForm').find('#phonenumber').val(Global.userDetails.phonenumber);
        }else{
            $('#checkout #checkoutForm').find('#email,#name,#phonenumber').val('');
        }
        if(Global.carSelected && Global.carSelected.car_bike == "Bike"){
            $('#pick-up-time').html('<option value="">Select One</option><option value="time1">9:00AM - 10:30AM</option><option value="time2">10:30AM - 12:00PM</option><option value="time3">12:00PM - 1:30PM</option><option value="time4">1:30PM - 3:00PM</option><option value="time5">3:00PM - 4:30PM</option><option value="time6">4:30PM - 6:00PM</option><option value="time7">6:00PM - 7:30PM</option>')
        }else{
            $('#pick-up-time').html('<option value="">Select One</option><option value="time2">9:00AM - 10:00AM</option><option value="time3">10:00AM - 11:00AM</option><option value="time4">11:00AM - 12:00PM</option><option value="time5">12:00PM - 1:00PM</option><option value="time6">1:00PM - 2:00PM</option><option value="time6">2:00PM - 3:00PM</option><option value="time7">3:00PM - 4:00PM</option>')
        }
    },
    bookingPageInit : function(){
        Commons.ajaxData('fetch_car_booking', {type:'all'},"get",Global, Global.loadBooking);
    },
    loadBooking : function(data){
        $.each(["completed","confirmed","cancelled"],function(idx,cat){
            $('#booking').find('.'+cat+'-wrapper ul').html('');
            var htmlEach = '';
            var arry = data[cat];
            $.each(arry,function(ix,booking){
                htmlEach += '<li class="top-row">';

            htmlEach += '<div class="wrapper header-wrapper">' +
                            '<div class="booking id booking_id">#'+booking['booking_id']+'</div>' +
                            '<div class="booking car booking_car">'+booking['cust_carname']+'</div>' +
                            '<div class="booking date booking_date">'+booking['date_booking']+'('+booking['time_booking']+')'+'</div>' +
                            '<div class="booking list booking_list">' +
                            '<ul class="service-components">';
                    $.each(booking.service_items,function(i,elem){
                        if(elem.service == 'servicing'){
                            if(elem.served_data){
                            htmlEach += '<li class="indiv_booking">'+elem.served_data.dealer_cat+'  <i class="fa fa-caret-right"></i>  '
                                if(elem.served_data.type_service && elem.served_data.type_service=="Not Defined"){
                                    htmlEach+="Minor Servicing </li>"
                                }else if(elem.served_data.type_service){
                                    htmlEach+= elem.served_data.type_service + '</li>'
                                }else{
                                    htmlEach += elem.served_data.odometer+'km / '+elem.served_data.year
                                }
                            }
                          } else if (elem.service == 'emergency' || elem.service == 'repair') {
                            htmlEach += '<li class="indiv_booking">' + elem.service.toTitleCase() + '</li>'
                        }else{
                        htmlEach += '<li class="indiv_booking">'+ elem.served_data.vendor +'  <i class="fa fa-caret-right"></i>  '+ elem.served_data.service +' ( '+elem.served_data.category+' ) </li>'
                        }
                    });
//                                '<li class="indiv_booking">Authorized  <i class="fa fa-caret-right"></i>  Minor Servicing</li>' +
            htmlEach += '</ul>' +
                            '</div>' +
                        '</div>';
                if(cat == 'confirmed'){
             htmlEach += '<div class="wrapper detail-wrapper">' +
                            '<div id="cancel-booking" tran_id="'+booking['tran_id']+'" class="cancel-booking-btn">' +
                                'Cancel Booking' +
                            '</div>' +
                        '</div>';
                }
                htmlEach +=   '</li>';
            });
            $('#booking').find('.'+cat+'-wrapper ul').html(htmlEach);
        });
    },
    cartPageInit : function(){
        if(Global.serviceSelected && Global.serviceSelected.service){
            var service = Global.serviceSelected.service;
            if(['servicing','cleaning','windshield','carcare','vas'].indexOf(service)>=0){
                if(Global.vendorSelected && Global.vendorSelected.id){
                var id = Global.vendorSelected.id;
                    if(service == 'carcare')
                        service = 'vas'

                    Commons.ajaxData('service_selected', {service:service,id:id},"get",Global,Global.cartItemLoad);
                }

            }else if(service == 'repair'){
                var service_id = Global.serviceSelected.id;
                Global.cartItemLoad([{
                    'vendor':'ClickGarage Workshop',
                    'type_service': (service_id+' '+service)
                }])
            }
        }
    },
    cartItemLoad : function(data){
        console.log(data);
        if(data && data.length){
            var res = data[0];
            var vendor = res.vendor;
            var src = '';
            var price = null;
            var parts_p, labour_p;
            var carFlag = 'car';
            if(Global.carSelected.car_bike=="Bike"){
                carFlag = 'bike';
            }
            if(vendor=="Authorized"){
                if(Global.carSelected.car_bike=="Bike"){
                    src+= logoMap['Authorized Bike'] + Global.carSelected.brand + '.jpg';
                }
                else{
                    carFlag = 'car';
                    src+= logoMap['Authorized Car'] + Global.carSelected.brand + '.jpg';
                }
            }
            else{
                src += logoMap[vendor] + '';
            }
            if(Global.serviceSelected && Global.serviceSelected.service == 'servicing'){
                if(carFlag == 'car'){
                    try{
                        price = Math.ceil(parseInt(res['parts_price'])) + Math.ceil(parseInt(res['labour_price'])*1.145);
                        parts_p = parseInt(res['parts_price']);
                        labour_p = parseInt(res['labour_price']);
                    }catch(e){
                        price = null;
                    }
                }else{
                    try{
                        price = Math.ceil(parseInt(res['parts_price'])) + Math.ceil(parseInt(res['labour_price'])) + Math.ceil(parseInt(res['labour_price'])*0.145);
                        parts_p = parseInt(res['parts_price']);
                        labour_p = parseInt(res['labour_price']);
                        if(vendor != 'ClickGarage Doorstep'){
                            price += 150
                        }
                    }catch(e){
                        price = null;
                    }
                }
            }else{
                if(res['total_price']){
                    price = res['total_price'];
                    labour_p = price;
                    parts_p = 0;
                }else{
                    price = null;
                }
            }

            var html = '<li><img src="'+src+'" />' +
                '<h2>'+res['type_service']+'</h2>' +
                '<p >'+res['vendor']+'</p>';
            if(price){
                html += '<p class="t-price" ' +
                    'data-service="'+Global.serviceSelected.service+'" ' +
                    'data-vendor="'+vendor+'" ' +
                    'data-type="'+carFlag+'"' +
                    'data-labour="'+labour_p+'"' +
                    'data-parts="'+parts_p+'"' +
                    'data-total+"'+price+'"' +
                    '> &#8377; '+price+'</p><span class="discounted" style="font-size: 12px;"></span>';
            }else{
                html += '<p data-value=""> N/A </p>';
            }

            if(Global.serviceSelected && Global.serviceSelected.additional){
                var addObj = Global.serviceSelected.additional;
                var exhtml = '';
                var fthtml = [];
                $.each(addObj, function(key, val){
                    if(Global.additionalFeatures[carFlag].indexOf(key)>=0){
                        if(val)
                            fthtml.push(key);
                    }else{
                        if(key == 'Selected Authorized'){
                            exhtml += '<span> Dealer Name : '+val['name']+' </span><br/>';
                            exhtml += '<span> Dealer Address : '+val['address']+' </span><br/>';
                        }else if(key == 'Custom Requests'){
                            exhtml += '<span> Custom Requests : '+val+' </span><br/>';
                        }else if(key == 'Damage Type'){
                            exhtml += '<span> Damage Type : '+val+' </span><br/>';
                        }
                    }
                });
                if(fthtml.length){
                    html += '<p style="white-space: normal;"> Additional Queries : '+fthtml.join(', ')+'</p>';
                }
                if(exhtml.length){
                    html += '<p style="white-space: normal;">'+exhtml+'</p>';
                }
            }

            html += '</li>';
            var couponData = {};
            if (local.load() && local.load()['clgacoup']) {
                couponData = local.load()['clgacoup'];
                couponData = JSON.parse(decodeURIComponent(couponData));
            }
            couponData['Singleton'] = {};
            local.save('clgacoup', encodeURIComponent(JSON.stringify(couponData)));

            $('#cart').find('.cart-entries').find('ul').html(html);
            $('#cart').find('.cart-entries').find('ul').listview().listview("refresh");
            $('#cart .coupon-status').html('');
            var header = 'Car selected : <span>'+Global.carSelected.fullname+'</span>';
            $('#cart').find('.service-selection').find('.desc').html(header);

        }
    },
    additionalPageInit : function(){
        $('#additional').find('input[type="submit"]').button();
        $('#additional').find('input[type="submit"]').button('enable');
        if(Global.carSelected && Global.carSelected.car_bike){
            $('#additional').find('fieldset.adder-group').hide();
            $('#additional').find('fieldset.'+Global.carSelected.car_bike.toLowerCase()+'-adder').show();
            if(Global.serviceSelected && Global.serviceSelected.service.toLowerCase() == 'servicing'){
                if(Global.vendorSelected && Global.vendorSelected.vendor.toLowerCase() == 'authorized'){
                    $('#additional').find('.authorized-additional').show();

    //                $('#additional').find('.dealer-select').show();
                    return;
                }
            }
            $('#additional').find('.authorized-additional').hide();
        }else{
            window.location.href = '#index'
        }


    },
    emergencyPageInit : function(){

    },
    loadPlaced : function(data){
//      console.log("order_placed") ;
      //window.alert("Guest Order Placed")
      window.location.href = "#order-placed"
    },
    carBrands : ['Chevrolet','Fiat','Ford','Honda','Hyundai','Mahindra','Maruti Suzuki','Nissan','Renault','Skoda','Tata','Toyota','Volkswagen'],//['Audi','Bentley','BMW','Bugatti','Chevrolet','Ferrari','Fiat','Ford','Honda','Hyundai','Isuzu','Jaguar','Lamborghini','Land Rover','Mahindra','Maruti Suzuki','Mercedes-Benz','Mini','Nissan','Porsche','Renault','Rolls-Royce','Skoda','Ssangyong','Tata','Toyota','Volkswagen','Volvo'],
    bikeBrands : ['Bajaj','Hero','Honda','KTM','Mahindra','Royal Enfield','Suzuki','TVS','Yamaha'],//['Bajaj','Hero','Honda','KTM','Mahindra','Royal Enfield','Suzuki','TVS','Yamaha'],
    additionalFeatures : {
        car : ['Clutch Overhaul', 'Interior Dry-cleaning', 'Brake Repair', 'Wheel Balancing', 'Wheel Alignment', 'AC Servicing', 'Injector Cleaning'],
        bike : ['Front Brake Repair',  'Rear Brake repair', 'Wheel Balancing', 'Wheel Alignment']
    },
    additionalRepairs : {
        car : ['Clutch Overhaul', 'Interior Dry-cleaning', 'Brake Repair', 'Wheel Balancing', 'Wheel Alignment', 'AC Servicing', 'Injector Cleaning'],
        bike : ['Front Brake Repair',  'Rear Brake repair', 'Wheel Balancing', 'Wheel Alignment']
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
      Global.init();
}
document.onload = function(){
     if(FB){
        FB.getLoginStatus(function(response) {console.log(response);});
    }
}


