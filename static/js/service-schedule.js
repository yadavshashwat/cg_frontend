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
        
        $('body').on('submit', '#popup-search-set-holder' ,function(){
            var c_id = $(this).find('#hidden-id-box').val();
            var c_name = $(this).find('#omni-search-box').val();
            if (!c_id.length){
                return false
            }else{
                var loc = window.location.href;
                window.location = '../'+c_name.replace(/\s/g, '-');
//                window.location = loc + 'service-schedule/'+c_name.replace(" ","-");
                return false;
            }
        });
        
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
            
};




document.onreadystatechange = function () {
      Global.init();
}


