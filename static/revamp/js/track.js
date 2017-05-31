document.onreadystatechange = function () {
    Global.init();
};

window.onpopstate = function(event) {
    location.reload()
};
// materialize css
$(document).ready(function() {
    $('select').material_select();
    var a = $(window).height();

    // var b = $('.home-form').height();
    // console.log(a)
    alfa = parseInt('80px')
    // console.log(a-alfa)
    sourcelen = SOURCES.length;

    container = $('#bookings #Source').find('select')
    container.html('')
    html = '<option value="" disabled selected>Select Source</option>'

    for (i = 0; i < sourcelen; i++) {
        html += '<option value="'+SOURCES[i] +'">'+SOURCES[i]+'</option>'
    }



    container.html(html)



});


$('.datepicker').pickadate({
    format: 'dd-mm-yyyy',
    closeOnSelect: true,
    // min: new Date() + 1,
    onSet: function( arg ){
        if ( 'select' in arg ){ //prevent closing on selecting month/year
            this.close();
            // $('#time-slot').click()
        }
    }
});

// $('.datepicker').pickadate({
//     format: 'dd-mm-yyyy',
//     closeOnSelect: true,
// });
// $('.timepicker').wickedpicker();
$(window).ready(function() {
    setTimeout(function() {
        $('.loading-pane-2').hide();
        $('#overlay').hide();
    }, 1000);
});

$(".button-collapse").sideNav();

var CURRENT_CART_ADMIN = [];
var TOTAL_PRICE_ADMIN = 0;
var TOTAL_LABOUR_ADMIN = 0;
var TOTAL_PARTS_ADMIN = 0;
var TOTAL_DISCOUNT_ADMIN = 0;
var TOTAL_ITEMS_ADMIN = 0;
var ALL_JOBS_ADMIN = "";
var ESCALATION_FLAG = false
var CART_IDS_NEW_BOOKING = [];

var JOBS_SUMMARY_NEW_BOOKING = [];
var CURRENT_CART_NEW_BOOKING = [];
var TOTAL_PRICE_NEW_BOOKING = 0;
var ALL_JOBS_NEW_BOOKING = "";
var ALL_JOBS_NEW_BOOKING_LIST = [];
var TOTAL_ITEMS_NEW_BOOKING = 0 ;
var TOTAL_LABOUR_NEW_BOOKING= 0;
var TOTAL_PARTS_NEW_BOOKING = 0;
var TOTAL_DISCOUNT_NEW_BOOKING = 0;
var COUP_DISCOUNT_NEW_BOOKING = 0 ;
var TOTAL_JOBS_NEW_BOOKING = 0;
// var TOTAL_ITEM_ESTIMATE = 0;
var PAGE_NUM = 0
// Sort Filter
var LEAD_TYPE = "";
var DATE_TYPE = "";
var REG_NUMBER = "";
var CUST_NAME = "";
var STATUS_TYPE = "";
var SORT_TYPE = "";
var BOOKING_ID = "";
var VEH_TYPE = "";
var PHONE_NUMBER = "";
var SOURCE_BOOK = "";
var DATE_TYPE_END = "";
var SEND_SMS = "1";

var CGHARYANA_VAT_NO = "06301844038"
var CGHARYANA_STAX_NO = "AAVCS6335ESD001"
var CGHARYANA_PAN_NO = "AAVCS6335E"
var CGHARYANA_CIN_NO = "U72200DL2015PTC278194"
var CGHARYANA_NAME = "Sui Generis Innovations Private Limited"
var CGHARYANA_ADDRESS = "2401, Basement"
var CGHARYANA_LOCALITY = "DLF Phase 4, Opp. Galleria Market"
var CGHARYANA_CITY = "Gurgaon"
var CGHARYANA_STATE = "Haryana"

var CGDELHI_VAT_NO = "07146991638"
var CGDELHI_STAX_NO = "AAVCS6335ESD001"
var CGDELHI_PAN_NO = "AAVCS6335E"
var CGDELHI_CIN_NO = "U72200DL2015PTC278194"
var CGDELHI_NAME = "Sui Generis Innovations Private Limited"
var CGDELHI_ADDRESS = "W22, 2nd Floor"
var CGDELHI_LOCALITY = "Green Park Main"
var CGDELHI_CITY = "New Delhi"
var CGDELHI_STATE = "Delhi"

var STATE_BILL = ""

var AGENT_VAT_NO = ""
var AGENT_STAX_NO = ""
var AGENT_CIN_NO = ""
var AGENT_NAME = ""
var AGENT_ADDRESS = ""
var AGENT_LOCALITY = ""
var AGENT_CITY = ""
var AGENT_STATE = ""

var TOTAL_SETTLED_COMMISSION = 0 ;
var TOTAL_UNSETTLED_COMMISSION = 0 ;
var TOTAL_SETTLED_PAY_COLLECT = 0;
var TOTAL_UNSETTLED_PAY_COLLECT = 0;
var TOTAL_SETTLED_BUSINESS = 0;
var TOTAL_UNSETTLED_BUSINESS = 0;
var TOTAL_AMOUNT_FROM_CG_TO_VENDOR = 0;

var TOTAL_BUSINESS_VENDOR = 0;
var TOTAL_SETTLED_BUSINESS = 0;
var TOTAL_UNSETTLED_BUSINESS = 0;
var TOTAL_UNSETTLED_PAY_COLLECT = 0;
var TOTAL_UNSETTLED_COMMISSION = 0 ;
var TOTAL_SERVICE_TAX_COMMISSION = 0;
var TOTAL_AMOUNT_FROM_CG_TO_VENDOR = 0;

var MONTH_TABLE = ""
var SOURCES = ['Google Adwords',
    'Repeat Customer',
    'Employee Referral',
    'External Referral',
    'JustDial',
    'Pamphlet',
    'Auto Advertisement',
    'On-Ground Marketing',
    'Sulekha',
    'Database - Cold Calling',
    'Chat',
    'B2B',
    'Partner - Droom',
    'Partner - Wishup',
    'Partner - Housejoy',
    'Partner - UrbanClap',
    'SMB1M',
    'SMB1F',
    'SMB2M',
    'SMB2F',
    'Walk in',
    'Partner - Mr Right',
    'Web Search',
    'Unknown',
    'Society Camps',
    'Check Up Camps',
    'Sign Up Lead',
    'Facebook Ad',
    'Mahindra Authorized',
    'Exotel']
// DATE_TYPE =

var Global = {
    init:function() {
        var _this = this;
        _this.events();
        // _this.events();
        // Commons.eventHandlers();
    },
    events:function() {

        var _this = this;
        if (_this.eventsAdded)
            return false;
        _this.eventsAdded = true;
        console.log('adding hanlder');


// =====================================================================================
//     Booking/ Lead Management
// =====================================================================================
        $(window).ready(function(){
            dataid = $('#booking-details').attr('data-id')
            page = $('#booking-details').attr('page')
            console.log(dataid)
            openbooking(dataid)
            if (page == "details"){
                $('#customer-detail .cust-detail').click();
            }else if(page =="estimate"){
                $('#customer-detail .service-detail').click();
            }else{
                $('#customer-detail .cust-detail').click();

            }
        });
        // Open Individual Booking

        var openbooking = function(data_id){
            $('#bookings').hide()
            $('#booking-details').show()
            $('#customer-detail .booking-data').show();
            $('#customer-detail .booking-job-data').hide();
            $('#customer-detail .feedback-data').hide();
            $('#customer-detail .feedback-detail').removeClass('selected')
            $('#customer-detail .service-detail').removeClass('selected')
            $('#customer-detail .cust-detail').addClass('selected')
            Commons.ajaxData('view_all_bookings', {data_id:data_id}, "get", _this, _this.loadBookingData,null, '.loading-pane');
        }


        // Switch between estimate and details in a booking
        $('#customer-detail .cust-detail').click(function(){
            $('#customer-detail .booking-data').show();
            $('#customer-detail .booking-job-data').hide();
            $('#customer-detail .feedback-data').hide();
            $('#customer-detail .service-detail').removeClass('selected')
            $('#customer-detail .feedback-detail').removeClass('selected')
            $('#customer-detail .cust-detail').addClass('selected')
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/details/'
            history.pushState({},'',new_path)
        });
        $('#customer-detail .service-detail').click(function(){
            $('#customer-detail .booking-data').hide();
            $('#customer-detail .booking-job-data').show();
            $('#customer-detail .feedback-data').hide();
            $('#customer-detail .feedback-detail').removeClass('selected')
            $('#customer-detail .cust-detail').removeClass('selected')
            $('#customer-detail .service-detail').addClass('selected')
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/estimate/'
            history.pushState({},'',new_path)

        });
        // $('#customer-detail .feedback-detail').click(function(){
        //     $('#customer-detail .booking-data').hide();
        //     $('#customer-detail .booking-job-data').hide();
        //     $('#customer-detail .feedback-data').show();
        //     $('#customer-detail .feedback-detail').addClass('selected')
        //     $('#customer-detail .cust-detail').removeClass('selected')
        //     $('#customer-detail .service-detail').removeClass('selected')
        // });


        $('#customer-detail #comp_all_select').click(function(){
            active_box =  document.getElementById('comp_all_select');
            // console.log(active_box.checked)
            if (active_box.checked){
                $('#customer-detail .approve-item.tochange').prop('checked', this.checked)
            }else{
                $('#customer-detail .approve-item.tochange').removeAttr('checked', this.checked)
            }
        })




        // - update-estimate
        $('#customer-detail .btn-update-estimate').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            _this.updateCart()
            console.log(CURRENT_CART_ADMIN)
            estimate = JSON.stringify(CURRENT_CART_ADMIN)
            Commons.ajaxData('update_estimate', {b_id: bid,
                estimate: estimate,
            }, "post", _this, _this.loadCustomerupdate,null, '.loading-pane');
        });


        $('#customer-detail .btn-view-bill').click(function(){
            console.log('Downloaded')
            file_name = $(this).attr('data-class')
            params = {file_name: file_name}
            var url = Commons.getOrigin()+Commons.URLFromName['download_pdf']+'?'+jQuery.param( params )
            $('#download').find('iframe').attr('src',url)
        });

        // Update-Agent
        // change-status




        $(window).load(function() {
            var viewportWidth = $(window).width();
            if (viewportWidth <= 600) {
                $('.status-row-inline').removeClass('status-row-inline').addClass('status-vertical')
                $('.confirm-row').find('.square').removeClass('square').addClass('square2')
                $('.confirm-row').find('.square3').removeClass('square3').addClass('square4')
                $('.confirm-row').find('.circle-status').removeClass('circle-status').addClass('circle-status2')
                $('.confirm-row').find('.content-status').removeClass('content-status').addClass('content-status2')
                $('.confirm-row').find('.status-bar-block').removeClass('status-bar-block').addClass('status-bar-inline')

                $('.lead-row').find('.square').removeClass('square').addClass('square2')
                $('.lead-row').find('.square3').removeClass('square3').addClass('square4')
                $('.lead-row').find('.circle-status').removeClass('circle-status').addClass('circle-status2')
                $('.lead-row').find('.content-status').removeClass('content-status').addClass('content-status2')
                $('.lead-row').find('.status-bar-block').removeClass('status-bar-block').addClass('status-bar-inline')


            }else if (viewportWidth <= 992){
                $('.status-row-inline').removeClass('status-row-inline').addClass('status-vertical')
                $('.confirm-row').find('.square').removeClass('square').addClass('square2')
                $('.confirm-row').find('.square3').removeClass('square3').addClass('square4')
                $('.confirm-row').find('.circle-status').removeClass('circle-status').addClass('circle-status2')
                $('.confirm-row').find('.content-status').removeClass('content-status').addClass('content-status2')
                $('.confirm-row').find('.status-bar-block').removeClass('status-bar-block').addClass('status-bar-inline')

                $('.lead-row').find('.square').removeClass('square').addClass('square2')
                $('.lead-row').find('.square3').removeClass('square3').addClass('square4')
                $('.lead-row').find('.circle-status').removeClass('circle-status').addClass('circle-status2')
                $('.lead-row').find('.content-status').removeClass('content-status').addClass('content-status2')
                $('.lead-row').find('.status-bar-block').removeClass('status-bar-block').addClass('status-bar-inline')


            }else{
                $('.status-vertical').removeClass('status-vertical').addClass('status-row-inline')
                $('.confirm-row').find('.square2').removeClass('square2').addClass('square')
                $('.confirm-row').find('.square4').removeClass('square4').addClass('square3')
                $('.confirm-row').find('.circle-status2').removeClass('circle-status2').addClass('circle-status')
                $('.confirm-row').find('.content-status2').removeClass('content-status2').addClass('content-status')
                $('.confirm-row').find('.status-bar-inline').removeClass('status-bar-inline').addClass('status-bar-block')

                $('.lead-row').find('.square2').removeClass('square2').addClass('square')
                $('.lead-row').find('.square4').removeClass('square4').addClass('square3')
                $('.lead-row').find('.circle-status2').removeClass('circle-status2').addClass('circle-status')
                $('.lead-row').find('.content-status2').removeClass('content-status2').addClass('content-status')
                $('.lead-row').find('.status-bar-inline').removeClass('status-bar-inline').addClass('status-bar-block')

            }

        });

        $(window).resize(function() {
            var viewportWidth = $(window).width();
            if (viewportWidth <= 600) {
                $('.status-row-inline').removeClass('status-row-inline').addClass('status-vertical')
                $('.confirm-row').find('.square').removeClass('square').addClass('square2')
                $('.confirm-row').find('.square3').removeClass('square3').addClass('square4')
                $('.confirm-row').find('.circle-status').removeClass('circle-status').addClass('circle-status2')
                $('.confirm-row').find('.content-status').removeClass('content-status').addClass('content-status2')
                $('.confirm-row').find('.status-bar-block').removeClass('status-bar-block').addClass('status-bar-inline')

                $('.lead-row').find('.square').removeClass('square').addClass('square2')
                $('.lead-row').find('.square3').removeClass('square3').addClass('square4')
                $('.lead-row').find('.circle-status').removeClass('circle-status').addClass('circle-status2')
                $('.lead-row').find('.content-status').removeClass('content-status').addClass('content-status2')
                $('.lead-row').find('.status-bar-block').removeClass('status-bar-block').addClass('status-bar-inline')


            }else if (viewportWidth <= 992){
                $('.status-row-inline').removeClass('status-row-inline').addClass('status-vertical')
                $('.confirm-row').find('.square').removeClass('square').addClass('square2')
                $('.confirm-row').find('.square3').removeClass('square3').addClass('square4')
                $('.confirm-row').find('.circle-status').removeClass('circle-status').addClass('circle-status2')
                $('.confirm-row').find('.content-status').removeClass('content-status').addClass('content-status2')
                $('.confirm-row').find('.status-bar-block').removeClass('status-bar-block').addClass('status-bar-inline')

                $('.lead-row').find('.square').removeClass('square').addClass('square2')
                $('.lead-row').find('.square3').removeClass('square3').addClass('square4')
                $('.lead-row').find('.circle-status').removeClass('circle-status').addClass('circle-status2')
                $('.lead-row').find('.content-status').removeClass('content-status').addClass('content-status2')
                $('.lead-row').find('.status-bar-block').removeClass('status-bar-block').addClass('status-bar-inline')


            }else{
                $('.status-vertical').removeClass('status-vertical').addClass('status-row-inline')
                $('.confirm-row').find('.square2').removeClass('square2').addClass('square')
                $('.confirm-row').find('.square4').removeClass('square4').addClass('square3')
                $('.confirm-row').find('.circle-status2').removeClass('circle-status2').addClass('circle-status')
                $('.confirm-row').find('.content-status2').removeClass('content-status2').addClass('content-status')
                $('.confirm-row').find('.status-bar-inline').removeClass('status-bar-inline').addClass('status-bar-block')

                $('.lead-row').find('.square2').removeClass('square2').addClass('square')
                $('.lead-row').find('.square4').removeClass('square4').addClass('square3')
                $('.lead-row').find('.circle-status2').removeClass('circle-status2').addClass('circle-status')
                $('.lead-row').find('.content-status2').removeClass('content-status2').addClass('content-status')
                $('.lead-row').find('.status-bar-inline').removeClass('status-bar-inline').addClass('status-bar-block')

            }
        });

        $('#customer-detail .btn-update-status').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            status_n = $(this).attr('status_next')
            Commons.ajaxData('change_status', {b_id: bid,
                status_id: status_n
            }, "post", _this, _this.loadCustomerStatus,null, '.loading-pane');
        });
    },
    loadBookingData:function(data){
        var container = $('#customer-detail .booking-data .pre-data');
        container.html('');
        html = ''
        if (LEAD_TYPE == "Lead"){
            $('#customer-detail .header-booking .lead').show()
            $('#customer-detail .header-booking .booking').hide()
        }else{
            $('#customer-detail .header-booking .booking').show()
            $('#customer-detail .header-booking .lead').hide()
        }
        $.each(data, function(ix, val) {
            html += '<div class="row">'
            html += '<div id="booking_id" class="col s12 m12 l12 book_id" booking_data_id="'+val.id +'" booking_id="'+val.booking_id+'"><h4><b>#'+val.booking_id+'</h4></b></div>'
            html += '</div>'
            html += '<div class="row">'
            html += '<div class="col s12 m12 l12">'
            html += '<div class="status-2 '+val.status.replace(" ","-") +'">'+val.status +'</div>'
            html += '</div>'
            html += '</div>'

            html += '<div class="row card">'

                html += '<div class="row">'
                if (val.booking_user_name != val.cust_name) {
                    html += '<div class="col s12 m12 l12">'
                    html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="cust_name" type="text" disabled value ="' + val.cust_name + '"class="validate"><label for="cust_name">Company Name</label></div>'
                    html += '</div>'
                }
                html += '<div class="col s12 m12 l6">'
                if (val.booking_user_name == "") {
                    html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="cust_name" type="text" disabled value ="' + val.cust_name + '"class="validate"><label for="cust_name">Name</label></div>'
                } else {
                    html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="cust_name" type="text" disabled value ="' + val.booking_user_name + '"class="validate"><label for="cust_name">Name</label></div>'
                }
                html += '</div>'
                // html += '<div class="col s12 m12 l6">'
                // if (val.booking_user_number == "") {
                //     html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="cust_number" type="text"  disabled value ="' + val.cust_number + '"class="validate"><label for="cust_number">Number</label></div>'
                // } else {
                //     html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="cust_number" type="text"  disabled value ="' + val.booking_user_number + '"class="validate"><label for="cust_number">Number</label></div>'
                // }
                // html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">my_location</i><input id="cust_address" disabled type="text"   value ="' + val.cust_address +', '+val.cust_locality+', '+val.cust_city+ '"class="validate"><label for="cust_address">Address</label></div>'
                html += '</div>'
                // html += '<div class="col s12 m12 l6">'
                // html += '<div class="input-field"><i class="material-icons prefix">location_on</i><input id="cust_locality" disabled  type="text"   value ="' +  val.cust_locality + '"class="validate"><label for="cust_address">Locality</label></div>'
                // html += '</div>'
                // html += '<div class="col s12 m12 l6">'
                // html += '<div class="input-field"><i class="material-icons prefix">business</i><input id="cust_city" type="text" disabled    value ="'  + val.cust_city + '"class="validate"><label for="cust_address">City</label></div>'
                // html += '</div>'
                // html += '<div class="col s12 m12 l6">'
                // html += '<div class="input-field"><i class="material-icons prefix">my_location</i><input id="cust_address" type="text"  disabled value ="' + val.cust_address + ', ' + val.cust_locality + ', ' + val.cust_city + '"class="validate"><label for="cust_address">Address</label></div>'
                // html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_vehicle" type="text" disabled  value ="' + val.cust_make + ' ' + val.cust_model + ' ' + val.cust_fuel_varient + '"class="validate"><label for="cust_vehicle">' + val.cust_vehicle_type + '</label></div>'
                html += '</div>'
                // html += '<div class="col s12 m12 l6">'
                // html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_coupon" type="text" disabled  value ="' + val.coupon + '"class="validate"><label for="cust_coupon">Coupon</label></div>'
                // html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_amount_paid" disabled type="number" value ="' + val.amount_paid + '"class="validate"><label for="cust_amount_paid">Amount Paid</label></div>'
                html += '</div>'
                html += '</div>'
                // html += '<div class="row">'
                // html += '<div class="col s12 m12 l6">'
                // html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="source" type="text" disabled  value ="' + val.source + '"class="validate"><label for="source">Source</label></div>'
                // html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="agent_details" type="text" disabled  value ="' + val.agent_details + '"class="validate"><label for="agent_details">Engineer Details</label></div>'
                html += '</div>'

                 html += '<div class="col s12 m12 l12">'
                    html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date_delivery" type="date" disabled class="datepicker"><label for="date">Date Delivery</label></div>'
                    // html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date" type="date" disabled  value ="' + val.date_booking + '"class="datepicker"><label for="date">Date</label></div>'
                    html += '</div>'
                        html += '<div class="col s6 m6 l6">'
                    html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="driver_pick_name" type="text" disabled value ="' + val.driver_pick_name + '"class="validate"><label for="driver_pick_name">Drive PickUp Name</label></div>'
                    html += '</div>'
                    html += '<div class="col s6 m6 l6">'
                    html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="driver_pick_number" type="number" disabled  value ="' + val.driver_pick_number + '"class="validate"><label for="driver_pick_number">Drive PickUp Number</label></div>'
                    html += '</div>'

                    html += '<div class="col s6 m6 l6">'
                    html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="driver_drop_name" type="text" disabled  value ="' + val.driver_drop_name + '"class="validate"><label for="driver_drop_name">Drive PickUp Name</label></div>'
                    html += '</div>'
                    html += '<div class="col s6 m6 l6">'
                    html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="driver_drop_number" type="number" disabled  value ="' + val.driver_drop_number + '"class="validate"><label for="driver_drop_number">Drive PickUp Number</label></div>'
                    html += '</div>'
                // html += '</div>'

            // if (is_agent)

                // html += '<div class="col s12 m12 l12">'
                // html += '<div class="input-field"><i class="material-icons prefix">email</i><input id="email" disabled type="email" value ="' + val.cust_email + '"class="validate"><label for="email">Email</label></div>'
                // html += '</div>'
                // html += '<div class="col s12 m12 l12">'
                // html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_regnumber" disabled  type="text" value ="' + val.cust_regnumber + '"class="validate" style="text-transform: uppercase;"><label for="cust_regnumber">#Registration</label></div>'
                // html += '</div>'
                // html += '<div class="col s12 m12 l12">'
                // html += '<div class="input-field"><i class="material-icons prefix">av_timer</i><input id="cust_odometer" disabled type="number" value ="' + val.odometer + '"class="validate" ><label for="cust_odometer">#Odometer</label></div>'
                // html += '</div>'

                html += '<div class="col s6 m6 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date" type="date" disabled class="datepicker"><label for="date">Date Booking</label></div>'
                // html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date" type="date" disabled  value ="' + val.date_booking + '"class="datepicker"><label for="date">Date</label></div>'
                html += '</div>'
                html += '<div class="col s6 m6 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="time_booking" type="text" disabled  value ="' + val.time_booking + '"class="validate"><label for="time_booking">Time</label></div>'
                html += '</div>'
                // if (val.booking_flag){
                html += '<div class="col s6 m6 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date_delivery" type="date" disabled class="datepicker"><label for="date">Date Delivery</label></div>'
                // html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date" type="date" disabled  value ="' + val.date_booking + '"class="datepicker"><label for="date">Date</label></div>'
                html += '</div>'

                // html += '<div class="col s12 m12 l12">'
                // html += '<div class="input-field"><i class="material-icons prefix">receipt</i><textarea id="comments" type="text" disabled class="materialize-textarea">' + val.comments + '</textarea><label for="comments">Jobs Summary</label></div>'
                // html += '</div>'
                // html += '<div class="col s12 m12 l12">'
                // html += '<div class="input-field"><i class="material-icons prefix">receipt</i><textarea id="notes" type="text" disabled class="materialize-textarea">' + val.customer_notes + '</textarea><label for="notes">Customer Notes</label></div>'
                // html += '</div>'
                // html += '<div class="col s12 m12 l12">'
                // html += '<b>JOBS SUMMARY</b><br><br>'
                //
                // jobLen = val.job_summary.length;
                // html += '<div class="jobs-list">'
                // for (i = 0; i < jobLen; i++) {
                //     // for (i = 0; i < 2; i++) {
                //     html += '<div class="row job-row">'
                //     html += '<div class="col s12 m12 l12 job-summary-name">'
                //     html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="job_name'+i+'" disabled type="text" value="' + val.job_summary[i]['Job'] + '"><label for="job_name'+i+'">Job - ' + (i+1) +'</label></div>'
                //
                //     // html += val.job_summary[i]['Job']
                //     html += '</div>'
                //     // html += '<div class="col s3 m3 l3 job-summary-price">'
                //     // html += '<div class="input-field"><input id="job_price'+i+'" type="number" disabled value="' + val.job_summary[i]['Price'] + '"><label for="job_price'+i+'">Price - ' + (i+1) +'</label></div>'
                //     // html += '</div>'
                //     // html += '<div class="col s1 m1 l1 centered-text x20">'
                //     // html += '<i class="fa fa-trash-o delete-job"></i>'
                //     // html += '</div>'
                //     html += '</div>'
                // }

            html += '</div>'

            if (val.booking_flag){
                if (val.status == "Confirmed"){
                    for (i = 1; i < 2; i++) {
                        $('.status-change-'+i ).addClass('selected')
                    }
                    for (i = 2; i < 11; i++) {
                        $('.status-change-'+i ).removeClass('selected')
                    }
                }else if(val.status == "Assigned"){
                    for (i = 1; i < 3; i++) {
                        $('.status-change-'+i ).addClass('selected')
                    }
                    for (i = 3; i < 11; i++) {
                        $('.status-change-'+i ).removeClass('selected')
                    }
                }else if(val.status == "Engineer Left"){
                    for (i = 1; i < 4; i++) {
                        $('.status-change-'+i ).addClass('selected')
                    }
                    for (i = 4; i < 11; i++) {
                        $('.status-change-'+i ).removeClass('selected')
                    }
                }else if(val.status == "Reached Workshop"){
                    for (i = 1; i < 5; i++) {
                        $('.status-change-'+i ).addClass('selected')
                    }
                    for (i = 5; i < 11; i++) {
                        $('.status-change-'+i ).removeClass('selected')
                    }
                }else if(val.status == "Estimate Shared"){
                    for (i = 1; i < 6; i++) {
                        $('.status-change-'+i ).addClass('selected')
                    }
                    for (i = 6; i < 11; i++) {
                        $('.status-change-'+i ).removeClass('selected')
                    }
                }else if(val.status == "Job Completed"){
                    for (i = 1; i < 7; i++) {
                        $('.status-change-'+i ).addClass('selected')
                    }
                    for (i = 7; i < 11; i++) {
                        $('.status-change-'+i ).removeClass('selected')
                    }
                }else if(val.status == "Feedback Taken"){
                    for (i = 1; i < 8; i++) {
                        $('.status-change-'+i ).addClass('selected')
                    }
                    for (i = 8; i < 11; i++) {
                        $('.status-change-'+i ).removeClass('selected')
                    }
                }else if(val.status == "Cancelled"){
                    for (i = 1; i < 8; i++) {
                        $('.status-change-'+i ).removeClass('selected')
                    }
                    $('.status-change-8').addClass('selected')
                    $('.status-change-9').removeClass('selected')
                    $('.status-change-10').removeClass('selected')

                }else if(val.status == "Escalation"){
                    for (i = 1; i < 10; i++) {
                        $('.status-change-'+i ).removeClass('selected')
                    }
                    $('.status-change-9').addClass('selected')
                    $('.status-change-10').removeClass('selected')
                }
            }else{
                if (val.status == "Lead"){
                    for (i = 1; i < 2; i++) {
                        $('.status-change-'+i ).addClass('selected')
                    }
                    for (i = 2; i < 7; i++) {
                        $('.status-change-'+i ).removeClass('selected')
                    }
                }else if(val.status == "Cold"){
                    for (i = 1; i < 3; i++) {
                        $('.status-change-'+i ).addClass('selected')
                    }
                    for (i = 3; i < 7; i++) {
                        $('.status-change-'+i ).removeClass('selected')
                    }
                }else if(val.status == "Estimate Required"){
                    for (i = 1; i < 4; i++) {
                        $('.status-change-'+i ).addClass('selected')
                    }
                    for (i = 4; i < 7; i++) {
                        $('.status-change-'+i ).removeClass('selected')
                    }
                }else if(val.status == "Warm"){
                    for (i = 1; i < 5; i++) {
                        $('.status-change-'+i ).addClass('selected')
                    }
                    for (i = 5; i < 7; i++) {
                        $('.status-change-'+i ).removeClass('selected')
                    }
                }else if(val.status == "Confirmed"){
                    for (i = 1; i < 6; i++) {
                        $('.status-change-'+i ).addClass('selected')
                    }
                    for (i = 6; i < 7; i++) {
                        $('.status-change-'+i ).removeClass('selected')
                    }
                }else if(val.status == "Cancelled"){
                    for (i = 1; i < 7; i++) {
                        $('.status-change-'+i ).removeClass('selected')
                    }
                    $('.status-change-6').addClass('selected')
                }

            }
            // <----- New Booking Data---->>



                if (val.status == "Confirmed"){
                    $('#customer-detail .user-button-row-1').show()
                }else{
                    $('#customer-detail .user-button-row-1').hide()
                }

                if (val.status == "Job Completed" || val.status == "Feedback Taken" || val.status == "Cancelled"){
                    $('#customer-detail .user-button-row-2').hide()
                }else{
                    $('#customer-detail .user-button-row-2').show()
                }

                if (val.bill_generation_flag){
                    $('#customer-detail .generated-bill').show()

                }else{
                    $('#customer-detail .generated-bill').hide()
                }







            date_string = val.date_booking

            if (val.delivery_date==null){
                // console.log("1")
                // console.log(val.delivery_date)
                date_delivery_string = val.date_booking
            } else{
                // console.log(val.delivery_date)

                // console.log("2")
                date_delivery_string = val.delivery_date
            }

            date_follow_up = val.follow_up_date
            time_follow_up = val.follow_up_time
        })
        container.html(html);
        try{
            var $input = $('#customer-detail #date.datepicker').pickadate({
                format: 'dd-mm-yyyy',
            })
            var picker = $input.pickadate('picker')
            picker.set('select', date_string, { format: 'dd-mm-yyyy' })
        }catch(e){
        }
        try{
            var $input2 = $('#customer-detail #date_delivery.datepicker').pickadate({
                format: 'dd-mm-yyyy',
                // min: new Date(),
            })
            var picker2 = $input2.pickadate('picker')
            picker2.set('select', date_delivery_string, { format: 'dd-mm-yyyy' })
        }catch(e){
        }
        try{
            var $input3 = $('#customer-detail #date_follow.datepicker').pickadate({
                format: 'dd-mm-yyyy',
                // min: new Date(),
            })
            var picker3 = $input3.pickadate('picker')
            picker3.set('select', date_follow_up, { format: 'dd-mm-yyyy' })
        }catch(e){
        }
        $('#customer-detail #time_follow').timepicker({
            // timeFormat: "h:i A"
            timeFormat: "h:i A",
            minTime: '09:30:00', // 11:45:00 AM,
            maxTime: '20:00:00'
        });
        try {
            $('#customer-detail #time_follow').timepicker('setTime', time_follow_up);
            // console.log(date_de)
        }catch(e){

        }
        // Service Description Data

        TOTAL_ITEM_ESTIMATE = 0;
        var container2 = $('#customer-detail .booking-job-data .pre-data');
        container2.html('');
        html = ''
        TO_SHOW_TOTAL = 0
        // Service Table Start
        $.each(data, function(ix, val) {
            // console.log("Job :" + val.job_completion_flag)
            // console.log("Bill :" + val.bill_generation_flag)
            // console.log("Frozen :" + val.frozen_flag)
            // console.log("Settle :" + val.settlement_flag)

            html += '                               <div class="desc-content col s12 m12 l10 offset-l1">';
            html += '                                   <table class="striped card" id="estimate-table">';
            html += '                                       <thead>';
            html += '                                       <tr>';
            html += '                                           <th data-field="id">S.No.</th>';
            html += '                                           <th data-field="part">Name</th>';
            html += '                                           <th data-field="action">Type</th>';
            // html += '                                            <th data-field="part">Type</th>';
            if (val.estimate_history_len > 1){
                TO_SHOW_TOTAL = 1
                html += '                                           <th data-field="unit" class="">Units</th>';
                html += '                                           <th data-field="unit_price" class="">Unit Price (Rs.)</th>';
                html += '                                           <th data-field="price" class="">Item Price (Rs.)</th>';
            }else{
                 html += '                                           <th data-field="unit" class="invisible">Units</th>';
                html += '                                           <th data-field="unit_price" class="invisible">Unit Price (Rs.)</th>';
                html += '                                           <th data-field="price" class="invisible">Item Price (Rs.)</th>';
            }

            // if (val.req_user_admin || val.req_user_staff || val.req_user_agent){
            html += '                                           <th data-field="part-comment">Comment</th>';
            html += '<th>Status</th>'
            html += '<th>Approve</th>'



                html += '                                           <th data-field="cat-settle" class="invisible">Purchase Price</th>';
                html += '                                           <th data-field="cat-settle" class="invisible">Settlement</th>';

            // }

            html += '                                       </tr>';
            html += '                                       </thead>';
            html += '                                       <tbody>';
            compLen = val.service_items.length;
            // TOTAL_ITEM_ESTIMATE = compLen

            CURRENT_CART_ADMIN = [];
            TOTAL_PRICE_ADMIN = 0;
            TOTAL_LABOUR_ADMIN = 0;
            TOTAL_PARTS_ADMIN = 0;
            TOTAL_DISCOUNT_ADMIN = 0;
            TOTAL_ITEMS_ADMIN = 0;
            ALL_JOBS_ADMIN = "";
            for (i = 0; i < compLen; i++) {
                CURRENT_CART_ADMIN.push({
                    "name": val.service_items[i].name,
                    "price": val.service_items[i].price,
                    "price_comp": val.service_items[i].price_comp,
                    "action": val.service_items[i].action,
                    "type": val.service_items[i].type,
                    "quantity": val.service_items[i].quantity,
                    "settlement_cat":val.service_items[i].settlement_cat
                })
                TOTAL_ITEMS_ADMIN = i + 1
                if (val.service_items[i].type == "Labour") {
                    TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN + parseFloat(val.service_items[i].price)
                    TOTAL_LABOUR_ADMIN = TOTAL_LABOUR_ADMIN + parseFloat(val.service_items[i].price)
                } else if (val.service_items[i].type == "Part" || val.service_items[i].type == "Lube" || val.service_items[i].type == "Consumable") {
                    TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN + parseFloat(val.service_items[i].price)
                    TOTAL_PARTS_ADMIN = TOTAL_PARTS_ADMIN + parseFloat(val.service_items[i].price)
                } else if (val.service_items[i].type == "Discount") {
                    TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN - parseFloat(val.service_items[i].price)
                    TOTAL_DISCOUNT_ADMIN = TOTAL_DISCOUNT_ADMIN + parseFloat(val.service_items[i].price)
                } else {
                    TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN
                }

                item_no = i + 1;
                html += '<tr>';
                // Cell item no.
                html += '<td class="centered-text">' + item_no + '</td>';
                // Part Name
                    html += '<td>' + '<input id="part_name" type="text" disabled class="noborder browser-default" value ="' + val.service_items[i].name + '" aria-required="true">' + '</td>';
                // Part Type
                    html += '<td>' + '<input id="part_type" type="text" disabled class="noborder browser-default" value ="' + val.service_items[i].type + '" aria-required="true">' + '</td>';

                // Price
                   if (val.estimate_history_len > 1){
                    if ( val.service_items[i].quantity==null ||  val.service_items[i].quantity===false || val.service_items[i].quantity=="NA") {
                        html += '<td class="">' + '<input id="part_units" type="number" class="browser-default noborder " disabled  value ="1" aria-required="true">' + '</td>';
                        html += '<td class="">' + '<input id="part_unitprice" type="number" class="browser-default noborder " disabled  value ="' + val.service_items[i].price + '" aria-required="true">' + '</td>';
                        html += '<td class="">' + '<input id="part_price" type="number" class="browser-default noborder " disabled value ="' + val.service_items[i].price  + '" aria-required="true">' + '</td>';

                    }else{
                        html += '<td class="">' + '<input id="part_units" type="number" class="browser-default noborder " disabled  value ="' + val.service_items[i].quantity + '" aria-required="true">' + '</td>';
                        html += '<td class="">' + '<input id="part_unitprice" type="number" class="browser-default noborder " disabled  value ="' + val.service_items[i].unit_price + '" aria-required="true">' + '</td>';
                        html += '<td class="">' + '<input id="part_price" type="number" class="browser-default noborder " disabled value ="' + parseFloat(String(parseFloat(val.service_items[i].quantity) * parseFloat(val.service_items[i].unit_price)))  + '" aria-required="true">' + '</td>';

                    }}else{
                        if ( val.service_items[i].quantity==null ||  val.service_items[i].quantity===false || val.service_items[i].quantity=="NA") {
                        html += '<td class="invisible">' + '<input id="part_units" type="number" class="browser-default noborder " disabled  value ="1" aria-required="true">' + '</td>';
                        html += '<td class="invisible">' + '<input id="part_unitprice" type="number" class="browser-default noborder " disabled  value ="' + val.service_items[i].price + '" aria-required="true">' + '</td>';
                        html += '<td class="invisible">' + '<input id="part_price" type="number" class="browser-default noborder " disabled value ="' + val.service_items[i].price  + '" aria-required="true">' + '</td>';

                    }else{
                        html += '<td class="invisible">' + '<input id="part_units" type="number" class="browser-default noborder " disabled  value ="' + val.service_items[i].quantity + '" aria-required="true">' + '</td>';
                        html += '<td class="invisible">' + '<input id="part_unitprice" type="number" class="browser-default noborder " disabled  value ="' + val.service_items[i].unit_price + '" aria-required="true">' + '</td>';
                        html += '<td class="invisible">' + '<input id="part_price" type="number" class="browser-default noborder " disabled value ="' + parseFloat(String(parseFloat(val.service_items[i].quantity) * parseFloat(val.service_items[i].unit_price)))  + '" aria-required="true">' + '</td>';

                    }
                   }


                // Part Comment

                    if (val.service_items[i].comment==null ||  val.service_items[i].comment===false) {
                        html += '<td>' + '<input id="part_comment" type="text" class="browser-default noborder" disabled aria-required="true">' + '</td>';
                    }else{
                        html += '<td>' + '<input id="part_comment" type="text" class="browser-default noborder" disabled value ="' + val.service_items[i].comment + '" aria-required="true">' + '</td>';
                    }


                // approval status

                    if(val.bill_generation_flag || val.job_completion_flag || val.settlement_flag || val.frozen_flag){
                        if (val.service_items[i].approved==null ||  val.service_items[i].comment===false){
                            html += '<td  class="centered-text"><span class="denied">TBD</span></td>'
                            html += '<td><input type="checkbox" class="filled-in approve-item tochange" disabled  id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'
                        }else{
                            if (val.service_items[i].approved == "Yes"){
                                html += '<td class="centered-text"><span class="approved">Approved</span></td>'
                                html += '<td><input type="checkbox" class="filled-in approve-item" disabled checked="checked" disabled id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'
                            }else{
                                html += '<td class="centered-text"><span class="denied">TBD</span></td>'
                                html += '<td><input type="checkbox" class="filled-in approve-item tochange" disabled id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'
                            }
                        }

                    }else{
                        if (val.service_items[i].approved==null ||  val.service_items[i].comment===false){
                            html += '<td  class="centered-text"><span class="denied">TBD</span></td>'
                            html += '<td><input type="checkbox" class="filled-in approve-item tochange"  id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'
                        }else{
                            if (val.service_items[i].approved == "Yes"){
                                html += '<td class="centered-text"><span class="approved">Approved</span></td>'
                                html += '<td><input type="checkbox" class="filled-in approve-item" disabled checked="checked" id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'
                            }else{
                                html += '<td class="centered-text"><span class="denied">TBD</span></td>'
                                html += '<td><input type="checkbox" class="filled-in approve-item tochange" id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'
                            }
                        }

                    }


                // Settlemet Status

                    if (val.service_items[i].purchase_price==null || val.service_items[i].purchase_price===false) {
                        html += '<td class="invisible"><input id="purchase_price" type="number"  disabled class="browser-default" value ="' + val.service_items[i].price + '" aria-required="true"></td>'
                    }else{
                        html += '<td class="invisible"><input id="purchase_price" type="number" disabled  class="browser-default" value ="' + val.service_items[i].purchase_price + '" aria-required="true"></td>'
                    }
                    html += '<td class="invisible">' + '<input id="settle_type" type="text" disabled class="browser-default" value ="' + val.service_items[i].settlement_cat + '" aria-required="true">' + '</td>';
                // Row Deletion

                html += '                                       </tr>';
            }
            if (val.bill_generation_flag){
                $('#customer-detail .btn-view-bill').attr('data-class',val.bill_file_name)
            }else{
                $('#customer-detail .btn-view-bill').attr('data-class','')
            }

            if (val.bill_generation_flag || val.job_completion_flag || val.settlement_flag || val.frozen_flag){
                $('#customer-detail .btn-additem-est').hide()
                $('#comp_all_select').attr('disabled','')
            }else{
                $('#customer-detail .btn-additem-est').show()
                $('#comp_all_select').removeAttr('disabled')
            }



            if (((val.bill_generation_flag || val.job_completion_flag || val.settlement_flag || val.frozen_flag) && val.req_user_b2b) || ((val.settlement_flag || val.frozen_flag || val.job_completion_flag) && val.req_user_agent) || ((val.settlement_flag || val.frozen_flag) && val.req_user_admin) || ((val.settlement_flag || val.frozen_flag) && val.req_user_staff)){
                $('#customer-detail .btn-update-estimate').hide()
            }else{
                $('#customer-detail .btn-update-estimate').show()
            }

        })
        // Service Table End
        container2.html(html);
        if (TO_SHOW_TOTAL == 1){
            $('#customer-detail .total-amount').text(TOTAL_PRICE_ADMIN)
        }else{
            $('#customer-detail .total-amount').text("TBD")

        }
        // container2.find('select').material_select();
        Materialize.updateTextFields();
        // <div class="id_100">
        container3 = $('#customer-detail .payment-history')
        // container3.html('')
        html4 = ''
        $.each(data,function(ix,val){
            payLen = val.payment_booking.length;
            for (i = 0; i < payLen; i++) {
                html4 += '<div class="card payment-card" data-class="'+val.payment_booking[i]['payment_id']+'">'
                html4 += '<div class="col l8 s8 m8">'
                html4 += '<div class="row">'
                html4 += val.payment_booking[i]['date_collected']
                html4 += '</div>'
                html4 += '<div class="row">'
                html4 += 'Recieved by <b>' +val.payment_booking[i]['collected_by'] +'</b>'
                html4 += '</div>'
                html4 += '<div class="row">'
                html4 += 'Payment Medium :' + val.payment_booking[i]['medium']
                html4 +='</div>'
                html4 +='</div><div class="col l2 s2 m2 centered-text">'
                html4 += 'Rs. ' + val.payment_booking[i]['amount']
                html4 += '</div>'
                html4 += '<div class="col l2 s2 m2 centered-text">'
                html4 += '<i class="fa fa-trash-o x25 delete-transaction"></i>'
                html4 += '</div></div>'
            }

            container3.html(html4)

            $('#customer-detail .payment-summary .total_amount').text(val.price_total)
            $('#customer-detail .payment-summary .total_paid_amount').text(val.amount_paid)
            $('#customer-detail .payment-summary .total_due_amount').text(parseFloat(val.price_total) - parseFloat(val.amount_paid))

        });

    },
    loadCustomerStatus:function(data){
        data_id = $('#customer-detail #booking_id').attr('booking_data_id')
        Global.openbooking_new(data_id)
    },
    updateCart:function(){
        TOTAL_PRICE_ADMIN = 0;
        TOTAL_LABOUR_ADMIN = 0;
        TOTAL_PARTS_ADMIN = 0;
        TOTAL_DISCOUNT_ADMIN = 0;
        TOTAL_ITEMS_ADMIN = 0
        CURRENT_CART_ADMIN = []
        var table = document.getElementById('estimate-table');
        for (var i = 1, row; row = table.rows[i]; i++) {
            TOTAL_ITEMS_ADMIN = i;
            for (var j = 0, col; col = row.cells[j]; j++) {
                if (j == 1) {
                    name_item = $(row.cells[j]).find('input,select').eq(0).val()
                    // console.log(name_item)
                }else if (j == 2) {
                    type_item = $(row.cells[j]).find('input,select').eq(0).val()
                    // console.log(type_item)
                } else if (j == 3) {
                    quantity = $(row.cells[j]).find('input,select').eq(0).val()
                    // console.log(type_item)
                }else if (j == 4) {
                    unit_price = $(row.cells[j]).find('input,select').eq(0).val()
                    // console.log(type_item)
                }else if (j == 5) {
                    price_item = $(row.cells[j]).find('input,select').eq(0).val()
                    // console.log(price_item)
                }else if (j == 6){
                    comment =  $(row.cells[j]).find('input,select').eq(0).val()
                }else if (j == 8){
                    if($(row.cells[j]).find('input,select')[0].checked){
                        approved = "Yes"
                        console.log(approved)
                    }else{
                        approved = "TBD"
                        console.log(approved)
                    }
                }else if (j == 9){
                    purchase_price =  $(row.cells[j]).find('input,select').eq(0).val()
                    if (purchase_price == ""){
                        purchase_price = price_item
                    }
                }else if (j == 10){
                    settlement_cat =  $(row.cells[j]).find('input,select').eq(0).val()
                }
            }
            // }
            if (type_item == "Labour") {
                TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN + parseFloat(price_item)
                TOTAL_LABOUR_ADMIN = TOTAL_LABOUR_ADMIN + parseFloat(price_item)
            } else if (type_item == "Part" || type_item == "Lube" || type_item == "Consumable") {
                TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN + parseFloat(price_item)
                TOTAL_PARTS_ADMIN = TOTAL_PARTS_ADMIN + parseFloat(price_item)
            } else if (type_item == "Discount") {
                TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN - parseFloat(price_item)
                TOTAL_DISCOUNT_ADMIN = TOTAL_DISCOUNT_ADMIN + parseFloat(price_item)
            } else {
                TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN
            }
            cart_item = {
                "name": name_item,
                "price": price_item,
                "type": type_item,
                "settlement_cat":settlement_cat,
                "comment":comment,
                "quantity":quantity,
                "unit_price":unit_price,
                "approved":approved,
                "purchase_price":purchase_price
            }
            if (name_item != ""){
                CURRENT_CART_ADMIN.push(cart_item)
            }else{

            }
        }
    },
    loadCustomerupdate:function(){
        data_id = $('#customer-detail #booking_id').attr('booking_data_id')
        Global.openbooking_new(data_id)
    },
    date_format:function(date_str) {
        dd = date_str.getDate();
        mm = date_str.getMonth() + 1;//January is 0!`
        yyyy = date_str.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        date_new = dd + '-' + mm + '-' + yyyy
        // today = mm+'/'+dd+'/'+yyyy;
        return date_new;
        // console.log(date)
    },
    loadSendbookingAdmin:function(data){
        $('#new-booking #namepoc').val('');
        $('#new-booking #telephonepoc').val('');
        $('#new-booking #odo_number').val('');
        $('#date').val('');
        // var otp = $('#otp').val();
        $('#comment').val('');
        // cookie = local.load();
        // var fuel = $('#select-fuel').find('select').val();
        // console.log()
        $('#reg_number').val('');
        // var coupon = cookie['coupon']
        $('#time-slot').find('select').val('');
        alert('Order Placed!')
    },
    // updateCust_new:function(){
    //     bid = $('#customer-detail #booking_id').attr('booking_id');
    //     email_n = $('#customer-detail #email').val();
    //     reg_n = $('#customer-detail #cust_regnumber').val();
    //     date_n = $('#customer-detail #date').val();
    //     time_n = $('#customer-detail #time_booking').val();
    //     // comment_n = $('#customer-detail #comments').val();
    //     notes_n = $('#customer-detail #notes').val();
    //     amount_paid_n = $('#customer-detail #cust_amount_paid').val()
    //     cust_name = $('#customer-detail #cust_name').val()
    //     cust_number = $('#customer-detail #cust_number').val()
    //     cust_address = $('#customer-detail #cust_address').val()
    //     cust_locality = $('#customer-detail #cust_locality').val()
    //     cust_city = $('#customer-detail #cust_city').val()
    //     source = $('#customer-detail #source').val()
    //     date_del = $('#customer-detail #date_delivery').val()
    //     date_follow = $('#customer-detail #date_follow').val()
    //     time_follow = $('#customer-detail #time_follow').val()
    //     follow_status = $('#customer-detail #status_details_new').val()
    //     odometer = $('#customer-detail #cust_odometer').val()
    //     jobs_summary_list = []
    //     $('#customer-detail .jobs-list .job-row').each(function(){
    //         name = $(this).find('.job-summary-name input').val()
    //         price = $(this).find('.job-summary-price input').val()
    //         if (name != "" && name != " "){
    //             obj = {"Job":name,"Price":price}
    //             jobs_summary_list.push(obj)
    //         }
    //     });
    //
    //
    //     // ALL_JOBS_ADMIN = comment_n
    //     Commons.ajaxData('update_booking', {b_id: bid,
    //         email: email_n,
    //         reg_number: reg_n,
    //         // comment: comment_n,
    //         time: time_n,
    //         date: date_n,
    //         note:notes_n,
    //         name : cust_name,
    //         number : cust_number,
    //         amount_paid : amount_paid_n,
    //         address : cust_address,
    //         locality : cust_locality,
    //         city : cust_city,
    //         source : source,
    //         date_del : date_del,
    //         date_follow:date_follow,
    //         time_follow:time_follow,
    //         follow_status:follow_status,
    //         odometer:odometer,
    //         job_summary : JSON.stringify(jobs_summary_list)
    //     }, "post", Global, Global.loadCustomerupdate,null, '.loading-pane');
    //
    // },
    openbooking_new:function(data_id){
        $('#bookings').hide()
        $('#booking-details').show()
        $('#customer-detail .booking-data').show();
        $('#customer-detail .booking-job-data').hide();
        $('#customer-detail .feedback-data').hide();
        $('#customer-detail .feedback-detail').removeClass('selected')
        $('#customer-detail .service-detail').removeClass('selected')
        $('#customer-detail .cust-detail').addClass('selected')
        Commons.ajaxData('view_all_bookings', {data_id:data_id}, "get", Global, Global.loadBookingData,null, '.loading-pane');
        // Commons.ajaxData('fetch_all_users', {type:"agent"}, "get", Global, Global.loadAgentdata,null, '.loading-pane');
        // Commons.ajaxData('get_all_feedback', {booking_data_id:data_id}, "get", Global, Global.loadFeedback,null, '.loading-pane');
        // var path = window.location.pathname.split('/')
        // var new_path = path.slice(0,3).join('/')+'/single/' + data_id
        // history.pushState({},'',new_path)
    },


};


