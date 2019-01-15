// CLASS 기반 플러그인 만들기

(function($) {
    

    // 클래스 정의
    function TabMenu() {
        this.tabMenu = null;
        this.tabMenuLi = null;
        this.tabMenuBar = null;
        this.tabContents = null;
        this.tabContentsDiv = null;
    };

    // selector 지정
    TabMenu.prototype.init = function(selector, options) {
        this.tabMenu = $(selector);
        this.tabMenuLi = this.tabMenu.children();
        this.tabMenuFirstNode = this.tabMenuLi[0]
        this.tabMenuBar = this.tabMenu.siblings();
        this.tabContents = this.tabMenu.parent().siblings();
        this.tabContentsDiv = this.tabContents.children();
        this.tabContentsFirstDiv = this.tabContentsDiv[0];
        this.initEvent(options);
    };

    // 이벤트 실행 
    TabMenu.prototype.initEvent = function(options) {
        var that = this;
        this.initBase(options);
        _.map(this.tabMenuLi, function(tabMenuLi, index) {
            that.clickTab(that, tabMenuLi, options, index);
        })
    };

    // 기본 디자인 (컬러값 받아옴)
    TabMenu.prototype.initBase = function(options) {
        $(this.tabMenuFirstNode).addClass("on");
        _.map(this.tabMenuLi, function(tabMenuLi) {
            if($(tabMenuLi).hasClass("on")) {
                $(tabMenuLi).css("color", "white")
            }
        });
        $(this.tabContentsFirstDiv).addClass("visible");
        $(this.tabMenuBar).css("border-top", "3px solid " + options.color)
    };

    // 클릭 이벤트 생성
    TabMenu.prototype.clickTab = function(that, tabMenuLi, options, index) {
        $(tabMenuLi).click(function() {
            that.tabEvent(tabMenuLi, options)
            that.tabContent(that, index);
            that.tabBarEvent(that, index, options);
        })
    };

    // 클릭시 발생할 탭 메뉴의 이벤트
    TabMenu.prototype.tabEvent = function(tabMenuLi, options) {
        $(tabMenuLi).addClass("on");
        $(tabMenuLi).siblings().removeClass("on");
        if($(tabMenuLi).hasClass("on")) {
            $(tabMenuLi).css("color", "white");
            $(tabMenuLi).siblings().css("color", options.color);
        }
    }

    // 클릭시 발생할 tabBar 의 이벤트
    TabMenu.prototype.tabBarEvent = function(that, index, options) {
        var barWidth = that.tabMenuBar.outerWidth();
        $(that.tabMenuBar).animate({marginLeft:barWidth * index}, options.bardelay)
    }

    // 클릭시 발생할 contents 의 상태
    TabMenu.prototype.tabContent = function(that, index) {
        $($(that.tabContentsDiv)[index]).addClass("visible");
        $($(that.tabContentsDiv)[index]).siblings().removeClass("visible");
    }

    // 디폴트 옵션
    $.defaultOptions = {
        color:"black",
        bardelay: 200
    }

    // 인스턴스 생성
    $.fn.tabClick = function(options) {
        options = $.extend(null, $.defaultOptions, options);
        this.each(function() {
            var tabMenuInstence = new TabMenu();
            tabMenuInstence.init(this, options);
            console.log(tabMenuInstence);
        })
    }
})(jQuery)


