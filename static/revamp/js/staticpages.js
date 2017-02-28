


document.onready = function () {
    // alert("Hi")
    Login.init()
    Global.init();

}

$(document).ready(function() {
    $('select').selectize();
});


$(window).ready(function() {
     setTimeout(function() {
         $('.loading-pane-2').hide();
         $('#overlay').hide();
            }, 2200);
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
            Commons.ajaxData('get_all_models', {vehicle_type: "Car"}, "get", _this, _this.loadCarService);
            Commons.ajaxData('get_all_models', {vehicle_type: "Bike"}, "get", _this, _this.loadBikeService);
            });




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





