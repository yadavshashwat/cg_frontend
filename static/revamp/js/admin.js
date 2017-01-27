document.onreadystatechange = function () {
    Global.init();
    Login.init();
};

// materialize css
$(document).ready(function() {
    $('select').material_select();
});


$('.datepicker').pickadate({
    format: 'dd-mm-yyyy',
    closeOnSelect: false,
    min: new Date(),
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

        // Bookings Management

        $('#bookings').on('click','.filter-sort.closed',function () {
            $('#bookings .filter-option').show();
            $('#bookings .filter-sort').addClass('open').removeClass('closed');
        });
        $('#bookings').on('click','.filter-sort.open',function () {
            $('#bookings .filter-option').hide();
            $('#bookings .filter-sort').addClass('closed').removeClass('open');
        });
        // Open Bookings
        $('.navbar .booking-button').click(function(event,data){
            $('#booking-details').hide();
            $('#bookings').show()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').hide()
            type = "Booking"
            Commons.ajaxData('view_all_bookings', {lead_booking:type}, "get", _this, _this.loadBookings,null, '.loading-pane');
        });
        $('.navbar .lead-button').click(function(event,data){
            $('#booking-details').hide();
            $('#bookings').show()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').hide()
            type = "Lead"
            Commons.ajaxData('view_all_bookings', {lead_booking:type}, "get", _this, _this.loadBookings,null, '.loading-pane');
        });
        // Open Individual Booking
        $('#bookings-list .booking-list').on('click','.booking',function(event,data){
            $('#bookings').hide()
            $('#booking-details').show()
            bid =$(this).attr('data-class')
            Commons.ajaxData('view_all_bookings', {b_id:bid}, "get", _this, _this.loadBookingData,null, '.loading-pane');
            Commons.ajaxData('fetch_all_users', {type:"agent"}, "get", _this, _this.loadAgentdata,null, '.loading-pane');
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
        // Update Booking
        // - add more items to cart
        $('#customer-detail .add-item .btn-additem-est').click(function(){
            container_parent = $('#customer-detail #estimate-table').find('tbody')
            container =  $('#customer-detail #estimate-table').find('tbody').clone();
            html = container.html()

            // container =  $('#new-booking .service-select .services-list .service-row.to-copy-row')
            // container_parent =  $('#new-booking .service-select .services-list')
            // html =''
            // new_container = container.clone().removeClass('invisible').removeClass('to-copy-row');
            // new_container.appendTo(container_parent);
            //  html = ''
            // html = container.html();

            item_no = TOTAL_ITEMS_ADMIN + 1;
            html += '										<tr>';
            html += '<td>'+item_no+'</td>';
            html += '<td>'+'<input id="Name-'+item_no+'" type="text" class="browser-default" aria-required="true"></td>';
            html += '<td>'+'<div class="input-field sort" id ="part_type"><select  class="browser-default">'
            html+=  '<option value="Part">Part</option>'
            html+=  '<option value="Labour" selected>Labour</option>'
            html+=  '<option value="Discount" >Discount</option>'
            html += '</select></div>'+'</td>';
            html += '<td>'+'<input id="price-'+item_no+'" type="number" class="browser-default" aria-required="true"></td>';
            html += '</tr>';
            container_parent.html(html);
            // new_container =
            // new_container.appendTo(container);
            TOTAL_ITEMS_ADMIN = item_no;
        });
        // - update-customer
        $('#customer-detail .btn-update-cust').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            email_n = $('#customer-detail #email').val();
            reg_n = $('#customer-detail #cust_regnumber').val();
            date_n = $('#customer-detail #date').val();
            time_n = $('#customer-detail #time_booking').val();
            comment_n = $('#customer-detail #comments').text();
            // console.log(bid);
            // console.log(email_n)
            // console.log(reg_n)
            // console.log(date_n)
            // console.log(time_n)
            // console.log(comment_n)
            // console.log(agent_n)
            ALL_JOBS_ADMIN = comment_n
            Commons.ajaxData('update_booking', {b_id: bid,
                                                email: email_n,
                                                reg_number: reg_n,
                                                comment: comment_n,
                                                time: time_n,
                                                date: date_n,
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
            $('#customer-detail .btn-update-status').click(function(){
            bid = $('#customer-detail #booking_id').attr('booking_id');
            status_n = $('#status-select').find('option:selected').val()

            // agent_n = $('#agent-select').find('option:selected').val()
            Commons.ajaxData('change_status', {b_id: bid,
                                                status_id: status_n,
                                                // email: email_n,
                                                // reg_number: reg_n,
                                                // comment: comment_n,
                                                // estimate: estimate,
                                                // time: time_n,
                                                // date: date_n,
                                                }, "post", _this, _this.loadCustomerStatus,null, '.loading-pane');
        });



        //Coupon Management
        // -- Load Coupon
        $('.navbar .coupon-button').click(function(){
            // console.log('check')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#coupon-details').show()
            $('#new-booking').hide()
               Commons.ajaxData('view_all_coupons', {}, "get", _this, _this.loadCouponAll,null, '.loading-pane');
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
        $('#coupon-detail .coupon-list').on('click','.modify-btn',function(){
            coupon_id = $(this).closest('tr').attr('data-class')
            console.log(coupon_id)
            $('#coupon-detail .coupon-list').hide()
            $('#coupon-detail .coupon-add-mod').show()
             $('#coupon-detail  .all-coupon').removeClass('selected')
              $('#coupon-detail  .single-coupon').addClass('selected')
             Commons.ajaxData('view_all_coupons', {c_id:coupon_id}, "get", _this, _this.loadCoupon,null, '.loading-pane');

        });
        // -- Switch between list and add/modify in a coupon
        $('#coupon-detail .all-coupon').click(function(){
              $('#coupon-detail .coupon-list').show();
              $('#coupon-detail  .coupon-add-mod').hide();
              $('#coupon-detail  .single-coupon').removeClass('selected')
              $('#coupon-detail  .all-coupon:hover').addClass('selected')
        });

        $('#coupon-detail .single-coupon').click(function(){
              $('#coupon-detail .coupon-list').hide();
              $('#coupon-detail  .coupon-add-mod').show();
              $('#coupon-detail  .all-coupon').removeClass('selected')
              $('#coupon-detail  .single-coupon:hover').addClass('selected')
                $('#coupon-detail #coup_name').val('')
               $('#coupon-detail #start_date').val('')
               $('#coupon-detail #end_date').val('')
               $('#coupon-detail #coup_veh_type').val('')
               $('#coupon-detail #coup_cat').val('')
               $('#coupon-detail #coup_type').val('')
               $('#coupon-detail #coup_value').val('')
               $('#coupon-detail #coup_cap').val('')
               $('#coupon-detail #coup_message').val('')
               document.getElementById('coupon_active').removeAttribute("checked", "");;

                   // document.getElementById('coupon_active');

        });


        // New Booking
        $('.navbar .new-booking-button').click(function(){
            // console.log('check')
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').hide()
            $('#coupon-details').hide()
            $('#new-booking').show()
               Commons.ajaxData('view_all_coupons', {}, "get", _this, _this.loadCouponAll,null, '.loading-pane');
        });
        $('#new-booking .header-booking .book-btn').click(function(){
            $('#new-booking  .lead-btn').removeClass('selected')
            $('#new-booking  .book-btn:hover').addClass('selected')
            $('#new-booking  .booking-lead').text("Booking")
            $('#new-booking  .booking-lead-2').text("Booking")

        });

        $('#new-booking .header-booking .lead-btn').click(function(){
            $('#new-booking  .book-btn').removeClass('selected')
            $('#new-booking  .lead-btn:hover').addClass('selected')
            $('#new-booking  .booking-lead').text("Lead")
            $('#new-booking  .booking-lead-2').text("Lead Follow Up")
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
              $('#select-fuel').hide()
                $('#select-model').show()
        });
        // -- Load Make
         $('#select-model').change(function(event,data){
            car_box =  document.getElementById('Carnew');
            bike_box =  document.getElementById('Bikenew');
             if (car_box.checked){
            vehicle =    "Car"
             $('#select-fuel').show()
            }else{
                 vehicle ="Bike"
             $('#select-fuel').hide()
                 $('#select-fuel').find('select').val('Petrol');
             }
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
             var fuel = $('#select-fuel').find('select').val();
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
            var email = $('#email').val();
            var address =  $('#address').val();
            var locality =  $('#locality').val();
            var city =  $('#city').val();
            var date = $('#date').val();
            // var otp = $('#otp').val();
            var comment = $('#comment').val();
            // cookie = local.load();
            var fuel = $('#select-fuel').find('select').val();
            var veh_type = vehicle;
            var make = $('#select-make').find('select').val();
            var model = $('#select-model').find('select').val();
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
                 , flag : flag}, "post", _this, _this.loadSendbooking,null, '.loading-pane');
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
        // User Management
        // --Get all user
        $('.navbar .users-button').click(function(event,data){
            $('#booking-details').hide()
            $('#bookings').hide()
            $('#user-details').show()
            $('#coupon-details').hide()
            $('#new-booking').hide()

            Commons.ajaxData('fetch_all_users', {}, "get", _this, _this.loadUsers,null, '.loading-pane');
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

            agent = agent_box.checked
            b2b = b2b_box.checked
            admin= admin_box.checked
            staff= staff_box.checked

            error =0


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
                        {user_id:user_id, user_num: user_number, user_name : user_name, user_email: user_email, user_add: user_address, user_loc: user_locality, user_city:user_city,b2b_st:b2b, admin_st:admin, staff_st:staff,agent_st:agent}
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
        // -- Modify Coupon
        $('#user-detail .user-list').on('click','.modify-btn',function(){
            user_id = $(this).closest('tr').attr('data-class')
            // console.log(coupon_id)
            $('#user-detail .user-list').hide()
            $('#user-detail .user-add-mod').show()
             $('#user-detail  .all-user').removeClass('selected')
              $('#user-detail  .single-user').addClass('selected')
             Commons.ajaxData('fetch_all_users', {u_id:user_id}, "get", _this, _this.loadUser,null, '.loading-pane');
        });
        // -- Switch between list and add/modify in a coupon
        $('#user-detail .all-user').click(function(){
              $('#user-detail .user-list').show();
              $('#user-detail  .user-add-mod').hide();
              $('#user-detail  .single-user').removeClass('selected')
              $('#user-detail  .all-user:hover').addClass('selected')
        });

        $('#user-detail .single-user').click(function(){
              $('#user-detail .user-list').hide();
              $('#user-detail  .user-add-mod').show();
              $('#user-detail  .all-user').removeClass('selected')
              $('#user-detail  .single-user:hover').addClass('selected')
                $('#user-detail #user_id').attr('data-class','')
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

        });





        // $('#user-detail .user-data').on('click','.btn-user-update',function(event,data){
        //     // console.log(check)
        //     user = $(this).attr('data-class');
        //     row = $(this).attr('row_n');
        //     b2b_box =  document.getElementById('b2b_box-'+row);
        //     admin_box = document.getElementById('admin_box-'+row);
        //     staff_box =  document.getElementById('staff_box-'+row);
        //     agent_box =  document.getElementById('agent_box-'+row);
        //     b2b = b2b_box.checked
        //     admin = admin_box.checked
        //     staff = staff_box.checked
        //     agent = agent_box.checked
        //     // parent = $(this).
        //     // var parent = $(this).closest('tr');
        //     // parent.find('#b2b_box-').
        //     Commons.ajaxData('update_user', {user_id:user, b2b_st:b2b, admin_st:admin, staff_st:staff,agent_st:agent}, "get", _this, _this.loadUpdateUser,null, '.loading-pane');
        // });
    },
    loadBookings:function(data){
        var container = $('#bookings-list .booking-list .pre-data');
        container.html('');
        html = ''

        $.each(data, function(ix, val) {
            html += '        <div class="row card cardhover no-border-radius booking" data-class="' + val.booking_id + '">'
            html += '            <div class="row">'
            html += '                <div class="col l1 s2 m2 booking-id-bar">'
            html += '                    <b>#<span class="id">' + val.booking_id + '</span></b>'
            html += '                </div>'
            html += '                <div class="col l7 s7 m7">'
            html += '                    <div class="col l12 s12 m12">'
            html += '                        <b>Name : </b><span class="custname">' + val.cust_name + '</span>'
            html += '                    </div>'
            html += '                    <div class="col l12 s12 m12">'
            html += '                        <b>Number : </b><span class="custname">' + val.cust_number + '</span>'
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
            html += '                <div class="col l4 s3 m3 status-bar">'
            html += '                    <span class="status">' + val.status + '</span>'
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
           html += '								<div class="desc-content col s12 m12 l12">';
            html += '									<table class="striped">';
            html += '										<thead>';
            html += '										<tr>';
            html += '											<th data-field="id">S.No.</th>';
            html += '											<th data-field="code">Name</th>';
            html += '											<th data-field="veh_type">Number</th>';
            html += '											<th data-field="category">Email</th>';
            html += '											<th data-field="start_date">Agent</th>';
            html += '											<th data-field="end_date">B2B</th>';
            html += '											<th data-field="type">Staff</th>';
            html += '											<th data-field="status">Admin</th>';
            html += '											<th data-field="modify"></th>';
            html += '										</tr>';
            html += '										</thead>';
            html += '										<tbody>';
        $.each(data, function(ix, val) {
            html += '<tr class="coupon-row" data-class="'+val.id+'">'
            html += '											<td>'+i+'</td>';
            html += '											<td>'+val.first_name+' '+val.last_name+'</td>';
            html += '											<td>'+val.phone+'</td>';
            html += '											<td>'+val.email[0]+'</td>';
            if (val.agent){
                html += '											<td><i style="color:green" class="fa fa-circle"></i></td>';
            }else{
                html += '											<td><i style="color:red" class="fa fa-circle"></i></td>';
            }
            if (val.b2b){
                html += '											<td><i style="color:green" class="fa fa-circle"></i></td>';
            }else{
                html += '											<td><i style="color:red" class="fa fa-circle"></i></td>';
            }
            if (val.staff){
                html += '											<td><i style="color:green" class="fa fa-circle"></i></td>';
            }else{
                html += '											<td><i style="color:red" class="fa fa-circle"></i></td>';
            }
            if (val.admin){
                html += '											<td><i style="color:green" class="fa fa-circle"></i></td>';
            }else{
                html += '											<td><i style="color:red" class="fa fa-circle"></i></td>';
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
        loadUser:function(data){
           $.each(data, function(ix, val) {
              $('#user-detail #user_id').attr('data-class',val.id);
               $('#user-detail #user_name').val(val.first_name +" "+val.last_name);
               $('#user-detail #user_number').val(val.phone);
               $('#user-detail #user_email').val(val.email[0]);
               $('#user-detail #user_address').val(val.user_address[0]['address'])
               $('#user-detail #user_locality').val(val.user_address[0]['locality'])
               $('#user-detail #user_city').val(val.user_address[0]['city'])
               if (val.agent){
                   document.getElementById('agent_box').setAttribute("checked", "");;
               }
               if (val.b2b){
                   document.getElementById('b2b_box').setAttribute("checked", "");;
               }
               if (val.staff){
                   document.getElementById('staff_box').setAttribute("checked", "");;
               }
               if (val.admin){
                   document.getElementById('admin_box').setAttribute("checked", "");;
               }

           });
            Materialize.updateTextFields();
            },
    // loadUsers:function(data){
    //     var container = $('#user-detail .user-data');
    //     container.html('');
    //     html = ''
    //     i=1
    //        html += '								<div class="desc-content col s12 m12 l12">';
    //         html += '									<table class="striped">';
    //         html += '										<thead>';
    //         html += '										<tr>';
    //         html += '											<th data-field="id">S.No.</th>';
    //         html += '											<th data-field="part">Name</th>';
    //         // html += '											<th data-field="part">Last Name</th>';
    //         html += '											<th data-field="action">Number</th>';
    //         html += '											<th data-field="action">Email</th>';
    //         html += '											<th data-field="price">Rights</th>';
    //         // html += '											<th data-field="price">Give Rights</th>';
    //         html += '											<th data-field="price">Button</th>';
    //         html += '										</tr>';
    //         html += '										</thead>';
    //         html += '										<tbody>';
    //     $.each(data, function(ix, val) {
    //         html += '<tr data-class="'+val.id+'">'
    //         html += '											<td>'+i+'</td>';
    //         html += '											<td>'+val.first_name+' '+val.last_name+'</td>';
    //         html += '											<td>'+val.phone+'</td>';
    //         html += '											<td>'+val.email+'</td>';
    //         html += '											<td><p>';
    //
    //         if (val.agent){
    //            html += '<input type="checkbox" class="filled-in" id="agent_box-'+i+'" checked="checked" /><label for="agent_box-'+i+'">Agent</label>'
    //         }else{
    //            html +='<input type="checkbox" class="filled-in" id="agent_box-'+i+'"/><label for="agent_box-'+i+'">Agent</label>'
    //         }
    //         if (val.b2b){
    //            html += '<input type="checkbox" class="filled-in" id="b2b_box-'+i+'" checked="checked" /><label for="b2b_box-'+i+'">B2B</label>'
    //         }else{
    //            html +='<input type="checkbox" class="filled-in" id="b2b_box-'+i+'" /><label for="b2b_box-'+i+'">B2B</label>'
    //         }
    //         html+='</p><p>'
    //         if (val.staff){
    //            html += '<input type="checkbox" class="filled-in" id="staff_box-'+i+'" checked="checked" /><label for="staff_box-'+i+'">Staff</label>'
    //         }else{
    //            html +='<input type="checkbox" class="filled-in" id="staff_box-'+i+'"/><label for="staff_box-'+i+'">Staff</label>'
    //         }
    //         if (val.admin){
    //            html += '<input type="checkbox" class="filled-in" id="admin_box-'+i+'" checked="checked" /><label for="admin_box-'+i+'">Admin</label>'
    //         }else{
    //            html +='<input type="checkbox" class="filled-in" id="admin_box-'+i+'"/><label for="admin_box-'+i+'">Admin</label>'
    //         }
    //         html+='</p>'
    //         //
    //         // if (val.user){
    //         //    html += '<input type="checkbox" class="filled-in" id="user_box"checked="checked" /><label for="user_box">User</label>'
    //         // }else{
    //         //    html +='<input type="checkbox" class="filled-in" id="user_box"/><label for="user_box">User</label></p>'
    //         // }
    //         html += '										</td><td>';
    //         html += '<button class="waves-effect waves-light btn red btn-user-update" data-class="'+val.id+'" row_n ="'+i+'" type="submit" name="action">Update Rights</button></td>'
    //         html += '										</tr>';
    //         i=i+1
    //     })
    //
    //         html += '										</tbody>';
    //         html += '									</table>';
    //         html += '								</div>';
    //
    //         container.html(html);
    //         // container.find('select').material_select();
    // },
    loadBookingData:function(data){
        var container = $('#customer-detail .booking-data .pre-data');
        container.html('');
        html = ''
        $.each(data, function(ix, val) {
                html+= '<div id="booking_id" class="col s12 m12 l12 book_id" booking_id="'+val.booking_id+'"><h4><b>#'+val.booking_id+'</h4></b></div>'
                html+= '<div class="row"><div class="col s4 m4 l2 header">Name     </div><div class="col s8 m8 l4 detail">: '+val.cust_name +'</div>'
                html+= '<div class="col s4 m4 l2 header">Number   </div><div class="col s8 m8 l4 detail">: '+val.cust_number+'</div>'
                html+= '<div class="col s4 m4 l2 header">Address      </div><div class="col s8 m8 l4 detail">: '+val.cust_address+', '+val.cust_locality+', '+val.cust_city+'</div>'
                html+= '<div class="col s4 m4 l2 header">'+val.cust_vehicle_type+'</div><div class="col s8 m8 l4 detail">: '+val.cust_make +' '+val.cust_model+' '+val.cust_fuel_varient+'</div>'
                html+= '<div class="col s4 m4 l2 header">Coupon</div><div class="col s8 m8 l4 detail">: '+val.coupon+'</div>'
                html+= '<div class="col s4 m4 l2 header">Amount Paid</div><div class="col s8 m8 l4 detail">: Rs. '+val.amount_paid+'</div>'
                html+= '<div class="col s4 m4 l2 header">Source</div><div class="col s8 m8 l4 detail">: '+val.source+'</div>'
                html+= '<div class="col s4 m4 l2 header">Status</div><div class="col s8 m8 l4 detail">: '+val.status+'</div>'
                html+= '<div class="col s4 m4 l2 header">Agent</div><div class="col s8 m8 l4 detail">: '+ val.agent_details+'</div></div>'
                html+= '<div class="row"><div class="col s4 m4 l2 header header-var">Email</div><div class="col s8 m8 l10"><input id="email" type="text" class="" value ="'+val.cust_email+'" aria-required="true"></div>'
                html+= '<div class="col s4 m4 l2 header header-var">#Veh Reg</div><div class="col s8 m8 l10"><input id="cust_regnumber" type="text" class="" value ="'+val.cust_regnumber+'" aria-required="true"></div>'
                if (val.booking_flag){
                    html+= '<div class="row"><div class="col s4 m4 l2 header header-var">Booking Date</div><div class="col s8 m8 l10 input-field"><input id="date" type="date" value ="'+ val.date_booking +'" class="datepicker"><label for="date"></label></div>'
                }else{
                    html+= '<div class="row"><div class="col s4 m4 l2 header header-var">Follow Up/ Booking Date</div><div class="col s8 m8 l10 input-field"><input id="date" type="date" value ="'+ val.date_booking +'" class="datepicker"><label for="date"></label></div>'
                }
                html+= '<div class="col s4 m4 l2 header header-var">Time</div><div class="col s8 m8 l10"><input id="time_booking" type="text" class="" value="'+ val.time_booking +'" aria-required="true"></div></div>'
                html+= '</div><div class="row"><div class="col s4 m4 l2 header header-var">Requests </div><div class="col s8 m8 l10 input-field"><textarea id="comments" class="materialize-textarea" >'+ val.comments +'</textarea></div></div>'
        })
         container.html(html);

        container.find('.datepicker').pickadate({
            format: 'dd-mm-yyyy',
            closeOnSelect: false,
            min: new Date(),
        });
        var container2 = $('#customer-detail .booking-job-data .pre-data');
        container2.html('');
        html = ''
        $.each(data, function(ix, val) {
            html += '								<div class="desc-content col s12 m12 l8 offset-l2">';
            html += '									<table class="striped" id="estimate-table">';
            html += '										<thead>';
            html += '										<tr>';
            html += '											<th data-field="id">S.No.</th>';
            html += '											<th data-field="part">Name</th>';
            html += '											<th data-field="action">Action</th>';
            // html += '											<th data-field="part">Type</th>';
            html += '											<th data-field="price">Item Price</th>';
            html += '										</tr>';
            html += '										</thead>';
            html += '										<tbody>';
            compLen = val.service_items.length;


            CURRENT_CART_ADMIN = [];
            TOTAL_PRICE_ADMIN = 0;
            TOTAL_LABOUR_ADMIN = 0;
            TOTAL_PARTS_ADMIN = 0;
            TOTAL_DISCOUNT_ADMIN = 0;
            TOTAL_ITEMS_ADMIN = 0;
            ALL_JOBS_ADMIN = "";

            //
            // CURRENT_CART = []
            // TOTAL_PRICE = 0;
            // TOTAL_LABOUR = 0;
            // TOTAL_PARTS = 0;
            // TOTAL_DISCOUNT = 0;
            // TOTAL_ITEMS = 0;
            for (i = 0; i < compLen; i++) {
                CURRENT_CART_ADMIN.push({"name": val.service_items[i].name,
                        "price": val.service_items[i].name,
                        "price_comp": val.service_items[i].price,
                        "action": val.service_items[i].action,
                        "type": val.service_items[i].type,
                        "quantity": val.service_items[i].quantity})
                TOTAL_ITEMS_ADMIN = i+1
                if (val.service_items[i].type=="Labour"){
                        TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN + parseFloat(val.service_items[i].price)
                        TOTAL_LABOUR_ADMIN = TOTAL_LABOUR_ADMIN + parseFloat(val.service_items[i].price)
                }else if(val.service_items[i].type == "Part"){
                        TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN + parseFloat(val.service_items[i].price)
                        TOTAL_PARTS_ADMIN = TOTAL_PARTS_ADMIN + parseFloat(val.service_items[i].price)
                }else if(val.service_items[i].type == "Discount"){
                        TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN - parseFloat(val.service_items[i].price)
                        TOTAL_DISCOUNT_ADMIN = TOTAL_DISCOUNT_ADMIN + parseFloat(val.service_items[i].price)
                }else{
                        TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN
                }

                item_no = i + 1;
                html += '										<tr>';
                html += '											<td>'+item_no+'</td>';
                html += '											<td>'+'<input id="Name-'+item_no+'" type="text" class="browser-default" value ="'+val.service_items[i].name+'" aria-required="true">'+'</td>';
                // html += '											<td>'+'<input id="type-'+item_no+'" type="text" class="" value ="'+val.service_items[i].type+'" aria-required="true">'+'</td>';

                html += '											<td>'+'<div class="input-field sort" id ="part_type"><select  class="browser-default">'
                if (val.service_items[i].type=="Part"){
                     html+=        '<option value="Part" selected>Part</option>'
                        }else{
                     html+=  '<option value="Part">Part</option>'
                        }
                if (val.service_items[i].type=="Labour"){
                     html+=        '<option value="Labour" selected>Labour</option>'
                        }else{
                     html+=  '<option value="Labour">Labour</option>'
                        }
                if (val.service_items[i].type=="Discount"){
                     html+=        '<option value="Discount" selected>Discount</option>'
                        }else{
                     html+=  '<option value="Discount">Discount</option>'
                        }
                html +=    '</select></div>'+'</td>';
                html += '											<td>'+'<input id="price-'+item_no+'" type="number" class="browser-default" value ="'+val.service_items[i].price+'" aria-required="true">'+'</td>';
                html += '										</tr>';
            }
            html += '										</tbody>';
            html += '									</table>';
            html += '								</div>';
        })
        container2.html(html);
        container2.find('select').material_select();

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
            // Commons.ajaxData('fetch_all_users', {}, "get", _this, _this.loadAdminUsers,null, '.loading-pane');
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
                        } else if (j == 2) {
                            type_item = $(row.cells[j]).find('input,select').eq(0).val()
                            // console.log(type_item)
                        } else if (j == 3) {
                            price_item = $(row.cells[j]).find('input,select').eq(0).val()
                            // console.log(price_item)
                        } else {
                        }
                    }
                // }
                    if (type_item == "Labour") {
                        TOTAL_PRICE_ADMIN = TOTAL_PRICE_ADMIN + parseFloat(price_item)
                        TOTAL_LABOUR_ADMIN = TOTAL_LABOUR_ADMIN + parseFloat(price_item)
                    } else if (type_item == "Part") {
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
                    }
                    CURRENT_CART_ADMIN.push(cart_item)
                }
            },
    loadCustomerupdate:function(){
    },
    loadAddCoupon:function(){},
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
                   document.getElementById('coupon_active').setAttribute("checked", "");;
               } else {
                   // document.getElementById('coupon_active');
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
    loadModels:function(data){
        var container = $('#select-model');
            container.html('');
            var html = '<select class="browser-default">';
            html +=    '<option value="" disabled selected>Select Model</option>';
            $.each(data, function(ix, val){
                html += '<option value="'+val.model+'">'+val.model+'</option>';
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
                html += '<option value="'+val.id+'">'+val.job_name+'</option>';
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
            JOBS_SUMMARY_NEW_BOOKING.push({'category':val.service_cat,'price_total':val.total_price,'price_part':val.total_part,'price_labour':val.total_labour,'price_discount':val.total_discount})
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

};





