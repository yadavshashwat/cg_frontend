
var Global = {
    init:function(){
        var _this = this;
//    $("[data-role=panel]").panel().enhanceWithin();  
        _this.events();
        Commons.eventHandlers();
        //$('#submit-button').button('disable');
    $('.coupon-form-holder').find('#expiry-date,#issue-date').datepicker({
        'format': 'yyyy/mm/dd',
        'minDate': new Date(),
        'autoclose':true
    });
    var timeWrapSettings = {
        timeFormat: 'h:30 A - j:30 B',
        minTime: new Date(0, 0, 0, 9, 0, 0),
        maxTime: new Date(0, 0, 0, 17, 0, 0),
        step: 120

    };
    //if(this.carData && this.carData['car_bike'] == 'Bike'){
    // timeWrapSettings = {
    //        timeFormat: 'h:i A - J:I B',
    //        minTime: new Date(0, 0, 0, 9, 0, 0),
    //        maxTime: new Date(0, 0, 0, 18, 0, 0),
    //        step: 90
    //    }
    //}
    $('#time-wrap .pick-up-time').timepicker(timeWrapSettings);


    $('#date-wrap .pick-up-date').datepicker({
        'format': 'd/m/yyyy',
//        'autoclose': true,
        'minDate': new Date(),
        'autoclose':true
    });


    },
    events:function(){
        var _this = this;
        if(_this.eventsAdded)
            return false;
        _this.eventsAdded = true;
        console.log('adding hanlder')   

    $('.booking-search').on("click", function(event, data) {
//          console.log( data.state.info );
//          console.log( data.state.direction )
//          console.log( data.state.url )
//          console.log( data.state.hash )
//          $("#test").text("new text");
          Commons.ajaxData('fetch_all_booking', {},"get",_this, _this.loadBookings)
//          Commons.ajaxData('fetch_all_cars', {},"get",_this, _this.loadBookings)
            }
        );

        $('#send-button-custom').on('click', function(e){
             var number_cust = document.getElementById('number_cust');
             number_cust_content =  number_cust.textContent;

             //var src = document.getElementById("service_centre").value;
             //$('.sms-popup .vendor-details').text(src);

             var number_driver = document.getElementById('driver_details');
             number_driver_content =  String(number_driver.textContent);
             var n = parseInt(number_driver_content.search("Mob")) + 5;
             var driver_number = number_driver_content.substring(n ,n+10);

             //var number_advisor = document.getElementById('advisor_details');
             //number_advisor_content =  String(number_advisor.textContent);
             //var k = parseInt(number_advisor_content.search("Mob")) + 5;
             //var advisor_number = number_advisor_content.substring(k ,k+10);

            var smstext = document.getElementById("custom-sms").value;
             //$('.sms-popup .vendor-details').text(src);
             //var smstext = document.getElementById('custom-sms');
            //window.alert(smstext);
                //window.alert(String(smstext.textContent));
             smstext_content = smstext;

             var url = "http://sms.hspsms.com:8090/sendSMS?username=clickgarage&message="+ smstext_content + "&sendername=CLKGRG&smstype=TRANS&numbers=" + number_cust_content + "&apikey=ab33f626-fba5-4bff-9a2b-68a7e9eed43c"
             //window.location(url);
             var xhr = new XMLHttpRequest();
             xhr.open("GET", url, false);
             xhr.send();
            }
        );

        $('#send-button-clean').on('click', function(e){
             //var number_cust = document.getElementById('number_cust');
             //number_cust_content =  number_cust.textContent.trim();

             var number_driver = document.getElementById('driver_details');
             number_driver_content =  String(number_driver.textContent);
             var n = parseInt(number_driver_content.search("Mob")) + 5;
             var driver_number = number_driver_content.substring(n ,n+10);

             //var number_advisor = document.getElementById('advisor_details');
             //number_advisor_content =  String(number_advisor.textContent);
             //var k = parseInt(number_advisor_content.search("Mob")) + 5;
             //var advisor_number = number_advisor_content.substring(k ,k+10);

             var amount = document.getElementById("due_amount").value;
             $('.sms-popup .due-amount').text(amount);

             var smstext = document.getElementById('sms-content-clean');
             smstext_content = smstext.textContent.trim();

             var url = "http://sms.hspsms.com/sendSMS?username=clickgarage&message="+ smstext_content + "&sendername=CLKGRG&smstype=TRANS&numbers=" + driver_number + "&apikey=ab33f626-fba5-4bff-9a2b-68a7e9eed43c"
             var xhr = new XMLHttpRequest();
             xhr.open("GET", url, false);
             xhr.send();
             //   alert(amount);
            }
        );



        $('#send-button1').on('click', function(e){
             var number_cust = document.getElementById('number_cust');
             number_cust_content =  number_cust.textContent;

             var src = document.getElementById("service_centre").value;
             $('.sms-popup .vendor-details').text(src);

             var number_driver = document.getElementById('driver_details');
             number_driver_content =  String(number_driver.textContent);
             var n = parseInt(number_driver_content.search("Mob")) + 5;
             var driver_number = number_driver_content.substring(n ,n+10);

             //var number_advisor = document.getElementById('advisor_details');
             //number_advisor_content =  String(number_advisor.textContent);
             //var k = parseInt(number_advisor_content.search("Mob")) + 5;
             //var advisor_number = number_advisor_content.substring(k ,k+10);

             var smstext = document.getElementById('sms-content0');
             smstext_content = smstext.textContent.trim();

             var url = "http://sms.hspsms.com/sendSMS?username=clickgarage&message="+ smstext_content + "&sendername=CLKGRG&smstype=TRANS&numbers=" + driver_number + "&apikey=ab33f626-fba5-4bff-9a2b-68a7e9eed43c"
             //window.location(url);
             var xhr = new XMLHttpRequest();
             xhr.open("GET", url, false);
             xhr.send();
            }
        );

        $('#send-button2').on('click', function(e){
             var number_cust = document.getElementById('number_cust');
             number_cust_content =  number_cust.textContent.trim();

             var number_driver = document.getElementById('driver_details');
             number_driver_content =  String(number_driver.textContent);
             var n = parseInt(number_driver_content.search("Mob")) + 5;
             var driver_number = number_driver_content.substring(n ,n+10);

             //var number_advisor = document.getElementById('advisor_details');
             //number_advisor_content =  String(number_advisor.textContent);
             //var k = parseInt(number_advisor_content.search("Mob")) + 5;
             //var advisor_number = number_advisor_content.substring(k ,k+10);

             var smstext = document.getElementById('sms-content1');
             smstext_content = smstext.textContent.trim();

             var url = "http://sms.hspsms.com/sendSMS?username=clickgarage&message="+ smstext_content + "&sendername=CLKGRG&smstype=TRANS&numbers=" + number_cust_content + "&apikey=ab33f626-fba5-4bff-9a2b-68a7e9eed43c"
             var xhr = new XMLHttpRequest();
             xhr.open("GET", url, false);
             xhr.send();
            }
        );

        $('#send-button3').on('click', function(e){
             var number_cust = document.getElementById('number_cust');
             number_cust_content =  number_cust.textContent.trim();

             var number_driver = document.getElementById('driver_details');
             number_driver_content =  String(number_driver.textContent);
             var n = parseInt(number_driver_content.search("Mob")) + 5;
             var driver_number = number_driver_content.substring(n ,n+10);

             //var number_advisor = document.getElementById('advisor_details');
             //number_advisor_content =  String(number_advisor.textContent);
             //var k = parseInt(number_advisor_content.search("Mob")) + 5;
             //var advisor_number = number_advisor_content.substring(k ,k+10);

             var smstext = document.getElementById('sms-content2');
             smstext_content = smstext.textContent.trim();

             var url = "http://sms.hspsms.com/sendSMS?username=clickgarage&message="+ smstext_content + "&sendername=CLKGRG&smstype=TRANS&numbers=" + number_cust_content + "&apikey=ab33f626-fba5-4bff-9a2b-68a7e9eed43c"
             var xhr = new XMLHttpRequest();
             xhr.open("GET", url, false);
             xhr.send();
            }
        );

        $('#send-button4').on('click', function(e){
             var number_cust = document.getElementById('number_cust');
             number_cust_content =  number_cust.textContent.trim();


             var number_driver = document.getElementById('driver_details');
             number_driver_content =  String(number_driver.textContent);
             var n = parseInt(number_driver_content.search("Mob")) + 5;
             var driver_number = number_driver_content.substring(n ,n+10);

             //var number_advisor = document.getElementById('advisor_details');
             //number_advisor_content =  String(number_advisor.textContent);
             //var k = parseInt(number_advisor_content.search("Mob")) + 5;
             //var advisor_number = number_advisor_content.substring(k ,k+10);

             var now = new Date()
             var time = [ now.getHours(), now.getMinutes() ];

            // Determine AM or PM suffix based on the hour
              var suffix = ( time[0] < 12 ) ? "AM" : "PM";

            // Convert hour from military time
              time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

            // If hour is 0, set it to 12
              time[0] = time[0] || 12;

            // If seconds and minutes are less than 10, add a zero
              for ( var i = 1; i < 3; i++ ) {
                if ( time[i] < 10 ) {
                  time[i] = "0" + time[i];
                }
              }
             var time_now = time.join(":") + " " + suffix;

             $('.sms-popup .current-time').text(time_now);

             var smstext = document.getElementById('sms-content3');
             smstext_content = smstext.textContent.trim();



             var url = "http://sms.hspsms.com/sendSMS?username=clickgarage&message="+ smstext_content + "&sendername=CLKGRG&smstype=TRANS&numbers=" + number_cust_content + "&apikey=ab33f626-fba5-4bff-9a2b-68a7e9eed43c"
             var xhr = new XMLHttpRequest();
             xhr.open("GET", url, false);
             xhr.send();
            }
        );
        $('#send-button5').on('click', function(e){
             var number_cust = document.getElementById('number_cust');
             number_cust_content =  number_cust.textContent.trim();

             var number_driver = document.getElementById('driver_details');
             number_driver_content =  String(number_driver.textContent);
             var n = parseInt(number_driver_content.search("Mob")) + 5;
             var driver_number = number_driver_content.substring(n ,n+10);

             //var number_advisor = document.getElementById('advisor_details');
             //number_advisor_content =  String(number_advisor.textContent);
             //var k = parseInt(number_advisor_content.search("Mob")) + 5;
             //var advisor_number = number_advisor_content.substring(k ,k+10);

             var amount = document.getElementById("due_amount").value;
             $('.sms-popup .due-amount').text(amount);

             var smstext = document.getElementById('sms-content4');
             smstext_content = smstext.textContent.trim();

             var url = "http://sms.hspsms.com/sendSMS?username=clickgarage&message="+ smstext_content + "&sendername=CLKGRG&smstype=TRANS&numbers=" + number_cust_content + "&apikey=ab33f626-fba5-4bff-9a2b-68a7e9eed43c"
             var xhr = new XMLHttpRequest();
             xhr.open("GET", url, false);
             xhr.send();
             //   alert(amount);
            }
        );

        $('#send-button6').on('click', function(e){
             var number_cust = document.getElementById('number_cust');
             number_cust_content =  number_cust.textContent.trim();

             var number_driver = document.getElementById('driver_details');
             number_driver_content =  String(number_driver.textContent);
             var n = parseInt(number_driver_content.search("Mob")) + 5;
             var driver_number = number_driver_content.substring(n ,n+10);

             //var number_advisor = document.getElementById('advisor_details');
             //number_advisor_content =  String(number_advisor.textContent);
             //var k = parseInt(number_advisor_content.search("Mob")) + 5;
             //var advisor_number = number_advisor_content.substring(k ,k+10);

             //var amount = document.getElementById("due_amount").value;
             //$('.sms-popup .due-amount').text(amount);

             var smstext = document.getElementById('sms-content5');
             smstext_content = smstext.textContent.trim();

             var url = "http://sms.hspsms.com/sendSMS?username=clickgarage&message="+ smstext_content + "&sendername=CLKGRG&smstype=TRANS&numbers=" + number_cust_content + "&apikey=ab33f626-fba5-4bff-9a2b-68a7e9eed43c"
             var xhr = new XMLHttpRequest();
             xhr.open("GET", url, false);
             xhr.send();
             //   alert(amount);
            }

        );
    //        $('#date-time-pair .pick-up-time').timepicker({
    //    timeFormat: 'hA-jA',
    //    // year, month, day and seconds are not important
    //
    //    minTime: new Date(0, 0, 0, 8, 0, 0),
    //    maxTime: new Date(0, 0, 0, 15, 0, 0),
    //    // time entries start being generated at 6AM but the plugin
    //    // shows only those within the [minTime, maxTime] interval
    //    //startHour: 6,
    //    // the value of the first item in the dropdown, when the input
    //    // field is empty. This overrides the startHour and startMinute
    //    // options
    //    //startTime: new Date(0, 0, 0, 8, 20, 0),
    //    // items in the dropdown are separated by at interval minutes
    //    step: 60,
    //});


    $('#date-time-pair .pick-up-date').datepicker({
        'format': 'm/d/yyyy',
//        'autoclose': true,
        'minDate': new Date()
    });
        //local.clearKey('clgacart');

    // initialize datepair
//    var basicExampleEl = document.getElementById('date-time-pair');
//    var datepair = new Datepair(basicExampleEl);



//    $('.action-button').on('click', function(e){
    $('.centered-content').on('click', '#sms-button', function(e){
        console.log('testing');
        var obj = {};
        var parent_div = $(this).closest('.booking-entry') 
        obj.bkg_id = parent_div.find('#id-div p').text();
        obj.service = parent_div.find('#service-div #service-type').text().replace("Service: ","");
        obj.pickup_time = parent_div.find('#service-div #pickup-time').text().replace("Pickup-time: ","");
        obj.cust_name = parent_div.find('#cust-div #cust-name').text().replace("Name: ","");
        obj.cust_contact = parent_div.find('#cust-div #cust-contact').text().replace("Phone: ","");
        obj.cust_email = parent_div.find('#cust-div #cust-email').text().replace("Email: ","");
        obj.cust_address = parent_div.find('#cust-div #cust-address').text().replace("Address: ","");
        obj.brand = parent_div.find('#car-div #brand').text().replace("Car: ","");
        obj.make = parent_div.find('#car-div #make').text().replace("Make: ","");
        //obj.regn = parent_div.find('#car-div #regn').text().replace("Regn#: ","");
        console.log(obj);
        $('.sms-popup .booking-id').text(obj.bkg_id);
        $('.sms-popup .service').text(obj.service);
        $('.sms-popup .cust-name').text(obj.cust_name);
        $('.sms-popup .cust-contact').text(obj.cust_contact);
        $('.sms-popup .cust-address').text(obj.cust_address);
        $('.sms-popup .vehicle').text(obj.brand);
        $('.sms-popup .pickup-time').text(obj.pickup_time);
        //$('.sms-popup .current-time').text(obj.pickup_time);
        $('.sms-popup').show()
            }
        );


        $('.centered-content').on('click', '#add-coupon', function(e){
            $('.add-coupon-popup').show()
        });
        $('.centered-content').on('click', '#add-trans', function(e){
        //console.log('testing');
        //var obj = {};
        //var parent_div = $(this).closest('.booking-entry')
        //obj.bkg_id = parent_div.find('#id-div p').text();
        //obj.service = parent_div.find('#service-div #service-type').text().replace("Service: ","");
        //obj.pickup_time = parent_div.find('#service-div #pickup-time').text().replace("Pickup-time: ","");
        //obj.cust_name = parent_div.find('#cust-div #cust-name').text().replace("Name: ","");
        //obj.cust_contact = parent_div.find('#cust-div #cust-contact').text().replace("Phone: ","");
        //obj.cust_email = parent_div.find('#cust-div #cust-email').text().replace("Email: ","");
        //obj.cust_address = parent_div.find('#cust-div #cust-address').text().replace("Address: ","");
        //obj.brand = parent_div.find('#car-div #brand').text().replace("Brand: ","");
        //obj.make = parent_div.find('#car-div #make').text().replace("Make: ","");
        //obj.regn = parent_div.find('#car-div #regn').text().replace("Regn#: ","");
        //console.log(obj);
        //$('.sms-popup .booking-id').text(obj.bkg_id);
        //$('.sms-popup .service').text(obj.service);
        //$('.sms-popup .cust-name').text(obj.cust_name);
        //$('.sms-popup .cust-contact').text(obj.cust_contact);
        //$('.sms-popup .cust-address').text(obj.cust_address);
        //$('.sms-popup .vehicle').text(obj.brand + ' ' + obj.make);
        //$('.sms-popup .pickup-time').text(obj.pickup_time);
        ////$('.sms-popup .current-time').text(obj.pickup_time);
        $('.add-trans-popup').show()
            }
        );


    $('#select-driver').on('change', function(e){
        var driver_det = $('#select-driver option:selected').text();
        $('.sms-popup .driver-details').text(driver_det);
            }
        );
        
    $('#select-advisor').on('change', function(e){
        var advisor_det = $('#select-advisor option:selected').text();
        $('.sms-popup .advisor-details').text(advisor_det);        
            }
        );

        $(".section-listings").on('click','#cancel-button',function(e){
            if(!$(this).hasClass('cancelled')){
                var elem = $(this);
                elem.addClass('cancelled')
                var tran_id = elem.attr('tran_id')
                var classy = 'Booking'
                Commons.ajaxData('cancel_booking', {r_id:"dmFydW5ndWxhdGlsaWtlc2dhbG91dGlrZWJhYg==", tran_id:tran_id},"get",_this, eval("_this.afterCancel"+classy.toTitleCase()))

            }
        });
        $(".section-listings").on('click','#order-complete',function(e){
            if(!$(this).hasClass('complete')){
                var elem = $(this);
                elem.addClass('complete')
                var tran_id = elem.attr('tran_id')
                var classy = 'Complete'
                Commons.ajaxData('order_complete', {r_id:"dmFydW5ndWxhdGlsaWtlc2dhbG91dGlrZWJhYg==", tran_id:tran_id},"get",_this, eval("_this.after"+classy.toTitleCase()))

            }
        })
        $('#brand-dropdown').on('change', function(){
            var brand = $(this).val();
            Commons.ajaxData('fetch_car_list', {m_id:brand,cb_id:"Car"},"get",_this,_this.loadCarMake);
        });
        $('#car-bike-select').on('change', function(e){
           console.log('v_type change detected');
           var v_type = document.getElementById('car-bike-select').value;

               //$(this).attr('value');
               //console.log(v_type)
           var container = $('#brand-select');
           container.html('');
           var carBrands = ['Chevrolet','Fiat','Ford','Honda','Hyundai','Mahindra','Maruti Suzuki','Nissan','Renault','Skoda','Tata','Toyota','Volkswagen'];
           var bikeBrands = ['Bajaj','Hero','Honda','KTM','Royal Enfield','Suzuki','TVS','Yamaha','Mahindra'];
           html = '<option selected disabled>Select Brand</option>';
           if (v_type=='Car'){
               for (i=0; i<carBrands.length; i++){
                   html += '<option>' + carBrands[i] + '</option>';
               }
           }
           else if (v_type=='Bike'){
               for (i=0; i<bikeBrands.length; i++){
                   html += '<option>' + bikeBrands[i] + '</option>';
               }
           }
       container.html(html);
       });

       $('#brand-select').on('change', function(){
           console.log('brand change detected');
           //var v_brand = $(this).val();
            var v_brand = document.getElementById('brand-select').value;
           var v_type = document.getElementById('car-bike-select').value;
           //
           console.log(v_type);
           Commons.ajaxData('fetch_car_list', {m_id:v_brand,cb_id:v_type},"get",Global,Global.loadCarMake);
       });

       $('#car-select').on('change', function(){
           console.log('car change detected');
           //var v_brand = $(this).val();
           // var v_brand = document.getElementById('brand-select').value;
           //var v_type = document.getElementById('car-bike-select').value;
           //
           var classy = document.getElementById('category-select').value;
           var car_select = document.getElementById('car-select').value;

           //console.log(v_type);
          if(classy == 'servicing' || classy == 'cleaning' || classy == 'vas') {
              Commons.ajaxData('fetch_car_' + classy, {c_id: car_select}, "get", _this, eval("_this.loadAdmin" + classy.toTitleCase()));
          }
       });
       $('#category-select').on('change', function(){
           console.log('category change detected');
           //var v_brand = $(this).val();
           // var v_brand = document.getElementById('brand-select').value;
           //var v_type = document.getElementById('car-bike-select').value;
           //
           var classy = document.getElementById('category-select').value;
           var car_select = document.getElementById('car-select').value;

           //console.log(v_type);
          if(classy == 'servicing' || classy == 'cleaning' || classy == 'vas') {
              Commons.ajaxData('fetch_car_' + classy, {c_id: car_select}, "get", _this, eval("_this.loadAdmin" + classy.toTitleCase()));
          }
       });

       $('#sub-cat-select').on('change', function(){
           console.log('sub category change detected');
           //var v_brand = $(this).val();
           // var v_brand = document.getElementById('brand-select').value;
           //var v_type = document.getElementById('car-bike-select').value;
           //
           var classy = document.getElementById('category-select').value;
           var car_select = document.getElementById('car-select').value;
           var sub_cat = document.getElementById('sub-cat-select').value;

           //console.log(v_type);
           if(classy == 'servicing' || classy == 'cleaning' || classy == 'vas'){
                    //var data = {};
                    //data.state = 'dealer';
                    //console.log("_this.load"+classy.toTitleCase()+"Details");
                    Commons.ajaxData('fetch_'+classy+'_details', {service_id:sub_cat, c_id:car_select, city_id:'Delhi'},"get",_this, eval("_this.loadAdmin"+classy.toTitleCase()+"Details") )
           }

       });

       $('#coupon-button').on('click', function(){

       });
       $('#place-guest-trans').on('click', function(){
           console.log('place order requested change detected');

           var classy = document.getElementById('category-select').value;
           var car_select = $('.select-service #car-select :selected').attr("carname");
           var servicename = document.getElementById('service-select').value;
           var name = $('.address-form-holder .clean-inp-tbox.user-name').val();
           var email = $('.address-form-holder .clean-inp-tbox.user-email').val();
           var phone = $('.address-form-holder .clean-inp-tbox.user-number').val();
           var pick_date = $('.address-form-holder .clean-inp-tbox.pick-up-date ').val();
           var pick_time = $('.address-form-holder .clean-inp-tbox.pick-up-time').val();
           var car_reg_number = $('.address-form-holder .clean-inp-tbox.car-reg-no ').val();
           var pick_addr_1 = $('.address-form-holder .clean-inp-tbox.pick-addr-1').val();
           var pick_addr_2 = $('.address-form-holder .clean-inp-tbox.pick-addr-2').val();
           var pick_pin = $('.address-form-holder .clean-inp-tbox.pick-pin').val();
           var pick_lmark = $('.address-form-holder .clean-inp-tbox.pick-lmark').val();
           var pick_city = $('.address-form-holder .clean-inp-tbox.pick-city').val();
           var drop_addr = $('.address-form-holder .clean-inp-tabox.drop-addr').val();
           var drop_pin = $('.address-form-holder .clean-inp-tbox.drop-pin').val();
           var drop_lmark = $('.address-form-holder .clean-inp-tbox.drop-lmark').val();
           var drop_city = $('.address-form-holder .clean-inp-sbox.drop-city').val();
           var timeStamp = Math.floor(Date.now() / 1000);

           var pick = {
                    street : pick_addr_1,
                    pincode : pick_pin,
                    landmark : pick_addr_2,
                    city : pick_city,
                    time : pick_time,
                    date : pick_date
                };

           var drop = {
                    street : pick_addr_1,
                    pincode : pick_pin,
                    landmark : pick_lmark,
                    city : pick_city
                };
           var order_list = [{
               ts : timeStamp,
               service_id : servicename,
               service : classy,
               status: true
           }];

                    //Commons.ajaxData('add_guest_transaction', {
                    //    email             : email,
                    //    name              : name,
                    //    number            : phone,
                    //    car_reg_number    : reg_no,
                    //    order_list        : order_list,
                    //    car_name          : car_select,
                    //    pick_obj:JSON.stringify(pick),
                    //    drop_obj:JSON.stringify(drop),
                    //},"GET", _this,loadFinish );
           Commons.ajaxData('add_guest_transaction', {
                        email             : email,
                        name              : name,
                        number            : phone,
                        reg_no:             car_reg_number ,
                        order_list        : JSON.stringify(order_list),
                        car_name          : car_select,
                        pick:JSON.stringify(pick),
                        drop:JSON.stringify(drop),
                    },"GET", _this, _this.loadPlaced);
           //}

       });
       $('#coupon-button').on('click', function(){
           var container = $('.add-coupon-popup');

           var code = container.find('.clean-inp-tbox.cpn-code').val();
           var message = container.find('.clean-inp-tbox.cpn-msg').val();

           var amount = container.find('.clean-inp-tbox.cpn-value').val();
           var cap = container.find('.clean-inp-tbox.cpn-cap').val();
           var type = container.find('.clean-inp-sbox.cpn-type').val();
           var price_key = container.find('.clean-inp-sbox.cpn-key').val();
           var vendor = container.find('.clean-inp-sbox.cpn-vendor').val();
           var service = container.find('.clean-inp-sbox.cpn-category').val();
           var car_bike = container.find('.clean-inp-sbox.cpn-cb').val();

           var expiry = container.find('.clean-inp-tbox.cpn-expiry').val();
           var isValid = function(p){if(String(p).length && String(p) != "undefined"){return true;}return false;};
           if(!isValid(code)){
               alert('code invalid');
               return false;
           }
           if(!isValid(message)){
               alert('message invalid');
               return false;
           }
           if(!isValid(amount)){
               alert('amount invalid');
               return false;
           }
           if(!isValid(cap)){
               alert('cap invalid');
               return false;
           }
           if(!isValid(expiry)){
               alert('expiry invalid');
               return false;
           }

           Commons.ajaxData('add_coupon',{
               code : code,
               message : message,
               amount : amount,
               cap : cap,
               type : type,
               price_key : price_key,
               vendor : vendor,
               service : service,
               car_bike : car_bike,
               expiry : expiry
           },"get",_this, function(){});
       });

    },

    loadPlaced : function(data){
      //console.log("order_placed") ;
      //window.alert("Guest Order Placed")
      window.location.href = "#order-placed"
    },

    loadAdminServicingDetails : function(data){
         var container = $('#service-select');
        container.html('');
            var html = '<option value="choose-one" data-placeholder="true">Select Service</option>'
        $.each(data, function(ix, val){
            html += '<option value="'+val.id+'">'+val.vendor+'</option>';
        })
        container.html(html);
    },

    loadAdminCleaningDetails : function(data){
        var container = $('#service-select');
        container.html('');
            var html = '<option value="choose-one" data-placeholder="true">Select Service</option>'
        $.each(data, function(ix, val){
            html += '<option value="'+val.id+'">'+val.service+'</option>';
        })
        container.html(html);
    },
    loadAdminVasDetails : function(data){
        var container = $('#service-select');
        container.html('');
            var html = '<option value="choose-one" data-placeholder="true">Select Service</option>'
        $.each(data, function(ix, val){
            html += '<option value="'+val.id+'">'+val.service+'</option>';
        })
        container.html(html);
    },

    loadAdminServicing : function(data){
         console.log(data)
        var container = $('#sub-cat-select');
        container.html('');
            var html = '<option value="choose-one" data-placeholder="true">Select Sub-Cat</option>'
        $.each(data, function(ix, val){
            html += '<option value="'+val.id+'">'+val.type_service+'</option>';
        })
        container.html(html);
    },
    loadAdminCleaning : function(data){
             console.log(data)
        var container = $('#sub-cat-select');
        container.html('');
            var html = '<option value="choose-one" data-placeholder="true">Select Sub-Cat</option>'
        $.each(data, function(ix, val){
            html += '<option value="'+val.id+'">'+val.category+'</option>';
        })
        container.html(html);
    },
    loadAdminVas : function(data){
        console.log(data)
        var container = $('#sub-cat-select');
        container.html('');
            var html = '<option value="choose-one" data-placeholder="true">Select Sub-Cat</option>'
        $.each(data, function(ix, val){
            html += '<option value="'+val.id+'">'+val.category+'</option>';
        })
        container.html(html);
    },

    loadCarMake : function(data){
        console.log(data)
        var container = $('#car-select');
        container.html('');
            var html = '<option value="choose-one" data-placeholder="true">Select Model</option>'
        $.each(data, function(ix, val){
            html += '<option value="'+val.id+'" carname="'+val.make +" "+val.name+'">'+val.make +" "+val.name+'</option>';
        })
        container.html(html);

    },

    loadBookings : function(data){
        console.log(data)
        var container = $('.section-listings .booking');
        container.html('');
        var html = '';
        $.each(data, function(idx, val){
            html += '<div class="booking-entry">';
//            id-div starts
            html += '<div class="booking-entry-cat" id="id-div">'
            html += '<p>' + String(val.booking_id) + '</p>';
            html += '</div>';
////            service-div starts here
            html += '<div class="booking-entry-cat" id="service-div">';


            if (val.service_items[0].service == "servicing")
            {
                try {
                    html += '<p id="service-type">Service: ' + String(val.service_items[0].served_data.type_service) + '</p>';
                    html += '<p id="vendor-type">Vendor: ' + String(val.service_items[0].served_data.dealer_cat) + '</p>';
                }
                catch(err){
                    html += '<p id="service-type">Service: ' + String(val.service_items[0].service) + '</p>';
                }
                if(val.service_items[0].served_data && val.service_items[0].served_data.additional){
                    html += '<p id="additional-data">Additional Data:<br/> ';
                    $.each(val.service_items[0].served_data.additional, function(name, value){
                        if(value && value.length)
                            html += name+' : '+value+'<br/>';
                    });
                    html += '</p>';
                }
            } else if (val.service_items[0].service == "cleaning"){
                html += '<p id="service-type">Service: ' + String(val.service_items[0].served_data.service) + '</p>';
                html += '<p id="vendor-type">Vendor: ' + String(val.service_items[0].served_data.vendor) + '</p>';
            }
            else if (val.service_items[0].service == "repair"){
                html += '<p id="service-type">Service: ' + String(val.service_items[0].service) + '</p>';
                //html += '<p id="vendor-type">Vendor: ' + String(val.service_items[0].served_data.vendor) + '</p>';
            }
            //catch(err){
            //    html += '<p id="service-type">Service: ' + String(val.service_items[0].service) + '</p>';
            //    //html += '<p id="vendor-type">Vendor: ' + String(val.service_items[0].served_data.dealer_cat) + '</p>';
            //}
            html += '<p id="pickup-time">Pickup-time: ' + String(val.time_booking) + '</p>';
            html += '<p id="pickup-date">Pickup-date: ' + String(val.date_booking) + '</p>';
            html += '</div>';
////            car-div starts
            html += '<div class="booking-entry-cat" id="car-div">';
            try {
                html += '<p id="brand">Car: ' + String(val.cust_carname) + '</p>';
                //html += '<p id="make">Make: ' + String(val.service_items[0].served_data.car).replace(String(val.service_items[0].served_data.brand), "") + '</p>';
                //html += '<p id="regn">Regn#: ' + String(val.cust_carnumber) + '</p>';
            }
            catch(err){

            }
            html += '</div>';
//            cust-div starts
            html += '<div class="booking-entry-cat" id="cust-div">';
            html += '<p id="cust-name">Name: ' + String(val.cust_name) + '</p>';
            html += '<p id="cust-contact">Phone: ' + String(val.cust_number) + '</p>';
            html += '<p id="cust-email">Email: ' + String(val.cust_email) + '</p>';
            html += '<p id="cust-address">Address: ' + String(val.cust_pickup_add.street) + ', ' + String(val.cust_pickup_add.landmark) +', ' +String(val.cust_pickup_add.city) +'</p>';
            html += '</div>';
//            status-div starts
            html += '<div class="booking-entry-cat" id="status-div">';
            html += '<p>Status: ' + String(val.status) + '</p>';
//            html += '<p> Status: ' + if(String(val.status)==''){'Upcoming'}else{String(val.status)} + '</p>';
            html += '</div>';
//            actions-div starts
            html += '<div class="booking-entry-cat" id="actions-div">';
            html += '<button class="action-button" id="sms-button">Send SMS</button>';
            html += '<button class="action-button" tran_id=';
            html +=val.tran_id;
            html+= " id='cancel-button'>Cancel Order</button>";
            html += '<button class="action-button" tran_id=';
            html +=val.tran_id;
            html += " id='order-complete'>Order Complete</button>";
            html += '</div>';
//            bookings-div closing tag here
            html += '</div>';
        });
        container.show().html(html);
    }

};




document.onreadystatechange = function () {
      Global.init();
}


