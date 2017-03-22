document.onreadystatechange = function () {
    Global.init();
    Login.init();
};

// materialize css
$(document).ready(function() {
    $('select').material_select();
    var a = $(window).height();
    // var b = $('.home-form').height();
    // console.log(a)
    alfa = parseInt('80px')
    // console.log(a-alfa)


    var viewportWidth = $(window).width();
    if (viewportWidth <= 600) {
        // $("#bookings .pre-data").height(a/1.5 - alfa)

    }else if (viewportWidth <= 992){
        // $("#bookings .pre-data").height(a/1.5 - alfa)
    }else{
        $("#bookings .pre-data").height(a - alfa)
    }


});

$('.datepicker').pickadate({
    format: 'dd-mm-yyyy',
    closeOnSelect: true,
});


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

var CART_IDS_NEW_BOOKING = [];

var JOBS_SUMMARY_NEW_BOOKING = [];
var CURRENT_CART_NEW_BOOKING = [];
var TOTAL_PRICE_NEW_BOOKING = 0;
var ALL_JOBS_NEW_BOOKING = "";
var TOTAL_ITEMS_NEW_BOOKING = 0 ;
var TOTAL_LABOUR_NEW_BOOKING= 0;
var TOTAL_PARTS_NEW_BOOKING = 0;
var TOTAL_DISCOUNT_NEW_BOOKING = 0;
var COUP_DISCOUNT_NEW_BOOKING = 0 ;
var TOTAL_JOBS_NEW_BOOKING = 0;
// var TOTAL_ITEM_ESTIMATE = 0;

// Sort Filter
var LEAD_TYPE = "";
var DATE_TYPE = "";
var REG_NUMBER = "";
var CUST_NAME = "";
var STATUS_TYPE = "";
var SORT_TYPE = "";
var BOOKING_ID = "";
var VEH_TYPE = "";

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
    'Walk in',
    'Partner - Mr. Right',
    'Web Search',
    'Unknown',
    'Society camps',
    'Check up camps',
    'Sign up lead',
    'Facebook Ad',
    'Mahindra Authorized']
// DATE_TYPE =

var Global = {
    init:function() {
        var _this = this;
        _this.events();
        _this.events();
        // Commons.eventHandlers();
    },
    events:function() {

        var _this = this;
        if (_this.eventsAdded)
            return false;
        _this.eventsAdded = true;
        console.log('adding hanlder');

// =====================================================================================
//     Url State Management
// =====================================================================================

$(document).ready(function() {
     url_list = window.location.pathname.split('/')
     var sub_page_1      = $('#admin-page-state').attr('sub-page-1')
     var sub_page_2      = $('#admin-page-state').attr('sub-page-2')
     var data_id         = $('#admin-page-state').attr('data-id')
    console.log(sub_page_1)
    console.log(sub_page_2)
    console.log(data_id)


    if (sub_page_1 == "bookings" || typeof(sub_page_1)=="undefined" || sub_page_1 == null || sub_page_1 =="" ){
        $('.navbar .booking-button').click()
        if (sub_page_2 == "single"){
            openbooking(data_id)
        }else{

        }

    }else if(sub_page_1 == "leads"){
        $('.navbar .lead-button').click()
        if (sub_page_2 == "single"){
            try {
                openbooking(data_id)
            }
            catch(err){
            }
        }else{

        }
    }else if(sub_page_1 == "subscriptions"){
        $('.navbar .subscription-button').click()
        if (sub_page_2 == "single"){
                $('#subscription-detail .single-subscription').click()
            if (data_id != ""){
                opensubscription(data_id)
            }
        }else{


        }

    }else if(sub_page_1 == "users"){
        $('.navbar .users-button').click()
        if (sub_page_2 == "single"){
                $('#user-detail .single-user').click()
            if (data_id != ""){
                openuser(data_id)
            }
        }else{

        }
    }else if (sub_page_1 == "coupons"){
        $('.navbar .coupon-button').click()
        if (sub_page_2 == "single"){
                $('#coupon-detail  .single-coupon').click()
            if (data_id != ""){
                opencoupon(data_id)
            }
        }else{

        }

    }else if (sub_page_1 == "newbooking"){
        $('.navbar .new-booking-button').click()
    }else if (sub_page_1 == "newlead"){
        $('.navbar .new-lead-button').click()
    }else if (sub_page_1 == "campaign") {
        $('.navbar .campaign-button').click()
    }
});




// =====================================================================================
//     Booking/ Lead Management
// =====================================================================================

        // Open Bookings
        $('.navbar .booking-button').click(function(event,data){
             DATE_TYPE = "";
             REG_NUMBER = "";
             CUST_NAME = "";
             STATUS_TYPE = "";
             SORT_TYPE = "";
             BOOKING_ID = "";
             VEH_TYPE = "";


            $('#booking-details').hide();
            $('#bookings').show()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').hide()
            $('#subscription-details').hide()
                          $('#campaign-details').hide()

            // $('#bookings .delivery-list').show()
            $('#bookings .booking-filter').show();
            $('#customer-detail .bill-row').show();


            LEAD_TYPE = "Booking"
            if (DATE_TYPE != ""){
                // $('#bookings #bookings-list').show().removeClass('l12').addClass('l6')
                // $('#bookings #bookings-list').show().removeClass('l12').addClass('l6')
                // $('#bookings #delivery-list').show()
            }
            $('#bookings #bookings-list .header-id-bar.bookings').text('Bookings')
            $('#bookings #bookings-list .booking-bar-2 .agent').text('Engineer Details')

            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                veh_type:VEH_TYPE}, "get", _this, _this.loadBookings,null, '.loading-pane');


            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/bookings/all'
            history.pushState({},'',new_path)

        });
        // Open Lead
        $('.navbar .lead-button').click(function(event,data){
             DATE_TYPE = "";
             REG_NUMBER = "";
             CUST_NAME = "";
             STATUS_TYPE = "";
             SORT_TYPE = "";
             BOOKING_ID = "";
             VEH_TYPE = "";
            $('#booking-details').hide();
            $('#bookings').show()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').hide()
            $('#subscription-details').hide()
            LEAD_TYPE = "Lead"
            $('#bookings #bookings-list .header-id-bar.bookings').text('Leads')
            // $('#bookings #bookings-list').show().removeClass('l6').addClass('l12')
            $('#bookings #bookings-list').show()
            $('#bookings #delivery-list').hide()
            $('#bookings .booking-filter .date-box').removeClass('selected');
            $('#bookings .booking-filter .bookings-filter').addClass('selected');
            $('#bookings #bookings-list .booking-bar-2 .agent').text('')
            $('#bookings .booking-filter').hide();
            $('#customer-detail .bill-row').hide();

            // type = "Lead"
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                veh_type:VEH_TYPE}, "get", _this, _this.loadBookings,null, '.loading-pane');

            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/leads/all'
            history.pushState({},'',new_path)
        });

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



        DATE_TYPE = _this.date_format( new Date());

        //Filtering/ Date Selection
        $('#bookings .date-filter .date-box').click(function(){
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

            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                veh_type:VEH_TYPE}, "get", _this, _this.loadBookings,null, '.loading-pane');

            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                del_date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                veh_type:VEH_TYPE}, "get", _this, _this.loadDelivery,null, '.loading-pane');

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
            date_selected = $('#bookings #filterdate').val();
            status_selected = $('#bookings  #Status').find('select').val();
            veh_type_selected = $('#bookings  #Vehicle_type').find('select').val();;
            name_selected =  $('#bookings  #custname').val();
            id_selected =  $('#bookings  #booking_id').val();
            reg_selected =  $('#bookings  #regnumber').val();
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
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                veh_type:VEH_TYPE}, "get", _this, _this.loadBookings,null, '.loading-pane');

            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                del_date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                veh_type:VEH_TYPE}, "get", _this, _this.loadDelivery,null, '.loading-pane');

            $('#bookings .filter-option').hide();
            $('#bookings .filter-sort').addClass('closed').removeClass('open');

        })

        $('#bookings  .btn-remove-filter').click(function(){
            $('#bookings #filterdate').val('');
            $('#bookings  #Status').find('select').val('');
            $('#bookings  #Vehicle_type').find('select').val('');
            $('#bookings  #custname').val('');
            $('#bookings  #booking_id').val('');
            $('#bookings  #regnumber').val('');
            DATE_TYPE = _this.date_format( new Date());
            REG_NUMBER = "";
            CUST_NAME = "";
            STATUS_TYPE = "";
            SORT_TYPE = "";
            BOOKING_ID = "";
            VEH_TYPE = "";
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                veh_type:VEH_TYPE}, "get", _this, _this.loadBookings,null, '.loading-pane');
            $('#bookings .date-filter .date-box').removeClass('selected');
            $('#bookings .date-filter .date-box.today').addClass('selected');
        })

        $('#bookings #sort').change(function(){
            SORT_TYPE = $('#bookings  #sort').find('select').val();
            console.log(SORT_TYPE)
            Commons.ajaxData('view_all_bookings', {b_id:BOOKING_ID,
                lead_booking:LEAD_TYPE,
                sort:SORT_TYPE,
                date:DATE_TYPE,
                status:STATUS_TYPE,
                name:CUST_NAME,
                reg:REG_NUMBER,
                veh_type:VEH_TYPE}, "get", _this, _this.loadBookings,null, '.loading-pane');

        })

        // Open Individual Booking

          var openbooking = function(data_id){
            $('#bookings').hide()
            $('#booking-details').show()
            $('#customer-detail .booking-data').show();
            $('#customer-detail .booking-job-data').hide();
            $('#customer-detail .service-detail').removeClass('selected')
            $('#customer-detail .cust-detail').addClass('selected')
            Commons.ajaxData('view_all_bookings', {data_id:data_id}, "get", _this, _this.loadBookingData,null, '.loading-pane');
            Commons.ajaxData('fetch_all_users', {type:"agent"}, "get", _this, _this.loadAgentdata,null, '.loading-pane');


            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/single/' + data_id
            history.pushState({},'',new_path)


        }


        $('#bookings .pre-data').on('click','.booking',function(event,data){
            bid =$(this).attr('data-class')
            openbooking(bid)
        });
        // Switch between estimate and details in a booking
        $('#customer-detail .cust-detail').click(function(){
            $('#customer-detail .booking-data').show();
            $('#customer-detail .booking-job-data').hide();
            $('#customer-detail .service-detail').removeClass('selected')
            $('#customer-detail .cust-detail:hover').addClass('selected')
        });
        $('#customer-detail .service-detail').click(function(){
            $('#customer-detail .booking-data').hide();
            $('#customer-detail .booking-job-data').show();
            $('#customer-detail .cust-detail').removeClass('selected')
            $('#customer-detail .service-detail:hover').addClass('selected')
        });

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

            return
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
        $('#customer-detail .btn-update-cust').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            email_n = $('#customer-detail #email').val();
            reg_n = $('#customer-detail #cust_regnumber').val();
            date_n = $('#customer-detail #date').val();
            time_n = $('#customer-detail #time_booking').val();
            comment_n = $('#customer-detail #comments').val();
            notes_n = $('#customer-detail #notes').val();
            amount_paid_n = $('#customer-detail #cust_amount_paid').val()
            cust_name = $('#customer-detail #cust_name').val()
            cust_number = $('#customer-detail #cust_number').val()
            cust_address = $('#customer-detail #cust_address').val()
            cust_locality = $('#customer-detail #cust_locality').val()
            cust_city = $('#customer-detail #cust_city').val()
            source = $('#customer-detail #source').val()
            date_del = $('#customer-detail #date_delivery').val()

            ALL_JOBS_ADMIN = comment_n
            Commons.ajaxData('update_booking', {b_id: bid,
                email: email_n,
                reg_number: reg_n,
                comment: comment_n,
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
            }, "post", _this, _this.loadCustomerupdate,null, '.loading-pane');
        });

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
                window.location.pathname.split('/')[0] + '/bills/new/' + b_data_id
            );
        });

        $('#customer-detail .btn-view-bill').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            b_data_id = $('#customer-detail #booking_id').attr('booking_data_id');
            window.open(
                window.location.pathname.split('/')[0] + '/bills/old/' + b_data_id + '#print'
            );
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
                status_id: status_n,
            }, "post", _this, _this.loadCustomerStatus,null, '.loading-pane');
        });

        $('#customer-detail .agent-button-row .btn-update-status').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            status_n = $(this).attr('status_next')
            Commons.ajaxData('change_status', {b_id: bid,
                status_id: status_n,
            }, "post", _this, _this.loadCustomerStatus,null, '.loading-pane');
        });

        $('#customer-detail .b2b-button-row .btn-update-status').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            status_n = $(this).attr('status_next')
            Commons.ajaxData('change_status', {b_id: bid,
                status_id: status_n,
            }, "post", _this, _this.loadCustomerStatus,null, '.loading-pane');
        });

        $('#customer-detail .staff-button-row .lead-row .btn-update-status').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            status_n = $(this).attr('status_next')
            Commons.ajaxData('change_status', {b_id: bid,
                status_id: status_n,
            }, "post", _this, _this.loadCustomerStatus,null, '.loading-pane');
        });

// =====================================================================================
//     Subscription Management
// =====================================================================================


     // -- Load Subscription
        $('.navbar .subscription-button').click(function(){
            // console.log('check')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#subscription-details').show()
            $('#new-booking').hide()
                          $('#campaign-details').hide()

            $('#subscription-detail .subscription-list').show()
            $('#subscription-detail .subscription-add-mod').hide()
            Commons.ajaxData('view_all_subscription', {}, "get", _this, _this.loadSubscriptionAll,null, '.loading-pane');

            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/subscriptions/all'
            history.pushState({},'',new_path)
        });
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
        }

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
//    Coupon Management
// =====================================================================================
        // -- Load Coupon
        $('.navbar .coupon-button').click(function(){
            // console.log('check')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#coupon-details').show()
            $('#new-booking').hide()
            $('#subscription-details').hide()
                          $('#campaign-details').hide()

            $('#coupon-detail  .all-coupon').click()
            Commons.ajaxData('view_all_coupons', {}, "get", _this, _this.loadCouponAll,null, '.loading-pane');
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/coupons/all'
            history.pushState({},'',new_path)
        });
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
//    SMS Management
// =====================================================================================

          $('.navbar .campaign-button').click(function(){

            // console.log('check')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').hide()
            $('#subscription-details').hide()
            $('#campaign-details').show()

            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/campaign/'
            history.pushState({},'',new_path)

        });
         $('#campaign-details .send-sms-campaign').click(function() {
            message =     $('#sms_campaign_message').val()
             Commons.ajaxData('send_sms_campaign',  {message: message}, "get", _this, _this.loadCampaign,null, '.loading-pane');

             // Commons.ajaxData('send_sms_campaign', {message: message}, "get", _this, _this.loadModels);

             });
// =====================================================================================
//    New Booking
// =====================================================================================


        $('.navbar .new-booking-button').click(function(){

            // console.log('check')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').show()
            $('#subscription-details').hide()
              $('#campaign-details').hide()
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
            $('#new-booking  .booking-lead').text("Booking")
            $('#new-booking  .booking-lead-2').text("Booking")

            $('#new-booking  .send-reminder').show()
            document.getElementById("send_details").checked = true;
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/newbooking/'
            history.pushState({},'',new_path)

        });

        $('.navbar .new-lead-button').click(function(){
            // console.log('check')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').show()
            $('#subscription-details').hide()
          $('#campaign-details').hide()

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
            $('#new-booking  .booking-lead').text("Lead")
            $('#new-booking  .booking-lead-2').text("Lead Follow Up")

            // Commons.ajaxData('view_all_coupons', {}, "get", _this, _this.loadCouponAll,null, '.loading-pane');
            $('#new-booking  .send-reminder').hide()
            document.getElementById("send_details").checked = false;
            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/newlead/'
            history.pushState({},'',new_path)

        });

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

        // -- Locality Search
        $('#locality').on('keyup',function(e,event,data){
            var code = (e.keyCode || e.which);
            // do nothing if it's an arrow key
            if(code == 37 || code == 38 || code == 39 || code == 40) {
                return;
            }
            var locality = $(this).val();
            Commons.ajaxData('get_location', {location_id: locality}, "get", _this, _this.loadLocation);
            $('#locality').removeClass('invalid')
        });

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
            $('#select-model').hide()
        }
        $('#new-booking .vehicle-select .veh-type-select').click(callbrands);
        $('.navbar .new-booking-button').click(callbrands);
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
            if(vehicle=='Car'){
                html +=  '<option value="Denting">Denting/ Painting</option>'
                html +=  '<option value="Cleaning">Car Care</option>'
            }
            html +=  '</select>'
            container.html(html)
        }
        $('#new-booking .vehicle-select .veh-type-select').click(call_category);
        $('.navbar .new-booking-button').click(call_category);
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
        });
        // -- DELETE ITEM
        $('#new-booking .service-select').on('click',' .service-row .delete-item',function(){
            console.log('check')
            container =  $(this).closest('.service-row')
            container.remove()
            calculate_items()
        });

        $('#new-booking .btn-send-booking').click(function () {
            car_box =  document.getElementById('Carnew');
            bike_box =  document.getElementById('Bikenew');
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
            // var otp = $('#otp').val();
            var comment = $('#comment').val();
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
            if ($('#new-booking .booking-lead').text() =="Booking" ){
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
            }
            if(name==""){
                $('#name').addClass("invalid");
                error = 1;
            }
            if(address==""){
                $('#address').addClass("invalid");
                error = 1;
            }
            if(locality==""){
                $('#locality').addClass("invalid");
                error = 1;
            }if(city==""){
                $('#city').addClass("invalid");
                error = 1;
            }
            if(number <= 100000000 || number >= 9999999999){
                $('#telephone').addClass("invalid");
                error = 1;
            }
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                $('#email').addClass("valid");
                // error = 1;
            }else{
                $('#email').addClass("invalid");
                error =1;
            }if(reg_num==""){
                $('#reg_number').addClass("invalid");
                error = 1;
            }
            if(date==""){
                $('#date').addClass("invalid");
                error = 1;
            }
            if(time=="" || time==null){
                console.log(time)
                error = 1;
                $('#new-booking #time-slot').find('select').addClass('invalid-select-box')
                // $('#choose-time-slot').text('Choose Time Slot');
            }
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
                    ,comment    : ALL_JOBS_NEW_BOOKING + ', '+ comment
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
//    User Management
// =====================================================================================

        // --Get all user
        $('.navbar .users-button').click(function(event,data){
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').show()
            $('#coupon-details').hide()
            $('#new-booking').hide()
            $('#subscription-details').hide()
           $('#campaign-details').hide()

            $('#user-detail .all-user').click()

            Commons.ajaxData('fetch_all_users', {}, "get", _this, _this.loadUsers,null, '.loading-pane');

            var path = window.location.pathname.split('/')
            var new_path = path.slice(0,2).join('/')+'/users/'
            history.pushState({},'',new_path)
        });
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
                if(agent_vat==""){
                    $('#user-detail #agent_vat').addClass("invalid");
                    error =1 ;
                }
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
                    {user_id:user_id, user_num: user_number, user_name : user_name, user_email: user_email, user_add: user_address, user_loc: user_locality, user_city:user_city,user_state :user_state, agent_vat:agent_vat, agent_cin:agent_cin, agent_stax:agent_stax,b2b_st:b2b, admin_st:admin, staff_st:staff,agent_st:agent,sms_credits:sms_credits}
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

             var path = window.location.pathname.split('/')
            var new_path = path.slice(0,3).join('/')+'/single/'
            history.pushState({},'',new_path)
        });

    },
    loadBookings:function(data){
        var container = $('#bookings-list .booking-list .pre-data');
        container.html('');
        html = ''

        $.each(data, function(ix, val) {
            html += '        <div class="row card cardhover no-border-radius booking" data-class="' + val.id + '">'
            html += '            <div class="row">'
            html += '                <div class="col l1 s2 m2 booking-id-bar">'
            html += '                    <b>#<span class="id">' + val.booking_id + '</span></b>'
            html += '                </div>'
            html += '                <div class="col l5 s7 m7">'
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
            html += '                        <b><span class="custvehicletype">' + val.cust_vehicle_type + '</span>&nbsp;:&nbsp;</b><span class="vehiclename">' + val.cust_make + ' ' + val.cust_model + ' ' + val.cust_fuel_varient + '</span>'
            html += '                    </div>'
            html += '                    <div class="col l12 hide-on-med-and-down">'
            html += '                        <b>Date & Time : </b><span class="time">' + val.time_booking + '</span> on <span class="date">' + val.date_booking + '</span>'
            html += '                    </div>'
            html += '                    <div class="col l12 hide-on-large-only">'
            html += '                        <b>Date : </b><span class="date">' + val.date_booking + '</span>'
            html += '                    </div>'
            html += '                    <div class="col l12 s12 m12 hide-on-large-only">'
            html += '                        <b>Time : </b><span class="time">' + val.time_booking + '</span>'
            html += '                    </div>'
            html += '                    <div class="col l12 s12 m12">'
            html += '                        <b>Address : </b><span class="address">' + val.cust_address + ' ' + val.cust_locality + ' ' + val.cust_city + '</span>'
            html += '                    </div>'
            html += '                </div>'
            html += '                <div class="col l3 s3 m3 centered-text hide-on-med-and-down">'
            if (LEAD_TYPE == "Booking"){
                html += '                    <b><span class="agent-details">'+val.agent_details+'</span></b>'
            }
            html += '                </div>'
            html += '                <div class="col l3 s3 m3 status-bar">'
            html += '                    <div class="'+val.status.replace(" ","-")+' status">' + val.status + '</div>'
            html += '                </div>'
            html += '            </div>'
            html += '        </div>'
        })
        container.html(html);
        // container.find('select').material_select();
    },
    loadDelivery:function(data){
        var container = $('#delivery-list .delivery-list .pre-data');
        container.html('');
        html = ''

        $.each(data, function(ix, val) {
            html += '        <div class="row card cardhover no-border-radius booking" data-class="' + val.id + '">'
            html += '            <div class="row">'
            html += '                <div class="col l1 s2 m2 booking-id-bar">'
            html += '                    <b>#<span class="id">' + val.booking_id + '</span></b>'
            html += '                </div>'
            html += '                <div class="col l5 s7 m7">'
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
            html += '                        <b><span class="custvehicletype">' + val.cust_vehicle_type + '</span>&nbsp;:&nbsp;</b><span class="vehiclename">' + val.cust_make + ' ' + val.cust_model + ' ' + val.cust_fuel_varient + '</span>'
            html += '                    </div>'
            html += '                    <div class="col l12 hide-on-med-and-down">'
            html += '                        <b>Date & Time : </b><span class="time">' + val.time_booking + '</span> on <span class="date">' + val.date_booking + '</span>'
            html += '                    </div>'
            html += '                    <div class="col l12 hide-on-large-only">'
            html += '                        <b>Date : </b><span class="date">' + val.date_booking + '</span>'
            html += '                    </div>'
            html += '                    <div class="col l12 s12 m12 hide-on-large-only">'
            html += '                        <b>Time : </b><span class="time">' + val.time_booking + '</span>'
            html += '                    </div>'
            html += '                    <div class="col l12 s12 m12">'
            html += '                        <b>Address : </b><span class="address">' + val.cust_address + ' ' + val.cust_locality + ' ' + val.cust_city + '</span>'
            html += '                    </div>'
            html += '                </div>'
            html += '                <div class="col l3 s3 m3 centered-text hide-on-med-and-down">'
            html += '                    <b><span class="agent-details">'+val.agent_details+'</span></b>'
            html += '                </div>'
            html += '                <div class="col l3 s3 m3 status-bar">'
            html += '                    <div class="'+val.status.replace(" ","-")+' status">' + val.status + '</div>'
            html += '                </div>'
            html += '            </div>'
            html += '        </div>'
        })
        container.html(html);
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
            html2 += '									<table class="striped">';
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
        $.each(data, function(ix, val) {
            // <--- old booking data --->
            // html+= '<div id="booking_id" class="col s12 m12 l12 book_id" booking_id="'+val.booking_id+'"><h4><b>#'+val.booking_id+'</h4></b></div>'
            // html+= '<div class="row"><div class="col s4 m4 l2 header">Name     </div><div class="col s8 m8 l4 detail">: '+val.cust_name +'</div>'
            // html+= '<div class="col s4 m4 l2 header">Number   </div><div class="col s8 m8 l4 detail">: '+val.cust_number+'</div>'
            // html+= '<div class="col s4 m4 l2 header">Address      </div><div class="col s8 m8 l4 detail">: '+val.cust_address+', '+val.cust_locality+', '+val.cust_city+'</div>'
            // html+= '<div class="col s4 m4 l2 header">'+val.cust_vehicle_type+'</div><div class="col s8 m8 l4 detail">: '+val.cust_make +' '+val.cust_model+' '+val.cust_fuel_varient+'</div>'
            // html+= '<div class="col s4 m4 l2 header">Coupon</div><div class="col s8 m8 l4 detail">: '+val.coupon+'</div>'
            // html+= '<div class="col s4 m4 l2 header">Amount Paid</div><div class="col s8 m8 l4 detail">: Rs. '+val.amount_paid+'</div>'
            // html+= '<div class="col s4 m4 l2 header">Source</div><div class="col s8 m8 l4 detail">: '+val.source+'</div>'
            // html+= '<div class="col s4 m4 l2 header">Status</div><div class="col s8 m8 l4 detail">: '+val.status+'</div>'
            // html+= '<div class="col s4 m4 l2 header">Agent</div><div class="col s8 m8 l4 detail">: '+ val.agent_details+'</div></div>'
            // html+= '<div class="row"><div class="col s4 m4 l2 header header-var">Email</div><div class="col s8 m8 l10"><input id="email" type="text" class="" value ="'+val.cust_email+'" aria-required="true"></div>'
            // html+= '<div class="col s4 m4 l2 header header-var">#Veh Reg</div><div class="col s8 m8 l10"><input id="cust_regnumber" type="text" style="text-transform:uppercase" class="" value ="'+val.cust_regnumber+'" aria-required="true"></div>'
            // if (val.booking_flag){
            //     html+= '<div class="row"><div class="col s4 m4 l2 header header-var">Booking Date</div><div class="col s8 m8 l10 input-field"><input id="date" type="date" value ="'+ val.date_booking +'" class="datepicker"><label for="date"></label></div>'
            // }else{
            //     html+= '<div class="row"><div class="col s4 m4 l2 header header-var">Follow Up/ Booking Date</div><div class="col s8 m8 l10 input-field"><input id="date" type="date" value ="'+ val.date_booking +'" class="datepicker"><label for="date"></label></div>'
            // }
            // html+= '<div class="col s4 m4 l2 header header-var">Time</div><div class="col s8 m8 l10"><input id="time_booking" type="text" class="" value="'+ val.time_booking +'" aria-required="true"></div></div>'
            // html+= '</div><div class="row"><div class="col s4 m4 l2 header header-var">Requests </div><div class="col s8 m8 l10 input-field"><textarea id="comments" class="materialize-textarea" >'+ val.comments +'</textarea></div></div>'
            // <---- Old booking data--->>
            // <---- New Booking Data --->>
            html += '<div class="row">'
            html += '<div id="booking_id" class="col s12 m12 l12 book_id" booking_data_id="'+val.id +'" booking_id="'+val.booking_id+'"><h4><b>#'+val.booking_id+'</h4></b></div>'
            html += '</div>'
            html += '<div class="row">'
            html += '<div class="col s12 m12 l12">'
            html += '<div class="status-2 '+val.status.replace(" ","-") +'">'+val.status +'</div>'
            html += '</div>'
            html += '</div>'

            html += '<div class="row card">'
            if (val.req_user_staff || val.req_user_admin) {
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
                html += '<div class="col s12 m12 l6">'
                if (val.booking_user_number == "") {
                    html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="cust_number" type="text"   value ="' + val.cust_number + '"class="validate"><label for="cust_number">Number</label></div>'
                } else {
                    html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="cust_number" type="text"   value ="' + val.booking_user_number + '"class="validate"><label for="cust_number">Number</label></div>'
                }
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">my_location</i><input id="cust_address" type="text"   value ="' + val.cust_address + '"class="validate"><label for="cust_address">Address</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">location_on</i><input id="cust_locality" type="text"   value ="' +  val.cust_locality + '"class="validate"><label for="cust_address">Locality</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">business</i><input id="cust_city" type="text"   value ="'  + val.cust_city + '"class="validate"><label for="cust_address">City</label></div>'
                html += '</div>'

                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_vehicle" type="text"  disabled   value ="' + val.cust_make + ' ' + val.cust_model + ' ' + val.cust_fuel_varient + '"class="validate"><label for="cust_vehicle">' + val.cust_vehicle_type + '</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_coupon" type="text"  disabled   value ="' + val.coupon + '"class="validate"><label for="cust_coupon">Coupon</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_amount_paid"   type="number" value ="' + val.amount_paid + '"class="validate"><label for="cust_amount_paid">Amount Paid</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l1 header">'
                html += '<b>Source:</b>'
                html += '</div>'
                html += '<div class="col s12 m12 l5">'
                html += '<div class="input-field source-admin">'
                // html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="source" type="text"   value ="' + val.source + '"class="validate"><label for="source">Source</label></div>'
                html += '<select id="source" class="browser-default">'
                html += '<option value="">Source</option>'
                sourcelen = SOURCES.length;
                for (i = 0; i < sourcelen; i++) {
                    if (val.source == SOURCES[i]){
                        html += '<option value="'+SOURCES[i]+'" selected>'+SOURCES[i]+'</option>'
                    }else{
                        html += '<option value="'+SOURCES[i]+'">'+SOURCES[i]+'</option>'
                    }
                }
                html +='</select>'
                html += '</div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="agent_details" type="text" disabled  value ="' + val.agent_details + '"class="validate"><label for="agent_details">Engineer Details</label></div>'
                html += '</div>'
            }else{
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
                html += '<div class="col s12 m12 l6">'
                if (val.booking_user_number == "") {
                    html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="cust_number" type="text"  disabled value ="' + val.cust_number + '"class="validate"><label for="cust_number">Number</label></div>'
                } else {
                    html += '<div class="input-field"><i class="material-icons prefix">phone</i><input id="cust_number" type="text"  disabled value ="' + val.booking_user_number + '"class="validate"><label for="cust_number">Number</label></div>'
                }
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">my_location</i><input id="cust_address" type="text"  disabled value ="' + val.cust_address + ', ' + val.cust_locality + ', ' + val.cust_city + '"class="validate"><label for="cust_address">Address</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_vehicle" type="text" disabled  value ="' + val.cust_make + ' ' + val.cust_model + ' ' + val.cust_fuel_varient + '"class="validate"><label for="cust_vehicle">' + val.cust_vehicle_type + '</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_coupon" type="text" disabled  value ="' + val.coupon + '"class="validate"><label for="cust_coupon">Coupon</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_amount_paid" disabled type="number" value ="' + val.amount_paid + '"class="validate"><label for="cust_amount_paid">Amount Paid</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="source" type="text" disabled  value ="' + val.source + '"class="validate"><label for="source">Source</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l6">'
                html += '<div class="input-field"><i class="material-icons prefix">account_circle</i><input id="agent_details" type="text" disabled  value ="' + val.agent_details + '"class="validate"><label for="agent_details">Engineer Details</label></div>'
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
                // html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date" type="date" value ="' + val.date_booking + '"class="datepicker"><label for="date">Date</label></div>'
                html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date" type="date" class="datepicker"><label for="date">Date</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="time_booking" type="text" value ="' + val.time_booking + '"class="validate"><label for="time_booking">Time</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l12">'
                // html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date" type="date" value ="' + val.date_booking + '"class="datepicker"><label for="date">Date</label></div>'
                html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date_delivery" type="date" class="datepicker"><label for="date">Date Delivery</label></div>'
                html += '</div>'

                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><textarea id="comments" type="text" class="materialize-textarea">' + val.comments + '</textarea><label for="comments">Jobs Summary</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><textarea id="notes" type="text" class="materialize-textarea">' + val.customer_notes + '</textarea><label for="notes">Customer Notes</label></div>'
                html += '</div>'
            }else{
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">email</i><input id="email" disabled type="email" value ="' + val.cust_email + '"class="validate"><label for="email">Email</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><input id="cust_regnumber" disabled  type="text" value ="' + val.cust_regnumber + '"class="validate" style="text-transform: uppercase;"><label for="cust_regnumber">#Registration</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date" type="date" disabled class="datepicker"><label for="date">Date</label></div>'
                // html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date" type="date" disabled  value ="' + val.date_booking + '"class="datepicker"><label for="date">Date</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="time_booking" type="text" disabled  value ="' + val.time_booking + '"class="validate"><label for="time_booking">Time</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date_delivery" type="date" disabled class="datepicker"><label for="date">Date Delivery</label></div>'
                // html += '<div class="input-field"><i class="material-icons prefix">today</i><input id="date" type="date" disabled  value ="' + val.date_booking + '"class="datepicker"><label for="date">Date</label></div>'
                html += '</div>'

                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><textarea id="comments" type="text" disabled class="materialize-textarea">' + val.comments + '</textarea><label for="comments">Jobs Summary</label></div>'
                html += '</div>'
                html += '<div class="col s12 m12 l12">'
                html += '<div class="input-field"><i class="material-icons prefix">receipt</i><textarea id="notes" type="text" disabled class="materialize-textarea">' + val.customer_notes + '</textarea><label for="notes">Customer Notes</label></div>'
                html += '</div>'
            }
            html += '</div>'

            // <----- New Booking Data---->>
            if (val.req_user_agent) {
                if (val.status == "Engineer Left") {
                    $('#customer-detail .booking-data .agent-button-row  .btn-update-status.status-btn-1').show()
                    $('#customer-detail .booking-data .agent-button-row .btn-update-status.status-btn-1').attr("status_next", "Job Completed")
                    $('#customer-detail .booking-data .agent-button-row  .btn-update-status.status-btn-1 #status_change-1').text("Job Completed")
                    $('#customer-detail .booking-data .agent-button-row  .btn-update-status.status-btn-2').attr("status_next", "Reached Workshop")
                    $('#customer-detail .booking-data .agent-button-row  .btn-update-status.status-btn-2').show()
                    $('#customer-detail .booking-data  .agent-button-row .btn-update-status.status-btn-2 #status_change-2').text("Reached Workshop")
                // } else if (val.status == "Reached Workshop") {
                //     $('#customer-detail .booking-data  .agent-button-row .btn-update-status.status-btn-1').hide()
                //     $('#customer-detail .booking-data .agent-button-row .btn-update-status.status-btn-2').hide()
                } else {
                    $('#customer-detail .booking-data  .agent-button-row .btn-update-status.status-btn-1').attr("status_next", val.status_next)
                    $('#customer-detail .booking-data .agent-button-row  .btn-update-status.status-btn-1 #status_change-1').text(val.status_next)
                    $('#customer-detail .booking-data  .agent-button-row .btn-update-status.status-btn-2').hide()
                    $('#customer-detail .booking-data  .agent-button-row .btn-update-status.status-btn-1').show()
                }

                if (val.status == "Job Completed" || val.status == "Feedback Taken") {
                    $('#customer-detail.agent-button-row').hide()
                    $('#customer-detail .agent-button-row').hide()
                    console.log('Check')
                } else {
                    // console.log('Check')
                    $('#customer-detail .agent-button-row').show()
                }
            }
            if (val.req_user_b2b){
                if (val.status == "Confirmed"){
                    $('#customer-detail .b2b-button-row-1').show()
                }else{
                    $('#customer-detail .b2b-button-row-1').hide()
                }
                if (val.status == "Job Completed" || val.status == "Feedback Taken" || val.status == "Cancelled"){
                    $('#customer-detail .b2b-button-row-2').hide()
                }else{
                    $('#customer-detail .b2b-button-row-2').show()
                }
            }
            if (val.agent_details=="Not Assigned"){
                $('.bill-row').hide()
            }
            if (val.clickgarage_flag && val.req_user_agent){
                   $('.bill-row').hide()
            }

            if ( (val.clickgarage_flag != true && val.req_user_staff) || (val.clickgarage_flag != true && val.req_user_admin) ){
                   $('.bill-row').hide()
                   $('.staff-button-row').hide()
            }else if(val.req_user_agent){
                $('.staff-button-row').hide()
            }else{
                   $('.staff-button-row').show()
            }
            // if ( (val.clickgarage_flag != true && val.req_user_staff)){
            //        // $('.bill-row').hide()
            //     $
            // }



            if (val.req_user_staff || val.req_user_admin){
                if(val.status == "Lead"){
                    $('#customer-detail .lead-row').show()
                    $('#customer-detail .confirm-row').hide()

                }else{
                    $('#customer-detail .lead-row').hide()
                    $('#customer-detail .confirm-row').show()
                }
            }
            date_string = val.date_booking
            if (val.delivery_date==null){
                // console.log("1")
                // console.log(val.delivery_date)
                date_delivery_string = val.date_booking
            } else{
                console.log(val.delivery_date)

                // console.log("2")
                date_delivery_string = val.delivery_date
            }

            $('#customer-detail .generated-bill').show()
            $('#customer-detail .non-generated-bill').hide()
            // console.log('1')
            if (!val.bill_generation_flag){
                $('#customer-detail .generated-bill').hide()
                $('#customer-detail .non-generated-bill').show()
            }
        })
        container.html(html);
        var $input = $('#customer-detail #date.datepicker').pickadate({
            format: 'dd-mm-yyyy',
            // min: new Date(),
        })

        // console.log(date_de)

        var $input2 = $('#customer-detail #date_delivery.datepicker').pickadate({
            format: 'dd-mm-yyyy',
            // min: new Date(),
        })

        var picker = $input.pickadate('picker')
        picker.set('select', date_string, { format: 'dd-mm-yyyy' })

        var picker2 = $input2.pickadate('picker')
        picker2.set('select', date_delivery_string, { format: 'dd-mm-yyyy' })
        // container.find('.datepicker').pickadate({
        //     format: 'dd-mm-yyyy',
        //     closeOnSelect: true,
        //     formatSubmit: undefined,
        //
        // });
        TOTAL_ITEM_ESTIMATE = 0;
        var container2 = $('#customer-detail .booking-job-data .pre-data');
        container2.html('');
        html = ''
        // Service Table Start
        $.each(data, function(ix, val) {
            html += '                               <div class="desc-content col s12 m12 l10 offset-l1">';
            html += '                                   <table class="striped" id="estimate-table">';
            html += '                                       <thead>';
            html += '                                       <tr>';
            html += '                                           <th data-field="id">S.No.</th>';
            html += '                                           <th data-field="part">Name</th>';
            html += '                                           <th data-field="action">Type</th>';
            // html += '                                            <th data-field="part">Type</th>';
            if (val.estimate_history.length > 1 || val.req_user_admin || val.req_user_staff || val.req_user_agent){
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
                html += '                                           <th data-field="cat-settle">Settlement</th>';
            }else{
                html += '                                           <th data-field="cat-settle" class="invisible">Settlement</th>';
            }

            // }
            if (val.req_user_admin || val.req_user_staff || val.req_user_agent){
                html += '                                           <th data-field="delete"></th>';
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
                    html += '<td>' + '<input id="part_name" type="text" class="browser-default" value ="' + val.service_items[i].name + '" aria-required="true">' + '</td>';
                }else{
                    html += '<td>' + '<input id="part_name" type="text" disabled class="noborder browser-default" value ="' + val.service_items[i].name + '" aria-required="true">' + '</td>';
                }
                // Part Type
                if (val.req_user_admin || val.req_user_staff || val.req_user_agent){
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
                }else{
                    html += '<td>' + '<input id="part_type" type="text" disabled class="noborder browser-default" value ="' + val.service_items[i].type + '" aria-required="true">' + '</td>';
                }

                // Price
                if (val.estimate_history.length > 1 || val.req_user_admin || val.req_user_staff || val.req_user_agent ) {
                    if (val.req_user_admin || val.req_user_staff || val.req_user_agent ) {
                        if ( val.service_items[i].quantity==null ||  val.service_items[i].quantity===false || val.service_items[i].quantity=="NA") {
                            html += '<td>' + '<input id="part_units" type="number" class="browser-default" value ="1" aria-required="true">' + '</td>';
                            html += '<td>' + '<input id="part_unitprice" type="number" class="browser-default" value ="' + val.service_items[i].price + '" aria-required="true">' + '</td>';
                            html += '<td>' + '<input id="part_price" type="number" class="browser-default" disabled value ="' + val.service_items[i].price  + '" aria-required="true">' + '</td>';
                        }else{
                            html += '<td>' + '<input id="part_units" type="number" class="browser-default" value ="' + val.service_items[i].quantity + '" aria-required="true">' + '</td>';
                            html += '<td>' + '<input id="part_unitprice" type="number" class="browser-default" value ="' + val.service_items[i].unit_price + '" aria-required="true">' + '</td>';
                            html += '<td>' + '<input id="part_price" type="number" class="browser-default " disabled value ="' + parseFloat(String(parseFloat(val.service_items[i].quantity) * parseFloat(val.service_items[i].unit_price)))  + '" aria-required="true">' + '</td>';

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
                    if ( val.service_items[i].comment==null ||  val.service_items[i].comment===false) {
                        html += '<td>' + '<input id="part_comment" type="text" class="browser-default" aria-required="true">' + '</td>';
                    }else{
                        html += '<td>' + '<input id="part_comment" type="text" class="browser-default" value ="' + val.service_items[i].comment + '" aria-required="true">' + '</td>';
                    }
                }else{
                    if ( val.service_items[i].comment==null ||  val.service_items[i].comment===false) {
                        html += '<td>' + '<input id="part_comment" type="text" class="browser-default noborder" aria-required="true">' + '</td>';
                    }else{
                        html += '<td>' + '<input id="part_comment" type="text" class="browser-default noborder" disabled value ="' + val.service_items[i].comment + '" aria-required="true">' + '</td>';
                    }
                }

                // approval status
                if (val.req_user_admin || val.req_user_staff ){

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
                }else if(val.req_user_agent){
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
                if (val.req_user_admin || val.req_user_staff) {
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
                }else{
                    html += '<td class="invisible">' + '<input id="settle_type" type="text" disabled class="browser-default" value ="' + val.service_items[i].settlement_cat + '" aria-required="true">' + '</td>';

                }
                // Row Deletion
                if (val.req_user_admin || val.req_user_staff || val.req_user_agent){
                    html +='                                    <td><div class="delete x25">';
                    html +='                                        <i class="fa fa-trash-o"></i>';
                    html +='                                    </div></td>';
                }else{
                    html +='                                    <td><div class="delete x25">';
                    html +='                                    </div></td>';
                }
                html += '                                       </tr>';
            }

        })

        // Service Table End
        container2.html(html);
        $('#customer-detail .total-amount').text(TOTAL_PRICE_ADMIN)
        // container2.find('select').material_select();
        Materialize.updateTextFields();
        // <div class="id_100">
    },
    loadAgentdata:function(data){
        container3 = $('#agent-select')
        container3.html('');
        html = '';
        html = '<select class="agent-list browser-default""><option value="" selected disabled>Select Agent</option>'
        // html += '<option value="" disabled>Select Agent</option>'
        $.each(data, function(ix, val) {
            html += '<option value="'+val.id+'">'+val.first_name +' '+ val.last_name+' - '+val.phone +'</option>'
        });
        html += '<select>'
        container3.html(html);
        // console.log(container3);
        // container3.find('select').material_select();

    },
    loadUpdateUser:function (data) {
        alert("User updated!")
    },
    loadCustomerAgent:function(data){
        location.reload();
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
                "approved":approved
            }
            if (name_item != ""){
                CURRENT_CART_ADMIN.push(cart_item)
            }else{

            }
        }
    },
    loadCustomerupdate:function(){
        alert('Updated!')
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
        html += '									<table class="striped">';
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
        TOTAL_ITEMS_NEW_BOOKING = 0 ;
        TOTAL_LABOUR_NEW_BOOKING= 0;
        TOTAL_PARTS_NEW_BOOKING = 0;
        TOTAL_DISCOUNT_NEW_BOOKING = 0;
        COUP_DISCOUNT_NEW_BOOKING = 0 ;
        TOTAL_JOBS_NEW_BOOKING = 0;
        ADD_DISCOUNT = 0;




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
            }else{
                ALL_JOBS_NEW_BOOKING = ALL_JOBS_NEW_BOOKING +', '+val.job_name;
            }
            JOBS_SUMMARY_NEW_BOOKING.push({'category':val.service_cat,'job_name':val.job_name,'price_total':val.total_price,'price_part':val.total_part,'price_labour':val.total_labour,'price_discount':val.total_discount,"doorstep":val.doorstep})
        });

        $.each(data['cart_summary'], function(ix, val) {

            // TOTAL_PRICE Change
            TOTAL_PRICE_NEW_BOOKING = parseFloat(val.cg_amount) - parseFloat(COUP_DISCOUNT_NEW_BOOKING);
            TOTAL_JOBS_NEW_BOOKING = val.total_jobs;
            TOTAL_LABOUR_NEW_BOOKING = val.total_labour_cg;
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
            var pocname = $('#new-booking #namepoc').val('');
            var pocnumber = $('#new-booking #telephonepoc').val('');
            var date = $('#date').val('');
            // var otp = $('#otp').val();
            var comment = $('#comment').val('');
            // cookie = local.load();
            // var fuel = $('#select-fuel').find('select').val();
            // console.log()
            var reg_num = $('#reg_number').val('');
            // var coupon = cookie['coupon']
            var time = $('#time-slot').find('select').val('');
        alert('Order Placed!')
    },
    loadCustomerStatus:function(data){
        alert('Status Updated!')
        location.reload()
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
        html += '									<table class="striped">';
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

    }
};





