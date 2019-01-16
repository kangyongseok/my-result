필요사항
===
- 리뉴얼 사이트 : [대한미세수술학회](http://www.microsurgery.or.kr/)
- 달력 : [https://fullcalendar.io/](https://www.cssscript.com/beautiful-pure-javascript-date-picker-with-events-support-datepickk-js/)  
- 아이콘 : [https://fontawesome.com](https://fontawesome.com)
- 웹폰트 : [https://fonts.google.com/](https://fonts.google.com/)
- underscore.js : [https://underscorejs.org/](https://underscorejs.org/)
- jQuery : [https://jquery.com/](https://jquery.com/)
- FullPage.js: [https://alvarotrigo.com/fullPage/ko/#page1](https://alvarotrigo.com/fullPage/ko/#page1)
- FullPage.js OPTION : [https://github.com/alvarotrigo/fullPage.js/tree/2.9.7](https://github.com/alvarotrigo/fullPage.js/tree/2.9.7)


내용
===

- 반응형 페이지
- Mobile first
- html, css, jQuery, js 라이브러리



IE 지원여부
===

HTML5 semantic elements 지원 여부
---

[확인하기](https://caniuse.com/#feat=html5semantic)

## IE9 이상 지원

- section, 
- article, 
- aside, 
- header, 
- footer, 
- nav, 
- figure, 
- figcaption, 
- time, 
- mark & main.

## IE8 이하 지원 방법

**`html5shiv.js`**
- 여기에는 IE6-8 용 createElement()monkeypatches document.createElement및 기본 shiv 기술 이 포함됩니다 
- [html5shiv.js 확인하기](https://github.com/aFarkas/html5shiv/blob/master/src/html5shiv.js)
```html
<header>
    <!-- [if It IE 9]>
        <script src="파일저장경로/html5shiv.js"></script>
    <![endif] -->
</header>
```

----



CSS
===

CSS Flexible Box Layout
---

## IE10 부터 지원

- IE10 display: -ms-flexbox 
- IE11 display: flex
- Chrome V.21 display: -webkit-flex
- Chrome V.29 display: flex

CSS3 Box-shadow
---

## IE9 부터 지원
