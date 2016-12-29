document.onreadystatechange = function () {
    Global.init();
}

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
        console.log('adding hanlder')

        $('.order-page .desktop-list .service-item').on('click', function(e){
            $(' .desktop-list  .service-item').removeClass('selected');
            $(' .desktop-list  .service-item:hover').addClass('selected');
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





