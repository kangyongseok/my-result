$(document).ready(function () {
    //  로그인화면 열기
    $('.js-login').click(function () {
        $('.login-area').removeClass('close');
    })

    // 닫기
    $('.js-close').click(function () {
        $('.login-area').addClass('close');
    })

    // 소셜 로그인시 발생
    function isLogIn(userName) {
        $('.js-login').addClass('blind');
        $('.user-name, .js-logout').removeClass('blind');
        $('.user-name').text(userName + ' | ');
        $('#status').text(userName + '님, 반가워요!!');
    }


    // facebook 
    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);

        if (response.status === 'connected') {
            testAPI();
        } else {
            document.getElementById('status').innerHTML = 'Please log ' +
                'into this app.';
        }
    }


    function checkLoginState() {
        FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
        });
    }

    window.fbAsyncInit = function () {
        FB.init({
            //2294227343980912 test
            // 963146510555981 firebase
            appId: '963146510555981',
            cookie: true,

            xfbml: true,
            version: 'v3.1'
        });


        FB.getLoginStatus(function (response) {
            if(response.status === 'connected') {
                statusChangeCallback(response);
            } else {
                $('.js-facebook').text('facebook 로그인');
                $('.js-facebook').click(function() {
                    FB.login(function(response){
                        statusChangeCallback(response);
                        location.reload();
                    });
                })
            }
        });

    };

    // Load the SDK asynchronously
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function (response) {
            console.log('Successful login for: ' + response.name);
            isLogIn(response.name);
            $('.js-logout').click(function() {
                FB.logout(function(response) {
                    location.reload();
                });
            })
        });
    }



    // 좋아요 버튼
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v3.2&appId=2294227343980912&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    

    //   google login
    function init() {
        console.log('init');
        gapi.load('auth2', function () {
            console.log('auth2');
            var googleAuth = gapi.auth2.init({
                // 테스트용 157137554064-quoo1873d98og6al1lvkr9dbus7701b9.apps.googleusercontent.com
                //firebase 업로드용 
                //60054540194-40udkq8om77vkdu7o22vn3dgdhmcjjsq.apps.googleusercontent.com
                client_id: '60054540194-40udkq8om77vkdu7o22vn3dgdhmcjjsq.apps.googleusercontent.com'
            })
            googleAuth.then(function () {
                console.log('googleAuth seccess');
                console.log(googleAuth);
                if (googleAuth.isSignedIn.get()) {
                    // 로그인되었을때
                    var userName = googleAuth.currentUser.get().getBasicProfile()
                    console.log('login');
                    isLogIn(userName.getName());
                    $('.js-logout').click(function () {
                        googleAuth.signOut().then(function () {
                            location.reload();
                        })
                    })
                } else {
                    // 로그인되지 않았을때
                    console.log('logout');
                    $('.js-google').text('Google 로그인');
                    $('.js-google').click(function () {
                        googleAuth.signIn().then(function () {
                            location.reload();
                        })
                    });
                }
            }, function (err) {
                console.log(err);
            })
        });
    }
    init();
})