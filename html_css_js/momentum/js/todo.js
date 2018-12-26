const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-todoList"),
    record = document.querySelector('.js-record'),
    recordUl = record.querySelector('.js-complete'),
    recordDelete = document.querySelector('.js-record-delete');
    recordDeleteUl = recordDelete.querySelector('.js-delete');

const TODOS_LS = 'toDos';
const COMPLETE_LS = 'complete';
const DELETE_LS = 'delete';


let toDos = [];
let completes = [];
let deleteList = [];


// deleteToDoList

function saveDelete() {
    const stringDelete = JSON.stringify(deleteList);
    localStorage.setItem(DELETE_LS, stringDelete);
}


function deleteToDoList(li) {
    const deleteLi = document.createElement("li");
    console.log(li.textContent);
    recordDeleteUl.appendChild(deleteLi);
    deleteLi.innerHTML = li.textContent;
    const config = {
        delList: li.textContent
    }
    deleteList.push(config);
    saveDelete();
}




// todo 를 JSON 형태로 변환하여 로컬스토리지에 저장
function saveComplete() {
    const stringComplete = JSON.stringify(completes);
    localStorage.setItem(COMPLETE_LS, stringComplete);
}

function paintComplete(span) {
    const compLi = document.createElement("li");
    recordUl.appendChild(compLi);
    compLi.innerHTML = span.textContent;
    const config = {
        comList : span.textContent
    }
    completes.push(config);
    saveComplete();
}




// ToDo 리스트 클릭시 완료 표시
function completeToDo(e) {
    const toDoLi = e.target.parentNode;
    const toDoSpan = toDoLi.querySelector("span");
    if(toDoSpan.className === "complete") {
        toDoSpan.classList.remove("complete");
    } else {
        // 완료한 항목
        toDoSpan.classList.add("complete");
        paintComplete(toDoSpan);
    }
}

// Complete ToDo 에 등록된 리스트 삭제
function deleteComplete(li) {
    const clearnComplete = completes.filter(complete => complete.comList !== li.textContent);
    completes = clearnComplete;
    saveComplete();
    const completeLi = recordUl.querySelectorAll("li");
    console.log(completeLi, li.textContent);
    [...completeLi].filter(completeLi => completeLi.textContent === li.textContent ? completeLi.remove() : completeLi);
    // completeLi.filter(completeLi => completeLi.textContent === li.textContent ? completeLi.remove() : completeLi);
}


// todo 를 삭제
function deleteToDo(e) {
    const btn = e.target;
    const li = btn.parentNode.parentNode;
    toDoList.removeChild(li);
    // toDos 배열 전체를 돌면서 toDos가 가진 전체 아이디값과 클릭된 li의 아이디값을 비교하여
    // 값이 다른것만 필터링해서 새로운 배열 생성
    const clearnToDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    toDos = clearnToDos;
    saveToDos();
    if(li.querySelector('span').className === "complete") {
        deleteComplete(li);
        // location.reload();
    }
    deleteToDoList(li);
}

// todo 를 JSON 형태로 변환하여 로컬스토리지에 저장
function saveToDos() {
    const stringToDos = JSON.stringify(toDos);
    localStorage.setItem(TODOS_LS, stringToDos);
}


// todo 를 화면에 뿌려줌
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerHTML = `<i class="far fa-minus-square"></i>`;  
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    span.addEventListener("click", completeToDo)
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        id: newId,
        text: text
    };
    toDos.push(toDoObj);
    saveToDos();
}

// input 에 값을 제출 했을때 발생하는 함수
function handleSubmit(e) {
    e.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

// todo 의 텍스트를 받아옴
function something(toDo) {
    paintToDo(toDo.text);
}


// 로컬스토리지에 저장되어있던 데이터를 다시 배열 형태로 변환
function loadToDos() {
    // todo
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parseToDos = JSON.parse(loadedToDos);
        parseToDos.forEach(something);
    }

    // complete
    const loadedComplete = localStorage.getItem(COMPLETE_LS);
    if(loadedComplete !== null) {
        const parseComplete = JSON.parse(loadedComplete);
        parseComplete.forEach(function(text) {
            var listSpan = document.querySelectorAll(".js-todoList li span");
            const compLi = document.createElement("li");
            recordUl.appendChild(compLi);
            compLi.innerText = text.comList;
            for(let i = 0; i < listSpan.length; i++) {
                if(text.comList === listSpan[i].textContent) {
                    listSpan[i].classList.add("complete")
                }
            }
            completes.push(
                {comList: text.comList}
            );
        })
    }

    // delete
    const loadedDelete = localStorage.getItem(DELETE_LS);
    if(loadedDelete !== null) {
        const parseDelete = JSON.parse(loadedDelete);
        parseDelete.forEach(function(text) {
            const delLi = document.createElement("li");
            recordDeleteUl.appendChild(delLi);
            delLi.innerText = text.delList;
            deleteList.push(
                {delList: text.delList}
            );
        })
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();