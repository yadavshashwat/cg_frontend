
var Global = {
    init:function(){
        var _this = this;
//    $("[data-role=panel]").panel().enhanceWithin();  
        _this.events();
        //$('#submit-button').button('disable');

    },
    events:function(){
        var _this = this;
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

        $('#send-button1').on('click', function(e){
             var number_cust = document.getElementById('number_cust');
             number_cust_content =  number_cust.textContent;

             var src = document.getElementById("service_centre").value;
             $('.sms-popup .vendor-details').text(src);

             var number_driver = document.getElementById('driver_details');
             number_driver_content =  String(number_driver.textContent);
             var n = parseInt(number_driver_content.search("Mob")) + 5;
             var driver_number = number_driver_content.substring(n ,n+10);

             var number_advisor = document.getElementById('advisor_details');
             number_advisor_content =  String(number_advisor.textContent);
             var k = parseInt(number_advisor_content.search("Mob")) + 5;
             var advisor_number = number_advisor_content.substring(k ,k+10);

             var smstext = document.getElementById('sms-content0');
             smstext_content = smstext.textContent.trim();

             var url = "http://sms.hspsms.com:8090/sendSMS?username=clickgarage&message="+ smstext_content + "&sendername=CLKGRG&smstype=TRANS&numbers=" + driver_number + "&apikey=ab33f626-fba5-4bff-9a2b-68a7e9eed43c"
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

             var number_advisor = document.getElementById('advisor_details');
             number_advisor_content =  String(number_advisor.textContent);
             var k = parseInt(number_advisor_content.search("Mob")) + 5;
             var advisor_number = number_advisor_content.substring(k ,k+10);

             var smstext = document.getElementById('sms-content1');
             smstext_content = smstext.textContent.trim();

             var url = "http://sms.hspsms.com:8090/sendSMS?username=clickgarage&message="+ smstext_content + "&sendername=CLKGRG&smstype=TRANS&numbers=" + number_cust_content + "&apikey=ab33f626-fba5-4bff-9a2b-68a7e9eed43c"
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

             var number_advisor = document.getElementById('advisor_details');
             number_advisor_content =  String(number_advisor.textContent);
             var k = parseInt(number_advisor_content.search("Mob")) + 5;
             var advisor_number = number_advisor_content.substring(k ,k+10);

             var smstext = document.getElementById('sms-content2');
             smstext_content = smstext.textContent.trim();

             var url = "http://sms.hspsms.com:8090/sendSMS?username=clickgarage&message="+ smstext_content + "&sendername=CLKGRG&smstype=TRANS&numbers=" + number_cust_content + "&apikey=ab33f626-fba5-4bff-9a2b-68a7e9eed43c"
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

             var number_advisor = document.getElementById('advisor_details');
             number_advisor_content =  String(number_advisor.textContent);
             var k = parseInt(number_advisor_content.search("Mob")) + 5;
             var advisor_number = number_advisor_content.substring(k ,k+10);

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



             var url = "http://sms.hspsms.com:8090/sendSMS?username=clickgarage&message="+ smstext_content + "&sendername=CLKGRG&smstype=TRANS&numbers=" + number_cust_content + "&apikey=ab33f626-fba5-4bff-9a2b-68a7e9eed43c"
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

             var number_advisor = document.getElementById('advisor_details');
             number_advisor_content =  String(number_advisor.textContent);
             var k = parseInt(number_advisor_content.search("Mob")) + 5;
             var advisor_number = number_advisor_content.substring(k ,k+10);

             var amount = document.getElementById("due_amount").value;
             $('.sms-popup .due-amount').text(amount);

             var smstext = document.getElementById('sms-content4');
             smstext_content = smstext.textContent.trim();

             var url = "http://sms.hspsms.com:8090/sendSMS?username=clickgarage&message="+ smstext_content + "&sendername=CLKGRG&smstype=TRANS&numbers=" + number_cust_content + "&apikey=ab33f626-fba5-4bff-9a2b-68a7e9eed43c"
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

             var number_advisor = document.getElementById('advisor_details');
             number_advisor_content =  String(number_advisor.textContent);
             var k = parseInt(number_advisor_content.search("Mob")) + 5;
             var advisor_number = number_advisor_content.substring(k ,k+10);

             //var amount = document.getElementById("due_amount").value;
             //$('.sms-popup .due-amount').text(amount);

             var smstext = document.getElementById('sms-content5');
             smstext_content = smstext.textContent.trim();

             var url = "http://sms.hspsms.com:8090/sendSMS?username=clickgarage&message="+ smstext_content + "&sendername=CLKGRG&smstype=TRANS&numbers=" + number_cust_content + "&apikey=ab33f626-fba5-4bff-9a2b-68a7e9eed43c"
             var xhr = new XMLHttpRequest();
             xhr.open("GET", url, false);
             xhr.send();
             //   alert(amount);
            }

        );

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
        obj.brand = parent_div.find('#car-div #brand').text().replace("Brand: ","");
        obj.make = parent_div.find('#car-div #make').text().replace("Make: ","");
        obj.regn = parent_div.find('#car-div #regn').text().replace("Regn#: ","");
        console.log(obj);
        $('.sms-popup .booking-id').text(obj.bkg_id);
        $('.sms-popup .service').text(obj.service);
        $('.sms-popup .cust-name').text(obj.cust_name);
        $('.sms-popup .cust-contact').text(obj.cust_contact);
        $('.sms-popup .cust-address').text(obj.cust_address);
        $('.sms-popup .vehicle').text(obj.brand + ' ' + obj.make);
        $('.sms-popup .pickup-time').text(obj.pickup_time);
        //$('.sms-popup .current-time').text(obj.pickup_time);
        $('.sms-popup').show()
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

            try{
            html += '<p id="service-type">Service: ' + String(val.service_items[0].served_data.type_service) + '</p>';
            html += '<p id="vendor-type">Vendor: ' + String(val.service_items[0].served_data.dealer_cat) + '</p>';
                }
            catch(err){
                html += '<p id="service-type">Service: ' + String(val.service_items[0].service) + '</p>';
                //html += '<p id="vendor-type">Vendor: ' + String(val.service_items[0].served_data.dealer_cat) + '</p>';
            }
            html += '<p id="pickup-time">Pickup-time: ' + String(val.time_booking) + '</p>';
            html += '</div>';
////            car-div starts
            html += '<div class="booking-entry-cat" id="car-div">';
            try {
                html += '<p id="brand">Brand: ' + String(val.service_items[0].served_data.brand) + '</p>';
                html += '<p id="make">Make: ' + String(val.service_items[0].served_data.car).replace(String(val.service_items[0].served_data.brand), "") + '</p>';
                html += '<p id="regn">Regn#: ' + String(val.cust_carnumber) + '</p>';
            }
            catch(err){

            }
            html += '</div>';
//            cust-div starts
            html += '<div class="booking-entry-cat" id="cust-div">';
            html += '<p id="cust-name">Name: ' + String(val.cust_name) + '</p>';
            html += '<p id="cust-contact">Phone: ' + String(val.cust_number) + '</p>';
            html += '<p id="cust-email">Email: ' + String(val.cust_email) + '</p>';
            html += '<p id="cust-address">Address: ' + String(val.cust_pickup_add.street) + ', ' + String(val.cust_pickup_add.city) + ' (Landmark: ' + String(val.cust_pickup_add.landmark)+')</p>';
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
        container.html(html);
    }

};




document.onreadystatechange = function () {
      Global.init();
}


