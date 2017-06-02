document.onreadystatechange = function () {
    Global.init();
    Login.init();
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

    var viewportWidth = $(window).width();
    if (viewportWidth <= 600) {
        $('.admin-page .navbar').removeClass('vertical-navbar')
        $('.admin-page .navbar li').removeClass('list-modify')
        $('.admin-page .navbar ul').removeClass('list-start')
        $('.admin-page .nav-admin').removeClass('vertical-navbar')
        $('.admin-page section').removeClass('section-vertical-width')
        $('.admin-page .navbar .nav-wrapper').addClass('navbar-custom').removeClass('navbar-custom2')
        // $("#bookings .pre-data").height(a/1.5 - alfa)
        $('.admin-page .navbar .logo-color').show()
        $('.admin-page .navbar .logo-white').hide()

    }else if (viewportWidth <= 992){
        $('.admin-page .navbar').removeClass('vertical-navbar')
        $('.admin-page .navbar li').removeClass('list-modify')
        $('.admin-page .navbar ul').removeClass('list-start')
        $('.admin-page .nav-admin').removeClass('vertical-navbar')
        $('.admin-page section').removeClass('section-vertical-width')
        $('.admin-page .navbar .nav-wrapper').addClass('navbar-custom').removeClass('navbar-custom2')
        $('.admin-page .navbar .logo-color').show()
        $('.admin-page .navbar .logo-white').hide()

        // $("#bookings .pre-data").height(a/1.5 - alfa)
    }else{
        $('.admin-page .navbar').addClass('vertical-navbar')
        $('.admin-page .navbar li').addClass('list-modify')
        $('.admin-page .navbar ul').addClass('list-start')
        $('.admin-page .nav-admin').addClass('vertical-navbar')
        $('.admin-page section').addClass('section-vertical-width')
        $('.admin-page .navbar .nav-wrapper').removeClass('navbar-custom').addClass('navbar-custom2')
        // $("#bookings .pre-data").height(a - alfa)
        $('.admin-page .navbar .logo-color').hide()
        $('.admin-page .navbar .logo-white').show()

    }


});

$(window).resize(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth <= 600) {
        $('.admin-page .navbar').removeClass('vertical-navbar')
        $('.admin-page .navbar li').removeClass('list-modify')
        $('.admin-page .navbar ul').removeClass('list-start')
        $('.admin-page .nav-admin').removeClass('vertical-navbar')
        $('.admin-page section').removeClass('section-vertical-width')
        $('.admin-page .navbar .nav-wrapper').addClass('navbar-custom').removeClass('navbar-custom2')
        $('.admin-page .navbar .logo-color').show()
        $('.admin-page .navbar .logo-white').hide()

    }else if (viewportWidth <= 992){
        $('.admin-page .navbar').removeClass('vertical-navbar')
        $('.admin-page .navbar li').removeClass('list-modify')
        $('.admin-page .navbar ul').removeClass('list-start')
        $('.admin-page .nav-admin').removeClass('vertical-navbar')
        $('.admin-page section').removeClass('section-vertical-width')
        $('.admin-page .navbar .nav-wrapper').addClass('navbar-custom').removeClass('navbar-custom2')
        $('.admin-page .navbar .logo-color').show()
        $('.admin-page .navbar .logo-white').hide()


    }else{
        $('.admin-page .navbar').addClass('vertical-navbar')
        $('.admin-page .navbar li').addClass('list-modify')
        $('.admin-page .navbar ul').addClass('list-start')
        $('.admin-page .nav-admin').addClass('vertical-navbar')
        $('.admin-page section').addClass('section-vertical-width')
        $('.admin-page .navbar .nav-wrapper').removeClass('navbar-custom').addClass('navbar-custom2')
        $('.admin-page .navbar .logo-color').hide()
        $('.admin-page .navbar .logo-white').show()


        // $("#bookings .pre-data").height(a - alfa)

    }
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
$('#time_follow_lead').timepicker({
    timeFormat: "h:i A",
    minTime: '09:30:00', // 11:45:00 AM,
    maxTime: '20:00:00'

});
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
var NUM_JOBS = 0;

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
var VEHICLE_TYPE = ""
var VEHICLE_MAKE = ""
var VEHICLE_MODEL = ""
var VEHICLE_FUEL = ""
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

// Super Admin Code Start
$('#god-view .view-change').click(function(){
    view_type = $(this).attr('data-class')
    if (view_type == "admin"){
        local.save("view_type","Admin")
    }else if(view_type == "staff"){
        local.save("view_type","Staff")
    }else if(view_type == "engineer"){
        local.save("view_type","Engineer")
    }else if(view_type == "b2b"){
        local.save("view_type","B2B")
    }
    location.reload()
})


// Super Admin Code End


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

        $(document).ready(function(){
            date_str = new Date();
            DATE_TYPE2 = _this.date_format(date_str);
            $('#analytics .daily-row #date_summary').val(DATE_TYPE2)

            monLen2 = list_months.length;
            container2 = $('#analytics .month-row #months-list')
            container2.html('')
            html2 = '<option value="" disabled selected>Select Month</option>'

            for (i = 0; i < monLen2; i++) {
                html2 += '<option value="'+list_months[i]+'">'+list_months[i]+'</option>'
            }
            container2.html(html2)
            $('#analytics .month-row #months-list').val(list_months[monLen2-1])


        })

// =====================================================================================
//     Url State Management
// =====================================================================================

        $(document).ready(function() {
            var path = window.location.pathname.split('/')
            if (path[1] == "ezgarage"){
                $('.logochange').attr('src','/../../static/revamp/img/EZgarage.png')
            }else if(path[1]=="adminpanel"){
                $('.logochange').attr('src','/../../static/revamp/img/ClickGarage/logo-color-small1.png')
            }else{
                $('.logochange').attr('src','/../../static/revamp/img/EZgarage.png')

                // console.log(path[1])

            }
            // url_list = window.location.pathname.split('/')
            var sub_page_1      = $('#admin-page-state').attr('sub-page-1')
            var sub_page_2      = $('#admin-page-state').attr('sub-page-2')
            var sub_page_3      = $('#admin-page-state').attr('sub-page-3')
            var data_id         = $('#admin-page-state').attr('data-id')
            checkfilters()

            // console.log(sub_page_1)
            // console.log(sub_page_2)
            // console.log(data_id)


            if (sub_page_1 == "bookings" || typeof(sub_page_1)=="undefined" || sub_page_1 == null || sub_page_1 =="" ){
                // $('.navbar .booking-button').click()
                allbookingsopen()
                if (sub_page_2 == "single"){
                    openbooking(data_id)
                }else{

                }

            }else if(sub_page_1 == "leads"){
                // $('.navbar .lead-button').click()
                allleadsopen()
                if (sub_page_2 == "single"){
                    try {
                        openbooking(data_id)
                    }
                    catch(err){
                    }
                }else{

                }
            }else if(sub_page_1 == "escalations"){
                // $('.navbar .lead-button').click()
                allescalationsopen()
                if (sub_page_2 == "single"){
                    try {
                        openbooking(data_id)
                    }
                    catch(err){
                    }
                }else{

                }
            }else if(sub_page_1 == "subscriptions"){
                // $('.navbar .subscription-button').click()
                allsubscriptionopen()
                if (sub_page_2 == "single"){
                    $('#subscription-detail .single-subscription').click()
                    if (data_id != ""){
                        opensubscription(data_id)
                    }
                }else{


                }

            }else if(sub_page_1 == "settlement"){
                allsettleopen()

            }else if(sub_page_1 == "users"){
                allusersopen()
                // $('.navbar .users-button').click()
                if (sub_page_2 == "single"){
                    $('#user-detail .single-user').click()
                    if (data_id != ""){
                        openuser(data_id)
                    }
                }else{

                }
            }else if(sub_page_1 == "expense"){
                allexpenseopen()
                // $('.navbar .users-button').click()
                if (sub_page_2 == "single"){
                    $('#expense-detail .single-expense').click()
                    if (data_id != ""){
                        openexpense(data_id)
                    }
                }else{

                }
            }else if (sub_page_1 == "coupons"){
                allcouponsopen()
                // $('.navbar .coupon-button').click()
                if (sub_page_2 == "single"){
                    $('#coupon-detail  .single-coupon').click()
                    if (data_id != ""){
                        opencoupon(data_id)
                    }
                }else{

                }

            }else if (sub_page_1 == "bills"){
                // console.log('1')
                allbillsopen()
                // $('.navbar .coupon-button').click()
                if (sub_page_2 == "newbill"){
                    // console.log('2')
                    $('#bill-detail  .single-bill').click()
                    if (data_id != ""){
                        if(sub_page_3 == "pre"){
                            console.log('3')

                            openbillpre(data_id)
                        }else{
                            console.log('4')
                            openbill(data_id)
                        }
                    }
                }else if(sub_page_2=="all"){
                    allbillsopen()

                }else if(sub_page_2 == "pre"){
                    allprebillsopen()

                }else{

                }

            }else if (sub_page_1 == "newbooking"){
                opennewbookings()
                // $('.navbar .new-booking-button').click()
            }else if (sub_page_1 == "newlead"){
                opennewlead()
                // $('.navbar .new-lead-button').click()
            }else if (sub_page_1 == "campaign") {
                opencampaign()
                // $('.navbar .campaign-button').click()
            }else if (sub_page_1 == "analytics") {
                openanalytics()
                // $('.navbar .analytics-button').click()
            }
        });


// =====================================================================================
//     Booking/ Lead Management
// =====================================================================================

        $('#bookings #send_sms').change(function () {
            send_conf =  document.getElementById('send_sms');
            if (send_conf.checked){
                SEND_SMS =    "1"
            }else{
                SEND_SMS ="0"
            }
            console.log(SEND_SMS)
        })
        var checkfilters = function(){
            remove = 0
            if (REG_NUMBER != ""){
                $('#bookings .filter-remove[data-class="registration"]').show()
                remove = 1
            }else{
                $('#bookings .filter-remove[data-class="registration"]').hide()
            }
            if (CUST_NAME != ""){
                $('#bookings .filter-remove[data-class="name"]').show()
                remove = 1
            }else{
                $('#bookings .filter-remove[data-class="name"]').hide()
            }
            if (STATUS_TYPE != "" && STATUS_TYPE != null){
                $('#bookings .filter-remove[data-class="status"]').show()
                remove = 1
            }else{
                $('#bookings .filter-remove[data-class="status"]').hide()
            }
            if (BOOKING_ID != ""){
                $('#bookings .filter-remove[data-class="id"]').show()
                remove = 1
            }else{
                $('#bookings .filter-remove[data-class="id"]').hide()
            }
            if (VEH_TYPE != "" && VEH_TYPE != null){
                $('#bookings .filter-remove[data-class="carbike"]').show()
                remove = 1
            }else{
                $('#bookings .filter-remove[data-class="carbike"]').hide()
            }
            if (PHONE_NUMBER != ""){
                $('#bookings .filter-remove[data-class="phone"]').show()
                remove = 1
            }else{
                $('#bookings .filter-remove[data-class="phone"]').hide()
            }
            if (SOURCE_BOOK != "" && SOURCE_BOOK != null){
                $('#bookings .filter-remove[data-class="source"]').show()
                remove = 1
            }else{
                $('#bookings .filter-remove[data-class="source"]').hide()
            }
            date_str_1 = new Date();
            date_today = _this.date_format(date_str_1);
            date_str_2 = new Date((new Date()).valueOf() + 1000*3600*24);
            date_tomorrow = _this.date_format(date_str_2);
            // $('#bookings #bookings-list').show().removeClass('l12').addClass('l6')
            // $('#bookings #delivery-list').show()
            if (DATE_TYPE != "" && DATE_TYPE != date_today && DATE_TYPE != date_tomorrow){
                $('#bookings .filter-remove[data-class="date_start"]').show()
                remove = 1
            }else{
                $('#bookings .filter-remove[data-class="date_start"]').hide()
            }
            if (DATE_TYPE_END != ""){
                $('#bookings .filter-remove[data-class="date_end"]').show()
                remove = 1
            }else{
                $('#bookings .filter-remove[data-class="date_end"]').hide()
            }
            if (remove == 1){
                $('#bookings .if-filter-selected').show()
            }else{
                $('#bookings .if-filter-selected').hide()
            }
        }
        // Open Bookings
        $('#bookings .btn-loadmorebooking').click(function(){
            if (ESCALATION_FLAG){
                status_marker = "Escalation"
            }else{
                status_marker = STATUS_TYPE
            }

            if (document.body.scrollHeight ==
                document.body.scrollTop +
                window.innerHeight) {
                Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                    lead_booking:LEAD_TYPE,
                    sort:SORT_TYPE,
                    date:DATE_TYPE,
                    status:status_marker,
                    name:CUST_NAME,
                    reg:REG_NUMBER,
                    date_end:DATE_TYPE_END,
                    source_id:SOURCE_BOOK,
                    phone_num:PHONE_NUMBER,
                    veh_type:VEH_TYPE,
                    page_num : PAGE_NUM}, "get", _this, _this.loadBookings2,null, '.loading-pane3');
                if (LEAD_TYPE == "Booking"){
                    Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                        lead_booking:LEAD_TYPE,
                        sort:SORT_TYPE,
                        del_date:DATE_TYPE,
                        status:status_marker,
                        name:CUST_NAME,
                        reg:REG_NUMBER,
                        date_end:DATE_TYPE_END,
                        source_id:SOURCE_BOOK,
                        phone_num:PHONE_NUMBER,
                        veh_type:VEH_TYPE,
                        page_num : PAGE_NUM}, "get", _this, _this.loadDelivery2,null, '.loading-pane3');
                }

            }
        });
        var allbookingsopen = function(){
            PAGE_NUM = 0
            // DATE_TYPE = "";
            // REG_NUMBER = "";
            // CUST_NAME = "";
            // STATUS_TYPE = "";
            // SORT_TYPE = "";
            // BOOKING_ID = "";
            // VEH_TYPE = "";
            // PHONE_NUMBER = "";
            // SOURCE_BOOK = "";
            // DATE_TYPE_END = "";
            //
            ESCALATION_FLAG = false
            $('.navbar li').removeClass('selected')
            $('.navbar .booking-button').addClass('selected')
            checkfilters()
            $('#booking-details').hide();
            $('#bookings').show()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').hide()
            $('#subscription-details').hide()
            $('#campaign-details').hide()
            $('#analytics').hide()
            $('#expense-details').hide();
            $('#bill-details').hide()
            $('#settlement-details').hide()
            $('#Status').find('select').removeAttr('disabled','')


            $('#bookings .lead-filter').hide()


            // $('#bookings .delivery-list').show()
            $('#bookings .booking-filter').show();
            $('#customer-detail .bill-row').show();


            LEAD_TYPE = "Booking"
            if (DATE_TYPE != ""){
                // $('#bookings #bookings-list').show().removeClass('l12').addClass('l6')
                // $('#bookings #bookings-list').show().removeClass('l12').addClass('l6')
                // $('#bookings #delivery-list').show()
            }
            $('#bookings #bookings-list .header-id-bar.bookings').text('Jobs')
            $('#bookings #bookings-list .booking-bar-2 .agent').text('Engineer Details')
            $('#bookings #bookings-list .booking-bar-2 .booking-source').show()


            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                page_num : PAGE_NUM}, "get", _this, _this.loadBookings,null, '.loading-pane');
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                del_date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                page_num : PAGE_NUM}, "get", _this, _this.loadDelivery,null, '.loading-pane');


            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/bookings/all'
            history.pushState({},'',new_path)

        }

        $('.navbar .booking-button').click(allbookingsopen);



        var allescalationsopen = function(){
            PAGE_NUM = 0
            // DATE_TYPE = "";
            // REG_NUMBER = "";
            // CUST_NAME = "";
            // STATUS_TYPE = "";
            // SORT_TYPE = "";
            // BOOKING_ID = "";
            // VEH_TYPE = "";
            // PHONE_NUMBER = "";
            // SOURCE_BOOK = "";
            // DATE_TYPE_END = "";
            //
            ESCALATION_FLAG = true

            $('.navbar li').removeClass('selected')
            $('.navbar .escalation-button').addClass('selected')
            checkfilters()
            $('#booking-details').hide();
            $('#bookings').show()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').hide()
            $('#subscription-details').hide()
            $('#campaign-details').hide()
            $('#analytics').hide()
            $('#expense-details').hide();
            $('#bill-details').hide()
            $('#settlement-details').hide()
            $('#Status').find('select').attr('disabled','')

            $('#bookings .lead-filter').hide()


            // $('#bookings .delivery-list').show()
            $('#bookings .booking-filter').show();
            $('#customer-detail .bill-row').show();


            LEAD_TYPE = "Booking"
            if (DATE_TYPE != ""){
                // $('#bookings #bookings-list').show().removeClass('l12').addClass('l6')
                // $('#bookings #bookings-list').show().removeClass('l12').addClass('l6')
                // $('#bookings #delivery-list').show()
            }
            $('#bookings #bookings-list .header-id-bar.bookings').text('Jobs')
            $('#bookings #bookings-list .booking-bar-2 .agent').text('Engineer Details')
            $('#bookings #bookings-list .booking-bar-2 .booking-source').show()


            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                date:DATE_TYPE,
                escalation_flag:"True",
                // status:"Escalation",
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                page_num : PAGE_NUM}, "get", _this, _this.loadBookings,null, '.loading-pane');
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                del_date:DATE_TYPE,
                escalation_flag:"True",
                // status:"Escalation",
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                page_num : PAGE_NUM}, "get", _this, _this.loadDelivery,null, '.loading-pane');


            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/escalations/all'
            history.pushState({},'',new_path)

        }
        $('.navbar .escalation-button').click(allescalationsopen);
        $('#bookings .booking-bar-1 .downloadcsv').click(function(){
            params = {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                getcsv:"True"}
            var url = Commons.getOrigin()+Commons.URLFromName['view_all_bookings']+'?'+jQuery.param( params )
            $('#download').find('iframe').attr('src',url)

            // console.log('download')
            //     Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
            //     lead_booking:LEAD_TYPE,
            //     sort:SORT_TYPE,
            //     date:DATE_TYPE,
            //     status:STATUS_TYPE,
            //     name:CUST_NAME,
            //     reg:REG_NUMBER,
            //     date_end:DATE_TYPE_END,
            //     source_id:SOURCE_BOOK,
            //     phone_num:PHONE_NUMBER,
            //     veh_type:VEH_TYPE,
            //     getcsv:"True"}, "get", _this, _this.loaddownloadbookings,null, '.loading-pane');

        })
        // Open Lead
        var allleadsopen = function(){
            PAGE_NUM = 0
            // DATE_TYPE = "";
            // REG_NUMBER = "";
            // CUST_NAME = "";
            // STATUS_TYPE = "";
            // SORT_TYPE = "";
            // BOOKING_ID = "";
            // VEH_TYPE = "";
            // PHONE_NUMBER = "";
            // SOURCE_BOOK = "";
            // DATE_TYPE_END = "";
            ESCALATION_FLAG = false
            $('.navbar li').removeClass('selected')
            $('.navbar .lead-button').addClass('selected')
            checkfilters()
            $('#booking-details').hide();
            $('#bookings').show()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').hide()
            $('#subscription-details').hide()
            $('#campaign-details').hide()
            $('#analytics').hide()
            $('#expense-details').hide();
            $('#bill-details').hide()
            $('#settlement-details').hide()
            $('#Status').find('select').removeAttr('disabled','')



            LEAD_TYPE = "Lead"

            $('#bookings #bookings-list .header-id-bar.bookings').text('Leads')
            // $('#bookings #bookings-list').show().removeClass('l6').addClass('l12')
            $('#bookings #bookings-list').show()
            $('#bookings #delivery-list').hide()
            $('#bookings .booking-filter .date-box').removeClass('selected');
            $('#bookings .booking-filter .bookings-filter').addClass('selected');
            $('#bookings #bookings-list .booking-bar-2 .agent').text('Source')
            $('#bookings #bookings-list .booking-bar-2 .booking-source').hide()

            $('#bookings .booking-filter').hide();
            $('#bookings .lead-filter').show()
            $('#customer-detail .bill-row').hide();

            // type = "Lead"
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                page_num : PAGE_NUM}, "get", _this, _this.loadBookings,null, '.loading-pane');

            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/leads/all'
            history.pushState({},'',new_path)
        }
        $('.navbar .lead-button').click(allleadsopen);

        $('#bookings').on('click','.filter-sort.closed',function () {
            $('#bookings .filter-option').show();
            $('#bookings .filter-sort').addClass('open').removeClass('closed');
            $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up')
        });
        $('#bookings').on('click','.filter-sort.open',function () {
            $('#bookings .filter-option').hide();
            $('#bookings .filter-sort').addClass('closed').removeClass('open');
            $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down')

        });

        $('#booking-details').on('change','#brand-cust',function(){
            vehicle_make_new = $(this).val()
            Commons.ajaxData('get_make_model', {make_id: vehicle_make_new, vehicle_type: VEHICLE_TYPE}, "get", _this, _this.loadModelsBooking);

        })

        DATE_TYPE = _this.date_format( new Date());

        //Filtering/ Date Selection
        $('#bookings .date-filter .date-box').click(function(){
            PAGE_NUM = 0
            $('#filterdate').val('');
            $('#bookings .date-filter .date-box').removeClass('selected');
            $(this).addClass('selected');
            date = $(this).attr('data-class')
            // console.log(date)
            // console.log(date)
            $('#bookings #bookings-list').removeClass('l6')
            date_str = new Date();
            DATE_TYPE = _this.date_format(date_str);
            if (date=="Today"){
                // console.log(date)
                date_str = new Date();
                DATE_TYPE = _this.date_format(date_str);
                // $('#bookings #bookings-list').show().removeClass('l12').addClass('l6')
                // $('#bookings #delivery-list').show()
                if (LEAD_TYPE == "Lead"){
                    $('#bookings #delivery-list').hide()
                    // $('#bookings #bookings-list').show().removeClass('l6').addClass('l12')
                }
            }else if (date == "Tomorrow"){
                // console.log(date)
                date_str = new Date((new Date()).valueOf() + 1000*3600*24);
                DATE_TYPE = _this.date_format(date_str);
                // $('#bookings #bookings-list').show().removeClass('l12').addClass('l6')
                // $('#bookings #delivery-list').show()
                if (LEAD_TYPE == "Lead"){
                    $('#bookings #delivery-list').hide()
                    // $('#bookings #bookings-list').show().removeClass('l6').addClass('l12')
                }
            }else{
                // console.log(date)
                DATE_TYPE = "";
                // $('#bookings #bookings-list').show().removeClass('l6').addClass('l12')
                // $('#bookings #delivery-list').hide()

            }
            // console.log(DATE_TYPE)
            if (ESCALATION_FLAG){
                status_marker = "Escalation"
            }else{
                status_marker = STATUS_TYPE
            }
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                date:DATE_TYPE,
                status:status_marker,
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                page_num : PAGE_NUM}, "get", _this, _this.loadBookings,null, '.loading-pane');
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                del_date:DATE_TYPE,
                status:status_marker,
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                page_num : PAGE_NUM}, "get", _this, _this.loadDelivery,null, '.loading-pane');

        })

        $('#bookings .booking-filter .date-box').click(function(){
            $('#bookings .booking-filter .date-box').removeClass('selected');
            $(this).addClass('selected');
            toshow = $(this).attr('data-class')

            if (toshow=="Delivery"){
                $('#bookings #bookings-list').hide()
                $('#bookings #delivery-list').show()

            }else{
                $('#bookings #bookings-list').show()
                $('#bookings #delivery-list').hide()

            }
        })

        $('#bookings  .btn-apply-filter').click(function(){
            PAGE_NUM = 0
            date_selected = $('#bookings #filterdate').val();
            if (LEAD_TYPE == "Lead") {
                status_selected = $('#bookings  #Status').find('.lead-filter').val();
            }else{
                status_selected = $('#bookings  #Status').find('.booking-filter').val();
            }
            veh_type_selected = $('#bookings  #Vehicle_type').find('select').val();;
            name_selected =  $('#bookings  #custname').val();
            id_selected =  $('#bookings  #booking_id').val();
            reg_selected =  $('#bookings  #regnumber').val();

            phone_selected = $('#bookings #book_number').val();
            source_selected = $('#bookings #Source').find('select').val()
            end_date = $('#bookings #filterdate_end').val()

            console.log(date_selected);
            console.log(status_selected);
            console.log(veh_type_selected);
            console.log(name_selected);
            console.log(id_selected);
            console.log(reg_selected);
            if (date_selected != ""){
                DATE_TYPE = date_selected
                $('#bookings .date-filter .date-box').removeClass('selected');
            }
            if (status_selected != ""){
                STATUS_TYPE = status_selected
            }
            if (veh_type_selected != ""){
                VEH_TYPE = veh_type_selected
            }
            if (name_selected != ""){
                CUST_NAME = name_selected
            }
            if (id_selected != ""){
                BOOKING_ID = id_selected
            }
            if (reg_selected != ""){
                REG_NUMBER = reg_selected
            }
            if (phone_selected != ""){
                PHONE_NUMBER = phone_selected
            }
            if (source_selected != ""){
                SOURCE_BOOK = source_selected
            }

            if (end_date != ""){
                DATE_TYPE_END = end_date
            }
            checkfilters()
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                page_num : PAGE_NUM}, "get", _this, _this.loadBookings,null, '.loading-pane');
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                del_date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                page_num : PAGE_NUM}, "get", _this, _this.loadDelivery,null, '.loading-pane');

            $('#bookings .filter-option').hide();
            $('#bookings .filter-sort').addClass('closed').removeClass('open');

        })

        $('#bookings  .btn-remove-filter').click(function(){
            PAGE_NUM = 0
            $('#bookings #filterdate').val('');
            $('#bookings  #Status').find('select').val('');
            $('#bookings  #Vehicle_type').find('select').val('');
            $('#bookings  #custname').val('');
            $('#bookings  #booking_id').val('');
            $('#bookings  #regnumber').val('');
            $('#bookings #book_number').val('');
            $('#bookings #Source').find('select').val('')
            $('#bookings #filterdate_end').val('')

            DATE_TYPE = _this.date_format( new Date());
            REG_NUMBER = "";
            CUST_NAME = "";
            STATUS_TYPE = "";
            SORT_TYPE = "";
            BOOKING_ID = "";
            VEH_TYPE = "";
            PHONE_NUMBER = "";
            SOURCE_BOOK = "";
            DATE_TYPE_END = "";
            checkfilters()
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                page_num : PAGE_NUM}, "get", _this, _this.loadBookings,null, '.loading-pane');
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                del_date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                page_num : PAGE_NUM}, "get", _this, _this.loadDelivery,null, '.loading-pane');

            $('#bookings .date-filter .date-box').removeClass('selected');
            $('#bookings .date-filter .date-box.today').addClass('selected');
        });

        $('#bookings .filter-remove').click(function(){
            PAGE_NUM = 0
            if ($(this).attr('data-class')== "registration"){
                $('#bookings  #regnumber').val('');
                REG_NUMBER = "";

            }else if($(this).attr('data-class')== "name"){
                $('#bookings  #custname').val('');
                CUST_NAME = "";

            }else if($(this).attr('data-class')== "status"){
                $('#bookings  #Status').find('select').val('');
                STATUS_TYPE = "";

            }else if($(this).attr('data-class')== "id"){
                $('#bookings  #booking_id').val('');
                BOOKING_ID = "";

            }else if($(this).attr('data-class')== "carbike"){
                $('#bookings  #Vehicle_type').find('select').val('');
                VEH_TYPE = "";

            }else if($(this).attr('data-class')== "phone"){
                $('#bookings #book_number').val('');
                PHONE_NUMBER = "";

            }else if($(this).attr('data-class')== "source"){
                $('#bookings #Source').find('select').val('')
                SOURCE_BOOK = "";
            }else if($(this).attr('data-class')== "date_start"){
                $('#bookings #filterdate').val('');
                DATE_TYPE = _this.date_format( new Date());
                $('#bookings .date-filter .date-box').removeClass('selected');
                $('#bookings .date-filter .date-box.today').addClass('selected');

            }else if($(this).attr('data-class')== "date_end"){
                $('#bookings #filterdate_end').val('')
                DATE_TYPE_END = "";

            }
            checkfilters()
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                page_num : PAGE_NUM}, "get", _this, _this.loadBookings,null, '.loading-pane');
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                del_date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                page_num : PAGE_NUM}, "get", _this, _this.loadDelivery,null, '.loading-pane');
        })

        $('#bookings #sort').change(function(){
            PAGE_NUM = 0
            SORT_TYPE = $('#bookings  #sort').find('select').val();
            console.log(SORT_TYPE)
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                page_num : PAGE_NUM}, "get", _this, _this.loadBookings,null, '.loading-pane');
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                del_date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                date_end:DATE_TYPE_END,
                source_id:SOURCE_BOOK,
                phone_num:PHONE_NUMBER,
                veh_type:VEH_TYPE,
                page_num : PAGE_NUM}, "get", _this, _this.loadDelivery,null, '.loading-pane');

        })

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
            Commons.ajaxData('fetch_all_users', {type:"agent"}, "get", _this, _this.loadAgentdata,null, '.loading-pane');
            Commons.ajaxData('get_all_feedback', {booking_data_id:data_id}, "get", _this, _this.loadFeedback,null, '.loading-pane');
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/single/' + data_id
            history.pushState({},'',new_path)


        }


        $('#bookings .pre-data').on('click','.booking ',function(event,data){
            bid =$(this).attr('data-class')
            openbooking(bid)
        });

        // Switch between estimate and details in a booking
        $('#customer-detail .cust-detail').click(function(){
            $('#customer-detail .booking-data').show();
            $('#customer-detail .booking-job-data').hide();
            $('#customer-detail .feedback-data').hide();
            $('#customer-detail .booking-job-card').hide();

            $('#customer-detail .service-detail').removeClass('selected')
            $('#customer-detail .feedback-detail').removeClass('selected')
            $('#customer-detail .cust-detail').addClass('selected')
            $('#customer-detail .job-card-detail').removeClass('selected')

        });
        $('#customer-detail .service-detail').click(function(){
            $('#customer-detail .booking-data').hide();
            $('#customer-detail .booking-job-data').show();
            $('#customer-detail .feedback-data').hide();
            $('#customer-detail .booking-job-card').hide();

            $('#customer-detail .feedback-detail').removeClass('selected')
            $('#customer-detail .cust-detail').removeClass('selected')
            $('#customer-detail .service-detail').addClass('selected')
            $('#customer-detail .job-card-detail').removeClass('selected')

        });
        $('#customer-detail .feedback-detail').click(function(){
            $('#customer-detail .booking-data').hide();
            $('#customer-detail .booking-job-data').hide();
            $('#customer-detail .feedback-data').show();
            $('#customer-detail .booking-job-card').hide();

            $('#customer-detail .feedback-detail').addClass('selected')
            $('#customer-detail .cust-detail').removeClass('selected')
            $('#customer-detail .service-detail').removeClass('selected')
            $('#customer-detail .job-card-detail').removeClass('selected')

        });
        $('#customer-detail .job-card-detail').click(function(){
            $('#customer-detail .booking-data').hide();
            $('#customer-detail .booking-job-data').hide();
            $('#customer-detail .feedback-data').hide();
            $('#customer-detail .booking-job-card').show();

            $('#customer-detail .feedback-detail').removeClass('selected')
            $('#customer-detail .cust-detail').removeClass('selected')
            $('#customer-detail .service-detail').removeClass('selected')
            $('#customer-detail .job-card-detail').addClass('selected')
        });


        $('#customer-detail').on('click','.btn-addjob',function(){
            container_parent = $('#customer-detail .jobs-list.request')
            html = ''
            html += '<div class="row job-row" data-class="Request">'
            html += '<div class="col s5 m7 l7 job-summary-name">'
            html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="job_name-'+ (NUM_JOBS+1) +'"  type="text" value=""><label for="job_name-'+ (NUM_JOBS+1) +'" >Job</label></div>'
            html += '</div>'

            html += '<div class="col s2 m1 l1 job-summary-pre centered-text">'
            html += '<input type="radio" name="groupok' + (NUM_JOBS + 1) + '" id="pre-ok-'+ (NUM_JOBS+1) +'" /><label for="pre-ok-'+ (NUM_JOBS+1) +'"></label>'
            html += '</div>'
            html += '<div class="col s2 m1 l1 job-summary-pre centered-text">'
            html += '<input type="radio" name="groupok' + (NUM_JOBS + 1) + '" id="pre-notok-'+ (NUM_JOBS+1) +'" /><label for="pre-notok-'+ (NUM_JOBS+1) +'"></label>'
            html += '</div>'

            html += '<div class="col s2 m1 l1 job-summary-post centered-text">'
            html += '<input type="radio"  name="groupnotok' + (NUM_JOBS + 1)  +'" id="post-ok-'+ (NUM_JOBS+1) +'" /><label for="post-ok-'+ (NUM_JOBS+1) +'"></label>'
            html += '</div>'

            html += '<div class="col s2 m1 l1 job-summary-post centered-text">'
            html += '<input type="radio" name="groupnotok' + (NUM_JOBS + 1)  +'"  id="post-notok-'+ (NUM_JOBS+1) +'" /><label for="post-notok-'+ (NUM_JOBS+1) +'"></label>'
            html += '</div>'

            html += '<div class="col s1 m1 l1 centered-text x20">'
            html += '<i class="fa fa-trash-o delete-job"></i>'
            html += '</div>'

            html += '</div>'
            NUM_JOBS = NUM_JOBS + 1;
            // var row = $('#customer-detail .job-row.to-copy').clone()
            // row.removeClass('invisible').removeClass('to-copy')
            container_parent.append(html)


        })

        $('#customer-detail').on('click','.delete-job',function(){
            container = $(this).closest('.job-row').remove()
            // var row = $('#customer-detail .job-row.to-copy').clone()
            // row.removeClass('invisible').removeClass('to-copy')
            // container_parent.append(row)
        })

        $('#customer-detail .add-item .btn-additem-est').click(function(){
            container_parent = $('#customer-detail #estimate-table').find('tbody')
            var row = container_parent.find('tr').eq(0).clone();
            container_parent.append(row)

            TOTAL_ITEMS_ADMIN += 1;
            row.find('td:eq(0)').text(TOTAL_ITEMS_ADMIN)
            row.find('td:eq(1) input').val('')
            row.find('td:eq(3) input').val('')
            row.find('td:eq(4) input').val('')
            row.find('td:eq(5) input').val('')
            row.find('td:eq(6) input').val('')
            row.find('td:eq(7)').html('')
            row.find('td:eq(8) input').removeAttr('checked', this.checked)
            row.find('td:eq(9) input').val('')
            return
        });
        $('#customer-detail .btn-update-send-estimate').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            _this.updateCart()
            console.log(CURRENT_CART_ADMIN)
            estimate = JSON.stringify(CURRENT_CART_ADMIN)
            Commons.ajaxData('update_estimate', {b_id: bid,
                estimate: estimate,
            }, "post", _this, _this.loadCustomershareestimate,null, '.loading-pane');
        });

        $('#customer-detail .btn-send-bill').click(function(){
            bid =$('#customer-detail #booking_id').attr('booking_data_id')
            Commons.ajaxData('send_booking_bill_estimate', {data_id:bid,bill_estimate:"Bill"}, "get", _this, _this.loadBillSent,null, '.loading-pane');
        });



        $('#customer-detail').on('keyup click','table',function(e,event,data){
            TOTAL_PRICE_ADMIN = 0;
            TOTAL_LABOUR_ADMIN = 0;
            TOTAL_PARTS_ADMIN = 0;
            TOTAL_DISCOUNT_ADMIN = 0;


            var table = document.getElementById('estimate-table');
            // units = $(this).closest('tr').find('#part_units').eq(0).val()
            // unit_price = $(this).closest('tr').find('#part_unitprice').eq(0).val()
            // console.log(units)
            // console.log(unit_price)
            // part_total_price = $(this).closest('tr').find('#part_units').val() * $(this).closest('tr').find('#part_unitprice').val();

            // $(this).closest('tr').find('#part_price').val(part_total_price)
            for (var i = 1, row; row = table.rows[i]; i++) {
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
                        price_item = unit_price * quantity;
                        $(row.cells[j]).find('input,select').eq(0).val(price_item)
                        // console.log(price_item)
                    }else if (j == 6){
                        comment =  $(row.cells[j]).find('input,select').eq(0).val()
                    }else if (j == 8){
                        if($(row.cells[j]).find('input,select')[0].checked){
                            approved = "Yes"
                            // console.log(approved)
                        }else{
                            approved = "TBD"
                            // console.log(approved)
                        }
                    }else if (j == 9){
                        settlement_cat =  $(row.cells[j]).find('input,select').eq(0).val()
                    }
                }


                if (type_item == "Labour") {
                    TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN + parseFloat(price_item)
                    TOTAL_LABOUR_ADMIN = TOTAL_LABOUR_ADMIN + parseFloat(price_item)
                } else if (type_item == "Part" ||  type_item == "Lube" || type_item == "Consumable") {
                    TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN + parseFloat(price_item)
                    TOTAL_PARTS_ADMIN = TOTAL_PARTS_ADMIN + parseFloat(price_item)
                } else if (type_item == "Discount") {
                    TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN - parseFloat(price_item)
                    TOTAL_DISCOUNT_ADMIN = TOTAL_DISCOUNT_ADMIN + parseFloat(price_item)
                } else {
                    TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN
                }
                $('#customer-detail .total-amount').text(TOTAL_PRICE_ADMIN)

            }
        });

        $('#customer-detail #comp_all_select').click(function(){
            active_box =  document.getElementById('comp_all_select');
            // console.log(active_box.checked)
            if (active_box.checked){
                $('#customer-detail .approve-item.tochange').prop('checked', this.checked)
            }else{
                $('#customer-detail .approve-item.tochange').removeAttr('checked', this.checked)
            }
        })

        $('#customer-detail').on('click',' #estimate-table .delete',function(){
            TOTAL_PRICE_ADMIN = 0;
            $(this).closest('tr').remove()
            TOTAL_ITEMS_ADMIN -= 1;
            var table = document.getElementById('estimate-table');
            for (var i = 1, row; row = table.rows[i]; i++) {
                for (var j = 0, col; col = row.cells[j]; j++) {
                    if (j == 0) {
                        $(row.cells[j]).text(i)
                        // console.log(name_item)
                    }if (j == 1) {
                        name_item = $(row.cells[j]).find('input,select').eq(0).val()
                        // console.log(name_item)
                    } else if (j == 2) {
                        type_item = $(row.cells[j]).find('input,select').eq(0).val()
                        // console.log(type_item)
                    } else if (j == 3) {
                        price_item = $(row.cells[j]).find('input,select').eq(0).val()
                        // console.log(price_item)
                    } else if (j == 4){
                        settlement_cat =  $(row.cells[j]).find('input,select').eq(0).val()
                    }
                }
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
            }
            $('#customer-detail .total-amount').text(TOTAL_PRICE_ADMIN)
        });

        // - update-customer-booking

        var update_cust = function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            email_n = $('#customer-detail #email').val();
            reg_n = $('#customer-detail #cust_regnumber').val();
            date_n = $('#customer-detail #date').val();
            time_n = $('#customer-detail #time_booking').val();
            // comment_n = $('#customer-detail #comments').val();
            notes_n = $('#customer-detail #notes').val();
            amount_paid_n = $('#customer-detail #cust_amount_paid').val()
            cust_name = $('#customer-detail #cust_name').val()
            cust_number = $('#customer-detail #cust_number').val()
            cust_address = $('#customer-detail #cust_address').val()
            cust_locality = $('#customer-detail #cust_locality').val()
            cust_city = $('#customer-detail #cust_city').val()
            source = $('#customer-detail #source').val()
            date_del = $('#customer-detail #date_delivery').val()
            date_follow = $('#customer-detail #date_follow').val()
            time_follow = $('#customer-detail #time_follow').val()
            follow_status = $('#customer-detail #status_details_new').val()
            odometer = $('#customer-detail #cust_odometer').val()
            escalation_reason = $('#customer-detail #escalation_reason').val()
            escalation_resolution = $('#customer-detail #escalation_resolution').val()
            driver_pick_name = $('#customer-detail #driver_pick_name').val()
            driver_pick_number = $('#customer-detail #driver_pick_number').val()
            driver_drop_name = $('#customer-detail #driver_drop_name').val()
            driver_drop_number = $('#customer-detail #driver_drop_number').val()
            try{
                make = $('#brand-cust').val()
                model = $('#make-cust').val()
                fuel_start = model.indexOf("(")
                fuel_end = model.indexOf(")")
                fuel =model.substr(fuel_start+1,fuel_end-fuel_start-1)
                model = model.substr(0,fuel_start-1)

            }catch(e){
                make = ""
                model = ""
                fuel = ""
            }
            // ALL_JOBS_ADMIN = comment_n
            jobs_summary_list = []
            $('#customer-detail .jobs-list .job-row').each(function(){
                name = $(this).find('.job-summary-name input').val()
                preok = $(this).find('.job-summary-pre-ok input').is(':checked');
                prenotok = $(this).find('.job-summary-pre-notok input').is(':checked');

                postok = $(this).find('.job-summary-post-ok input').is(':checked');
                postnotok = $(this).find('.job-summary-post-notok input').is(':checked');
                type_check = $(this).attr('data-class')

                price = 0

                if (name != "" && name != " "){
                    obj = {"Job":name,"Preok":preok,"Prenotok":prenotok,"Postok":postok,"Postnotok":postnotok,"Price":price,"Type":type_check}
                    jobs_summary_list.push(obj)

                }
            });

            Commons.ajaxData('update_booking', {b_id: bid,
                email: email_n,
                reg_number: reg_n,
                // comment: comment_n,
                time: time_n,
                date: date_n,
                note:notes_n,
                name : cust_name,
                number : cust_number,
                amount_paid : amount_paid_n,
                address : cust_address,
                locality : cust_locality,
                city : cust_city,
                source : source,
                date_del : date_del,
                date_follow:date_follow,
                time_follow:time_follow,
                follow_status:follow_status,
                driver_pick_name:driver_pick_name,
                driver_pick_number:driver_pick_number,
                driver_drop_name:driver_drop_name,
                driver_drop_number:driver_drop_number,
                make:make,
                model:model,
                fuel:fuel,

                odometer:odometer,
                job_summary:JSON.stringify(jobs_summary_list),
                es_reason:escalation_reason,
                es_resolution:escalation_resolution,
            }, "post", _this, _this.loadCustomerupdate,null, '.loading-pane');

        }
        var update_cust2 = function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            email_n = $('#customer-detail #email').val();
            reg_n = $('#customer-detail #cust_regnumber').val();
            date_n = $('#customer-detail #date').val();
            time_n = $('#customer-detail #time_booking').val();
            // comment_n = $('#customer-detail #comments').val();
            notes_n = $('#customer-detail #notes').val();
            amount_paid_n = $('#customer-detail #cust_amount_paid').val()
            cust_name = $('#customer-detail #cust_name').val()
            cust_number = $('#customer-detail #cust_number').val()
            cust_address = $('#customer-detail #cust_address').val()
            cust_locality = $('#customer-detail #cust_locality').val()
            cust_city = $('#customer-detail #cust_city').val()
            source = $('#customer-detail #source').val()
            date_del = $('#customer-detail #date_delivery').val()
            date_follow = $('#customer-detail #date_follow').val()
            time_follow = $('#customer-detail #time_follow').val()
            follow_status = $('#customer-detail #status_details_new').val()
            odometer = $('#customer-detail #cust_odometer').val()
            escalation_reason = $('#customer-detail #escalation_reason').val()
            escalation_resolution = $('#customer-detail #escalation_resolution').val()
            driver_pick_name = $('#customer-detail #driver_pick_name').val()
            driver_pick_number = $('#customer-detail #driver_pick_number').val()
            driver_drop_name = $('#customer-detail #driver_drop_name').val()
            driver_drop_number = $('#customer-detail #driver_drop_number').val()
            try{
                make = $('#brand-cust').val()
                model = $('#make-cust').val()
                fuel_start = model.indexOf("(")
                fuel_end = model.indexOf(")")
                fuel =model.substr(fuel_start+1,fuel_end-fuel_start-1)
                model = model.substr(0,fuel_start-1)

            }catch(e){
                make = ""
                model = ""
                fuel = ""
            }
            // ALL_JOBS_ADMIN = comment_n
            jobs_summary_list = []
           $('#customer-detail .jobs-list .job-row').each(function(){
                name = $(this).find('.job-summary-name input').val()
                preok = $(this).find('.job-summary-pre-ok input').is(':checked');
                prenotok = $(this).find('.job-summary-pre-notok input').is(':checked');

                postok = $(this).find('.job-summary-post-ok input').is(':checked');
                postnotok = $(this).find('.job-summary-post-notok input').is(':checked');
                type_check = $(this).attr('data-class')

                price = 0

                if (name != "" && name != " "){
                    obj = {"Job":name,"Preok":preok,"Prenotok":prenotok,"Postok":postok,"Postnotok":postnotok,"Price":price,"Type":type_check}
                    jobs_summary_list.push(obj)

                }
            });


            Commons.ajaxData('update_booking', {b_id: bid,
                email: email_n,
                reg_number: reg_n,
                // comment: comment_n,
                time: time_n,
                date: date_n,
                note:notes_n,
                name : cust_name,
                number : cust_number,
                amount_paid : amount_paid_n,
                address : cust_address,
                locality : cust_locality,
                city : cust_city,
                source : source,
                date_del : date_del,
                date_follow:date_follow,
                time_follow:time_follow,
                follow_status:follow_status,
                odometer:odometer,
                job_summary:JSON.stringify(jobs_summary_list),
                es_reason:escalation_reason,
                es_resolution:escalation_resolution,
                driver_pick_name:driver_pick_name,
                driver_pick_number:driver_pick_number,
                driver_drop_name:driver_drop_name,
                driver_drop_number:driver_drop_number,
                make:make,
                model:model,
                fuel:fuel,
            }, "post", _this, _this.loadCustomerupdate2,null, '.loading-pane');

        }


        $('#customer-detail').on('click','.btn-callcustomer',function(){
            cust_number = $('#customer-detail #cust_number').val()
            Commons.ajaxData('call_customer', {cust_no: cust_number
            }, "post", _this, _this.loadCallCustomer,null, '.loading-pane');

        })
        $('#customer-detail .btn-update-cust').click(update_cust);
        $('#customer-detail .btn-update-cust2').click(update_cust2);


        $('#customer-detail').on('click','.btn-modifypayement',function(){
            $('#customer-detail .booking-payment-card').show()
            $('#cover2').show()
            $('#payment_amount').val('')
            // $('#payment_collector').val('')
        });

        $('#customer-detail .btn-closebillmod').click(function(){
            $('#customer-detail .booking-payment-card').hide()
            $('#cover2').hide()
        });


        $('#booking_amount_pending').change(function (){
            console.log('1')
            pending_amt =  document.getElementById('booking_amount_pending');
            amount = $('#customer-detail .total_due_amount').text()
            if (pending_amt.checked){
                $('#payment_amount').val(parseFloat(amount))
                document.getElementById("payment_amount").disabled = true;
                // $('#').attr('disabled')
            }else{
                $('#payment_amount').val(0)
                document.getElementById("payment_amount").disabled = false;
            }
            Materialize.updateTextFields();
            // console.log(pending_amt)
        })
        $('#customer-detail .btn-addpayment').click(function(){
            amount = $('#payment_amount').val()
            col_by = $('#payment_collector').val()
            medium = $('#payment_medium').val()
            bid =$('#customer-detail #booking_id').attr('booking_data_id')
            error = 0
            if (amount <= 0 ){
                error = 1;
                $('#payment_amount').addClass("invalid");
            }
            if (col_by == "" || col_by == null){
                error =1;
                $('#payment_collector').addClass('invalid-select-box')
            }
            if (medium == "" || medium == null){
                error =1;
                $('#payment_medium').addClass('invalid-select-box')
            }
            if (error == 1){
                return
            }else{
                Commons.ajaxData('add_delete_payment', {
                    data_id : bid,
                    col_by : col_by,
                    amount : amount,
                    medium : medium,
                    add_del : "Add"
                }, "get", _this, _this.loadCustomerAgent,null, '.loading-pane');

            }
        });
        $('#customer-detail .payment-history').on('click','.payment-card .delete-transaction',function(){
            bid =$('#customer-detail #booking_id').attr('booking_data_id')
            payment_id = $(this).closest('.payment-card').attr('data-class')
            Commons.ajaxData('add_delete_payment', {
                data_id : bid,
                payment_id : payment_id,
                add_del : "Delete"
            }, "get", _this, _this.loadCustomerAgent,null, '.loading-pane');
        })

        $('#customer-detail').on('click','.btn-send-sms',function(){
            $('#customer-detail .sms-card').show()
            $('#cover2').show()
        });

        $('#customer-detail .btn-closesms').click(function(){
            $('#customer-detail .sms-card').hide()
            $('#cover2').hide()
        });

        $('#customer-detail .btn-sendsms').click(function () {
            bid =$('#customer-detail #booking_id').attr('booking_data_id')
            message = $('#customer-detail #sms_text').val()
            Commons.ajaxData('send_sms_customer', {
                data_id : bid,
                message : message
            }, "get", _this, _this.loadSMSSent,null, '.loading-pane');

        })


        // - update-estimate
        $('#customer-detail .btn-update-estimate').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            _this.updateCart()
            console.log(CURRENT_CART_ADMIN)
            estimate = JSON.stringify(CURRENT_CART_ADMIN)
            Commons.ajaxData('update_estimate', {b_id: bid,
                estimate: estimate,
            }, "post", _this, _this.loadCustomerestimate,null, '.loading-pane');
        });


        $('#customer-detail .btn-view-generate-bill').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            b_data_id = $('#customer-detail #booking_id').attr('booking_data_id');

            _this.updateCart()
            console.log(CURRENT_CART_ADMIN)
            estimate = JSON.stringify(CURRENT_CART_ADMIN)
            Commons.ajaxData('update_estimate', {b_id: bid,
                estimate: estimate,
            }, "post", _this, _this.loadCustomerestimate,null, '.loading-pane');
            window.open(
                window.location.pathname.split('/')[0] +'/' + window.location.pathname.split('/')[1] + '/bills/newbill/' + b_data_id +'/new'
            );
        });

        $('#customer-detail .btn-view-bill').click(function(){
            console.log('Downloaded')
            file_name = $(this).attr('data-class')
            params = {file_name: file_name}
            var url = Commons.getOrigin()+Commons.URLFromName['download_pdf']+'?'+jQuery.param( params )
            $('#download').find('iframe').attr('src',url)
            // bid = $('#customer-detail #booking_id').attr('booking_id');
            // b_data_id = $('#customer-detail #booking_id').attr('booking_data_id');
            // window.open(
            //     window.location.pathname.split('/')[0] + '/bills/old/' + b_data_id + '#print'
            // );
        });

        // Update-Agent
        $('#customer-detail .btn-update-agent').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            agent_n = $('#agent-select').find('option:selected').val()
            Commons.ajaxData('update_agent', {b_id: bid,
                agent_id: agent_n,
                // email: email_n,
                // reg_number: reg_n,
                // comment: comment_n,
                // estimate: estimate,
                // time: time_n,
                // date: date_n,
            }, "post", _this, _this.loadCustomerAgent,null, '.loading-pane');
        });
        // change-status
        $('#customer-detail .staff-button-row .confirm-row .btn-update-status').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            status_n = $('#status-select').find('option:selected').val()
            console.log("Status Update")
            Commons.ajaxData('change_status', {b_id: bid,
                status_id: status_n, send_sms : SEND_SMS
            }, "post", _this, _this.loadCustomerStatus,null, '.loading-pane');
        });



        var changestatus_booking = function(bid,status_n){
            data_id = $('#customer-detail #booking_id').attr('booking_data_id')
            Commons.ajaxData('change_status', {b_id: bid,
                status_id: status_n, send_sms : SEND_SMS
            }, "get", _this, _this.loadCustomerStatus,null, '.loading-pane');

            if (status_n == "Acknowledged"){
                for (i = 1; i < 2; i++) {
                    $('.status-change-'+i ).addClass('selected')
                }
                for (i = 2; i < 11; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
            }else if(status_n == "Assigned"){
                for (i = 1; i < 3; i++) {
                    $('.status-change-'+i ).addClass('selected')
                }
                for (i = 3; i < 11; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
            }else if(status_n == "Engineer Left"){
                for (i = 1; i < 4; i++) {
                    $('.status-change-'+i ).addClass('selected')
                }
                for (i = 4; i < 11; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
            }else if(status_n == "Reached Workshop"){
                for (i = 1; i < 5; i++) {
                    $('.status-change-'+i ).addClass('selected')
                }
                for (i = 5; i < 11; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
            }else if(status_n == "Estimate Shared"){
                for (i = 1; i < 6; i++) {
                    $('.status-change-'+i ).addClass('selected')
                }
                for (i = 6; i < 11; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
            }else if(status_n == "Job Completed"){
                for (i = 1; i < 7; i++) {
                    $('.status-change-'+i ).addClass('selected')
                }
                for (i = 7; i < 11; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
            }else if(status_n == "Feedback Taken"){
                for (i = 1; i < 8; i++) {
                    $('.status-change-'+i ).addClass('selected')
                }
                for (i = 8; i < 11; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
            }else if(status_n == "Cancelled"){
                for (i = 1; i < 8; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
                $('.status-change-8').addClass('selected')
                $('.status-change-9').removeClass('selected')
                $('.status-change-10').removeClass('selected')


            }else if(status_n == "Escalation"){
                for (i = 1; i < 9; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
                $('.status-change-9').addClass('selected')
                $('.status-change-10').removeClass('selected')
            }else if(status_n == "Lead"){
                for (i = 1; i < 10; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
                $('.status-change-10').addClass('selected')
            }else if(status_n == "Confirmed"){
                for (i = 1; i < 11; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
            }
            // data_id = $('#customer-detail #booking_id').attr('booking_data_id')

            // setTimeout(function(){
            //           openbooking(data_id)
            //         }, 1000);

        }


        var changestatus_lead = function(bid,status_n){
            data_id = $('#customer-detail #booking_id').attr('booking_data_id')
            variable_pass = _this
            Commons.ajaxData('change_status', {b_id: bid,
                status_id: status_n, send_sms : SEND_SMS
            }, "get", _this, _this.loadCustomerStatus,null, '.loading-pane');

            if (status_n == "Lead"){
                for (i = 1; i < 2; i++) {
                    $('.status-change-'+i ).addClass('selected')
                }
                for (i = 2; i < 7; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
            }else if(status_n == "Cold"){
                for (i = 1; i < 3; i++) {
                    $('.status-change-'+i ).addClass('selected')
                }
                for (i = 3; i < 7; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
            }else if(status_n == "Estimate Required"){
                for (i = 1; i < 4; i++) {
                    $('.status-change-'+i ).addClass('selected')
                }
                for (i = 4; i < 7; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
            }else if(status_n == "Warm"){
                for (i = 1; i < 5; i++) {
                    $('.status-change-'+i ).addClass('selected')
                }
                for (i = 5; i < 7; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
            }else if(status_n == "Confirmed"){
                for (i = 1; i < 6; i++) {
                    $('.status-change-'+i ).addClass('selected')
                }
                for (i = 6; i < 7; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
            }else if(status_n == "Cancelled"){
                for (i = 1; i < 7; i++) {
                    $('.status-change-'+i ).removeClass('selected')
                }
                $('.status-change-6').addClass('selected')
            }

        }



        $('#customer-detail .confirm-row .circle-status.changestatus').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            status_n = $(this).attr('data-class')
            // $(this).addClass('selected')
            changestatus_booking(bid,status_n)

        });

        $('#customer-detail .confirm-row .circle-status2.changestatus').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            status_n = $(this).attr('data-class')
            $(this).addClass('selected')
            changestatus_booking(bid,status_n)
        });

        $('#customer-detail .lead-row .circle-status.changestatus').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            status_n = $(this).attr('data-class')
            // $(this).addClass('selected')
            changestatus_lead(bid,status_n)

        });

        $('#customer-detail .lead-row .circle-status2.changestatus').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            status_n = $(this).attr('data-class')
            $(this).addClass('selected')
            changestatus_lead(bid,status_n)
        });


        $('#customer-detail .agent-button-row .btn-update-status').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            status_n = $(this).attr('status_next')
            Commons.ajaxData('change_status', {b_id: bid,
                status_id: status_n, send_sms : SEND_SMS
            }, "post", _this, _this.loadCustomerStatus,null, '.loading-pane');
        });

        $('#customer-detail .b2b-button-row .btn-update-status').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            status_n = $(this).attr('status_next')
            Commons.ajaxData('change_status', {b_id: bid,
                status_id: status_n, send_sms : SEND_SMS
            }, "post", _this, _this.loadCustomerStatus,null, '.loading-pane');
        });


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

        $('#customer-detail .staff-button-row .lead-row .btn-update-status').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            status_n = $(this).attr('status_next')
            Commons.ajaxData('change_status', {b_id: bid,
                status_id: status_n,  send_sms : SEND_SMS
            }, "post", _this, _this.loadCustomerStatus,null, '.loading-pane');
        });


        $('#customer-detail .btn-update-feedback-1').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_data_id');

            pick_on_time_yes =  document.getElementById('pick_on_time_yes').checked;
            pick_on_time_no =  document.getElementById('pick_on_time_no').checked;

            if (pick_on_time_yes == true){
                pick_on_time = "Yes"
            }else if(pick_on_time_no == true){
                pick_on_time = "No"
            }else{
                pick_on_time = "Unanswered"
            }

            delivery_on_time_yes =  document.getElementById('delivery_on_time_yes').checked;
            delivery_on_time_no =  document.getElementById('delivery_on_time_no').checked;

            if (delivery_on_time_yes ==true){
                delivery_on_time = "Yes"
            }else if(delivery_on_time_no == true){
                delivery_on_time = "No"
            }else{
                delivery_on_time = "Unanswered"
            }

            courteous_yes =  document.getElementById('courteous_yes').checked;
            courteous_no =  document.getElementById('courteous_no').checked;
            if (courteous_yes ==true){
                courteous = "Yes"
            }else if(courteous_no == true){
                courteous = "No"
            }else{
                courteous = "Unanswered"
            }

            washing_1 =  document.getElementById('washing_1').checked;
            washing_2 =  document.getElementById('washing_2').checked;
            washing_3 =  document.getElementById('washing_3').checked;
            washing_4 =  document.getElementById('washing_4').checked;
            washing_5 =  document.getElementById('washing_5').checked;
            washing_6 =  document.getElementById('washing_6').checked;
            washing_7 =  document.getElementById('washing_7').checked;
            washing_8 =  document.getElementById('washing_8').checked;
            washing_9 =  document.getElementById('washing_9').checked;
            washing_10 =  document.getElementById('washing_10').checked;

            if (washing_1 == true){washing = 1}
            else if(washing_2==true){washing =2}
            else if(washing_3==true){washing =3}
            else if(washing_4==true){washing =4}
            else if(washing_5==true){washing =5}
            else if(washing_6==true){washing =6}
            else if(washing_7==true){washing =7}
            else if(washing_8==true){washing =8}
            else if(washing_9==true){washing =9}
            else if(washing_10==true){washing =10}
            else{washing = "Unanswered"}

            Commons.ajaxData('send_feedback', {booking_data_id: bid,
                pick_on_time: pick_on_time,
                delivery_on_time: delivery_on_time,
                courteous: courteous,
                washing:washing,
                feedback_type:"1"
            }, "post", _this, _this.loadCustomerFeedback,null, '.loading-pane');


        })

        $('#customer-detail .btn-update-feedback-2').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_data_id');

            quality_of_service_1 =  document.getElementById('quality_of_service_1').checked;
            quality_of_service_2 =  document.getElementById('quality_of_service_2').checked;
            quality_of_service_3 =  document.getElementById('quality_of_service_3').checked;
            quality_of_service_4 =  document.getElementById('quality_of_service_4').checked;
            quality_of_service_5 =  document.getElementById('quality_of_service_5').checked;
            quality_of_service_6 =  document.getElementById('quality_of_service_6').checked;
            quality_of_service_7 =  document.getElementById('quality_of_service_7').checked;
            quality_of_service_8 =  document.getElementById('quality_of_service_8').checked;
            quality_of_service_9 =  document.getElementById('quality_of_service_9').checked;
            quality_of_service_10 =  document.getElementById('quality_of_service_10').checked;

            if (quality_of_service_1 == true){quality_of_service = 1}
            else if(quality_of_service_2==true){quality_of_service =2}
            else if(quality_of_service_3==true){quality_of_service =3}
            else if(quality_of_service_4==true){quality_of_service =4}
            else if(quality_of_service_5==true){quality_of_service =5}
            else if(quality_of_service_6==true){quality_of_service =6}
            else if(quality_of_service_7==true){quality_of_service =7}
            else if(quality_of_service_8==true){quality_of_service =8}
            else if(quality_of_service_9==true){quality_of_service =9}
            else if(quality_of_service_10==true){quality_of_service =10}
            else{quality_of_service = "Unanswered"}

            experience_1 =  document.getElementById('experience_1').checked;
            experience_2 =  document.getElementById('experience_2').checked;
            experience_3 =  document.getElementById('experience_3').checked;
            experience_4 =  document.getElementById('experience_4').checked;
            experience_5 =  document.getElementById('experience_5').checked;
            experience_6 =  document.getElementById('experience_6').checked;
            experience_7 =  document.getElementById('experience_7').checked;
            experience_8 =  document.getElementById('experience_8').checked;
            experience_9 =  document.getElementById('experience_9').checked;
            experience_10 =  document.getElementById('experience_10').checked;

            if (experience_1 == true){experience = 1}
            else if(experience_2==true){experience =2}
            else if(experience_3==true){experience =3}
            else if(experience_4==true){experience =4}
            else if(experience_5==true){experience =5}
            else if(experience_6==true){experience =6}
            else if(experience_7==true){experience =7}
            else if(experience_8==true){experience =8}
            else if(experience_9==true){experience =9}
            else if(experience_10==true){experience =10}
            else{experience = "Unanswered"}

            recommend_factor_1 =  document.getElementById('recommend_factor_1').checked;
            recommend_factor_2 =  document.getElementById('recommend_factor_2').checked;
            recommend_factor_3 =  document.getElementById('recommend_factor_3').checked;
            recommend_factor_4 =  document.getElementById('recommend_factor_4').checked;
            recommend_factor_5 =  document.getElementById('recommend_factor_5').checked;
            recommend_factor_6 =  document.getElementById('recommend_factor_6').checked;
            recommend_factor_7 =  document.getElementById('recommend_factor_7').checked;
            recommend_factor_8 =  document.getElementById('recommend_factor_8').checked;
            recommend_factor_9 =  document.getElementById('recommend_factor_9').checked;
            recommend_factor_10 =  document.getElementById('recommend_factor_10').checked;

            if (recommend_factor_1 == true){recommend_factor = 1}
            else if(recommend_factor_2==true){recommend_factor =2}
            else if(recommend_factor_3==true){recommend_factor =3}
            else if(recommend_factor_4==true){recommend_factor =4}
            else if(recommend_factor_5==true){recommend_factor =5}
            else if(recommend_factor_6==true){recommend_factor =6}
            else if(recommend_factor_7==true){recommend_factor =7}
            else if(recommend_factor_8==true){recommend_factor =8}
            else if(recommend_factor_9==true){recommend_factor =9}
            else if(recommend_factor_10==true){recommend_factor =10}
            else{recommend_factor = "Unanswered"}

            additional = $('#additional').val()

            Commons.ajaxData('send_feedback', {booking_data_id: bid,
                additional: additional,
                quality_of_service: quality_of_service,
                experience: experience,
                recommend_factor:recommend_factor,
                feedback_type:"2"
            }, "post", _this, _this.loadCustomerFeedback,null, '.loading-pane');


        })
// =====================================================================================
//     Subscription Management
// =====================================================================================


        // -- Load Subscription
        var allsubscriptionopen = function(){
            // console.log('check')
            $('.navbar li').removeClass('selected')
            $('.navbar .subscription-button').addClass('selected')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#subscription-details').show()
            $('#new-booking').hide()
            $('#campaign-details').hide()
            $('#analytics').hide()
            $('#expense-details').hide();
            $('#bill-details').hide()
            $('#settlement-details').hide()




            $('#subscription-detail .subscription-list').show()
            $('#subscription-detail .subscription-add-mod').hide()
            Commons.ajaxData('view_all_subscription', {}, "get", _this, _this.loadSubscriptionAll,null, '.loading-pane');

            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/subscriptions/all'
            history.pushState({},'',new_path)
        };
        $('.navbar .subscription-button').click(allsubscriptionopen);
        // -- Load Make
        var callBrands2 = function(){
            veh_type                = $('#sub_veh_type').find('select').val()
            console.log(veh_type)
            if (veh_type == "Car"){
                $('.make-model-prefix').removeClass('fa-motorcycle').addClass('fa-car')
            }else{
                $('.make-model-prefix').removeClass('fa-car').addClass('fa-motorcycle')
            }

            Commons.ajaxData('get_type_make', {vehicle_type: veh_type}, "get", _this, _this.loadBrands2);

        }
        $('#subscription-detail #sub_veh_type').change(callBrands2)
        // --- Load Models
        $('#subscription-detail #sub_veh_make').change(function(){
            veh_type                = $('#sub_veh_type').find('select').val()
            veh_make                = $('#sub_veh_make').find('select').val()

            console.log(veh_type)
            Commons.ajaxData('get_make_model', {make_id: veh_make, vehicle_type: veh_type}, "get", _this, _this.loadModels2);
        })

        //     - ADD Subscription
        $('#subscription-detail .submit-rsa').click(function(){
            sub_id                  = $('#sub_id').val()
            cust_fname              = $('#firstname').val()
            cust_lname              = $('#lastname').val()
            cust_num_p              = $('#sub_telephone').val()
            cust_num_s              = $('#sub_alt_telephone').val()
            cust_email              = $('#sub_email').val()
            cust_add                = $('#sub_address').val()
            cust_loc                = $('#sub_locality').val()
            cust_city               = $('#sub_city').val()
            cust_state              = $('#sub_state').find('select').val()
            make                    = $('#sub_veh_make').find('select').val()
            veh_type                = $('#sub_veh_type').find('select').val()
            model                   = $('#sub_veh_model').find('select').val()

            fuel_start              = model.indexOf("(")
            fuel_end                = model.indexOf(")")
            fuel                    = model.substr(fuel_start+1,fuel_end-fuel_start-1)
            model                   = model.substr(0,fuel_start-1)

            vehicle_vin             = $('#sub_vin_number').val()
            vehicle_regno           = $('#sub_reg_number').val()

            sub_type                = $('#sub_category').val()
            pack_name               = $('#sub_package_name').val()
            comment                 = $('#sub_comment').val()

            date_veh_purchase       = $('#sub_veh_date_purchase').val();
            date_start              = $('#sub_date_start').val();
            date_end                = $('#sub_date_end').val();

            active_box              =  document.getElementById('policy_active');
            pol_active              = active_box.checked
            status = $('#sub_status').find('select').val()
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
                $('#sub_address').addClass("invalid");
                error = 1;
            }
            if(cust_loc==""){
                $('#sub_locality').addClass("invalid");
                error = 1;
            }
            if(cust_city==""){
                $('#sub_city').addClass("invalid");
                error = 1;
            }
            if(cust_state==""){
                $('#sub_state').addClass("invalid");
                error = 1;
            }
            if(make == "" || model == "" ||make == "Make" || model == "Model" ) {
                $('#choose-vehicle-error').text('Please select vehicle');
                error = 1;
            }

            if(cust_num_p <= 100000000 || cust_num_p >= 9999999999){
                $('#sub_telephone').addClass("invalid");
                error = 1;
            }

            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cust_email)){
                $('#sub_email').addClass("valid");
                // error = 1;
            }else{
                $('#sub_email').addClass("invalid");
                error =1;
            }
            if(vehicle_vin==""){
                $('#sub_vin_number').addClass("invalid");
                error = 1;
            }
            if(vehicle_regno==""){
                $('#sub_reg_number').addClass("invalid");
                error = 1;
            }
            if(date_veh_purchase==""){
                $('#sub_date_purchase').addClass("invalid");
                error = 1;
            }
            if(date_start==""){
                $('#sub_date_start').addClass("invalid");
                error = 1;
            }
            if(date_end==""){
                $('#sub_date_end').addClass("invalid");
                error = 1;
            }
            if(sub_type==""){
                $('#sub_category').addClass("invalid");
                error = 1;
            }
            if(pack_name==""){
                $('#sub_package_name').addClass("invalid");
                error = 1;
            }


            if(error==1){
                return;
            }else{

                Commons.ajaxData('add_modify_subscription', {
                    sub_id          : sub_id,
                    cust_fname      :cust_fname           ,
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
                    comment              :comment              ,
                    date_start           :date_start    ,
                    date_end             :date_end    ,
                    is_active            :pol_active    ,
                    status : status

                }, "get", _this, _this.loadSubscriptionModify);


            }
        });
        // -- Modify Subscription

        var opensubscription = function(data_id){
            $('#subscription-detail .subscription-list').hide()
            $('#subscription-detail .subscription-add-mod').show()
            $('#subscription-detail  .all-subscription').removeClass('selected')
            $('#subscription-detail  .single-subscription').addClass('selected')
            Commons.ajaxData('view_all_subscription', {subs_id:subscription_id}, "get", _this, _this.loadSubscription,null, '.loading-pane');

            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/single/' + data_id
            history.pushState({},'',new_path)
        };

        $('#subscription-detail .subscription-list').on('click','.modify-btn',function(){
            subscription_id = $(this).closest('tr').attr('data-class')
            // console.log(subscription_id)
            opensubscription(subscription_id)

        });
        // -- Switch between list and add/modify in a Subscription
        $('#subscription-detail .all-subscription').click(function(){
            $('#subscription-detail .subscription-list').show();
            $('#subscription-detail  .subscription-add-mod').hide();
            $('#subscription-detail  .single-subscription').removeClass('selected')
            $('#subscription-detail  .all-subscription').addClass('selected')
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/all/'
            history.pushState({},'',new_path)
        });

        $('#subscription-detail .single-subscription').click(function(){
            $('#subscription-detail .subscription-list').hide();
            $('#subscription-detail  .subscription-add-mod').show();
            $('#subscription-detail  .all-subscription').removeClass('selected')
            $('#subscription-detail  .single-subscription').addClass('selected')
            $('#sub_id').val('')
            $('#firstname').val('')
            $('#lastname').val('')
            $('#sub_telephone').val('')
            $('#sub_alt_telephone').val('')
            $('#sub_email').val('')
            $('#sub_address').val('')
            $('#sub_locality').val('')
            $('#sub_city').val('')
            $('#sub_state').find('select').val('')
            $('#sub_veh_type').find('select').val('')
            $('#sub_veh_make').find('select').val('')
            $('#sub_veh_model').find('select').val('')
            $('#sub_vin_number').val('')
            $('#sub_reg_number').val('')
            $('#sub_category').val('')
            $('#sub_package_name').val('')
            $('#sub_comment').val('')
            $('#sub_veh_date_purchase').val('');
            $('#sub_date_start').val('');
            $('#sub_date_end').val('');
            $('#sub_status').val('Under Review');
            document.getElementById("policy_active").checked = false;
            Materialize.updateTextFields();
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/single/'
            history.pushState({},'',new_path)
        });

// =====================================================================================
//    Settlement Management
// =====================================================================================
        // -- Load Coupon
        var allsettleopen = function(){
            $('.navbar li').removeClass('selected')
            $('.navbar .settlement-button').addClass('selected')
            // console.log('check')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').hide()
            $('#subscription-details').hide()
            $('#campaign-details').hide()
            $('#analytics').hide()
            $('#expense-details').hide()
            $('#bill-details').hide()
            $('#settlement-details').show()
            $('#settlement-detail  .summary-settle').click()
            Commons.ajaxData('fetch_all_users', {type:"agent"}, "get", _this, _this.loadAgentdata2,null, '.loading-pane');
            Commons.ajaxData('view_all_bookings', {cg_book:"True",complete_flag:"True"}, "get", _this, _this.loadSettle,null, '.loading-pane');
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/settlement'
            history.pushState({},'',new_path)
        };
        $('.navbar .settlement-button').click(allsettleopen);

        $('#settlement-detail .btn-selectengineer').click(function(){
            agent = $('#settlement-detail #agent-list-settle').val();
            console.log(agent);
            Commons.ajaxData('view_all_bookings', {agent_id : agent,cg_book:"True",complete_flag:"True"}, "get", _this, _this.loadSettle,null, '.loading-pane');
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/settlement'
            history.pushState({},'',new_path)
        })

        $('#settlement-detail .summary-settle').click(function(){
            $('#settlement-detail .summary-settle-div').show();
            $('#settlement-detail  .list-settle-div').hide();
            $('#settlement-detail  .all-settle').removeClass('selected')
            $('#settlement-detail  .summary-settle').addClass('selected')
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/summary/'
            history.pushState({},'',new_path)
        });

        $('#settlement-detail .all-settle').click(function(){
            $('#settlement-detail .summary-settle-div').hide();
            $('#settlement-detail  .list-settle-div').show();
            $('#settlement-detail  .all-settle').addClass('selected')
            $('#settlement-detail  .summary-settle').removeClass('selected')
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/all/'
            history.pushState({},'',new_path)
        });

        $('#settlement-detail .btn-downloadsummary').click(function(){
            agent = $('#settlement-detail #agent-list-settle').val();
            params = {agent_id : agent,
                cg_book:"True",
                complete_flag:"True",
                getcsv2:"True"}
            var url = Commons.getOrigin()+Commons.URLFromName['view_all_bookings']+'?'+jQuery.param( params )
            $('#download').find('iframe').attr('src',url)
        })

        $('#settlement-detail').on('click','table input.freeze',function(){
            data_id = $(this).closest('tr').attr('data-class')
            part_comm = $(this).closest('tr').find('.part-comm').val()
            labour_comm = $(this).closest('tr').find('.labour-comm').val()
            lube_comm = $(this).closest('tr').find('.lube-comm').val()
            consumable_comm = $(this).closest('tr').find('.consumable-comm').val()
            vas_comm = $(this).closest('tr').find('.vas-comm').val()
            denting_comm = $(this).closest('tr').find('.denting-comm').val()
            freeze_status = this.checked
            if (freeze_status){
                $(this).closest('tr').find('.part-comm').attr('disabled','')
                $(this).closest('tr').find('.labour-comm').attr('disabled','')
                $(this).closest('tr').find('.lube-comm').attr('disabled','')
                $(this).closest('tr').find('.consumable-comm').attr('disabled','')
                $(this).closest('tr').find('.vas-comm').attr('disabled','')
                $(this).closest('tr').find('.denting-comm').attr('disabled','')
                Commons.ajaxData('settle_freeze_booking', {data_id : data_id,
                    part_share:part_comm,
                    labour_share:labour_comm,
                    vas_share:vas_comm,
                    lube_share:lube_comm,
                    consumable_share:consumable_comm,
                    denting_share:denting_comm,
                    to_do:"Freeze"}, "get", _this, _this.loadfreezesettleclick,null, '.loading-pane');


            }else{
                Commons.ajaxData('settle_freeze_booking', {data_id : data_id,
                    // part_share:part_comm,
                    // labour_share:labour_comm,
                    // vas_share:vas_comm,
                    // lube_share:lube_comm,
                    // consumable_share:consumable_comm,
                    // denting_share:denting_comm,
                    to_do:"Unfreeze"}, "get", _this, _this.loadfreezesettleclick,null, '.loading-pane');

                $(this).closest('tr').find('.part-comm').removeAttr('disabled','')
                $(this).closest('tr').find('.labour-comm').removeAttr('disabled','')
                $(this).closest('tr').find('.lube-comm').removeAttr('disabled','')
                $(this).closest('tr').find('.consumable-comm').removeAttr('disabled','')
                $(this).closest('tr').find('.vas-comm').removeAttr('disabled','')
                $(this).closest('tr').find('.denting-comm').removeAttr('disabled','')
            }


        })

        $('#settlement-detail').on('click','table input.settle',function(){
            data_id = $(this).closest('tr').attr('data-class')
            part_comm = $(this).closest('tr').find('.part-comm').val()
            labour_comm = $(this).closest('tr').find('.labour-comm').val()
            lube_comm = $(this).closest('tr').find('.lube-comm').val()
            consumable_comm = $(this).closest('tr').find('.consumable-comm').val()
            vas_comm = $(this).closest('tr').find('.vas-comm').val()
            denting_comm = $(this).closest('tr').find('.denting-comm').val()
            settle_status = this.checked
            if (settle_status){
                $(this).closest('tr').find('.part-comm').attr('disabled','')
                $(this).closest('tr').find('.labour-comm').attr('disabled','')
                $(this).closest('tr').find('.lube-comm').attr('disabled','')
                $(this).closest('tr').find('.consumable-comm').attr('disabled','')
                $(this).closest('tr').find('.vas-comm').attr('disabled','')
                $(this).closest('tr').find('.denting-comm').attr('disabled','')
                freeze_id = $(this).attr('data-class')
                console.log(freeze_id)
                document.getElementById(freeze_id).checked = true;
                Commons.ajaxData('settle_freeze_booking', {data_id : data_id,
                    part_share:part_comm,
                    labour_share:labour_comm,
                    vas_share:vas_comm,
                    lube_share:lube_comm,
                    consumable_share:consumable_comm,
                    denting_share:denting_comm,
                    to_do:"Settle"}, "get", _this, _this.loadfreezesettleclick,null, '.loading-pane');

            }else{
                Commons.ajaxData('settle_freeze_booking', {data_id : data_id,
                    // part_share:part_comm,
                    // labour_share:labour_comm,
                    // vas_share:vas_comm,
                    // lube_share:lube_comm,
                    // consumable_share:consumable_comm,
                    // denting_share:denting_comm,
                    to_do:"Unsettle"}, "get", _this, _this.loadfreezesettleclick,null, '.loading-pane');

                // $(this).closest('tr').find('.part-comm').removeAttr('disabled','')
                // $(this).closest('tr').find('.labour-comm').removeAttr('disabled','')
                // $(this).closest('tr').find('.lube-comm').removeAttr('disabled','')
                // $(this).closest('tr').find('.consumable-comm').removeAttr('disabled','')
                // $(this).closest('tr').find('.vas-comm').removeAttr('disabled','')
                // $(this).closest('tr').find('.denting-comm').removeAttr('disabled','')
            }

        })

        $('#settlement-detail').on('keyup click','input',function(){
            part_comm = $(this).closest('tr').find('.part-comm').val()
            labour_comm = $(this).closest('tr').find('.labour-comm').val()
            lube_comm = $(this).closest('tr').find('.lube-comm').val()
            consumable_comm = $(this).closest('tr').find('.consumable-comm').val()
            vas_comm = $(this).closest('tr').find('.vas-comm').val()
            denting_comm = $(this).closest('tr').find('.denting-comm').val()
            total = parseFloat(part_comm) + parseFloat(labour_comm) + parseFloat(lube_comm) + parseFloat(consumable_comm) + parseFloat(vas_comm) + parseFloat(denting_comm)
            $(this).closest('tr').find('.total-comm').val(total)
        })
// =====================================================================================
//    Coupon Management
// =====================================================================================
        // -- Load Coupon
        var allcouponsopen = function(){
            $('.navbar li').removeClass('selected')
            $('.navbar .coupon-button').addClass('selected')
            // console.log('check')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#coupon-details').show()
            $('#new-booking').hide()
            $('#subscription-details').hide()
            $('#campaign-details').hide()
            $('#analytics').hide()
            $('#expense-details').hide()
            $('#bill-details').hide()
            $('#settlement-details').hide()



            $('#coupon-detail  .all-coupon').click()
            Commons.ajaxData('view_all_coupons', {}, "get", _this, _this.loadCouponAll,null, '.loading-pane');
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/coupons/all'
            history.pushState({},'',new_path)
        };
        $('.navbar .coupon-button').click(allcouponsopen);
        //     - ADD Coupon
        $('#coupon-detail .add-coupon').click(function(){
            coupon_code = $('#coupon-detail #coup_name').val()
            coupon_start = $('#coupon-detail #start_date').val()
            coupon_end = $('#coupon-detail #end_date').val()
            coup_veh_type = $('#coupon-detail #coup_veh_type').find('option:selected').val()
            coup_cat_type = $('#coupon-detail #coup_cat').find('option:selected').val()
            coup_type = $('#coupon-detail #coup_type').find('option:selected').val()
            coup_val = $('#coupon-detail #coup_value').val()
            coup_cap = $('#coupon-detail #coup_cap').val()
            coup_message = $('#coupon-detail #coup_message').val()
            active_box =  document.getElementById('coupon_active');
            coup_active = active_box.checked
            // console.log(coupon_code  )
            // console.log(coupon_start )
            // console.log(coupon_end   )
            // console.log(coup_veh_type)
            // console.log(coup_cat_type)
            // console.log(coup_type    )
            // console.log(coup_message    )
            // console.log(coup_val     )
            // console.log(coup_cap     )

            error =0
            if(coupon_code==""){
                $('#coupon-detail #coup_name').addClass("invalid");
                error = 1;
            }
            if(coupon_start==""){
                $('#coupon-detail #start_date').addClass("invalid");
                error = 1;
            }
            if(coupon_end==""){
                $('#coupon-detail #end_date').addClass("invalid");
                error = 1;
            }
            if(coup_veh_type==""){
                $('#coupon-detail #coup_veh_type').addClass("invalid-select-box");
                error = 1;
            }
            if(coup_cat_type==""){
                $('#coupon-detail #coup_cat').addClass("invalid-select-box");
                error = 1;
            }
            if(coup_type==""){
                $('#coupon-detail #coup_type').addClass("invalid-select-box");
                error = 1;
            }
            if(coup_val==""){
                $('#coupon-detail #coup_value').addClass("invalid");
                error = 1;
            }
            if(coup_cap==""){
                $('#coupon-detail #coup_cap').addClass("invalid");
                error = 1;
            }
            if(coup_message==""){
                $('#coupon-detail #coup_message').addClass("invalid");
                error = 1;
            }
            if(error==1){
                // console.log("didnt work")
                return;
            }else{
                Commons.ajaxData('add_modify_coupon', {c_id: coupon_code  ,
                    d_start: coupon_start ,
                    d_end: coupon_end   ,
                    veh_type: coup_veh_type,
                    cat_id: coup_cat_type,
                    type: coup_type    ,
                    val: coup_val     ,
                    cap: coup_cap     ,
                    message: coup_message ,
                    active: coup_active  }, "get", _this, _this.loadAddCoupon,null, '.loading-pane');
            }
        });
        // -- Modify Coupon

        var opencoupon = function(data_id){

            $('#coupon-detail .coupon-list').hide()
            $('#coupon-detail .coupon-add-mod').show()
            $('#coupon-detail  .all-coupon').removeClass('selected')
            $('#coupon-detail  .single-coupon').addClass('selected')
            Commons.ajaxData('view_all_coupons', {c_id:data_id}, "get", _this, _this.loadCoupon,null, '.loading-pane');

            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/single/' + data_id
            history.pushState({},'',new_path)

        };

        $('#coupon-detail .coupon-list').on('click','.modify-btn',function(){
            coupon_id = $(this).closest('tr').attr('data-class')
            console.log(coupon_id)
            opencoupon(coupon_id)


        });
        // -- Switch between list and add/modify in a coupon
        $('#coupon-detail .all-coupon').click(function(){
            $('#coupon-detail .coupon-list').show();
            $('#coupon-detail  .coupon-add-mod').hide();
            $('#coupon-detail  .single-coupon').removeClass('selected')
            $('#coupon-detail  .all-coupon').addClass('selected')
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/all/'
            history.pushState({},'',new_path)
        });

        $('#coupon-detail .single-coupon').click(function(){
            $('#coupon-detail .coupon-list').hide();
            $('#coupon-detail  .coupon-add-mod').show();
            $('#coupon-detail  .all-coupon').removeClass('selected')
            $('#coupon-detail  .single-coupon').addClass('selected')
            $('#coupon-detail #coup_name').val('')
            $('#coupon-detail #start_date').val('')
            $('#coupon-detail #end_date').val('')
            $('#coupon-detail #coup_veh_type').val('')
            $('#coupon-detail #coup_cat').val('')
            $('#coupon-detail #coup_type').val('')
            $('#coupon-detail #coup_value').val('')
            $('#coupon-detail #coup_cap').val('')
            $('#coupon-detail #coup_message').val('')
            document.getElementById('coupon_active').removeAttribute("checked", "");
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/single/'
            history.pushState({},'',new_path)

            // document.getElementById('coupon_active');

        });

// =====================================================================================
//    Bill Management
// =====================================================================================
        // -- Load Coupon
        var allbillsopen = function(){
            // console.log('check')
            $('.navbar li').removeClass('selected')
            $('.navbar .bill-button').addClass('selected')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#new-booking').hide()
            $('#subscription-details').hide()
            $('#campaign-details').hide()
            $('#analytics').hide()
            $('#expense-details').hide();
            $('#bill-details').show()
            $('#settlement-details').hide()
            // $('.bill-filter-summary').show()
            // $('#cust_filter_invoice_number').val('')
            // $('#cust_filter_bill_name').val('')
            // $('#cust_filter_booking_id').val('')

            $('#bill-detail .all-bill').click()
            // Commons.ajaxData('view_all_bills', {bill_type:"Invoice"}, "get", _this, _this.loadbillAll,null, '.loading-pane');
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/bills/all'
            history.pushState({},'',new_path)
        };

        //
        var allprebillsopen = function(){
            // console.log('check')
            $('.navbar li').removeClass('selected')
            $('.navbar .bill-button').addClass('selected')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#new-booking').hide()
            $('#subscription-details').hide()
            $('#campaign-details').hide()
            $('#analytics').hide()
            $('#expense-details').hide();
            $('#bill-details').show()
            $('#settlement-details').hide()
            $('#bill-detail  .all-pre-bill').click()
            // $('.bill-filter-summary').hide()
            // Commons.ajaxData('view_all_bills', {bill_type:"Pre-Invoice"}, "get", _this, _this.loadprebillAll,null, '.loading-pane');
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/bills/pre'
            history.pushState({},'',new_path)
        };

        $('.navbar .bill-button').click(allbillsopen);
        //     - ADD bill

        // -- Modify bill

        var openbill = function(data_id){

            $('#bill-detail .bill-list').hide()
            $('#bill-detail .bill-add-mod').show()
            $('#bill-detail  .all-bill').removeClass('selected')
            $('#bill-detail  .single-bill').addClass('selected')
            Commons.ajaxData('view_all_bookings', {data_id:data_id}, "get", _this, _this.loadbillbookingdata,null, '.loading-pane');
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/newbill/' + data_id +'/new'
            history.pushState({},'',new_path)
            // $('#bill-detail table').click()

        };

        var openbillpre = function(data_id){
            $('#bill-detail .bill-list').hide()
            $('#bill-detail .bill-add-mod').show()
            $('#bill-detail  .all-bill').removeClass('selected')
            $('#bill-detail  .single-bill').addClass('selected')
            Commons.ajaxData('view_all_bookings', {data_id:data_id}, "get", _this, _this.loadbillbookingdatapre,null, '.loading-pane');
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/newbill/' + data_id +'/pre'
            history.pushState({},'',new_path)
            // $('#bill-detail table').click()

        };




        $('#bill-detail .btn-getjobdata').click(function(){
            booking_id = $('#bill-detail #cust_bill_bookingid').val()
            if (booking_id != ""){
                Commons.ajaxData('view_all_bookings', {b_id:booking_id}, "get", _this, _this.loadbillbookingdata,null, '.loading-pane');
            }
        })

        $('#bill-detail .btn-getpreinvoicedata').click(function(){
            booking_id = $('#bill-detail #cust_bill_bookingid').val()
            if (booking_id != ""){
                Commons.ajaxData('view_all_bookings', {b_id:booking_id}, "get", _this, _this.loadbillbookingdatapre,null, '.loading-pane');
            }
        })


        // -- Switch between list and add/modify in a bill
        $('#bill-detail .all-bill').click(function(){
            $('#bill-detail .bill-list').show();
            $('#bill-detail  .bill-add-mod').hide();
            $('#bill-detail  .single-bill').removeClass('selected')
            $('#bill-detail  .all-bill').addClass('selected')
            $('#bill-detail  .all-pre-bill').removeClass('selected')
            $('.bill-filter-summary').show()
            $('#cust_filter_invoice_number').val('')
            $('#cust_filter_bill_name').val('')
            $('#cust_filter_booking_id').val('')
            Materialize.updateTextFields();
            Commons.ajaxData('view_all_bills', {bill_type:"Invoice"}, "get", _this, _this.loadbillAll,null, '.loading-pane');
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/all/'
            history.pushState({},'',new_path)
        });

        $('#bill-detail .btn-filterbills').click(function(){
            invoice_number = $('#cust_filter_invoice_number').val()
            name = $('#cust_filter_bill_name').val()
            booking_id = $('#cust_filter_booking_id').val()
            Commons.ajaxData('view_all_bills', {bill_type:"Invoice",cust_name:name,bid:booking_id, invoice_number : invoice_number}, "get", _this, _this.loadbillAll,null, '.loading-pane');
        })



        $('#bill-details .btn-downloadbills').click(function(){
            invoice_number = $('#cust_filter_invoice_number').val()
            name = $('#cust_filter_bill_name').val()
            booking_id = $('#cust_filter_booking_id').val()
            console.log('Downloaded')
            params = {bill_type:"Invoice",cust_name:name,bid:booking_id, invoice_number : invoice_number,getcsv:"True"}
            var url = Commons.getOrigin()+Commons.URLFromName['view_all_bills']+'?'+jQuery.param( params )
            $('#download').find('iframe').attr('src',url)

            // $('.loading-pane').show()
        })

        $('#bill-detail .all-pre-bill').click(function(){
            $('#bill-detail .bill-list').show();
            $('#bill-detail  .bill-add-mod').hide();
            $('#bill-detail  .single-bill').removeClass('selected')
            $('#bill-detail  .all-bill').removeClass('selected')
            $('#bill-detail  .all-pre-bill').addClass('selected')
            $('.bill-filter-summary').hide()
            Commons.ajaxData('view_all_bills', {bill_type:"Pre-Invoice"}, "get", _this, _this.loadprebillAll,null, '.loading-pane');
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/pre/'
            history.pushState({},'',new_path)
        });


        $('#bill-detail .single-bill').click(function(){
            $('#bill-detail .bill-list').hide();
            $('#bill-detail  .bill-add-mod').show();
            $('#bill-detail  .all-bill').removeClass('selected')
            $('#bill-detail  .single-bill').addClass('selected')
            $('#bill-detail  .all-pre-bill').removeClass('selected')
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/newbill/'
            history.pushState({},'',new_path)

        });


        $('#bill-detail #bill_type').change(function(){
            bill_type = $('#bill_type').find('select').val()
            // console.log(bill_type)
            if (bill_type == "CG Haryana"){
                $('#agent_bill_name').val(CGDELHI_NAME)
                $('#agent_bill_address').val(CGHARYANA_ADDRESS +', '+CGHARYANA_LOCALITY+', '+CGHARYANA_CITY)
                $('#agent_bill_vat').val(CGHARYANA_VAT_NO)
                $('#agent_bill_stax').val(CGHARYANA_STAX_NO)
                $('#agent_bill_cin').val(CGHARYANA_CIN_NO)
                STATE_BILL = CGHARYANA_STATE
                Commons.ajaxData('get_all_taxes', {state:STATE_BILL}, "get", _this, _this.loadTaxUpdate,null, '.loading-pane');
                setTimeout(function() {             $('#bill-table').click()       }, 1000);

            }else if (bill_type == "CG Delhi"){
                $('#agent_bill_name').val(CGDELHI_NAME)
                $('#agent_bill_address').val(CGDELHI_ADDRESS +', '+CGDELHI_LOCALITY+', '+CGDELHI_CITY)
                $('#agent_bill_vat').val(CGDELHI_VAT_NO)
                $('#agent_bill_stax').val(CGDELHI_STAX_NO)
                $('#agent_bill_cin').val(CGDELHI_CIN_NO)
                STATE_BILL = CGDELHI_STATE
                Commons.ajaxData('get_all_taxes', {state:STATE_BILL}, "get", _this, _this.loadTaxUpdate,null, '.loading-pane');
                setTimeout(function() {             $('#bill-table').click()       }, 1000);

            }else if(bill_type == "CG Receipt"){
                $('#agent_bill_name').val(CGDELHI_NAME)
                $('#agent_bill_address').val(CGHARYANA_ADDRESS +', '+CGHARYANA_LOCALITY+', '+CGHARYANA_CITY)
                $('#agent_bill_vat').val('')
                $('#agent_bill_stax').val('')
                $('#agent_bill_cin').val('')
                VAT_CONSUMABLE_PERCENT = 0
                VAT_LUBE_PERCENT = 0
                VAT_PART_PERCENT = 0
                SERVICE_TAX_PERCENT = 0
                STATE_BILL = CGDELHI_STATE
                setTimeout(function() {             $('#bill-table').click()       }, 1000);

                // $('#bill-detail table').click()

            }else if(bill_type == "Agent Bill"){
                $('#agent_bill_name').val(AGENT_NAME)
                $('#agent_bill_address').val(AGENT_ADDRESS +', '+AGENT_LOCALITY+', '+AGENT_CITY)
                $('#agent_bill_vat').val(AGENT_VAT_NO)
                $('#agent_bill_stax').val(AGENT_STAX_NO)
                $('#agent_bill_cin').val(AGENT_CIN_NO)
                STATE_BILL = AGENT_STATE
                Commons.ajaxData('get_all_taxes', {state:STATE_BILL}, "get", _this, _this.loadTaxUpdateAgent,null, '.loading-pane');

            }else{


            }
            Materialize.updateTextFields();




        })

        $('#bill-detail .btn-addbillitem').click(function(){
            var row_to_copy = $('#bill-detail .items-list .to-copy').find('tr').clone()
            container_parent = $('#bill-detail .items-list #bill-table').find('tbody')
            row_to_copy.appendTo(container_parent)
        })

        $('#bill-detail #cust_bill_locality').on('keyup',function(e,event,data){
            var code = (e.keyCode || e.which);
            // do nothing if it's an arrow key
            // if (code ==13 || code==0){
            //     $(this).blur();
            //     return;
            // }else
            if(code == 37 || code == 38 || code == 39 || code == 40 || code == 13) {
                return;
            }
            var locality = $(this).val();
            Commons.ajaxData('get_location', {location_id: locality}, "get", _this, _this.loadLocation);
            $('#locality').removeClass('invalid')
        });
        // cust_bill_locality
        // $('#cust_bill_locality').blur(function(){
        //      $(this).closest('.input-field').find('ul').hide()
        // });

        $('#bill-detail #cust_bill_number').on('keyup',function(e,event,data){
            // cust_number = $('#bill-detail #cust_bill_number').val()
            var cust_number = $(this).val();
            var code = (e.keyCode || e.which);
            // do nothing if it's an arrow key
            $('#cust_bill_name').val('')
            $('#cust_bill_address').val('')
            $('#cust_bill_locality').val('')
            $('#cust_bill_city').val('')
            if(code == 37 || code == 38 || code == 39 || code == 40 || code == 13) {
                return;
            }
            Commons.ajaxData('fetch_all_users', {number: cust_number}, "get", _this, _this.loadSearchUser);
            $('#cust_bill_number').removeClass('invalid')
        });

        $('#bill-detail #cust_bill_number').change(function() {
            // $('#bill-detail #cust_bill_number').blur(function () {
            console.log("Triggerred")
            setTimeout(function(){
                var cust_number = $('#bill-detail #cust_bill_number').val();
                // var cust_number = $(this).val();
                console.log(cust_number)
                Commons.ajaxData('fetch_all_users', {number2: cust_number}, "get", _this, _this.loadUserBilldata);

            },1000);
            //      // $('#cust_bill_number').removeClass('invalid')
        });
        // });                // console.log(cust_number)


        $('#bill-detail #cust_bill_number').on('keyup',function(e,event,data){
            var code = (e.keyCode || e.which);
            // console.log(code)
            // alfa = $(this).find('li:hover')
            // do nothing if it's an arrow key
            if(code == 13) {
                var cust_number = $(this).val();
                // console.log('Enter')
                Commons.ajaxData('fetch_all_users', {number2: cust_number}, "get", _this, _this.loadUserBilldata);
                $('#cust_bill_number').removeClass('invalid')
                $('#bill-detail #cust_bill_number').blur()
                $(this).closest('.input-field').find('ul').hide()
            }else if(code == 37 || code == 38 || code == 39 || code == 40){
                var cust_number = $(this).closest('.input-field').find('li.active').text();
                Commons.ajaxData('fetch_all_users', {number2: cust_number}, "get", _this, _this.loadUserBilldata);
                $('#cust_bill_number').removeClass('invalid')
            }else{
                return;
            }
        });


        $('#bill-detail #bill-table').on('click','.delete-bill-item' ,function(){
            $(this).closest('tr').remove()
            TOTAL_PRICE_BILL_ADMIN = 0
            VAT_PART_BILL_ADMIN = 0
            VAT_LUBE_BILL_ADMIN = 0
            VAT_CONSUMABLE_BILL_ADMIN = 0
            SERVICE_TAX_BILL_ADMIN = 0
            $('#bill-detail .total-amount-row-bill .total-amount').text(TOTAL_PRICE_BILL_ADMIN)
            $('#bill-detail .vat-part-amount').text(VAT_PART_BILL_ADMIN)
            $('#bill-detail .vat-lube-amount').text(VAT_LUBE_BILL_ADMIN)
            $('#bill-detail .vat-consumable-amount').text(VAT_CONSUMABLE_BILL_ADMIN)
            $('#bill-detail .stax-amount').text(SERVICE_TAX_BILL_ADMIN)
            $('#bill-detail table').click()

        })

        $('#bill-detail').on('keyup click','table',function(e,event,data){
            TOTAL_PRICE_BILL_ADMIN = 0;
            TOTAL_LABOUR_BILL_ADMIN = 0;
            TOTAL_PARTS_BILL_ADMIN = 0;
            TOTAL_CONSUMABLES_BILL_ADMIN= 0;
            TOTAL_LUBES_BILL_ADMIN= 0;

            TOTAL_DISCOUNT_BILL_ADMIN = 0;
            VAT_PART_BILL_ADMIN = 0;
            VAT_LUBE_BILL_ADMIN = 0;
            VAT_CONSUMABLE_BILL_ADMIN = 0;
            SERVICE_TAX_BILL_ADMIN = 0;
            CURRENT_BILL_CART = [];

            var table = document.getElementById('bill-table');
            // console.log(table)
            // units = $(this).closest('tr').find('#part_units').eq(0).val()
            // unit_price = $(this).closest('tr').find('#part_unitprice').eq(0).val()
            // console.log(units)
            // console.log(unit_price)
            // part_total_price = $(this).closest('tr').find('#part_units').val() * $(this).closest('tr').find('#part_unitprice').val();

            // $(this).closest('tr').find('#part_price').val(part_total_price)
            for (var i = 1, row; row = table.rows[i]; i++) {
                for (var j = 0, col; col = row.cells[j]; j++) {
                    if (j == 0) {
                        name_item = $(row.cells[j]).find('input,select').eq(0).val()
                        // console.log(name_item)
                    }else if (j == 1) {
                        type_item = $(row.cells[j]).find('input,select').eq(0).val()
                        // console.log(type_item)
                    } else if (j == 2) {
                        quantity = $(row.cells[j]).find('input,select').eq(0).val()
                        // console.log(type_item)
                    }else if (j == 3) {
                        unit_price = $(row.cells[j]).find('input,select').eq(0).val()
                        // console.log(type_item)
                    }else if (j == 4) {
                        price_item = unit_price * quantity;
                        $(row.cells[j]).find('input,select').eq(0).val(price_item)
                        // console.log(price_item)
                    }else if (j == 5) {
                        if (name_item !=""){
                            if (type_item == "Labour") {
                                applicable_tax = SERVICE_TAX_PERCENT
                                SERVICE_TAX_BILL_ADMIN = SERVICE_TAX_BILL_ADMIN+ (price_item - (price_item /(1+(applicable_tax/100))))
                            } else if (type_item == "Part") {
                                applicable_tax = VAT_PART_PERCENT
                                VAT_PART_BILL_ADMIN = VAT_PART_BILL_ADMIN + (price_item - (price_item /(1+(applicable_tax/100))))
                            }else if(type_item == "Lube"){
                                applicable_tax = VAT_LUBE_PERCENT
                                VAT_LUBE_BILL_ADMIN = VAT_LUBE_BILL_ADMIN + (price_item - (price_item /(1+(applicable_tax/100))))
                            }else if(type_item == "Consumable"){
                                applicable_tax = VAT_CONSUMABLE_PERCENT
                                VAT_CONSUMABLE_BILL_ADMIN= VAT_CONSUMABLE_BILL_ADMIN+ (price_item - (price_item /(1+(applicable_tax/100))))
                            }else if (type_item == "Discount") {
                                applicable_tax = 0
                            } else {
                                applicable_tax = 0
                            }

                            price_item_pre_tax = (price_item)/(1+applicable_tax/100);
                            price_item_pre_tax = +(price_item_pre_tax.toFixed(2))
                            $(row.cells[j]).find('input,select').eq(0).val(price_item_pre_tax)
                            if (type_item == "Labour") {
                                TOTAL_PRICE_BILL_ADMIN = TOTAL_PRICE_BILL_ADMIN + parseFloat(price_item)
                                TOTAL_LABOUR_BILL_ADMIN = TOTAL_LABOUR_BILL_ADMIN + parseFloat(price_item)
                            } else if (type_item == "Part") {
                                TOTAL_PRICE_BILL_ADMIN = TOTAL_PRICE_BILL_ADMIN + parseFloat(price_item)
                                TOTAL_PARTS_BILL_ADMIN = TOTAL_PARTS_BILL_ADMIN + parseFloat(price_item)
                            }else if(type_item == "Lube"){
                                TOTAL_PRICE_BILL_ADMIN = TOTAL_PRICE_BILL_ADMIN + parseFloat(price_item)
                                TOTAL_LUBES_BILL_ADMIN = TOTAL_LUBES_BILL_ADMIN + parseFloat(price_item)

                            }else if(type_item == "Consumable"){
                                TOTAL_PRICE_BILL_ADMIN = TOTAL_PRICE_BILL_ADMIN + parseFloat(price_item)
                                TOTAL_CONSUMABLES_BILL_ADMIN = TOTAL_CONSUMABLES_BILL_ADMIN + parseFloat(price_item)
                            }else if (type_item == "Discount") {
                                TOTAL_PRICE_BILL_ADMIN = TOTAL_PRICE_BILL_ADMIN - parseFloat(price_item)
                                TOTAL_DISCOUNT_BILL_ADMIN = TOTAL_DISCOUNT_BILL_ADMIN + parseFloat(price_item)
                            } else {
                                TOTAL_PRICE_BILL_ADMIN = TOTAL_PRICE_BILL_ADMIN
                            }

                            // console.log(price_item)

                            cart_item = {
                                "name": name_item,
                                "price": price_item,
                                "pre_tax_price":price_item_pre_tax,
                                "type": type_item,
                                "settlement_cat":type_item,
                                "comment": "",
                                "quantity":quantity,
                                "unit_price":unit_price,
                                "approved":"Yes",
                                "purchase_price": price_item,
                                "purchase_price_pretax":price_item_pre_tax
                            }

                            // if (name_item != ""){
                            CURRENT_BILL_CART.push(cart_item)
                            // }else{
                            //
                            // }

                        }
                    }





                }


                TOTAL_PRICE_BILL_ADMIN = +(TOTAL_PRICE_BILL_ADMIN.toFixed(2))
                VAT_PART_BILL_ADMIN = +(VAT_PART_BILL_ADMIN.toFixed(2))
                VAT_LUBE_BILL_ADMIN = +(VAT_LUBE_BILL_ADMIN.toFixed(2))
                VAT_CONSUMABLE_BILL_ADMIN = +(VAT_CONSUMABLE_BILL_ADMIN.toFixed(2))
                SERVICE_TAX_BILL_ADMIN = +(SERVICE_TAX_BILL_ADMIN.toFixed(2))

                $('#bill-detail .total-amount-row-bill .total-amount').text(TOTAL_PRICE_BILL_ADMIN)
                $('#bill-detail .vat-part-amount').text(VAT_PART_BILL_ADMIN)
                $('#bill-detail .vat-lube-amount').text(VAT_LUBE_BILL_ADMIN)
                $('#bill-detail .vat-consumable-amount').text(VAT_CONSUMABLE_BILL_ADMIN)
                $('#bill-detail .discount-amount').text(TOTAL_DISCOUNT_BILL_ADMIN)
                $('#bill-detail .stax-amount').text(SERVICE_TAX_BILL_ADMIN)

            }
        });

        $('#bill-detail .btn-generateinvoice').click(function () {
            booking_data_id         = $('#bill-detail .booking-id').attr('data-class')
            bill_owner              = $('#bill_type').find('select').val()
            total_amount            = TOTAL_PRICE_BILL_ADMIN
            part_amount             = TOTAL_PARTS_BILL_ADMIN
            lube_amount             = TOTAL_LUBES_BILL_ADMIN
            consumable_amount       = TOTAL_CONSUMABLES_BILL_ADMIN
            labour_amount           = TOTAL_LABOUR_BILL_ADMIN
            vat_part                = VAT_PART_BILL_ADMIN
            vat_lube                = VAT_LUBE_BILL_ADMIN
            vat_consumable          = VAT_CONSUMABLE_BILL_ADMIN
            service_tax             = SERVICE_TAX_BILL_ADMIN
            payment_mode            = ""
            agent_name              = $('#agent_bill_name').val()
            agent_address           = $('#agent_bill_address').val()
            agent_vat               = $('#agent_bill_vat').val()
            agent_stax              = $('#agent_bill_stax').val()
            agent_cin               = $('#agent_bill_cin').val()
            state                   = STATE_BILL
            vat_part_percent        = VAT_PART_PERCENT
            vat_lube_percent        = VAT_LUBE_PERCENT
            vat_consumable_percent  = VAT_CONSUMABLE_PERCENT
            service_tax_percent     = SERVICE_TAX_PERCENT
            cust_veh_notes          = $('#bill-detail #cust_bill_reco').val()
            cust_name               = $('#bill-detail #cust_bill_name').val()
            cust_number               = $('#bill-detail #cust_bill_number').val()
            cust_address            = $('#bill-detail #cust_bill_address').val()
            cust_locality           = $('#bill-detail #cust_bill_locality').val()
            cust_city               = $('#bill-detail #cust_bill_city').val()
            cust_veh_reg            = $('#bill-detail #cust_bill_reg').val()
            cust_vehicle            = $('#bill-detail #cust_bill_vehicle').val()
            service_items           = JSON.stringify(CURRENT_BILL_CART)
            invoice_number          = $('#bill-detail #agent_invoice_number').val()

            console.log(vat_part)
            console.log(service_tax)

            bill_type = $(this).attr('data-class')
            if (bill_type == "Pre-Invoice"){
                invoice_number = "Pre-Invoice"


            }else{
                invoice_number = invoice_number
            }

            params =    {data_id: booking_data_id,
                bill_owner: bill_owner,
                total_amount: total_amount,
                part_amount: part_amount,
                lube_amount: lube_amount,
                consumable_amount: consumable_amount,
                labour_amount: labour_amount,
                vat_part: vat_part,
                vat_lube: vat_lube,
                vat_consumable: vat_consumable,
                service_tax: service_tax,
                payment_mode: payment_mode,
                full_agent_name: agent_name,
                agent_address: agent_address,
                agent_vat_no: agent_vat,
                agent_cin: agent_cin,
                agent_stax: agent_stax,
                state: state,
                vat_part_percent: vat_part_percent,
                vat_lube_percent: vat_lube_percent,
                vat_consumable_percent: vat_consumable_percent,
                service_tax_percent: service_tax_percent,
                notes: cust_veh_notes,
                cust_name: cust_name,
                cust_address: cust_address,
                cust_locality: cust_locality,
                cust_city: cust_city,
                reg_number: cust_veh_reg,
                vehicle: cust_vehicle,
                service_items: service_items,
                invoice_number: invoice_number,
                cust_number : cust_number
            }
            // console.log("Point 1")
            // Commons.ajaxData('generate_bill', params, "get", _this, _this.loadBillGenerated,null, '.loading-pane');
            error = 0
            if (bill_owner == ""){
                error = 1
                $('#bill_type').find('select').addClass('invalid-select-box')
                // console.log("Point 2")

            }
            if(cust_name == ""){
                error = 1
                $('#bill-detail #cust_bill_name').addClass("invalid");
                // console.log("Point 3")

            }
            if(cust_number != "" && (cust_number > 9999999999 || cust_number < 1000000000 || cust_number.length != 10)){
                console.log(cust_number.legth)
                error = 1
                $('#bill-detail #cust_bill_number').addClass("invalid");
                // console.log("Point 4")

            }
            if(agent_name == ""){
                error = 1
                $('#bill-detail #agent_bill_name').addClass("invalid");
                // console.log("Point 5")

            }
            if(CURRENT_BILL_CART.length == 0){
                error = 1
                // console.log("Point 6")

            }
            if(error == 1){
                alert('Invalid Data')
            }else{
                // console.log("Point 7")
                $('html, body').animate({scrollTop : 0},800);
                var url = Commons.getOrigin()+Commons.URLFromName['generate_bill']+'?'+jQuery.param( params );
                console.log(url)
                // $('#download_data').attr('action',url)
                $('#download').find('iframe').attr('src',url)
            }
        })

        $('#bill-details').on('click','.downloadbill',function(){
            console.log('Downloaded')
            file_name = $(this).attr('data-class')
            params = {file_name: file_name}
            var url = Commons.getOrigin()+Commons.URLFromName['download_pdf']+'?'+jQuery.param( params )

            $('#download').find('iframe').attr('src',url)

            // $('.loading-pane').show()
        })


        $('#bill-details .btn-closebillmod').click(function(){
            $(this).closest('.bill-modify-card').hide()
            $('#bill-details #bill_email').val('')
            $('#bill-details #bill_number').val('')
            $('#bill-details #bill_payment_mode').find('select').val('')
            $('#bill-details #bill_due_date').val('')
            $('#cover2').hide()
        })

        $('#bill-details').on('click','.updatebill',function () {
            $('#bill-details .bill-modify-card').show()
            data_id = $(this).closest('tr').attr('data-class')
            $('#cover2').show()

            Commons.ajaxData('view_all_bills', {data_id : data_id}, "get", _this, _this.loadModifyBill,null, '.loading-pane');
        })

        $('#bill-details .bill-modify-card .btn-addpayment').click(function () {
            bid = $(this).closest('.bill-modify-card').attr('data-class')
            amount = $('#payment_amount_bill').val()
            add_del = "Add"
            col_by = $('#payment_collector_bill').val()
            medium = $('#payment_medium_bill').val()
            error = 0
            if (amount <= 0 ){
                error = 1;
                $('#payment_amount_bill').addClass("invalid");
            }
            if (col_by == "" || col_by == null){
                error =1;
                $('#payment_collector_bill').addClass('invalid-select-box')
            }
            if (medium == "" || medium == null){
                error =1;
                $('#payment_medium_bill').addClass('invalid-select-box')
            }
            if (error == 1){
                return
            }else{
                Commons.ajaxData('add_delete_payment_bill', {
                    data_id : bid,
                    col_by : col_by,
                    amount : amount,
                    medium : medium,
                    add_del : "Add"
                }, "get", _this, _this.loadUpdateBill,null, '.loading-pane');
            }
        })

        $('#bill-detail .payment-history').on('click','.payment-card .delete-transaction',function(){
            bid = $(this).closest('.bill-modify-card').attr('data-class')
            payment_id = $(this).closest('.payment-card').attr('data-class')
            Commons.ajaxData('add_delete_payment_bill', {
                data_id : bid,
                payment_id : payment_id,
                add_del : "Delete"
            }, "get", _this, _this.loadUpdateBill,null, '.loading-pane');
        })

        $('#bill_amount_pending').change(function (){
            console.log('1')
            pending_amt =  document.getElementById('bill_amount_pending');
            amount = $('#bill-detail .total_due_amount').text()
            if (pending_amt.checked){
                $('#payment_amount_bill').val(parseFloat(amount))
                document.getElementById("payment_amount_bill").disabled = true;
                // $('#').attr('disabled')
            }else{
                $('#payment_amount_bill').val(0)
                document.getElementById("payment_amount_bill").disabled = false;
            }
            Materialize.updateTextFields();
            // console.log(pending_amt)
        })

        $('#payment_medium_bill').change(function (){
            console.log('1')
            // pending = $(this).checked
            // console.log(pending)
        })

        $('#bill-details .bill-modify-card .btn-updatebill').click(function () {
            data_id = $(this).closest('.bill-modify-card').attr('data-class')
            due_date = $('#bill_due_date').val()
            // payment_mode = $('#bill_payment_mode').find('select').val()
            cust_number = $('#bill_number').val()
            cust_email = $('#bill_email').val()
            console.log(due_date)
            // active_box              =  document.getElementById('bill_amount_paid');
            // amount_paid              = active_box.checked
            Commons.ajaxData('update_bill', {data_id : data_id, cust_number:cust_number, cust_email : cust_email, due_date : due_date}, "get", _this, _this.loadUpdateBill,null, '.loading-pane');
        })

        $('#bill-details .bill-modify-card .btn-cancelbill').click(function () {
            data_id = $(this).closest('.bill-modify-card').attr('data-class')
            status = "Cancelled"
            Commons.ajaxData('update_bill', {data_id : data_id, status: status}, "get", _this, _this.loadCancelBill,null, '.loading-pane');
        })

        $('#bill-details .bill-modify-card .btn-sendbill').click(function () {
            data_id = $(this).closest('.bill-modify-card').attr('data-class')
            cust_number = $('#bill_number').val()
            cust_email = $('#bill_email').val()
            Commons.ajaxData('send_bill', {data_id : data_id,  cust_number:cust_number, cust_email : cust_email}, "get", _this, _this.loadSendBill,null, '.loading-pane');
        })

        // document.getElementById('downloadiframe').onload = function() {
        //     $('.loading-pane').hide();
        // };
        // $('#download iframe').load(function() {
        //     console.log('1')
        // });
// =====================================================================================
//    Expense Management
// =====================================================================================
        // -- Load Coupon
        var allexpenseopen = function(){
            $('.navbar li').removeClass('selected')
            $('.navbar .expenses-button').addClass('selected')
            // console.log('check')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').hide()
            $('#subscription-details').hide()
            $('#campaign-details').hide()
            $('#analytics').hide()
            $('#bill-details').hide()
            $('#settlement-details').hide()

            $('#expense-details').show()
            $('#expense-detail  .all-expense').click()
            Commons.ajaxData('view_all_expense', {}, "get", _this, _this.loadExpenseAll,null, '.loading-pane');
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/expense/all'
            history.pushState({},'',new_path)
        };

        $('.navbar .expenses-button').click(allexpenseopen);
        //     - ADD Coupon
        $('#expense-detail .add-expense').click(function(){
            expense_id = $('#expense-detail #expense_id').attr('data-class')
            expense_date = $('#expense-detail #expense_date').val()
            expense_cat = $('#expense-detail #expense_cat').val()
            expense_subcat = $('#expense-detail #expense_subcat').val()
            expense_comment = $('#expense-detail #expense_comment').val()
            expense_reason = $('#expense-detail #expense_reason').val()
            expense_amount = $('#expense-detail #expense_amount').val()
            expense_owner = $('#expense-detail #expense_owner').val()
            error =0
            if(expense_date==""){
                $('#expense-detail #expense_date').addClass("invalid");
                error = 1;
            }
            if(expense_cat==""){
                $('#expense-detail #expense_cat').addClass("invalid-select-box");
                error = 1;
            }
            if(expense_subcat==""){
                $('#expense-detail #expense_subcat').addClass("invalid-select-box");
                error = 1;
            }
            if(expense_comment==""){
                $('#expense-detail #expense_comment').addClass("invalid");
                error = 1;
            }
            if(expense_reason==""){
                $('#expense-detail #expense_reason').addClass("invalid");
                error = 1;
            }
            if(expense_amount==""){
                $('#expense-detail #expense_amount').addClass("invalid");
                error = 1;
            }
            if(expense_owner==""){
                $('#expense-detail #expense_owner').addClass("invalid-select-box");
                error = 1;
            }

            if(error==1){
                // console.log("didnt work")
                return;
            }else{


                Commons.ajaxData('update_delete_expense', {expense_id: expense_id  ,
                    expense_date: expense_date ,
                    expense_cat: expense_cat,
                    expense_subcat: expense_subcat,
                    expense_comment: expense_comment    ,
                    expense_reason: expense_reason     ,
                    expense_amount: expense_amount     ,
                    expense_owner: expense_owner}, "get", _this, _this.loadAddexpense,null, '.loading-pane');
            }
        });
        // -- Modify Coupon

        var openexpense = function(data_id){

            $('#expense-detail .expense-list').hide()
            $('#expense-detail .expense-add-mod').show()
            $('#expense-detail  .all-expense').removeClass('selected')
            $('#expense-detail  .single-expense').addClass('selected')
            Commons.ajaxData('view_all_expense', {expense_id:data_id}, "get", _this, _this.loadExpense,null, '.loading-pane');
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/single/' + data_id
            history.pushState({},'',new_path)
        };

        $('#expense-detail .expense-list').on('click','.modify-btn',function(){
            expense_id = $(this).closest('tr').attr('data-class')
            openexpense(expense_id)
        });

        $('#expense-detail #expense_cat').change(function(){
            category = $('#expense-detail #expense_cat').val()
            container = $('#expense-detail #expense_subcat')
            html = ''
            html += '<option value="" disabled selected>Select Sub-Category</option>'


            if (category == "Marketing"){
                sourcelen = SOURCES.length;
                for (i = 0; i < sourcelen; i++) {
                    html += '<option value="'+SOURCES[i]+'">'+SOURCES[i]+'</option>'
                }
            }else{
                html += '<option value="'+category+'">'+category+'</option>'
            }
            container.html(html)

        });

        $('#expense-detail .expense-list').on('click','.delete-btn',function(){
            expense_id = $(this).closest('tr').attr('data-class')
            Commons.ajaxData('update_delete_expense', {expense_id:expense_id, delete:"True"}, "get", _this, _this.loadExpenseDelete,null, '.loading-pane');
        });

        // -- Switch between list and add/modify in a coupon
        $('#expense-detail .all-expense').click(function(){
            $('#expense-detail .expense-list').show();
            $('#expense-detail  .expense-add-mod').hide();
            $('#expense-detail  .single-expense').removeClass('selected')
            $('#expense-detail  .all-expense').addClass('selected')
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/all/'
            history.pushState({},'',new_path)
        });

        $('#expense-detail .single-expense').click(function(){
            $('#expense-detail .expense-list').hide();
            $('#expense-detail .expense-add-mod').show();
            $('#expense-detail .all-expense').removeClass('selected');
            $('#expense-detail .single-expense').addClass('selected');

            $('#expense-detail #expense_id').attr('')
            $('#expense-detail #expense_date').val('')
            $('#expense-detail #expense_cat').val('')
            $('#expense-detail #expense_subcat').val('')
            $('#expense-detail #expense_comment').val('')
            $('#expense-detail #expense_reason').val('')
            $('#expense-detail #expense_amount').val('')
            $('#expense-detail #expense_owner').val('')

            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/single/'
            history.pushState({},'',new_path)

        });

// =====================================================================================
//    SMS Management
// =====================================================================================
        var opencampaign = function(){
            $('.navbar li').removeClass('selected')
            $('.navbar .campaign-button').addClass('selected')
            // console.log('check')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').hide()
            $('#subscription-details').hide()
            $('#campaign-details').show()
            $('#analytics').hide()
            $('#expense-details').hide()
            $('#bill-details').hide()
            $('#settlement-details').hide()


            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/campaign/'
            history.pushState({},'',new_path)

        };
        $('.navbar .campaign-button').click(opencampaign);
        $('#campaign-details .send-sms-campaign').click(function() {
            message =     $('#sms_campaign_message').val()
            Commons.ajaxData('send_sms_campaign',  {message: message}, "get", _this, _this.loadCampaign,null, '.loading-pane');

            // Commons.ajaxData('send_sms_campaign', {message: message}, "get", _this, _this.loadModels);

        });
// =====================================================================================
//    New Booking
// =====================================================================================
        var opennewbookings = function(){

            $('.navbar li').removeClass('selected')
            $('.navbar .new-booking-button').addClass('selected')
            // console.log('check')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').show()
            $('#subscription-details').hide()
            $('#campaign-details').hide()
            $('#analytics').hide()
            $('#expense-details').hide();
            $('#bill-details').hide()
            $('#settlement-details').hide()
            callbrands()


            container = $('#new-booking .source-list')
            container.html('')
            html = ""

            html += '<div class="input-field source-admin" id="source-booking">'
            // html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="source" type="text"   value ="' + val.source + '"class="validate"><label for="source">Source</label></div>'
            html += '<select class="browser-default">'
            html += '<option value="" selected disabled>Source</option>'
            sourcelen = SOURCES.length;
            for (i = 0; i < sourcelen; i++) {
                // if (val.source == SOURCES[i]){
                //     html += '<option value="'+SOURCES[i]+'" selected>'+SOURCES[i]+'</option>'
                // }else{
                html += '<option value="'+SOURCES[i]+'">'+SOURCES[i]+'</option>'
                // }
            }
            html +='</select>'
            // console.log(html)
            container.html(html)
            // Commons.ajaxData('view_all_coupons', {}, "get", _this, _this.loadCouponAll,null, '.loading-pane');
            $('#new-booking  .booking-lead').text("Job")
            $('#new-booking  .booking-lead-2').text("Job")
            $('#new-booking  .lead-time').hide()
            $('#new-booking  .booking-time').show()

            $('#new-booking  .send-reminder').show()
            document.getElementById("send_details").checked = true;
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/newbooking/'
            history.pushState({},'',new_path)

        };

        $('.navbar .new-booking-button').click(opennewbookings);

        var opennewlead = function(){
            $('.navbar li').removeClass('selected')
            $('.navbar .new-lead-button').addClass('selected')
            // console.log('check')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').show()
            $('#subscription-details').hide()
            $('#campaign-details').hide()
            $('#analytics').hide()
            $('#expense-details').hide()
            $('#bill-details').hide()
            $('#settlement-details').hide()
            callbrands()

            container = $('#new-booking .source-list')
            container.html('')
            html = ""

            html += '<div class="input-field source-admin" id="source-booking">'
            // html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="source" type="text"   value ="' + val.source + '"class="validate"><label for="source">Source</label></div>'
            html += '<select class="browser-default">'
            html += '<option value="" selected disabled>Source</option>'
            sourcelen = SOURCES.length;
            for (i = 0; i < sourcelen; i++) {
                html += '<option value="'+SOURCES[i]+'">'+SOURCES[i]+'</option>'
            }
            html +='</select>'
            container.html(html)
            $('#new-booking  .booking-lead').text("Lead")
            $('#new-booking  .booking-lead-2').text("Lead Follow Up")
            $('#new-booking  .lead-time').show()
            $('#new-booking  .booking-time').hide()
            $('#new-booking  .send-reminder').hide()
            document.getElementById("send_details").checked = false;
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/newlead/'
            history.pushState({},'',new_path)

        };

        $('.navbar .new-lead-button').click(opennewlead);


        $('#new-booking .header-booking .book-btn').click(function(){
            $('#new-booking  .lead-btn').removeClass('selected')
            $('#new-booking  .book-btn:hover').addClass('selected')
            $('#new-booking  .booking-lead').text("Booking")
            $('#new-booking  .booking-lead-2').text("Booking")
            $('#new-booking  .send-reminder').show()
            document.getElementById("send_details").checked = true;

        });

        $('#new-booking .header-booking .lead-btn').click(function(){
            $('#new-booking  .book-btn').removeClass('selected')
            $('#new-booking  .lead-btn:hover').addClass('selected')
            $('#new-booking  .booking-lead').text("Lead")
            $('#new-booking  .booking-lead-2').text("Lead Follow Up")
            document.getElementById("send_details").checked = false;
            // document.getElementById('send_details').removeAttribute("checked", "");
            $('#new-booking  .send-reminder').hide()
        });

        $('#new-booking .btn-addadditional').click(function(){
            var row_to_copy = $('#new-booking .job-row.to-copy').clone().removeClass('to-copy').removeClass('invisible');
            container_parent = $('#new-booking .add-jobs-list')
            row_to_copy.appendTo(container_parent);
        });

        $('#new-booking .add-jobs-list').on('click','.delete-job',function(){
            $(this).closest('.job-row').remove()
        });



        // -- Locality Search
        $('#locality').on('keyup',function(e,event,data){
            var code = (e.keyCode || e.which);
            // do nothing if it's an arrow key
            // if(code==13){
            //     $(this).blur;
            //     return;
            // }else
            if(code == 37 || code == 38 || code == 39 || code == 40 || code == 13) {
                return;
            }
            var locality = $(this).val();
            Commons.ajaxData('get_location', {location_id: locality}, "get", _this, _this.loadLocation);
            $('#locality').removeClass('invalid')
        });

        // $('#locality').focusout(function(){
        //      $(this).closest('.input-field').find('ul').hide()
        // });

        // cust_bill_locality
        // -- Load Make
        var callbrands =function(){
            car_box =  document.getElementById('Carnew');
            bike_box =  document.getElementById('Bikenew');
            if (car_box.checked){
                vehicle =    "Car"
            }else{
                vehicle ="Bike"
            }
            console.log(vehicle)
            Commons.ajaxData('get_type_make', {vehicle_type: vehicle}, "get", _this, _this.loadBrands);
            $('#select-fuel').hide()
            html = '<select class="browser-default"><option value="" disabled selected>Select Model</option></select>'
            $('#select-model').html(html)
        }
        $('#new-booking .vehicle-select .veh-type-select').click(callbrands);
        // $('.navbar .new-booking-button').click(callbrands);
        // $('.navbar .new-lead-button').click(callbrands);
        // -- Load Model
        $('#select-make').change(function(event,data){
            car_box =  document.getElementById('Carnew');
            bike_box =  document.getElementById('Bikenew');
            if (car_box.checked){
                vehicle =    "Car"
            }else{
                vehicle ="Bike"
            }
            var make = $('#select-make').find('select').val();
            console.log(make)
            Commons.ajaxData('get_make_model', {make_id: make, vehicle_type: vehicle}, "get", _this, _this.loadModels);
            // $('#select-fuel').hide()
            $('#select-model').show()
        });

        // -- Load Service
        var call_category = function(){
            container =  $('#new-booking .service-select .category-select')
            container.html('')
            car_box =  document.getElementById('Carnew');
            bike_box =  document.getElementById('Bikenew');
            if (car_box.checked){
                vehicle =    "Car"
            }else{
                vehicle ="Bike"
            }
            html = ''
            html +=  '<select class="browser-default">'
            html +=  '<option value="" disabled selected>Select Category</option>'
            html +=  '<option value="Servicing">Servicing</option>'
            html +=  '<option value="Repairing">Repairing</option>'
            html +=  '<option value="Subscription">Subscription</option>'
            html +=  '<option value="Emergency">Emergency</option>'
            if(vehicle=='Car'){
                html +=  '<option value="Denting">Denting/ Painting</option>'
                html +=  '<option value="Cleaning">Car Care</option>'
            }
            html +=  '</select>'
            container.html(html)
        }
        $('#new-booking .vehicle-select .veh-type-select').click(call_category);
        $('.navbar .new-booking-button').click(call_category);
        $('.navbar .new-lead-button').click(call_category);
        $('#new-booking .service-select').on('change ','.category-select',function(){
            car_box =  document.getElementById('Carnew');
            bike_box =  document.getElementById('Bikenew');
            if (car_box.checked){
                vehicle =    "Car"
            }else{
                vehicle ="Bike"
            }
            var make = $('#select-make').find('select').val();
            var model = $('#select-model').find('select').val();

            fuel_start = model.indexOf("(")
            fuel_end = model.indexOf(")")
            var fuel =model.substr(fuel_start+1,fuel_end-fuel_start-1)
            model = model.substr(0,fuel_start-1)
            var category = $(this).find('select').val();
            Commons.ajaxData('get_jobs_vehicle', {make_id: make,model_id: model,fuel_id: fuel,service_type: category}, "get", $(this), _this.loadJobs);
        });
        // -- Calculate selected items
        var calculate_items = function(){
            CART_IDS_NEW_BOOKING = [];
            $('#new-booking .service-select .service-select select').each(function(){
                if($(this).val() != null){
                    CART_IDS_NEW_BOOKING.push($(this).val())
                }
            });
            cart_new = JSON.stringify(CART_IDS_NEW_BOOKING)
            Commons.ajaxData('add_job_cart', {service_names:cart_new}, "get", _this, _this.loadCart);
        }
        $('#new-booking .service-select').on('change ','.service-select',calculate_items);

        // -- ADD ITEM
        $('#new-booking .service-select .btn-additem').click(function(){
            container =  $('#new-booking .service-select .services-list .service-row.to-copy-row')
            container_parent =  $('#new-booking .service-select .services-list')
            html =''
            new_container = container.clone().removeClass('invisible').removeClass('to-copy-row');
            new_container.appendTo(container_parent);
            calculate_items()
        });
        // -- DELETE ITEM
        $('#new-booking .service-select').on('click',' .service-row .delete-item',function(){
            console.log('check')
            container =  $(this).closest('.service-row')
            container.remove()
            calculate_items()
        });

        $('#new-booking #telephone').on('keyup',function(e,event,data){
            // cust_number = $('#bill-detail #cust_bill_number').val()
            var cust_number = $(this).val();
            var code = (e.keyCode || e.which);
            if(code == 37 || code == 38 || code == 39 || code == 40 || code == 13) {
                return;
            }
            Commons.ajaxData('fetch_all_users', {number: cust_number}, "get", _this, _this.loadSearchUser);
            $('#telephone').removeClass('invalid')
        });

        $('#new-booking #telephone').change(function() {
            // $('#bill-detail #cust_bill_number').blur(function () {
            console.log("Triggerred")
            setTimeout(function(){
                var cust_number = $('#new-booking #telephone').val();
                // var cust_number = $(this).val();
                console.log(cust_number)
                Commons.ajaxData('fetch_all_users', {number2: cust_number}, "get", _this, _this.loadUserLeaddata);

            },100);
            //      // $('#cust_bill_number').removeClass('invalid')
        });
        $('#new-booking #telephone').on('keyup',function(e,event,data){
            var code = (e.keyCode || e.which);
            // console.log(code)
            // alfa = $(this).find('li:hover')
            // do nothing if it's an arrow key
            if(code == 13) {
                var cust_number = $(this).val();
                // console.log('Enter')
                Commons.ajaxData('fetch_all_users', {number2: cust_number}, "get", _this, _this.loadUserLeaddata);
                $('#telephone').removeClass('invalid')
                $('#new-booking #telephone').blur()
                $(this).closest('.input-field').find('ul').hide()
            }else if(code == 37 || code == 38 || code == 39 || code == 40){
                var cust_number = $(this).closest('.input-field').find('li.active').text();
                Commons.ajaxData('fetch_all_users', {number2: cust_number}, "get", _this, _this.loadUserLeaddata);
                $('#telephone').removeClass('invalid')
            }else{
                return;
            }
        });


        $('#new-booking .btn-send-booking').click(function () {
            car_box =  document.getElementById('Carnew');
            bike_box =  document.getElementById('Bikenew');
            // console.log('1')
            if (car_box.checked){
                vehicle =    "Car"
            }else{
                vehicle ="Bike"
            }
            var name = $('#name').val();
            var number = $('#telephone').val();
            var pocname = $('#new-booking #namepoc').val();
            var pocnumber = $('#new-booking #telephonepoc').val();
            var email = $('#email').val();
            var address =  $('#address').val();
            var locality =  $('#locality').val();
            var city =  $('#city').val();
            var date = $('#date').val();
            var odo = $('#odo_number').val()
            // var otp = $('#otp').val();
            var comment = $('#comment').val();
            var time_follow = $('#time_follow_lead').val()
            console.log(time_follow)
            // cookie = local.load();
            // var fuel = $('#select-fuel').find('select').val();
            var veh_type = vehicle;
            var make = $('#select-make').find('select').val();
            var model = $('#select-model').find('select').val();
            var source = $('#source-booking').find('select').val();
            // console.log()
            fuel_start = model.indexOf("(")
            fuel_end = model.indexOf(")")

            var fuel =model.substr(fuel_start+1,fuel_end-fuel_start-1)
            model = model.substr(0,fuel_start-1)

            var reg_num = $('#reg_number').val();
            // var coupon = cookie['coupon']
            var is_paid = false
            var paid_amt = "0"
            var price_total = TOTAL_PRICE_NEW_BOOKING;
            var time = $('#time-slot').find('select').val();
            if ($('#new-booking .booking-lead').text() =="Job" ){
                var flag = "True"
            }else{
                var flag= "False"
            }
            // console.log(time)
            send_conf =  document.getElementById('send_details');
            if (send_conf.checked){
                send_mess =    "1"
            }else{
                send_mess ="0"
            }
            error = 0
            if(TOTAL_PRICE_NEW_BOOKING<= 0 ){
                error = 1
                $('#new-booking .category-select').find('select').addClass('invalid-select-box')
                $('#new-booking .service-select').find('select').addClass('invalid-select-box')
                // console.log('1')
            }
            if(name==""){
                $('#name').addClass("invalid");
                error = 1;
                // console.log('2')

            }
            if(address==""){
                $('#address').addClass("invalid");
                error = 1;
                // console.log('3')

            }
            if(locality==""){
                $('#locality').addClass("invalid");
                error = 1;
                // console.log('4')

            }if(city==""){
                $('#city').addClass("invalid-select-box");
                error = 1;
                // console.log('5')

            }
            if(number <= 100000000 || number >= 9999999999 || number == "" || number.length != 10){
                $('#telephone').addClass("invalid");
                error = 1;
                // console.log('6')

            }
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                $('#email').addClass("valid");
                // error = 1;
            }else{
                $('#email').addClass("invalid");
                error =1;
                // console.log('7')

            }
            if(reg_num==""){
                // $('#reg_number').addClass("invalid");
                // error = 1;
                reg_num = "--"
                // console.log('8')

            }
            if(date==""){
                $('#date').addClass("invalid");
                error = 1;
                // console.log('9')

            }
            if (flag == "True"){
                if(time=="" || time==null){
                    time_follow = "09:30 AM"
                    console.log(time)
                    error = 1;
                    $('#new-booking #time-slot').find('select').addClass('invalid-select-box')
                    // $('#choose-time-slot').text('Choose Time Slot');
                    // console.log('10')

                }
            }else{
                time = "9:30AM - 11:30AM"
                if(time_follow == "" || time_follow == null){
                    // console.log(time)
                    error = 1;
                    $('#new-booking #time_follow_lead').addClass("invalid");
                    // $('#choose-time-slot').text('Choose Time Slot');
                    // console.log('11')

                }
            }

            $('#new-booking .add-jobs-list .job-row').each(function(){
                name_job = $(this).find('.job-summary-name input').val()
                // console.log(name_job)
                price = 0
                if (name_job != "" && name_job != " "){
                    obj = {"Job":name_job,"Price":price,"Category":"NA","Type":"Request"}
                    ALL_JOBS_NEW_BOOKING_LIST.push(obj)
                }
            });

            if(error==1){
                // console.log("didnt work")
                return;
            }else{
                $('html, body').animate({scrollTop : 0},800);
                Commons.ajaxData('send_booking', {
                    name       : name
                    ,number     : number
                    ,email      : email
                    ,reg_number : reg_num
                    ,address    : address
                    ,locality   : locality
                    ,city       : city
                    ,order_list : JSON.stringify(CURRENT_CART_NEW_BOOKING)
                    ,make       : make
                    ,model      : model
                    ,fuel       : fuel
                    ,veh_type   : veh_type
                    ,date       : date
                    ,time       : time
                    ,jobsummary_list : JSON.stringify(ALL_JOBS_NEW_BOOKING_LIST)
                    // ,comment    : ALL_JOBS_NEW_BOOKING + ', '+ comment
                    ,is_paid    : is_paid
                    ,paid_amt   : paid_amt
                    // ,coupon     : coupon
                    ,price_total: price_total
                    , flag : flag
                    ,int_summary : JSON.stringify(JOBS_SUMMARY_NEW_BOOKING)
                    ,send_confirm: send_mess
                    ,booking_user_name: pocname
                    ,booking_user_number: pocnumber
                    ,source : source
                    ,follow_time : time_follow
                    ,odometer: odo
                }, "post", _this, _this.loadSendbookingAdmin, null, '.loading-pane');
            }



            // var flag = $()
            // console.log(vehicle)
            // console.log(name)
            // console.log(number)
            // console.log(email)
            // console.log(address)
            // console.log(locality)
            // console.log(city)
            // console.log(date)
            // console.log(time)
            // console.log(fuel)
            // console.log(comment)
            // console.log(make)
            // console.log(model)
            // console.log(reg_num)
            // console.log(price_total)
            // console.log(flag)


        });

// =====================================================================================
//     Analytics
// =====================================================================================
        var monthNames = [ "01", "02", "03", "04", "05", "06",
            "07", "08", "09", "10", "11", "12" ];

        function diff(from, to) {
            var arr = [];
            var datFrom = new Date('1 ' + from);
            var datTo = new Date('1 ' + to);
            var fromYear =  datFrom.getFullYear();
            var toYear =  datTo.getFullYear();
            var diffYear = (12 * (toYear - fromYear)) + datTo.getMonth();

            for (var i = datFrom.getMonth(); i <= diffYear; i++) {
                arr.push( Math.floor(fromYear+(i/12))+monthNames[i%12]);
            }

            return arr;
        }
        today = new Date
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        var n = month[today.getMonth()];
        to_month = n +" " + today.getFullYear()
        list_months = diff('January 2017', to_month)

        var openanalytics = function(){
            $('.navbar li').removeClass('selected')
            $('.navbar .analytics-button').addClass('selected')
            // DATE_TYPE = "";
            REG_NUMBER = "";
            CUST_NAME = "";
            STATUS_TYPE = "";
            SORT_TYPE = "";
            BOOKING_ID = "";
            VEH_TYPE = "";
            MONTH_TABLE = "";

            anal_time_cat = $('#analytics .header-analytics .selected').attr('data-class')
            anal_veh_cat = $('#analytics .vehicle-filter .date-box.selected').attr('data-class')

            console.log(anal_time_cat)
            console.log(anal_veh_cat)

            $('#booking-details').hide();
            $('#bookings').hide()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').hide()
            $('#subscription-details').hide()
            $('#campaign-details').hide()
            $('#analytics').show()
            $('#expense-details').hide();
            $('#bill-details').hide()
            $('#settlement-details').hide()


            month_selected = $('#analytics .month-row').find('select').val()
            // console.log(month_selected)

            date_selected = $('#analytics .daily-row #date_summary').val()

            if (anal_time_cat == "Overall"){
                // to populate overall summary
                Commons.ajaxData('analyse_bookings', {}, "get", _this, _this.loadAnalysis_all,null, '.loading-pane');
                Commons.ajaxData('analyse_bookings', {car_bike : "Car"}, "get", _this, _this.loadAnalysis_car,null, '.loading-pane');
                Commons.ajaxData('analyse_bookings', {car_bike : "Bike"}, "get", _this, _this.loadAnalysis_bike,null, '.loading-pane');

                if (anal_veh_cat == "All"){
                    Commons.ajaxData('analyse_bookings', {}, "get", _this, _this.loadAnalysis_veh_filter,null, '.loading-pane');
                    monLen = list_months.length;
                    MONTH_NUMBER = 0
                    Commons.ajaxData('analyse_bookings', {monthyear:list_months[MONTH_NUMBER]}, "get", _this, _this.loadAnalysis_veh_filter_month,null, '.loading-pane');
                }else{
                    Commons.ajaxData('analyse_bookings', {car_bike:anal_veh_cat}, "get", _this, _this.loadAnalysis_veh_filter,null, '.loading-pane');
                    monLen = list_months.length;
                    MONTH_NUMBER = 0
                    Commons.ajaxData('analyse_bookings', {monthyear:list_months[MONTH_NUMBER],car_bike:anal_veh_cat}, "get", _this, _this.loadAnalysis_veh_filter_month,null, '.loading-pane');
                }
            }else if (anal_time_cat == "Monthly"){
                console.log(month_selected)
                Commons.ajaxData('analyse_bookings', {monthyear:month_selected}, "get", _this, _this.loadAnalysis_all,null, '.loading-pane');
                Commons.ajaxData('analyse_bookings', {monthyear:month_selected,car_bike : "Car"}, "get", _this, _this.loadAnalysis_car,null, '.loading-pane');
                Commons.ajaxData('analyse_bookings', {monthyear:month_selected,car_bike : "Bike"}, "get", _this, _this.loadAnalysis_bike,null, '.loading-pane');

                if (anal_veh_cat == "All"){
                    Commons.ajaxData('analyse_bookings', {monthyear:month_selected}, "get", _this, _this.loadAnalysis_veh_filter,null, '.loading-pane');
                }else{
                    Commons.ajaxData('analyse_bookings', {monthyear:month_selected,car_bike:anal_veh_cat}, "get", _this, _this.loadAnalysis_veh_filter,null, '.loading-pane');
                }


            }else if (anal_time_cat == "Daily"){
                Commons.ajaxData('analyse_bookings', {date:date_selected}, "get", _this, _this.loadAnalysis_all,null, '.loading-pane');
                Commons.ajaxData('analyse_bookings', {date:date_selected,car_bike : "Car"}, "get", _this, _this.loadAnalysis_car,null, '.loading-pane');
                Commons.ajaxData('analyse_bookings', {date:date_selected,car_bike : "Bike"}, "get", _this, _this.loadAnalysis_bike,null, '.loading-pane');

                if (anal_veh_cat == "All"){
                    Commons.ajaxData('analyse_bookings', {date:date_selected}, "get", _this, _this.loadAnalysis_veh_filter,null, '.loading-pane');
                }else{
                    Commons.ajaxData('analyse_bookings', {date:date_selected,car_bike:anal_veh_cat}, "get", _this, _this.loadAnalysis_veh_filter,null, '.loading-pane');

                }
            }
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/analytics/'
            history.pushState({},'',new_path)

        };
        $('.navbar .analytics-button').click(openanalytics);
        $('#analytics .month-row #months-list').change(openanalytics)
        $('#analytics .daily-row #date_summary').change(openanalytics)


        $('#analytics').on('click','.btn-month-expand.unselected',function(){
            // console.log("1")
            $('#analytics .month-data-row').show()
            $(this).addClass('selected').removeClass('unselected')
            $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up')
        });
        $('#analytics').on('click','.btn-month-expand.selected',function(){
            // console.log("2")
            $('#analytics .month-data-row').hide()
            $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down')
            $(this).addClass('unselected').removeClass('selected')
        });

        $('#analytics').on('click','.btn-status-expand.unselected',function(){
            // console.log("1")
            $('#analytics .status-data-row').show()
            $(this).addClass('selected').removeClass('unselected')
            $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up')
        });
        $('#analytics').on('click','.btn-status-expand.selected',function(){
            // console.log("2")
            $('#analytics .status-data-row').hide()
            $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down')
            $(this).addClass('unselected').removeClass('selected')
        });

        $('#analytics').on('click','.btn-kpi-expand.unselected',function(){
            // console.log("1")
            $('#analytics .kpi-data-row').show()
            $(this).addClass('selected').removeClass('unselected')
            $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up')
        });
        $('#analytics').on('click','.btn-kpi-expand.selected',function(){
            // console.log("2")
            $('#analytics .kpi-data-row').hide()
            $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down')
            $(this).addClass('unselected').removeClass('selected')
        });



        $('#analytics').on('click','.btn-source-expand.unselected',function(){
            // console.log("1")
            $('#analytics .source-data-row').show()
            $(this).addClass('selected').removeClass('unselected')
            $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up')
        });
        $('#analytics').on('click','.btn-source-expand.selected',function(){
            // console.log("2")
            $('#analytics .source-data-row').hide()
            $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down')
            $(this).addClass('unselected').removeClass('selected')
        });
        $('#analytics .header-analytics .date-box').click(function(){
            $('#analytics .header-analytics .date-box').removeClass('selected');
            $(this).addClass('selected');
            summ_type = $(this).attr('data-class')
            // console.log(summ_type)
            $('#summ_type').text(summ_type)
            if (summ_type == "Overall"){
                $('#analytics .month-row').hide()
                $('#analytics .daily-row').hide()
                $('#analytics .month-on-month-row').show()
            }else if(summ_type == "Monthly"){
                $('#analytics .month-row').show()
                $('#analytics .daily-row').hide()
                $('#analytics .month-on-month-row').hide()
                $('#analytics .month-data-row').hide()
            }else{
                $('#analytics .month-row').hide()
                $('#analytics .daily-row').show()
                $('#analytics .month-on-month-row').hide()
                $('#analytics .month-data-row').hide()
            }
            anal_time_cat = $('#analytics .header-analytics .selected').attr('data-class')
            anal_veh_cat = $('#analytics .vehicle-filter .date-box.selected').attr('data-class')
            console.log(anal_time_cat)
            console.log(anal_veh_cat)
            openanalytics()
        })

        $('#analytics .vehicle-filter .date-box').click(function(){
            $('#analytics .vehicle-filter .date-box').removeClass('selected');
            $(this).addClass('selected');
            veh_type = $(this).attr('data-class')
            // console.log(veh_type)
            anal_time_cat = $('#analytics .header-analytics .selected').attr('data-class')
            anal_veh_cat = $('#analytics .vehicle-filter .date-box.selected').attr('data-class')
            console.log(anal_time_cat)
            console.log(anal_veh_cat)
            openanalytics()
        })



// =====================================================================================
//    User Management
// =====================================================================================

        // --Get all user
        var allusersopen = function(){
            $('.navbar li').removeClass('selected')
            $('.navbar .users-button').addClass('selected')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').show()
            $('#coupon-details').hide()
            $('#new-booking').hide()
            $('#subscription-details').hide()
            $('#campaign-details').hide()
            $('#analytics').hide()
            $('#user-detail .all-user').click()
            $('#expense-details').hide();
            $('#bill-details').hide()
            $('#settlement-details').hide()


            Commons.ajaxData('fetch_all_users', {}, "get", _this, _this.loadUsers,null, '.loading-pane');

            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/users/'
            history.pushState({},'',new_path)
        };
        $('.navbar .users-button').click(allusersopen);
        //     - ADD User
        $('#user-detail .add-user').click(function(){
            user_id = $('#user-detail #user_id').attr('data-class')
            user_name = $('#user-detail #user_name').val()
            user_number = $('#user-detail #user_number').val()
            user_email = $('#user-detail #user_email').val()
            user_password = $('#user-detail #user_password').val()
            user_locality = $('#user-detail #user_locality').val()
            user_city = $('#user-detail #user_city').val()
            user_address = $('#user-detail #user_address').val()
            agent_box =  document.getElementById('agent_box');
            b2b_box =  document.getElementById('b2b_box');
            admin_box =  document.getElementById('admin_box');
            staff_box =  document.getElementById('staff_box');
            user_state = $('#user-detail #user_state').val()
            agent_vat = $('#user-detail #agent_vat').val()
            agent_stax = $('#user-detail #agent_stax').val()
            agent_cin = $('#user-detail #agent_cin').val()
            sms_credits = $('#user-detail #agent_sms_credits').val()

            agent_part_share = $('#user-detail #agent_part_share').val()
            agent_lube_share = $('#user-detail #agent_lube_share').val()
            agent_consumable_share = $('#user-detail #agent_consumable_share').val()
            agent_labour_share = $('#user-detail #agent_labour_share').val()
            agent_vas_share = $('#user-detail #agent_vas_share').val()
            agent_denting_share = $('#user-detail #agent_denting_share').val()

            agent = agent_box.checked
            b2b = b2b_box.checked
            admin= admin_box.checked
            staff= staff_box.checked

            error =0
            if (agent){
                if(user_state==""){
                    $('#user-detail #user_state').addClass("invalid");
                    error =1 ;
                }
                // if(agent_vat==""){
                //     $('#user-detail #agent_vat').addClass("invalid");
                //     error =1 ;
                // }
                // if(agent_stax==""){
                //     $('#user-detail #agent_stax').addClass("invalid");
                //     error =1 ;
                // }
                // if(agent_cin==""){
                //     $('#user-detail #agent_cin').addClass("invalid");
                //     error =1 ;
                // }
            }

            if(user_name==""){
                $('#user-detail #user_name').addClass("invalid");
                error = 1;
            }
            if(user_number==""){
                $('#user-detail #user_number').addClass("invalid");
                error = 1;
            }
            if(user_email==""){
                $('#user-detail #user_email').addClass("invalid");
                error = 1;
            }
            if(user_password==""){
                $('#user-detail #user_password').addClass("invalid");
                error = 1;
            }
            if(user_city==""){
                $('#user-detail #user_city').addClass("invalid");
                error = 1;
            }
            if(user_locality==""){
                $('#user-detail #user_locality').addClass("invalid");
                error = 1;
            }
            if(user_address==""){
                $('#user-detail #user_address').addClass("invalid");
                error = 1;
            }

            if(error==1){
                return;
            }else{
                Commons.ajaxData('update_user',
                    {user_id:user_id,
                        user_num: user_number,
                        user_name : user_name,
                        user_email: user_email,
                        user_add: user_address,
                        user_loc: user_locality,
                        user_city:user_city,
                        user_state :user_state,
                        agent_vat:agent_vat,
                        agent_cin:agent_cin,
                        agent_stax:agent_stax,
                        b2b_st:b2b,
                        admin_st:admin,
                        staff_st:staff,
                        agent_st:agent,
                        sms_credits:sms_credits,
                        agent_part_share : agent_part_share,
                        agent_lube_share : agent_lube_share,
                        agent_consumable_share : agent_consumable_share,
                        agent_labour_share : agent_labour_share,
                        agent_vas_share : agent_vas_share,
                        agent_denting_share : agent_denting_share
                    }
                    // {
                    // c_id: coupon_code  ,
                    //     d_start: coupon_start ,
                    //     d_end: coupon_end   ,
                    //     veh_type: coup_veh_type,
                    //     cat_id: coup_cat_type,
                    //     type: coup_type    ,
                    //     val: coup_val     ,
                    //     cap: coup_cap     ,
                    //     message: coup_message ,
                    //     active: coup_active
                    // }
                    , "get", _this, _this.loadUpdateUser,null, '.loading-pane');
            }
        });
        // -- Modify User
        var openuser = function(data_id){
            $('#user-detail .user-list').hide()
            $('#user-detail .user-add-mod').show()
            $('#user-detail  .all-user').removeClass('selected')
            $('#user-detail  .single-user').addClass('selected')
            Commons.ajaxData('fetch_all_users', {u_id:data_id}, "get", _this, _this.loadUser,null, '.loading-pane');
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/single/' + data_id
            history.pushState({},'',new_path)
        }

        $('#user-detail .user-list').on('click','.modify-btn',function(){
            user_id = $(this).closest('tr').attr('data-class')
            // console.log(user_id)
            // console.log(coupon_id)
            openuser(user_id)

        });

        // -- Switch between list and add/modify in a USer
        $('#user-detail .all-user').click(function(){
            $('#user-detail .user-list').show();
            $('#user-detail  .user-add-mod').hide();
            $('#user-detail  .single-user').removeClass('selected')
            $('#user-detail  .all-user').addClass('selected')
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/all/'
            history.pushState({},'',new_path)
        });

        $('#user-detail .single-user').click(function(){
            $('#user-detail .user-list').hide();
            $('#user-detail  .user-add-mod').show();
            $('#user-detail  .all-user').removeClass('selected')
            $('#user-detail  .single-user').addClass('selected')
            $('#user-detail #user_id').attr('data-class','')
            $('#user-detail #user_number').removeAttr('disabled')
            $('#user-detail #user_name').val('')
            $('#user-detail #user_number').val('')
            $('#user-detail #user_number').val('')
            $('#user-detail #user_email').val('')
            $('#user-detail #user_password').val('')
            $('#user-detail #user_address').val('')
            $('#user-detail #user_locality').val('')
            $('#user-detail #user_city').val('')
            document.getElementById('b2b_box').removeAttribute("checked", "");
            document.getElementById('agent_box').removeAttribute("checked", "");
            document.getElementById('admin_box').removeAttribute("checked", "");
            document.getElementById('staff_box').removeAttribute("checked", "");
            $('#user-detail #user_state').val('')
            $('#user-detail #agent_vat').val('')
            $('#user-detail #agent_cin').val('')
            $('#user-detail #agent_stax').val('')
            $('#user-detail #agent_sms_credits').val('')
            $('#user-detail #agent_part_share').val('')
            $('#user-detail #agent_lube_share').val('')
            $('#user-detail #agent_consumable_share').val('')
            $('#user-detail #agent_labour_share').val('')
            $('#user-detail #agent_vas_share').val('')
            $('#user-detail #agent_denting_share').val('')

            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/single/'
            history.pushState({},'',new_path)
        });

    },
    loadBookings:function(data){
        PAGE_NUM = PAGE_NUM + 1;
        var container = $('#bookings-list .booking-list .pre-data');
        container.html('');
        html = ''

        $.each(data, function(ix, val) {
            html += '        <div class="row card cardhover no-border-radius booking" data-class="' + val.id + '">'
            html += '            <div class="row"><div class="booking-open-btn">'
            html += '                <div class="col l1 s2 m2 booking-id-bar">'
            if (val.clickgarage_flag){
                html += '                    <b>CG #<span class="id">' + val.booking_id + '</span></b>'
            }else{
                html += '                    <b>#<span class="id">' + val.booking_id + '</span></b>'
            }
            html += '                </div>'
            if (LEAD_TYPE == "Lead"){
                html += '                <div class="col l6 s7 m7">'
            }else{
                html += '                <div class="col l4 s7 m7">'
            }
            html += '                    <div class="col l12 s12 m12">'
            // if (val.booking_user_name == ""){
            html += '                        <b>Name : </b><span class="custname">' + val.cust_name + '</span>'
            // }else{
            // html += '                        <b>Name : </b><span class="custname">' + val.booking_user_name + '</span>'
            // }
            html += '                    </div>'
            if (val.booking_user_name != val.cust_name && val.booking_user_name != ""){
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>POC Name : </b><span class="custname">' + val.booking_user_name + '</span>'
                html += '                    </div>'
            }
            html += '                    <div class="col l12 s12 m12">'
            if (val.booking_user_number == ""){
                html += '                        <b>Number : </b><span class="custname">' + val.cust_number + '</span>'
            }else{
                html += '                        <b>Number : </b><span class="custname">' + val.booking_user_number + '</span>'
            }
            html += '                    </div>'
            html += '                    <div class="col l12 s12 m12">'
            html += '                        <b><span class="custvehicletype">' + val.cust_vehicle_type + '</span>&nbsp;:&nbsp;</b><span class="vehiclename">' + val.cust_make + ' ' + val.cust_model + ' ' + val.cust_fuel_varient + ' ('+val.cust_regnumber+')</span>'
            html += '                    </div>'
            if (LEAD_TYPE == "Lead"){
                // html += '                    <div class="col l12 hide-on-med-and-down">'
                // html += '                        <b>Date & Time : </b><span class="time">' + val.follow_up_time + '</span> on <span class="date">' + val.follow_up_date + '</span>'
                // html += '                    </div>'
                // html += '                    <div class="col l12 hide-on-large-only">'
                // html += '                        <b>Date : </b><span class="date">' + val.follow_up_date + '</span>'
                // html += '                    </div>'
                // html += '                    <div class="col l12 s12 m12 hide-on-large-only">'
                // html += '                        <b>Time : </b><span class="time">' + val.follow_up_time + '</span>'
                // html += '                    </div>'

                html += '                    <div class="col l12">'
                html += '                        <b>Follow Up Date : </b><span class="date">' + val.follow_up_date + '</span>'
                html += '                    </div>'
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Follow Up Time : </b><span class="time">' + val.follow_up_time + '</span>'
                html += '                    </div>'
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Generation Date & Time: </b><span class="time">' + val.date_generated +' '+ val.time_generated + '</span>'
                html += '                    </div>'
                if (val.lead_delay_count > 0 ){
                    html += '                    <div class="col l12 s12 m12">'
                    html += '                        <b>Delay Count: </b>' + val.lead_delay_count+ '</span>'
                    html += '                    </div>'
                }


            }else{
                // html += '                    <div class="col l12 hide-on-med-and-down">'
                // html += '                        <b>Date & Time : </b><span class="time">' + val.time_booking + '</span> on <span class="date">' + val.date_booking + '</span>'
                // html += '                    </div>'
                html += '                    <div class="col l12">'
                html += '                        <b>Booking Date : </b><span class="date">' + val.date_booking + '</span>'
                html += '                    </div>'
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Booking Time : </b><span class="time">' + val.time_booking + '</span>'
                html += '                    </div>'

            }
            if (LEAD_TYPE == "Lead"){

            }else{
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Address : </b><span class="address">' + val.cust_address + ' ' + val.cust_locality + ' ' + val.cust_city + '</span>'
                html += '                    </div>'
            }
            html += '                </div>'

            if (LEAD_TYPE == "Booking"){
                html += '                <div class="col l2 centered-text hide-on-med-and-down">'
                html += '                    <b><span class="status-details">'+val.source+'</span></b>'
                html += '</div>'
                html += '                <div class="col l3 s3 m3 centered-text hide-on-med-and-down">'
                html += '                    <b><span class="agent-details">'+val.agent_details+'</span></b>'
            }else{
                html += '                <div class="col l3 s3 m3 centered-text hide-on-med-and-down">'
                html += '                    <b><span class="status-details">'+val.source+'</span></b>'
            }
            html += '                </div>'
            if (LEAD_TYPE == "Booking"){
                html += '                <div class="col l2 s3 m3 status-bar">'
                html += '                    <div class="'+val.status.replace(" ","-")+' status">' + val.status + '</div>'
                html += '                </div></div>'
            }else{
                html += '                <div class="col l2 s3 m3 status-bar-2">'
                html += '                    <div class="'+val.status.replace(" ","-")+' status">' + val.status + '</div>'
                html += '                </div></div>'

            }

            // html += '<div class="col l2 hide-on-med-and-down feedback-btn-col">'
            // // html += '<div class="row">'
            // // html += '<button status_next="" class="waves-effect status-btn-1 waves-light btn cg-primary btn-update-status page-wide" type="submit" name="action">Feedback 1'
            // // html += '<i class="material-icons right">send</i>'
            // // html += '</button>'
            // // html += '</div>'
            // html += '<div class="row">'
            // html += '<button status_next="" class="waves-effect status-btn-1 waves-light btn cg-primary btn-update-status page-wide" type="submit" name="action">Feedback'
            // html += '<i class="material-icons right">send</i>'
            // html += '</button>'
            // html += '</div></div>'
            html += '            </div>'
            html += '        </div>'
        })
        container.html(html);
        // container.find('select').material_select();
    },
    loadDelivery:function(data){
        // PAGE_NUM = PAGE_NUM + 1;
        var container = $('#delivery-list .delivery-list .pre-data');
        container.html('');
        html = ''

        $.each(data, function(ix, val) {
            html += '        <div class="row card cardhover no-border-radius booking" data-class="' + val.id + '">'
            html += '            <div class="row"><div class="booking-open-btn">'
            html += '                <div class="col l1 s2 m2 booking-id-bar">'
            html += '                    <b>#<span class="id">' + val.booking_id + '</span></b>'
            html += '                </div>'
            html += '                <div class="col l6 s7 m7">'
            html += '                    <div class="col l12 s12 m12">'
            // if (val.booking_user_name == ""){
            html += '                        <b>Name : </b><span class="custname">' + val.cust_name + '</span>'
            // }else{
            // html += '                        <b>Name : </b><span class="custname">' + val.booking_user_name + '</span>'
            // }
            html += '                    </div>'
            if (val.booking_user_name != val.cust_name && val.booking_user_name != ""){
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>POC Name : </b><span class="custname">' + val.booking_user_name + '</span>'
                html += '                    </div>'
            }
            html += '                    <div class="col l12 s12 m12">'
            if (val.booking_user_number == ""){
                html += '                        <b>Number : </b><span class="custname">' + val.cust_number + '</span>'
            }else{
                html += '                        <b>Number : </b><span class="custname">' + val.booking_user_number + '</span>'
            }
            html += '                    </div>'
            html += '                    <div class="col l12 s12 m12">'
            html += '                        <b><span class="custvehicletype">' + val.cust_vehicle_type + '</span>&nbsp;:&nbsp;</b><span class="vehiclename">' + val.cust_make + ' ' + val.cust_model + ' ' + val.cust_fuel_varient + ' ('+val.cust_regnumber+')</span>'
            html += '                    </div>'
            if (LEAD_TYPE == "Lead"){
                // html += '                    <div class="col l12 hide-on-med-and-down">'
                // html += '                        <b>Date & Time : </b><span class="time">' + val.follow_up_time + '</span> on <span class="date">' + val.follow_up_date + '</span>'
                // html += '                    </div>'
                // html += '                    <div class="col l12 hide-on-large-only">'
                // html += '                        <b>Date : </b><span class="date">' + val.follow_up_date + '</span>'
                // html += '                    </div>'
                // html += '                    <div class="col l12 s12 m12 hide-on-large-only">'
                // html += '                        <b>Time : </b><span class="time">' + val.follow_up_time + '</span>'
                // html += '                    </div>'

                html += '                    <div class="col l12">'
                html += '                        <b>Follow Up Date : </b><span class="date">' + val.follow_up_date + '</span>'
                html += '                    </div>'
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Follow Up Time : </b><span class="time">' + val.follow_up_time + '</span>'
                html += '                    </div>'
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Generation Date : </b><span class="time">' + val.date_generated + '</span>'
                html += '                    </div>'


            }else{
                // html += '                    <div class="col l12 hide-on-med-and-down">'
                // html += '                        <b>Date & Time : </b><span class="time">' + val.time_booking + '</span> on <span class="date">' + val.date_booking + '</span>'
                // html += '                    </div>'
                html += '                    <div class="col l12">'
                html += '                        <b>Booking Date : </b><span class="date">' + val.date_booking + '</span>'
                html += '                    </div>'
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Booking Time : </b><span class="time">' + val.time_booking + '</span>'
                html += '                    </div>'

            }
            if (LEAD_TYPE == "Lead"){

            }else{
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Address : </b><span class="address">' + val.cust_address + ' ' + val.cust_locality + ' ' + val.cust_city + '</span>'
                html += '                    </div>'
            }
            html += '                </div>'
            html += '                <div class="col l3 s3 m3 centered-text hide-on-med-and-down">'
            if (LEAD_TYPE == "Booking"){
                html += '                    <b><span class="agent-details">'+val.agent_details+'</span></b>'
            }else{
                html += '                    <b><span class="status-details">'+val.source+'</span></b>'
            }
            html += '                </div>'
            if (LEAD_TYPE == "Booking"){
                html += '                <div class="col l2 s3 m3 status-bar">'
                html += '                    <div class="'+val.status.replace(" ","-")+' status">' + val.status + '</div>'
                html += '                </div></div>'
            }else{
                html += '                <div class="col l2 s3 m3 status-bar-2">'
                html += '                    <div class="'+val.status.replace(" ","-")+' status">' + val.status + '</div>'
                html += '                </div></div>'

            }

            // html += '<div class="col l2 hide-on-med-and-down feedback-btn-col">'
            // // html += '<div class="row">'
            // // html += '<button status_next="" class="waves-effect status-btn-1 waves-light btn cg-primary btn-update-status page-wide" type="submit" name="action">Feedback 1'
            // // html += '<i class="material-icons right">send</i>'
            // // html += '</button>'
            // // html += '</div>'
            // html += '<div class="row">'
            // html += '<button status_next="" class="waves-effect status-btn-1 waves-light btn cg-primary btn-update-status page-wide" type="submit" name="action">Feedback'
            // html += '<i class="material-icons right">send</i>'
            // html += '</button>'
            // html += '</div></div>'
            html += '            </div>'
            html += '        </div>'
        })
        container.html(html);
        // container.find('select').material_select();
    },
    loadBookings2:function(data){
        // $('#bookings .loading-page').show()
        PAGE_NUM = PAGE_NUM + 1;
        var container = $('#bookings-list .booking-list .pre-data');
        // container.html('');
        html = container.html()

        $.each(data, function(ix, val) {
            html += '        <div class="row card cardhover no-border-radius booking" data-class="' + val.id + '">'
            html += '            <div class="row"><div class="booking-open-btn">'
            html += '                <div class="col l1 s2 m2 booking-id-bar">'
            if (val.clickgarage_flag){
                html += '                    <b>CG #<span class="id">' + val.booking_id + '</span></b>'
            }else{
                html += '                    <b>#<span class="id">' + val.booking_id + '</span></b>'
            }
            html += '                </div>'
            if (LEAD_TYPE == "Lead"){
                html += '                <div class="col l6 s7 m7">'
            }else{
                html += '                <div class="col l4 s7 m7">'
            }
            html += '                    <div class="col l12 s12 m12">'
            // if (val.booking_user_name == ""){
            html += '                        <b>Name : </b><span class="custname">' + val.cust_name + '</span>'
            // }else{
            // html += '                        <b>Name : </b><span class="custname">' + val.booking_user_name + '</span>'
            // }
            html += '                    </div>'
            if (val.booking_user_name != val.cust_name && val.booking_user_name != ""){
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>POC Name : </b><span class="custname">' + val.booking_user_name + '</span>'
                html += '                    </div>'
            }
            html += '                    <div class="col l12 s12 m12">'
            if (val.booking_user_number == ""){
                html += '                        <b>Number : </b><span class="custname">' + val.cust_number + '</span>'
            }else{
                html += '                        <b>Number : </b><span class="custname">' + val.booking_user_number + '</span>'
            }
            html += '                    </div>'
            html += '                    <div class="col l12 s12 m12">'
            html += '                        <b><span class="custvehicletype">' + val.cust_vehicle_type + '</span>&nbsp;:&nbsp;</b><span class="vehiclename">' + val.cust_make + ' ' + val.cust_model + ' ' + val.cust_fuel_varient + ' ('+val.cust_regnumber+')</span>'
            html += '                    </div>'
            if (LEAD_TYPE == "Lead"){
                // html += '                    <div class="col l12 hide-on-med-and-down">'
                // html += '                        <b>Date & Time : </b><span class="time">' + val.follow_up_time + '</span> on <span class="date">' + val.follow_up_date + '</span>'
                // html += '                    </div>'
                // html += '                    <div class="col l12 hide-on-large-only">'
                // html += '                        <b>Date : </b><span class="date">' + val.follow_up_date + '</span>'
                // html += '                    </div>'
                // html += '                    <div class="col l12 s12 m12 hide-on-large-only">'
                // html += '                        <b>Time : </b><span class="time">' + val.follow_up_time + '</span>'
                // html += '                    </div>'

                html += '                    <div class="col l12">'
                html += '                        <b>Follow Up Date : </b><span class="date">' + val.follow_up_date + '</span>'
                html += '                    </div>'
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Follow Up Time : </b><span class="time">' + val.follow_up_time + '</span>'
                html += '                    </div>'
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Generation Date & Time: </b><span class="time">' + val.date_generated +' '+ val.time_generated + '</span>'
                html += '                    </div>'
                if (val.lead_delay_count > 0 ){
                    html += '                    <div class="col l12 s12 m12">'
                    html += '                        <b>Delay Count: </b>' + val.lead_delay_count+ '</span>'
                    html += '                    </div>'
                }

            }else{
                // html += '                    <div class="col l12 hide-on-med-and-down">'
                // html += '                        <b>Date & Time : </b><span class="time">' + val.time_booking + '</span> on <span class="date">' + val.date_booking + '</span>'
                // html += '                    </div>'
                html += '                    <div class="col l12">'
                html += '                        <b>Booking Date : </b><span class="date">' + val.date_booking + '</span>'
                html += '                    </div>'
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Booking Time : </b><span class="time">' + val.time_booking + '</span>'
                html += '                    </div>'

            }
            if (LEAD_TYPE == "Lead"){

            }else{
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Address : </b><span class="address">' + val.cust_address + ' ' + val.cust_locality + ' ' + val.cust_city + '</span>'
                html += '                    </div>'
            }
            html += '                </div>'

            if (LEAD_TYPE == "Booking"){
                html += '                <div class="col l2 centered-text hide-on-med-and-down">'
                html += '                    <b><span class="status-details">'+val.source+'</span></b>'
                html += '</div>'
                html += '                <div class="col l3 s3 m3 centered-text hide-on-med-and-down">'
                html += '                    <b><span class="agent-details">'+val.agent_details+'</span></b>'
            }else{
                html += '                <div class="col l3 s3 m3 centered-text hide-on-med-and-down">'
                html += '                    <b><span class="status-details">'+val.source+'</span></b>'
            }
            html += '                </div>'
            if (LEAD_TYPE == "Booking"){
                html += '                <div class="col l2 s3 m3 status-bar">'
                html += '                    <div class="'+val.status.replace(" ","-")+' status">' + val.status + '</div>'
                html += '                </div></div>'
            }else{
                html += '                <div class="col l2 s3 m3 status-bar-2">'
                html += '                    <div class="'+val.status.replace(" ","-")+' status">' + val.status + '</div>'
                html += '                </div></div>'

            }

            // html += '<div class="col l2 hide-on-med-and-down feedback-btn-col">'
            // // html += '<div class="row">'
            // // html += '<button status_next="" class="waves-effect status-btn-1 waves-light btn cg-primary btn-update-status page-wide" type="submit" name="action">Feedback 1'
            // // html += '<i class="material-icons right">send</i>'
            // // html += '</button>'
            // // html += '</div>'
            // html += '<div class="row">'
            // html += '<button status_next="" class="waves-effect status-btn-1 waves-light btn cg-primary btn-update-status page-wide" type="submit" name="action">Feedback'
            // html += '<i class="material-icons right">send</i>'
            // html += '</button>'
            // html += '</div></div>'
            html += '            </div>'
            html += '        </div>'
        })
        container.html(html);
        // $('#bookings .loading-page').hide()
        // container.find('select').material_select();
    },
    loadDelivery2:function(data){
        // $('#bookings .loading-page').show()
        // PAGE_NUM = PAGE_NUM + 1
        var container = $('#delivery-list .delivery-list .pre-data');
        // container.html('');
        html = container.html()

        $.each(data, function(ix, val) {
            html += '        <div class="row card cardhover no-border-radius booking" data-class="' + val.id + '">'
            html += '            <div class="row"><div class="booking-open-btn">'
            html += '                <div class="col l1 s2 m2 booking-id-bar">'
            html += '                    <b>#<span class="id">' + val.booking_id + '</span></b>'
            html += '                </div>'
            html += '                <div class="col l6 s7 m7">'
            html += '                    <div class="col l12 s12 m12">'
            // if (val.booking_user_name == ""){
            html += '                        <b>Name : </b><span class="custname">' + val.cust_name + '</span>'
            // }else{
            // html += '                        <b>Name : </b><span class="custname">' + val.booking_user_name + '</span>'
            // }
            html += '                    </div>'
            if (val.booking_user_name != val.cust_name && val.booking_user_name != ""){
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>POC Name : </b><span class="custname">' + val.booking_user_name + '</span>'
                html += '                    </div>'
            }
            html += '                    <div class="col l12 s12 m12">'
            if (val.booking_user_number == ""){
                html += '                        <b>Number : </b><span class="custname">' + val.cust_number + '</span>'
            }else{
                html += '                        <b>Number : </b><span class="custname">' + val.booking_user_number + '</span>'
            }
            html += '                    </div>'
            html += '                    <div class="col l12 s12 m12">'
            html += '                        <b><span class="custvehicletype">' + val.cust_vehicle_type + '</span>&nbsp;:&nbsp;</b><span class="vehiclename">' + val.cust_make + ' ' + val.cust_model + ' ' + val.cust_fuel_varient + ' ('+val.cust_regnumber+')</span>'
            html += '                    </div>'
            if (LEAD_TYPE == "Lead"){
                // html += '                    <div class="col l12 hide-on-med-and-down">'
                // html += '                        <b>Date & Time : </b><span class="time">' + val.follow_up_time + '</span> on <span class="date">' + val.follow_up_date + '</span>'
                // html += '                    </div>'
                // html += '                    <div class="col l12 hide-on-large-only">'
                // html += '                        <b>Date : </b><span class="date">' + val.follow_up_date + '</span>'
                // html += '                    </div>'
                // html += '                    <div class="col l12 s12 m12 hide-on-large-only">'
                // html += '                        <b>Time : </b><span class="time">' + val.follow_up_time + '</span>'
                // html += '                    </div>'

                html += '                    <div class="col l12">'
                html += '                        <b>Follow Up Date : </b><span class="date">' + val.follow_up_date + '</span>'
                html += '                    </div>'
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Follow Up Time : </b><span class="time">' + val.follow_up_time + '</span>'
                html += '                    </div>'
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Generation Date : </b><span class="time">' + val.date_generated + '</span>'
                html += '                    </div>'


            }else{
                // html += '                    <div class="col l12 hide-on-med-and-down">'
                // html += '                        <b>Date & Time : </b><span class="time">' + val.time_booking + '</span> on <span class="date">' + val.date_booking + '</span>'
                // html += '                    </div>'
                html += '                    <div class="col l12">'
                html += '                        <b>Booking Date : </b><span class="date">' + val.date_booking + '</span>'
                html += '                    </div>'
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Booking Time : </b><span class="time">' + val.time_booking + '</span>'
                html += '                    </div>'

            }
            if (LEAD_TYPE == "Lead"){

            }else{
                html += '                    <div class="col l12 s12 m12">'
                html += '                        <b>Address : </b><span class="address">' + val.cust_address + ' ' + val.cust_locality + ' ' + val.cust_city + '</span>'
                html += '                    </div>'
            }
            html += '                </div>'
            html += '                <div class="col l3 s3 m3 centered-text hide-on-med-and-down">'
            if (LEAD_TYPE == "Booking"){
                html += '                    <b><span class="agent-details">'+val.agent_details+'</span></b>'
            }else{
                html += '                    <b><span class="status-details">'+val.source+'</span></b>'
            }
            html += '                </div>'
            if (LEAD_TYPE == "Booking"){
                html += '                <div class="col l2 s3 m3 status-bar">'
                html += '                    <div class="'+val.status.replace(" ","-")+' status">' + val.status + '</div>'
                html += '                </div></div>'
            }else{
                html += '                <div class="col l2 s3 m3 status-bar-2">'
                html += '                    <div class="'+val.status.replace(" ","-")+' status">' + val.status + '</div>'
                html += '                </div></div>'

            }

            // html += '<div class="col l2 hide-on-med-and-down feedback-btn-col">'
            // // html += '<div class="row">'
            // // html += '<button status_next="" class="waves-effect status-btn-1 waves-light btn cg-primary btn-update-status page-wide" type="submit" name="action">Feedback 1'
            // // html += '<i class="material-icons right">send</i>'
            // // html += '</button>'
            // // html += '</div>'
            // html += '<div class="row">'
            // html += '<button status_next="" class="waves-effect status-btn-1 waves-light btn cg-primary btn-update-status page-wide" type="submit" name="action">Feedback'
            // html += '<i class="material-icons right">send</i>'
            // html += '</button>'
            // html += '</div></div>'
            html += '            </div>'
            html += '        </div>'
        })
        container.html(html);
        // $('#bookings .loading-page').hide();

        // container.find('select').material_select();
    },
    loadUsers:function(data){
        container =        $('#user-details .user-list .pre-data')
        container.html('')
        html=''
        i=1
        // html += '								<div class="desc-content col s12 m12 l12">';
        // html += '									<table class="striped">';
        // html += '										<thead>';
        // html += '										<tr>';
        // html += '											<th data-field="id">S.No.</th>';
        // html += '											<th data-field="name">Name</th>';
        // html += '											<th data-field="number">Number</th>';
        // html += '											<th data-field="email">Email</th>';
        //
        // html += '											<th data-field="agent">Engineer</th>';
        // html += '											<th data-field="b2b">B2B</th>';
        // html += '											<th data-field="staff">Staff</th>';
        // html += '											<th data-field="admin">Admin</th>';
        // html += '											<th data-field="modify"></th>';
        // html += '										</tr>';
        // html += '										</thead>';
        // html += '										<tbody>';
        $.each(data, function(ix, val) {
            html2 = ""
            html2 += '								<div class="desc-content col s12 m12 l12">';
            html2 += '									<table class="card striped">';
            html2 += '										<thead>';
            html2 += '										<tr>';
            html2 += '											<th data-field="id">S.No.</th>';
            html2 += '											<th data-field="name">Name</th>';
            html2 += '											<th data-field="number">Number</th>';
            html2 += '											<th data-field="email">Email</th>';
            if (val.req_user_staff || val.req_user_admin){
                html2 += '											<th data-field="agent">Engineer</th>';
                html2 += '											<th data-field="b2b">B2B</th>';
                html2 += '											<th data-field="staff">Staff</th>';
                html2 += '											<th data-field="admin">Admin</th>';
            }
            html2 += '											<th data-field="modify"></th>';
            html2 += '										</tr>';
            html2 += '										</thead>';
            html2 += '										<tbody>';


            html += '<tr class="coupon-row" data-class="'+val.id+'">'
            html += '											<td>'+i+'</td>';
            html += '											<td>'+val.first_name+' '+val.last_name+'</td>';
            html += '											<td>'+val.phone+'</td>';
            html += '											<td>'+val.email_primary+'</td>';
            if (val.req_user_staff || val.req_user_admin) {
                if (val.agent) {
                    html += '											<td><i style="color:green" class="fa fa-circle"></i></td>';
                } else {
                    html += '											<td><i style="color:red" class="fa fa-circle"></i></td>';
                }
                if (val.b2b) {
                    html += '											<td><i style="color:green" class="fa fa-circle"></i></td>';
                } else {
                    html += '											<td><i style="color:red" class="fa fa-circle"></i></td>';
                }
                if (val.staff) {
                    html += '											<td><i style="color:green" class="fa fa-circle"></i></td>';
                } else {
                    html += '											<td><i style="color:red" class="fa fa-circle"></i></td>';
                }
                if (val.admin) {
                    html += '											<td><i style="color:green" class="fa fa-circle"></i></td>';
                } else {
                    html += '											<td><i style="color:red" class="fa fa-circle"></i></td>';
                }
            }
            html += '											<td style="color:purple; cursor:pointer" class="modify-btn"><i class="fa fa-pencil"></i></td>';
            html += '										</tr>';
            i=i+1
        })

        html += '										</tbody>';
        html += '									</table>';
        html += '								</div>';
        html3 = html2
        html3 +=html
        container.html(html3);
    },
    loadUser:function(data){
        $('#user-detail #user_id').attr('data-class','')
        $('#user-detail #user_number').removeAttr('disabled')
        $('#user-detail #user_name').val('')
        $('#user-detail #user_number').val('')
        $('#user-detail #user_number').val('')
        $('#user-detail #user_email').val('')
        $('#user-detail #user_password').val('')
        $('#user-detail #user_address').val('')
        $('#user-detail #user_locality').val('')
        $('#user-detail #user_city').val('')
        document.getElementById('b2b_box').removeAttribute("checked", "");;
        document.getElementById('agent_box').removeAttribute("checked", "");;
        document.getElementById('admin_box').removeAttribute("checked", "");;
        document.getElementById('staff_box').removeAttribute("checked", "");;

        $.each(data, function(ix, val) {
            $('#user-detail #user_id').attr('data-class',val.id);
            $('#user-detail #user_name').val(val.first_name +" "+val.last_name);
            $('#user-detail #user_number').val(val.phone);
            $('#user-detail #user_number').attr('disabled',"")
            // try:
            try {
                $('#user-detail #user_email').val(val.email_primary);
            } catch (e) {

            }
            try {
                $('#user-detail #user_address').val(val.user_address)
                $('#user-detail #user_locality').val(val.user_locality)
                $('#user-detail #user_city').val(val.user_city)
            } catch (e) {

            }
            try {
                $('#user-detail #user_state').val(val.user_state);
            } catch (e) {

            }
            try {
                $('#user-detail #agent_cin').val(val.agent_cin);
            } catch (e) {

            }
            try {
                $('#user-detail #agent_vat').val(val.agent_vat);
            } catch (e) {

            }

            try {
                $('#user-detail #agent_stax').val(val.agent_stax);
            } catch (e) {

            }

            try {
                $('#user-detail #agent_sms_credits').val(val.agent_sms_credits);
            } catch (e){

            }



            try {
                $('#user-detail #agent_part_share').val(val.agent_part_share);
            } catch (e){

            }
            try {
                $('#user-detail #agent_lube_share').val(val.agent_lube_share);
            } catch (e){

            }

            try {
                $('#user-detail #agent_consumable_share').val(val.agent_consumable_share);
            } catch (e){

            }
            try {
                $('#user-detail #agent_labour_share').val(val.agent_labour_share);
            } catch (e){

            }
            try {
                $('#user-detail #agent_vas_share').val(val.agent_vas_share);
            } catch (e){

            }
            try {
                $('#user-detail #agent_denting_share').val(val.agent_denting_share);
            } catch (e){

            }

            if (val.agent){
                document.getElementById('agent_box').setAttribute("checked", "");
            }
            if (val.b2b){
                document.getElementById('b2b_box').setAttribute("checked", "");
            }
            if (val.staff){
                document.getElementById('staff_box').setAttribute("checked", "");
            }
            if (val.admin){
                document.getElementById('admin_box').setAttribute("checked", "");
            }

        });
        Materialize.updateTextFields();
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
            html += '<div id="booking_id" class="col s12 m12 l12 book_id" booking_data_id="' + val.id + '" booking_id="' + val.booking_id + '"><h4><b>#' + val.booking_id + '</h4></b></div>'
            html += '</div>'
            html += '<div class="row">'
            html += '<div class="col s12 m12 l12">'
            html += '<div class="status-2 ' + val.status.replace(" ", "-") + '">' + val.status + '</div>'
            html += '</div>'
            html += '</div>'

            html += '<div class="row card">'
            if (val.req_user_staff || val.req_user_admin) {
                html += '<div class="row">'
                if (val.booking_user_name != val.cust_name) {
                    html += '<div class="col s12 m12 l12">'
                    html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="b2b_name" disabled type="text"  value ="' + val.cust_name + '"class="validate"><label for="cust_name">Company Name</label></div>'
                    html += '</div>'
                }
                html += '<div class="col s12 m12 l6">'
                if (val.booking_user_name == "") {
                    html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="cust_name" type="text"  value ="' + val.cust_name + '"class="validate"><label for="cust_name">Name</label></div>'
                } else {
                    html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="cust_name" type="text"  value ="' + val.booking_user_name + '"class="validate"><label for="cust_name">Name</label></div>'
                }
                html += '</div>'
                html += '<div class="col s8 m8 l4">'
                if (val.booking_user_number == "") {
                    html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="cust_number" type="text"   value ="' + val.cust_number + '"class="validate"><label for="cust_number">Number</label></div>'
                } else {
                    html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="cust_number" type="text"   value ="' + val.booking_user_number + '"class="validate"><label for="cust_number">Number</label></div>'
                }
                html += '</div>'
                html += '<div class="col s4 m4 l2">'
                html += '<button class="waves-effect waves-light btn cg-primary btn-callcustomer page-wide" type="submit" name="action">Call<i class="material-icons right">phone</i></button>'
                html += '</div>'

                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">my_location</i><input id="cust_address" type="text"   value ="' + val.cust_address + '"class="validate"><label for="cust_address">Address</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">location_on</i><input id="cust_locality" type="text"   value ="' + val.cust_locality + '"class="validate"><label for="cust_address">Locality</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">business</i><input id="cust_city" type="text"   value ="' + val.cust_city + '"class="validate"><label for="cust_address">City</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_coupon" type="text"  disabled   value ="' + val.coupon + '"class="validate"><label for="cust_coupon">Coupon</label></div>'
                html += '</div>'

                VEHICLE_TYPE = val.cust_vehicle_type
                VEHICLE_MAKE = val.cust_make
                VEHICLE_MODEL = val.cust_model
                VEHICLE_FUEL = val.cust_fuel_varient
                html += '</div>'
                html += '<div class="row">'
                html += '<div class="col s12 m12 l1">'
                html += '<b>Vehicle : </b>'
                html += '</select></div>'

                html += '<div class="col s4 m4 l4">'
                html += '<select id="brand-cust" class="browser-default">'
                html += '</select></div>'

                html += '<div class="col s8 m8 l7">'
                html += '<select id="make-cust" class="browser-default">'
                html += '</select></div>'
                html += '</div><br>'

                html += '<div class="row">'

                // html += '<div class="col s12 m12 l6">'
                // html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_vehicle" type="text"  disabled   value ="' + val.cust_make + ' ' + val.cust_model + ' ' + val.cust_fuel_varient + '"class="validate"><label for="cust_vehicle">' + val.cust_vehicle_type + '</label></div>'
                // html += '</div>'


                // html += '<div class="col s12 m12 l6">'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="agent_details" type="text" disabled  value ="' + val.agent_details + '"class="validate"><label for="agent_details">Engineer Details</label></div>'
                html += '</div>'

                html += '<div class="col s8 m8 l4">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_amount_paid" disabled type="number" value ="' + val.amount_paid + '"class="validate"><label for="cust_amount_paid">Amount Paid</label></div>'
                html += '</div>'

                html += '<div class="col s4 m4 l2">'
                if (val.bill_generation_flag) {
                    html += '<button class="waves-effect waves-light btn cg-primary btn-modifypayement page-wide" disabled type="submit" name="action">Modify<i class="material-icons right">mode_edit</i></button>'
                } else {
                    html += '<button class="waves-effect waves-light btn cg-primary btn-modifypayement page-wide" type="submit" name="action">Modify<i class="material-icons right">mode_edit</i></button>'
                }
                html += '</div>'
                html += '</div>'
                html += '<div class="row">'
                html += '<div class="col s12 m12 l1 header">'
                html += '<b>Source:</b>'
                html += '</div>'
                html += '<div class="col s12 m12 l11">'
                html += '<div class="input-field source-admin">'
                // html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="source" type="text"   value ="' + val.source + '"class="validate"><label for="source">Source</label></div>'
                html += '<select id="source" class="browser-default">'
                html += '<option value="">Source</option>'
                sourcelen = SOURCES.length;
                for (i = 0; i < sourcelen; i++) {
                    if (val.source == SOURCES[i]) {
                        html += '<option value="' + SOURCES[i] + '" selected>' + SOURCES[i] + '</option>'
                    } else {
                        html += '<option value="' + SOURCES[i] + '">' + SOURCES[i] + '</option>'
                    }
                }
                html += '</select>'
                html += '</div>'
                html += '</div>'
                html += '</div>'
            } else {
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
                if (val.req_user_agent) {
                    html += '<div class="col s8 m8 l4">'
                    if (val.booking_user_number == "") {
                        html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="cust_number" type="text"   value ="' + val.cust_number + '"class="validate"><label for="cust_number">Number</label></div>'
                    } else {
                        html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="cust_number" type="text"   value ="' + val.booking_user_number + '"class="validate"><label for="cust_number">Number</label></div>'
                    }
                    html += '</div>'
                    html += '<div class="col s4 m4 l2">'
                    html += '<button class="waves-effect waves-light btn cg-primary btn-callcustomer page-wide" type="submit" name="action">Call<i class="material-icons right">phone</i></button>'
                    html += '</div>'


                } else {
                    html += '<div class="col s12 m12 l6">'
                    if (val.booking_user_number == "") {
                        html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="cust_number" type="text"  disabled value ="' + val.cust_number + '"class="validate"><label for="cust_number">Number</label></div>'
                    } else {
                        html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="cust_number" type="text"  disabled value ="' + val.booking_user_number + '"class="validate"><label for="cust_number">Number</label></div>'
                    }
                    html += '</div>'
                }
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">my_location</i><input id="cust_address" disabled type="text"   value ="' + val.cust_address + '"class="validate"><label for="cust_address">Address</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">location_on</i><input id="cust_locality" disabled  type="text"   value ="' + val.cust_locality + '"class="validate"><label for="cust_address">Locality</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">business</i><input id="cust_city" type="text" disabled    value ="' + val.cust_city + '"class="validate"><label for="cust_address">City</label></div>'
                html += '</div>'
                // html += '<div class="col s12 m12 l6">'
                // html += '<div class="input-field"><i class="material-icons prefix">my_location</i><input id="cust_address" type="text"  disabled value ="' + val.cust_address + ', ' + val.cust_locality + ', ' + val.cust_city + '"class="validate"><label for="cust_address">Address</label></div>'
                // html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_vehicle" type="text" disabled  value ="' + val.cust_make + ' ' + val.cust_model + ' ' + val.cust_fuel_varient + '"class="validate"><label for="cust_vehicle">' + val.cust_vehicle_type + '</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_coupon" type="text" disabled  value ="' + val.coupon + '"class="validate"><label for="cust_coupon">Coupon</label></div>'
                html += '</div>'
                if (val.req_user_agent) {
                    html += '<div class="col s8 m8 l4">'
                    html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_amount_paid" disabled type="number" value ="' + val.amount_paid + '"class="validate"><label for="cust_amount_paid">Amount Paid</label></div>'
                    html += '</div>'
                    html += '<div class="col s4 m4 l2">'
                    if (val.bill_generation_flag) {
                        html += '<button class="waves-effect waves-light btn cg-primary btn-modifypayement page-wide" disabled type="submit" name="action">Modify<i class="material-icons right">mode_edit</i></button>'
                    } else {
                        html += '<button class="waves-effect waves-light btn cg-primary btn-modifypayement page-wide" type="submit" name="action">Modify<i class="material-icons right">mode_edit</i></button>'
                    }
                    html += '</div>'
                } else {
                    html += '<div class="col s12 m12 l6">'
                    html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_amount_paid" disabled type="number" value ="' + val.amount_paid + '"class="validate"><label for="cust_amount_paid">Amount Paid</label></div>'
                    html += '</div>'
                }
                html += '</div>'
                html += '<div class="row">'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="source" type="text" disabled  value ="' + val.source + '"class="validate"><label for="source">Source</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="agent_details" type="text" disabled  value ="' + val.agent_details + '"class="validate"><label for="agent_details">Engineer Details</label></div>'
                html += '</div>'
                html += '</div>'
            }
            // if (is_agent)
            if (val.req_user_agent || val.req_user_staff || val.req_user_admin) {


                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">email</i><input id="email" type="email" value ="' + val.cust_email + '"class="validate"><label for="email">Email</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_regnumber" type="text" value ="' + val.cust_regnumber + '"class="validate" style="text-transform: uppercase;"><label for="cust_regnumber">#Registration</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">av_timer</i><input id="cust_odometer" type="number" value ="' + val.odometer + '"class="validate"><label for="cust_odometer">#Odometer</label></div>'
                html += '</div>'
                if (!val.booking_flag) {
                    html += '<div class="col s12 m12 l12">'
                    html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date_follow" type="date" class="datepicker"><label for="date_follow">Date Follow</label></div>'
                    html += '</div>'
                    // html += '<div class="row">'
                    html += '<div class="col s12 m12 l12">'
                    // html += '<div class="input-field"><i class="material-icons prefix">today</i><label for="time_follow">Time Follow</label><input id="time_follow" type="time" class="timepicker"></div>'
                    //     time ui-timepicker-input
                    html += '<div class="input-field"><i class="material-icons prefix">today</i><label for="time_follow">Time Follow</label><input id="time_follow" type="text" name="timepicker" class="time ui-timepicker-input"/></div>'

                    html += '</div>'

                }
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date" type="date" class="datepicker"><label for="date">Date Booking</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="time_booking" type="text" value ="' + val.time_booking + '"class="validate"><label for="time_booking">Time Booking</label></div>'
                html += '</div>'
                if (val.booking_flag) {
                    html += '<div class="col s12 m12 l12">'
                    // html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date" type="date" value ="' + val.date_booking + '"class="datepicker"><label for="date">Date</label></div>'
                    html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date_delivery" type="date" class="datepicker"><label for="date">Date Delivery</label></div>'
                    html += '</div>'
                    html += '<div class="col s6 m6 l6">'
                    html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="driver_pick_name" type="text" value ="' + val.driver_pick_name + '"class="validate"><label for="driver_pick_name">PickUp Driver Name</label></div>'
                    html += '</div>'
                    html += '<div class="col s6 m6 l6">'
                    html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="driver_pick_number" type="number"   value ="' + val.driver_pick_number + '"class="validate"><label for="driver_pick_number">PickUp Driver Number</label></div>'
                    html += '</div>'

                    html += '<div class="col s6 m6 l6">'
                    html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="driver_drop_name" type="text"   value ="' + val.driver_drop_name + '"class="validate"><label for="driver_drop_name">Drop Driver Name</label></div>'
                    html += '</div>'
                    html += '<div class="col s6 m6 l6">'
                    html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="driver_drop_number" type="number"   value ="' + val.driver_drop_number + '"class="validate"><label for="driver_drop_number">Drop Driver Number</label></div>'
                    html += '</div>'

                }
                // html += '<div class="col s12 m12 l12">'
                // html += '<div class="input-field"><i class="material-icons prefix">receipt</i><textarea id="comments" type="text" class="materialize-textarea">' + val.comments + '</textarea><label for="comments">Jobs Summary</label></div>'
                // html += '</div>'

                // Job Summary
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><textarea id="notes" type="text" class="materialize-textarea">' + val.customer_notes + '</textarea><label for="notes">Customer Notes</label></div>'
                html += '</div>'
                if (val.escalation_flag) {
                    html += '<div class="col s12 m12 l12">'
                    html += '<div class="input-field"><i class="material-icons prefix">receipt</i><textarea id="escalation_reason" type="text" class="materialize-textarea">' + val.escalation_reason + '</textarea><label for="escalation_reason">Escalation Reason</label></div>'
                    html += '</div>'

                    html += '<div class="col s12 m12 l12">'
                    html += '<div class="input-field"><i class="material-icons prefix">receipt</i><textarea id="escalation_resolution" type="text"  class="materialize-textarea">' + val.escalation_resolution + '</textarea><label for="escalation_resolution">Escalation Resolution</label></div>'
                    html += '</div>'
                } else {
                    html += '<div class="col s12 m12 l12 invisible">'
                    html += '<div class="input-field"><i class="material-icons prefix">receipt</i><textarea id="escalation_reason" type="text" class="materialize-textarea">' + val.escalation_reason + '</textarea><label for="escalation_reason">Escalation Reason</label></div>'
                    html += '</div>'

                    html += '<div class="col s12 m12 l12 invisible">'
                    html += '<div class="input-field"><i class="material-icons prefix">receipt</i><textarea id="escalation_resolution" type="text"  class="materialize-textarea">' + val.escalation_resolution + '</textarea><label for="escalation_resolution">Escalation Resolution</label></div>'
                    html += '</div>'
                }


                html_jc = ''
                // html_jc += '<div class="col s12 m12 l12">'
                html_jc += '<b>JOBS CARD DETAILS</b><br><br>'
                html_jc_c = ''
                html_jc_r = ''

                jobLen = val.job_summary.length;


                for (i = 0; i < jobLen; i++) {
                    // for (i = 0; i < 2; i++) {
                    if ((val.job_summary[i]['Type'] == "Request") || (val.job_summary[i]['Type']==null) ||  (val.job_summary[i]['Type']===false)){
                        html_jc_r += '<div class="row job-row" data-class="Request">'

                        html_jc_r += '<div class="col s7 m7 l7 job-summary-name">'
                        html_jc_r += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="job_name' + i + '"  type="text" value="' + val.job_summary[i]['Job'] + '"><label for="job_name' + i + '" >Job - ' + (i + 1) + '</label></div>'
                        html_jc_r += '</div>'
                        if (val.job_summary[i]['Preok']) {
                            html_jc_r += '<div class="col s1 m1 l1 job-summary-pre-ok centered-text">'
                            html_jc_r += '<input type="radio" name="groupok' + (i + 1) + '" checked id="pre-ok-' + (i + 1) + '" /><label for="pre-ok-' + (i + 1) + '"></label>'
                            html_jc_r += '</div>'
                        } else {
                            html_jc_r += '<div class="col s1 m1 l1 job-summary-pre-ok centered-text">'
                            html_jc_r += '<input type="radio" name="groupok' + (i + 1) + '" id="pre-ok-' + (i + 1) + '" /><label for="pre-ok-' + (i + 1) + '"></label>'
                            html_jc_r += '</div>'

                        }
                        if (val.job_summary[i]['Prenotok']) {
                            html_jc_r += '<div class="col s1 m1 l1 job-summary-pre-notok centered-text">'
                            html_jc_r += '<input type="radio" name="groupok' + (i + 1) + '" checked id="pre-notok-' + (i + 1) + '" /><label for="pre-notok-' + (i + 1) + '"></label>'
                            html_jc_r += '</div>'
                        } else {
                            html_jc_r += '<div class="col s1 m1 l1 job-summary-pre-notok centered-text">'
                            html_jc_r += '<input type="radio" name="groupok' + (i + 1) + '" id="pre-notok-' + (i + 1) + '" /><label for="pre-notok-' + (i + 1) + '"></label>'
                            html_jc_r += '</div>'

                        }
                        if (val.req_user_agent){
                            if(val.post_check_enable){
                                if (val.job_summary[i]['Postok']) {
                                    html_jc_r += '<div class="col s1 m1 l1 job-summary-post-ok centered-text">'
                                    html_jc_r += '<input type="radio" name="groupnotok' + (i + 1) + '" checked id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                                    html_jc_r += '</div>'
                                } else {
                                    html_jc_r += '<div class="col s1 m1 l1 job-summary-post-ok centered-text">'
                                    html_jc_r += '<input type="radio"  name="groupnotok' + (i + 1) + '"  id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                                    html_jc_r += '</div>'
                                }
                                if (val.job_summary[i]['Postnotok']) {
                                    html_jc_r += '<div class="col  s1 m1 l1 job-summary-post-notok centered-text">'
                                    html_jc_r += '<input type="radio" name="groupnotok' + (i + 1) + '" checked id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                                    html_jc_r += '</div>'
                                } else {
                                    html_jc_r += '<div class="col  s1 m1 l1 job-summary-post-notok centered-text">'
                                    html_jc_r += '<input type="radio"  name="groupnotok' + (i + 1) + '"  id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                                    html_jc_r += '</div>'
                                }

                            }else{
                                if (val.job_summary[i]['Postok']) {
                                    html_jc_r += '<div class="col s1 m1 l1 job-summary-post-ok centered-text">'
                                    html_jc_r += '<input type="radio" name="groupnotok' + (i + 1) + '" disabled checked id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                                    html_jc_r += '</div>'

                                } else {
                                    html_jc_r += '<div class="col s1 m1 l1 job-summary-post-ok centered-text">'
                                    html_jc_r += '<input type="radio"  name="groupnotok' + (i + 1) + '" disabled   id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                                    html_jc_r += '</div>'

                                }

                                if (val.job_summary[i]['Postnotok']) {
                                    html_jc_r += '<div class="col  s1 m1 l1 job-summary-post-notok centered-text">'
                                    html_jc_r += '<input type="radio" name="groupnotok' + (i + 1) + '" disabled  checked id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                                    html_jc_r += '</div>'

                                } else {
                                    html_jc_r += '<div class="col  s1 m1 l1 job-summary-post-notok centered-text">'
                                    html_jc_r += '<input type="radio"  name="groupnotok' + (i + 1) + '"  disabled  id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                                    html_jc_r += '</div>'

                                }

                            }
                        }else{

                            if (val.job_summary[i]['Postok']) {
                                html_jc_r += '<div class="col s1 m1 l1 job-summary-post-ok centered-text">'
                                html_jc_r += '<input type="radio" name="groupnotok' + (i + 1) + '" checked id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                                html_jc_r += '</div>'

                            } else {
                                html_jc_r += '<div class="col s1 m1 l1 job-summary-post-ok centered-text">'
                                html_jc_r += '<input type="radio"  name="groupnotok' + (i + 1) + '"  id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                                html_jc_r += '</div>'

                            }

                            if (val.job_summary[i]['Postnotok']) {
                                html_jc_r += '<div class="col  s1 m1 l1 job-summary-post-notok centered-text">'
                                html_jc_r += '<input type="radio" name="groupnotok' + (i + 1) + '" checked id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                                html_jc_r += '</div>'

                            } else {
                                html_jc_r += '<div class="col  s1 m1 l1 job-summary-post-notok centered-text">'
                                html_jc_r += '<input type="radio"  name="groupnotok' + (i + 1) + '"  id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                                html_jc_r += '</div>'

                            }
                        }





                        // html += '<div class="col s2 m2 l2 job-summary-price">'
                        // html += '<div class="input-field"><input id="job_price'+i+'"  type="number" value="' + val.job_summary[i]['Price'] + '"><label for="job_price'+i+'" >Price - ' + (i+1) +'</label></div>'
                        // html += '</div>'
                        html_jc_r += '<div class="col s1 m1 l1 centered-text x20">'
                        html_jc_r += '<i class="fa fa-trash-o delete-job"></i>'
                        html_jc_r += '</div>'
                        html_jc_r += '</div>'
                        NUM_JOBS = (i + 1)

                    }else{
                        html_jc_c += '<div class="row job-row" data-class="Check">'

                        html_jc_c += '<div class="col s7 m7 l7 job-summary-name">'
                        html_jc_c += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="job_name' + i + '"  type="text" value="' + val.job_summary[i]['Job'] + '"><label for="job_name' + i + '" >Job - ' + (i + 1) + '</label></div>'
                        html_jc_c += '</div>'
                        if (val.job_summary[i]['Preok']) {
                            html_jc_c += '<div class="col s1 m1 l1 job-summary-pre-ok centered-text">'
                            html_jc_c += '<input type="radio" name="groupok' + (i + 1) + '" checked id="pre-ok-' + (i + 1) + '" /><label for="pre-ok-' + (i + 1) + '"></label>'
                            html_jc_c += '</div>'
                        } else {
                            html_jc_c += '<div class="col s1 m1 l1 job-summary-pre-ok centered-text">'
                            html_jc_c += '<input type="radio" name="groupok' + (i + 1) + '" id="pre-ok-' + (i + 1) + '" /><label for="pre-ok-' + (i + 1) + '"></label>'
                            html_jc_c += '</div>'

                        }
                        if (val.job_summary[i]['Prenotok']) {
                            html_jc_c += '<div class="col s1 m1 l1 job-summary-pre-notok centered-text">'
                            html_jc_c += '<input type="radio" name="groupok' + (i + 1) + '" checked id="pre-notok-' + (i + 1) + '" /><label for="pre-notok-' + (i + 1) + '"></label>'
                            html_jc_c += '</div>'
                        } else {
                            html_jc_c += '<div class="col s1 m1 l1 job-summary-pre-notok centered-text">'
                            html_jc_c += '<input type="radio" name="groupok' + (i + 1) + '" id="pre-notok-' + (i + 1) + '" /><label for="pre-notok-' + (i + 1) + '"></label>'
                            html_jc_c += '</div>'

                        }
                        if (val.req_user_agent){
                            if(val.post_check_enable){
                                if (val.job_summary[i]['Postok']) {
                                    html_jc_c += '<div class="col s1 m1 l1 job-summary-post-ok centered-text">'
                                    html_jc_c += '<input type="radio" name="groupnotok' + (i + 1) + '" checked id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                                    html_jc_c += '</div>'
                                } else {
                                    html_jc_c += '<div class="col s1 m1 l1 job-summary-post-ok centered-text">'
                                    html_jc_c += '<input type="radio"  name="groupnotok' + (i + 1) + '"  id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                                    html_jc_c += '</div>'
                                }
                                if (val.job_summary[i]['Postnotok']) {
                                    html_jc_c += '<div class="col  s1 m1 l1 job-summary-post-notok centered-text">'
                                    html_jc_c += '<input type="radio" name="groupnotok' + (i + 1) + '" checked id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                                    html_jc_c += '</div>'
                                } else {
                                    html_jc_c += '<div class="col  s1 m1 l1 job-summary-post-notok centered-text">'
                                    html_jc_c += '<input type="radio"  name="groupnotok' + (i + 1) + '"  id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                                    html_jc_c += '</div>'
                                }

                            }else{
                                if (val.job_summary[i]['Postok']) {
                                    html_jc_c += '<div class="col s1 m1 l1 job-summary-post-ok centered-text">'
                                    html_jc_c += '<input type="radio" name="groupnotok' + (i + 1) + '" disabled checked id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                                    html_jc_c += '</div>'

                                } else {
                                    html_jc_c += '<div class="col s1 m1 l1 job-summary-post-ok centered-text">'
                                    html_jc_c += '<input type="radio"  name="groupnotok' + (i + 1) + '" disabled   id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                                    html_jc_c += '</div>'

                                }

                                if (val.job_summary[i]['Postnotok']) {
                                    html_jc_c += '<div class="col  s1 m1 l1 job-summary-post-notok centered-text">'
                                    html_jc_c += '<input type="radio" name="groupnotok' + (i + 1) + '" disabled  checked id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                                    html_jc_c += '</div>'

                                } else {
                                    html_jc_c += '<div class="col  s1 m1 l1 job-summary-post-notok centered-text">'
                                    html_jc_c += '<input type="radio"  name="groupnotok' + (i + 1) + '"  disabled  id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                                    html_jc_c += '</div>'

                                }

                            }
                        }else{

                            if (val.job_summary[i]['Postok']) {
                                html_jc_c += '<div class="col s1 m1 l1 job-summary-post-ok centered-text">'
                                html_jc_c += '<input type="radio" name="groupnotok' + (i + 1) + '" checked id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                                html_jc_c += '</div>'

                            } else {
                                html_jc_c += '<div class="col s1 m1 l1 job-summary-post-ok centered-text">'
                                html_jc_c += '<input type="radio"  name="groupnotok' + (i + 1) + '"  id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                                html_jc_c += '</div>'

                            }

                            if (val.job_summary[i]['Postnotok']) {
                                html_jc_c += '<div class="col  s1 m1 l1 job-summary-post-notok centered-text">'
                                html_jc_c += '<input type="radio" name="groupnotok' + (i + 1) + '" checked id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                                html_jc_c += '</div>'

                            } else {
                                html_jc_c += '<div class="col  s1 m1 l1 job-summary-post-notok centered-text">'
                                html_jc_c += '<input type="radio"  name="groupnotok' + (i + 1) + '"  id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                                html_jc_c += '</div>'

                            }
                        }





                        // html += '<div class="col s2 m2 l2 job-summary-price">'
                        // html += '<div class="input-field"><input id="job_price'+i+'"  type="number" value="' + val.job_summary[i]['Price'] + '"><label for="job_price'+i+'" >Price - ' + (i+1) +'</label></div>'
                        // html += '</div>'
                        html_jc_c += '<div class="col s1 m1 l1 centered-text x20">'
                        html_jc_c += '<i class="fa fa-trash-o delete-job"></i>'
                        html_jc_c += '</div>'
                        html_jc_c += '</div>'
                        NUM_JOBS = (i + 1)
                    }

                }
                html_jc += '<div class="jobs-list request">'
                if (html_jc_r != ""){
                    html_jc += '<b>Customer Requests</b><br>'
                     html_jc += '<div class="row">'
                        html_jc += '<div class="col s7 m7 l7 job-summary-name1 centered-text"><b>Job</b></div>'
                        html_jc += '<div class="col s2 m2 l2 job-summary-name1 centered-text"><b>Inspect</b></div>'
                        html_jc += '<div class="col s2 m2 l2 job-summary-name1 centered-text"><b>Delivery</b></div>'
                        html_jc += '</div>'
                        html_jc += '<div class="row">'
                        html_jc += '<div class="col s7 m7 l7 job-summary-name1 centered-text"><b></b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Ok</b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Not Ok</b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Resolve</b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Refuse</b></div>'
                    html_jc += '</div><br>'
                    html_jc += html_jc_r

                }
                html_jc += '</div>'

                html_jc += '<div class="col l12 s12 m12 centered-text">'
                html_jc += '<button class="waves-effect waves-light btn cg-primary btn-addjob" type="submit" name="action">Add Jobs'
                html_jc += '<i class="material-icons right">add</i></button></div><br><br>'

                html_jc += '<div class="jobs-list checks">'
                if (html_jc_c != ""){
                    html_jc += '<br><b>General Checks</b>'
                    html_jc += '<div class="row">'
                        html_jc += '<div class="col s7 m7 l7 job-summary-name1 centered-text"><b>Job</b></div>'
                        html_jc += '<div class="col s2 m2 l2 job-summary-name1 centered-text"><b>Inspect</b></div>'
                        html_jc += '<div class="col s2 m2 l2 job-summary-name1 centered-text"><b>Delivery</b></div>'
                        html_jc += '</div>'
                        html_jc += '<div class="row">'
                        html_jc += '<div class="col s7 m7 l7 job-summary-name1 centered-text"><b></b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Ok</b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Not Ok</b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Resolve</b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Refuse</b></div>'
                    html_jc += '</div><br>'
                    html_jc += html_jc_c

                }
                // html_jc += '</div>'



                if (!val.booking_flag) {
                    html += '<div class="col s12 m12 l12">'
                    html += '<b>FOLLOW UP SUMMARY</b><br><br>'

                    fsLen = val.follow_up_status.length;

                    for (i = 0; i < fsLen; i++) {
                        // for (i = 0; i < 2; i++) {
                        html += '<div class="row">'
                        html += '<div class="col s12 m12 l2  follow-time-stamp">'
                        html += val.follow_up_status[i]['Date'] + ' ' + val.follow_up_status[i]['Time']
                        html += '</div>'
                        html += '<div class="col s12 m12 l10">'
                        html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="status_details" type="text" disabled value ="' + val.follow_up_status[i]['Status'] + '" class="validate"><label for="agent_details">Status - ' + (i + 1) + '</label></div>'
                        html += '</div>'
                        html += '</div>'
                    }

                    html += '<div class="row">'
                    html += '<div class="col s12 m12 l2  follow-time-stamp">'
                    html += ''
                    html += '</div>'
                    html += '<div class="col s12 m12 l10">'
                    html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="status_details_new" type="text" value ="" class="validate"><label for="agent_details">Status - ' + (i + 1) + '</label></div>'
                    html += '</div>'
                    html += '</div>'
                    html += '</div>'
                }
            } else {

                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">email</i><input id="email" disabled type="email" value ="' + val.cust_email + '"class="validate"><label for="email">Email</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_regnumber" disabled  type="text" value ="' + val.cust_regnumber + '"class="validate" style="text-transform: uppercase;"><label for="cust_regnumber">#Registration</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">av_timer</i><input id="cust_odometer" disabled type="number" value ="' + val.odometer + '"class="validate" ><label for="cust_odometer">#Odometer</label></div>'
                html += '</div>'

                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date" type="date" disabled class="datepicker"><label for="date">Date</label></div>'
                // html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date" type="date" disabled  value ="' + val.date_booking + '"class="datepicker"><label for="date">Date</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="time_booking" type="text" disabled  value ="' + val.time_booking + '"class="validate"><label for="time_booking">Time</label></div>'
                html += '</div>'
                if (val.booking_flag) {
                    html += '<div class="col s12 m12 l12">'
                    html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date_delivery" type="date" disabled class="datepicker"><label for="date">Date Delivery</label></div>'
                    // html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date" type="date" disabled  value ="' + val.date_booking + '"class="datepicker"><label for="date">Date</label></div>'
                    html += '</div>'
                    html += '<div class="col s6 m6 l6">'
                    html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="driver_pick_name" type="text" disabled value ="' + val.driver_pick_name + '"class="validate"><label for="driver_pick_name">PickUp Driver Name</label></div>'
                    html += '</div>'
                    html += '<div class="col s6 m6 l6">'
                    html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="driver_pick_number" type="number" disabled  value ="' + val.driver_pick_number + '"class="validate"><label for="driver_pick_number">PickUp Driver Number</label></div>'
                    html += '</div>'

                    html += '<div class="col s6 m6 l6">'
                    html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="driver_drop_name" type="text" disabled  value ="' + val.driver_drop_name + '"class="validate"><label for="driver_drop_name">Drop Driver Name</label></div>'
                    html += '</div>'
                    html += '<div class="col s6 m6 l6">'
                    html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="driver_drop_number" type="number" disabled  value ="' + val.driver_drop_number + '"class="validate"><label for="driver_drop_number">Drop Driver Number</label></div>'
                    html += '</div>'

                } else {

                }

                // html += '<div class="col s12 m12 l12">'
                // html += '<div class="input-field"><i class="material-icons prefix">receipt</i><textarea id="comments" type="text" disabled class="materialize-textarea">' + val.comments + '</textarea><label for="comments">Jobs Summary</label></div>'
                // html += '</div>'
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><textarea id="notes" type="text" disabled class="materialize-textarea">' + val.customer_notes + '</textarea><label for="notes">Customer Notes</label></div>'
                html += '</div>'
                html_jc = ''
                html_jc += '<div class="col s12 m12 l12">'
                html_jc += '<b>JOBS CARD DETAILS</b><br><br>'
                html_jc_c = ''
                html_jc_r = ''


                jobLen = val.job_summary.length;
                // html_jc += '<div class="jobs-list">'
                // html_jc += '<div class="row">'
                // html_jc += '<div class="col s4 m7 l7 job-summary-name centered-text"><b>Job Name</b></div>'
                // html_jc += '<div class="col s4 m2 l2 job-summary-pre centered-text"><b>Inspection</b></div>'
                // html_jc += '<div class="col s4 m2 l2 job-summary-name centered-text"><b>PreDelivery</b></div>'
                // html_jc += '</div>'
                // html_jc += '<div class="row">'
                // html_jc += '<div class="col s4 m7 l7 job-summary-name centered-text"><b></b></div>'
                // html_jc += '<div class="col s2 m1 l1 job-summary-pre centered-text"><b>Ok</b></div>'
                // html_jc += '<div class="col s2 m1 l1 job-summary-pre centered-text"><b>Not Ok</b></div>'
                // html_jc += '<div class="col s2 m1 l1 job-summary-pre centered-text"><b>Resolve</b></div>'
                // html_jc += '<div class="col s2 m1 l1 job-summary-pre centered-text"><b>Refuse</b></div>'
                // html_jc += '</div>'

                for (i = 0; i < jobLen; i++) {
                    // for (i = 0; i < 2; i++) {
                    if ((val.job_summary[i]['Type'] == "Request") || (val.job_summary[i]['Type'] == null) || (val.job_summary[i]['Type'] === false)) {
                        html_jc_r += '<div class="row job-row" data-class="Request">'
                        html_jc_r += '<div class="col s4 m7 l7 job-summary-name">'
                        html_jc_r += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="job_name' + i + '"  disabled type="text" value="' + val.job_summary[i]['Job'] + '"><label for="job_name' + i + '" >Job - ' + (i + 1) + '</label></div>'
                        html_jc_r += '</div>'
                        if (val.job_summary[i]['Preok']) {
                            html_jc_r += '<div class="col s2 m1 l1 job-summary-pre-ok centered-text">'
                            html_jc_r += '<input type="radio" name="groupok' + (i + 1) + '" disabled  checked id="pre-ok-' + (i + 1) + '" /><label for="pre-ok-' + (i + 1) + '"></label>'
                            html_jc_r += '</div>'
                        } else {
                            html_jc_r += '<div class="col s2 m1 l1 job-summary-pre-ok centered-text">'
                            html_jc_r += '<input type="radio" name="groupok' + (i + 1) + '" disabled  id="pre-ok-' + (i + 1) + '" /><label for="pre-ok-' + (i + 1) + '"></label>'
                            html_jc_r += '</div>'
                        }

                        if (val.job_summary[i]['Prenotok']) {
                            html_jc_r += '<div class="col s2 m1 l1 job-summary-pre-notok centered-text">'
                            html_jc_r += '<input type="radio" name="groupok' + (i + 1) + '" disabled  checked id="pre-notok-' + (i + 1) + '" /><label for="pre-notok-' + (i + 1) + '"></label>'
                            html_jc_r += '</div>'
                        } else {
                            html_jc_r += '<div class="col s2 m1 l1 job-summary-pre-notok centered-text">'
                            html_jc_r += '<input type="radio" name="groupok' + (i + 1) + '" disabled  id="pre-notok-' + (i + 1) + '" /><label for="pre-notok-' + (i + 1) + '"></label>'
                            html_jc_r += '</div>'

                        }
                        if (val.job_summary[i]['Postok']) {
                            html_jc_r += '<div class="col s2 m1 l1 job-summary-post-ok centered-text">'
                            html_jc_r += '<input type="radio" name="groupnotok' + (i + 1) + '" disabled  checked id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                            html_jc_r += '</div>'

                        } else {
                            html_jc_r += '<div class="col s2 m1 l1 job-summary-post-ok centered-text">'
                            html_jc_r += '<input type="radio"  name="groupnotok' + (i + 1) + '" disabled   id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                            html_jc_r += '</div>'

                        }

                        if (val.job_summary[i]['Postnotok']) {
                            html_jc_r += '<div class="col  s2 m1 l1 job-summary-post-notok centered-text">'
                            html_jc_r += '<input type="radio" name="groupnotok' + (i + 1) + '" disabled  checked id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                            html_jc_r += '</div>'

                        } else {
                            html_jc_r += '<div class="col  s2 m1 l1 job-summary-post-notok centered-text">'
                            html_jc_r += '<input type="radio"  name="groupnotok' + (i + 1) + '" disabled   id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                            html_jc_r += '</div>'

                        }


                    } else {
                        html_jc_c += '<div class="row job-row" data-class="Check">'
                        html_jc_c += '<div class="col s4 m7 l7 job-summary-name">'
                        html_jc_c += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="job_name' + i + '"  disabled type="text" value="' + val.job_summary[i]['Job'] + '"><label for="job_name' + i + '" >Job - ' + (i + 1) + '</label></div>'
                        html_jc_c += '</div>'
                        if (val.job_summary[i]['Preok']) {
                            html_jc_c += '<div class="col s2 m1 l1 job-summary-pre-ok centered-text">'
                            html_jc_c += '<input type="radio" name="groupok' + (i + 1) + '" disabled  checked id="pre-ok-' + (i + 1) + '" /><label for="pre-ok-' + (i + 1) + '"></label>'
                            html_jc_c += '</div>'
                        } else {
                            html_jc_c += '<div class="col s2 m1 l1 job-summary-pre-ok centered-text">'
                            html_jc_c += '<input type="radio" name="groupok' + (i + 1) + '" disabled  id="pre-ok-' + (i + 1) + '" /><label for="pre-ok-' + (i + 1) + '"></label>'
                            html_jc_c += '</div>'
                        }

                        if (val.job_summary[i]['Prenotok']) {
                            html_jc_c += '<div class="col s2 m1 l1 job-summary-pre-notok centered-text">'
                            html_jc_c += '<input type="radio" name="groupok' + (i + 1) + '" disabled  checked id="pre-notok-' + (i + 1) + '" /><label for="pre-notok-' + (i + 1) + '"></label>'
                            html_jc_c += '</div>'
                        } else {
                            html_jc_c += '<div class="col s2 m1 l1 job-summary-pre-notok centered-text">'
                            html_jc_c += '<input type="radio" name="groupok' + (i + 1) + '" disabled  id="pre-notok-' + (i + 1) + '" /><label for="pre-notok-' + (i + 1) + '"></label>'
                            html_jc_c += '</div>'

                        }
                        if (val.job_summary[i]['Postok']) {
                            html_jc_c += '<div class="col s2 m1 l1 job-summary-post-ok centered-text">'
                            html_jc_c += '<input type="radio" name="groupnotok' + (i + 1) + '" disabled  checked id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                            html_jc_c += '</div>'

                        } else {
                            html_jc_c += '<div class="col s2 m1 l1 job-summary-post-ok centered-text">'
                            html_jc_c += '<input type="radio"  name="groupnotok' + (i + 1) + '" disabled   id="post-ok-' + (i + 1) + '" /><label for="post-ok-' + (i + 1) + '"></label>'
                            html_jc_c += '</div>'

                        }

                        if (val.job_summary[i]['Postnotok']) {
                            html_jc_c += '<div class="col  s2 m1 l1 job-summary-post-notok centered-text">'
                            html_jc_c += '<input type="radio" name="groupnotok' + (i + 1) + '" disabled  checked id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                            html_jc_c += '</div>'

                        } else {
                            html_jc_c += '<div class="col  s2 m1 l1 job-summary-post-notok centered-text">'
                            html_jc_c += '<input type="radio"  name="groupnotok' + (i + 1) + '" disabled   id="post-notok-' + (i + 1) + '" /><label for="post-notok-' + (i + 1) + '"></label>'
                            html_jc_c += '</div>'

                        }


                    }
                }

                    html_jc += '<div class="jobs-list request">'
                    if (html_jc_r != ""){
                        html_jc += '<b>Customer Requests</b><br>'
                        html_jc += '<div class="row">'
                        html_jc += '<div class="col s7 m7 l7 job-summary-name1 centered-text"><b>Job</b></div>'
                        html_jc += '<div class="col s2 m2 l2 job-summary-name1 centered-text"><b>Inspect</b></div>'
                        html_jc += '<div class="col s2 m2 l2 job-summary-name1 centered-text"><b>Delivery</b></div>'
                        html_jc += '</div>'
                        html_jc += '<div class="row">'
                        html_jc += '<div class="col s7 m7 l7 job-summary-name1 centered-text"><b></b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Ok</b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Not Ok</b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Resolve</b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Refuse</b></div>'
                        html_jc += '</div><br>'
                        html_jc += html_jc_r

                    }
                    html_jc += '</div>'

                    html_jc += '<div class="jobs-list checks">'
                    if (html_jc_c != ""){
                        html_jc += '<br><b>General Checks</b>'
                     html_jc += '<div class="row">'
                        html_jc += '<div class="col s7 m7 l7 job-summary-name1 centered-text"><b>Job</b></div>'
                        html_jc += '<div class="col s2 m2 l2 job-summary-name1 centered-text"><b>Inspect</b></div>'
                        html_jc += '<div class="col s2 m2 l2 job-summary-name1 centered-text"><b>Delivery</b></div>'
                        html_jc += '</div>'
                        html_jc += '<div class="row">'
                        html_jc += '<div class="col s7 m7 l7 job-summary-name1 centered-text"><b></b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Ok</b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Not Ok</b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Resolve</b></div>'
                        html_jc += '<div class="col s1 m1 l1 job-summary-name1 centered-text"><b>Refuse</b></div>'
                        html_jc += '</div><br>'
                        html_jc += html_jc_c

                    }
                    html_jc += '</div>'

                }

            if (val.req_user_agent) {
                $('#bill-details #payment_collector_bill').val("Workshop")
                document.getElementById("payment_collector_bill").disabled = true;
            }
            if (val.booking_flag) {
                if (val.status == "Acknowledged") {
                    for (i = 1; i < 2; i++) {
                        $('.status-change-' + i).addClass('selected')
                    }
                    for (i = 2; i < 11; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                } else if (val.status == "Assigned") {
                    for (i = 1; i < 3; i++) {
                        $('.status-change-' + i).addClass('selected')
                    }
                    for (i = 3; i < 11; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                } else if (val.status == "Engineer Left") {
                    for (i = 1; i < 4; i++) {
                        $('.status-change-' + i).addClass('selected')
                    }
                    for (i = 4; i < 11; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                } else if (val.status == "Reached Workshop") {
                    for (i = 1; i < 5; i++) {
                        $('.status-change-' + i).addClass('selected')
                    }
                    for (i = 5; i < 11; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                } else if (val.status == "Estimate Shared") {
                    for (i = 1; i < 6; i++) {
                        $('.status-change-' + i).addClass('selected')
                    }
                    for (i = 6; i < 11; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                } else if (val.status == "Job Completed") {
                    for (i = 1; i < 7; i++) {
                        $('.status-change-' + i).addClass('selected')
                    }
                    for (i = 7; i < 11; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                } else if (val.status == "Feedback Taken") {
                    for (i = 1; i < 8; i++) {
                        $('.status-change-' + i).addClass('selected')
                    }
                    for (i = 8; i < 11; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                } else if (val.status == "Cancelled") {
                    for (i = 1; i < 8; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                    $('.status-change-8').addClass('selected')
                    $('.status-change-9').removeClass('selected')
                    $('.status-change-10').removeClass('selected')

                } else if (val.status == "Escalation") {
                    for (i = 1; i < 10; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                    $('.status-change-9').addClass('selected')
                    $('.status-change-10').removeClass('selected')
                } else if (val.status == "Confirmed") {
                    for (i = 1; i < 11; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                }
            } else {
                if (val.status == "Lead") {
                    for (i = 1; i < 2; i++) {
                        $('.status-change-' + i).addClass('selected')
                    }
                    for (i = 2; i < 7; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                } else if (val.status == "Cold") {
                    for (i = 1; i < 3; i++) {
                        $('.status-change-' + i).addClass('selected')
                    }
                    for (i = 3; i < 7; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                } else if (val.status == "Estimate Required") {
                    for (i = 1; i < 4; i++) {
                        $('.status-change-' + i).addClass('selected')
                    }
                    for (i = 4; i < 7; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                } else if (val.status == "Warm") {
                    for (i = 1; i < 5; i++) {
                        $('.status-change-' + i).addClass('selected')
                    }
                    for (i = 5; i < 7; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                } else if (val.status == "Confirmed") {
                    for (i = 1; i < 6; i++) {
                        $('.status-change-' + i).addClass('selected')
                    }
                    for (i = 6; i < 7; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                } else if (val.status == "Cancelled") {
                    for (i = 1; i < 7; i++) {
                        $('.status-change-' + i).removeClass('selected')
                    }
                    $('.status-change-6').addClass('selected')
                }

            }
            // <----- New Booking Data---->>
            $('#customer-detail .sms-card #sms_cust_name').text(val.booking_user_name)
            if (val.clickgarage_flag) {
                $('#customer-detail .sms-card .agent-details').html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Happy Motoring,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Team ClickGarage!')
            } else {
                $('#customer-detail .sms-card .agent-details').text('')
            }

            if (val.req_user_admin) {
                // Lead/ Booking Diff
                if (val.booking_flag) {
                    $('#customer-detail .lead-row').hide()
                    $('#customer-detail .confirm-row').show()

                } else {
                    $('#customer-detail .lead-row').show()
                    $('#customer-detail .confirm-row').hide()

                }


                if (val.agent_details == "Not Assigned") {
                    $('.bill-row').hide()
                } else if (val.bill_generation_flag) {
                    $('#customer-detail .non-generated-bill').hide()
                    $('#customer-detail .generated-bill').show()

                } else {
                    $('#customer-detail .non-generated-bill').show()
                    $('#customer-detail .generated-bill').hide()
                }


            } else if (val.req_user_staff) {
                // Lead/ Booking Diff

                if (val.booking_flag) {
                    $('#customer-detail .lead-row').hide()
                    $('#customer-detail .confirm-row').show()

                } else {
                    $('#customer-detail .lead-row').show()
                    $('#customer-detail .confirm-row').hide()

                }


                if (val.clickgarage_flag != true) {
                    $('.staff-button-row').hide()
                }

                if (val.agent_details == "Not Assigned" || val.clickgarage_flag != true) {
                    $('.bill-row').hide()

                } else if (val.bill_generation_flag) {
                    $('#customer-detail .non-generated-bill').hide()
                    $('#customer-detail .generated-bill').show()

                } else {
                    $('#customer-detail .non-generated-bill').show()
                    $('#customer-detail .generated-bill').hide()
                }


            } else if (val.req_user_agent) {
                if (val.booking_flag) {
                    $('#customer-detail .lead-row').hide()
                    $('#customer-detail .confirm-row').show()

                } else {
                    $('#customer-detail .lead-row').show()
                    $('#customer-detail .confirm-row').hide()

                }

                if (val.clickgarage_flag == true) {
                    $('.bill-row').hide()
                } else if (val.bill_generation_flag) {

                    $('#customer-detail .non-generated-bill').hide()
                    $('#customer-detail .generated-bill').show()

                } else {
                    $('#customer-detail .non-generated-bill').show()
                    $('#customer-detail .generated-bill').hide()
                }

            } else if (val.req_user_b2b) {
                if (val.status == "Confirmed") {
                    $('#customer-detail .b2b-button-row-1').show()
                } else {
                    $('#customer-detail .b2b-button-row-1').hide()
                }

                if (val.status == "Job Completed" || val.status == "Feedback Taken" || val.status == "Cancelled") {
                    $('#customer-detail .b2b-button-row-2').hide()
                } else {
                    $('#customer-detail .b2b-button-row-2').show()
                }

                if (val.bill_generation_flag) {
                    $('#customer-detail .generated-bill').show()

                } else {
                    $('#customer-detail .generated-bill').hide()
                }


            }


            date_string = val.date_booking
            console.log(date_string)
            if (val.delivery_date == null) {
                date_delivery_string = val.date_booking
            } else {
                date_delivery_string = val.delivery_date
            }

            date_follow_up = val.follow_up_date
            time_follow_up = val.follow_up_time

        })
        container.html(html);
        Commons.ajaxData('get_type_make', {vehicle_type: VEHICLE_TYPE}, "get", Global, Global.loadBrandsBooking);
        Commons.ajaxData('get_make_model', {make_id: VEHICLE_MAKE, vehicle_type: VEHICLE_TYPE}, "get", Global, Global.loadModelsBooking);

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
            console.log("Job :" + val.job_completion_flag)
            console.log("Bill :" + val.bill_generation_flag)
            console.log("Frozen :" + val.frozen_flag)
            console.log("Settle :" + val.settlement_flag)

            html += '                               <div class="desc-content col s12 m12 l10 offset-l1">';
            html += '                                   <table class="striped card" id="estimate-table">';
            html += '                                       <thead>';
            html += '                                       <tr>';
            html += '                                           <th data-field="id">S.No.</th>';
            html += '                                           <th data-field="part">Name</th>';
            html += '                                           <th data-field="action">Type</th>';
            // html += '                                            <th data-field="part">Type</th>';
            if (val.estimate_history_len > 1 || val.req_user_admin || val.req_user_staff || val.req_user_agent){
                TO_SHOW_TOTAL = 1
                html += '                                           <th data-field="unit">Units</th>';
                html += '                                           <th data-field="unit_price">Unit Price (Rs.)</th>';
                html += '                                           <th data-field="price">Item Price (Rs.)</th>';
            }else{
                html += '                                           <th data-field="unit" class="invisible">Units</th>';
                html += '                                           <th data-field="unit_price" class="invisible">Unit Price (Rs.)</th>';
                html += '                                           <th data-field="price" class="invisible">Item Price (Rs.)</th>';
            }
            // if (val.req_user_admin || val.req_user_staff || val.req_user_agent){
            html += '                                           <th data-field="part-comment">Comment</th>';
            html += '<th>Status</th>'
            html += '<th>Approve</th>'


            if (val.req_user_admin || val.req_user_staff){
                html += '                                           <th data-field="cat-settle">Purchase Price</th>';
                html += '                                           <th data-field="cat-settle">Settlement</th>';
            }else{
                html += '                                           <th data-field="cat-settle" class="invisible">Purchase Price</th>';
                html += '                                           <th data-field="cat-settle" class="invisible">Settlement</th>';
            }

            // }
            if (val.req_user_admin || val.req_user_staff || val.req_user_agent){
                if (val.bill_generation_flag || val.job_completion_flag || val.settlement_flag || val.frozen_flag){

                }else{
                    html += '                                           <th data-field="delete"></th>';

                }
            }
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
                if (val.req_user_admin || val.req_user_staff || val.req_user_agent){
                    if (val.bill_generation_flag || val.job_completion_flag || val.settlement_flag || val.frozen_flag){
                        html += '<td>' + '<input id="part_name" type="text" disabled class="noborder browser-default partnamebooking" value ="' + val.service_items[i].name + '" aria-required="true">' + '</td>';
                    }else{
                        html += '<td>' + '<input id="part_name" type="text" class="browser-default partnamebooking" value ="' + val.service_items[i].name + '" aria-required="true">' + '</td>';
                    }
                }else{
                    html += '<td>' + '<input id="part_name" type="text" disabled class="noborder browser-default  partnamebooking" value ="' + val.service_items[i].name + '" aria-required="true">' + '</td>';
                }
                // Part Type
                if (val.req_user_admin || val.req_user_staff || val.req_user_agent){
                    if(val.bill_generation_flag || val.job_completion_flag || val.settlement_flag || val.frozen_flag){
                        html += '<td>' + '<input id="part_type" type="text" disabled class="noborder browser-default" value ="' + val.service_items[i].type + '" aria-required="true">' + '</td>';
                    }else{
                        html += '<td>' + '<div class="input-field sort" id ="part_type"><select  class="browser-default">'
                        if (val.service_items[i].type == "Part") {
                            html += '<option value="Part" selected>Part</option>'
                        } else {
                            html += '<option value="Part">Part</option>'
                        }
                        if (val.service_items[i].type == "Lube") {
                            html += '<option value="Lube" selected>Lube</option>'
                        } else {
                            html += '<option value="Lube">Lube</option>'
                        }
                        if (val.service_items[i].type == "Consumable") {
                            html += '<option value="Consumable" selected>Consumable</option>'
                        } else {
                            html += '<option value="Consumable">Consumable</option>'
                        }

                        if (val.service_items[i].type == "Labour") {
                            html += '<option value="Labour" selected>Labour</option>'
                        } else {
                            html += '<option value="Labour">Labour</option>'
                        }
                        if (val.service_items[i].type == "Discount") {
                            html += '<option value="Discount" selected>Discount</option>'
                        } else {
                            html += '<option value="Discount">Discount</option>'
                        }
                        if (val.service_items[i].type == "Total") {
                            html += '<option value="Total" selected>Total</option>'
                        } else {
                            html += '<option value="Total">Total</option>'
                        }
                        html += '</select></div>' + '</td>';
                    }
                }else{
                    html += '<td>' + '<input id="part_type" type="text" disabled class="noborder browser-default" value ="' + val.service_items[i].type + '" aria-required="true">' + '</td>';
                }

                // Price
                if (val.estimate_history_len > 1 || val.req_user_admin || val.req_user_staff || val.req_user_agent ) {
                    if (val.req_user_admin || val.req_user_staff || val.req_user_agent ) {
                        if (val.bill_generation_flag || val.job_completion_flag || val.settlement_flag || val.frozen_flag){
                            if ( val.service_items[i].quantity==null ||  val.service_items[i].quantity===false || val.service_items[i].quantity=="NA") {
                                html += '<td>' + '<input id="part_units" type="number" class="browser-default" disabled value ="1" aria-required="true">' + '</td>';
                                html += '<td>' + '<input id="part_unitprice" type="number" class="browser-default" disabled  value ="' + val.service_items[i].price + '" aria-required="true">' + '</td>';
                                html += '<td>' + '<input id="part_price" type="number" class="browser-default" disabled value ="' + val.service_items[i].price  + '" aria-required="true">' + '</td>';
                            }else{
                                html += '<td>' + '<input id="part_units" type="number" class="browser-default noborder" disabled  value ="' + val.service_items[i].quantity + '" aria-required="true">' + '</td>';
                                html += '<td>' + '<input id="part_unitprice" type="number" class="browser-default noborder" disabled  value ="' + val.service_items[i].unit_price + '" aria-required="true">' + '</td>';
                                html += '<td>' + '<input id="part_price" type="number" class="browser-default noborder" disabled value ="' + parseFloat(String(parseFloat(val.service_items[i].quantity) * parseFloat(val.service_items[i].unit_price)))  + '" aria-required="true">' + '</td>';
                            }
                        }else{
                            if ( val.service_items[i].quantity==null ||  val.service_items[i].quantity===false || val.service_items[i].quantity=="NA") {
                                html += '<td>' + '<input id="part_units" type="number" class="browser-default" value ="1" aria-required="true">' + '</td>';
                                html += '<td>' + '<input id="part_unitprice" type="number" class="browser-default" value ="' + val.service_items[i].price + '" aria-required="true">' + '</td>';
                                html += '<td>' + '<input id="part_price" type="number" class="browser-default" disabled value ="' + val.service_items[i].price  + '" aria-required="true">' + '</td>';
                            }else{
                                html += '<td>' + '<input id="part_units" type="number" class="browser-default" value ="' + val.service_items[i].quantity + '" aria-required="true">' + '</td>';
                                html += '<td>' + '<input id="part_unitprice" type="number" class="browser-default" value ="' + val.service_items[i].unit_price + '" aria-required="true">' + '</td>';
                                html += '<td>' + '<input id="part_price" type="number" class="browser-default " disabled value ="' + parseFloat(String(parseFloat(val.service_items[i].quantity) * parseFloat(val.service_items[i].unit_price)))  + '" aria-required="true">' + '</td>';

                            }
                        }
                    }else{
                        if ( val.service_items[i].quantity==null ||  val.service_items[i].quantity===false || val.service_items[i].quantity=="NA") {
                            html += '<td>' + '<input id="part_units" type="number" class="browser-default" disabled value ="1" aria-required="true">' + '</td>';
                            html += '<td>' + '<input id="part_unitprice" type="number" class="browser-default" disabled  value ="' + val.service_items[i].price + '" aria-required="true">' + '</td>';
                            html += '<td>' + '<input id="part_price" type="number" class="browser-default" disabled value ="' + val.service_items[i].price  + '" aria-required="true">' + '</td>';
                        }else{
                            html += '<td>' + '<input id="part_units" type="number" class="browser-default noborder" disabled  value ="' + val.service_items[i].quantity + '" aria-required="true">' + '</td>';
                            html += '<td>' + '<input id="part_unitprice" type="number" class="browser-default noborder" disabled  value ="' + val.service_items[i].unit_price + '" aria-required="true">' + '</td>';
                            html += '<td>' + '<input id="part_price" type="number" class="browser-default noborder" disabled value ="' + parseFloat(String(parseFloat(val.service_items[i].quantity) * parseFloat(val.service_items[i].unit_price)))  + '" aria-required="true">' + '</td>';

                        }
                    }
                }else{
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
                if (val.req_user_admin || val.req_user_staff || val.req_user_agent){
                    if (val.bill_generation_flag || val.job_completion_flag || val.settlement_flag || val.frozen_flag){
                        if ( val.service_items[i].comment==null ||  val.service_items[i].comment===false) {
                            html += '<td>' + '<input id="part_comment" type="text" class="browser-default" disabled aria-required="true">' + '</td>';
                        }else{
                            html += '<td>' + '<input id="part_comment" type="text" class="browser-default" value ="' + val.service_items[i].comment + '" disabled aria-required="true">' + '</td>';
                        }

                    }else{
                        if ( val.service_items[i].comment==null ||  val.service_items[i].comment===false) {
                            html += '<td>' + '<input id="part_comment" type="text" class="browser-default" aria-required="true">' + '</td>';
                        }else{
                            html += '<td>' + '<input id="part_comment" type="text" class="browser-default" value ="' + val.service_items[i].comment + '" aria-required="true">' + '</td>';
                        }
                    }

                }else{
                    if (val.service_items[i].comment==null ||  val.service_items[i].comment===false) {
                        html += '<td>' + '<input id="part_comment" type="text" class="browser-default noborder" disabled aria-required="true">' + '</td>';
                    }else{
                        html += '<td>' + '<input id="part_comment" type="text" class="browser-default noborder" disabled value ="' + val.service_items[i].comment + '" aria-required="true">' + '</td>';
                    }
                }

                // approval status
                if (val.req_user_admin || val.req_user_staff ){
                    if (val.bill_generation_flag || val.job_completion_flag || val.settlement_flag || val.frozen_flag){
                        if (val.service_items[i].approved==null ||  val.service_items[i].comment===false){
                            html += '<td  class="centered-text"><span class="denied">TBD</span></td>'
                            html += '<td><input type="checkbox" class="filled-in approve-item tochange" disabled id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'

                        }else{
                            if (val.service_items[i].approved == "Yes"){
                                html += '<td class="centered-text"><span class="approved">Approved</span></td>'
                                html += '<td><input type="checkbox" class="filled-in approve-item tochange" disabled checked="checked" id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'
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
                                html += '<td><input type="checkbox" class="filled-in approve-item tochange" checked="checked" id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'
                            }else{
                                html += '<td class="centered-text"><span class="denied">TBD</span></td>'
                                html += '<td><input type="checkbox" class="filled-in approve-item tochange" id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'
                            }
                        }

                    }
                }else if(val.req_user_agent){
                    if (val.bill_generation_flag || val.job_completion_flag || val.settlement_flag || val.frozen_flag){
                        if (val.service_items[i].approved==null ||  val.service_items[i].comment===false){
                            html += '<td  class="centered-text"><span class="denied">TBD</span></td>'
                            html += '<td><input type="checkbox" class="filled-in approve-item" disabled id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'

                        }else{
                            if (val.service_items[i].approved == "Yes"){
                                html += '<td class="centered-text"><span class="approved">Approved</span></td>'
                                html += '<td><input type="checkbox" class="filled-in approve-item" disabled checked="checked" id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'
                            }else{
                                html += '<td class="centered-text"><span class="denied">TBD</span></td>'
                                html += '<td><input type="checkbox" class="filled-in approve-item" disabled id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'
                            }
                        }

                    }else{
                        if (val.service_items[i].approved==null ||  val.service_items[i].comment===false){
                            html += '<td  class="centered-text"><span class="denied">TBD</span></td>'
                            html += '<td><input type="checkbox" class="filled-in approve-item" disabled id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'

                        }else{
                            if (val.service_items[i].approved == "Yes"){
                                html += '<td class="centered-text"><span class="approved">Approved</span></td>'
                                html += '<td><input type="checkbox" class="filled-in approve-item" disabled checked="checked" id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'
                            }else{
                                html += '<td class="centered-text"><span class="denied">TBD</span></td>'
                                html += '<td><input type="checkbox" class="filled-in approve-item" disabled id="comp_item_select-'+i+'"/><label for="comp_item_select-'+i+'"></label></td>'
                            }
                        }


                    }
                }else{
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
                }

                // Settlemet Status
                if (val.req_user_admin || val.req_user_staff) {
                    if (val.settlement_flag || val.frozen_flag){
                        if (val.service_items[i].purchase_price==null || val.service_items[i].purchase_price===false) {
                            html += '<td><input id="purchase_price" type="number"  disabled class="browser-default" value ="' + val.service_items[i].price + '" aria-required="true"></td>'
                        }else{
                            html += '<td><input id="purchase_price" type="number"  disabled  class="browser-default" value ="' + val.service_items[i].purchase_price + '" aria-required="true"></td>'
                        }
                        html += '<td >' + '<input id="settle_type" type="text" disabled class="browser-default" value ="' + val.service_items[i].settlement_cat + '" aria-required="true">' + '</td>';

                    }else{

                        if (val.service_items[i].purchase_price==null || val.service_items[i].purchase_price===false) {
                            html += '<td><input id="purchase_price" type="number"  class="browser-default" value ="' + val.service_items[i].price + '" aria-required="true"></td>'
                        }else{
                            html += '<td><input id="purchase_price" type="number"   class="browser-default" value ="' + val.service_items[i].purchase_price + '" aria-required="true"></td>'
                        }
                        html += '<td>' + '<div class="input-field sort" id ="settle_type"><select  class="browser-default">'
                        if (val.service_items[i].settlement_cat==null || val.service_items[i].settlement_cat===false){
                            if (val.service_items[i].type == "Part") {
                                html += '<option value="Part" selected>Part</option>'
                            } else {
                                html += '<option value="Part">Part</option>'
                            }
                            if (val.service_items[i].type == "Lube") {
                                html += '<option value="Lube" selected>Lube</option>'
                            } else {
                                html += '<option value="Lube">Lube</option>'
                            }
                            if (val.service_items[i].type == "Consumable") {
                                html += '<option value="Consumable" selected>Consumable</option>'
                            } else {
                                html += '<option value="Consumable">Consumable</option>'
                            }
                            if (val.service_items[i].type == "Labour") {
                                html += '<option value="Labour" selected>Labour</option>'
                            } else {
                                html += '<option value="Labour">Labour</option>'
                            }
                            if (val.service_items[i].type == "Discount") {
                                html += '<option value="Discount" selected>Discount</option>'
                            } else {
                                html += '<option value="Discount">Discount</option>'
                            }
                            if (val.service_items[i].type == "VAS") {
                                html += '<option value="VAS" selected>VAS</option>'
                            } else {
                                html += '<option value="VAS">VAS</option>'
                            }
                            if (val.service_items[i].type == "Denting") {
                                html += '<option value="Denting" selected>Denting</option>'
                            } else {
                                html += '<option value="Denting">Denting</option>'
                            }
                        }else{
                            if (val.service_items[i].settlement_cat == "Part") {
                                html += '<option value="Part" selected>Part</option>'
                            } else {
                                html += '<option value="Part">Part</option>'
                            }
                            if (val.service_items[i].type == "Lube") {
                                html += '<option value="Lube" selected>Lube</option>'
                            } else {
                                html += '<option value="Lube">Lube</option>'
                            }
                            if (val.service_items[i].type == "Consumable") {
                                html += '<option value="Consumable" selected>Consumable</option>'
                            } else {
                                html += '<option value="Consumable">Consumable</option>'
                            }
                            if (val.service_items[i].settlement_cat == "Labour") {
                                html += '<option value="Labour" selected>Labour</option>'
                            } else {
                                html += '<option value="Labour">Labour</option>'
                            }
                            if (val.service_items[i].settlement_cat == "Discount") {
                                html += '<option value="Discount" selected>Discount</option>'
                            } else {
                                html += '<option value="Discount">Discount</option>'
                            }
                            if (val.service_items[i].settlement_cat == "VAS") {
                                html += '<option value="VAS" selected>VAS</option>'
                            } else {
                                html += '<option value="VAS">VAS</option>'
                            }
                            if (val.service_items[i].settlement_cat == "Denting") {
                                html += '<option value="Denting" selected>Denting</option>'
                            } else {
                                html += '<option value="Denting">Denting</option>'
                            }
                        }

                    }


                }else{
                    if (val.service_items[i].purchase_price==null || val.service_items[i].purchase_price===false) {
                        html += '<td class="invisible"><input id="purchase_price" type="number"  disabled class="browser-default" value ="' + val.service_items[i].price + '" aria-required="true"></td>'
                    }else{
                        html += '<td class="invisible"><input id="purchase_price" type="number" disabled  class="browser-default" value ="' + val.service_items[i].purchase_price + '" aria-required="true"></td>'
                    }
                    html += '<td class="invisible">' + '<input id="settle_type" type="text" disabled class="browser-default" value ="' + val.service_items[i].settlement_cat + '" aria-required="true">' + '</td>';
                }
                // Row Deletion
                if (val.req_user_admin || val.req_user_staff || val.req_user_agent){
                    if (val.bill_generation_flag || val.job_completion_flag || val.settlement_flag || val.frozen_flag){
                    }else{
                        html +='                                    <td><div class="delete x25">';
                        html +='                                        <i class="fa fa-trash-o"></i>';
                        html +='                                    </div></td>';
                    }
                }else{

                }
                html += '                                       </tr>';
            }
            if (val.bill_generation_flag){
                $('#customer-detail .btn-view-bill').attr('data-class',val.bill_file_name)
            }else{
                $('#customer-detail .btn-view-bill').attr('data-class','')
            }

            if (val.bill_generation_flag || val.job_completion_flag || val.settlement_flag || val.frozen_flag){
                $('#customer-detail .btn-additem-est').hide()
                $('#customer-detail .btn-update-send-estimate').hide()
                $('#comp_all_select').attr('disabled','')
            }else{
                $('#customer-detail .btn-additem-est').show()
                $('#customer-detail .btn-update-send-estimate').show()

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
        var container_jc = $('#customer-detail .booking-job-card .pre-data')
        container_jc.html('')
        container_jc.html(html_jc)
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
        Materialize.updateTextFields();

    },
    loadAgentdata:function(data){
        container3 = $('#agent-select')
        container3.html('');
        html = '';
        html = '<select class="agent-list browser-default""><option value="" selected disabled>Select Engineer</option>'
        // html += '<option value="" disabled>Select Agent</option>'
        $.each(data, function(ix, val) {
            html += '<option value="'+val.id+'">'+val.first_name +' '+ val.last_name+' - '+val.phone +'</option>'
        });
        html += '<select>'
        container3.html(html);
        // console.log(container3);
        // container3.find('select').material_select();

    },
    loadAgentdata2:function(data){
        container3 = $('#agent-list-settle')
        container3.html('');
        html = '<option value="" selected>All</option>'
        // html += '<option value="" disabled>Select Agent</option>'
        $.each(data, function(ix, val) {
            html += '<option value="'+val.id+'">'+val.first_name +' '+ val.last_name+' - '+val.phone +'</option>'
        });
        container3.html(html);
        // console.log(container3);
        // container3.find('select').material_select();

    },
    loadUpdateUser:function (data) {
        alert("User updated!")
    },
    loadCustomerAgent:function(data){
        data_id = $('#customer-detail #booking_id').attr('booking_data_id')
        Global.openbooking_new(data_id)
        // location.reload();
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
    loadCustomerupdate2:function(){
        data_id = $('#customer-detail #booking_id').attr('booking_data_id')
        Global.openbooking_new2(data_id)
    },
    loadAddCoupon:function(){
        alert('Coupon Added!')
    },
    loadCoupon:function(data){
        $.each(data, function(ix, val) {
            $('#coupon-detail #coup_name').val(val.coupon_code)
            $('#coupon-detail #start_date').val(val.date_start)
            $('#coupon-detail #end_date').val(val.expiry_date)
            $('#coupon-detail #coup_veh_type').val(val.car_bike)
            $('#coupon-detail #coup_cat').val(val.category)
            $('#coupon-detail #coup_type').val(val.type)
            $('#coupon-detail #coup_value').val(val.value)
            $('#coupon-detail #coup_cap').val(val.cap)
            $('#coupon-detail #coup_message').val(val.message)
            if (val.active){
                document.getElementById("coupon_active").checked = true;
            } else {
                document.getElementById("coupon_active").checked = false;
            }

        });
        Materialize.updateTextFields();
    },
    loadCouponAll:function(data){
        container =        $('#coupon-details .coupon-list .pre-data')
        container.html('')
        html=''
        i=1
        html += '								<div class="desc-content col s12 m12 l12">';
        html += '									<table class=" card striped">';
        html += '										<thead>';
        html += '										<tr>';
        html += '											<th data-field="id">S.No.</th>';
        html += '											<th data-field="code">Code</th>';
        html += '											<th data-field="veh_type">Vehicle</th>';
        html += '											<th data-field="category">Category</th>';
        html += '											<th data-field="start_date">Start</th>';
        html += '											<th data-field="end_date">End</th>';
        html += '											<th data-field="type">Type</th>';
        html += '											<th data-field="status">Status</th>';
        html += '											<th data-field="modify"></th>';
        html += '										</tr>';
        html += '										</thead>';
        html += '										<tbody>';
        $.each(data, function(ix, val) {
            html += '<tr class="coupon-row" data-class="'+val.id+'">'
            html += '											<td>'+i+'</td>';
            html += '											<td>'+val.coupon_code+'</td>';
            html += '											<td>'+val.car_bike+'</td>';
            html += '											<td>'+val.category+'</td>';
            html += '											<td>'+val.date_start+'</td>';
            html += '											<td>'+val.expiry_date+'</td>';
            html += '											<td>'+val.type+'</td>';
            // console.log(val.active)
            if (val.active){
                html += '											<td><i style="color:green" class="fa fa-circle"></i></td>';
            }else{
                html += '											<td><i style="color:red" class="fa fa-circle"></i></td>';
                // html += '											<td></td>';
            }
            html += '											<td style="color:purple; cursor:pointer" class="modify-btn"><i class="fa fa-pencil"></i></td>';
            html += '										</tr>';
            i=i+1
        })

        html += '										</tbody>';
        html += '									</table>';
        html += '								</div>';

        container.html(html);

    },
    loadBrands:function(data){
        var container = $('#select-make');
        container.html('');
        var html = '<select class="browser-default">';
        html +=    '<option value="" disabled selected>Select Make</option>';
        $.each(data, function(ix, val){
            html += '<option value="'+val.make+'">'+val.make+'</option>';
        });
        html += '</select>';
        container.html(html);
    },
    loadBrands2:function(data){
        var container = $('#sub_veh_make');
        container.html('');
        var html = '<select class="browser-default">';
        html +=    '<option value="" disabled selected>Select Make</option>';
        $.each(data, function(ix, val){
            html += '<option value="'+val.make+'">'+val.make+'</option>';
        });
        html += '</select>';
        container.html(html);
    },
    loadModels:function(data){
        var container = $('#select-model');
        container.html('');
        var html = '<select class="browser-default">';
        html +=    '<option value="" disabled selected>Select Model</option>';
        $.each(data, function(ix, val){
            html += '<option value="' + val.full_veh_name + '" data-placeholder="true">'+ val.full_veh_name + '</option>'
            // html += '<option value="'+val.model+'">'+val.model+'</option>';
        });
        html += '</select>';
        container.html(html);
    },
    loadModels2:function(data){
        var container = $('#sub_veh_model');
        container.html('');
        var html = '<select class="browser-default">';
        html +=    '<option value="" disabled selected>Select Model</option>';
        $.each(data, function(ix, val){
            html += '<option value="' + val.full_veh_name + '" data-placeholder="true">'+ val.full_veh_name + '</option>'
            // html += '<option value="'+val.model+'">'+val.model+'</option>';
        });
        html += '</select>';
        container.html(html);
    },
    loadJobs:function(data){
        // console.log('check')
        container = $(this).closest('.service-row').find('.service-select select');
        container.html('');
        html =''
        // var html = '<select class="browser-default">';
        html +=    '<option value="" disabled selected>Select Service</option>';
        $.each(data, function(ix, val){
            if (val.doorstep == "1"){
                if (val.job_sub_cat == "NA"){
                    html += '<option value="'+val.id+'">'+val.job_name+' (Doorstep)</option>';
                }else{
                    html += '<option value="'+val.id+'">'+val.job_name+' (Doorstep) ('+ val.job_sub_cat +')</option>';
                }
            }else{
                if (val.job_sub_cat == "NA"){
                    html += '<option value="'+val.id+'">'+val.job_name+' (Workshop)</option>';
                }else{
                    html += '<option value="'+val.id+'">'+val.job_name+' (Workshop) ('+ val.job_sub_cat +')</option>';
                }
            }
        });
        // html += '</select>';
        container.html(html);
    },
    loadCart:function(data){
        var html ='';

        JOBS_SUMMARY_NEW_BOOKING = [];
        CURRENT_CART_NEW_BOOKING = [];
        TOTAL_PRICE_NEW_BOOKING = 0;
        ALL_JOBS_NEW_BOOKING = "";
        ALL_JOBS_NEW_BOOKING_LIST = [];
        TOTAL_ITEMS_NEW_BOOKING = 0 ;
        TOTAL_LABOUR_NEW_BOOKING= 0;
        TOTAL_PARTS_NEW_BOOKING = 0;
        TOTAL_DISCOUNT_NEW_BOOKING = 0;
        COUP_DISCOUNT_NEW_BOOKING = 0 ;
        TOTAL_JOBS_NEW_BOOKING = 0;
        ADD_DISCOUNT = 0;

        console.log("1")


        // ALL_JOBS = '';
        // CURRENT_CART =[];
        // JOBS_SUMMARY=[]
        $.each(data['cart_details'], function(ix, val) {

            jsLen = val.default_comp.length;
            for (i = 0; i < jsLen; i++) {
                CURRENT_CART_NEW_BOOKING.push(val.default_comp[i])
            }

            if (ALL_JOBS_NEW_BOOKING ==''){
                ALL_JOBS_NEW_BOOKING = val.job_name;
                job_obj = {"Job":val.job_name,"Price":val.total_price,"Category":val.service_cat}
                ALL_JOBS_NEW_BOOKING_LIST.push(job_obj)
            }else{
                ALL_JOBS_NEW_BOOKING = ALL_JOBS_NEW_BOOKING +', '+val.job_name;
                job_obj = {"Job":val.job_name,"Price":val.total_price,"Category":val.service_cat}
                ALL_JOBS_NEW_BOOKING_LIST.push(job_obj)
            }
            JOBS_SUMMARY_NEW_BOOKING.push({'category':val.service_cat,'job_name':val.job_name,'price_total':val.total_price,'price_part':val.total_part,'price_labour':val.total_labour,'price_discount':val.total_discount,"doorstep":val.doorstep})
        });

        $.each(data['cart_summary'], function(ix, val) {
            if (val.car_bike=="Car"){
                if (val.cg_amount_workshop <= 1800 && val.cg_amount_workshop > 0){
                    PICK_DROP = 150
                }else{
                    PICK_DROP = 0
                }
            }else if (val.car_bike =="Bike"){
                if (val.cg_amount <200 && val.cg_amount >0){
                    PICK_DROP = 200
                }else{
                    PICK_DROP = 0
                }
            }else{
                PICK_DROP=0
            }

            if (PICK_DROP >0 ){
                console.log(PICK_DROP)
                // JOBS_SUMMARY_TOTAL
                pick_drop_val = {"category": "Labour",
                    "name": "Visiting/Pick Drop",
                    "price": PICK_DROP,
                    "price_comp": PICK_DROP,
                    "unit_price": PICK_DROP,
                    "action": "Labour",
                    "type":"Labour",
                    "quantity": "1"};

                JOBS_SUMMARY_NEW_BOOKING.push({'category':'Labour','job_name':'Visiting/Pick Drop','price_total':PICK_DROP,'price_part':'0','price_labour':PICK_DROP,'price_discount':'0','doorstep':'0'});
                CURRENT_CART_NEW_BOOKING.push(pick_drop_val)
            }

            // TOTAL_PRICE Change
            TOTAL_PRICE_NEW_BOOKING = parseFloat(val.cg_amount) - parseFloat(COUP_DISCOUNT_NEW_BOOKING) + PICK_DROP;
            TOTAL_JOBS_NEW_BOOKING = val.total_jobs;
            TOTAL_LABOUR_NEW_BOOKING = val.total_labour_cg + PICK_DROP;
            TOTAL_PARTS_NEW_BOOKING = val.total_part_cg;
            TOTAL_DISCOUNT_NEW_BOOKING = val.total_discount_cg
            ADD_DISCOUNT = parseFloat(val.diff_amount) + parseFloat(COUP_DISCOUNT_NEW_BOOKING);
            console.log(TOTAL_PRICE_NEW_BOOKING)

            $('#new-booking .service-select .amount').text(TOTAL_PRICE_NEW_BOOKING)
        });
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
    loadCustomerStatus:function(data){
        Global.updateCust_new()
        // data_id = $('#customer-detail #booking_id').attr('booking_data_id')
        // Global.openbooking_new(data_id)
        // setTimeout(function(){
        //           openbooking(data_id)
        //         }, 1000);

        // data_id = $('#customer-detail #booking_id').attr('booking_data_id')
        // (data_id)
        // alert('Status Updated!')
        // location.reload()
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
        console.log(locations)
        container.autocomplete({
            data : locations
        })
        Materialize.updateTextFields();
    },
    loadSubscriptionAll:function(data){
        container =        $('#subscription-details .subscription-list .pre-data')

        container.html('')
        html=''
        i=1
        html += '								<div class="desc-content col s12 m12 l12">';
        html += '									<table class="card striped">';
        html += '										<thead>';
        html += '										<tr>';
        html += '											<th data-field="id">S.No.</th>';
        html += '											<th data-field="name">Name</th>';
        html += '											<th data-field="number">Number</th>';
        html += '											<th data-field="type">Category</th>';
        html += '											<th data-field="start_date">Start</th>';
        html += '											<th data-field="end_date">End</th>';
        html += '											<th data-field="status">Status</th>';
        html += '											<th data-field="status">Active</th>';
        html += '											<th data-field="modify"></th>';
        html += '										</tr>';
        html += '										</thead>';
        html += '										<tbody>';
        $.each(data, function(ix, val) {
            html += '<tr class="subscription-row" data-class="'+val.id+'">'
            html += '											<td>'+i+'</td>';
            html += '											<td>'+val.cust_fname+' '+val.cust_lname+'</td>';
            html += '											<td>'+val.cust_number_primary+', '+val.cust_number_secondary+'</td>';
            html += '											<td>'+val.subscription_type+'</td>';
            html += '											<td>'+val.date_start+'</td>';
            html += '											<td>'+val.date_end+'</td>';
            html += '											<td>'+val.status+'</td>';

            // console.log(val.active)
            if (val.is_active){
                html += '											<td><i style="color:green" class="fa fa-circle"></i></td>';
            }else{
                html += '											<td><i style="color:red" class="fa fa-circle"></i></td>';
                // html += '											<td></td>';
            }
            html += '											<td style="color:purple; cursor:pointer" class="modify-btn"><i class="fa fa-pencil"></i></td>';
            html += '										</tr>';
            i=i+1
        })

        html += '										</tbody>';
        html += '									</table>';
        html += '								</div>';

        container.html(html);

    },
    loadSubscription:function(data){
        $.each(data, function(ix, val) {
            $('#sub_id').val(val.subscription_id)
            $('#firstname').val(val.cust_fname)
            $('#lastname').val(val.cust_lname)
            $('#sub_telephone').val(val.cust_number_primary)
            $('#sub_alt_telephone').val(val.cust_number_secondary)
            $('#sub_email').val(val.cust_email)
            $('#sub_address').val(val.cust_address)
            $('#sub_locality').val(val.cust_locality)
            $('#sub_city').val(val.cust_city)
            $('#sub_state').find('select').val(val.cust_state)
            $('#sub_veh_type').find('select').val(val.cust_vehicle_type).trigger("change");
            setTimeout(function(){
                $('#sub_veh_make').find('select').val(val.cust_make).trigger("change");
                // console.log('1')
                setTimeout(function(){
                    $('#sub_veh_model').find('select').val(val.cust_model+' ('+val.cust_fuel_varient+')');
                    // console.log('2')
                }, 1000);
            }, 1500);


            $('#sub_vin_number').val(val.cust_vehicle_vin)
            $('#sub_reg_number').val(val.cust_regnumber)
            $('#sub_category').val(val.subscription_type)
            $('#sub_package_name').val(val.package_name)
            $('#sub_comment').val(val.comment)
            $('#sub_status').val(val.status)
            // $('#sub_veh_date_purchase').val(val.date_veh_purchase);
            // $('#sub_date_start').val(val.date_start);
            // $('#sub_date_end').val(val.date_end);


            date_purchase   = val.date_veh_purchase
            date_start      = val.date_start
            date_end        = val.date_end



            if (val.is_active){
                document.getElementById("policy_active").checked = true;
            }else{
                document.getElementById("policy_active").checked = false;
            }

        });

        var $input = $('#sub_veh_date_purchase').pickadate({
            format: 'dd-mm-yyyy',
        })

        var $input2 = $('#sub_date_start').pickadate({
            format: 'dd-mm-yyyy',
        })

        var $input3 = $('#sub_date_end').pickadate({
            format: 'dd-mm-yyyy',
        })

        var picker = $input.pickadate('picker')
        picker.set('select', date_purchase, { format: 'dd-mm-yyyy' })

        var picker2 = $input2.pickadate('picker')
        picker2.set('select', date_start, { format: 'dd-mm-yyyy' })

        var picker3 = $input3.pickadate('picker')
        picker3.set('select', date_end, { format: 'dd-mm-yyyy' })

        Materialize.updateTextFields();
    },
    loadSubscriptionModify:function(data){
        alert("Subscription Added/Modified")
    },
    loadCustomerestimate:function(date){
        alert('Estimate Updated!')
    },
    loadCampaign:function(data){
        alert(data['msg'])
        setTimeout(function() {
            location.reload()
        }, 1000);

    },
    loadFeedback:function(data){
        $.each(data, function(ix, val) {
            if (val.pick_on_time=="Yes"){
                document.getElementById("pick_on_time_yes").checked = true;
            }else if(val.pick_on_time == "No"){
                document.getElementById("pick_on_time_no").checked = true;
            }else{

            }
            if (val.delivery_on_time=="Yes"){
                document.getElementById("delivery_on_time_yes").checked = true;
            }else if(val.delivery_on_time == "No"){
                document.getElementById("delivery_on_time_no").checked = true;
            }else{

            }

            if (val.courteous=="Yes"){
                document.getElementById("courteous_yes").checked = true;
            }else if(val.courteous == "No"){
                document.getElementById("courteous_no").checked = true;
            }else{

            }

            if(val.washing == "1"){document.getElementById("washing_1").checked = true;}
            else if(val.washing =="2"){document.getElementById("washing_2").checked = true;}
            else if(val.washing =="3"){document.getElementById("washing_3").checked = true;}
            else if(val.washing =="4"){document.getElementById("washing_4").checked = true;}
            else if(val.washing =="5"){document.getElementById("washing_5").checked = true;}
            else if(val.washing =="6"){document.getElementById("washing_6").checked = true;}
            else if(val.washing =="7"){document.getElementById("washing_7").checked = true;}
            else if(val.washing =="8"){document.getElementById("washing_8").checked = true;}
            else if(val.washing =="9"){document.getElementById("washing_9").checked = true;}
            else if(val.washing =="10"){document.getElementById("washing_10").checked = true;}else{}



            if(val.quality_of_service == "1"){document.getElementById("quality_of_service_1").checked = true;}
            else if(val.quality_of_service =="2"){document.getElementById("quality_of_service_2").checked = true;}
            else if(val.quality_of_service =="3"){document.getElementById("quality_of_service_3").checked = true;}
            else if(val.quality_of_service =="4"){document.getElementById("quality_of_service_4").checked = true;}
            else if(val.quality_of_service =="5"){document.getElementById("quality_of_service_5").checked = true;}
            else if(val.quality_of_service =="6"){document.getElementById("quality_of_service_6").checked = true;}
            else if(val.quality_of_service =="7"){document.getElementById("quality_of_service_7").checked = true;}
            else if(val.quality_of_service =="8"){document.getElementById("quality_of_service_8").checked = true;}
            else if(val.quality_of_service =="9"){document.getElementById("quality_of_service_9").checked = true;}
            else if(val.quality_of_service =="10"){document.getElementById("quality_of_service_10").checked = true;}else{}

            if(val.experience == "1"){document.getElementById("experience_1").checked = true;}
            else if(val.experience =="2"){document.getElementById("experience_2").checked = true;}
            else if(val.experience =="3"){document.getElementById("experience_3").checked = true;}
            else if(val.experience =="4"){document.getElementById("experience_4").checked = true;}
            else if(val.experience =="5"){document.getElementById("experience_5").checked = true;}
            else if(val.experience =="6"){document.getElementById("experience_6").checked = true;}
            else if(val.experience =="7"){document.getElementById("experience_7").checked = true;}
            else if(val.experience =="8"){document.getElementById("experience_8").checked = true;}
            else if(val.experience =="9"){document.getElementById("experience_9").checked = true;}
            else if(val.experience =="10"){document.getElementById("experience_10").checked = true;}else{}


            if(val.recommend_factor == "1"){document.getElementById("recommend_factor_1").checked = true;}
            else if(val.recommend_factor =="2"){document.getElementById("recommend_factor_2").checked = true;}
            else if(val.recommend_factor =="3"){document.getElementById("recommend_factor_3").checked = true;}
            else if(val.recommend_factor =="4"){document.getElementById("recommend_factor_4").checked = true;}
            else if(val.recommend_factor =="5"){document.getElementById("recommend_factor_5").checked = true;}
            else if(val.recommend_factor =="6"){document.getElementById("recommend_factor_6").checked = true;}
            else if(val.recommend_factor =="7"){document.getElementById("recommend_factor_7").checked = true;}
            else if(val.recommend_factor =="8"){document.getElementById("recommend_factor_8").checked = true;}
            else if(val.recommend_factor =="9"){document.getElementById("recommend_factor_9").checked = true;}
            else if(val.recommend_factor =="10"){document.getElementById("recommend_factor_10").checked = true;}else{}

            $('#additional').val(val.additional)
        });
    },
    loadCustomerFeedback:function(data){
        alert('Feedback Updated!')
    },
    updateCust_new:function(){
        bid = $('#customer-detail #booking_id').attr('booking_id');
        email_n = $('#customer-detail #email').val();
        reg_n = $('#customer-detail #cust_regnumber').val();
        date_n = $('#customer-detail #date').val();
        time_n = $('#customer-detail #time_booking').val();
        // comment_n = $('#customer-detail #comments').val();
        notes_n = $('#customer-detail #notes').val();
        amount_paid_n = $('#customer-detail #cust_amount_paid').val()
        cust_name = $('#customer-detail #cust_name').val()
        cust_number = $('#customer-detail #cust_number').val()
        cust_address = $('#customer-detail #cust_address').val()
        cust_locality = $('#customer-detail #cust_locality').val()
        cust_city = $('#customer-detail #cust_city').val()
        source = $('#customer-detail #source').val()
        date_del = $('#customer-detail #date_delivery').val()
        date_follow = $('#customer-detail #date_follow').val()
        time_follow = $('#customer-detail #time_follow').val()
        follow_status = $('#customer-detail #status_details_new').val()
        odometer = $('#customer-detail #cust_odometer').val()
        escalation_reason = $('#customer-detail #escalation_reason').val()
        escalation_resolution = $('#customer-detail #escalation_resolution').val()
        driver_pick_name = $('#customer-detail #driver_pick_name').val()
        driver_pick_number = $('#customer-detail #driver_pick_number').val()
        driver_drop_name = $('#customer-detail #driver_drop_name').val()
        driver_drop_number = $('#customer-detail #driver_drop_number').val()
        try{
            make = $('#brand-cust').val()
            model = $('#make-cust').val()
            fuel_start = model.indexOf("(")
            fuel_end = model.indexOf(")")
            fuel =model.substr(fuel_start+1,fuel_end-fuel_start-1)
            model = model.substr(0,fuel_start-1)

        }catch(e){
            make = ""
            model = ""
            fuel = ""
        }
        jobs_summary_list = []
       $('#customer-detail .jobs-list .job-row').each(function(){
                name = $(this).find('.job-summary-name input').val()
                preok = $(this).find('.job-summary-pre-ok input').is(':checked');
                prenotok = $(this).find('.job-summary-pre-notok input').is(':checked');

                postok = $(this).find('.job-summary-post-ok input').is(':checked');
                postnotok = $(this).find('.job-summary-post-notok input').is(':checked');
                type_check = $(this).attr('data-class')

                price = 0

                if (name != "" && name != " "){
                    obj = {"Job":name,"Preok":preok,"Prenotok":prenotok,"Postok":postok,"Postnotok":postnotok,"Price":price,"Type":type_check}
                    jobs_summary_list.push(obj)

                }
            });



        // ALL_JOBS_ADMIN = comment_n
        Commons.ajaxData('update_booking', {b_id: bid,
            email: email_n,
            reg_number: reg_n,
            // comment: comment_n,
            time: time_n,
            date: date_n,
            note:notes_n,
            name : cust_name,
            number : cust_number,
            amount_paid : amount_paid_n,
            address : cust_address,
            locality : cust_locality,
            city : cust_city,
            source : source,
            date_del : date_del,
            date_follow:date_follow,
            time_follow:time_follow,
            follow_status:follow_status,
            odometer:odometer,
            job_summary : JSON.stringify(jobs_summary_list),
            es_reason:escalation_reason,
            es_resolution:escalation_resolution,
            driver_pick_name:driver_pick_name,
            driver_pick_number:driver_pick_number,
            driver_drop_name:driver_drop_name,
            driver_drop_number:driver_drop_number,
            make:make,
            model:model,
            fuel:fuel,

        }, "post", Global, Global.loadCustomerupdate,null, '.loading-pane');

    },
    openbooking_new:function(data_id){
        $('#bookings').hide()
        $('#booking-details').show()
        $('#customer-detail .booking-data').show();
        $('#customer-detail .booking-job-data').hide();
        $('#customer-detail .feedback-data').hide();
        $('#customer-detail .booking-job-card').hide();
        $('#customer-detail .feedback-detail').removeClass('selected')
        $('#customer-detail .service-detail').removeClass('selected')
        $('#customer-detail .job-card-detail').removeClass('selected')
        $('#customer-detail .cust-detail').addClass('selected')
        Commons.ajaxData('view_all_bookings', {data_id:data_id}, "get", Global, Global.loadBookingData,null, '.loading-pane');
        Commons.ajaxData('fetch_all_users', {type:"agent"}, "get", Global, Global.loadAgentdata,null, '.loading-pane');
        Commons.ajaxData('get_all_feedback', {booking_data_id:data_id}, "get", Global, Global.loadFeedback,null, '.loading-pane');
        var path = window.location.pathname.split('/')
        var new_path = path.slice(0,3).join('/')+'/single/' + data_id
        history.pushState({},'',new_path)
    },
    openbooking_new2:function(data_id){
        $('#bookings').hide()
        $('#booking-details').show()
        $('#customer-detail .booking-data').hide();
        $('#customer-detail .booking-job-data').hide();
        $('#customer-detail .feedback-data').hide();
        $('#customer-detail .booking-job-card').show();
        $('#customer-detail .feedback-detail').removeClass('selected')
        $('#customer-detail .service-detail').removeClass('selected')
        $('#customer-detail .job-card-detail').addClass('selected')
        $('#customer-detail .cust-detail').removeClass('selected')
        Commons.ajaxData('view_all_bookings', {data_id:data_id}, "get", Global, Global.loadBookingData,null, '.loading-pane');
        Commons.ajaxData('fetch_all_users', {type:"agent"}, "get", Global, Global.loadAgentdata,null, '.loading-pane');
        Commons.ajaxData('get_all_feedback', {booking_data_id:data_id}, "get", Global, Global.loadFeedback,null, '.loading-pane');
        var path = window.location.pathname.split('/')
        var new_path = path.slice(0,3).join('/')+'/single/' + data_id
        history.pushState({},'',new_path)
    },
    loadAnalysis_all:function(data){
        $('#analytics .vol-all').text(Math.round(parseFloat(data['vol_completed'])))
        $('#analytics .tran-all').text(data['num_completed'])
        $('#analytics .lead-all').text(data['num_total_lead'])
        $('#analytics .users-all').text(data['num_users'])
        $('#analytics .nps-all').text(data['nps'])

        // nps-all
    },
    loadAnalysis_car:function(data){
        $('#analytics .vol-car').text(Math.round(parseFloat(data['vol_completed'])))
        $('#analytics .tran-car').text(data['num_completed'])
        $('#analytics .lead-car').text(data['num_total_lead'])
        $('#analytics .users-car').text(data['num_users'])
        $('#analytics .nps-car').text(data['nps'])

    },
    loadAnalysis_bike:function(data){
        $('#analytics .vol-bike').text(Math.round(parseFloat(data['vol_completed'])))
        $('#analytics .tran-bike').text(data['num_completed'])
        $('#analytics .lead-bike').text(data['num_total_lead'])
        $('#analytics .users-bike').text(data['num_users'])
        $('#analytics .nps-bike').text(data['nps'])
    },
    loadAnalysis_veh_filter:function(data){
        anal_time_cat = $('#analytics .header-analytics .selected').attr('data-class')
        anal_veh_cat = $('#analytics .vehicle-filter .date-box.selected').attr('data-class')
        sourcelen = SOURCES.length;
        container = $('#analytics .source-data-row').find('tbody.sources-all')
        container.html('')
        SOURCE_TABLE = ''
        for (i = 0; i < sourcelen; i++) {
            cpb = 0
            cpl = 0
            source_name = SOURCES[i].toLowerCase()
            source_name = source_name.replace(/ /g,'')
            source_name = source_name.replace(/-/g,'')
            SOURCE_TABLE += '<tr><td>'+SOURCES[i]+'</td><td>'
            SOURCE_TABLE += Math.round(parseFloat(data["vol_"+source_name+"_completed"]))
            // console.log(source_name)
            SOURCE_TABLE +='</td><td>'
            SOURCE_TABLE += data["num_"+source_name+"_completed"]
            SOURCE_TABLE +='</td><td>'
            SOURCE_TABLE += "NA"
            SOURCE_TABLE += '</td><td>'
            SOURCE_TABLE += data["num_"+source_name+"_lead"]
            SOURCE_TABLE += '</td><td>'
            if (anal_time_cat == "Overall" && anal_veh_cat == "All"){
                cpl = Math.round(parseFloat(data["vol_"+source_name+"_expense"])/parseFloat(data["num_"+source_name+"_lead"]))
                cpb = Math.round(parseFloat(data["vol_"+source_name+"_expense"])/parseFloat(data["num_"+source_name+"_completed"]))
                SOURCE_TABLE += cpl
                SOURCE_TABLE += '</td><td>'
                SOURCE_TABLE += cpb
                SOURCE_TABLE += '</td></tr>'
            }else{
                SOURCE_TABLE += 'NA'
                SOURCE_TABLE += '</td><td>'
                SOURCE_TABLE += 'NA'
                SOURCE_TABLE += '</td></tr>'
            }
        }
        SOURCE_TABLE += '<tr><td>Other</td><td>'
        SOURCE_TABLE += Math.round(parseFloat(data["vol_other_completed"]))
        SOURCE_TABLE +='</td><td>'
        SOURCE_TABLE += data["num_other_completed"]
        SOURCE_TABLE +='</td><td>'
        SOURCE_TABLE += "NA"
        SOURCE_TABLE += '</td><td>'
        SOURCE_TABLE += data["num_other_lead"]
        SOURCE_TABLE += '</td><td>'
        SOURCE_TABLE += 'NA'
        SOURCE_TABLE += '</td><td>'
        SOURCE_TABLE += 'NA'
        SOURCE_TABLE += '</td></tr>'
        container.html(SOURCE_TABLE)

        // B2C/B2C Source Populate

        container2 = $('#analytics .source-data-row').find('tbody.sources-b2b-b2c')
        container2.html('')
        SOURCE_TABLE_2 = ''
        SOURCE_TABLE_2 += '<tr><td>B2B</td><td>'
        SOURCE_TABLE_2 += Math.round(parseFloat(data["vol_b2b_total_completed"]))
        SOURCE_TABLE_2 +='</td><td>'
        SOURCE_TABLE_2 += Math.round(parseFloat(data["num_b2b_total_completed"]))
        SOURCE_TABLE_2 +='</td><td>'
        SOURCE_TABLE_2 += "NA"
        SOURCE_TABLE_2 += '</td><td>'
        SOURCE_TABLE_2 += data["num_b2b_total_lead"]
        SOURCE_TABLE_2 += '</td><td>'
        SOURCE_TABLE_2 += '123'
        SOURCE_TABLE_2 += '</td><td>'
        SOURCE_TABLE_2 += '142'
        SOURCE_TABLE_2 += '</td></tr>'
        SOURCE_TABLE_2 += '<tr><td>B2C</td><td>'
        SOURCE_TABLE_2 += Math.round(parseFloat(data["vol_b2c_total_completed"]))
        SOURCE_TABLE_2 +='</td><td>'
        SOURCE_TABLE_2 += Math.round(parseFloat(data["num_b2c_total_completed"]))
        SOURCE_TABLE_2 +='</td><td>'
        SOURCE_TABLE_2 += "NA"
        SOURCE_TABLE_2 += '</td><td>'
        SOURCE_TABLE_2 += data["num_b2c_total_lead"]
        SOURCE_TABLE_2 += '</td><td>'
        SOURCE_TABLE_2 += '123'
        SOURCE_TABLE_2 += '</td><td>'
        SOURCE_TABLE_2 += '142'
        SOURCE_TABLE_2 += '</td></tr>'
        container2.html(SOURCE_TABLE_2)

        STATUS_LEADS = ["Lead","Cold","Warm","Estimate Required","Cancelled"]
        STATUS_BOOKINGS = ["Confirmed","Acknowledged","Assigned","Engineer Left","Reached Workshop","Estimate Shared","Job Completed","Feedback Taken","Cancelled","Escalation"]

        container3 = $('#analytics .status-data-row').find('tbody.status-leads')
        container3.html('')

        statuslen1 = STATUS_LEADS.length
        STATUS_TABLE_LEADS = '<tr><td style="text-align: left"><b>Leads</b></td><td></td></tr>'
        for (i = 0; i < statuslen1; i++) {
            status_name = STATUS_LEADS[i].toLowerCase()
            status_name = status_name.replace(/ /g,'')
            status_name = status_name.replace(/-/g,'')
            STATUS_TABLE_LEADS += '<tr><td>'+STATUS_LEADS[i]+'</td><td>'
            STATUS_TABLE_LEADS += data["num_"+status_name+"_lead"]
            STATUS_TABLE_LEADS += '</td></tr>'
        }
        container3.html(STATUS_TABLE_LEADS)


        container4 = $('#analytics .status-data-row').find('tbody.status-bookings')
        container4.html('')

        statuslen2 = STATUS_BOOKINGS.length
        STATUS_TABLE_BOOKINGS = '<tr><td style="text-align: left"><b>Bookings</b></td><td></td></tr>'
        for (i = 0; i < statuslen2; i++) {
            status_name = STATUS_BOOKINGS[i].toLowerCase()
            status_name = status_name.replace(/ /g,'')
            status_name = status_name.replace(/-/g,'')
            STATUS_TABLE_BOOKINGS += '<tr><td>'+STATUS_BOOKINGS[i]+'</td><td>'
            STATUS_TABLE_BOOKINGS += data["num_"+status_name+"_booking"]
            STATUS_TABLE_BOOKINGS += '</td></tr>'
        }
        container4.html(STATUS_TABLE_BOOKINGS)
        $('.kpi-data-row .avg-time-ack').text(((data['avg_time_ack']/60).toFixed(2))+' Mins.')
        $('.kpi-data-row .avg-time-pick').text(((data['avg_time_pick']/60).toFixed(2))+' Mins.')
        $('.kpi-data-row .avg-time-shest').text(((data['avg_time_share_est']/60).toFixed(2)) +' Mins.')


    },
    loadAnalysis_veh_filter_month:function(data){
        container = $('#analytics .month-data-row').find('tbody')
        container.html('')
        num_leads = parseInt(data['num_lead'])+parseInt(data['num_warm'])
        if (data['req_user_admin']){
            MONTH_TABLE += '<tr><td>'+data['monthyear']+'</td><td>'+Math.round(parseFloat(data['vol_completed']))+'</td><td>'+data['num_completed']+'</td><td>NA</td><td>'+data['num_total_lead']+'</td><td>'+data['nps']+'</td></tr>'
        }else if(data['req_user_agent']){
            MONTH_TABLE += '<tr><td>'+data['monthyear']+'</td><td>'+Math.round(parseFloat(data['vol_completed']))+'</td><td>'+data['num_completed']+'</td><td>'+data['num_total_lead']+'</td><td>'+data['nps']+'</td></tr>'
        }else{
            MONTH_TABLE += '<tr><td>'+data['monthyear']+'</td><td>'+Math.round(parseFloat(data['vol_completed']))+'</td><td>'+data['num_completed']+'</td><td>'+data['num_total_lead']+'</td></tr>'
        }
        container.html(MONTH_TABLE)
        MONTH_NUMBER = MONTH_NUMBER + 1
        // console.log(MONTH_NUMBER)
        if (MONTH_NUMBER < monLen){
            Global.analyse_month(list_months[MONTH_NUMBER])
        }
    },
    analyse_month:function(month){
        // console.log(month)
        anal_veh_cat = $('#analytics .vehicle-filter .date-box.selected').attr('data-class')
        if (anal_veh_cat == "All"){
            Commons.ajaxData('analyse_bookings', {monthyear:month}, "get", Global, Global.loadAnalysis_veh_filter_month,null, '.loading-pane');
        }else if (anal_veh_cat == "Car"){
            Commons.ajaxData('analyse_bookings', {monthyear:month, car_bike : anal_veh_cat}, "get", Global, Global.loadAnalysis_veh_filter_month,null, '.loading-pane');
        }else if (anal_veh_cat == "Bike"){
            Commons.ajaxData('analyse_bookings', {monthyear:month, car_bike : anal_veh_cat}, "get", Global, Global.loadAnalysis_veh_filter_month,null, '.loading-pane');
        }
    },
    loadExpenseAll:function(data){
        container = $('#expense-details .expense-list .pre-data')
        container.html('')
        html=''
        i=1
        html += '								<div class="desc-content col s12 m12 l12">';
        html += '									<table class=" card striped">';
        html += '										<thead>';
        html += '										<tr>';
        html += '											<th data-field="id">S.No.</th>';
        html += '											<th data-field="code">Date Expense</th>';
        html += '											<th data-field="category">Category</th>';
        html += '											<th data-field="sub_category">Sub Category</th>';
        html += '											<th data-field="amount">Amount</th>';
        html += '											<th data-field="reason">Reason</th>';
        html += '											<th data-field="owner">Owner</th>';
        html += '											<th data-field="delete"></th>';
        html += '											<th data-field="modify"></th>';
        html += '										</tr>';
        html += '										</thead>';
        html += '										<tbody>';
        $.each(data, function(ix, val) {
            html += '<tr class="expense-row" data-class="'+val.id+'">'
            html += '											<td>'+i+'</td>';
            html += '											<td>'+val.date_expense+'</td>';
            html += '											<td>'+val.category+'</td>';
            html += '											<td>'+val.sub_category+'</td>';
            html += '											<td>'+val.amount+'</td>';
            html += '											<td>'+val.reason+'</td>';
            html += '											<td>'+val.expense_owner+'</td>';
            html += '											<td style="color:purple; cursor:pointer" class="delete-btn"><i class="fa fa-trash"></i></td>';
            html += '											<td style="color:purple; cursor:pointer" class="modify-btn"><i class="fa fa-pencil"></i></td>';
            html += '										</tr>';
            i=i+1
        })

        html += '										</tbody>';
        html += '									</table>';
        html += '								</div>';

        container.html(html);
    },
    loadExpense:function(data){
        $.each(data, function(ix, val) {
            $('#expense-detail #expense_id').attr(val.id)
            $('#expense-detail #expense_date').val(val.date_expense)
            $('#expense-detail #expense_cat').val(val.category)
            $('#expense-detail #expense_subcat').val(val.sub_category)
            $('#expense-detail #expense_comment').val(val.reason)
            $('#expense-detail #expense_reason').val(val.comment)
            $('#expense-detail #expense_amount').val(val.amount)
            $('#expense-detail #expense_owner').val(val.expense_owner)
        });
        Materialize.updateTextFields();
    },
    loadAddexpense:function(data){
        alert('Expense Added')
    },
    loadExpenseDelete:function(data){
        $('.navbar .expenses-button').click()
    },
    loadbillAll:function(data){
        $('#bill-detail .total-bill-amount').text(data['summary']['total_bill_amount'])
        $('#bill-detail .total-bills').text(data['summary']['total_bills'])
        $('#bill-detail .total-bill-labour').text(data['summary']['total_labour_amount'])
        $('#bill-detail .total-bill-part').text(data['summary']['total_part_amount'])
        $('#bill-detail .total-bill-due').text(data['summary']['total_due_amount'])

        container =        $('#bill-details .bill-list .pre-data')
        container.html('')
        html=''
        i=1
        html += '								<div class="desc-content col s12 m12 l12">';
        html += '									<table class=" card striped">';
        html += '										<thead>';
        html += '										<tr>';
        html += '											<th class="centered-text" data-field="id">Invoice No.</th>';
        html += '											<th class="centered-text" data-field="code">Owner</th>';
        html += '											<th class="centered-text" data-field="code">Job Info</th>';
        html += '											<th class="centered-text"  data-field="code">Date Job Card</th>';
        html += '											<th class="centered-text" data-field="code">Date Created</th>';
        html += '											<th class="centered-text" data-field="veh_type">Customer Name</th>';
        html += '											<th class="centered-text"  data-field="category">Total Amount</th>';
        // html += '											<th data-field="end_date">Bill Status</th>';
        html += '											<th class="centered-text" data-field="start_date">Payment Status</th>';
        html += '											<th class="centered-text" data-field="end_date">Due Amount</th>';
        html += '											<th class="centered-text" data-field="download-bill" >Download</th>';
        html += '											<th class="centered-text" data-field="modify">Modify</th>';
        html += '										</tr>';
        html += '										</thead>';
        html += '										<tbody>';
        $.each(data['bills'], function(ix, val) {
            html += '<tr class="bill-row" data-class="'+val.id+'">'
            if(val.bill_type == "Invoice"){
                if (val.status == "Cancelled"){
                    html += '											<td class="centered-text" >'+val.invoice_number+' (Cancelled)</td>';
                }else{
                    html += '											<td class="centered-text" >'+val.invoice_number+'</td>';
                }
            }else{
                html += '											<td class="centered-text" >Pre-Invoice</td>';
            }
            if(val.owner == "CG Receipt"){
                html += '											<td class="centered-text" >CG Receipt</td>';
            }else{
                html += '											<td class="centered-text" >'+val.agent_name+', '+val.state+'</td>';
            }
            if (val.booking_data_id == ""){
                html += '											<td class="" >#Job: NA <br> '+'#Reg: '+val.reg_number+'</td>';
            }else{
                html += '											<td class="" >#Job: '+val.booking_id +'<br>#Reg: '+val.reg_number+'</td>';
            }
            if (val.date_job_created == ""){
                html += '											<td class="centered-text" >NA</td>';
            }else{
                html += '											<td class="centered-text" >'+val.date_job_created+'</td>';
            }
            html += '											<td class="centered-text" >'+val.date_created+'</td>';
            html += '											<td class="centered-text" >'+val.cust_name+'</td>';
            html += '											<td class="centered-text" >'+val.total_amount+'</td>';
            // html += '											<td>'+val.status+'</td>';
            if (val.status == "Cancelled"){
                html += '											<td class="centered-text" >NA</td>';
                html += '											<td class="centered-text" >NA</td>';
            }else{
                if (val.amount_paid){
                    html += '											<td class="centered-text" >Paid</td>';
                }else{
                    html += '											<td class="centered-text" >Due</td>';
                }
                html += '											<td class="centered-text" >'+String(parseFloat(val.total_amount)-parseFloat(val.total_recieved_amount))+'</td>';

            }
            html += '											<td class="centered-text" style="color:purple; cursor:pointer" class="download-btn centered-text"><i data-class='+ val.file_name +' class="fa fa-download downloadbill"></i></td>';
            if(val.status == "Cancelled"){
                html += '											<td></td>';
            }else{
                html += '											<td class="centered-text" style="color:purple; cursor:pointer" class="modify-btn centered-text"><i class="fa fa-pencil updatebill"></i></td>';
            }
            html += '										</tr>';
            i=i+1
        })

        html += '										</tbody>';
        html += '									</table>';
        html += '								</div>';
        container.html(html);
    },
    loadprebillAll:function(data){
        container =        $('#bill-details .bill-list .pre-data')
        container.html('')
        html=''
        i=1
        html += '								<div class="desc-content col s12 m12 l12">';
        html += '									<table class=" card striped">';
        html += '										<thead>';
        html += '										<tr>';
        html += '											<th class="centered-text" data-field="id">Invoice No.</th>';
        html += '											<th class="centered-text" data-field="code">Owner</th>';
        html += '											<th class="centered-text" data-field="code">Job Info</th>';
        html += '											<th class="centered-text"  data-field="code">Date Job Card</th>';
        html += '											<th class="centered-text" data-field="code">Date Created</th>';
        html += '											<th class="centered-text" data-field="veh_type">Customer Name</th>';
        html += '											<th class="centered-text"  data-field="category">Total Amount</th>';
        // html += '											<th data-field="end_date">Bill Status</th>';
        // html += '											<th class="centered-text" data-field="start_date">Payment Status</th>';
        // html += '											<th class="centered-text" data-field="end_date">Payment Mode</th>';
        html += '											<th class="centered-text" data-field="download-bill" >Download</th>';
        html += '											<th class="centered-text" data-field="modify">Modify</th>';
        html += '										</tr>';
        html += '										</thead>';
        html += '										<tbody>';
        $.each(data['bills'], function(ix, val) {
            html += '<tr class="bill-row" data-class="'+val.id+'">'
            if(val.bill_type == "Invoice"){
                if (val.status == "Cancelled"){
                    html += '											<td class="centered-text" >'+val.invoice_number+' (Cancelled)</td>';
                }else{
                    html += '											<td class="centered-text" >'+val.invoice_number+'</td>';
                }
            }else{
                html += '											<td class="centered-text" >Pre-Invoice</td>';
            }
            html += '											<td class="centered-text" >'+val.agent_name+', '+val.state+'</td>';
            if (val.booking_data_id == ""){
                html += '											<td class="" >#Job: NA <br> '+'#Reg: '+val.reg_number+'</td>';
            }else{
                html += '											<td class="" >#Job: '+val.booking_id +'<br>#Reg: '+val.reg_number+'</td>';
            }
            if (val.date_job_created == ""){
                html += '											<td class="centered-text" >NA</td>';
            }else{
                html += '											<td class="centered-text" >'+val.date_job_created+'</td>';
            }
            html += '											<td class="centered-text" >'+val.date_created+'</td>';
            html += '											<td class="centered-text" >'+val.cust_name+'</td>';
            html += '											<td class="centered-text" >'+val.total_amount+'</td>';
            // html += '											<td>'+val.status+'</td>';
            // if (val.amount_paid){
            // html += '											<td class="centered-text" >Paid</td>';
            // }else{
            //     html += '											<td class="centered-text" >Due</td>';
            // }
            // html += '											<td class="centered-text" >'+val.payment_mode+'</td>';
            html += '											<td class="centered-text" style="color:purple; cursor:pointer" class="download-btn centered-text"><i data-class='+ val.file_name +' class="fa fa-download downloadbill"></i></td>';
            html += '											<td class="centered-text" style="color:purple; cursor:pointer" class="modify-btn centered-text"><i class="fa fa-pencil updatebill"></i></td>';
            html += '										</tr>';
            i=i+1
        })

        html += '										</tbody>';
        html += '									</table>';
        html += '								</div>';
        container.html(html);
    },


    loadbillbookingdata:function(data){
        container = $('#bill-table').find('tbody')
        html = ''
        $.each(data, function(ix, val) {
            container.html('')
            html = ''
            $('#bill-detail #cust_bill_bookingid').val(val.booking_id)
            $('#bill-detail #cust_bill_name').val(val.cust_name)
            $('#bill-detail #cust_bill_number').val(val.cust_number)
            $('#bill-detail #cust_bill_address').val(val.cust_address)
            $('#bill-detail #cust_bill_locality').val(val.cust_locality)
            $('#bill-detail #cust_bill_city').val(val.cust_city)
            $('#bill-detail #cust_bill_vehicle').val(val.cust_make + ' ' + val.cust_model)
            $('#bill-detail #cust_bill_reg').val(val.cust_regnumber)
            $('#bill-detail #cust_bill_reco').val(val.customer_notes)

            data_id = val.id

            VAT_PART_BILL_ADMIN = 0;
            VAT_CONSUMABLE_BILL_ADMIN = 0;
            VAT_LUBE_BILL_ADMIN = 0;
            SERVICE_TAX_BILL_ADMIN = 0;

            AGENT_VAT_NO = val.agent_vat
            AGENT_STAX_NO = val.agent_stax
            AGENT_CIN_NO = val.agent_cin
            AGENT_NAME = val.agent_name
            AGENT_ADDRESS = val.agent_address
            AGENT_LOCALITY = val.agent_locality
            AGENT_CITY = val.agent_city
            AGENT_STATE = val.agent_state
            service_items = val.service_items
            itemlist = service_items.length;
            console.log(itemlist)
            for (i = 0; i < itemlist; i++) {
                html += '<tr>'
                html += '    <td><input id="part_name" type="text" class="browser-default" value="'+ val.service_items[i]['name'] +'" aria-required="true"></td>'
                html += '    <td><div class="input-field sort" id ="part_type"><select  class="browser-default">'
                if(val.service_items[i]['type'] == "Part"){
                    html += '        <option value="Part" selected>Part</option>'
                }else{
                    html += '        <option value="Part">Part</option>'
                }
                if(val.service_items[i]['type'] == "Lube"){
                    html += '        <option value="Lube" selected>Lube</option>'
                }else{
                    html += '        <option value="Lube">Lube</option>'
                }
                if(val.service_items[i]['type'] == "Consumable"){
                    html += '        <option value="Consumable" selected>Consumable</option>'
                }else{
                    html += '        <option value="Consumable">Consumable</option>'
                }
                if(val.service_items[i]['type'] == "Labour"){
                    html += '        <option value="Labour" selected>Labour</option>'
                }else{
                    html += '        <option value="Labour">Labour</option>'
                }
                if(val.service_items[i]['type'] == "Discount"){
                    html += '        <option value="Discount" selected>Discount</option>'
                }else{
                    html += '        <option value="Discount">Discount</option>'
                }
                html += '    </select></div></td>'
                if (val.service_items[i]['quantity'] == "NA"){
                    html += '    <td><input id="part_unit" type="number" class="browser-default"  value="1" aria-required="true"></td>'
                    html += '    <td><input id="part_unit_price" type="number"  value="'+ val.service_items[i]['price']+'"  class="browser-default" aria-required="true"></td>'
                    html += '    <td><input id="total_price" disabled type="number"  value="'+ val.service_items[i]['price']+'" class="browser-default" aria-required="true"></td>'
                    if (val.service_items[i]['type']=="Part"){
                        html += '    <td><input id="total_price_pretax" disabled type="number"  value="'+ (parseFloat(val.service_items[i]['price'])/(VAT_PART_PERCENT/100+1))+'" class="browser-default" aria-required="true"></td>'
                        VAT_PART_BILL_ADMIN = VAT_PART_BILL_ADMIN + (parseFloat(val.service_items[i]['price'])*(VAT_PART_PERCENT/100))
                    }else if(val.service_items[i]['type']=="Labour") {
                        html += '    <td><input id="total_price_pretax" disabled type="number"  value="'+ (parseFloat(val.service_items[i]['price'])/(SERVICE_TAX_PERCENT/100+1))+'" class="browser-default" aria-required="true"></td>'
                        SERVICE_TAX_BILL_ADMIN = SERVICE_TAX_BILL_ADMIN + (parseFloat(val.service_items[i]['price'])*(SERVICE_TAX_PERCENT/100))
                    }else if(val.service_items[i]['type']=="Consumable") {
                        html += '    <td><input id="total_price_pretax" disabled type="number"  value="'+ (parseFloat(val.service_items[i]['price'])/(VAT_CONSUMABLE_PERCENT/100+1))+'" class="browser-default" aria-required="true"></td>'
                        VAT_CONSUMABLE_BILL_ADMIN = VAT_CONSUMABLE_BILL_ADMIN + (parseFloat(val.service_items[i]['price'])*(VAT_CONSUMABLE_PERCENT/100))
                    }else if(val.service_items[i]['type']=="Lube") {
                        html += '    <td><input id="total_price_pretax" disabled type="number"  value="'+ (parseFloat(val.service_items[i]['price'])/(VAT_LUBE_PERCENT/100+1))+'" class="browser-default" aria-required="true"></td>'
                        VAT_LUBE_BILL_ADMIN = VAT_LUBE_BILL_ADMIN + (parseFloat(val.service_items[i]['price'])*(VAT_LUBE_PERCENT/100))
                    }else if(val.service_items[i]['type']=="Discount") {
                        html += '    <td><input id="total_price_pretax" disabled type="number"  value="'+ (parseFloat(val.service_items[i]['price']))+'" class="browser-default" aria-required="true"></td>'
                    }else{
                        html += '    <td><input id="total_price_pretax" disabled type="number"  value="'+ (parseFloat(val.service_items[i]['price']))+'" class="browser-default" aria-required="true"></td>'
                    }
                }else{
                    html += '    <td><input id="part_unit" type="number" class="browser-default"  value="'+ val.service_items[i]['quantity']+'" aria-required="true"></td>'
                    html += '    <td><input id="part_unit_price" type="number"  value="'+ val.service_items[i]['unit_price']+'"  class="browser-default" aria-required="true"></td>'
                    html += '    <td><input id="total_price" disabled type="number"  value="'+ val.service_items[i]['price']+'" class="browser-default" aria-required="true"></td>'
                    if (val.service_items[i]['type']=="Part"){
                        html += '    <td><input id="total_price_pretax" disabled type="number"  value="'+ (parseFloat(val.service_items[i]['price'])/(VAT_PART_PERCENT/100+1))+'" class="browser-default" aria-required="true"></td>'
                        VAT_PART_BILL_ADMIN = VAT_PART_BILL_ADMIN + (parseFloat(val.service_items[i]['price'])*(VAT_PART_PERCENT/100))
                    }else if(val.service_items[i]['type']=="Labour") {
                        html += '    <td><input id="total_price_pretax" disabled type="number"  value="'+ (parseFloat(val.service_items[i]['price'])/(SERVICE_TAX_PERCENT/100+1))+'" class="browser-default" aria-required="true"></td>'
                        SERVICE_TAX_BILL_ADMIN = SERVICE_TAX_BILL_ADMIN + (parseFloat(val.service_items[i]['price'])*(SERVICE_TAX_PERCENT/100))
                    }else if(val.service_items[i]['type']=="Consumable") {
                        html += '    <td><input id="total_price_pretax" disabled type="number"  value="'+ (parseFloat(val.service_items[i]['price'])/(VAT_CONSUMABLE_PERCENT/100+1))+'" class="browser-default" aria-required="true"></td>'
                        VAT_CONSUMABLE_BILL_ADMIN = VAT_CONSUMABLE_BILL_ADMIN + (parseFloat(val.service_items[i]['price'])*(VAT_CONSUMABLE_PERCENT/100))
                    }else if(val.service_items[i]['type']=="Lube") {
                        html += '    <td><input id="total_price_pretax" disabled type="number"  value="'+ (parseFloat(val.service_items[i]['price'])/(VAT_LUBE_PERCENT/100+1))+'" class="browser-default" aria-required="true"></td>'
                        VAT_LUBE_BILL_ADMIN = VAT_LUBE_BILL_ADMIN + (parseFloat(val.service_items[i]['price'])*(VAT_LUBE_PERCENT/100))
                    }else if(val.service_items[i]['type']=="Discount") {
                        html += '    <td><input id="total_price_pretax" disabled type="number"  value="'+ (parseFloat(val.service_items[i]['price']))+'" class="browser-default" aria-required="true"></td>'
                    }else{
                        html += '    <td><input id="total_price_pretax" disabled type="number"  value="'+ (parseFloat(val.service_items[i]['price']))+'" class="browser-default" aria-required="true"></td>'
                    }
                }

                html += '    <td data-field="delete"><i class="x25 delete-bill-item fa fa-trash-o"></i></td>'
                html += '</tr>'
            }

        })
        container.html(html)
        Materialize.updateTextFields()
        $('#bill-detail .booking-id').attr('data-class',data_id)
        var path = window.location.pathname.split('/')
        var new_path = path.slice(0,3).join('/')+'/newbill/' + data_id + '/new'
        history.pushState({},'',new_path)
        setTimeout(function() {             $('#bill-table').click()       }, 1000);

    },
    loadTaxUpdateAgent:function(data){
        $.each(data, function(ix, val) {
            if (AGENT_VAT_NO != ""){
                VAT_CONSUMABLE_PERCENT = parseFloat(val.vat_consumables)
                VAT_LUBE_PERCENT = parseFloat(val.vat_lube)
                VAT_PART_PERCENT = parseFloat(val.vat_parts)

            }else{
                VAT_CONSUMABLE_PERCENT = 0
                VAT_LUBE_PERCENT = 0
                VAT_PART_PERCENT = 0
            }
            if(AGENT_STAX_NO != ""){
                SERVICE_TAX_PERCENT = parseFloat(val.service_tax)
            }else{
                SERVICE_TAX_PERCENT = 0
            }
        });
        setTimeout(function() {             $('#bill-table').click()       }, 1000);

    },
    loadTaxUpdate:function(data){
        $.each(data, function(ix, val) {
            VAT_CONSUMABLE_PERCENT = parseFloat(val.vat_consumables)
            VAT_LUBE_PERCENT = parseFloat(val.vat_lube)
            VAT_PART_PERCENT = parseFloat(val.vat_parts)
            SERVICE_TAX_PERCENT = parseFloat(val.service_tax)
        });
        setTimeout(function() {             $('#bill-table').click()       }, 1000);

    },
    loadbillbookingdatapre:function(data) {
        container = $('#bill-table').find('tbody')
        html = ''

        container.html('')
        html = ''

        $.each(data, function (ix, val) {
            if (!val.bill_genereration_flag) {
                $('#bill-detail #cust_bill_bookingid').val(val.booking_id)
                $('#bill-detail #cust_bill_name').val(val.bill_cust_name)
                $('#bill-detail #cust_bill_number').val(val.bill_cust_number)
                $('#bill-detail #cust_bill_address').val(val.bill_cust_address)
                $('#bill-detail #cust_bill_locality').val(val.bill_cust_locality)
                $('#bill-detail #cust_bill_city').val(val.bill_cust_city)
                $('#bill-detail #cust_bill_vehicle').val(val.bill_vehicle)
                $('#bill-detail #cust_bill_reg').val(val.bill_reg_number)
                $('#bill-detail #cust_bill_reco').val(val.bill_notes)
                if (val.bill_clickgarage){
                    $('#bill_type').find('select').val(val.bill_owner)
                }else{
                    $('#bill_type').find('select').val("Agent Bill")
                }
                data_id = val.id

                VAT_PART_BILL_ADMIN = 0;
                VAT_CONSUMABLE_BILL_ADMIN = 0;
                VAT_LUBE_BILL_ADMIN = 0;
                SERVICE_TAX_BILL_ADMIN = 0;
                STATE_BILL = val.bill_state
                AGENT_STATE = val.bill_state
                $('#agent_bill_name').val(val.bill_agent_name)
                $('#agent_bill_address').val(val.bill_agent_address)
                $('#agent_bill_vat').val(val.bill_agent_vat_no)
                $('#agent_bill_stax').val(val.bill_agent_stax)
                $('#agent_bill_cin').val(val.bill_agent_cin)

                VAT_CONSUMABLE_PERCENT = parseFloat(val.bill_vat_consumable_percent)
                VAT_LUBE_PERCENT = parseFloat(val.bill_vat_lube_percent)
                VAT_PART_PERCENT = parseFloat(val.bill_vat_part_percent)
                SERVICE_TAX_PERCENT = parseFloat(val.bill_service_tax_percent)

                service_items = val.bill_components

                itemlist = service_items.length;
                console.log(itemlist)
                for (i = 0; i < itemlist; i++) {
                    html += '<tr>'
                    html += '    <td><input id="part_name" type="text" class="browser-default" value="' + val.bill_components[i]['name'] + '" aria-required="true"></td>'
                    html += '    <td><div class="input-field sort" id ="part_type"><select  class="browser-default">'
                    if (val.bill_components[i]['type'] == "Part") {
                        html += '        <option value="Part" selected>Part</option>'
                    } else {
                        html += '        <option value="Part">Part</option>'
                    }
                    if (val.bill_components[i]['type'] == "Lube") {
                        html += '        <option value="Lube" selected>Lube</option>'
                    } else {
                        html += '        <option value="Lube">Lube</option>'
                    }
                    if (val.bill_components[i]['type'] == "Consumable") {
                        html += '        <option value="Consumable" selected>Consumable</option>'
                    } else {
                        html += '        <option value="Consumable">Consumable</option>'
                    }
                    if (val.bill_components[i]['type'] == "Labour") {
                        html += '        <option value="Labour" selected>Labour</option>'
                    } else {
                        html += '        <option value="Labour">Labour</option>'
                    }
                    if (val.bill_components[i]['type'] == "Discount") {
                        html += '        <option value="Discount" selected>Discount</option>'
                    } else {
                        html += '        <option value="Discount">Discount</option>'
                    }
                    html += '    </select></div></td>'
                    if (val.bill_components[i]['quantity'] == "NA") {
                        html += '    <td><input id="part_unit" type="number" class="browser-default"  value="1" aria-required="true"></td>'
                        html += '    <td><input id="part_unit_price" type="number"  value="' + val.bill_components[i]['price'] + '"  class="browser-default" aria-required="true"></td>'
                        html += '    <td><input id="total_price" disabled type="number"  value="' + val.bill_components[i]['price'] + '" class="browser-default" aria-required="true"></td>'
                        if (val.bill_components[i]['type'] == "Part") {
                            html += '    <td><input id="total_price_pretax" disabled type="number"  value="' + (parseFloat(val.bill_components[i]['price']) / (VAT_PART_PERCENT / 100 + 1)) + '" class="browser-default" aria-required="true"></td>'
                            VAT_PART_BILL_ADMIN = VAT_PART_BILL_ADMIN + (parseFloat(val.bill_components[i]['price']) * (VAT_PART_PERCENT / 100))
                        } else if (val.bill_components[i]['type'] == "Labour") {
                            html += '    <td><input id="total_price_pretax" disabled type="number"  value="' + (parseFloat(val.bill_components[i]['price']) / (SERVICE_TAX_PERCENT / 100 + 1)) + '" class="browser-default" aria-required="true"></td>'
                            SERVICE_TAX_BILL_ADMIN = SERVICE_TAX_BILL_ADMIN + (parseFloat(val.bill_components[i]['price']) * (SERVICE_TAX_PERCENT / 100))
                        } else if (val.bill_components[i]['type'] == "Consumable") {
                            html += '    <td><input id="total_price_pretax" disabled type="number"  value="' + (parseFloat(val.bill_components[i]['price']) / (VAT_CONSUMABLE_PERCENT / 100 + 1)) + '" class="browser-default" aria-required="true"></td>'
                            VAT_CONSUMABLE_BILL_ADMIN = VAT_CONSUMABLE_BILL_ADMIN + (parseFloat(val.bill_components[i]['price']) * (VAT_CONSUMABLE_PERCENT / 100))
                        } else if (val.bill_components[i]['type'] == "Lube") {
                            html += '    <td><input id="total_price_pretax" disabled type="number"  value="' + (parseFloat(val.bill_components[i]['price']) / (VAT_LUBE_PERCENT / 100 + 1)) + '" class="browser-default" aria-required="true"></td>'
                            VAT_LUBE_BILL_ADMIN = VAT_LUBE_BILL_ADMIN + (parseFloat(val.bill_components[i]['price']) * (VAT_LUBE_PERCENT / 100))
                        } else if (val.bill_components[i]['type'] == "Discount") {
                            html += '    <td><input id="total_price_pretax" disabled type="number"  value="' + (parseFloat(val.bill_components[i]['price'])) + '" class="browser-default" aria-required="true"></td>'
                        } else {
                            html += '    <td><input id="total_price_pretax" disabled type="number"  value="' + (parseFloat(val.bill_components[i]['price'])) + '" class="browser-default" aria-required="true"></td>'
                        }
                    } else {
                        html += '    <td><input id="part_unit" type="number" class="browser-default"  value="' + val.bill_components[i]['quantity'] + '" aria-required="true"></td>'
                        html += '    <td><input id="part_unit_price" type="number"  value="' + val.bill_components[i]['unit_price'] + '"  class="browser-default" aria-required="true"></td>'
                        html += '    <td><input id="total_price" disabled type="number"  value="' + val.bill_components[i]['price'] + '" class="browser-default" aria-required="true"></td>'
                        if (val.bill_components[i]['type'] == "Part") {
                            html += '    <td><input id="total_price_pretax" disabled type="number"  value="' + (parseFloat(val.bill_components[i]['price']) / (VAT_PART_PERCENT / 100 + 1)) + '" class="browser-default" aria-required="true"></td>'
                            VAT_PART_BILL_ADMIN = VAT_PART_BILL_ADMIN + (parseFloat(val.bill_components[i]['price']) * (VAT_PART_PERCENT / 100))
                        }else if (val.bill_components[i]['type'] == "Labour") {
                            html += '    <td><input id="total_price_pretax" disabled type="number"  value="' + (parseFloat(val.bill_components[i]['price']) / (SERVICE_TAX_PERCENT / 100 + 1)) + '" class="browser-default" aria-required="true"></td>'
                            SERVICE_TAX_BILL_ADMIN = SERVICE_TAX_BILL_ADMIN + (parseFloat(val.bill_components[i]['price']) * (SERVICE_TAX_PERCENT / 100))
                        }else if (val.bill_components[i]['type'] == "Consumable") {
                            html += '    <td><input id="total_price_pretax" disabled type="number"  value="' + (parseFloat(val.bill_components[i]['price']) / (VAT_CONSUMABLE_PERCENT / 100 + 1)) + '" class="browser-default" aria-required="true"></td>'
                            VAT_CONSUMABLE_BILL_ADMIN = VAT_CONSUMABLE_BILL_ADMIN + (parseFloat(val.bill_components[i]['price']) * (VAT_CONSUMABLE_PERCENT / 100))
                        }else if (val.bill_components[i]['type'] == "Lube") {
                            html += '    <td><input id="total_price_pretax" disabled type="number"  value="' + (parseFloat(val.bill_components[i]['price']) / (VAT_LUBE_PERCENT / 100 + 1)) + '" class="browser-default" aria-required="true"></td>'
                            VAT_LUBE_BILL_ADMIN = VAT_LUBE_BILL_ADMIN + (parseFloat(val.bill_components[i]['price']) * (VAT_LUBE_PERCENT / 100))
                        }else if (val.bill_components[i]['type'] == "Discount") {
                            html += '    <td><input id="total_price_pretax" disabled type="number"  value="' + (parseFloat(val.bill_components[i]['price'])) + '" class="browser-default" aria-required="true"></td>'
                        }else{
                            html += '    <td><input id="total_price_pretax" disabled type="number"  value="' + (parseFloat(val.bill_components[i]['price'])) + '" class="browser-default" aria-required="true"></td>'
                        }
                    }

                    html += '    <td data-field="delete"><i class="x25 delete-bill-item fa fa-trash-o"></i></td>'
                    html += '</tr>'
                }
            }
        });
        Materialize.updateTextFields()
        $('#bill-detail .booking-id').attr('data-class',data_id)
        var path = window.location.pathname.split('/')
        var new_path = path.slice(0,3).join('/')+'/newbill/' + data_id +'/pre'
        history.pushState({},'',new_path)
        container.html(html)
        setTimeout(function() {             $('#bill-table').click()       }, 1000);


    },
    loadModifyBill:function (data) {
        $.each(data['bills'], function (ix, val) {
            $('#bill-details .bill-modify-card').attr('data-class',val.id)
            $('#bill-details #bill_email').val(val.cust_email)
            $('#bill-details #bill_number').val(val.cust_number)
            // $('#bill-details #bill_payment_mode').find('select').val(val.payment_mode)
            $('#bill-details #bill_due_date').val(val.date_due)
            container3 = $('#bill-detail .payment-history')
            // container3.html('')
            html4 = ''
            payLen = val.payment_bill.length;
            for (i = 0; i < payLen; i++) {
                html4 += '<div class="card payment-card" data-class="' + val.payment_bill[i]['payment_id'] + '">'
                html4 += '<div class="col l8 s8 m8">'
                html4 += '<div class="row">'
                html4 += val.payment_bill[i]['date_collected']
                html4 += '</div>'
                html4 += '<div class="row">'
                html4 += 'Recieved by <b>' + val.payment_bill[i]['collected_by'] + '</b>'
                html4 += '</div>'
                html4 += '<div class="row">'
                html4 += 'Payment Medium :' + val.payment_bill[i]['medium']
                html4 += '</div>'
                html4 += '</div><div class="col l2 s2 m2 centered-text">'
                html4 += 'Rs. ' + val.payment_bill[i]['amount']
                html4 += '</div>'
                html4 += '<div class="col l2 s2 m2 centered-text">'
                html4 += '<i class="fa fa-trash-o x25 delete-transaction"></i>'
                html4 += '</div></div>'
            }
            container3.html(html4)
            if (val.req_user_agent){
                $('#bill-details #payment_collector_bill').val("Workshop")
                document.getElementById("payment_collector_bill").disabled = true;
            }
            $('#bill-detail .payment-summary .total_amount').text(val.total_amount)
            $('#bill-detail .payment-summary .total_paid_amount').text(val.total_recieved_amount)
            $('#bill-detail .payment-summary .total_due_amount').text(parseFloat(val.total_amount) - parseFloat(val.total_recieved_amount))

            // if (val.amount_paid){
            //     document.getElementById("bill_amount_paid").checked = true;
            //     $('#bill-detail .payment-summary .total_paid_amount').text(val.total_amount)
            //     $('#bill-detail .payment-summary .total_due_amount').text("0")
            //
            // }else{
            //     // document.getElementById("bill_amount_paid").checked = false;
            // }
        })
        Materialize.updateTextFields()

    },
    loadUpdateBill:function(data){
        alert('Bill Updated')

        // $('#bill-details .bill-modify-card').hide()
        // $('#cover2').hide()
        Commons.ajaxData('view_all_bills', {data_id : data['billid']}, "get", Global, Global.loadModifyBill,null, '.loading-pane');
    },
    loadCancelBill:function(data){
        alert('Bill Cancelled')
        $('#bill-details .bill-modify-card').hide()
        $('#cover2').hide()
        Commons.ajaxData('view_all_bills', {}, "get", Global, Global.loadbillAll,null, '.loading-pane');
    },
    loadSettle:function(data){
        TOTAL_BUSINESS_VENDOR = 0;
        TOTAL_SETTLED_BUSINESS = 0;
        TOTAL_UNSETTLED_BUSINESS = 0;
        TOTAL_UNSETTLED_PAY_COLLECT = 0;
        TOTAL_UNSETTLED_COMMISSION = 0 ;
        TOTAL_SERVICE_TAX_COMMISSION = 0;
        TOTAL_AMOUNT_FROM_CG_TO_VENDOR = 0;

        container = $('#settlement-detail .pre-data')
        html = ''
        container.html('')
        html +="<table class='card striped'><tr><th colspan='5' class='centered-text'>Job Details</th><th></th><th colspan='7' class='centered-text'>Commission Details</th><th></th><th></th></tr>"
        html +="<tr><th>Job ID</th><th>Date</th><th>Customer Name</th><th>Vehicle</th><th>Bill Amount</th><th>CG Collected</th><th>Part</th><th>Labour</th><th>Lube</th><th>Consumables</th><th>VAS</th><th>Denting</th><th>Total</th><th>Freeze</th><th>Settle</th></tr>"
        j = 0
        $.each(data, function(ix, val) {
            total_collected_cg =0
            total_collected_uc=0
            total_collected_hj =0
            total_collected_credit =0

            html +='<tr data-class="'+val.id +'">'
            html +='<td><a target="_blank" href="/adminpanel/bookings/single/'+val.id+'">'+val.booking_id +'</a></td>'
            html +='<td>'+val.date_booking +'</td>'
            html +='<td>'+val.cust_name +'</td>'
            html +='<td>'+val.cust_make+' '+val.cust_model+' ('+val.cust_regnumber +')</td>'
            html +='<td>'+val.purchase_price_total +'</td>'
            TOTAL_BUSINESS_VENDOR = TOTAL_BUSINESS_VENDOR + parseFloat(val.purchase_price_total)
            pay = val.payment_booking
            paylen = pay.length;
            for (k = 0; k < paylen; k++) {
                if (pay[k]['collected_by'] == "ClickGarage"){
                    total_collected_cg = total_collected_cg + parseFloat(pay[k]['amount'])
                }
                if (pay[k]['collected_by'] == "ClickGarage UC"){
                    total_collected_uc = total_collected_uc + parseFloat(pay[k]['amount'])
                }
                if (pay[k]['collected_by'] == "ClickGarage HJ"){
                    total_collected_hj = total_collected_hj + parseFloat(pay[k]['amount'])
                }
                if (pay[k]['collected_by'] == "ClickGarage Credit"){
                    total_collected_credit = total_collected_credit + parseFloat(pay[k]['amount'])
                }
            }
            html += '<td>'
            if(total_collected_cg >0){
                html += 'CG : Rs.' + total_collected_cg + '</br>'
            }
            if(total_collected_uc >0){
                html += 'CGUC :  Rs.' + total_collected_uc +  '</br>'
            }
            if(total_collected_hj >0){
                html += 'CGHJ:  Rs.' + total_collected_hj + '</br>'
            }
            if(total_collected_credit >0){
                html += 'Credit:  Rs.' + total_collected_credit + '</br>'
            }
            html+='</td>'
            // html +='<td> CG: '+total_collected +'</td>'
            comm = val.commission_items
            sourcelen = comm.length;
            part_html = '<td><input id="part_comm" type="number"  value ="0" class="part-comm validate"></td>'
            labour_html = '<td><input id="labour_comm" type="number"    value ="0" class="labour-comm validate"></td>'
            lube_html = '<td><input id="part_comm" type="number"   value ="0" class="lube-comm validate"></td>'
            consumable_html = '<td><input id="part_comm" type="number"   value ="0" class="consumable-comm validate"></td>'
            vas_html = '<td><input id="part_comm" type="number"   value ="0" class="vas-comm validate"></td>'
            denting_html = '<td><input id="part_comm" type="number"   value ="0" class="denting-comm validate"></td>'

            if (val.frozen_flag || val.req_user_agent) {
                for (i = 0; i < sourcelen; i++) {
                    if (comm[i]['type'] == "Part") {
                        part_html = '<td><input id="part_comm" type="number" disabled value ="' + comm[i]['clickgarage_share'] + '" class="part-comm validate"></td>'
                    }
                    if (comm[i]['type'] == "Labour") {
                        labour_html = '<td><input id="labour_comm" type="number"  disabled  value ="' + comm[i]['clickgarage_share'] + '" class="labour-comm validate"></td>'
                    }
                    if (comm[i]['type'] == "Lube") {
                        lube_html = '<td><input id="part_comm" type="number" disabled  value ="' + comm[i]['clickgarage_share'] + '" class="lube-comm validate"></td>'
                    }
                    if (comm[i]['type'] == "Consumable") {
                        consumable_html = '<td><input id="part_comm" type="number" disabled  value ="' + comm[i]['clickgarage_share'] + '" class="consumable-comm validate"></td>'
                    }
                    if (comm[i]['type'] == "VAS") {
                        vas_html = '<td><input id="part_comm" type="number" disabled  value ="' + comm[i]['clickgarage_share'] + '" class="vas-comm validate"></td>'
                    }
                    if (comm[i]['type'] == "Denting") {
                        denting_html = '<td><input id="part_comm" type="number" disabled  value ="' + comm[i]['clickgarage_share'] + '" class="denting-comm validate"></td>'
                    }
                }
            }else{
                for (i = 0; i < sourcelen; i++) {
                    if (comm[i]['type'] == "Part") {
                        part_html = '<td><input id="part_comm" type="number" value ="' + comm[i]['clickgarage_share'] + '" class="part-comm validate"></td>'
                    }
                    if (comm[i]['type'] == "Labour") {
                        labour_html = '<td><input id="labour_comm" type="number" value ="' + comm[i]['clickgarage_share'] + '" class="labour-comm validate"></td>'
                    }
                    if (comm[i]['type'] == "Lube") {
                        lube_html = '<td><input id="part_comm" type="number" value ="' + comm[i]['clickgarage_share'] + '" class="lube-comm validate"></td>'
                    }
                    if (comm[i]['type'] == "Consumable") {
                        consumable_html = '<td><input id="part_comm" type="number" value ="' + comm[i]['clickgarage_share'] + '" class="consumable-comm validate"></td>'
                    }
                    if (comm[i]['type'] == "VAS") {
                        vas_html = '<td><input id="part_comm" type="number" value ="' + comm[i]['clickgarage_share'] + '" class="vas-comm validate"></td>'
                    }
                    if (comm[i]['type'] == "Denting") {
                        denting_html = '<td><input id="part_comm" type="number" value ="' + comm[i]['clickgarage_share'] + '" class="denting-comm validate"></td>'
                    }
                }
            }
            html += part_html
            html += labour_html
            html += lube_html
            html += consumable_html
            html += vas_html
            html += denting_html
            html +='<td><input id="part_comm" disabled type="number" value ="' + val.total_commission + '"class="total-comm validate"></td>'
            // if (val.frozen_flag){
            //     html +='<td>Manual</td>'
            // }else{
            //     html +='<td>Auto</td>'
            // }
            if (val.req_user_admin){
                if (val.frozen_flag){
                    html +='<td><input type="checkbox" class="filled-in freeze tochange" checked  id="freeze-booking-' + j+'"/><label for="freeze-booking-' +j +'"></label></td>'
                }else{
                    html +='<td><input type="checkbox" class="filled-in freeze tochange"  id="freeze-booking-' + j+'"/><label for="freeze-booking-' +j +'"></label></td>'
                }
                if (val.settlement_flag){
                    html +='<td><input type="checkbox" class="filled-in settle tochange" checked data-class="freeze-booking-'+ j +'"  id="settle-booking-' + j +'"/><label for="settle-booking-' +j +'"></label></td>'
                    TOTAL_SETTLED_BUSINESS = TOTAL_SETTLED_BUSINESS + parseFloat(val.price_total)
                }else{
                    TOTAL_UNSETTLED_BUSINESS = TOTAL_UNSETTLED_BUSINESS + parseFloat(val.price_total)
                    TOTAL_UNSETTLED_PAY_COLLECT = TOTAL_UNSETTLED_PAY_COLLECT + parseFloat(total_collected_cg) + parseFloat(total_collected_uc)+ parseFloat(total_collected_hj)+ parseFloat(total_collected_credit)
                    TOTAL_UNSETTLED_COMMISSION = TOTAL_UNSETTLED_COMMISSION + parseFloat(val.total_commission)
                    html +='<td><input type="checkbox" class="filled-in settle tochange" data-class="freeze-booking-'+ j +'"    id="settle-booking-' + j+'"/><label for="settle-booking-' +j +'"></label></td>'
                }

            }else{
                if (val.frozen_flag){
                    html +='<td><input type="checkbox" class="filled-in freeze tochange" disabled checked  id="freeze-booking-' + j+'"/><label for="freeze-booking-' +j +'"></label></td>'
                }else{
                    html +='<td><input type="checkbox" class="filled-in freeze tochange" disabled   id="freeze-booking-' + j+'"/><label for="freeze-booking-' +j +'"></label></td>'
                }
                if (val.settlement_flag){
                    html +='<td><input type="checkbox" class="filled-in settle tochange" checked  disabled data-class="freeze-booking-'+ j +'"  id="settle-booking-' + j +'"/><label for="settle-booking-' +j +'"></label></td>'
                    TOTAL_SETTLED_BUSINESS = TOTAL_SETTLED_BUSINESS + parseFloat(val.price_total)
                }else{
                    TOTAL_UNSETTLED_BUSINESS = TOTAL_UNSETTLED_BUSINESS + parseFloat(val.price_total)
                    TOTAL_UNSETTLED_PAY_COLLECT = TOTAL_UNSETTLED_PAY_COLLECT + parseFloat(total_collected_cg) + parseFloat(total_collected_uc)+ parseFloat(total_collected_hj)+ parseFloat(total_collected_credit)
                    TOTAL_UNSETTLED_COMMISSION = TOTAL_UNSETTLED_COMMISSION + parseFloat(val.total_commission)
                    html +='<td><input type="checkbox" class="filled-in settle tochange"  disabled data-class="freeze-booking-'+ j +'"    id="settle-booking-' + j+'"/><label for="settle-booking-' +j +'"></label></td>'
                }

            }

            html +='</tr>'
            j = j + 1

        });
        html+="</table>"
        TOTAL_SERVICE_TAX_COMMISSION = TOTAL_UNSETTLED_COMMISSION * 0.15;
        TOTAL_AMOUNT_FROM_CG_TO_VENDOR = TOTAL_UNSETTLED_PAY_COLLECT - TOTAL_SERVICE_TAX_COMMISSION - TOTAL_UNSETTLED_COMMISSION
        TOTAL_RECIEVED_PAYMENT_VENDOR = TOTAL_UNSETTLED_BUSINESS - TOTAL_UNSETTLED_PAY_COLLECT

        $('#settlement-detail #total-business-vendor').text(TOTAL_BUSINESS_VENDOR)
        $('#settlement-detail #total-settled-business-vendor').text(TOTAL_SETTLED_BUSINESS)
        $('#settlement-detail #total-unsettled-business-vendor').text(TOTAL_UNSETTLED_BUSINESS)
        $('#settlement-detail #total-recieved-payment-cg').text(TOTAL_UNSETTLED_PAY_COLLECT)
        $('#settlement-detail #total-recieved-payment-vendor').text(TOTAL_RECIEVED_PAYMENT_VENDOR)
        $('#settlement-detail #total-commission-cg').text(TOTAL_UNSETTLED_COMMISSION)
        $('#settlement-detail #total-tax-commission').text(TOTAL_SERVICE_TAX_COMMISSION)
        $('#settlement-detail #total-payment-cg-vendor').text(Math.ceil(TOTAL_AMOUNT_FROM_CG_TO_VENDOR))

        container.html(html)
    },
    loadSMSSent:function(data){
        console.log('sms')
        alert(data['message']);
    },
    loadCustomershareestimate:function(data){
        bid =$('#customer-detail #booking_id').attr('booking_data_id')
        Commons.ajaxData('send_booking_bill_estimate', {data_id:bid,bill_estimate:"Estimate"}, "get", Global, Global.loadestimateshare,null, '.loading-pane');
    },
    loadestimateshare:function(data){
        bid =$('#customer-detail #booking_id').attr('booking_data_id')
        Global.openbooking_new(bid)
        alert("Estimate updated and shared!")
    },
    loadBillSent:function(data){
        alert('Bill Sent')
    },
    loadSendBill:function(data){
        alert('Bill Sent')
    },
    loadSearchUser:function(data){
        var container = $('input.autocomplete');
        var users = {};
        container.autocomplete({
            data : users
        })
        // var locations = {};

        $.each(data, function(ix, val){
            users[val.phone] = null
        });
        // console.log(locations)
        container.autocomplete({
            data : users
        })
        Materialize.updateTextFields();

    },
    loadUserBilldata:function(data){

        $.each(data, function(ix, val){
            $('#cust_bill_name').val(val.first_name + ' '+ val.last_name)
            $('#cust_bill_address').val(val.user_address)
            $('#cust_bill_locality').val(val.user_locality)
            $('#cust_bill_city').val(val.user_city)
        });
        Materialize.updateTextFields();
    },
    loadUserLeaddata:function(data){

        $.each(data, function(ix, val){
            $('#name').val(val.first_name + ' '+ val.last_name)
            $('#address').val(val.user_address)
            $('#locality').val(val.user_locality)
            $('#city').val(val.user_city)
            $('#email').val(val.email_primary)

        });
        Materialize.updateTextFields();
    },
    loadCallCustomer:function(data){
        alert('Call Generated')
    },
    loadBrandsBooking:function (data) {
        container = $('#brand-cust');
        container.html('');
        html = ''
        $.each(data, function(ix, val){
            if (val.make ==VEHICLE_MAKE){
                html += '<option selected value="' +val.make +'">'+ val.make +'</option>'
            }else{
                html += '<option value="' +val.make +'">'+ val.make +'</option>'
            }
        });
        container.html(html);

    },
    loadModelsBooking:function(data){
        container = $('#make-cust');
        container.html('');
        html = ''
        $.each(data, function(ix, val){
            if (val.full_veh_name == (VEHICLE_MODEL+' ('+VEHICLE_FUEL+')')){
                html += '<option selected value="' +val.full_veh_name +'">'+ val.full_veh_name +'</option>'
            }else{
                html += '<option value="' +val.full_veh_name +'">'+ val.full_veh_name +'</option>'
            }
        });
        container.html(html);
    }

};


