

var Global = {
    init : function(){
        var _this = this;
        _this.setLogos();
        _this.setLayout();
        _this.eventHandlers();
        Commons.eventHandlers();
        var cookDict = local.load();
        console.log(cookDict)
        var carSelected = null;
        if($('#emergency-table tbody').find('tr').length){
            $('#emergency-table').show();
            $('.emergency-msg').show();
        $('#car-select-box').css({'pointer-events':'none'}).hide();
        }else{
        if(cookDict['clgacarname']){
            $('#car-select-box').val(cookDict['clgacarname']);
        }
        $('#car-select-box').trigger('change');
        }
        if(Global.loginFlag){
            local.clearKey('clgacart');
            local.clearKey('clgacartaddi');
        }
           Commons.ajaxData('fetch_additional_details', {}, "GET", _this, _this.updateCartItems );

    },
    setLogos : function(){
        $.each($('img.dealer-logo'), function(i, img){
            var dealer = $(img).attr('alt');
            var carMake = $(img).attr('data-name');
            var car_bike = $(img).attr('data-flag');
            if(!car_bike)
                car_bike = 'Car';
//            console.log(dealer)
            if(dealer == 'Authorized'){
                $(img).attr('src', logoMap['Authorized '+car_bike]+ $.trim(carMake)+'.jpg');
            }else{
                $(img).attr('src', logoMap[dealer]);
//                $(img).attr('src', )
            }
        });
    },
    setLayout : function(){
        var _this = this;
    },
    eventHandlers : function(){
        var _this = this;
        $('#car-select-box').on("change", function(){
            var carVal = $(this).val();
//            console.log(carVal);
            $('table.cart-table').hide();
            $('table.cart-table[data-id="'+carVal+'"]').show();
                var c_name = $(this).find('option:selected').attr('data-name');
                var c_id = $(this).find('option:selected').attr('data-id');
//            console.log(c_name, c_id);
            if(c_name && c_name.length && c_id && c_id.length){
                local.save('clgacarid',c_id);
                local.save('clgacarname',c_name);
            }
        });
        $('#settings-drpdwn').on('click', function(e){
            $(this).parent().find('.logged-user-drpdwn').toggle();
        });

        $('.table-holder').on('click', '.delete-icon', function(e){
            var ts = $(this).closest('tr').attr('ts');
            $(this).closest('tr').remove();
            if(ts && ts.length){
    //            http://local.clickgarage.in/api/add_to_cart/?cookie=1444236368751&delete=true
                console.log($(this).closest('tr').hasClass('emergency'));
                if($(this).closest('tr').hasClass('emergency')){
                    ts = ts+'*emergency';
                }
                Commons.ajaxData('add_to_cart', {'cookie':ts, 'delete':true}, "get", _this, function(){});
            }
        });
        $('.table-holder').on('click', '.max-min', function(e){
            var minDiv = $(this).closest('.additional');
            if(minDiv.hasClass('minimized')){
                minDiv.removeClass('minimized').addClass('maximized');
            }else if(minDiv.hasClass('maximized')){
                minDiv.removeClass('maximized').addClass('minimized');
            }else{
                minDiv.addClass('minimized');
            }
        });
        $('.coupon-holder').on('click', '.apply-div', function(e){
                var elem = $(this);
                elem.addClass('applied')
                var coupon = document.getElementById("coupon_code").value.toUpperCase();
                var container = $('.coupon-holder .coupon-message');
                container.html('');
                //ccode = String(coupon.textContent)
                //window.alert(coupon);

                Commons.ajaxData('apply_coupon', {c_cd:coupon},"get",_this, eval("_this.loadCoupon"));
        });


        if(!Global.loginFlag){
            $('.checkout-btn.login-in').on('click', function(){
                $('#sign-up-in-dash').click();
            });
        }
    },



    loadCoupon : function(data) {
        //console.log(res)
        console.log(data)
        //if (length(data)){
        //
        //}
        if (data.status) {
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

        var container = $('.coupon-holder .coupon-message');
        container.html('');
        var html = '<span class="message-test">'+data.message+'</span>';
        var couponData = {}
        if (local.load() && local.load()['clgacoup']) {
            couponData = local.load()['clgacoup'];
            couponData = JSON.parse(couponData);
        }
        if(0){
            if (!couponData.Global) {
                console.log('no data')
                couponData.Global = {}
                couponData.Global[data['coupon_code']] = data['message']
            }
            else {
                if (!couponData.Global[data['coupon_code']]) {
                    couponData.Global[data['coupon_code']] = data['message']
                } else {
                    //already applied
                }
            }
        }
        couponData['Singleton'] = {};
        couponData.Singleton[data['coupon_code']] = data['message'];

        local.save('clgacoup', encodeURIComponent(JSON.stringify(couponData)));
        $('.cart-table:visible').find('.price-div').each(function(){
            var p_vendor = $(this).attr('data-vendor');
            var p_service = $(this).attr('data-service');
            var car_bike = $(this).attr('data-type');
            if(p_vendor && p_vendor != 'Authorized' && (p_service.toLowerCase() == c_service.toLowerCase()) ){
                if( (car_bike.toLowerCase() == c_cb.toLowerCase()) && (p_vendor.toLowerCase() == c_vendor.toLowerCase()) ){
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
        container.html(html);
    }else{

        }
    },
    updateCartItems : function(data){
        $.each(data, function(ts, iData){
            if(iData.additional_data){
                if( $('.table-holder').find('tr[ts="'+ts+'"]') && $('.table-holder').find('tr[ts="'+ts+'"]').length ){
                    var trDiv = $('.table-holder').find('tr[ts="'+ts+'"]').eq(0).find('td.detail .additional');
                    console.log(iData.additional_data)
                    var html_feat = '';
                    var html_custom = '';
                    var html_address = '';
                    $.each(iData.additional_data, function(feat,val){
                        if(feat == 'Custom Requests' && val && val.length){
                            html_custom = '<div>Custom Requests : <span class="cust-feat">'+val+'</span></div>';
                        }else if(feat == 'Damage Type'){
                            if(val && val.length)
                                html_feat = '<div>Damage Type : <span class="cust-feat">'+val+'</span></div>';
                        }else if(feat == 'Selected Authorized'){
                            html_address = '<div>Dealer Name : <span class="d-name">';
//                            console.log(val.name)
                            if(val.name){
                                html_address += val.name
                            }
                            html_address += '</span><br/>Dealer Address : <span  class="d-address">';
                            if(val.address){
                                html_address += val.address
                            }
                            html_address += '</span></div>';
                        }else{
                            if(val && val != 'false'){
                                html_feat += '<span class="ad-feat">'+feat+'</span>';
                            }
                        }
                    });
                    console.log(html_address)
                    if(html_feat.length)
                        html_feat = '<div> Additional Requests : '+html_feat+'</div>';
                    else
                        html_feat = '<div> Additional Requests : None</div>';
//                    $(trDiv).text(JSON.stringify(iData.additional_data));
                    $(trDiv).html(html_feat+html_custom+html_address)
                    if($(trDiv).height() > 40){
                        $(trDiv).addClass('minimized').append('<i class="fa max-min"></i>');
                    }
                }
            }
        });
    }

}

$(document).ready(function(){
    Global.init();
});

