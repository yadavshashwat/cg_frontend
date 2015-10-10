Global = {
    init:function(){
    $("[data-role=panel]").panel().enhanceWithin();  
    },
    events:function(){
    }
    
    
};




document.onreadystatechange = function () {
      Global.init();
}