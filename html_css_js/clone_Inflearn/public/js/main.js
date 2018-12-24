
$(document).ready(function(){
    // maenu-area sticky
    $(".header-area").sticky({topSpacing:0});
    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var header = $(".main-area").offset().top;
        if(y_scroll_pos > header) {
            $(".header-area").addClass('top-fix');
        } else {
            $(".header-area").removeClass('top-fix');
        }
    });

    // slide
    var slideWidth = $('.slide .lecture li').width() + 20;

    function moveLeft() {
        $('.slide .lecture').animate({
            left: + slideWidth
        }, 200, function() {
            $('.slide .lecture li:last-child').prependTo('.slide .lecture');
            $('.slide .lecture').css('left', '');
        });
    };

    function moveRight() {
        $('.slide .lecture').animate({
            left: - slideWidth
        }, 200, function() {
            $('.slide .lecture li:first-child').appendTo('.slide .lecture');
            $('.slide .lecture').css('left', '');
        });
    };

    $('.js-left').click(function() {moveLeft()});
    $('.js-right').click(function() {moveRight()});


    // 텍스트 변경
    var aa = ['가치를 높이세요.', 'CG를 배우세요.', '전문가가 되세요.', '연봉을 높이세요.', '코딩을 배우세요.', '프로그래머가 되세요.', '기술을 익히세요.'];
    function textChange() {
        var ramdomNum = Math.floor(Math.random() * aa.length) + 1;
        $('.box h1 span').text(aa[ramdomNum]).fadeToggle('slow');
    };

    setInterval(textChange, 3000);



    // new-lecture
    var cardWidth = $('.new-lecture .card').width() + 30;
    
    function cardLeft() {
        $('.new-lecture .card-wrap').animate({
            left: -cardWidth
        }, 200, function() {
            $('.new-lecture .card-wrap div:first-child').appendTo('.new-lecture .card-wrap');
            $('.new-lecture .card-wrap').css('left', '');
        })
    };

    function cardright() {
        $('.new-lecture .card-wrap').animate({
            left: +cardWidth
        }, 200, function() {
            $('.new-lecture .card-wrap div:first-child').appendTo('.new-lecture .card-wrap');
            $('.new-lecture .card-wrap').css('left', '');
        })
    };

    function cardAuto() {
        cardLeft();
    }

    $('.js-left-card').click(function(){cardLeft()});
    $('.js-right-card').click(function(){cardright()});
    
    setInterval(cardAuto, 5000);

});




