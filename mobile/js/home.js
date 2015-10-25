
var Global = {
    init:function(){
        var _this = this;
        if(!_this.readyState){
        _this.readyState = true;            
        }else{
            return;
        }
    $("[data-role=panel]").panel().enhanceWithin();  
        _this.events();
        
        $("#checkoutForm").validate({
            rules: {
                    name: {
                        required:true,
                        minlength:3
                    }
            },
		errorPlacement: function(error, element) {
				error.insertAfter($(element).parent());
		}

	});
//        $('#submit-button').button('disable');
    },
    events:function(){
        var _this = this;
        console.log('adding hanlder')
        
        $('#brand-dropdown').on('change', function(){
            var brand = $(this).val();
            Commons.ajaxData('fetch_car_list', {m_id:brand,cb_id:"Car"},"get",_this,_this.loadCarMake);
        });
        
        $('#make-dropdown').on('change', function(){
            var carmake = $(this).val();
            if(carmake){
                $('#submit-button').button('enable');
            }
        });
        
        $('#submit-button').on('click', function(){
            var car_model = $('#make-dropdown option:selected').text();
            var car_brand = $('#brand-dropdown option:selected').text();
            var car_fullname = [car_brand, car_model].join(' ');
            var selected_c_id = $('#make-dropdown option:selected').attr('data-id');
            Global.carSelected = {
                'model':car_model,
                'brand':car_brand,
                'fullname':car_fullname,
                'id':selected_c_id
            }
//            var loc = window.location.href;
//            console.log(loc);
//            window.location.hash = '#services';
            window.location.hash = '#services';
            console.log(car_fullname, selected_c_id)
//            $.mobile.changePage('#services',{'allowSamePageTransition':true});
            return false;
        });
        
        $('#services .service-option').on('click', function(){
            var loc = window.location.href;
            var service_type = $(this).attr('id');
            $('#order-page-service').text(service_type);
            console.log(loc);
//            window.location.href = loc + '#order';
            window.location.hash = '#order';
//            $.mobile.changePage('#order',{'allowSamePageTransition':true});
        });
        
        $('.service-list .list-services').on('click', 'a', function(e){
//            var $target  = $(e.target);
            var serviceName = $('#order-page-service').text();
            var serviceId = $(this).attr('data-id');
//            console.log(classy);
            Global.serviceSelected = {
                'service':serviceName,
                'id':serviceId                
            }
            window.location.hash = '#vendor';
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

    $(window).on( "navigate", function( event, data ) {
          console.log( data.state.info );
          console.log( data.state.direction )
          console.log( data.state.url )
          console.log( data.state.hash )
            switch(data.state.hash){
                case "#services":
//                        var param_autocomplete = $('#service-page-car').text().split(' ').join('%20');
//                        console.log(param_autocomplete)
//                        Commons.ajaxData('fetch_car_autocomplete', {query:param_autocomplete},"get",_this, _this.loadCid)
                    if(!(Global.carSelected && Global.carSelected.id)){
                        console.log('pageinit')
                        window.location.hash = '#index';
                    }

                    break;
                case "#order":
                    console.log('p')
                    console.log("_this.load"+$('#order-page-service').text())    
                    if(!(Global.carSelected && Global.carSelected.id)){
                        console.log('pageinit')
                        window.location.hash = '#index';
                        return;
                    }
                    Commons.ajaxData('fetch_car_servicing', {c_id:Global.carSelected.id},"get",_this,eval("_this.load"+$('#order-page-service').text()))
                        //Commons.ajaxData('fetch_car_cleaning', {r_id:"dmFydW5ndWxhdGlsaWtlc2dhbG91dGlrZWJhYg==",c_id:"56097f3c5e1b2d72585f54d4"},"get",_this, _this.loadCleaning)
                    break;
                case "#vendor":
                    if(!(Global.carSelected && Global.carSelected.id && Global.serviceSelected)){
                        console.log('pageinit')
                        window.location.hash = '#index';
                        return;
                    }
                    if(Global.serviceSelected.service == 'Servicing' || Global.serviceSelected.service == 'Cleaning'){
                        Commons.ajaxData('fetch_'+Global.serviceSelected.service+'_details', {service_id:Global.serviceSelected.id, c_id:Global.carSelected.id, city_id:'Delhi'},"get",_this, eval("_this.load"+Global.serviceSelected.service.toTitleCase()+"Details"))
                    }
                    break;
                default:
                    break;
            }
        });

$( document ).delegate("#order", "pageinit", function() {
    if(!(Global.carSelected && Global.carSelected.id)){
        console.log('pageinit')
        window.location.hash = '#index';
    }
});        
$( document ).delegate("#order", "pagebeforeload", function() {
    if(!(Global.carSelected && Global.carSelected.id)){
        console.log('pagebeforeload')
        window.location.hash = '#index';
    }
});        
        
    },


    loadServicing : function(data){
        console.log(data)
        var container = $('.service-list .list-services');
        container.html('');
        var html = '';
        $.each(data, function(idx, val){
<<<<<<< HEAD
            html += '<li><a data-id=' + val.id + ' href="#"><div class="header-div">';
            if(val.odometer)
                html += String(val.odometer).replace(/(.)(?=(\d{3})+$)/g,'$1,')+'km';
=======
            html += '<li><a href="#"><div class="header-div">';
            if(val.type_service)
                if(val.type_service=='Not Defined')
                    html += "I am not sure <div class = 'description'>I will go with minor servicing and would like post check up recommendations</div>"
                //html += String(val.odometer).replace(/(.)(?=(\d{3})+$)/g,'$1,')+'km';
                else
                    html += val.type_service;
>>>>>>> f0475a412421ded7713e6ec74648106c094d6356
            else
                html += 'Regular Servicing';
            //html += ' or ';

            //if(val.year)
            //    html += val.year;
            //else
            //    html += '--year';
            html += '</div>';
            html += '<div class="checks-div">Regular Checks</div>';
            html += '<div class="checks-div">Washing</div>';

            html += '<div class="parts-div">';
            // push the list

            if(val.car_bike=="Bike")
                html += '<span class="part">Engine Oil</span>'+'<span class="part">Oil Filter</span>'+'<span class="part">Other Parts As Required</span>';
            else
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
            //html += '<span class = "odo-read">' + String(val.odometer).replace(/(.)(?=(\d{3})+$)/g,'$1,')+'km </span><span class = "sub-cat">(Regular Servicing)</span></div>';
            html += '<span class = "odo-read">' + String(val.type_service) +'</span></div>';

            html += '</div>';
            html += '<div class="checks-div">Regular Checks</div>';
            html += '<div class="checks-div">Washing</div>';
             html += '<div class="parts-div">';
        if(val.car_bike=="Bike")
            html += '<span class="part">Engine Oil</span>'+'<span class="part">Oil Filter</span>'+'<span class="part">Other Parts As Required</span>';
        else
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
                html+= '<div class="vendor-name">' + val.brand + ' Authorized ';
            else
                html+= '<div class="vendor-name">' + val.vendor;

            html += "</div><div class='service-name'>" + val.service;
            html += "</div><div class='description prices'>" + val.description;
            html += "</div><div class='prices'>"
            html += "<table> <tr><td>Service Price</td><td>:&nbsp;&nbsp;&#8377;"+val.total_price+"</td></tr>"+ (val.doorstep == '0' ? "<tr><td>Pick-Up Fee</td><td>:<strike>&nbsp;&nbsp;&#8377;200</strike>&nbsp;&nbsp;&#8377;0</td></tr>" : '')+" <tr class='total-row' ><td>Total</td><td>:&nbsp;&nbsp;&#8377;"+val.total_price+"</td></tr></table>";
            if(val.doorstep=="1")
                html+= '<div class="doorstep"> &#x2302; Doorstep Service </div>';
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
            html += '<option data-id="'+val.id+'" value="'+val.name+'">'+val.name+'</option>';

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


