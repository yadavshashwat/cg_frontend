var VAT_CONSUMABLE_PERCENT = 0
var VAT_LUBE_PERCENT = 0
var VAT_PART_PERCENT = 0
var SERVICE_TAX_PERCENT = 0


$(function () {
    $(".button").click(function (e) {
        var pX = e.pageX,
            pY = e.pageY,
            oX = parseInt($(this).offset().left),
            oY = parseInt($(this).offset().bottom);
        // console.log(pX+""+pY+""+ oX +""+oY)
        // console.log(pX)
        $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>');
        $('.x-' + oX + '.y-' + oY + '').animate({
            "width": "500px",
            "height": "500px",
            "top": "-250px",
            "left": "-250px",

        }, 600);
        $("button", this).addClass('active');
    });

    $(".alt-2").click(function () {
        // console.log('check')
        if (!$(this).hasClass('material-button')) {
            $(".shape").css({
                "width": "100%",
                "height": "100%",
                "transform": "rotate(0deg)"
            });

            setTimeout(function () {
                $(".overbox").css({
                    "overflow": "initial"
                })
            }, 600);

            setTimeout(function () {
                $(".overbox").removeClass('active')
            }, 500);


            $(this).animate({
                "width": "200px",
                "height": "70px"
            }, 500, function () {


                $(".box").removeClass("back");

                $(this).removeClass('active')
            });

            $(".overbox .title").fadeOut(300);
            $(".overbox .input").fadeOut(300);
            $(".overbox .button").fadeOut(300);
            $(".alt-2").addClass('material-buton');
        }

    });

    $(".material-button").click(function () {

        if ($(this).hasClass('material-button')) {
            setTimeout(function () {
                $(".overbox").css({
                    "overflow": "hidden"
                });
                setTimeout(function () {
                    $(".overbox").addClass('active');
                }, 700);
                $(".box").addClass("back");
            }, 200);
            $(this).addClass('active').animate({
                "width": "700px",
                "height": "700px"
            });

            setTimeout(function () {
                $(".shape").css({
                    "width": "50%",
                    "height": "50%",
                    "transform": "rotate(45deg)"
                });

                $(".overbox .title").fadeIn(300);
                $(".overbox .input").fadeIn(300);
                $(".overbox .button").fadeIn(300);
            }, 700);

            $(this).removeClass('material-button');

        }

        if ($(".alt-2").hasClass('material-buton')) {
            $(".alt-2").removeClass('material-buton');
            $(".alt-2").addClass('material-button');
        }

    });

});


// document.onready = function () {
//     Login.init();
// };

var Login = {
    init: function () {
        var _this = this;
        _this.events();
    },

    events: function () {

        var _this = this;
        if (_this.eventsAdded)
            return false;
        _this.eventsAdded = true;
        // console.log('adding hanlder');

        $(document).ready(function(){
            cookie_data = local.load();
            if(cookie_data['c_user_id']==null || cookie_data['user_id']===false){;
                fname = ""
                id = ""
                lname = ""
                $('.navbar .log-in').text("Sign-Up/In")
            }else{
                fname = cookie_data['c_user_first_name']
                id = cookie_data['c_user_id']
                lname = cookie_data['c_user_last_name']
                Commons.ajaxData('verify_otp_password_cookie', {}, "get", _this, _this.loadCookieLogin, null, '.loading-pane');
            }
        });

        $('.navbar').on('click','.log-in-button',function () {
            $('#login').show()
            $('#cover').show()
        });

        $('.navbar').on('click','.log-out-button',function () {
            // path_name = window.location.pathname
            // console.log(path_name)
            // Commons.ajaxData('logout_view', {path: path_name}, "get", _this, _this.loadLogout, null, '.loading-pane');
            Commons.ajaxData('logout_view', {}, "get", _this, _this.loadLogout, null, '.loading-pane');

        });


        $('#cover').click(function () {
            $('#login').hide()
            $('#cover').hide()
        });

        $('#login .close-btn').click(function () {
            $('#login').hide()
            $('#cover').hide()
        });
        
        $('#login .use-otp').click(function () {
            var number = $('#telephone_login').val();

            error = 0;
            if (number.length != 10) {
                $('#telephone_login').addClass("invalid");
                error = 1;
            }
            if (error == 1) {
                // console.log("didnt work")

            } else {
                Commons.ajaxData('send_otp_new', {phone: number}, "get", _this, _this.loadloginOTP, null, '.loading-pane');
            }
        });

        $('#login .change-pass-otp').click(function () {
            var number = $('#telephone_login').val();
            var password = $('#password-new').val();

            error = 0;
            if (number.length != 10) {
                $('#telephone_login').addClass("invalid");
                error = 1;
            }

            if (password.length < 1) {
                $('#password-new').addClass("invalid");
                error = 1;
            }
            if (error == 1) {
                // console.log("didnt work")

            } else {
                Commons.ajaxData('send_otp_new', {phone: number}, "get", _this, _this.loadOTPpasschange, null, '.loading-pane');
            }
        });

        $('#login .overbox .button-otp-signup').click(function () {
            var number = $('#telephone-sign').val();
            var password = $('#password-sign').val();
            var name = $('#name_login').val();

            error = 0;
            if (number.length != 10) {
                $('#telephone-sign').addClass("invalid");
                error = 1;
            }
            if (password.length < 1) {
                $('#password-sign').addClass("invalid");
                error = 1;
            }
            if (name.length < 1) {
                $('#name').addClass("invalid");
                error = 1;
            }
            if (error == 1) {

            } else {
                Commons.ajaxData('send_otp_new', {phone: number}, "get", _this, _this.loadOTPsignup, null, '.loading-pane');
            }
        });

        $('#login .resend-otp').on('click',function(){
             var number = $('#telephone_login').val();
                Commons.ajaxData('send_otp_new', {phone: number}, "get", _this, _this.loadOTPresend, null, '.loading-pane');
        });

        $('#login .resend-otp-sign').on('click',function(){
             var number = $('#telephone-sign').val();
                Commons.ajaxData('send_otp_new', {phone: number}, "get", _this, _this.loadOTPresend, null, '.loading-pane');
        });



        $('#login .pass-forgot').click(function () {
            $('#login .login-method-row').hide();
            $('#login .login-pass-change').show();
        });

        $('#login .use-pass').click(function () {
            $('#login .login-method-row').hide();
            $('#login .login-method-input.pass').show();
            $('#login .login-method-btn-row').show();
        });

        $('#login .verify-btn').on('click', function (e) {
            var number = $('#telephone_login').val();
            var onetp = $('#otp_login').val();
            var pass = $('#password').val();
            Commons.ajaxData('verify_otp_password_cookie', {
                number: number,
                otp: onetp,
                pass: pass
            }, "get", _this, _this.loadVerifylogin, null, '.loading-pane');
        });

        $('#login .verify-btn-sign').on('click', function (e) {
            var number = $('#telephone-sign').val();
            var onetp = $('#otp-sign').val();
            // console
            var pass = $('#password-sign').val();
            var name = $('#name_login').val();
            Commons.ajaxData('sign_up_otp', {
                number: number,
                otp: onetp,
                pass: pass,
                name: name
            }, "get", _this, _this.loadSignUp, null, '.loading-pane');
        });

        $('#login .verify-btn-pass').on('click', function (e) {
            var box = $(this).closest('.box')
            var number = box.find('#telephone_login').val();
            var onetp = box.find('#otp-pass-new').val();
            var pass = box.find('#password-new').val();
            var name = "";
            Commons.ajaxData('set_password_otp', {
                number: number,
                otp: onetp,
                pass: pass
            }, "get", _this, _this.loadPasswordchange, null, '.loading-pane');
        });


    },

    loadloginOTP: function (data) {
        $('#login .login-method-row').hide();
        $('#login .login-method-input.otp').show();
        $('#login .login-method-btn-row-otp').show();
        document.getElementById("telephone_login").disabled = true;
    },

    loadOTPpasschange: function (data) {
        $('#login .login-pass-change .send-otp-row').hide();
        $('#login .login-passchange-btn-row-otp').show();
        document.getElementById("telephone_login").disabled = true;
        document.getElementById("password-new").disabled = true;
    },
    loadOTPsignup: function (data) {
        document.getElementById("telephone-sign").disabled = true;
        document.getElementById("password-sign").disabled = true;
        document.getElementById("name_login").disabled = true;
        $('#login .button-otp-signup-row').hide();
        $('#login .otp-btn-row.signup-row').show()

    },


    loadVerifylogin: function (data) {
        $('#login .login-message').text(data.msg);
        $('#login .login-message-row').show();
        // location.reload();
        if (data.msg == "Success"){
        location.reload();
        }
    },
    loadCookieLogin:function (data){
        c_uname = local.load()
         uname = c_uname['c_user_first_name']
         // lname = c_uname['c_user_last_name']
          $('.navbar .log-in').text("Logout")
          $('.navbar .uname').text("Hi "+uname)
          // $('.admin-page .navbar .uname').text("Hi "+uname+" "+lname)
          $('.admin-page .navbar .uname').text("Hi "+uname)
          $('.navbar .log-in-button').addClass('log-out-button').removeClass('log-in-button')
        if (data['god']){
            $('#god-view').show()
        }else{
            $('#god-view').html('')
        }
        // console.log(data['auth_rights']['admin'])
        if (data['auth_rights']['admin']){
            $('.admin-page .admin-page-html').show()
            $('.admin-page .login').hide()
            $('.admin-page .staff-button-row').show()
            $('.admin-page .agent-button-row').html('')
            $('.admin-page .b2b-button-row').html('')
            $('#sms-credits').text('Not Applicable')
            VAT_CONSUMABLE_PERCENT = 0
            VAT_LUBE_PERCENT = 0
            VAT_PART_PERCENT = 0
            SERVICE_TAX_PERCENT = 0
            // $('.admin-page .items-list li.analytics-button').hide()
        }else if(data['auth_rights']['staff']){
            $('.admin-page .admin-page-html').show()
            $('.admin-page .login').hide()
            $('.admin-page .staff-button-row').show()
            $('.admin-page .agent-button-row').html('')
            $('.admin-page .b2b-button-row').html('')
            $('#sms-credits').text('Not Applicable')
            VAT_CONSUMABLE_PERCENT = 0
            VATUBE_PERCENT = 0
            VAT_PART_PERCENT = 0
            SERVICE_TAX_PERCENT = 0


        }else if(data['auth_rights']['agent']){
            $('.admin-page .admin-page-html').show()
            $('.admin-page .login').hide()
            $('.admin-page .items-list li.coupon-button').hide()
            $('.admin-page .items-list li.subscription-button').hide()
            $('.admin-page .items-list li.analytics-button').show()
            // $('.bill-page .staff-button-row').hide()
            $('.admin-page .items-list li.expenses-button').hide()
            $('.admin-page .staff-button-row').html('')
            $('.admin-page .staff-button-row-hide').hide()
            $('.admin-page .b2b-button-row').html('')
            $('.admin-page .agent-button-row').show()
            $('#agent_bill_name').val(data['first_name'] +' '+data['last_name'])
            $('#agent_bill_address').val(data['user_address'] +', '+data['user_locality']+', '+data['user_city'])
            $('#agent_bill_vat').val(data['agent_vat'])
            $('#agent_bill_stax').val(data['agent_stax'])
            $('#agent_bill_cin').val(data['agent_cin'])
            // $('#payment_collector_bill').attr('disabled','')
            // $('#payment_collector_bill').val('Workshop')

            // $('#payment_collector').val('Workshop')
            // $('#payment_collector').attr('disabled','')
            // $('#payment_collector').val('Workshop').hide()

            if (data['agent_vat'] != ""){
                VAT_CONSUMABLE_PERCENT = parseFloat(data['vat_consumables'])
                VAT_LUBE_PERCENT = parseFloat(data['vat_lube'])
                VAT_PART_PERCENT = parseFloat(data['vat_parts'])

            }else{
                VAT_CONSUMABLE_PERCENT = 0
                VAT_LUBE_PERCENT = 0
                VAT_PART_PERCENT = 0
            }
            if(data['agent_stax'] != ""){
                SERVICE_TAX_PERCENT = parseFloat(data['service_tax'])
            }else{
                SERVICE_TAX_PERCENT_L = 0
            }

            Materialize.updateTextFields();
            // STATE_BILL = data['user_state']
            // AGENT_STATE = STATE_BILL
            // $('#bill-details #bill_type').find('select').val('Agent Bill').change()
            $('#sms-credits').text(data['agent_sms_credits'])

        }else if(data['auth_rights']['b2b']){
            $('.admin-page-html').show()
            $('.admin-page .login').hide()
            $('.admin-page .items-list li.coupon-button').hide()
            $('.admin-page .items-list li.users-button').hide()
            $('.admin-page .items-list li.lead-button').hide()
            $('.admin-page .items-list li.subscription-button').hide()
            $('.admin-page .items-list li.campaign-button').hide()
            $('.admin-page .items-list li.expenses-button').hide()
            $('.admin-page .items-list li.new-lead-button').hide()
            $('.admin-page .items-list li.settlement-button').hide()
            $('.admin-page .items-list li.analytics-button').show()
            $('.admin-page .items-list li.bill-button').hide()
            $('.admin-page .agent-button-row').html('')
            $('.admin-page .staff-button-row').html('')
            $('.admin-page .staff-button-row-hide').hide()
            $('.bill-page .staff-button-row').html('')
            $('.admin-page .b2b-button-row').show()
            cookie = local.load();
            console.log('b2b')
            if (cookie['c_user_id']){
                name = cookie['c_user_first_name'] + " " + cookie['c_user_last_name']  ;
                number = cookie['c_user_number'];
                email = cookie['c_user_email'];
                if(email==null || email===false){
                    }
                else{email = email.substr(1,email.length-2)}
                }
                address = cookie['c_user_address'];
                if(address==null || address===false){}else{
                if (address.split(' ').length > 1){
                    address = address.substr(1,address.length-2)
                    }
                }
                locality = cookie['c_user_locality'];
                if(locality==null || locality===false){}else {
                    if (locality.split(' ').length > 1) {
                        locality = locality.substr(1, locality.length - 2)
                    }
                }
                city = cookie['c_user_city'];
                if(city==null || city===false){}else {
                if (city.split(' ').length > 1){
                    city = city.substr(1,city.length-2)
                }}

            // local.load()
            $('.admin-page #new-booking #name').val(name);
            $('.admin-page #new-booking  #name').attr('disabled','');
            $('.admin-page #new-booking  #telephone').val(number);
            $('.admin-page #new-booking  #telephone').attr('disabled','');
            $('.admin-page #new-booking  #email').val(email);
            $('.admin-page #new-booking  #email').attr('disabled','');
            $('.admin-page #new-booking  #address').val(address);
            $('.admin-page #new-booking  #locality').val(locality);
            $('.admin-page #new-booking  #city').val(city);
            // $('.admin-page #new-booking  .pocdetails').text('POC');
            Materialize.updateTextFields();




        }else{
            $('.admin-page .admin-page-html').hide()
            // $('.admin-page .login').show()
            $('.admin-page .navbar').hide()
            $('.admin-page .agent-button-row').hide()
            $('.admin-page .staff-button-row').hide()
            $('.admin-page .b2b-button-row').hide()
        }





    },
    loadPasswordchange: function (data) {
        $('#login .login-passchange-btn-row-otp .login-message').text(data.msg);
        $('#login .login-passchange-btn-row-otp .login-message-row').show();
        // location.reload();
        if (data.msg == "Success"){
        location.reload();
        }
    },
    loadSignUp: function (data) {
        $('#login .login-message').text(data.msg);
        $('#login .login-message-row').show();
        // location.reload();
        if (data.msg == "Success"){
        location.reload();
        }
    },
    loadLogout:function(data){
            local.clearKey('c_user_id');
            local.clearKey('c_user_first_name');
            local.clearKey('c_user_last_name');
            local.clearKey('c_user_number');
            local.clearKey('c_user_email');
            local.clearKey('c_user_address');
            local.clearKey('c_user_locality');
            local.clearKey('c_user_city');
            location.reload();
    }
};





