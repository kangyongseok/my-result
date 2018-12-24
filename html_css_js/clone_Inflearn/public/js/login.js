$(document).ready(function() {
    //  로그인화면 열기
    $('.js-login').click(function() {
        $('.login-area').removeClass('close');
    })

    // 닫기
    $('.js-close').click(function() {
        $('.login-area').addClass('close');
    })
})
