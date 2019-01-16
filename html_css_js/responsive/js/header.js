$(document).ready(function() {
    var menuBtn = $(".js-menu-btn");
    var navWrap = $(".js-nav-wrap");

    menuBtn.click(function(e) {
        e.preventDefault();
        navWrap.slideToggle("slow");
    });
    $(window).resize(function() {
        if($(window).width() > 768) {
            navWrap.css("display", "block");
        } else {
            navWrap.css("display", "none");
        }
    })
})