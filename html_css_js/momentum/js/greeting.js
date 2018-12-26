
const form  = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting"),
    remove = document.querySelector(".js-remove");

const USER_LS = "currentUser",
    SHOWING_CL = "showing";

// 입력한 이름 제거 함수
function removeName() {
    localStorage.removeItem(USER_LS);
    greeting.classList.remove(SHOWING_CL);
    remove.classList.remove(SHOWING_CL);
    input.value = '';
    adkForName();
}

// input 에 입력한 사용자 이름을 저장
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

// form 의 이벤트 처리 함수
function handleSubmit(e) {
    e.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

// 로컬 스토리지에 정보가 없을때 실행 할 함수정의
function adkForName() {
    form.classList.add(SHOWING_CL);
    // 이벤트 제거
    form.addEventListener("submit", handleSubmit)
}

// 로컬스토리지에 정보가 존재할때 실행할 함수
function paintGreeting(text) {
    form.classList.remove(SHOWING_CL);
    greeting.classList.add(SHOWING_CL);
    remove.classList.add(SHOWING_CL);
    remove.addEventListener("click", removeName);
    greeting.innerText = `Hello ${text}`
}

// 로컬스토리지에 저장된 정보의 존재 여부로 함수 실행
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        adkForName()
    } else {
        paintGreeting(currentUser);
    }
}


function init() {
    loadName()
}

init();