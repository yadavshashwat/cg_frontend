var Global = {
    init:function(){
        var _this = this;
//    $("[data-role=panel]").panel().enhanceWithin();  
        _this.events();
        
        //$('#submit-button').button('disable');


    },
    events:function(){
        var _this = this;
        if(_this.eventsAdded)
            return false;
        _this.eventsAdded = true;
        console.log('adding hanlder')    
        
        if(_this.carSelected){
            $("#selected-details").show();
            $("#selected-details").find('.c-name').html(_this.carSelected.name);
            $("#selected-details").find('.c-make').html(_this.carSelected.make);
        }else{
            _this.generateCarSelect();
        }
        
        $(document).ready(function() {
            console.log( "ready!" );
            Commons.ajaxData('fetch_car_servicing_old', {c_id : _this.carSelected.id},"get", _this, _this.loadParts);
        });
        
        $('#selected-details .edit-btn').on('click', function(e){
            Global.generateCarSelect();
        });
        
//        $('.radio-btn-div .vehicleRadio').on('click', function(e){
//            console.log('v_type change detected');
//            var v_type = $(this).attr('value');
//            var container = $('#brandSelect');
//            container.html('');
//            var carBrands = ['Chevrolet','Fiat','Ford','Honda','Hyundai','Mahindra','Maruti Suzuki','Nissan','Renault','Skoda','Tata','Toyota','Volkswagen'];
//            var bikeBrands = ['Bajaj','Hero','Honda','KTM','Royal Enfield','Suzuki','TVS','Yamaha'];
//            html = '<option selected disabled>Select brand</option>';
//            if (v_type=='Car'){
//                for (i=0; i<carBrands.length; i++){
//                    html += '<option>' + carBrands[i] + '</option>';
//                }
//            }
//            else if (v_type=='Bike'){
//                for (i=0; i<bikeBrands.length; i++){
//                    html += '<option>' + bikeBrands[i] + '</option>';
//                }
//            }
//        container.html(html);
//        });
//        
//        $('.vehicle-dropdown-div #brandSelect').on('change', function(){
//            console.log('brand change detected');
//            var v_brand = $(this).val();
//            var v_type = '';
//            if (document.getElementById('carRadio').checked){
//                v_type = v_type+'Car';
//            }
//            else{
//                v_type = v_type+'Bike';
//            }            
//            console.log(v_brand);
//            Commons.ajaxData('fetch_car_list', {m_id:v_brand,cb_id:v_type},"get",Global,Global.loadCarMake);
//        });
//        
//        $('.schedule-submit').on('click', function(){
//            console.log('navigating to different car schedule');
//            var c_id = $('.vehicle-dropdown-div #modelSelect option:selected').attr("data-id");
//            console.log(c_id);
////            Commons.ajaxData('fetch_car_servicing_old', {c_id : _this.carSelected.id},"get", _this, _this.loadParts);
//            var carBrand = $('.vehicle-dropdown-div #brandSelect').val().replace(" ","-");
//            var carMake = $('.vehicle-dropdown-div #modelSelect option:selected').val().replace(" ","-");
//            window.location.replace('../'+carBrand+'-'+carMake);
//        });

    },

    loadParts : function(data){
        console.log(data)
//        get list of parts
        var parts_list = [];
        $.each(data, function(idx, val){
            for (part in val.parts_replaced) {
                var new_part = val.parts_replaced[part];
                if (parts_list.indexOf(new_part) == -1 && new_part!="No part replaced") {
                    parts_list.push(new_part);
                }
            }
        });
//        generate html table
        var container = $('.section-box .schedule-table');
        container.html('');
        var html = '<table><tr><td>';
        for (part in parts_list) {
            html += '<th>' + parts_list[part] + '</th>';
        }
        $.each(data, function(idx, val){
            html += '<tr>';
            html += '<th>' + String(val.odometer.toString()) + ' km</th>';            
            for (part in parts_list) {
                if (val.parts_replaced.indexOf(parts_list[part]) != -1) {
                    html += '<td>Replace</td>';
                }
                else{
                    html += '<td></td>';
                }
            }
            html += '</tr>';
        });
        html += '</td></tr></table>';
        container.show().html(html);
    },
    
    generateCarSelect : function(){
        var _this = this;
        var modalCarContent = '<form class="search-set-holder" id="popup-search-set-holder">'+
                '<div class="omnibox-holder" id="popup-omnibox-holder">'+
                    '<input type="hidden" id="hidden-id-box" name="c_id" style="display: none;" />'+
                    '<input type="text" id="omni-search-box" class="omni-search-box" placeholder="Select Your Car" autocomplete="off">'+
                    '<i class="icon fa fa-search"></i>'+
                    '<label for="omni-search-box" class="omni-drop-box" style="display: none;">'+
                        '<ul>'+
                        '</ul>'+
                    '</label>'+
                '</div>'+
                '<div class="submit-btn-holder purple-btn-1" id="order-submit-holder">'+
                    '<button class="form-submit-btn" type="submit">Get Schedule</button>'+
                '</div>'+
            '</form>';
        $('.service-schedule-body').append(_this.genericModal(modalCarContent, false));
        var omniBoxHolder = $('#popup-omnibox-holder');
        if(omniBoxHolder.length){
            $(omniBoxHolder).materialAutoSuggest({
                input:".omni-search-box",
                dropdown:".omni-drop-box",
                data:_this.carData
            });
        }
        $('.modal-container .modal-content').addClass('search-box-modal');
        var w = $('.modal-container .modal-content').width();
        var h = $('.modal-container .modal-content').height();
        console.log(w,h);
        $('.modal-container .modal-content').css({
            'top': ($(window).innerHeight() - h)/2,
            'left':($(window).innerWidth() - w)/2
        });
    },
    
    genericModal : function(popupHTML, closeFlag){
        var scrn_ht = $(window).innerHeight();
        var scrn_wd = $(window).innerWidth();
        var _body = $(document).find('.order-body');
        _body.find('.modal-container').hide();
        _body.find('.modal-container').not('.login-modal-container').remove();
        var container = $("<div></div>").addClass('modal-container');
        var overlay = $("<div></div>").addClass('modal-overlay');
        var content = $("<div></div>").addClass('modal-content').append('<i class="fa fa-times-circle"></i>');
        container.css({
            height : scrn_ht,
            width : scrn_wd
        });
        content.html(popupHTML);
        container.append(overlay).append(content);
        
        if(closeFlag){
         container.find('.modal-content').append('<i class="close-btn fa fa-close"></i>');
        }
        return container;
    }
    
    
//    loadCarMake:function(data){
//        console.log('function reached');
//        console.log(data);
//        var container = $('#modelSelect');
//        container.html('');
//        var html = '<option selected disabled>Select model</option>';
//        $.each(data, function(ix, val){
//            html += '<option data-id="'+val.id+'" value="'+val.name+'">'+val.name+'</option>';
//        })
//        container.html(html);
//    },

    
};




document.onreadystatechange = function () {
      Global.init();
}


