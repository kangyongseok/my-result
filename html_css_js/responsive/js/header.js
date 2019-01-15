$(document).ready(function() {
    var menuBtn = $(".js-menu-btn");
    var navWrap = $(".js-nav-wrap");

    menuBtn.click(function() {
        navWrap.slideToggle("slow");
    })
})