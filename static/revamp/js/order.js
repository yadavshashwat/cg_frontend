document.onreadystatechange = function () {
    Global.init();
};

// materialize css
$(document).ready(function() {
    $('select').material_select();
});



$('.datepicker').pickadate({
    format: 'dd-mm-yyyy',
    closeOnSelect: true,
    min: new Date(),
});

$(".button-collapse").sideNav();

var CURRENT_CART = [];
var TOTAL_PRICE = 0;
var TOTAL_JOBS = 0;


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

    // On page load adding items car

        $(document).ready(function() {
            cookie = local.load()
            vehicle_type_c = cookie['vehtype'];
            veh_make = cookie['vehmake'];
            veh_model = cookie['vehmodel'];
            veh_fuel = cookie['vehfuel'];
            var name = $('#services').attr('data-vehicle-name')
            name = name.split('_')
            var vehicle_type = $('#services').attr('data-vehicle-type')

            if (veh_make == name[0] && veh_model == name[1] && veh_fuel == name[2] && vehicle_type_c == vehicle_type){

            }else{
                local.clearKey('cgcart')
                local.save('vehtype',vehicle_type)
                local.save('vehmake',name[0])
                local.save('vehmodel',name[1])
                local.save('vehfuel',name[2])
            }


            $('#vehicle-name').text(name[0] + " " +name[1])
            $('#vehicle-varient').text(name[2]+" Varient")
            $('#vehicle-name1').text(name[0] + " " +name[1])
            $('#vehicle-varient1').text(name[2]+" Varient")
            rand_number = Math.floor(Math.random() * 3) + 1
            if (rand_number == 1){
                $('#intro-sentence').text('How can we help with your '+name[0]+' '+name[1]+'?')
            }else if (rand_number == 2){
                $('#intro-sentence').text('We really love your '+name[0]+' '+name[1]+'!')
            }else{
                $('#intro-sentence').text('Your '+name[0]+' '+name[1]+' looks kinda amazing!')
            }
            if(vehicle_type == "Car"){
                // console.log(vehicle_type)
                $('#services .services-category-car').show()
            }else{
                $('#services .services-category-bike').show()
            }

            var service = $('#jobs').attr('data-service')
            if(service.length){
                $('#services .service-card[data-class="'+service+'"]').click()
            }
            Commons.ajaxData('add_job_cart', {}, "get", _this, _this.loadCart);
        });



        // Service Select Load Jobs - Start
        $('#services .service-card').on('click' ,function(e){
            $(' .desktop-list  .service-item').removeClass('selected');
            $(' .desktop-list  .service-item:hover').addClass('selected');
            var classy = $(this).attr('data-class');
            var name = $('#services').attr('data-vehicle-name')
            var vehicle_type = $('#services').attr('data-vehicle-type')

            name = name.split('_')
            // console.log(classy);
            if(classy == 'servicing'){
                $('.nav-services').find('.car-servicing').addClass('selected');
                $('.nav-services').find('.bike-servicing').addClass('selected');
                Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Servicing"}, "get", _this, _this.loadJobs);
            }else if(classy =='repairing'){
                $('.nav-services').find('.car-repairing').addClass('selected');
                $('.nav-services').find('.bike-repairing').addClass('selected');
                Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Repairing"}, "get", _this, _this.loadJobs);
            }else if(classy =='emergency'){
                $('.nav-services').find('.car-emergency').addClass('selected');
                $('.nav-services').find('.bike-emergency').addClass('selected');
                Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Emergency"}, "get", _this, _this.loadJobs);
            }else if(classy =='subscription'){
                $('.nav-services').find('.car-subscription').addClass('selected');
                $('.nav-services').find('.bike-subscription').addClass('selected');
                Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Subscription"}, "get", _this, _this.loadJobs);
            }else if(classy =='carcare'){
                $('.nav-services').find('.car-care').addClass('selected');
                Commons.ajaxData('get_jobs_vehicle', {make_id: "Hyundai",model_id:"i20",fuel_id:"Diesel",service_type: "Cleaning"}, "get", _this, _this.loadJobs);
            }else if(classy =='denting'){
                $('.nav-services').find('.car-denting').addClass('selected');
                Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Denting"}, "get", _this, _this.loadJobs);
            }else{
                return
            }
             // console.log(window.location.pathname.split('/').length)
                if(window.location.pathname.split('/').length == 4){
                    var new_path =  window.location.pathname+classy+'/'
                    history.pushState({},'',new_path)
                }
            $('#services').slideUp('slow', function() {
                    $('#jobs').show();
                                });
            $('.order-page .nav-services').show();
            if (vehicle_type == "Car"){
                $('.order-page .nav-services .items-list-car').addClass('visible').removeClass('invisible')
                $('.order-page .nav-services .car-services').addClass('visible').removeClass('invisible')

            }else if(vehicle_type =="Bike"){
                $('.order-page .nav-services .items-list-bike').addClass('visible').removeClass('invisible')
                $('.order-page .nav-services .bike-services').addClass('visible').removeClass('invisible')
            }
            $('#nav-cart').show()
        });


        $('.order-page .desktop-list .service-item').on('click', function(e){
            $(' .desktop-list  .service-item').removeClass('selected');
            $(' .desktop-list  .service-item:hover').addClass('selected');
            var name = $('#services').attr('data-vehicle-name')
            name = name.split('_')
            var classy = $(this).attr('data-class');
            if(classy == 'servicing'){
                Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Servicing"}, "get", _this, _this.loadJobs);
            }else if(classy =='repairing'){
                Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Repairing"}, "get", _this, _this.loadJobs);
            }else if(classy =='emergency'){
                                Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Emergenct"}, "get", _this, _this.loadJobs);
            }else if(classy =='subscription'){
                                Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Subscription"}, "get", _this, _this.loadJobs);
            }else if(classy =='carcare'){
                Commons.ajaxData('get_jobs_vehicle', {make_id: "Hyundai",model_id:"i20",fuel_id:"Diesel",service_type: "Cleaning"}, "get", _this, _this.loadJobs);
            }else if(classy =='denting'){
                                Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Denting"}, "get", _this, _this.loadJobs);
            }else{
                return
            }
             // console.log(window.location.pathname.split('/').length)
                if(window.location.pathname.split('/').length == 5){
                    var a = window.location.pathname.split('/')
                    var new_path =  a.slice(0,a.length-2).join('/')+'/'+classy+'/'
                    history.pushState({},'',new_path)
                }
        });

        $('#service-select').change(function(event,data){
            var classy = $(this).find('.active span').text().toLowerCase().replace(/\s+/g, '');;
            // console.log(classy)
            var name = $('#services').attr('data-vehicle-name')
            name = name.split('_')
            if(classy == 'servicing'){
               Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Servicing"}, "get", _this, _this.loadJobs);
            }else if(classy =='repairing'){
                              Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Repairing"}, "get", _this, _this.loadJobs);
            }else if(classy =='emergency'){
                               Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Emergency"}, "get", _this, _this.loadJobs);
            }else if(classy =='amc'){
                               Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Subscription"}, "get", _this, _this.loadJobs);
            }else if(classy =='carcare'){
                               Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Cleaning"}, "get", _this, _this.loadJobs);
                // Commons.ajaxData('get_jobs_vehicle', {make_id: "Hyundai",model_id:"i20",fuel_id:"Diesel",service_type: "Cleaning"}, "get", _this, _this.loadJobs);
            }else if(classy =='dentingpainting'){
                               Commons.ajaxData('get_jobs_vehicle', {make_id: name[0],model_id: name[1],fuel_id: name[2],service_type: "Denting"}, "get", _this, _this.loadJobs);
            }else{
                return
            }
            // console.log(window.location.pathname.split('/').length)
                if(window.location.pathname.split('/').length == 5){
                    var a = window.location.pathname.split('/')
                    var new_path =  a.slice(0,a.length-2).join('/')+'/'+classy+'/'
                    history.pushState({},'',new_path)
                }
        });

        // Service Select Load Jobs - End

        $('#nav-cart').click(function(){
            $('#cart').show().addClass('page-width-cart')
            $('.order-page .nav-services').hide();
            $('#jobs .service-list').hide()
             $('#nav-cart').hide()
        });

        $('#cart .close-cart').click(function(){
            $('#cart').hide().removeClass('page-width-cart')
            $('.order-page .nav-services').show();
            $('#jobs .service-list').show()
             $('#nav-cart').show()
        })



        $('#jobs').on('click',' .job .closed-more-info', function(e){
            var parent = $(this).closest('.job');
            parent.find('.closed-more-info').addClass('open-more-info').removeClass('closed-more-info');
            parent.find('.service-name').addClass('service-name-border');
            parent.find('.info-div').slideDown('slow', function() {});

        });

        $('#jobs').on('click','.job .open-more-info' ,function(e){
            var parent = $(this).closest('.job');
            parent.find('.open-more-info').addClass('closed-more-info').removeClass('open-more-info');
            parent.find('.info-div').slideUp('slow', function() {
            parent.find('.service-name').removeClass('service-name-border');
            });
        });

        // height-windows
        $('#jobs .close-cart').click(function () {
            var ch = $('#jobs .service-list').height()+20;
            $('#jobs').height(ch)
        })

        $('#nav-cart').click(function () {
            var ch = $('#cart').height();
            $('#jobs').height(ch)
        })

        // Ask atachee
        $('.service-card').click(function () {
            var ch = $('#cart').height();
            var sh = $('#jobs .service-list').height();
            // console.log(ch)
            // console.log(sh)
            // $('#jobs').height(ch)
        })




        $(window).scroll(function(){
            var wh = $(window).height();
            var ch = $('#cart').height() + 250;
            if (wh >= ch){
              	if ($(this).scrollTop() > 0) {
                $('#cart').css({position: 'fixed', top: '140px'});
                }
            } else {
                if ($(this).scrollTop() > 0) {
                $('#cart').css({position: 'absolute'});
                }
            }
        });

        $('#cart .cart-coupon .discount-link').on('click',function(e){
              // console.log('check')
              $('#cart .cart-coupon .discount-link').hide();
              $('#cart .cart-coupon .coupon-box').show();
        });

        // adding item cart

        $('#jobs').on('click','.job .book-btn',function(e){
            var parent = $(this).closest('.job');
            var newC = parent.attr('job-id');
            var obj_cookie = local.load();
            var oldC = '';
            if(obj_cookie['cgcart']){
                oldC = obj_cookie['cgcart'];
                oldC += ','
            }
            oldC += newC;
            local.save('cgcart', oldC);
            // console.log(local.load('cgcart'))
            Commons.ajaxData('add_job_cart', {}, "get", _this, _this.loadCart);
            $(this).addClass('disabled')
        });



        // Deleting item cart

        $('#cart').on('click','.cart-item .delete',function(e){
            var parent = $(this).closest('.cart-item');
            var delC = parent.attr('job-id');
            var obj_cookie = local.load();
            var cookie_list = obj_cookie['cgcart'].split(',');
            var cartLen = cookie_list.length;
                    for (i = 0; i < cartLen; i++) {
                        if (cookie_list[i] == delC){
                            cookie_list.splice(i,1);
                        }
                    }
            cookie_list_string = cookie_list.join(',')
            local.save('cgcart', cookie_list_string);
            Commons.ajaxData('add_job_cart', {}, "get", _this, _this.loadCart);
            job_div = $("#jobs").find("[job-id='" + delC + "']");
            job_div.find('.book-btn').removeClass('disabled')
        });

        $('#cart .btn-checkout').on('click' ,function(e){
            $('.order-page .nav-services').hide();
            $('#jobs').hide()
            if(window.location.pathname.split('/').length == 5){
                    var a = window.location.pathname.split('/')
                    var new_path =  a.slice(0,a.length-2).join('/')+'/checkout/'
                    history.pushState({},'',new_path)
                }


            $('#booking-details').show();
        });

        var sendotp = function(){
            var name = $('#name').val();
           var number = $('#telephone').val();
           var email = $('#email').val();
           var address =  $('#address').val();
           var locality =  $('#locality').val();
           var city =  $('#city').val();
           var date = $('#date').val();
           var time = $('#time-slot').find('.active span').text();
                        // form validation
            error =0
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
           }
           if(date==""){
               $('#date').addClass("invalid");
               error = 1;
           }
           if(time==""){
               $('#time').addClass("invalid");
               $('#choose-time-slot').text('Choose Time Slot');
               error = 1;
           }
            if(error==1){
               // console.log("didnt work")
               return;
           }else{
              Commons.ajaxData('send_otp_new', {phone: number}, "get", _this, _this.loadOTP,null, '.loading-pane');
            }
        };

        $('#booking-details .btn-checkout').on('click',sendotp);
        $('#booking-details .resend').on('click',sendotp);

        $('#booking-details .change_details').on('click',function () {
               $('#booking-details .customer-details').show()
               $('#booking-details .login').hide()

        });



        $('#booking-details .btn-send-booking').click(function () {
           var name = $('#name').val();
           var number = $('#telephone').val();
           var email = $('#email').val();
           var address =  $('#address').val();
           var locality =  $('#locality').val();
           var city =  $('#city').val();
           var date = $('#date').val();
           var otp = $('#otp').val();
           var comment = $('#comment').val();
            cookie = local.load();
           var fuel = cookie['vehfuel'];
           var veh_type = cookie['vehtype'];
           var make = cookie['vehmake'];
           var model = cookie['vehmodel'];
           var coupon = cookie['coupon']
           var is_paid = false
           var paid_amt = "0"
           var price_total = $('#total-price').text();
           var time = $('#time-slot').find('.active span').text();
           Commons.ajaxData('send_otp_booking', {otp:otp
                                            ,name       : name
                                            ,number     : number
                                            ,email      : email
                                            ,reg_number : "--"
                                            ,address    : address
                                            ,locality   : locality
                                            ,city       : city
                                            ,order_list : CURRENT_CART
                                            ,make       : make
                                            ,model      : model
                                            ,fuel       : fuel
                                            ,veh_type   : veh_type
                                            ,date       : date
                                            ,time       : time
                                            ,comment    : comment
                                            ,is_paid    : is_paid
                                            ,paid_amt   : paid_amt
                                            ,coupon     : coupon
                                            ,price_total: price_total }, "get", _this, _this.loadSendbooking,null, '.loading-pane');
        });

    },

    loadCart:function(data){
            var container = $('#cart .cart-list');
        // console.log('check')
            container.html('');
            var html ='';
            $.each(data['cart_details'], function(ix, val) {


                // Cart Changes

                CURRENT_CART.push({"Job ID":val.id,"Vehicle Make":val.make,
                    "Vehicle Model":val.model,
                    "Vehicle Fuel Type":val.fuel_type,
                    "Job Name":val.job_name,
                    "Job Total":val.total_price,
                    "Job Description":val.default_comp})

                html +='<div class="cart-item" job-id="'+val.id+'">';
                html +=' 								<div class="col s1 m1 l1">';
                html +=' 									<div class="delete x25">';
                html +=' 										<i class="fa fa-trash-o"></i>';
                html +=' 									</div>';
                html +=' 								</div>';
                html +=' 								<div class="col s8 m8 l8">';
                html +=' 									<div class="item-name">';
                html += 									val.job_name
                html +=' 									</div>';
                html +=' 									<div class="item-desc">';
                html +=' 										Quotation Break-up';
                html +=' 									</div>';
                html +=' 								</div>';
                html +=' 								<div class="col s3 m3 l3">';
                html +=' 									<div class="item-price">';
                html +=' 										<b>₹&nbsp;</b>'+ val.total_price;
                html +=' 									</div>';
                html +=' 								</div>';
                html +=' 							</div>'
            });
         container.html(html);

        var container2 = $('#cart .cart-section.cart-summary');

            // console.log('check')
            container2.html('');
            var html2 ='';
            $.each(data['cart_summary'], function(ix, val) {

            // TOTAL_PRICE Change
            TOTAL_PRICE = val.cg_amount;
            TOTAL_JOBS = val.total_jobs;

            html2 += '<div class="col s12 m12 l12">';
            html2 += '									<div class="row dealer-price">';
            html2 += '										<div class="col s7 m7 l7"> Dealer Price :</div>';
            html2 += '										<div class="col s5 m5 l5 price">';
            html2 += '											<strike><b>₹&nbsp;</b>';
            html2 += val.comp_amount
            html2 += '</strike>';
            html2 += '										</div>';
            html2 += '									</div>';
            html2 += '									<div class="row">';
            html2 += '										<div class="col s7 m7 l7">CG Price : </div>';
            html2 += '										<div class="col s5 m5 l5 cg-price price">';
            html2 += '											<b>₹&nbsp;</b>';
            html2 += '<span id="total-price">'+TOTAL_PRICE+'</span>'
            html2 += '										</div>';
            html2 += '									</div>';
            html2 += '									<div class="row discount">';
            html2 += '										<div class="col s12 m12 l12">Save ₹&nbsp;';
            html2 += val.diff_amount
            html2 += '										</div>';
            html2 += '									</div>';
            html2 += '							</div>';
            });
        container2.html(html2);



        // Summary Section Populate

            var container3 = $('#summary .cart-list');
            container3.html('');
            var html3 ='';
            $.each(data['cart_details'], function(ix, val) {
                html3 +='<div class="cart-item" job-id="'+val.id+'">';
                // html3 +=' 								<div class="col s1 m1 l1">';
                // html3 +=' 									<div class="delete x25">';
                // html3 +=' 										<i class="fa fa-trash-o"></i>';
                // html3 +=' 									</div>';
                // html3 +=' 								</div>';
                html3 +=' 								<div class="col offset-s1 offset-m1 offset-l1 s8 m8 l8">';
                html3 +=' 									<div class="item-name">';
                html3 += 									val.job_name
                html3 +=' 									</div>';
                html3 +=' 									<div class="item-desc">';
                html3 +=' 										Quotation Break-up';
                html3 +=' 									</div>';
                html3 +=' 								</div>';
                html3 +=' 								<div class="col s3 m3 l3">';
                html3 +=' 									<div class="item-price">';
                html3 +=' 										<b>₹&nbsp;</b>'+ val.total_price;
                html3 +=' 									</div>';
                html3 +=' 								</div>';
                html3 +=' 							</div>'
            });
         container3.html(html3);

        var container4 = $('#summary .cart-section.cart-summary');
            // console.log('check')
            container4.html('');
            container4.html(html2);

        $('#cart_items').text(TOTAL_PRICE);

        // Saving to cart_global_variable

    },

    loadJobs:function(data){
            var container = $('#jobs .service-list');

            container.html('');
            var html ='';
            cookie_name = local.load();
            if(cookie_name['cgcart']==null || cookie_name['cgcart']===false){;
            cart_list = 'Empty';
            }else{
            cart_list = cookie_name['cgcart'];
            }

            $.each(data, function(ix, val) {
                    html += '<div class="job" job-id ='+val.id + '>';
                    html += '<div class="card vertical-cards cardhover  service-name">';
                    html += '<div class="row">';
                    html += '<div class="col l12 s12 m12 service-content">';
                    html += '								<div class="card-image">';
                    html += '										<img class=""  src="/../../static/revamp/img/Icons-Services/Emergency.png">';
                    html += '									</div>';
                    html += '									<div class="card-content job-content">';
                    html += '										<div class="col s12 m12 l6">';
                    html += '											<div class="job-name">'+ val.job_name +'</div>';
                    // html += '											<div class="job-desc">';
                    html += '											<div class="job-desc">';
                    html += '												<ul>';
                    jsLen = val.job_summary.length;
                    for (i = 0; i < jsLen; i++) {
                        html += "<li>" + val.job_summary[i] + "</li>";
                    }
                    html += '												</ul>';
                    html += '											</div>';
                    html += '										</div>';
                    html += '										<div class="col s12 m12 l3 job-prices hide-on-med-and-down">';
                    html += '											<div class="job-amount"><b>&#8377;&nbsp;</b>'+val.total_price+'</div>';
                    html += '											<div class="job-tat">Time : '+val.time+' Hrs</div>';
                    html += '										</div>';
                    html += '										<div class="col l3 s12 m12 button-col hide-on-med-and-down">';
                    html += '											<button class="waves-effect waves-light btn red btn-service closed-more-info" type="submit" name="action">Info';
                    html += '												<i class="material-icons right">turned_in</i>';
                    html += '											</button>';

                    if (cart_list.indexOf(val.id)>=0){
                        html += '											<button class="waves-effect waves-light btn red  btn-service book-btn disabled" type="submit" name="action">Book';
                    }else{
                        html += '											<button class="waves-effect waves-light btn red  btn-service book-btn" type="submit" name="action">Book';
                    }
                    html += '												<i class="material-icons right">send</i>';
                    html += '											</button>';
                    html += '										</div>';
                    html += '									</div>';
                    html += '								</div>';
                    html += '							</div>';
                    html += '							<div class="row hide-on-large-only">';
                    html += '								<div class="s12 m12 l12 job-prices job-prices-mobile">';
                    html += '											<div class="job-amount"><b>&#8377;&nbsp;</b>'+val.total_price+'</div>';
                    html += '											<div class="job-tat">Time : '+val.time+' Hrs</div>';
                    html += '								</div>';
                    html += '							</div>';
                    html += '							<div class="row button-row hide-on-large-only">';
                    html += '								<div class="col l12 s12 m12">';
                    html += '									<button class="waves-effect waves-light btn red btn-service closed-more-info" type="submit" name="action">Info';
                    html += '										<i class="material-icons right">turned_in</i>';
                    html += '									</button>';
                    if (cart_list.indexOf(val.id)>=0){
                        html += '											<button class="waves-effect waves-light btn red  btn-service book-btn disabled" type="submit" name="action">Book';
                    }else{
                        html += '											<button class="waves-effect waves-light btn red  btn-service book-btn" type="submit" name="action">Book';
                    }
                    html += '										<i class="material-icons right">send</i>';
                    html += '									</button>';
                    html += '								</div>';
                    html += '							</div>';
                    html += '						</div>';
                    html += '						<div class="info-div invisible">';
                    html += '							<div class="row button-header">';
                    html += '								<button class="waves-effect waves-light btn red  btn-service closed-more-info" type="submit" name="action">';
                    html += '								<i class="fa fa-times"></i>';
                    html += '								</button>';
                    html += '							</div>';
                    html += '							<div class="header gen-desc">';
                    html += '								<div class="desc-name">';
                    html += '									Why it is required?';
                    html += '								</div>';
                    html += '								<div class="desc-content">';
                    html += val.job_desc

                    html += '								</div>';
                    html += '							</div>';
                    html += '							<div class="header list-things">';
                    html += '								<div class="desc-name">';
                    html += '									Job Features : ';
                    html += '								</div>';
                    html += '								<div class="desc-content">';
                    html += '									<ul>';
                    jfLen = val.job_summary.length;
                    for (i = 0; i < jfLen; i++) {
                        html += "<li>" + val.job_features[i] + "</li>";
                    }
                    html += '									</ul>';
                    html += '								</div>';
                    html += '							</div>';
                    jsyLen = val.job_symptoms.length;
                    if (jsyLen >= 0){
                            html += '							<div class="header symptoms">';
                            html += '								<div class="desc-name">';
                            html += '									What are the symptoms?';
                            html += '								</div>';
                            html += '								<div class="desc-content">';
                            html += '									<ul>';
                            for (i = 0; i < jsyLen; i++) {
                                html += "<li>" + val.job_symptoms[i] + "</li>";
                            }}
                    html += '									</ul>';
                    html += '								</div>';
                    html += '							</div>';
                    html += '							<div class="header parts-breakup">';
                    html += '								<div class="desc-name">';
                    html += '									What all is done as part of the job?';
                    html += '								</div>';
                    html += '								<div class="desc-content">';
                    html += '									<table class="striped">';
                    html += '										<thead>';
                    html += '										<tr>';
                    html += '											<th data-field="id">S.No.</th>';
                    html += '											<th data-field="part">Name</th>';
                    html += '											<th data-field="action">Item Action</th>';
                    html += '											<th data-field="price">Item Price</th>';
                    html += '										</tr>';
                    html += '										</thead>';
                    html += '										<tbody>';
                    compLen = val.default_comp.length;
                    for (i = 0; i < compLen; i++) {
                        item_no = i + 1;
                        html += '										<tr>';
                        html += '											<td>'+item_no+'</td>';
                        html += '											<td>'+val.default_comp[i].name+'</td>';
                        html += '											<td>'+val.default_comp[i].action+'</td>';
                        html += '											<td>'+val.default_comp[i].price+'</td>';
                        html += '										</tr>';
                    }
                    html += '										</tbody>';
                    html += '									</table>';
                    html += '								</div>';
                    html += '							</div>';
                    html += '						</div>';
                    html += '					</div>';
            });
            container.html(html);
        },
    loadOTP:function(data) {
        $('#booking-details .customer-details').hide()
        $('#booking-details .login').show()
    },
    loadSendbooking:function(data) {

    }
};





