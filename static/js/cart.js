

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
    },
    setLogos : function(){
        $.each($('img.dealer-logo'), function(i, img){
            var dealer = $(img).attr('alt');
            var carMake = $(img).attr('data-name');
            console.log(dealer)
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
            console.log(carVal);
            $('table.cart-table').hide();
            $('table.cart-table[data-id="'+carVal+'"]').show();
        });
        $('#settings-drpdwn').on('click', function(e){
            $(this).parent().find('.logged-user-drpdwn').toggle();
        });

    }

}

$(document).ready(function(){
    Global.init();
});

