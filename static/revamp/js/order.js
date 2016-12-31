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
        console.log('adding hanlder');

        $('#services .service-card').on('click' ,function(e){
            // console.log('check')
            // $(this).addClass('open');
            var classy = $(this).attr('data-class');
            console.log(classy);
            if(classy == 'servicing'){
                $('.nav-services').find('.car-servicing').addClass('selected');
                $('.nav-services').find('.bike-servicing').addClass('selected');
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
                // $('.navbar-services').find('bike-repairing').addClass('selected');
            }else if(classy =='denting'){
                $('.nav-services').find('.car-denting').addClass('selected');
                // $('.navbar-services').find('bike-repairing').addClass('selected');
            }else{
                return;
            }
            $('#services').hide();
            $('.order-page .nav-services').show();
            $('#jobs').show();
        });

        $('.order-page .desktop-list .service-item').on('click', function(e){
            $(' .desktop-list  .service-item').removeClass('selected');
            $(' .desktop-list  .service-item:hover').addClass('selected');
        });

        $('#jobs .job').on('click','.closed-more-info', function(e){
            var parent = $(this).closest('.job');
            // parent.find('.info-div').removeClass('invisible');
            // parent.find('.info-div').addClass('visible');
            // });
            
            parent.find('.closed-more-info').addClass('open-more-info').removeClass('closed-more-info');
            parent.find('.service-name').addClass('service-name-border');
            parent.find('.info-div').slideDown('slow', function() {});

        });

        $('#jobs .job').on('click','.open-more-info' ,function(e){
            // console.log('check')
            var parent = $(this).closest('.job');
            // $(this).addClass('open');
            // parent.find('.info-div').removeClass('visible');
            // parent.find('.info-div').addClass('invisible');
            parent.find('.open-more-info').addClass('closed-more-info').removeClass('open-more-info');
            parent.find('.info-div').slideUp('slow', function() {
                parent.find('.service-name').removeClass('service-name-border');
            });
        });

        // $('.service-card').click(function(){
        //     var b = $('#cart').height() + 30;
        //     console.log(b)
        //         $("#jobs").height(b)
        // });


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










        // $(document).ready(function (event,data) {
        //     Commons.ajaxData('get_type_make', {vehicle_type: "Car"}, "get", _this, _this.loadBrands);
        // });

    },

    // loadBrands:function(data){
    //         var container = $('#brand-select');
    //         container.html('');
    //         var html = '<select id="brand-select-list">';
    //         html += '<option value="" disabled selected>Make</option>';
    //         $.each(data, function(ix, val){
    //             // html += '<option value="' + val.make + 'data-placeholder="true" data-icon="../../static/revamp/img/Brands/Car/'+ val.make +'.png" class="circle">'+ val.make + '</option>'});
    //             html += '<option value="' + val.make + 'data-placeholder="true" data-icon="../../static/revamp/img/Brands/Car/'+ val.make +'.png" class="left circle">'+ val.make + '</option>'});
    //
    //             // html += '<option value="' + val.make + 'data-placeholder="true" >'+ val.make + '</option>'});
    //
    //         html += '<select>';
    //         container.html(html);
    //         container.find('select').material_select();
    //     },


};





