Global = {
    init:function(){
        var _this = this;
    $("[data-role=panel]").panel().enhanceWithin();  
        _this.events();
        $('#submit-button').button('disable');
    },
    events:function(){
        var _this = this;
        console.log('adding hanlder')
        $('#brand-dropdown').on('change', function(){
            var brand = $(this).val();
            console.log('p')
            Commons.ajaxData('fetch_car_list', {m_id:brand,cb_id:"Car"},"get",_this,_this.loadCarMake);
        });
        $('#make-dropdown').on('change', function(){
            console.log('p')
            var carmake = $(this).val();
            if(carmake){
                $('#submit-button').button('enable');
            }
        });
    
//    Signup link show script    
    $("#signup-link").click(function(){
    $("#login-btn").hide();
    $("#signup-link").hide();
    $("#signup-btn").css({'display':'block'});
    $("#login-link").css({'display':'block'});
    $("#name").show();
    $("#password2").show();    
    });
        
//    Signup link hide script    
    $("#login-link").click(function(){
    $("#login-btn").show();
    $("#signup-link").show();
    $("#signup-btn").css({'display':'none'});
    $("#login-link").css({'display':'none'});
    $("#name").hide();
    $("#password2").hide();    
    });        

},
    loadCarMake : function(data){
        console.log(data)
        var container = $('#make-dropdown');
        container.html('');
            var html = '<option value="choose-one" data-placeholder="true">Select Model</option>'
        $.each(data, function(ix, val){
            html += '<option value="'+val.name+'">'+val.name+'</option>';

        })
        container.html(html);
        container.selectmenu('enable');
        container.selectmenu('refresh');
//        container.json2html(data, Templates2.carMake, {append:true});
//        $.each(data, function(idx, val){
//        });
    }   

    
};




document.onreadystatechange = function () {
      Global.init();
}


