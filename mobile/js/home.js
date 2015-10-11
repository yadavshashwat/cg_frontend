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
        $( window ).on( "navigate", function( event, data ) {
          console.log( data.state.info );
          console.log( data.state.direction )
          console.log( data.state.url )
          console.log( data.state.hash )
            switch(data.state.hash){
                case "#step2":
                        //Commons.ajaxData('fetch_car_servicing', {r_id:"dmFydW5ndWxhdGlsaWtlc2dhbG91dGlrZWJhYg==",c_id:"56097f3c5e1b2d72585f54d4"},"get",_this, _this.loadServicing)
                        Commons.ajaxData('fetch_car_cleaning', {r_id:"dmFydW5ndWxhdGlsaWtlc2dhbG91dGlrZWJhYg==",c_id:"56097f3c5e1b2d72585f54d4"},"get",_this, _this.loadCleaning)
                    break;
                case "#step3":
                        //Commons.ajaxData('fetch_servicing_details', {r_id:"dmFydW5ndWxhdGlsaWtlc2dhbG91dGlrZWJhYg==",service_id:"5613ebd85e1b2d2c5f94aadb"},"get",_this, _this.loadServicingDetails)
                        Commons.ajaxData('fetch_cleaning_details', {r_id:"dmFydW5ndWxhdGlsaWtlc2dhbG91dGlrZWJhYg==",c_id:"56097f3c5e1b2d72585f5502",service_id:"560982095e1b2d72585fa9c8"},"get",_this, _this.loadCleaningDetails)
                    break;
                default:
                    break;
            }
        });

    },



    loadServicing : function(data){
        console.log(data)
        var container = $('.service-list .list-services');
        container.html('');
        var html = '';
        $.each(data, function(idx, val){
            html += '<li><a href="#"><div class="header-div">';
            if(val.odometer)
                html += String(val.odometer).replace(/(.)(?=(\d{3})+$)/g,'$1,')+'km';
            else
                html += '--km';
            html += ' or ';

            if(val.year)
                html += val.year;
            else
                html += '--year';
            html += '</div>';
            html += '<div class="checks-div">Regular Checks</div>';
            html += '<div class="checks-div">Washing</div>';

            html += '<div class="parts-div">';
            // push the list

            $.each(val.parts_replaced, function(i, part){
               html += '<span class="part">' + part + '</span>';
            });

            html += '</div></a></li>';

        });
        container.html(html);
        container.listview("refresh")
         var container2 = $('.service-image-holder');
        container2.html('');
        var html = '';
        html +=  "<img src='img/servicing1.jpg'>"
        container2.html(html);
    },
    loadCleaning : function(data){
        console.log(data)
        var container = $('.service-list .list-services');
        container.html('');
        var html = '';
        $.each(data, function(idx, val){
            html += '<li><a href="#"><div class="header-div">';
            html += val.category;
            html += '</div></a></li>';
        });
        container.html(html);
        container.listview("refresh")
         var container2 = $('.service-image-holder');
        container2.html('');
        var html = '';
        html +=  "<img src='img/cleaning1.jpg'>"
        container2.html(html);
    },




    loadServicingDetails : function(data){
        console.log(data)
        var container = $('.service-selection .selected-category');
        container.html('');
        var html = '';
        var val = data[0]
            html += ' <div class="header">';
            html += '<span class = "odo-read">' + String(val.odometer).replace(/(.)(?=(\d{3})+$)/g,'$1,')+'km </span><span class = "sub-cat">(Regular Servicing)</span></div>';
            html += '</div>';
            html += '<div class="checks-div">Regular Checks</div>';
            html += '<div class="checks-div">Washing</div>';
             html += '<div class="parts-div">';
            $.each(val.parts_list, function(i, part){
               html += '<span class="part">' + part + '</span>';
            });
        container.html(html);
        //container.listview("refresh")
        var container2 = $('.vendor-list .vendors');
        container2.html('');
        var html = '';
        $.each(data, function(idx, val){
            html += '<li><a href="#"><img src=';
                if(val.vendor=="Authorized")
                    html+= logoMap['Authorized Car'] + val.brand + '.jpg >';
                else
                    html+= logoMap[val.vendor] + '>';

            if(val.vendor=="Authorized")
                html+= '<div class="vendor-name">' + val.brand + ' Authorized ';
            else
                html+= '<div class="vendor-name">' + val.vendor;

            html += '</div><div class=prices>'
            html += "<table> <tr><td>Parts</td><td>:&nbsp;&nbsp;&#8377;"+parseInt(val.parts_price)+"</td></tr><tr><td>Labour</td><td>:&nbsp;&nbsp;&#8377;"+Math.ceil(val.labour_price)+"</td></tr> <tr><td>Service Tax</td><td>:&nbsp;&nbsp;&#8377;"+Math.ceil((val.labour_price*0.14))+"</td></tr> <tr><td>Pick-Up Fee</td><td>:&nbsp;&nbsp;<strike>&#8377;200</strike>&nbsp;&nbsp;&#8377;"+ (val.car_bike == 'Car' ? '0': '0')+"</td></tr><tr class='total-row'><td>Total</td><td>:&nbsp;&nbsp;&#8377;"+(parseInt(val.parts_price)+parseInt(Math.ceil((val.labour_price)))+parseInt(Math.ceil((val.labour_price*0.14)))+parseInt((val.car_bike == 'Car' ? '0': '0')))+"</td></tr></table>";
            html += '</div></div>';

        });
        container2.html(html);
        container2.listview("refresh")
    },
    loadCleaningDetails : function(data){
        console.log(data)
        var container = $('.service-selection .selected-category');
        container.html('');
        var html = '';
        var val = data[0]
            html += ' <div class="header">';
            html += '<span class = "Category odo-read">' + (val.category) + ' (Cleaning) </span></div>';
            html += '</div>';

        container.html(html);
        //container.listview("refresh")
        var container2 = $('.vendor-list .vendors');
        container2.html('');
        var html = '';
        $.each(data, function(idx, val){
            html += '<li><a href="#"><img src=';
                if(val.vendor=="Authorized")
                    html+= logoMap['Authorized Car'] + val.brand + '.jpg >';
                else
                    html+= logoMap[val.vendor] + '>';

            if(val.vendor=="Authorized")
                html+= '<div class="vendor-name">' + val.brand + ' Authorized | ' + val.service ;
            else
                html+= '<div class="vendor-name">' + val.vendor + ' | ' + val.service;

            html+= "</div><div class='description prices'>" + val.description;
            html += "</div><div class='prices'>"
            html += "<table> <tr><td>Service Price</td><td>:&nbsp;&nbsp;&#8377;"+val.total_price+"</td></tr>"+ (val.doorstep == '0' ? "<tr><td>Pick-Up Fee</td><td>:<strike>&nbsp;&nbsp;&#8377;200</strike>&nbsp;&nbsp;&#8377;0</td></tr>" : '')+" <tr><td>Total</td><td>:&nbsp;&nbsp;&#8377;"+val.total_price+"</td></tr></table>";
            html += '</div></div>';

        });
        container2.html(html);
        container2.listview("refresh")
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


var logoMap = {
    '3M':'img/dl-logo-3M.png',
    'Tee Car Care':'img/dl-logo-Tee.png',
    'Exppress Car Wash':'img/dl-logo-Exppress.png',
    'ClickGarage On-The-Go':'img/dl-logo-OntheGo.png',
    'ClickGarage Doorstep':'img/dl-logo-doorstep.png',
    'Authorized':'img/brands/',
    'Authorized Bike':'img/brands/Bike/',
    'Authorized Car':'img/brands/Car/',
    'Bosch':'img/dl-logo-Bosch.jpg',
    'ClickGarage Verified':'img/dl-logo-cgverified.png',
    'Mahindra First Choice':'img/dl-logo-MFC.jpg'
};

$(".menu-toggle-btn").click(function() {
			$(this).toggleClass("open");
		});

document.onreadystatechange = function () {
      Global.init();
}