let time = null;
let interval = null;
let joinBtn = document.getElementById("joinBtn")
joinBtn = false;


const changeFocus1 = () => {
    let phone1 = document.getElementById("p1").value;
    if (phone1.length === 3) {
        document.getElementById("p2").focus();
    }
};
const changeFocus2 = () => {
    let phone2 = document.getElementById("p2").value;
    if (phone2.length === 4) {
        document.getElementById("p3").focus();
    }
};

const changeFocus3 = () => {
    let phone3 = document.getElementById("p3").value;
    if(phone3.length === 4){
        document.getElementById("sendBtn").disabled = false;
        document.getElementById("sendBtn").style.background = "#0068ff"
        document.getElementById("sendBtn").style.color = "#ffffff"
        document.getElementById("complete").style.background = "#0068ff"
        document.getElementById("complete").style.color = "#ffffff"
    }
}

const auth = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("target").innerText = token;
    // **추가한 내용 0:00초가 된 뒤, 다시 인증번호 전송버튼을 누를 시 시간 초기화 및 / 버튼 활성화
    document.getElementById("timer").innerText = "3:00";
    document.getElementById("complete").style.color = "white"
    document.getElementById("complete").style.background = "#0068ff"
    document.getElementById("complete").disabled = false;
    document.getElementById("complete").innerText = "인증확인";

    timeReset();
    timeStart();
    console.log("in auth",document.getElementById("complete").disabled)
};

let timeStart = () => {
    time = 179;
    interval = setInterval(timeChecker, 1000);
};
let timeReset = () => {
    clearInterval(interval);
};

let timeChecker = () => {
    if (time >= 0) {
        // 3:0으로 나타나지 않기 위해, '나머지'를 문자열화 한 후, padStart 활용
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        // 이때 원하는 위치인 id="timer"에 시간이 입력되게끔 함
        document.getElementById("timer").innerText = min + ":" + sec;
        // 시간을 하나씩 빼는 것 잊지 않기
        time = time - 1;
        console.log("in timechecker on",document.getElementById("complete").disabled)

    } else {
        document.getElementById("complete").disabled = true;
        document.getElementById("sendBtn").style.background = "#0068ff"
        document.getElementById("sendBtn").style.color = "#ffffff"
        document.getElementById("complete").style.background = "#ffffff"
        document.getElementById("complete").style.color = "#797979"
        console.log("in timechecker off",document.getElementById("complete").disabled)

    }
};

let certifyClear = () => {
    if(document.getElementById("complete").disabled == false &&
    document.getElementById("sendBtn").disabled == false){
        document.getElementById("complete").innerText = "인증완료";
        document.getElementById("complete").style.background = "#ffffff";
        document.getElementById("complete").style.color = "#797979";
        timeReset();
        document.getElementById("timer").innerText = "";
        document.getElementById("joinBtn").style.border = "1px solid #0068ff";
        document.getElementById("joinBtn").style.color = "#0068ff";
        document.getElementById("joinBtn").disabled =false;
        alert("인증이 완료되었습니다.")
    } else {
        alert("인증이 필요합니다.")
    }
}

let joinUs = () => {
    let female = document.getElementById("female")
    let male = document.getElementById("male")
  
    if(document.getElementById("noneEmail").value,
    document.getElementById("noneName").value,
    document.getElementById("nonePw1").value, 
    document.getElementById("nonePw2").value !== ""
    && document.getElementById("noneEmail").value.includes("@") !== false
    && document.getElementById("nonePw1").value === document.getElementById("nonePw2").value
    && (document.getElementById("p1").value).length == "3"
    && (document.getElementById("p2").value).length == "4"
    && (document.getElementById("p3").value).length == "4"
    && document.getElementById("selectRegion").value != ""
    && (female.checked == true || male.checked == true)
    ){
        alert("가입이 완료되었습니다.")
    } else if(document.getElementById("noneEmail").value == ""){
        document.getElementById("redEmail").style.display = "block"
        console.log("Wrong Email")
    } else if(document.getElementById("noneEmail").value.includes("@") !== true){
        document.getElementById("redEmail").style.display = "block"
        console.log("Fail Email @")
    } else if(document.getElementById("noneName").value == ""){
        document.getElementById("redName").style.display = "block"
        console.log("Wrong Name")
    } else if(document.getElementById("nonePw1").value == ""){
        document.getElementById("redPw1").style.display = "block"
        console.log("Fail Pw1")
    } else if(document.getElementById("nonePw2").value == ""){
        console.log("fail Pw2")
        document.getElementById("redPw2").style.display = "block"
    } else if(document.getElementById("nonePw1").value != document.getElementById("nonePw2").value){
        console.log("Fail Pw2")
        document.getElementById("redPw2").style.display = "block"
    } else if((document.getElementById("p1").value).length != "3"){
        document.getElementById("redP123").style.display = "block"
        console.log("Fail PhoneNumber")
    } else if((document.getElementById("p2").value).length != "4"){
        document.getElementById("redP123").style.display = "block"
        console.log("Fail PhoneNumber")
    } else if((document.getElementById("p3").value).length != "4"){
        document.getElementById("redP123").style.display = "block"
        console.log("Fail PhoneNumber")
    } else if(document.getElementById("selectRegion").value == ""){
        document.getElementById("redRegion").style.display = "block"
        console.log("fail region")
    } else if((female.checked == false && male.checked == false)){
        document.getElementById("redGender").style.display = "block"
        console.log("fail gender")
    } else {
        console.log("큰일남")
    }
}


// 개선해야 할 점
// "오류"를 띄울 공간을 미리 만들어두는 것이 좋아보임
// if문을 구분하여 제작할 필요있어보임 // 레퍼런스에서는 변수를 하나 창출해서 활용했음