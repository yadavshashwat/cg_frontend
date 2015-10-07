

var Global = {
    init : function(){
        var _this = this;
        _this.setLogos();
        _this.setLayout();
        _this.eventHandlers();
        Commons.eventHandlers();
        var cookDict = local.load();
        var carSelected = null;
        if(cookDict['clgacarname']){
            $('#car-select-box').val(cookDict['clgacarname']);
        }
        $('#car-select-box').trigger('change');
        local.clearKey('clgacart');
    },
    setLogos : function(){
        $.each($('img.dealer-logo'), function(i, img){
            var dealer = $(img).attr('alt');
            var carMake = $(img).attr('data-name');
//            console.log(dealer)
            if(dealer == 'Authorized'){
                $(img).attr('src', logoMap['Authorized']+ $.trim(carMake)+'.jpg');
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
                Commons.ajaxData('add_to_cart', {'cookie':ts, 'delete':true}, "get", _this, function(){});
            }
        });

    }

}

$(document).ready(function(){
    Global.init();
});

