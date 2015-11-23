/**
 * Created with PyCharm.
 * User: vociferous
 * Date: 25/07/15
 * Time: 7:30 PM
 * To change this template use File | Settings | File Templates.
 */

var Global = {
    init:function(){
        var jsslider = null;
        var _this = this;
        _this.setLayout();
        _this.jssor_1_slider_init();
        var cityBoxHolder = $('#home-citybox-holder');
        if(cityBoxHolder.length){
            $(cityBoxHolder).materialDropDown({
                input:".city-search-box",
                dropdown:".city-drop-box"
            });
        }
        var omniBoxHolder = $('#home-omnibox-holder');
        console.log(omniBoxHolder)
        if(omniBoxHolder.length){
            $(omniBoxHolder).materialAutoSuggest({
                input:".omni-search-box",
                dropdown:".omni-drop-box",
                data:_this.carData
            });
        }
        _this.eventHandlers();
        Commons.eventHandlers();
        $('body').scrollTop(0);
        _this.autosliderObj.tmout = setInterval(function(){
            $('#point'+_this.autosliderObj.presentID).click();
            _this.autosliderObj.presentID += 1;
            if(_this.autosliderObj.presentID > 3){
                _this.autosliderObj.presentID = 1;
            }
        }, 2000);
        console.log(Global.logReq)
        if(Global.logReq){
            console.log('true')
            $('#sign-up-in-home').click();
        }
    },
    autosliderObj : {
        tmout:null,
        presentID:1
    },
        setLayout:function(){
        var scrn_ht = $(window).innerHeight();
        var scrn_wd = $('body').innerWidth();
        $('body').css({
            'height':scrn_ht
        });
        if(scrn_ht < 614){
            scrn_ht = 614
        }
        $('.pane').css({
            height:scrn_ht,
            width:scrn_wd
        });
        var searchContentHolder = $('.search-pane').find('.content-holder');
        var givenHt = searchContentHolder.outerHeight();
        var reqd_offset = (scrn_ht - givenHt)/2-40;
        searchContentHolder.css({
           'marginTop':reqd_offset
        });

         var asr = 1440/900;
         var scr_asr = scrn_wd/scrn_ht;

            /*breaks if height > 900
            * breaks if width <
            * */
        //video set
            console.log(scr_asr, asr)
         if(scr_asr > asr){
        if(scrn_ht > 850){
            var offBottom = scrn_ht-850;
//            console.log(offBottom)

            offBottom =  -230 + offBottom;
//            console.log(offBottom)
            if(offBottom > 0){
                offBottom = 0
            }
//            console.log(offBottom)
            $('.search-pane').find('.overlay-video video').css({
                'bottom': offBottom
            }).attr('data-init', offBottom);
        }

        if(scrn_ht > 1080){
            $('.search-pane').find('.overlay-video video').css({
                'width':'100%'
            })
        }


        $('.search-pane').find('.overlay-image img').css({
            'width':'100%',
            'height':'auto'
        });
        var img_ht = $('.search-pane').find('.overlay-image img').outerHeight();
        var img_bot = $('.search-pane').find('.overlay-image img').css('bottom').split('px')[0];
             img_bot = parseInt(img_bot)
         if(scrn_ht > (img_ht+img_bot) ){
            var offBottom = scrn_ht - img_ht;
//            offBottom =  -280 + offBottom;
//                 console.log(scrn_ht, offBottom, (offBottom-scrn_ht))
            if(offBottom > 0){
                offBottom = 0
            }
            $('.search-pane').find('.overlay-image img').css({
                'bottom': offBottom
            }).attr('data-init', offBottom);
         }

         }else{
            $('.search-pane').find('.overlay-image img').css({
                'height':'100%',
                'width':'auto',
                'bottom':'0'
            }).attr('data-init', 0);
         }

//        var reqd_offset = scrn_ht/2 - 50;
//        $('#home-search-set-holder').css({
//            'marginTop':reqd_offset
//        });
        $('#workflow-box').css({
            'line-height': (scrn_ht)+'px'
        });
        var toppy = $('.lined-box.workflow-box .pusher-wrapper').position().top;
        $('.lined-box.preview-box .wrapper').css({
            'top':toppy
        });
            
        //    Slider carousel
//        $("#owl-demo").owlCarousel({
//            console.log('carousel js reached');
//            autoPlay: 3000, //Set AutoPlay to 3 seconds
//            navigation : true, // Show next and prev buttons
//            slideSpeed : 300,
//            paginationSpeed : 400,
//            singleItem:true  
//        });    


//        $('#preview-box').find('')
    },
    jssor_1_slider_init:function() {
        
            console.log('slider function');
            
            var jssor_1_SlideshowTransitions = [
              {$Duration:900,$Opacity:2}
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $FillMode: 5,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            jsslider = jssor_1_slider;
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 640);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", $Jssor$.$WindowResizeFilter(window, ScaleSlider));
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //responsive code end
        },
    eventHandlers:function(){
        $(window).on('resize', function(){
            Global.setLayout();
        })
        $(window).on('scroll', function(e){
            var scrn_ht = $(window).innerHeight();
            var scrollTop = $('body').scrollTop();
//            var initBot = $('.search-pane').find('.overlay-video video').attr('data-init');
            var initBot = $('.search-pane').find('.overlay-image img').attr('data-init');
            initBot = parseInt(initBot);
            if(!initBot || isNaN(initBot)){
                initBot = 0
            }
            var toScrollBot = initBot - scrollTop*0.5;
//            console.log(toScrollBot, scrn_ht)
//            if(toScrollBot < scrn_ht){
//                $('.search-pane').find('.overlay-video video').css({
//                    'bottom':toScrollBot
//                });
//            }
            if(toScrollBot < scrn_ht){
                $('.search-pane').find('.overlay-image img').css({
                    'bottom':toScrollBot
                });
            }

            var toScrollTop = scrollTop - (scrn_ht*2);
            if(toScrollTop >0 && toScrollTop < scrn_ht){
                toScrollTop = toScrollTop*0.5;
                $('.features-pane').find('.overlay-image img').css({
                    'bottom':(0-toScrollTop)
                });
            }else if(toScrollTop < 0 ){
//                $('.features-pane').find('.overlay-image img').animate({
//                    'bottom':"0"
//                },300);
            }
        });

        function DisplayPoint(point){
            var preview = $('.preview-box');
//            console.log(preview.find('.detail-'+point))
//                console.log(preview.find('.detail-'+point).is(':visible'));
            if( !preview.find('.detail-'+point).is(':visible') ){
//                console.log(preview.find('.detail:visible'));
                preview.find('.detail:visible').animate({
                    'left':-100,
                    'opacity':0
                }, 300, function(){
                    $(this).hide();
                });
                preview.find('.detail-'+point).show().css({
                    'left':100
                }).animate({
                    'left':0,
                    'opacity':1
                }, 300, function(){
                });
            }
        }
        $('.workflow-box .marker-point').on('click', function(e){
            if(e.screenX && e.screenX != 0 && e.screenY && e.screenY != 0){
                clearInterval(Global.autosliderObj.tmout);
            }
            var cls = $(this).attr('id');
            DisplayPoint(cls);
            $(this).closest('.workflow-box').find('#pusher').removeClass().addClass(cls);
            e.stopPropagation();
        });
        $('.workflow-box .text-holder').on('click', function(e){
            if(e.screenX && e.screenX != 0 && e.screenY && e.screenY != 0){
                clearInterval(Global.autosliderObj.tmout);
            }
            var cls = $(this).attr('data-id')
            DisplayPoint(cls);
            $(this).closest('.workflow-box').find('#pusher').removeClass().addClass(cls);
        });
        $('#settings-drpdwn').on('click', function(e){
            $(this).parent().find('.logged-user-drpdwn').toggle();
        });
        $('#home-search-form').on('submit', function(e){
            console.log('sumbit button clicked')
            var c_id1 = $(this).find('#hidden-id-box').val();
            var c_name1 = $(this).find('#omni-search-box').val();
            var c_id2 = $(this).find('#hidden-id-box2').val();
            var c_name2 = $('#brandSelect option:selected').val() + " " + $('#modelSelect option:selected').val();
            var c_id = "";
            var c_name = "";
            if (c_id2.length && !c_id1.length) {
                console.log('going for box1')
                c_id = c_id + c_id2;
                c_name = c_name + c_name2;
                console.log("c_id: " + c_id)
                console.log("c_name: " + c_name)
            }else{
                console.log('going for box2')
                c_id = c_id + c_id1;
                c_name = c_name + c_name1;
            }   
            if (!c_id.length){
                return false
            }else{
                var loc = window.location.href;
                loc = loc.split('.in/')[0]+'.in/';
                local.clearKey('clgacart');
                local.save('clgacarid',c_id);
                local.save('clgacarname',c_name);
                window.location = loc + 'order/?c_id='+c_id;
//               $(this).find('#omni-search-box').remove();
                return false;
            }
        });
        $('.learn-more').on('click', function(e){
            $('body').animate(
                {'scrollTop':$('.search-pane').outerHeight()},
                500
            );
        });
        $('.menu-item.fl.hw').on('click', function(e){
            $('body').animate(
                {'scrollTop':$('.search-pane').outerHeight()},
                500
            );
        });
        $('.menu-item.fl.au').on('click', function(e){
            $('body').animate(
                {'scrollTop':$('.steps-pane').outerHeight()+$('.search-pane').outerHeight()+$('.android-pane').outerHeight()},
                500
            );
        });
        $('.footer-hw').on('click', function(e){
            $('body').animate(
                {'scrollTop':$('.search-pane').outerHeight()},
                500
            );
        });
        $('.footer-au').on('click', function(e){
            $('body').animate(
                {'scrollTop':$('.steps-pane').outerHeight()+$('.search-pane').outerHeight()+$('.android-pane').outerHeight()},
                500
            );
        });
        $('.radio-btn-div .vehicleRadio').on('click', function(e){
            console.log('v_type change detected');
            var v_type = $(this).attr('value');
            var container = $('#brandSelect');
            container.html('');
            var carBrands = ['Chevrolet','Fiat','Ford','Honda','Hyundai','Mahindra','Maruti Suzuki','Nissan','Renault','Skoda','Tata','Toyota','Volkswagen'];
            var bikeBrands = ['Bajaj','Hero','Honda','KTM','Royal Enfield','Suzuki','TVS','Yamaha'];
            html = '<option selected disabled>Select brand</option>';
            if (v_type=='Car'){
                for (i=0; i<carBrands.length; i++){
                    html += '<option>' + carBrands[i] + '</option>';
                }
            }
            else if (v_type=='Bike'){
                for (i=0; i<bikeBrands.length; i++){
                    html += '<option>' + bikeBrands[i] + '</option>';
                }
            }
        container.html(html);
        });
        $('.vehicle-dropdown-div #brandSelect').on('change', function(){
            console.log('brand change detected');
            var v_brand = $(this).val();
            var v_type = '';
            if (document.getElementById('carRadio').checked){
                v_type = v_type+'Car';
            }
            else{
                v_type = v_type+'Bike';
            }            
            console.log(v_brand);
            Commons.ajaxData('fetch_car_list', {m_id:v_brand,cb_id:v_type},"get",Global,Global.loadCarMake);
        });
        $('.vehicle-dropdown-div #modelSelect').on('change', function(){
            console.log('model change detected');
            var c_id = $('option:selected', this).attr("data-id");
            console.log(c_id);
            document.getElementById('hidden-id-box2').value = c_id;            
        });
    },
    paneScrolls:function(){

    },
    
    loadCarMake:function(data){
        console.log('function reached');
        console.log(data);
        var container = $('#modelSelect');
        container.html('');
        var html = '<option selected disabled>Select model</option>';
        $.each(data, function(ix, val){
            html += '<option data-id="'+val.id+'" value="'+val.name+'">'+val.name+'</option>';
        })
        container.html(html);
//        container.selectmenu('enable');
//        container.selectmenu('refresh');
//        container.json2html(data, Templates2.carMake, {append:true});
//        $.each(data, function(idx, val){
//        });
    },
    
    carData:null
};

//var Plugins = {
//    materialDropDown : function(options){
//        if(options.input && options.dropdown){
//            this.input = options.input;
//            this.dropdown = options.dropdown;
//            $(input).off.on('click', function(){
//                $(dropdown).
//            })
//        }
//
//    }
//}

$(document).ready(function(){
    Global.init();
    
});