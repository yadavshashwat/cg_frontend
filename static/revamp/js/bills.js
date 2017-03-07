


document.onready = function () {
    // alert("Hi")
    Login.init()
    Global.init();

}

$(document).ready(function() {
    // $('select').selectize();
});


$(window).ready(function() {
     setTimeout(function() {
         $('.loading-pane-2').hide();
         $('#overlay').hide();
            }, 1000);
});


// Scroll To Top
$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});


var VAT_PART = 0;
var VAT_LUBE = 0;
var VAT_CONSUMABLE = 0;
var SERVICE_TAX = 0;
var TOTAL = 0;
var TOTAL_PART = 0;
var TOTAL_LUBE = 0;
var TOTAL_CONSUMABLE = 0;
var TOTAL_LABOUR = 0;



// materialize css



$(".button-collapse").sideNav();

//Onload FadeIn
$(document).ready(function(){
    $(".fadeOnLoad").hide(0).delay(1000).fadeIn(700)
});




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

        $(document).ready(function(){
            hash_state = window.location.hash
            if (hash_state == "#print"){
                $('.navbar').hide()
                $('.actionables').hide()
            }else{
                $('.navbar').show()
                $('.actionables').show()
            }
            b_data_id = window.location.pathname.split('/')[3]
            bill_type = window.location.pathname.split('/')[2]

            if (bill_type == "old"){
                $('.bill-page #save-send-bill').text('Modify and Send Bill')
                $('.bill-page #save-bill').text('Modify Bill')
            }else{
                $('.bill-page #save-send-bill').text('Generate and Send Bill')
                $('.bill-page #save-bill').text('Generate Bill')
            }
            console.log(b_data_id)
            $('.invoice-box').attr('booking-data',b_data_id)

            Commons.ajaxData('view_all_bookings', {data_id:b_data_id}, "get", _this, _this.loadBillData,null, '.loading-pane');
            });


        // Save Bill
        $('.bill-page #payment-mode').change(function(){
            mode = $('.bill-page #payment-mode').val()
            console.log(mode)
            $('#bill-type').text(mode)

        });

        $('.bill-page .save-bill').click(function(){
            b_data_id = window.location.pathname.split('/')[3]
            console.log(b_data_id)
            cg_internal_flag = false
            mode        = $('.bill-page #payment-mode').val()
            agent_id    =     $('.invoice-box .agent-details').attr('agent-id')
            $(this).addClass('disabled')
            $('.bill-page #save-send-bill').text('Send Bill')
            $('.bill-page btn.save-send-bill').removeClass('save-send-bill').addClass('send-bill')

            // bill_owner =
            Commons.ajaxData('generate_bill', {data_id   			: b_data_id
                                                        // ,invoice_number 	: invoice_number
                                                        ,cg_internal_flag	: cg_internal_flag
                                                        ,bill_owner      	: agent_id
                                                        ,total_amount    	: TOTAL
                                                        ,part_amount     	: TOTAL_PART
                                                        ,lube_amount     	: TOTAL_LUBE
                                                        ,consumable_amount	: TOTAL_CONSUMABLE
                                                        ,labour_amount 		: TOTAL_LABOUR
                                                        ,vat_part 			: VAT_PART
                                                        ,vat_lube 			: VAT_LUBE
                                                        ,vat_consumable 	: VAT_CONSUMABLE
                                                        ,service_tax 		: SERVICE_TAX
                                                        // ,cancel          	: cancel
                                                        // ,file_name 			: file_name
                                                        // ,payment_status 	: payment_status
                                                        // ,amount_paid 		: amount_paid
                                                        ,payment_mode 		: mode
                        }, "get", _this, _this.loadBillGenerate,null, '.loading-pane');

            // Comm
        });
    },
    loadBillGenerate:function(data){
            window.alert("Bill Generated")
    },
    loadBillData:function(data){
        bill_type = window.location.pathname.split('/')[2]

        $.each(data, function(ix, val){
            if (bill_type == "new"){
                $('.invoice-box #agent-name').text(val.agent_name);
                $('.invoice-box #agent-address').text(val.agent_address);
                $('.invoice-box #agent-locality').text(val.agent_locality);
                $('.invoice-box #agent-city').text(val.agent_city);
                today = new Date()
                // console.log(today)
                $('.invoice-box #booking-id').text(val.booking_id);
                $('.invoice-box #bill-date').text(today.getDate()+'-'+today.getMonth()+'-'+today.getFullYear());
                $('.invoice-box #agent-tin').text(val.agent_vat);
                $('.invoice-box #agent-cin').text(val.agent_cin);
                $('.invoice-box #agent-stax').text(val.agent_stax);
                $('.invoice-box #cust-name').text(val.cust_name);
                $('.invoice-box #cust-address').text(val.cust_address);
                $('.invoice-box #cust-locality').text(val.cust_locality);
                $('.invoice-box #cust-city').text(val.cust_city);
                $('.invoice-box #veh-reg').text(val.cust_regnumber);
                $('.invoice-box #veh-name').text(val.cust_make +' '+ val.cust_model);
                $('.invoice-box .agent-details').attr('agent-id',val.agent)
                var cartLen = val.service_items.length;
                part_container = $('.invoice-box .parts-table .parts-list');
                part_container.html('');
                html_parts = '';
                service_container = $('.invoice-box .service-table .service-list')
                service_container.html('');
                html_service = '';
                TOTAL = 0;
                VAT_PART = 0;
                VAT_LUBE = 0;
                VAT_CONSUMABLE = 0;
                SERVICE_TAX = 0;
                TOTAL_PART = 0;
                TOTAL_LUBE = 0;
                TOTAL_CONSUMABLE = 0;
                TOTAL_LABOUR = 0;

                for (i = 0; i < cartLen; i++) {
                    console.log(val.service_items[i].type)
                    if (val.service_items[i].type == "Part"){
                        html_parts += '<tr class="item">'
                        html_parts += '<td>'+val.service_items[i].name+'</td>'
                        html_parts += '<td>'+val.service_items[i].quantity+'</td>'
                        part_val_pretax = parseFloat(val.service_items[i].unit_price)/(parseFloat(val.vat_part)/100+1)
                        html_parts += '<td>₹'+String(Math.ceil(part_val_pretax))+'</td>'
                        part_val_pretax_all = parseFloat(val.service_items[i].price)/(parseFloat(val.vat_part)/100+1)
                        VAT_PART = VAT_PART + part_val_pretax_all * (parseFloat(val.vat_part)/100)
                        html_parts += '<td>₹'+String(Math.ceil(part_val_pretax_all))+'</td>'
                        // html_parts += '<td>₹'+val.service_items[i].price+'</td>'
                        html_parts += '</tr>'
                        TOTAL_PART = TOTAL_PART + part_val_pretax_all;
                    }
                    if (val.service_items[i].type == "Lube"){
                        html_parts += '<tr class="item">'
                        html_parts += '<td>'+val.service_items[i].name+'</td>'
                        html_parts += '<td>'+val.service_items[i].quantity+'</td>'
                        part_val_pretax = parseFloat(val.service_items[i].unit_price)/(parseFloat(val.vat_lube)/100+1)
                        html_parts += '<td>₹'+String(Math.ceil(part_val_pretax))+'</td>'
                        part_val_pretax_all = parseFloat(val.service_items[i].price)/(parseFloat(val.vat_lube)/100+1)
                        VAT_LUBE = VAT_LUBE + part_val_pretax_all * (parseFloat(val.vat_lube)/100)
                        html_parts += '<td>₹'+String(Math.ceil(part_val_pretax_all))+'</td>'
                        html_parts += '</tr>'
                        TOTAL_LUBE = TOTAL_LUBE + part_val_pretax_all;
                    }
                    if (val.service_items[i].type == "Consumable"){
                        html_parts += '<tr class="item">'
                        html_parts += '<td>'+val.service_items[i].name+'</td>'
                        html_parts += '<td>'+val.service_items[i].quantity+'</td>'
                        part_val_pretax = parseFloat(val.service_items[i].unit_price)/(parseFloat(val.vat_consumable)/100+1)
                        html_parts += '<td>₹'+String(Math.ceil(part_val_pretax))+'</td>'
                        part_val_pretax_all = parseFloat(val.service_items[i].price)/(parseFloat(val.vat_consumable)/100+1)
                        VAT_CONSUMABLE = VAT_CONSUMABLE + part_val_pretax_all * (parseFloat(val.vat_consumable)/100)
                        html_parts += '<td>₹'+String(Math.ceil(part_val_pretax_all))+'</td>'
                        html_parts += '</tr>'
                        TOTAL_CONSUMABLE = TOTAL_CONSUMABLE + part_val_pretax_all;
                    }
                    if (val.service_items[i].type == "Labour"){
                        html_service += '<tr class="item">'
                        html_service += '<td>'+val.service_items[i].name+'</td>'
                        part_val_pretax_all = parseFloat(val.service_items[i].price)/(parseFloat(val.service_tax)/100+1)
                        SERVICE_TAX = SERVICE_TAX + part_val_pretax_all * (parseFloat(val.service_tax)/100)
                        html_service += '<td>₹'+String(Math.ceil(part_val_pretax_all))+'</td>'
                        html_service += '</tr>'
                        TOTAL_LABOUR = TOTAL_LABOUR + part_val_pretax_all;
                    }
                    TOTAL = TOTAL + parseFloat(val.service_items[i].price)
                }
                part_container.html(html_parts);
                service_container.html(html_service);
                $('.invoice-box #cust-total').text(TOTAL);
                $('.invoice-box .recommendation').text(val.customer_notes);
                $('.invoice-box .vat-part-amount').text(Math.ceil(VAT_PART));
                $('.invoice-box .vat-lube-amount').text(Math.ceil(VAT_LUBE));
                $('.invoice-box .vat-consumable-amount').text(Math.ceil(VAT_CONSUMABLE));
                $('.invoice-box .stax-amount').text(Math.ceil(SERVICE_TAX));
                $('.invoice-box #vat-part-percent').text(val.vat_part);
                $('.invoice-box #vat-lube-percent').text(val.vat_lube);
                $('.invoice-box #vat-consumable-percent').text(val.vat_consumable);
                $('.invoice-box #stax-percent').text(val.service_tax);
            }else if(bill_type == "old"){
                $('.invoice-box #bill-type').text(val.bill_payment_mode)
                $('.invoice-box #bill-number').text(val.invoice_number);
                $('.invoice-box #agent-name').text(val.bill_agent_name);
                $('.invoice-box #agent-address').text(val.bill_agent_address);
                $('.invoice-box #agent-locality').text(val.bill_agent_locality);
                $('.invoice-box #agent-city').text(val.bill_agent_city);
                $('.invoice-box #booking-id').text(val.booking_id);
                $('.invoice-box #bill-date').text(val.bill_date_created);
                $('.invoice-box #agent-tin').text(val.bill_agent_vat_no);
                $('.invoice-box #agent-cin').text(val.bill_agent_cin);
                $('.invoice-box #agent-stax').text(val.bill_agent_stax);
                $('.invoice-box #cust-name').text(val.bill_cust_name);
                $('.invoice-box #cust-address').text(val.bill_cust_address);
                $('.invoice-box #cust-locality').text(val.bill_cust_locality);
                $('.invoice-box #cust-city').text(val.bill_cust__city);
                $('.invoice-box #veh-reg').text(val.bill_reg_number);
                $('.invoice-box #veh-name').text(val.bill_make +' '+ val.bill_model);
                $('.invoice-box .agent-details').attr('agent-id',val.agent)
                var cartLen = val.bill_components.length;
                part_container = $('.invoice-box .parts-table .parts-list');
                part_container.html('');
                html_parts = '';
                service_container = $('.invoice-box .service-table .service-list')
                service_container.html('');
                html_service = '';
                TOTAL = 0;
                VAT_PART = 0;
                VAT_LUBE = 0;
                VAT_CONSUMABLE = 0;
                SERVICE_TAX = 0;
                TOTAL_PART = 0;
                TOTAL_LUBE = 0;
                TOTAL_CONSUMABLE = 0;
                TOTAL_LABOUR = 0;

                for (i = 0; i < cartLen; i++) {
                    console.log(val.bill_components[i].type)
                    if (val.service_items[i].type == "Part"){
                        html_parts += '<tr class="item">'
                        html_parts += '<td>'+val.bill_components[i].name+'</td>'
                        html_parts += '<td>'+val.bill_components[i].quantity+'</td>'
                        part_val_pretax = parseFloat(val.bill_components[i].unit_price)/(parseFloat(val.bill_vat_part_percent)/100+1)
                        html_parts += '<td>₹'+String(Math.ceil(part_val_pretax))+'</td>'
                        part_val_pretax_all = parseFloat(val.bill_components[i].price)/(parseFloat(val.bill_vat_part_percent)/100+1)
                        VAT_PART = VAT_PART + part_val_pretax_all * (parseFloat(val.bill_vat_part_percent)/100)
                        html_parts += '<td>₹'+String(Math.ceil(part_val_pretax_all))+'</td>'
                        // html_parts += '<td>₹'+val.service_items[i].price+'</td>'
                        html_parts += '</tr>'
                        TOTAL_PART = TOTAL_PART + part_val_pretax_all;
                    }
                    if (val.service_items[i].type == "Lube"){
                        html_parts += '<tr class="item">'
                        html_parts += '<td>'+val.bill_components[i].name+'</td>'
                        html_parts += '<td>'+val.bill_components[i].quantity+'</td>'
                        part_val_pretax = parseFloat(val.bill_components[i].unit_price)/(parseFloat(val.bill_vat_lube_percent)/100+1)
                        html_parts += '<td>₹'+String(Math.ceil(part_val_pretax))+'</td>'
                        part_val_pretax_all = parseFloat(val.bill_components[i].price)/(parseFloat(val.bill_vat_lube_percent)/100+1)
                        VAT_LUBE = VAT_LUBE + part_val_pretax_all * (parseFloat(val.bill_vat_lube_percent)/100)
                        html_parts += '<td>₹'+String(Math.ceil(part_val_pretax_all))+'</td>'
                        html_parts += '</tr>'
                        TOTAL_LUBE = TOTAL_LUBE + part_val_pretax_all;
                    }
                    if (val.service_items[i].type == "Consumable"){
                        html_parts += '<tr class="item">'
                        html_parts += '<td>'+val.bill_components[i].name+'</td>'
                        html_parts += '<td>'+val.bill_components[i].quantity+'</td>'
                        part_val_pretax = parseFloat(val.bill_components[i].unit_price)/(parseFloat(val.bill_vat_consumable_percent)/100+1)
                        html_parts += '<td>₹'+String(Math.ceil(part_val_pretax))+'</td>'
                        part_val_pretax_all = parseFloat(val.bill_components[i].price)/(parseFloat(val.bill_vat_consumable_percent)/100+1)
                        VAT_CONSUMABLE = VAT_CONSUMABLE + part_val_pretax_all * (parseFloat(val.bill_vat_consumable_percent)/100)
                        html_parts += '<td>₹'+String(Math.ceil(part_val_pretax_all))+'</td>'
                        html_parts += '</tr>'
                        TOTAL_CONSUMABLE = TOTAL_CONSUMABLE + part_val_pretax_all;
                    }
                    if (val.service_items[i].type == "Labour"){
                        html_service += '<tr class="item">'
                        html_service += '<td>'+val.bill_components[i].name+'</td>'
                        part_val_pretax_all = parseFloat(val.bill_components[i].price)/(parseFloat(val.bill_service_tax_percent)/100+1)
                        SERVICE_TAX = SERVICE_TAX + part_val_pretax_all * (parseFloat(val.bill_service_tax_percent)/100)
                        html_service += '<td>₹'+String(Math.ceil(part_val_pretax_all))+'</td>'
                        html_service += '</tr>'
                        TOTAL_LABOUR = TOTAL_LABOUR + part_val_pretax_all;
                    }
                    TOTAL = TOTAL + parseFloat(val.bill_components[i].price)
                }
                part_container.html(html_parts);
                service_container.html(html_service);
                $('.invoice-box #cust-total').text(TOTAL);
                $('.invoice-box .recommendation').text(val.bill_notes);
                $('.invoice-box .vat-part-amount').text(Math.ceil(VAT_PART));
                $('.invoice-box .vat-lube-amount').text(Math.ceil(VAT_LUBE));
                $('.invoice-box .vat-consumable-amount').text(Math.ceil(VAT_CONSUMABLE));
                $('.invoice-box .stax-amount').text(Math.ceil(SERVICE_TAX));
                $('.invoice-box #vat-part-percent').text(val.bill_vat_part_percent);
                $('.invoice-box #vat-lube-percent').text(val.bill_vat_lube_percent);
                $('.invoice-box #vat-consumable-percent').text(val.bill_vat_consumable_percent);
                $('.invoice-box #stax-percent').text(val.bill_service_tax_percent);
            }
        })
    },
    loadCarService:function(data){
            var container = $('#dynamic-pages .cars .pre-data');
            container.html('')
            make_name = ""
            html = ""
             $.each(data, function(ix, val){
                 if (val.make != make_name) {
                     html += '<div class="header makename">'
                     html += '<h3>'+val.make+'</h3>'
                     html += '</div>'
                 }
                    html +=	'<div class="list-cars">'
			        html += '<div class="col l4 s4 m4">'
                    html += '<li class ="vehicle-name">'+val.full_veh_name+'</li>'
                    html += '</div>'
			        html += '<div class="col l8 s8 m8">'
                    html += '<ul class="left">'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/servicing/">Servicing</a></li>'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/repairing/">Repairing</a></li>'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/carcare/">Car Care</a></li>'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/denting/">Denting</a></li>'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/subscription/">Subscription</a></li>'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/emergency/">Emergency</a></li>'
    	    		html += '</ul>'
                    html += '</div>'
                    html += '<hr>'
        	        html +=	'</div>'
                 make_name = val.make
             });
            container.html(html)
        },

    loadBikeService:function(data){
            var container = $('#dynamic-pages .bikes .pre-data');
            container.html('')
            make_name = ""
            html = ""
             $.each(data, function(ix, val){
                 if (val.make != make_name) {
                     html += '<div class="header makename">'
                     html += '<h3>'+val.make+'</h3>'
                     html += '</div>'
                 }
                    html +=	'<div class="list-cars">'
			        html += '<div class="col l4 s4 m4">'
                    html += '<li class ="vehicle-name">'+val.full_veh_name+'</li>'
                    html += '</div>'
			        html += '<div class="col l8 s8 m8">'
                    html += '<ul class="left">'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/servicing/">Servicing</a></li>'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/repairing/">Repairing</a></li>'
    				// html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/carcare/">Car Care</a></li>'
    				// html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/denting/">Denting</a></li>'
    				// html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/subscription/">Subscription</a></li>'
    				html += '<li class ="service-name"><a href="/Book/Car/'+val.make.replace(' ', '_') + '-' + val.model.replace(' ', '_') + '-' + val.fuel_type + '/emergency/">Emergency</a></li>'
    	    		html += '</ul>'
                    html += '</div>'
                    html += '<hr>'
        	        html +=	'</div>'
                 make_name = val.make
             });
            container.html(html)
        },



};





