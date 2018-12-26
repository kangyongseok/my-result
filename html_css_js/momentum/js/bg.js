const body = document.querySelector("body");

const IMG_NUMBER = 4;

// 랜덤하게 이미지를 가져와 화면에 뿌려주는 함수
function paintImages(imgNumnber) {
    const image = new Image();
    image.src = `./images/${imgNumnber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

// 랜덤 숫자를 리턴하는 함수
function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number
}

function init() {
    const randomNumber = genRandom();
    paintImages(randomNumber);
}

init();

// setInterval(init, 20000);