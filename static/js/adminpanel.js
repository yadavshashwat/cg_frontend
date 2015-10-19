
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
          Commons.ajaxData('fetch_all_booking', {r_id:"dmFydW5ndWxhdGlsaWtlc2dhbG91dGlrZWJhYg=="},"get",_this, _this.loadBookings)
//          Commons.ajaxData('fetch_all_cars', {},"get",_this, _this.loadBookings)
            }
        );
        
//    $('.action-button').on('click', function(e){
    $('.centered-content').on('click', '#sms-button', function(e){
        console.log('testing');
        $('.sms-popup').show()
            }
        );    
        

    },

    loadBookings : function(data){
        console.log(data)
        var container = $('.booking');
        container.html('');
        var html = '';
        $.each(data, function(idx, val){
            html += '<div class="booking-entry">';
//            id-div starts
            html += '<div class="booking-entry-cat" id="id-div">'
            html += '<p>' + String(val.booking_id) + '</p>';
            html += '</div>';
//            service-div starts here
            html += '<div class="booking-entry-cat" id="service-div">';
            html += '<p> Service: ' + String(val.service_items[0].served_data.type_service) + '</p>';
            html += '<p> Vendor: ' + String(val.service_items[0].served_data.dealer_cat) + '</p>';
            html += '</div>';
//            car-div starts
            html += '<div class="booking-entry-cat" id="car-div">';
            html += '<p> Brand: ' + String(val.service_items[0].served_data.brand) + '</p>';
            html += '<p> Make: ' + String(val.service_items[0].served_data.car).replace(String(val.service_items[0].served_data.brand),"") + '</p>';
            html += '<p> Regn#: ' + String(val.cust_carnumber) + '</p>';
            html += '</div>';
//            cust-div starts
            html += '<div class="booking-entry-cat" id="cust-div">';
            html += '<p> Name: ' + String(val.cust_name) + '</p>';
            html += '<p> Phone: ' + String(val.cust_number) + '</p>';
            html += '<p> Email: ' + String(val.cust_email) + '</p>';
            html += '<p> Address: ' + String(val.cust_pickup_add.street)+", "+String(val.cust_pickup_add.city)+"-"+String(val.cust_pickup_add.pincode) + '</p>';
            html += '</div>';
//            status-div starts
            html += '<div class="booking-entry-cat" id="status-div">';
            html += '<p> Status: ' + String(val.status) + '</p>';
//            html += '<p> Status: ' + if(String(val.status)==''){'Upcoming'}else{String(val.status)} + '</p>';
            html += '</div>';
//            actions-div starts
            html += '<div class="booking-entry-cat" id="actions-div">';
            html += '<button class="action-button" id="sms-button">Send SMS</button>';
            html += '<button class="action-button" id="email-button">Send E-mail</button>';
            html += '<button class="action-button" id="change-status">Change Status</button>';
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


