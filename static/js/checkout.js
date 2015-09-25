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
    },
    setLayout : function(){

    },
    loadStep  : function(){

    },
    eventHandlers : function(){
        $('.change-login-btn').on('click', function(){
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
        $('.add-address-btn').on('click', function(){

        });

    }

};

$(document).ready(function(){
    zyxCart.init();
});
