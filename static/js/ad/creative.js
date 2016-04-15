/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();
    $('.clean-inp-wrapper').off().on('focus', 'input.clean-inp-tbox', function(e){
        $(this).closest('.clean-inp-wrapper').addClass('input-focused');
    });
    $('.clean-inp-wrapper').on('focusout', 'input.clean-inp-tbox', function(e){
        if(!$(this).val() && !$(this).hasClass('perpetual')){
            $(this).closest('.clean-inp-wrapper').removeClass('input-focused');
        }
    });

    $('.form-wrapper').find('.user-cat').on('change', function(){
        var cat = $(this).val();
        var service_list = service_dict[cat];
        if(service_list && service_list.length){
            $('.form-wrapper').find('.user-service').closest('label').show();
            $('.form-wrapper').find('.user-service').html('');
            $.each(service_list, function(idx, service){
                $('.form-wrapper').find('.user-service').append('<option value="'+service[0]+'">'+service[1]+'</option>');
            });
        }else{
            $('.form-wrapper').find('.user-service').closest('label').hide();
            $('.form-wrapper').find('.user-service').html('');
        }
    });
    $('.form-wrapper').find('#form-submit').on('click', function(){
        var name = $('.form-wrapper').find('.user-name').val();
        var number = $('.form-wrapper').find('.user-number').val();
        var cat = $('.form-wrapper').find('.user-cat').val();
        var service = $('.form-wrapper').find('.user-service').val();
        if(!(name && name.length)){
            alert('Invalid Name!');
            return;
        }
        if(!(number && (number.length == 10) && !isNaN(number))){
            alert('Invalid Number.');
            return;
        }
        if($('.form-wrapper').find('.user-service').is(':visible')){
            if( !(service && service.length) ){
                alert('Select Service');
                return;
            }
        }
        var url = 'http://'+window.location.host+'/api/request_quote/';
        $.ajax({
            method:'POST',
            url:url,
            data:{name:name,number:number,category:cat,service:service}
        }).done(function(response){
            $('<div class="popup"></div>').appendTo($('body'));
            $('.popup').append('<div class="popup-content"></div>');
            $('.popup-content').append('<div class="msg-txt">Request Received. Our team will contact you shortly.</div>');
            $('.popup-content').append('<div class="close-btn">X</div>');
        });
    });
    $('body').on('click', '.popup', function(e){
        var $target = $(e.target);
        if(!$target.closest('.popup-content').length || $target.closest('.close-btn').length){
            $('.popup').remove();
        }
    });

})(jQuery); // End of use strict
