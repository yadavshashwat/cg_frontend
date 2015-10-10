Global = {
    init:function(){
        var _this = this;
    $("[data-role=panel]").panel().enhanceWithin();  
        _this.events();
        //$('#submit-button').button('disable');
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