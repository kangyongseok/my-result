$(document).ready(function(){

    $(".board-tab ul").tabClick({
        color:"#3c5a9a",
        bardelay:500
    });

    $(window).on("scroll", function() {
        if($(this).scrollTop() > 80) {
            $(".scroll-top").fadeIn();
            $(".contents-area h2").addClass("fixed");
        } else {
            $(".scroll-top").fadeOut();
            $(".contents-area h2").removeClass("fixed");
        }
    });
    
    $(".scroll-top").on("click", function() {
        $("html, body").animate({
            scrollTop:0
        }, 400);
    })
})