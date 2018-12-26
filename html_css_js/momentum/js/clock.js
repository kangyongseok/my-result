const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector('.js-title');

// 시간 분 초 호출 함수
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

// 정의한 함수의 실행 함수
function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();