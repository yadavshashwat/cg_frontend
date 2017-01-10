

var Commons = {
    ajaxData : function(name, params, type, bindObj, success_cb, fail_cb, loadingSelector){
        var _this = this;
        var url = _this.getOrigin() + _this.URLFromName[name];
        var callType = "GET";
        if(type == "POST" || type == "GET"){
            callType = type
        }
        console.log(name)

        if(name){
            if(loadingSelector){
                $(loadingSelector).show();
            }

            $.ajax({
                url:url,
                data:params,
                dataType:"json",
                type:callType

            }).always(function(res){
                    if(loadingSelector){
                        $(loadingSelector).hide();
                    }
                    console.log(res)
                    if(res && res.status){
                        bind(success_cb, bindObj, [res.result])
                    }else{
                        bind(fail_cb, bindObj)
                    }
                });
        }
    },
    
    URLFromName : {
        'get_type_make':'/api/get_type_make/',
        'get_make_model':'/api/get_make_model/',
        'get_jobs_vehicle':'/api/get_jobs_vehicle/',
        'add_job_cart':'/api/add_job_cart/',
        'send_otp_new':'/api/send_otp_new/',
        'send_otp_booking':'/api/send_otp_booking/',
        'get_location':'/api/get_location/',
        'post_lead':'/api/post_lead/',
        'post_message':'/api/post_message/'

    },

    getOrigin: function(){
        var origin = window.location.origin;
        if(origin[origin.length-1] == '/'){
            origin = origin.slice(0,-1);
        }
        return origin;
    },



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

var local = {
    save:function(key, value){
        var stringKey = 'cgcart';
        if(key){
            stringKey = key;
        }
        var stringVal = value;
        if(value instanceof Object){
            stringVal = JSON.stringify(value);
        }
        var dc_old = document.cookie;
        document.cookie = key+"="+stringVal+"; path=/";
    },
    load:function(){
        var dc_str = document.cookie;
        var dc_arr = dc_str.split(';');
        var dict = {};
        $.each(dc_arr, function(idx, val){
            dict[val.split('=')[0].trim()] = val.split('=')[1]
        });
        return dict;
    },
    clearKey:function(key){
        var stringKey = 'cgcart';
        if(key){
            stringKey = key;
        }
        document.cookie = stringKey+'=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        document.cookie = stringKey+'=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    },
    clearAll:function(){
    }
};




