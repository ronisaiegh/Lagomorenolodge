 
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $("#nav-fixed").css({"background-color":"#F8F8F2", "top" : "0"});
            $("#scroll-nav").css({"display":"hide"});
            $("#nav-fixed").css({"display":"block"});   
        }
    })
})


//$(window).height()

// $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(window).scrollTo({top: 15})){
//             $("#nav-fixed").css({"background-color":"red", "top" : "0"});
//             $("#scroll-nav").css({"display":"hide"});
//             $("#nav-fixed").css({"display":"block"});   
//         }
//     })
// })


// $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(window).scrollTop() > $(window).height()){
//             $("#nav-fixed").css({"background-color":"white", "top" : "0"});
//             $("#scroll-nav").css({"display":"block"});
//             $("#nav-fixed").css({"display":"hide"});   
//         }
//     })
// })