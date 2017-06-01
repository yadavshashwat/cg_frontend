document.onreadystatechange = function () {
    Global.init();
    Login.init();
};

// materialize css
$(document).ready(function() {
    // $('#city').find('select').material_select();
    // $('select').select2();
    $('#service-select').find('select').selectize();
    // $('select').selectize();


});

$(window).ready(function() {
    setTimeout(function() {
        $('.loading-pane-2').hide();
        $('#overlay').hide();
    }, 1000);
});

window.onpopstate = function(event) {
    location.reload()
};



$('.datepicker').pickadate({
    format: 'dd-mm-yyyy',
    closeOnSelect: true,
    min: new Date() + 1,
    onSet: function( arg ){
        if ( 'select' in arg ){ //prevent closing on selecting month/year
            this.close();
            $('#time-slot').click()
        }
    }
});

$(".button-collapse").sideNav();

var CURRENT_CART = [];
var CURRENT_CART_COUP = [];
var TOTAL_PRICE = 0;
var TOTAL_JOBS = 0;
var ALL_JOBS = "";
var ALL_JOBS_LIST = [];
var JOBS_SUMMARY = [];
var JOBS_SUMMARY_TOTAL = [];
var JOBS_SUMMARY_COUP = [];

var TOTAL_LABOUR= 0;
var TOTAL_PARTS = 0;
var TOTAL_DISCOUNT = 0;

var APPLIED_COUP_LABOUR = 0;
var APPLIED_COUP_PART = 0;
var APPLIED_COUP_TOTAL = 0;
var APPLIED_COUP_DISCOUNT = 0;

var COUP_DISCOUNT = 0;

var PICK_DROP = 0;
var SHOW_ESTIMATE = 0;
var COUPON_CODE = "";


var COMPLETION_PATH = ""

var logoMap = {
    'Standard Service':'<i class="cg-icon cg-icon-card icon-cg-car-standard x50"></i>',
    'Standard Service2':'<i class="cg-icon cg-icon-card icon-cg-bike-standard x50"></i>',
    'Comprehensive Service':'<i class="cg-icon cg-icon-card icon-cg-car-comp x50"></i>',
    'AC Check':'<i class="cg-icon cg-icon-card icon-cg-accheck x50"></i>',
    'Wheel Alignment And Balancing':'<i class="cg-icon cg-icon-card icon-cg-alignment x50"></i>',
    'Comprehensive Check-Up':'<i class="cg-icon cg-icon-card icon-cg-checkup x50"></i>',
    'Scanning':'<i class="cg-icon cg-icon-card icon-cg-scan x50"></i>',
    'Brake Pad/Disc Pad Replacement':'<i class="cg-icon cg-icon-card icon-cg-brake x50"></i>',
    'Clutch Check':'<i class="cg-icon cg-icon-card icon-cg-clutch x50"></i>',
    'Battery Charging/Replacement':'<i class="cg-icon cg-icon-card icon-cg-battery x50"></i>',
    'Other Diagnosis':'<i class="cg-icon cg-icon-card icon-cg-repair x50"></i>',
    'Complete Car Detailing':'<i class="cg-icon cg-icon-card icon-cg-exterior x50"></i>',
    'Interior Dry Cleaning':'<i class="cg-icon cg-icon-card icon-cg-dryclean x50"></i>',
    'Exterior Rubbing Polishing':'<i class="cg-icon cg-icon-card icon-cg-exterior x50"></i>',
    'Teflon Coating':'<i class="cg-icon cg-icon-card icon-cg-exterior x50"></i>',
    'Underbody Anti Rust Treatment':'<i class="cg-icon cg-icon-card icon-cg-underbody x50"></i>',
    'Exterior Car Washing':'<i class="cg-icon cg-icon-card icon-cg-wash x50"></i>',
    'Flat Tyre':'<i class="cg-icon cg-icon-card icon-cg-tyre2 x50"></i>',
    'Battery Jump Start':'<i class="cg-icon cg-icon-card icon-cg-battery x50"></i>',
    'Towing':'<i class="cg-icon cg-icon-card icon-cg-tow x50"></i>',
    'Minor Repairs':'<i class="cg-icon cg-icon-card icon-cg-repair x50"></i>',
    'Key Lockout':'<i class="cg-icon cg-icon-card icon-cg-key x50"></i>',
    'Emergency Fuel (5 Litres)':'<i class="cg-icon cg-icon-card icon-cg-fuel x50"></i>',
    'Tyre Replacement':'<i class="cg-icon cg-icon-card icon-cg-tyre x50"></i>',
    'Clickgarage Assist':'<i class="cg-icon cg-icon-card icon-cg-contract x50"></i>',
    'General Check Up':'<i class="cg-icon cg-icon-card icon-cg-checkup-1 x50"></i>',
    'Cable Replacement':'<i class="cg-icon cg-icon-card icon-cg-wire x50"></i>',
    'Clutch Overhaul':'<i class="cg-icon cg-icon-card icon-cg-clutch x50"></i>',
    'Front Fork Oil Or Seal Replacement':'<i class="cg-icon cg-icon-card icon-cg-fork x50"></i>',
    'Chain Sprocket Replacement':'<i class="cg-icon cg-icon-card icon-cg-chain x50"></i>',
    'Spark Plug Replacement':'<i class="cg-icon cg-icon-card icon-cg-spark x50"></i>',
    'Engine Check':'<i class="cg-icon cg-icon-card icon-cg-engine x50"></i>',
    'Bumper Rear':'<img class="" src="/../../static/revamp/img/Panel/Bumper Rear.png">',
    'Door Front Left':'<img class="" src="/../../static/revamp/img/Panel/Door Front Left.png">',
    'Door Front Right':'<img class="" src="/../../static/revamp/img/Panel/Door Front Right.png">',
    'Door Rear Left':'<img class="" src="/../../static/revamp/img/Panel/Door Rear Left.png">',
    'Door Rear Right':'<img class="" src="/../../static/revamp/img/Panel/Door Rear Right.png">',
    'Fender Left':'<img class="" src="/../../static/revamp/img/Panel/Fender Left.png">',
    'Fender Right':'<img class="" src="/../../static/revamp/img/Panel/Fender Rear.png">',
    'Bumper Front':'<img class="" src="/../../static/revamp/img/Panel/Bumper Front.png">',
    'Front Bumper':'<img class="" src="/../../static/revamp/img/Panel/Front Bumper.png">',
    'Quarter Panel Left':'<img class="" src="/../../static/revamp/img/Panel/Quarter Panel Left.png">',
    'Quarter Panel Right':'<img class="" src="/../../static/revamp/img/Panel/Quarter Panel Right.png">',
    'Running Board Left':'<img class="" src="/../../static/revamp/img/Panel/Running Board Left.png">',
    'Running Board Right':'<img class="" src="/../../static/revamp/img/Panel/Running Board Right.png">',
    'Full Body':'<img class="" src="/../../static/revamp/img/Panel/Full Body.png">',
};

// $(window).on("popstate", function () {
//   // if the state is the page you expect, pull the name and load it.
//   if (history.state) {
//     load(history.state.name, true);
//   }
// });




var Global = {
    init:function() {
        var _this = this;
        _this.events();
        // Commons.eventHandlers();
    },

    events:function() {

        var _this = this;
        if (_this.eventsAdded)
            return false;
        _this.eventsAdded = true;
        // console.log('adding hanlder');

        // On page load adding items car
        //     Change vehicle button
        $('.autocomplete-option').click(function() {
            $input.val($(this).text().trim());
            $('.autocomplete-option').addClass('hide');
        });

        // City Select on Page load

        $('#city-select .city').click(function(){
            city = $(this).attr('data-class')
            $('body').removeClass('stop-scrolling')

            local.save('cg_city',city)
            $('#city-select').hide()
            $('#cover2').hide()
        })

        // Time Slot Selectize
        $('#time-slot').find('select').selectize()

        // Change Vehicle
        $('.order-page .nav2 .change-button').click(function () {
            $('#vehicle-select-form').show()
            $('#cover').show()
        })
        $('.order-page .edit-veh-button').click(function () {
            $('#vehicle-select-form').show()
            $('#cover').show()
        })
        $('#cover').click(function () {
            // console.log('check')
            $('#vehicle-select-form').hide()
            $('#cover').hide()
        });
        var callbrands =function(){
            vehtype = $('#vehicle-select-form .veh-cat-card.selected').text().trim()
            // console.log(vehtype)
            if(vehtype == ""){
                vehtype ="Car"
            }else{
            }
            Commons.ajaxData('get_type_make', {vehicle_type: vehtype}, "get", _this, _this.loadBrands);
        }
        $(document).on('ready',callbrands);
        $('#vehicle-select-form').on('click','.veh-cat-card',callbrands);
        $('#brand-select').change(function(event,data){
            vehtype = $('#vehicle-select-form .veh-cat-card.selected').text().trim()
            // console.log(vehtype)
            if(vehtype == ""){
                vehtype ="Car"
            }else{

            }
            var make = $(this).find('.selectize-input').find('div').attr('data-value');
            console.log(make)
            Commons.ajaxData('get_make_model', {make_id: make, vehicle_type: vehtype}, "get", _this, _this.loadModels);
        });
        $('#vehicle-select-form .veh-cat-card').click(function(){
            $('#vehicle-select-form .veh-cat-card').removeClass('selected');
            $('#vehicle-select-form .veh-cat-card:hover').addClass('selected');
            vehicle = $('#vehicle-select-form .veh-cat-card:hover').text()
            var html = '<select id="vehicle-select-list" class="js-example-responsive">';
            html += '<option value="" disabled selected>Model</option>';
            html += '</select>';
            $('#vehicle-select-form #vehicle-select').html(html);
            // $('#vehicle-select-form #vehicle-select').selectize();
            $('#vehicle-select-form .home-form-2 .vehicle-type').text(vehicle);

        });
        $('#vehicle-select-form .home-form-2 .form-proceed').click(function(event){
            var make = $('#brand-select').find('.selectize-input').find('div').attr('data-value');
            var model = $('#vehicle-select').find('.selectize-input').find('div').attr('data-value');
            // var fuel = $('#fuel-type-select').find('.active span').text();
            var vehtype = $('#vehicle-select-form .veh-cat-card.selected').text().trim()
            var error = 0 ;
            // if(make == "" || model == "" ||make == "Make" || model == "Model" ) {
            //     $('#choose-vehicle-error').text('Please select vehicle');
            //     error = 1;
            // }
            // if(error==1){
            //     return;
            // }

            cookie = local.load()

            if(cookie['vehtype']==null || cookie['vehtype']===false){
                local.clearKey('cg_city')
            }else{
                if (vehtype != cookie['vehtype']){
                    console.log('check')
                    local.clearKey('cg_city')
                }
            }
            if (typeof(model) != "undefined") {
               fuel_start = model.indexOf("(")
               fuel_end = model.indexOf(")")

               var fuel = model.substr(fuel_start + 1, fuel_end - fuel_start - 1)
               model = model.substr(0, fuel_start - 1)
                // console.log(fuel_start)
                // console.log(fuel_end)
                // console.log
            }


           if(typeof(model) == "undefined" || typeof(make) == "undefined"  ) {
               $('#choose-vehicle-error').text('Please select vehicle');
                error = 1;
            }
           if(error==1){
               return;
           }
            // var fuel =model.substr(fuel_start+1,fuel_end-fuel_start-1)

            // model = model.substr(0,fuel_start-1)
            local.clearKey('cgcart')
            local.save('vehmake',make);
            local.save('vehmodel',model);
            local.save('vehfuel',fuel);
            local.save('vehtype',vehtype);
            local.save('fullname',make+" "+model+" "+fuel)
            console.log(fuel)
            setTimeout(function(){
                window.location.href = '/Book/'+vehtype+'/'+make.replace(" ", "_")+'-'+model.replace(" ", "_")+'-'+fuel;

            },10);
        });

        // loading service categories based on car and bike
        $(document).ready(function() {
            cookie = local.load()
            vehicle_type_c = cookie['vehtype'];
            veh_make = cookie['vehmake'];
            veh_model = cookie['vehmodel'];
            veh_fuel = cookie['vehfuel'];

            url_list = window.location.pathname.split('/')

            if(cookie['cg_city']==null || cookie['cg_city']===false){
                $('#city-select').show()
                $('body').addClass('stop-scrolling')
                if (vehicle_type_c == "Bike"){
                    $('#city-select .row-bike').show()
                }else{
                    $('#city-select .row-car').show()
                }
                $('#cover2').show()
            }else{
                // cart_list = cookie_name['cgcart'];
            }


            var name = $('#services').attr('data-vehicle-name')
            name = name.split('-')
            var vehicle_type = $('#services').attr('data-vehicle-type')

            if (veh_make == name[0].replace("_", " ") && veh_model == name[1].replace("_", " ") && veh_fuel == name[2] && vehicle_type_c == vehicle_type){
                // console.log(veh_make)
                // console.log(name[0].replace("_", " "))
            }else{
                local.clearKey('cgcart')
                local.save('vehtype',vehicle_type)
                local.save('vehmake',name[0].replace("_", " "))
                local.save('vehmodel',name[1].replace("_", " "))
                local.save('vehfuel',name[2])
            }

            $('#vehicle-name').text(name[0].replace("_", " ") + " " +name[1].replace("_", " "))
            $('#vehicle-varient').text(name[2]+" Varient")
            $('#vehicle-name1').text(name[0].replace("_", " ") + " " +name[1].replace("_", " "))
            $('#vehicle-varient1').text(name[2]+"")

            rand_number = Math.floor(Math.random() * 3) + 1
            if (rand_number == 1){
                $('#intro-sentence').text('How can we help with your '+name[0].replace("_", " ")+' '+name[1].replace("_", " ")+'?')
            }else if (rand_number == 2){
                $('#intro-sentence').text('We really love your '+name[0].replace("_", " ")+' '+name[1].replace("_", " ")+'!')
            }else{
                $('#intro-sentence').text('Your '+name[0].replace("_", " ")+' '+name[1].replace("_", " ")+' looks kinda amazing!')
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

        // Making service and time slot dropdown read only
        $("#service-select .selectize-input input").attr('readonly','readonly');
        $("#time-slot .selectize-input input").attr('readonly','readonly');


        // Service Select Load Jobs - Start

            $('#services .service-card').on('click' ,function(e){
                $(' .desktop-list  .service-item').removeClass('selected');
                $(' .desktop-list  .service-item:hover').addClass('selected');
                var classy = $(this).attr('data-class');
                var name = $('#services').attr('data-vehicle-name')
                var vehicle_type = $('#services').attr('data-vehicle-type')
                $('#jobs .service-sub-category.car-care').hide()
                $('#jobs .service-sub-category.denting').hide()
                $('#service-select').find("option[value=" + classy +"]").attr('selected', true);
                // $('.selDiv option[value="+classy+"]').addattr
                // $('#service-select .selectize-dropdown-content').find("[data-value='" + classy + "']").addClass('selected').addClass('active');
                $('#service-select').find('select').selectize()

                name = name.split('-')
                // console.log(classy);
                if(classy == 'servicing'){
                    $('.nav-services').find('.car-servicing').addClass('selected');
                    $('.nav-services').find('.bike-servicing').addClass('selected');
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Servicing"}, "get", _this, _this.loadJobs);
                }else if(classy =='repairing'){
                    $('.nav-services').find('.car-repairing').addClass('selected');
                    $('.nav-services').find('.bike-repairing').addClass('selected');
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Repairing"}, "get", _this, _this.loadJobs);
                }else if(classy =='emergency'){
                    $('.nav-services').find('.car-emergency').addClass('selected');
                    $('.nav-services').find('.bike-emergency').addClass('selected');
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Emergency"}, "get", _this, _this.loadJobs);
                }else if(classy =='subscription'){
                    $('.nav-services').find('.car-subscription').addClass('selected');
                    $('.nav-services').find('.bike-subscription').addClass('selected');
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Subscription"}, "get", _this, _this.loadJobs);
                }else if(classy =='carcare'){
                    $('.nav-services').find('.car-care').addClass('selected');
                    $('#jobs .service-sub-category.car-care').show();
                    var doorstep = $('#jobs .service-sub-category.car-care .selected').attr('doorstep');
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Cleaning",doorstep:doorstep}, "get", _this, _this.loadJobs);            }else if(classy =='denting'){
                    $('.nav-services').find('.car-denting').addClass('selected');
                    $('#jobs .service-sub-category.denting').show();
                    var sub_cat = $('#jobs .service-sub-category.denting .selected').attr('sub_cat');
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Denting",sub_cat:sub_cat}, "get", _this, _this.loadJobs);
                }else{
                    return
                }
                // console.log(window.location.pathname.split('/').length)
                if(window.location.pathname.split('/').length == 5){
                    var new_path =  window.location.pathname+classy+'/'
                    var state = {name: "Service Page", page: 'Service Page'};
                    history.pushState(state,'Service Page',new_path)
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
            // Jobs load when clickcked on service item list on navbar desktop
            $('.order-page .desktop-list .service-item').on('click', function(e){
                $(' .desktop-list  .service-item').removeClass('selected');
                $(' .desktop-list  .service-item:hover').addClass('selected');
                var name = $('#services').attr('data-vehicle-name')
                name = name.split('-')
                var classy = $(this).attr('data-class');
                $('#jobs .service-sub-category.car-care').hide()
                $('#jobs .service-sub-category.denting').hide()
                if(classy == 'servicing'){
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Servicing"}, "get", _this, _this.loadJobs);
                }else if(classy =='repairing'){
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Repairing"}, "get", _this, _this.loadJobs);
                }else if(classy =='emergency'){
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Emergency"}, "get", _this, _this.loadJobs);
                }else if(classy =='subscription'){
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Subscription"}, "get", _this, _this.loadJobs);
                }else if(classy =='carcare'){
                    $('#jobs .service-sub-category.car-care').show();
                    var doorstep = $('#jobs .service-sub-category.car-care .selected').attr('doorstep');
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Cleaning",doorstep:doorstep}, "get", _this, _this.loadJobs);
                }else if(classy =='denting'){
                    $('#jobs .service-sub-category.denting').show();
                    var sub_cat = $('#jobs .service-sub-category.denting .selected').attr('sub_cat');
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Denting",sub_cat:sub_cat}, "get", _this, _this.loadJobs);
                }else{
                    return
                }
                // console.log(window.location.pathname.split('/').length)
                if(window.location.pathname.split('/').length == 6){
                    var a = window.location.pathname.split('/')
                    var new_path =  a.slice(0,a.length-2).join('/')+'/'+classy+'/'
                    var state = {name: "Service Page", page: 'Service Page'};
                    history.pushState(state,'Service Page',new_path)
                    // history.pushState(shate,'',new_path)
                }
            });
            // Jobs load when dropdownn change list on navbar mobile
            $('#service-select').on('change','.visible',function(event,data){

                var classy = $(this).find('.selectize-input').find('div').attr('data-value').toLowerCase().replace(/\s+/g, '');;
                console.log(classy)
                var name = $('#services').attr('data-vehicle-name')
                name = name.split('-')

                $('#jobs .service-sub-category.car-care').hide()
                $('#jobs .service-sub-category.denting').hide()

                if(classy == 'servicing'){
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Servicing"}, "get", _this, _this.loadJobs);
                }else if(classy =='repairing'){
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Repairing"}, "get", _this, _this.loadJobs);
                }else if(classy =='emergency'){
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Emergency"}, "get", _this, _this.loadJobs);
                }else if(classy =='subscription'){
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Subscription"}, "get", _this, _this.loadJobs);
                }else if(classy =='carcare'){
                    $('#jobs .service-sub-category.car-care').show();
                    var doorstep = $('#jobs .service-sub-category.car-care .selected').attr('doorstep');
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Cleaning",doorstep:doorstep}, "get", _this, _this.loadJobs);
                }else if(classy =='denting'){
                    $('#jobs .service-sub-category.denting').show();
                    var sub_cat = $('#jobs .service-sub-category.denting .selected').attr('sub_cat');
                    Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Denting",sub_cat:sub_cat}, "get", _this, _this.loadJobs);
                }else{
                    return
                }
                // console.log(window.location.pathname.split('/').length)
                if(window.location.pathname.split('/').length == 6){
                    var a = window.location.pathname.split('/')
                    var new_path =  a.slice(0,a.length-2).join('/')+'/'+classy+'/'
                    var state = {name: "Service Page", page: 'Service Page'};
                    history.pushState(state,'Service Page',new_path)
                    // history.pushState({},'',new_path)
                }
            });

            // Sub category handling denting and car care
            $('#jobs .service-sub-category.car-care').click(function () {
                $('#jobs .service-sub-category.car-care .job-cat-card').removeClass('selected')
                $('#jobs .service-sub-category.car-care .job-cat-card:hover').addClass('selected')
                var name = $('#services').attr('data-vehicle-name')
                name = name.split('-')
                var doorstep = $('#jobs .service-sub-category.car-care .selected').attr('doorstep');
                Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Cleaning",doorstep:doorstep}, "get", _this, _this.loadJobs);
            })
            $('#jobs .service-sub-category.denting').click(function () {
                $('#jobs .service-sub-category.denting .job-cat-card').removeClass('selected')
                $('#jobs .service-sub-category.denting .job-cat-card:hover').addClass('selected')
                var name = $('#services').attr('data-vehicle-name')
                name = name.split('-')
                var sub_cat = $('#jobs .service-sub-category.denting .selected').attr('sub_cat');
                Commons.ajaxData('get_jobs_vehicle', {make_id: name[0].replace("_", " "),model_id: name[1].replace("_", " "),fuel_id: name[2],service_type: "Denting",sub_cat:sub_cat}, "get", _this, _this.loadJobs);
            })

        // Service Select Load Jobs - End

        // Hiding and showing cart on mobile
        $('#nav-cart').click(function(){
            $('#jobs .service-sub-category.car-care').hide();
            $('#jobs .service-sub-category.denting').hide();
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


        // Job Info expansion and closing
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

        // Cart fixed on scroll
        $(window).scroll(function(){
            var wh = $(window).height();
            var ch = $('#cart').height() + 250;
            if (wh >= ch){
                if ($(this).scrollTop() > 0) {
                    $('#cart').css({position: 'fixed'});
                }
            } else {
                if ($(this).scrollTop() > 0) {
                    $('#cart').css({position: 'absolute'});
                }
            }
        });

        // cart coupon addition
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

            $(this).find('.book-status').text('Booked')
            $(this).parent('.row').find('i').hide()

        });

        // Deleting item cart
        $('#cart').on('click','.cart-item .delete',function(e){
            var parent = $(this).closest('.cart-item');
            var delC = parent.attr('job-id');
            var obj_cookie = local.load();
            var cookie_list = obj_cookie['cgcart'].split(',');
            var code = obj_cookie['coupon']
            var vehicle_type = $('#services').attr('data-vehicle-type')
            var cartLen = cookie_list.length;
            for (i = 0; i < cartLen; i++) {
                if (cookie_list[i] == delC){
                    cookie_list.splice(i,1);
                }
            }
            cookie_list_string = cookie_list.join(',')
            local.save('cgcart', cookie_list_string);
            Commons.ajaxData('add_job_cart', {}, "get", _this, _this.loadCart);
            Commons.ajaxData('check_coupon', {c_id:code,veh_type:vehicle_type}, "get", _this, _this.loadCheckCoupon,null, '.loading-pane');
            Commons.ajaxData('add_job_cart', {}, "get", _this, _this.loadCart);
            job_div = $("#jobs").find("[job-id='" + delC + "']");
            job_div.find('.book-btn').removeClass('disabled')
            job_div.find('.book-btn .book-status').text('Book')
            job_div.find('.book-btn').parent('.row').find('i').show()
        });
        $('#cart .btn-checkout').on('click' ,function(e){
            $('.order-page .nav-services').hide();
            $('#jobs').hide()
            if(window.location.pathname.split('/').length == 6){
                var a = window.location.pathname.split('/')
                var new_path =  a.slice(0,a.length-2).join('/')+'/checkout/'
                var state = {name: "Checkout Page", page: 'Checkout Page'};
                history.pushState(state,'Checkout Page',new_path)
                // history.pushState({},'',new_path)
            }
            name = ""
            number = ""
            email = ""
            address = ""
            locality = ""
            city = ""

            cookie = local.load();
            if (cookie['c_user_id']){
                name = cookie['c_user_first_name'] + " " + cookie['c_user_last_name']  ;
                number = cookie['c_user_number'];
                email = cookie['c_user_email'];
                if(email==null || email===false){
                }
                else{
                    email = email.substr(1,email.length-2)
                }
                address = cookie['c_user_address'];
                if(address==null || address===false){}else{
                    if (address.split(' ').length > 1){
                        address = address.substr(1,address.length-2)
                    }
                }

                locality = cookie['c_user_locality'];
                if(locality==null || locality===false){}else {

                    if (locality.split(' ').length > 1) {
                        locality = locality.substr(1, locality.length - 2)
                    }
                }

                city = cookie['c_user_city'];
                if(city==null || city===false){}else {

                    if (city.split(' ').length > 1){
                        city = city.substr(1,city.length-2)
                    }}
            }else{
                city = cookie['cg_city']
                // if (city.split(' ').length > 1) {
                //     city = city.substr(0,city.length-2)
                // }

            }

            $('#name').val(name);
            $('#telephone').val(number);
            $('#email').val(email);
            $('#address').val(address);
            $('#locality').val(locality);
            veh_type = cookie['vehtype'];
            if (veh_type == "Bike"){
                $('#city-bike').show()
                $('#city-car').hide()
                // #To Change During Bike Expansion
                if (city == "Gurgaon"){
                    $('#city-bike').find('select').val(city).material_select();
                }
                $('#city-bike').find('select').material_select();
            }else{
                $('#city-bike').hide()
                $('#city-car').show()
                $('#city-car').find('select').val(city).material_select();
            }
            Materialize.updateTextFields();
            $('#booking-details').show();
        });

        var sendotp = function(){
            number = $('#telephone').val();
            Commons.ajaxData('send_otp_new', {phone: number}, "get", _this, _this.loadOTP,null, '.loading-pane');

        };

        $('#booking-details .confirm-details .btn-checkout').on('click', function(){
            var number = $('#telephone').val();
            cookie = local.load()
            number2 = cookie["c_user_number"]

            var name = $('#name').val();
            var number = $('#telephone').val();
            var email = $('#email').val();
            var address =  $('#address').val();
            var locality =  $('#locality').val();


            veh_type = cookie['vehtype'];
            if (veh_type == "Bike"){
                var city = $('#city-bike input').val()
            }else{
                var city = $('#city-car input').val();
            }
            // console.log(city)
            // // var make = $('#brand-select').find('.active span').text();

            // var city =  $('#city').val();
            var date = $('#date').val();
            var time = $('#time-slot').find('.selectize-input').find('div').attr('data-value');
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
                $('#city').find('input').addClass("error-border");
                error = 1;
            }
            if(number <= 100000000 || number >= 9999999999 || number == "" || number.length != 10){
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



            if(typeof(time) == "undefined" ){
                $('#time-slot').find('.selectize-input').addClass('error-border')
                // $('#locality').addClass("invalid");
                error = 1;
            }
            // if(time==""){
            //     $('#time').addClass("invalid");
            //     $('#choose-time-slot').text('Choose Time Slot');
            //     error = 1;
            // }
            if(error==1){
                return;
            }else{

                if (number == number2){
                    sendbooking()
                }else{
                    sendotp()
                }
            }
        });

        // $('#booking-details .btn-checkout').on('click', sendotp)
        $('#booking-details .resend').on('click',sendotp);
        $('#booking-details .change_details').on('click',function () {
            $('#booking-details .customer-details').show()
            $('#booking-details .login').hide()

        });

        $('#locality').on('keyup',function(e,event,data){
            var code = (e.keyCode || e.which);
            // do nothing if it's an arrow key
            if(code == 37 || code == 38 || code == 39 || code == 40 || code == 13) {
                return;
            }
            var locality = $(this).val();
            console.log(locality)
            Commons.ajaxData('get_location', {location_id: locality}, "get", _this, _this.loadLocation);
            Materialize.updateTextFields();
            $('#locality').removeClass('invalid')
        });


        var sendbooking = function(){
            var name = $('#name').val();
            var number = $('#telephone').val();
            var email = $('#email').val();
            var address =  $('#address').val();
            var locality =  $('#locality').val();
            var veh_type = cookie['vehtype'];
            if (veh_type == "Bike"){
                var city = $('#city-bike input').val()
            }else{
                var city = $('#city-car input').val();
            }

            var date = $('#date').val();
            var otp = $('#otp').val();
            var comment = $('#comment').val();
            cookie = local.load();
            var fuel = cookie['vehfuel'];

            var make = cookie['vehmake'];
            var model = cookie['vehmodel'];
            var coupon = COUPON_CODE;
            var is_paid = false;
            var paid_amt = "0";
            var price_total = $('#total-price').text();
            if (comment!= "" && comment != " "){
                ALL_JOBS_LIST.push({"Job":comment,"Price":"0", "Category":"NA"})
            }
            var time = $('#time-slot').find('.selectize-input').find('div').attr('data-value');
            Commons.ajaxData('send_booking', {otp:otp
                ,name       : name
                ,number     : number
                ,email      : email
                ,reg_number : "--"
                ,address    : address
                ,locality   : locality
                ,city       : city
                ,order_list : JSON.stringify(CURRENT_CART)
                ,make       : make
                ,model      : model
                ,fuel       : fuel
                ,veh_type   : veh_type
                ,date       : date
                ,time       : time
                ,jobsummary_list : JSON.stringify(ALL_JOBS_LIST)
                ,comment    : ALL_JOBS + ', '+ comment
                ,is_paid    : is_paid
                ,paid_amt   : paid_amt
                ,coupon     : coupon
                ,price_total: price_total
                ,int_summary :JSON.stringify(JOBS_SUMMARY_TOTAL)}, "post", _this, _this.loadSendbooking,null, '.loading-pane');
        };

        $('#booking-details .btn-send-booking').click(sendbooking);

        $('#cart .cart-coupon .btn-coupon').click(function(){
            code = $('#cart #coupon_box').val()
            var vehicle_type = $('#services').attr('data-vehicle-type')
            Commons.ajaxData('check_coupon', {c_id:code,veh_type:vehicle_type}, "get", _this, _this.loadCheckCoupon,null, '.loading-pane');
            setTimeout(function() {
                Commons.ajaxData('add_job_cart', {}, "get", _this, _this.loadCart);
            }, 100);


        });

    },
    loadBrands:function(data){
        var container = $('#brand-select');
        vehtype = $('#vehicle-select-form .veh-cat-card.selected').text().trim()
        // console.log(vehtype)
        if(vehtype == ""){
            vehtype ="Car"
        }else{

        }
        // console.log(vehtype)
        container.html('');
        var html = '<select id="brand-select-list" class="js-example-responsive">';
        html += '<option value="" disabled selected>Make</option>';

        var html2 = ""
        var html3 = ""
        var POPULAR_BRANDS  = ["Maruti Suzuki", "Hyundai", "Honda", "Tata", "Toyota", "Mahindra", "Hero", "Bajaj","Yamaha"]

        $.each(data, function(ix, val){
            if (POPULAR_BRANDS.indexOf(val.make) >= 0){
                html2 += '<option value="' + val.make + '">'+ val.make + '</option>'
            }else{
                html3 += '<option value="' + val.make + '">'+ val.make + '</option>'
            }

        });

        html += '<optgroup label="Popular Brands">'
        html += html2
        html += '</optgroup>'
        html += '<optgroup label="Other Brands">'
        html += html3
        html += '</optgroup>'

        html += '<select>';
        container.html(html);
        container.find('select').selectize({
            create: false,
            sortField: 'true',
            lockOptgroupOrder: true,
            // openOnFocus:false,
            // maxOptions:10,
            render: {
                item: function(item, escape) {
                    // console.log(item.value)
                    if (vehtype=="Car") {
                        return '<div><img src="/../../static/revamp/img/Brands/Car/' + item.value + '.png" class="img-flag img-brand" alt="brand icon" />&nbsp;' + escape(item.value) + '</div>';
                    }else{
                        return '<div><img src="/../../static/revamp/img/Brands/Bikes/' + item.value + '.png" class="img-flag img-brand" alt="brand icon" />&nbsp;' + escape(item.value) + '</div>';
                    }
                },
                option: function(item, escape) {
                    if (vehtype=="Car") {
                        return '<div><img src="/../../static/revamp/img/Brands/Car/' + item.value + '.png" class="img-flag img-brand" alt="brand icon" />&nbsp;' + escape(item.value) + '</div>';
                    }else{
                        return '<div><img src="/../../static/revamp/img/Brands/Bikes/' + item.value + '.png" class="img-flag img-brand" alt="brand icon" />&nbsp;' + escape(item.value) + '</div>';
                    }
                }
            }
        });
        var viewportWidth = $(window).width();
        if (viewportWidth <= 992){
            $(".selectize-input input").attr('readonly','readonly');
        }


    },
    loadModels:function(data){
        //  vehtype = $('#home .veh-cat-card.selected').text().trim()
        // // console.log(vehtype)
        // if(vehtype == ""){
        //     vehtype ="Car"
        // }else{
        //
        // }
        var container = $('#vehicle-select');
        container.html('');
        var html = '<select id="vehicle-select-list" class="js-example-responsive">';
        html += '<option value="" disabled selected>Model</option>';
        $.each(data, function(ix, val){
            html += '<option value="'+val.model+' ('+val.fuel_type + ')" data-placeholder="true">'+ val.full_veh_name + '</option>'
            // console.log(val.model)

        });
        html += '</select>';
        container.html(html);
        // container.find('select').material_select();
        // container.find('select').select2();
        container.find('select').selectize();
        var viewportWidth = $(window).width();
        if (viewportWidth <= 992){
            $(".selectize-input input").attr('readonly','readonly');
        }

    },
    loadCart:function(data){
        console.log("Cart Check")
        $('#jobs #cart .btn-checkout').addClass('disabled');
        var container = $('#cart .cart-list');
        // console.log('check')
        container.html('');
        var html ='';
        ALL_JOBS = '';
        ALL_JOBS_LIST = [];
        CURRENT_CART =[];


        JOBS_SUMMARY=[];
        SHOW_ESTIMATE = 0 ;
        $.each(data['cart_details'], function(ix, val) {
            jsLen = val.default_comp.length;
            for (i = 0; i < jsLen; i++) {
                CURRENT_CART.push(val.default_comp[i])
            }
            obj = {}
            if (ALL_JOBS ==''){
                ALL_JOBS = val.job_name;
                obj = {'Job':val.job_name,'Price':val.total_price ,"Category":val.service_cat,"Type":"Request"}
                ALL_JOBS_LIST.push(obj)
            }else{
                ALL_JOBS = ALL_JOBS +', '+val.job_name;
                obj = {'Job':val.job_name,'Price':val.total_price,"Category":val.service_cat,"Type":"Request"}
                ALL_JOBS_LIST.push(obj)
            }

            JOBS_SUMMARY.push({'category':val.service_cat,'job_name':val.job_name,'price_total':val.total_price,'price_part':val.total_part,'price_labour':val.total_labour,'price_discount':val.total_discount,"doorstep":val.doorstep})
            html +='<div class="cart-item" job-id="'+val.id+'">';
            html +=' 								<div class="col s1 m1 l1">';
            html +=' 									<div class="delete x20">';
            html +=' 										<i class="fa fa-trash-o"></i>';
            html +=' 									</div>';
            html +=' 								</div>';
            html +=' 								<div class="col s8 m8 l8">';
            html +=' 									<div class="item-name">';
            html += 									val.job_name
            html +=' 									</div>';
            // html +=' 									<div class="item-desc">';
            // html +=' 										Quotation Break-up';
            // html +=' 									</div>';
            html +=' 								</div>';
            html +=' 								<div class="col s3 m3 l3">';
            if (val.price_active == "1") {

                html += ' 									<div class="item-price">';
                html += ' 										<b>₹&nbsp;</b>' + val.total_price;
                html += ' 									</div>';
            }else{
                SHOW_ESTIMATE = SHOW_ESTIMATE + 1;
            }
            html +=' 								</div>';
            html +=' 							</div>'
        });
        JOBS_SUMMARY_TOTAL.push.apply(JOBS_SUMMARY_TOTAL,JOBS_SUMMARY);
        if (CURRENT_CART_COUP.length > 0 ){
            CURRENT_CART.push.apply(CURRENT_CART,CURRENT_CART_COUP)
            // JOBS_SUMMARY_TOTAL = JOBS_SUMMARY
            JOBS_SUMMARY_TOTAL.push.apply(JOBS_SUMMARY_TOTAL,JOBS_SUMMARY_COUP);

        }else{
            // console.log("2")
        }
        container.html(html);

        var container2 = $('#cart .cart-section.cart-summary');

        // console.log('check')
        container2.html('');
        var html2 ='';
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
                // JOBS_SUMMARY_TOTAL
                pick_drop_val = {"category": "Labour",
                    "name": "Visiting/Pick Drop",
                    "price": PICK_DROP,
                    "price_comp": PICK_DROP,
                    "unit_price": PICK_DROP,
                    "action": "Labour",
                    "type":"Labour",
                    "quantity": "1"};

                JOBS_SUMMARY_TOTAL.push({'category':'Labour','job_name':'Visiting/Pick Drop','price_total':PICK_DROP,'price_part':'0','price_labour':PICK_DROP,'price_discount':'0','doorstep':'0'});
                CURRENT_CART.push(pick_drop_val)
            }

            if (CURRENT_CART.length > 0) {
                $('#jobs #cart .btn-checkout').removeClass('disabled');
            }

            TOTAL_PRICE = parseFloat(val.cg_amount) - parseFloat(COUP_DISCOUNT) + PICK_DROP;
            TOTAL_JOBS = val.total_jobs;
            TOTAL_LABOUR = val.total_labour_cg + PICK_DROP;
            TOTAL_PARTS = val.total_part_cg;
            TOTAL_DISCOUNT = val.total_discount_cg
            ADD_DISCOUNT = parseFloat(val.diff_amount) + parseFloat(COUP_DISCOUNT);

            html2 += '<div class="col s12 m12 l12">';

            if (SHOW_ESTIMATE > 0){
                $('#nav-cart .cart-1').hide()
                $('#nav-cart .cart-2').show()

                html2 += '									<div class="row">';
                html2 += '										<div class="col s12 m12 l12 centered-text">Request Total Estimate</div>';
                html2 += '									</div>';
            }else{
                $('#nav-cart .cart-1').show()
                $('#nav-cart .cart-2').hide()

                html2 += '									<div class="row dealer-price">';
                html2 += '										<div class="col s7 m7 l7"> Dealer Price :</div>';
                html2 += '										<div class="col s5 m5 l5 price">';
                html2 += '											<strike><b>₹&nbsp;</b>';
                html2 += val.comp_amount + PICK_DROP
                html2 += '</strike>';
                html2 += '										</div>';
                html2 += '									</div>';
                if (TOTAL_PRICE > 0){
                    html2 += '									<div class="row coup-discount invisible">';
                    html2 += '										<div class="col s7 m7 l7">Coupon Discount : </div>';
                    html2 += '										<div class="col s5 m5 l5 cg-price price">';
                    html2 += '											<b>₹&nbsp;</b>';
                    html2 += '<span id="total-coup-discount">'+COUP_DISCOUNT+'</span>'
                    html2 += '										</div>';
                    html2 += '									</div>';
                }

                if (PICK_DROP >0 ){
                    html2 += '									<div class="row">';

                    if (val.car_bike=="Car"){
                        html2 += '										<div class="col s7 m7 l7">Pick Up : </div>';

                    }else{
                        html2 += '										<div class="col s7 m7 l7">Visiting Charges : </div>';
                    }
                    html2 += '										<div class="col s5 m5 l5 cg-price price">';
                    html2 += '											<b>₹&nbsp;</b>';
                    html2 += '<span id="total-price">' + PICK_DROP + '</span>'
                    html2 += '										</div>';
                    html2 += '									</div>';

                }else{

                }


                html2 += '									<div class="row">';
                html2 += '										<div class="col s7 m7 l7">CG Price : </div>';
                html2 += '										<div class="col s5 m5 l5 cg-price price">';
                html2 += '											<b>₹&nbsp;</b>';
                if (TOTAL_PRICE > 0) {
                    html2 += '<span id="total-price">' + TOTAL_PRICE + '</span>'
                }else{
                    html2 += '<span id="total-price">' + 0 + '</span>'
                }


                html2 += '										</div>';
                html2 += '									</div>';
                html2 += '									<div class="row discount">';
                html2 += '										<div class="col s12 m12 l12">Save ₹&nbsp;';
                html2 += ADD_DISCOUNT
                html2 += '										</div>';
                html2 += '									</div>';
            }
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
            // html3 +=' 									<div class="item-desc">';
            // html3 +=' 										Quotation Break-up';
            // html3 +=' 									</div>';
            html3 +=' 								</div>';
            html3 +=' 								<div class="col s3 m3 l3">';
            if (val.price_active == "1"){
                html3 +=' 									<div class="item-price">';
                html3 +=' 										<b>₹&nbsp;</b>'+ val.total_price;
                html3 +=' 									</div>';
            }
            html3 +=' 								</div>';
            html3 +=' 							</div>'
        });
        container3.html(html3);
        if(COUP_DISCOUNT>0){
            $('#cart .coup-discount').show()
            $('#summary .coup-discount').show()
        }else{
            $('#cart .coup-discount').hide()
            $('#summary .coup-discount').hide()
        }

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
            // html += '<i class="cg-icon cg-icon-card icon-cg-quality x100"></i>'
            if (val.job_name =="Standard Service" && val.car_bike == "Bike"){
                html += logoMap[val.job_name + "2"]
            }else{
                html += logoMap[val.job_name]
            }
            // html += '										<img class=""  src="/../../static/revamp/img/Icons-Services/Emergency.png">';
            html += '									</div>';
            html += '									<div class="card-content job-content">';
            html += '										<div class="col s12 m12 l5">';
            html += '											<div class="job-name">'+ val.job_name +'</div>';
            // html += '											<div class="job-desc">';
            html += '											<div class="job-desc">';
            html += '												<ul>';
            jsLen = val.job_summary.length;
            if (jsLen>1){
                for (i = 0; i < jsLen; i++) {
                    html += "<li>" + val.job_summary[i] + "</li>";
                }}
            html += '												</ul>';
            html += '											</div>';
            html += '										</div>';
            html += '										<div class="col s12 m12 l3 job-prices hide-on-med-and-down">';
            // html += '											<div class="job-amount"><b>&#8377;&nbsp;</b>'+val.total_price+'</div>';
            if (val.price_active == "1"){
                html += '											<div class="job-amount"><b>&#8377;&nbsp;</b>'+val.total_price+'</div>';
            }
            if (val.time == "" || val.time == "0" || val.time =="NA"){
            }else{
                html += '											<div class="job-tat">Time : '+(parseFloat(val.time)/60)+' Hrs</div>';
            }
            html += '										</div>';
            html += '										<div class="col l4 s12 m12 button-col hide-on-med-and-down">';
            html += '<div class="row btn-row">'
            html += '											<button class="waves-effect waves-light btn cg-primary btn-small btn-service closed-more-info" type="submit" name="action">Info';
            html += '												<i class="material-icons right">turned_in</i>';
            html += '											</button>';
            html += '</div>'
            html += '<div class="row btn-row">'
            if (cart_list.indexOf(val.id)>=0){
                html += '											<button class="waves-effect waves-light btn btn-small cg-primary  btn-service book-btn disabled" type="submit" name="action"><span class="book-status">Booked</span>';
                html += '										<i class="material-icons right invisible">send</i>';
            }else{
                html += '											<button class="waves-effect waves-light btn btn-small cg-primary  btn-service book-btn" type="submit" name="action"><span class="book-status">Book</span>';
                html += '												<i class="material-icons right">send</i>';
            }

            html += '											</button>';
            html += '</div>'
            html += '										</div>';
            html += '									</div>';
            html += '								</div>';
            html += '							</div>';
            html += '							<div class="row hide-on-large-only">';
            html += '								<div class="s12 m12 l12 job-prices job-prices-mobile">';
            if (val.price_active == "1"){
                html += '											<div class="job-amount"><b>&#8377;&nbsp;</b>'+val.total_price+'</div>';
            }
            if (val.time == "" || val.time == "0" || val.time =="NA"){
            }else{
                html += '											<div class="job-tat">Time : '+(parseFloat(val.time)/60)+' Hrs</div>';
            }
            // html += '											<div class="job-tat">Time : '+val.time+' Hrs</div>';
            html += '								</div>';
            html += '							</div>';
            html += '							<div class="row button-row hide-on-large-only">';
            html += '								<div class="col l12 s12 m12">';
            html += '									<button class="waves-effect waves-light btn btn-small cg-primary btn-service closed-more-info" type="submit" name="action">Info';
            html += '										<i class="material-icons right">turned_in</i>';
            html += '									</button>';
            if (cart_list.indexOf(val.id)>=0){
                html += '											<button class="waves-effect waves-light btn btn-small  cg-primary  btn-service book-btn disabled" type="submit" name="action"><span class="book-status">Booked</span>';
                html += '										<i class="material-icons right invisible">send</i>';
            }else{
                html += '											<button class="waves-effect waves-light btn btn-small  cg-primary  btn-service book-btn" type="submit" name="action"><span class="book-status">Book</span>';
                html += '										<i class="material-icons right">send</i>';
            }

            html += '									</button>';
            html += '								</div>';
            html += '							</div>';
            html += '						</div>';
            html += '						<div class="info-div invisible">';
            html += '							<div class="row button-header">';
            html += '								<button class="waves-effect waves-light btn cg-primary  btn-service closed-more-info" type="submit" name="action">';
            html += '								<i class="fa fa-times"></i>';
            html += '								</button>';
            html += '							</div>';
            html += '							<div class="header gen-desc">';
            html += '								<div class="desc-name">';
            html += '									Description:';
            html += '								</div>';
            html += '								<div class="desc-content">';
            html += val.job_desc
            html += '								</div>';
            html += '							</div>';

            jsyLen = val.job_symptoms.length;
            if (jsyLen > 1) {
                html += '							<div class="header symptoms">';
                html += '								<div class="desc-name">';
                html += '									When is it required?';
                html += '								</div>';
                html += '								<div class="desc-content">';
                html += '									<ul>';
                for (i = 0; i < jsyLen; i++) {
                    html += "<li>" + val.job_symptoms[i] + "</li>";
                }
                html += '									</ul>';
                html += '								</div>';
                html += '							</div>';
            }
            html += '							<div class="header parts-breakup">';
            html += '								<div class="desc-name">';
            html += '									What all is covered?';
            html += '								</div>';
            jfLen = val.job_features.length;
            if (jfLen>1){
                // html += '							<div class="header list-things">';
                // html += '								<div class="desc-name">';
                // html += '									Job Features : ';
                // html += '								</div>';
                html += '								<div class="desc-content">';
                html += '									<ul>';

                for (i = 0; i < jfLen; i++) {
                    html += "<li>" + val.job_features[i] + "</li>";
                }
                html += '									</ul>';
                html += '								</div>';
                // html += '							</div>';
            }
            if (val.price_active =="1"){
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
            }
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
        // console.log("Check")
        // $('#confirm-booking').show()
        // $('#booking-details').hide()
        local.clearKey('cgcart')
        local.clearKey('coupon')
        
        // ga('require', 'ecommerce');
        // $.each(data['booking'], function(ix, val) {
        try{
            total= data['booking']['price_total']
        }catch(e){
            total = 0
        }

        try{
            booking_id = data['booking']['booking_id']
        }catch(e){
            booking_id = 999999
        }

        try{
            summary = data['booking']['Summary']
        }catch(e){
            summary = "Incomplete Data"
        }


            // console.log
            // ga('ecommerce:addTransaction', {
            //     'id': val.booking_id,                     // Transaction ID. Required.
            //     'affiliation': val.Summary,   // Affiliation or store name.
            //     'revenue': val.price_total,               // Grand Total.
            //     'shipping': '0',                  // Shipping.
            //     'tax': '0'                     // Tax.
            // });
            // ga('ecommerce:send');
        // })
        // console.log(total)
        // console.log(booking_id)
        // console.log(summary)
        COMPLETION_PATH = "/completebooking/?total="
        COMPLETION_PATH += total
        COMPLETION_PATH +=    "&booking_id="
        COMPLETION_PATH += booking_id
        COMPLETION_PATH += "&summary="
        COMPLETION_PATH += summary

        console.log(COMPLETION_PATH)
        // window.open(COMPLETION_PATH)
        window.location.href =  COMPLETION_PATH;

        // window.location.href =  COMPLETION_PATH;

    },
    loadCheckCoupon:function(data){
        message = data.msg
        APPLIED_COUP_LABOUR = 0
        APPLIED_COUP_PART = 0
        APPLIED_COUP_TOTAL = 0
        APPLIED_COUP_DISCOUNT = 0
        COUP_DISCOUNT = 0
        JOBS_SUMMARY_TOTAL = []
        cat_counter = 0
        $.each(data, function(ix, val) {
            jsLen = JOBS_SUMMARY.length;
            // console.log(JOBS_SUMMARY)
            cat_counter = 0
            for (i = 0; i < jsLen; i++) {
                if (val.category == JOBS_SUMMARY[i].category){
                    cat_counter = cat_counter + 1
                    APPLIED_COUP_LABOUR = APPLIED_COUP_LABOUR + parseFloat(JOBS_SUMMARY[i].price_labour)
                    APPLIED_COUP_PART = APPLIED_COUP_PART + parseFloat(JOBS_SUMMARY[i].price_part)
                    APPLIED_COUP_TOTAL = APPLIED_COUP_TOTAL + parseFloat(JOBS_SUMMARY[i].price_total)
                    APPLIED_COUP_DISCOUNT = APPLIED_COUP_DISCOUNT + parseFloat(JOBS_SUMMARY[i].price_discount)
                }}

            if (val.type=="discount_labour"){
                // console.log("discount_labour")
                DISCOUNT = ((APPLIED_COUP_LABOUR - APPLIED_COUP_DISCOUNT) * parseFloat(val.value))/100
                // console.log(DISCOUNT)
                if (DISCOUNT >= parseFloat(val.cap)){
                    COUP_DISCOUNT = parseFloat(val.cap)
                }else{
                    COUP_DISCOUNT = DISCOUNT
                }
            }else if(val.type=="discount_part"){
                // console.log("discount_part")
                DISCOUNT = (APPLIED_COUP_PART * parseFloat(val.value))/100
                if (DISCOUNT >= parseFloat(val.cap)){
                    COUP_DISCOUNT = parseFloat(val.cap)
                }else{
                    COUP_DISCOUNT = DISCOUNT
                }
            }else if(val.type=="discount_total"){
                // console.log("discount_total")
                DISCOUNT = (APPLIED_COUP_TOTAL * parseFloat(val.value))/100
                if (DISCOUNT >= parseFloat(val.cap)){
                    COUP_DISCOUNT = parseFloat(val.cap)
                }else{
                    COUP_DISCOUNT = DISCOUNT
                }
            }else if(val.type=="flat"){
                // console.log("flat")
                DISCOUNT = (APPLIED_COUP_TOTAL * parseFloat(val.value))/100
                if (DISCOUNT >= parseFloat(val.cap)){
                    COUP_DISCOUNT = parseFloat(val.cap)
                }else{
                    COUP_DISCOUNT = DISCOUNT
                }

            }else{
                // console.log("none")
                COUP_DISCOUNT= 0
            }
            message = val.message
            local.save('coupon',val.coupon_code);
            COUPON_CODE = val.coupon_code;
            CURRENT_CART_COUP = [{"name": "Discount Coupon - " + val.coupon_code,
                "price": COUP_DISCOUNT,
                "action": "Discount",
                "type": "Discount"}]
            // console.log(CURRENT_CART)
            // JOBS_SUMMARY_TOTAL = JOBS_SUMMARY.push()
            // JOBS_SUMMARY_TOTAL = JOBS_SUMMARY
            //
            // JOBS_SUMMARY_TOTAL = JOBS_SUMMARY
            JOBS_SUMMARY_COUP = [{'category':"Discount",'job_name':val.coupon_code,'price_total':COUP_DISCOUNT,'price_part': "0",'price_labour':COUP_DISCOUNT,'price_discount':"0"}]
            // console.log(JOBS_SUMMARY_TOTAL)
        })
        if (cat_counter==0){
            message = "Coupon invalid for selected service"
            local.clearKey('coupon')
        }
        $('#cart .coupon-message .coup-mess').text(message)
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
        // locations += '}';
        // console.log(locations)
        container.autocomplete({
            data : locations
        })
        Materialize.updateTextFields();

    },
};

// "cap": 200,
// "message": "Shashwat Luxury",
// "category": "Cleaning",
// "value": 10,
// "type": "discount_labour"



