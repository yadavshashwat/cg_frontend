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

var CURRENT_CART = {'a':'asadaadad'}
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


        $(document).ready(function() {
            cookie = local.load()
            vehicle_type = cookie['vehtype'];
            veh_make = cookie['vehmake'];
            veh_model = cookie['vehmodel'];
            veh_fuel = cookie['vehfuel'];
            $('#vehicle-name').text(veh_make + " " +veh_model)
            rand_number = Math.floor(Math.random() * 3) + 1
            if (rand_number == 1){
                $('#intro-sentence').text('How can we help with your '+veh_make+' '+veh_model+'?')
            }else if (rand_number == 2){
                $('#intro-sentence').text('We really love your '+veh_make+' '+veh_model+'!')
            }else{
                $('#intro-sentence').text('Your '+veh_make+' '+veh_model+' looks kinda amazing!')
            }

            if(vehicle_type == "Car"){
                // console.log(vehicle_type)
                $('#services .services-category-car').show()
            }else{
                $('#services .services-category-bike').show()
            }
            Commons.ajaxData('add_job_cart', {}, "get", _this, _this.loadCart);
        });



        $('#services .service-card').on('click' ,function(e){
            var classy = $(this).attr('data-class');
            console.log(classy);
            if(classy == 'servicing'){
                $('.nav-services').find('.car-servicing').addClass('selected');
                $('.nav-services').find('.bike-servicing').addClass('selected');
                Commons.ajaxData('get_jobs_vehicle', {make_id: "Hyundai",model_id:"i20",fuel_id:"Diesel",service_type: "Servicing"}, "get", _this, _this.loadJobs);
            }else if(classy =='repairing'){
                $('.nav-services').find('.car-repairing').addClass('selected');
                $('.nav-services').find('.bike-repairing').addClass('selected');
            }else if(classy =='emergency'){
                $('.nav-services').find('.car-emergency').addClass('selected');
                $('.nav-services').find('.bike-emergency').addClass('selected');
            }else if(classy =='subscription'){
                $('.nav-services').find('.car-subscription').addClass('selected');
                $('.nav-services').find('.bike-subscription').addClass('selected');
            }else if(classy =='carcare'){
                $('.nav-services').find('.car-care').addClass('selected');
                Commons.ajaxData('get_jobs_vehicle', {make_id: "Hyundai",model_id:"i20",fuel_id:"Diesel",service_type: "Cleaning"}, "get", _this, _this.loadJobs);
            }else if(classy =='denting'){
                $('.nav-services').find('.car-denting').addClass('selected');
            }else{
                return
            }
            $('#services').slideUp('fast', function() {
                    $('#jobs').show();
                                });
            $('.order-page .nav-services').slideDown('slow', function() {

            });

        });

        $('.order-page .desktop-list .service-item').on('click', function(e){
            $(' .desktop-list  .service-item').removeClass('selected');
            $(' .desktop-list  .service-item:hover').addClass('selected');
            var classy = $(this).attr('data-class');
            if(classy == 'servicing'){
                Commons.ajaxData('get_jobs_vehicle', {make_id: "Hyundai",model_id:"i20",fuel_id:"Diesel",service_type: "Servicing"}, "get", _this, _this.loadJobs);
            }else if(classy =='repairing'){
            }else if(classy =='emergency'){
            }else if(classy =='subscription'){
            }else if(classy =='carcare'){
                Commons.ajaxData('get_jobs_vehicle', {make_id: "Hyundai",model_id:"i20",fuel_id:"Diesel",service_type: "Cleaning"}, "get", _this, _this.loadJobs);
            }else if(classy =='denting'){
            }else{
                return
            }
        });

        $('#service-select').change(function(event,data){
            var classy = $(this).find('.active span').text();
            console.log(classy)
            if(classy == 'Servicing'){
                Commons.ajaxData('get_jobs_vehicle', {make_id: "Hyundai",model_id:"i20",fuel_id:"Diesel",service_type: "Servicing"}, "get", _this, _this.loadJobs);
            }else if(classy =='repairing'){
            }else if(classy =='emergency'){
            }else if(classy =='subscription'){
            }else if(classy =='Car Care'){
                Commons.ajaxData('get_jobs_vehicle', {make_id: "Hyundai",model_id:"i20",fuel_id:"Diesel",service_type: "Cleaning"}, "get", _this, _this.loadJobs);
            }else if(classy =='denting'){
            }else{
                return
            }        });


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

        $('.service-card').click(function(){
            var b = $('#cart').height() + 150;
                $("#jobs").height(b)
        });


        $(window).scroll(function(){
            var wh = $(window).height();
            var ch = $('#cart').height() + 250;
            // console.log(wh);
            // console.log(ch);
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
              console.log('check')
              $('#cart .cart-coupon .discount-link').hide();
              $('#cart .cart-coupon .coupon-box').show();
        });

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
            console.log(local.load('cgcart'))
            Commons.ajaxData('add_job_cart', {}, "get", _this, _this.loadCart);
            $(this).addClass('disabled')
        });

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
    },

    loadCart:function(data){
            var container = $('#cart .cart-list');
            console.log('check')
            container.html('');
            var html ='';
            $.each(data['cart_details'], function(ix, val) {
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
            html2 += val.cg_amount
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


    },

    loadJobs:function(data){
            var container = $('#jobs .service-list');
            container.html('');
            var html ='';

            // booking button disable
            $("#jobs").find('.book-btn').removeClass('disabled');
            cookie = local.load();
            if (cookie['chcart']){
                cart_list = cookie['cgcart'].split(',')
            };
            $.each(data, function(ix, val) {
                    html += '<div class="job" job-id ='+val.id + '>';
                    html += '<div class="card vertical-cards cardhover  service-name">';
                    html += '<div class="row">';
                    html += '<div class="col l12 s12 m12 service-content">';
                    html += '								<div class="card-image">';
                    html += '										<img class=""  src="../../static/revamp/img/Icons-Services/Emergency.png">';
                    html += '									</div>';
                    html += '									<div class="card-content job-content">';
                    html += '										<div class="col s12 m12 l6">';
                    html += '											<div class="job-name">'+ val.job_name +'</div>';
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

                    // if (val.id in cart_list){
                    //     console.log('read')
                    // }else{
                    //     console.log('no read')
                    // }


                    html += '											<button class="waves-effect waves-light btn red  btn-service book-btn" type="submit" name="action">Book';
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
                    html += '									<button class="waves-effect waves-light btn red  btn-service book-btn" type="submit" name="action">Book';
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

};





