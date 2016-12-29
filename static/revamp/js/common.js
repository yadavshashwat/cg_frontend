

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

