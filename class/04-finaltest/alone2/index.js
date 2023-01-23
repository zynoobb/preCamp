// 폰번호 체크 길이 넘어가면 자동으로 이동
const phone1 = document.querySelector("#phone1");
const phone2 = document.querySelector("#phone2");
const phone3 = document.querySelector("#phone3");

const buttonOnStyle = "color : #0068ff; cursor : pointer ; border : 1px solid #0068ff;"
const tokkenNumberSend = document.querySelector('#tokken_number_send')
const tokkenNumber = document.querySelector('#tokken_number')
const acceptTime = document.querySelector('#accept_time')
const acceptCheck = document.querySelector('#accept_check')
const joinUsBtn = document.querySelector('#joinUsBtn')

let interval = null;

// 폰 번호
function phone1focus() {
    if (phone1.value.length == 3) {
        phone2.focus();
    }
}
function phone2focus() {
    if (phone2.value.length == 4) {
        phone3.focus();
    }
}
function phone3focus() {
    if (
        phone1.value.length == 3 &&
        phone2.value.length == 4 &&
        phone3.value.length == 4
    ) {
        tokkenNumberSend.style = buttonOnStyle;
        tokkenNumberSend.removeAttribute("disabled")
    }
}

function tokkenAction() {
    clearInterval(interval)
    const getToken = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    tokkenNumber.innerText = getToken
    
    tokkenNumberSend.innerText = "인증번호 재전송"
    acceptCheck.innerText = "인증확인"
    acceptCheck.style = "background-color : #0068ff ; color : white"
    acceptCheck.removeAttribute("disabled")
    timeStart()
}
function timeStart() {
    time = 5
    interval = setInterval(timer, 1000)
}
function timer() {
    if(time >= 0) {
        let min = Math.floor(time/60)
        let sec = String(time%60).padStart(2,"0")
        acceptTime.innerText = `${min} : ${sec}`
        time--;
    } else {
        acceptCheck.setAttribute("disabled", true)
        acceptCheck.style = !buttonOnStyle
    }
}

function certifyAction() {
    alert("인증이 완료되었습니다.")
    clearInterval(interval)
    joinUsBtn.style = buttonOnStyle
    acceptTime.innerText = "3 : 00"
    joinUsBtn.removeAttribute("disabled", true)
    acceptCheck.innerText = "인증완료"
    acceptCheck.style = !buttonOnStyle
}

function joinUs() {
    let inputEmail = document.querySelector('#input_email')
    let inputName = document.querySelector('#input_name')
    let inputPassword1 = document.querySelector('#input_password1')
    let inputPassword2 = document.querySelector('#input_password2')
    let region = document.querySelector('#region')
    let femaleInput = document.querySelector('#female_input')
    let maleInput = document.querySelector('#male_input')
    
    let allChecked = true

    if(inputEmail.value == "" || inputEmail.value.includes('@')== false) {
        allChecked = false
        document.querySelector('#err_email').innerText = "올바른 이메일 형식이 아닙니다."
    } else {
        document.querySelector('#err_email').innerText = ""
    }

    if(inputName.value == ""){
        allChecked = false
        document.querySelector('#err_name').innerText = "이름을 입력해주세요."
    } else {
        document.querySelector('#err_name').innerText = ""
    }

    if(inputPassword1.value == ""){
        allChecked = false
        document.querySelector('#err_password1').innerText = "비밀번호를 입력해주세요."
    } else {
        document.querySelector('#err_password1').innerText = ""
    }

    if(inputPassword2.value == "" || inputPassword1.value != inputPassword2.value){
        allChecked = false
        document.querySelector('#err_password2').innerText = "비밀번호가 일치하지 않습니다."
    } else {
        document.querySelector('#err_password2').innerText = ""
    }

    if(region.value == "0"){
        allChecked = false
        document.querySelector('#err_region').innerText = "지역을 선택해주세요."
    } else {
        document.querySelector('#err_region').innerText = ""
    }

    if(femaleInput.checked == false && maleInput.checked == false){
        allChecked = false
        document.querySelector('#err_gender').innerText = "성별을 선택해주세요."
    } else {
        document.querySelector('#err_gender').innerText = ""
    }

    if(allChecked == true){
        alert("코드캠프 가입을 축하합니다.")
    }
}
