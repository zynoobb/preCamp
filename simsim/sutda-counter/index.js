// 선수 이름을 객체로 관리할 것. 이름 & 번호
let pointList = document.querySelector("#ul_point");
let personAddInput = document.querySelector("#person_add_input");

let mainArr = [];
let mainObj = {};

let personAddEnter = function () {
    if (window.event.keyCode == 13) {
        personAdd();
    }
};

// 2. 리스트 만들기
let addList = function (arr) {
    // 2-1 기존 요소 삭제
    let list = document.querySelectorAll(".pointList_class");
    for (let i = 0; i < list.length; i++) {
        list[i].remove();
    }
    // 2-2 리스트 재랜더링
    for (let i = 0; i < arr.length; i++) {
        let newLi = document.createElement("li");
        newLi.classList.add("pointList_class");
        let nameSpan = document.createElement("span");
        nameSpan.classList.add("pointList_player");
        let resultSpan = document.createElement("span");
        let newHr = document.createElement("hr");

        nameSpan.textContent = arr[i].name;
        resultSpan.textContent = `현황 : 000,000원`;

        newLi.append(nameSpan, resultSpan, newHr);

        for (let k = 0; k < arr.length; k++) {
            if (i !== k) {
                let memberDiv = document.createElement("div");
                memberDiv.classList.add("pointList_mem");
                memberDiv.textContent = `${arr[k].name} :`;
                let memberSpan = document.createElement("span");
                memberSpan.id = `point_${i}_${k}`;
                console.log(memberSpan.id);
                memberDiv.appendChild(memberSpan);
                newLi.appendChild(memberDiv);
            }
        }

        pointList.appendChild(newLi);
    }
};

// 3. 게임 결과 입력 // 하위 div & input
let selectWrapper = document.querySelector("#select_wrapper");
let addSelect = function (arr) {
    let selectDivClassAll = document.querySelectorAll(".selectDivClass");
    for (let i = 0; i < selectDivClassAll.length; i++) {
        selectDivClassAll[i].remove();
    }

    for (let i = 0; i < arr.length; i++) {
        let selectDiv = document.createElement("div");
        selectDiv.classList.add("selectDivClass");
        let selectSpan = document.createElement("span");
        selectSpan.textContent = arr[i].name;
        let selectInput = document.createElement("input");
        selectInput.id = `select_input_${i}`;

        selectDiv.appendChild(selectSpan);
        selectDiv.appendChild(selectInput);
        selectWrapper.appendChild(selectDiv);
    }
};
// 6. 결과 입력 버튼 // 현황판 갱신
let render = function () {
    let selectPlayer = document.querySelector("#select_player");
    console.log("render");

    console.log(document.querySelector(`#select_input_0`).value);
    console.log(document.querySelector(`#select_input_1`).value);
    console.log(document.querySelector(`#select_input_2`).value);
    console.log(document.querySelector(`#select_input_3`).value);

    for (let i = 0; i < nameArr.length; i++) {
        if ((selectPlayer.value = i)) {
            for (let j = 0; j < (nameArr.length)*(nameArr.length-1); j++) {
                document.querySelector(`#point_${i}_${j}`).textContent +=
                    document.querySelector(`#select_input_${i}`).value;
            }
        }
    }
};

// 5. 1사분면 게임 내용창
let winnerSelect = function () {
    let selectPlayer = document.querySelector("#select_player");
    console.log(selectPlayer.value, "selectPlayer.value 값");
    console.log(nameArr);
    for (let i = 0; i < nameArr.length; i++) {
        if (selectPlayer.value == i) {
            console.log("으앙");
            document.querySelector(`#select_input_${i}`).style =
                "background-color : pink; cursor:default";
            document
                .querySelector(`#select_input_${i}`)
                .setAttribute("disabled", true);
            document.querySelector(`#select_input_${i}`).value = "";
        } else {
            document.querySelector(`#select_input_${i}`).style =
                "background-color : white; cursor:pointer";
            document
                .querySelector(`#select_input_${i}`)
                .removeAttribute("disabled");
            document.querySelector(`#select_input_${i}`).value = "";
        }
    }
};

// 4. 승자이름 select
let nameAdd = function (arr) {
    let selectPlayer = document.querySelector("#select_player");
    let optClassAll = document.querySelectorAll(".optClass");

    for (let i = 0; i < optClassAll.length; i++) {
        optClassAll[i].remove();
    }

    for (let i = 0; i < arr.length; i++) {
        let newOpt = document.createElement("option");
        newOpt.classList.add("optClass");
        newOpt.value = i;
        newOpt.textContent = arr[i].name;
        selectPlayer.append(newOpt);
    }
};
// 1. 객체로 만든 뒤 저장
let nameArr = [];
let personAdd = function () {
    let inputValue = personAddInput.value;
    if (inputValue.trim() !== "") {
        nameArr.push(inputValue);
        mainArr = [];
        for (let i = 0; i < nameArr.length; i++) {
            mainObj = {};
            mainObj.name = nameArr[i];
            mainObj.num = i;
            mainArr.push(mainObj);
        }
        console.log(mainArr, "mainArr");
        personAddInput.value = "";
        addList(mainArr);
        addSelect(mainArr);
        nameAdd(mainArr);
    }
};
