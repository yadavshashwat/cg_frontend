/**
 * Created with PyCharm.
 * User: vociferous
 * Date: 03/08/15
 * Time: 10:06 PM
 * To change this template use File | Settings | File Templates.
 */


var Commons = {
    ajaxData : function(name, params, type, bindObj, success_cb, fail_cb){
        var _this = this;
        var url = _this.getOrigin() + _this.URLFromName[name];
        var callType = "GET";
        if(type == "POST" || type == "GET"){
            callType = type
        }
        console.log(name)
        if(name){
            $.ajax({
                url:url,
                data:params,
                dataType:"json",
                type:callType

            }).always(function(res){
                    if(res.status){
                        bind(success_cb, bindObj, [res.result])
                    }
                });
        }
    },
    URLFromName : {
        'fetch_all_cars':'/api/fetch_all_cars/',
        'fetch_car_servicing':'/api/fetch_car_servicing/',
        'fetch_servicing_details':'/api/fetch_servicing_details/',
        'fetch_car_cleaning':'/api/fetch_car_cleaning/',
        'fetch_cleaning_details':'/api/fetch_cleaning_details/',
        'fetch_car_vas':'/api/fetch_car_vas/',
        'fetch_vas_details':'/api/fetch_vas_details/',
        'fetch_car_cleanings':'/api/fetch_all_cleaningcatservices/',
        'fetch_car_tyres':'/api/fetch_all_cleaningcatservices/'
    },
    getOrigin: function(){
        var origin = window.location.origin;
        if(origin[origin.length-1] == '/'){
            origin = origin.slice(0,-1);
        }
        return origin;
    },
    showRegisterForm : function(){
        $('.loginBox').fadeOut('fast',function(){
            $('.registerBox').fadeIn('fast');
            $('.login-footer').fadeOut('fast',function(){
                $('.register-footer').fadeIn('fast');
            });
            $('.modal-title').html('Register with');
        });
        $('.error').removeClass('alert alert-danger').html('');

    },
    showLoginForm : function(){
        $('#loginModal .registerBox').fadeOut('fast',function(){
            $('.loginBox').fadeIn('fast');
            $('.register-footer').fadeOut('fast',function(){
                $('.login-footer').fadeIn('fast');
            });

            $('.modal-title').html('Login with');
        });
        $('.error').removeClass('alert alert-danger').html('');

    },
    openLoginModal : function(){
        Commons.showLoginForm();
        setTimeout(function(){
            $('#loginModal').modal('show');
        }, 230);

    },
    openRegisterModal : function(){
        Commons.showRegisterForm();
        setTimeout(function(){
            $('#loginModal').modal('show');
        }, 230);

    },
    loginAjax : function(){
        /*   Remove this comments when moving to server*/
        $.post( "/login", function( data ) {
                if(data == 1){
                    window.location.replace("/home");
                } else {
                     shakeModal();
                }
            });

    /*   Simulate error message from the server   */
         Commons.shakeModal();

    },
    shakeModal : function(){
        $('#loginModal .modal-dialog').addClass('shake');
                 $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
                 $('input[type="password"]').val('');
                 setTimeout( function(){
                    $('#loginModal .modal-dialog').removeClass('shake');
        }, 1000 );

    },
    eventHandlers : function(){
        $('body').on('click', function(e){
            var $target = $(e.target);
            if( !$target.closest('.logged-user-drpdwn').length && !$target.closest('#settings-drpdwn').length ){
            $('.logged-user-drpdwn').hide();
            }
        });
        $('#sign-up-in-home').on('click', function(e){
//            console.log($('.modal-container'))
            $('.login-modal-container').show().animate({
                'opacity':1
            },100);//.children().hide();
//            $('.login-modal-container').find('#loginModal').show();
//            alert('p')
            $('.login-modal-container').find('#loginModal').addClass('in');
        });
        $('#sign-up-in-dash').on('click', function(e){
            $('.login-modal-container').show().animate({
                'opacity':1
            },100);//.children().hide();
            $('.login-modal-container').find('#loginModal').addClass('in');
        });
        $('.login-modal-container').on('click', function(e){
            var $target = $(e.target);
            if(!$target.closest('.modal-dialog').length && $('#loginModal').hasClass('in')){
                $('#loginModal').removeClass('in');
                $(this).animate({
                    'opacity':0
                }, 300).fadeOut(10);

            }
        });
//        $('#loginModal')
    }
};
function bind(f, obj, args)
{   //console.log('Bind-',obj, args);
    if (f){
        if(f instanceof Function){
            return f.apply(obj, args);
        }else{
            for(var fi=0;fi<f.length;fi++)
            {
                f[fi].apply(obj, args);
            }
        }
    }else
        console.log('Empty callback');

}

var Templates = {
    orderPage:{
        servicing:[{
            "tag":"div","class":"service-list-item minimized", "data-id":"${id}", "children":[
                {"tag":"div", "class":"top-row", "children":[
                    {"tag":"div", "class":"wrapper detail-wrapper", "children":[
                        {"tag":"div", "class":"detail-div", "html":function(){return "<div> Details </div><i class='fa fa-ellipsis-h'></i>";}}
                    ]},

                    {"tag":"div", "class":"wrapper header-wrapper", "children":[
                        {"tag":"div", "class":"due-div", "html":function(){return "due at : <span>"+this.odometer + ' / '+ this.Year+"</span>";}},
                        {"tag":"div", "class":"price-div", "html":function(){return "Type : <span>"+this['paid_free']+"</span>";}}
                    ]}
                ]},
                {"tag":"div", "class":"bot-row", "children":[
                    {"tag":"div", "class":"carname-div", "html":function(){return this['car_name']+" Servicing"; }},
                    {"tag":"div", "class":"parts-div", "html":function(){
                        var html = '';
//                        $.each(this['parts_replaced'], function(i, part){
//                            html += '<span>'+part+'</span>';
//                        })
                        if(this['parts_replaced'].length)
                            return "Parts Replaced : " + this['parts_replaced'].join(', ');
                        else
                            return "Parts Replaced : None" ;
                    }},
                    {"tag":"div", "class":"checks-div", "html":function(){
                        var html = '';
//                        $.each(this['regular_checks'], function(i, part){
//                            html += '<span>'+part+'</span>';
//                        })
//                        return "Regular Checks" + html;
                        if(this['regular_checks'].length)
                            return "Regular Checks : " + this['regular_checks'].join(', ');
                        else
                            return "Regular Checks : None" ;

                    }}
                ]},
                {"tag":"div", "class":"state-update none-i"}
            ]
        }],
        dealers:[{
            "tag":"div","class":"dealer-list-item","data-id":"${id}", "children":[
                {"tag":"div","class":"td-info", "children":[
                    {"tag":"div", "class":"","html":"${dealer_cat}"}
                ]},
                {"tag":"div","class":"col-item td-dealer-select", "children":[
                    {"tag":"div", "class":"dealer-checkout", "html":"Checkout"},
                    {"tag":"div", "class":"dealer-add-to-cart", "html":"Add to Cart"}
                ]},
                {"tag":"div","class":"col-item td-price", "children":[
                    {"tag":"div", "html":"${labour_price}"},
                    {"tag":"div", "html":"${parts_price}"}
                ]},
                {"tag":"div","class":"col-item td-rating", "html":""}
            ]
        }],
        cleaning:{
            cleaning_group:[{
                "tag":"div","class":"service-group-item minimized",  "children":[
                    {"tag":"div","class":"wrapper header-wrapper", "children":[
                        {"tag":"div", "class":"top-row", "children":[
                        {"tag":"div", "class":"brand-div", "html":function(){return "Dealer : <span>"+this.name+"</span>";}},
                        {"tag":"div", "class":"price-div", "html":function(){return "Number : <span>"+this.list.length+"</span>";}}
                        ]},
                    ]},
                    {"tag":"div","class":"wrapper detail-wrapper", "children":[
                        {"tag":"div", "class":"bot-row", "html":function(){
                        return json2html.transform(this.list, Templates.orderPage.cleaning.cleaning_item)
                        }}
                    ]},

                ]
            }],
            cleaning_item:[{
                "tag":"div", "class":"service-list-item", "data-id":"${id}", "children":[
                    {"tag":"div", "class":"header-wrapper", "children":[
                        {"tag":"div", "class":"", "html":function(){return this.Category}}
                    ]},
                    {"tag":"div", "class":"state-update none-i"}
                ]
            }]
        },
        packages:[{
            "tag":"div","class":"dealer-list-item","data-id":"${id}", "children":[
                {"tag":"div","class":"td-info", "children":[
                    {"tag":"div", "class":"","html":"${service}"}
                ]},
                {"tag":"div","class":"col-item td-dealer-select", "children":[
                    {"tag":"div", "class":"dealer-checkout", "html":"Checkout"},
                    {"tag":"div", "class":"dealer-add-to-cart", "html":"Add to Cart"}
                ]},
                {"tag":"div","class":"col-item td-price", "children":[
                    {"tag":"div", "html":"${Price Labour}"},
                    {"tag":"div", "html":"${Price Parts}"}
                ]},
                {"tag":"div","class":"col-item td-rating", "html":""}
            ]
        }]
    }
};

if (typeof String.prototype.toTitleCase != 'function') {
    String.prototype.toTitleCase = function (){
        return (this[0].toUpperCase() + this.slice(1));
    };
}