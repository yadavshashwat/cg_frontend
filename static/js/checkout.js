/**
 * Created with PyCharm.
 * User: aragorn
 * Date: 26/08/15
 * Time: 2:47 AM
 * To change this template use File | Settings | File Templates.
 */

var zyxCart = {
    init : function(){
        var _this = this;
        _this.eventHandlers();
        _this.setLogos();
    var thisHour = (new Date()).getHours() + 2;
    var thisMinute = (new Date()).getMinutes();
    if(thisMinute > 30)
        thisHour += 1
        if(thisHour > 11){
            $('#same-day-toggle').prop('checked', false);
        }

        /*
        {
        timeFormat: 'h:00 A - j:00 B',
        // year, month, day and seconds are not important

        minTime: new Date(0, 0, 0, 8, 0, 0),
        maxTime: new Date(0, 0, 0, 15, 0, 0),
        // time entries start being generated at 6AM but the plugin
        // shows only those within the [minTime, maxTime] interval
        //startHour: 6,
        // the value of the first item in the dropdown, when the input
        // field is empty. This overrides the startHour and startMinute
        // options
        startTime: new Date(0, 0, 0, 8, 20, 0),
        // items in the dropdown are separated by at interval minutes
        step: 60,
        }
        */
    var timeWrapSettings = {
        timeFormat: 'h:00 A - j:00 B',
        minTime: new Date(0, 0, 0, 9, 0, 0),
        maxTime: new Date(0, 0, 0, 13, 0, 0),
        step: 60

    }
    if(this.carData && this.carData['car_bike'] == 'Bike'){
     timeWrapSettings = {
            timeFormat: 'h:i A - J:I B',
            minTime: new Date(0, 0, 0, 9, 0, 0),
            maxTime: new Date(0, 0, 0, 18, 0, 0),
            step: 90
        }
    }
    $('#time-wrap .pick-up-time').timepicker(timeWrapSettings);


    $('#date-wrap .pick-up-date').datepicker({
        'format': 'm/d/yyyy',
//        'autoclose': true,
        'minDate': new Date(),
        'autoclose':true
    });
        local.clearKey('clgacart');
        if(zyxCart.singleCoupon){
            zyxCart.loadSingleCoupon(zyxCart.singleCoupon);
        }
    // initialize datepair
//    var basicExampleEl = document.getElementById('date-time-pair');
//    var datepair = new Datepair(basicExampleEl);

    },
    defaults:{
      time:{
        timeFormat: 'hA-jB',
        // year, month, day and seconds are not important

        minTime: new Date(0, 0, 0, 8, 0, 0),
        maxTime: new Date(0, 0, 0, 15, 0, 0),
        // time entries start being generated at 6AM but the plugin
        // shows only those within the [minTime, maxTime] interval
        //startHour: 6,
        // the value of the first item in the dropdown, when the input
        // field is empty. This overrides the startHour and startMinute
        // options
        startTime: new Date(0, 0, 0, 8, 20, 0),
        // items in the dropdown are separated by at interval minutes
        step: 60,
      },
      date:{
        'format': 'm/d/yyyy',
//        'autoclose': true,
        'minDate': new Date()
      }

    },
    loadSingleCoupon : function(data){
        //console.log(res)
        console.log(data)
        if(data){
        var c_key = data.price_key;
        var c_cap = data.cap;
        c_cap = parseFloat(c_cap)
        var c_type = data.type;
        var c_vendor = data.vendor;
        var c_service = data.category;
        var c_value = data.value;
        var c_cb = data.car_bike;
        if(! (c_cb && c_cb.length) ){
            c_cb = 'Car'
        }

        $('.cart-table').find('.price-div').each(function(){
            var p_vendor = $(this).attr('data-vendor');
            var p_service = $(this).attr('data-service');
            var car_bike = $(this).attr('data-type');
            if(p_vendor && p_vendor != 'Authorized' && (p_service.toLowerCase() == c_service.toLowerCase()) ){
//                if( (car_bike.toLowerCase() == c_cb.toLowerCase()) && (p_vendor.toLowerCase() == c_vendor.toLowerCase()) ){
                if( (car_bike.toLowerCase() == c_cb.toLowerCase()) &&
                    ( (p_vendor.toLowerCase() == c_vendor.toLowerCase()) ||
                        (c_vendor.toLowerCase() == 'all') ) ){

                    var p_labour = $(this).attr('data-labour');
                    var p_parts = $(this).attr('data-parts');
                    var p_total = $(this).attr('data-total');
                    var new_price = 0;
                    p_labour = parseFloat(p_labour);
                    p_parts = parseFloat(p_parts);
                    var discount = 0;
                    var target = 0;
                    if(c_key && c_key.length){
                        if(c_key == 'labour')
                            target = p_labour;
                        else if(c_key == 'parts')
                            target = p_parts;
                        else
                            target = p_total

                        if(c_type == 'flat')
                            discount = target - c_value
                        else if(c_type == 'percent')
                            discount = (c_value)*(target)/100;
                        else
                            discount = c_value

                        if(c_cap && !isNaN(c_cap) && discount > c_cap)
                            discount = c_cap

                        if(c_key == 'labour')
                            new_price = (Math.ceil((p_labour - discount)*(114.5))/100) + (p_parts);
                        else if(c_key == 'parts')
                            new_price = (Math.ceil((p_labour)*(114.5))/100) + (p_parts - discount);
                        else
                            new_price = (Math.ceil((p_labour)*(114.5))/100) + (p_parts) - discount;
                    }
                    $(this).closest('td').find('.discounted').html('<i class="fa fa-inr"></i>'+Math.ceil(new_price)+' (&#8773;'+new_price+')').show();
                    $(this).css({
                        'text-decoration':'line-through'
                    });
                }
            }
        });
        }
        //for now we only have global coupons;
        //so skip this
            /*
        var ts_array = [];
        $.each($('.table-holder').find('table[data-id="' + car + '"]').find('tbody tr'), function (i, v) {
            if ($(v).is(':visible')) {
                //var ts = $(v).attr('ts');
                //if(ts && ts.length){
                //
                //}
                ts_array.push();
            }
        });
            */

    },
    setLogos : function(){
        $.each($('img.dealer-logo'), function(i, img){
            var dealer = $(img).attr('alt');
            var carMake = $(img).attr('data-name');
            var car_bike = $(img).attr('data-flag');
            if(!car_bike)
                car_bike = 'Car';
            if(dealer == 'Authorized'){
                $(img).attr('src', logoMap['Authorized '+car_bike]+ $.trim(carMake)+'.jpg');
            }else{
                $(img).attr('src', logoMap[dealer]);
//                $(img).attr('src', )
            }
        });
    },
    setLayout : function(){

    },
    loadStep  : function(){

    },
    eventHandlers : function(){
        var _this = this;
        $('.clean-inp-wrapper').off().on('focus', 'input.clean-inp-tbox', function(e){
            $(this).closest('.clean-inp-wrapper').addClass('input-focused');
        });
        $('.clean-inp-wrapper').on('focusout', 'input.clean-inp-tbox', function(e){
            if(!$(this).val() && !$(this).hasClass('perpetual')){
                $(this).closest('.clean-inp-wrapper').removeClass('input-focused');
            }
        });

        $('.login-step .change-login-btn').on('click', function(){
            //summarize previous steps
            //set present
            $('.login-step').find('.completed-summary,.min-header').addClass('none-i');
            $('.login-step').find('.max-content').removeClass('none-i');
            //minimize forward steps
            $('.address-step,.confirm-step,.payment-step').find('.max-content,.completed-summary').addClass('none-i');
            $('.address-step,.confirm-step,.payment-step').find('.min-header').removeClass('none-i');
        });
        $('.login-step .continue-btn').on('click', function(){
            //summarize previous steps
            $('.login-step').find('.max-content,.min-header').addClass('none-i');
            $('.login-step').find('.completed-summary').removeClass('none-i');
            //set present
            $('.address-step').find('.completed-summary,.min-header').addClass('none-i');
            $('.address-step').find('.max-content').removeClass('none-i');
            //minimize forward steps
            $('.confirm-step,.payment-step').find('.max-content,.completed-summary').addClass('none-i');
            $('.confirm-step,.payment-step').find('.min-header').removeClass('none-i');
        });
        $('#settings-drpdwn').on('click', function(e){
            $(this).parent().find('.logged-user-drpdwn').toggle();
        });
        $('.address-step .change-address-btn').on('click', function(){
            //summarize previous steps
//            $('.login-step').find('.completed-summary,.min-header').addClass('none-i');
//            $('.login-step').find('.max-content').removeClass('none-i');
            //set present
            $('.address-step').find('.completed-summary,.min-header').addClass('none-i');
            $('.address-step').find('.max-content').removeClass('none-i');
            //minimize forward steps
            $('.confirm-step,.payment-step').find('.max-content,.completed-summary').addClass('none-i');
            $('.confirm-step,.payment-step').find('.min-header').removeClass('none-i');
        });
        $('.address-step .continue-btn').on('click', function(){
            if(formCheck.addressForm($('.address-form-holder'))){
                //summarize previous steps
                $('.login-step').find('.max-content,.min-header').addClass('none-i');
                $('.login-step').find('.completed-summary').removeClass('none-i');
                $('.address-step').find('.max-content,.min-header').addClass('none-i');
                $('.address-step').find('.completed-summary').removeClass('none-i');
                //set present
                $('.confirm-step').find('.completed-summary,.min-header').addClass('none-i');
                $('.confirm-step').find('.max-content').removeClass('none-i');
                //minimize forward steps
                $('.payment-step').find('.max-content,.completed-summary').addClass('none-i');
                $('.payment-step').find('.min-header').removeClass('none-i');

                var dataObj = formCheck.getSelectedAddress($('.address-form-holder'),'regular');
                var formDispCont = $('.address-step .completed-summary .info');
                zyxCart.orderObj = dataObj;
                console.log($(formDispCont));
                console.log(dataObj);
                $(formDispCont).find('.name').text(dataObj.name);
                $(formDispCont).find('.number').text(dataObj.number);
                $(formDispCont).find('.st-address').text(dataObj.pick.street);
                $(formDispCont).find('.pincode').text(dataObj.pick.pincode);
                $(formDispCont).find('.city').text(dataObj.pick.city);
            }
        });
        $('.address-step .emerg-continue-btn').on('click', function(){
            if(formCheck.emergAddressForm($('.address-form-holder'))){
                //summarize previous steps
                $('.login-step').find('.max-content,.min-header').addClass('none-i');
                $('.login-step').find('.completed-summary').removeClass('none-i');
                $('.address-step').find('.max-content,.min-header').addClass('none-i');
                $('.address-step').find('.completed-summary').removeClass('none-i');
                //set present
                $('.confirm-step').find('.completed-summary,.min-header').addClass('none-i');
                $('.confirm-step').find('.max-content').removeClass('none-i');
                //minimize forward steps
                $('.payment-step').find('.max-content,.completed-summary').addClass('none-i');
                $('.payment-step').find('.min-header').removeClass('none-i');

                var dataObj = formCheck.getSelectedAddress($('.address-form-holder'),'emergency');
                var formDispCont = $('.address-step .completed-summary .info');
                zyxCart.orderObj = dataObj;
                console.log($(formDispCont));
                console.log(dataObj);
                $(formDispCont).find('.name').text(dataObj.name);
                $(formDispCont).find('.number').text(dataObj.number);
                $(formDispCont).find('.st-address').text(dataObj.pick.street);
                $(formDispCont).find('.pincode').text(dataObj.pick.pincode);
                $(formDispCont).find('.city').text(dataObj.pick.city);
            }
        });

        $('.address-step').on('keydown', '.error', formCheck.clearErrorEvent);

        $('.address-step #pick-up-col').on('focusout', 'textarea,input,select', function(){
            var check = $('#pick-drop-toggle').prop('checked');
            if(!check){
                var this_cls = $(this).attr('class').split(' ')[1];
                if(this_cls){
                    var that_cls = this_cls.replace('pick', 'drop');
                    var val = $(this).val();
                    $('#drop-off-col').find('.'+that_cls).val(val);
                }
            }else{

            }
        });

        $('.add-address-btn').on('click', function(){

        });

        $('.address-form-holder #pick-drop-toggle').on('change', function(){
            var val = $(this).prop('checked');
            var form = $(this).closest('.address-form-holder');
            if(!val){
                $(form).find('#drop-off-col').addClass('disabled');
                $(form).find('#drop-off-col').find('input,textarea').attr('disabled', true);
            }else{
                $(form).find('#drop-off-col').removeClass('disabled');
                $(form).find('#drop-off-col').find('input,textarea').removeAttr('disabled');
            }
        })
        $('.address-form-holder #date-wrap').on('change','.pick-up-date', function(){
            //console.log($(this).data('timepicker').getTime());
            formCheck.updateTime($('.address-form-holder'))
        });
        $('.address-form-holder #same-day-toggle').on('change', function() {
            formCheck.updateTime($('.address-form-holder'))
        });
        $('.confirm-step #place-order-btn').on('click', function(){
            var orderObj = {};
            if(zyxCart.emergency){
                orderObj = formCheck.getSelectedAddress($('.address-form-holder'),'emergency');
            }else{
                if(zyxCart.orderObj){
                    orderObj = zyxCart.orderObj;
                }else{
                    orderObj = formCheck.getSelectedAddress($('.address-form-holder'),'regular');
                }
            }
            orderObj['pick'] = JSON.stringify(orderObj['pick']);
            orderObj['drop'] = JSON.stringify(orderObj['drop']);
            var trarray = $('.confirm-step .table-holder table tbody').find('tr');
            var arry = [];
            $.each(trarray, function(ix, tr){
                var orderItem = {};
                orderItem['ts'] = $(tr).attr('ts');
                orderItem['service'] = $(tr).attr('service');
                orderItem['service_id'] = $(tr).attr('id');
                arry.push(orderItem);
//                arry.push(JSON.stringify(orderItem));
            });
            orderObj['order_list'] = JSON.stringify(arry);
            orderObj['car_id'] = $('.confirm-step .table-holder table').attr('data-id');
            orderObj['car_name'] = $('.confirm-step .table-holder table').attr('data-name');
            var couponData = {};
            if (local.load() && local.load()['clgacoup']) {
                couponData = local.load()['clgacoup'];
                couponData = JSON.parse(couponData);
            }
            if (couponData.Global) {
                $.each(couponData.Global, function(coup,msg){
                });
                orderObj['global_coupon'] = JSON.stringify(couponData.Global);
            }
            if (zyxCart.singleCoupon){
                var scp = {};
                scp[zyxCart.singleCoupon.coupon_code] = zyxCart.singleCoupon.message;
                orderObj['single_coupon'] = JSON.stringify(scp);
            }

//            console.log('')
                if(zyxCart.emergency){
                    Commons.ajaxData('place_emergency_order', orderObj,"GET", _this, _this.onOrderPlace);
                }else{
                    Commons.ajaxData('place_order', orderObj,"GET", _this, _this.onOrderPlace);
                }
        });
    },
    onOrderPlace : function(){
                $('.login-step').find('.max-content,.min-header').addClass('none-i');
                $('.login-step').find('.completed-summary').removeClass('none-i');
                $('.address-step').find('.max-content,.min-header').addClass('none-i');
                $('.address-step').find('.completed-summary').removeClass('none-i');
                $('.confirm-step').find('.max-content,.min-header').addClass('none-i');
                $('.confirm-step').find('.completed-summary').removeClass('none-i');
                //set present
                $('.payment-step').find('.completed-summary,.min-header').addClass('none-i');
                $('.payment-step').find('.max-content').removeClass('none-i');
                //minimize forward steps
//                $('.payment-step').find('.max-content,.completed-summary').addClass('none-i');
//                $('.payment-step').find('.min-header').removeClass('none-i');
                $('.login-step').find('.change-login-btn').off('click').hide();
                $('.address-step').find('.change-address-btn').off('click').hide();
    }

};

$(document).ready(function(){
    zyxCart.init();
});
