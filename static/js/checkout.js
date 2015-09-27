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
    $('#date-time-pair .pick-up-time').timepicker({
        'showDuration': true,
        'timeFormat': 'g:ia'
    });

    $('#date-time-pair .pick-up-date').datepicker({
        'format': 'm/d/yyyy',
        'autoclose': true
    });

    // initialize datepair
//    var basicExampleEl = document.getElementById('date-time-pair');
//    var datepair = new Datepair(basicExampleEl);

    },
    setLayout : function(){

    },
    loadStep  : function(){

    },
    eventHandlers : function(){
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

                var dataObj = formCheck.getSelectedAddress($('.address-form-holder'));
                var formDispContainer = $('.address-step .completed-summary');

            }
        });

        $('.address-step').on('keydown', '.error', formCheck.clearErrorEvent);

        $('.address-step #pick-up-col').on('focusout', 'textarea,input,select', function(){
            var check = $('#pick-drop-toggle').prop('checked');
            if(check){
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
            if(val){
                $(form).find('#drop-off-col').addClass('disabled');
                $(form).find('#drop-off-col').find('input,textarea').attr('disabled', true);
            }else{
                $(form).find('#drop-off-col').removeClass('disabled');
                $(form).find('#drop-off-col').find('input,textarea').removeAttr('disabled');
            }
        })


    }

};

$(document).ready(function(){
    zyxCart.init();
});
