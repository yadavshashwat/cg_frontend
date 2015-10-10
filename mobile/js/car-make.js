var Global = {
eventHandlers:function(){
    var _this = this;
    var classy = $("#select-custom-22").val();
    $('#submit-button').on('click', function(){
        Commons.ajaxData('fetch_car_list', {m_id:classy,cb_id:"Car"},"get",_this,this.loadCarMake )
    });                                                 
},
//http://local.clickgarage.in/api/fetch_car_list/?cb_id=Bike&m_id=Honda
loadCarMake : function(data){
//        console.log(data)
        var container = $('.ui-field-contain #make-list');
        container.html('');
        container.json2html(data, Templates2.carMake, {append:true});
//        container.append(json2html.transform(data,Templates.orderPage.services));
        $.each(data, function(idx, val){
        });
}   
}

// ${id}

var Templates2 = {
    carMake:{
        "tag":"option", "value":"1", "html":function(){return this.name;}
         }
}

//Global.eventHandlers();