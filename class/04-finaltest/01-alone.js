let interval = null;
    
let changeP1 = () => {
    let phone1 = document.getElementById("phone1").value;
    if (phone1.length == 3){
        document.getElementById("phone2").focus();
    }
}
let changeP2 = () => {
    let phone2 = document.getElementById("phone2").value;
    if (phone2.length == 4){
        document.getElementById("phone3").focus();
    }
}

let changeP3 = () => {
    phone1 = document.getElementById("phone1").value;
    phone2 = document.getElementById("phone2").value;
    phone3 = document.getElementById("phone3").value;
    if (phone1.length == 3 && phone2.length == 4 && phone3.length == 4){
        document.getElementById("getToken").style = "background-color:#FFFFFF; color:#0068ff; cursor:pointer;"
        document.getElementById("getToken").removeAttribute("disabled")
    }
}


let action = () => {
    let token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("confirmTime").innerText = "3:00"
    document.getElementById("showToken").innerText = token
    document.getElementById("confirmToken").style = "background-color:#0068ff; color:white; cursor:pointer;"
    document.getElementById("confirmToken").removeAttribute("disabled")
    document.getElementById("confirmToken").innerText = "인증확인"
    timeisStop()
    timeisStart()
    console.log(token)
}

let timeisStart = () => {
    time = 5
    interval = setInterval(timeChecker, 1000)
}

let timeisStop = () => {
    clearInterval(interval)
}

let timeChecker = () => {
    if (time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        document.getElementById("confirmTime").innerText = min + ":" + sec;
        time -= 1;
    } else {
        document.getElementById("confirmToken").setAttribute("disabled", true)
        document.getElementById("confirmToken").style = "cursor:default; background-color=#ffffff;"
    }
}

let confirm = () => {
    if(document.getElementById("confirmToken").disabled == false &&
        document.getElementById("getToken").disabled == false){
            document.getElementById("confirmToken").setAttribute("disabled", true)
            document.getElementById("confirmToken").style = "cursor:default; background-color=#ffffff;"
            document.getElementById("confirmToken").innerText = "인증완료"
            document.getElementById("showToken").innerText = "000000"
            document.getElementById("join").style = "border : 1px solid #0068ff; color: #0068ff; cursor:pointer;"
            document.getElementById("join").removeAttribute("disabled", false)
            timeisStop();
            document.getElementById("confirmTime").innerText = "3:00"
            alert("인증이 완료되었습니다.")
    }
}

let joinUs = () => {
    let allClear = true

    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
    const password = document.getElementById("password").value
    const password2 = document.getElementById("password2").value
    const location = document.getElementById("location").value
    const female = document.getElementById("female").checked
    const male = document.getElementById("male").checked

    if(email.includes("@")===false||email === ""){
        document.getElementById("err_email").innerText = "이메일이 올바르지 않습니다."
        allClear = false
    } else {
        document.getElementById("err_email").innerText = ""
    }

    if(name === ""){
        document.getElementById("err_name").innerText = "이름을 입력해주세요."
        allClear = false
    } else {
        document.getElementById("err_name").innerText = ""
    }
    
    if(password === ""){
        document.getElementById("err_password").innerText = "비밀번호를 입력해주세요."
        allClear = false
    } else {
        document.getElementById("err_password").innerText = ""
    }
    
    if(password2 === ""){
        document.getElementById("err_password2").innerText = "비밀번호를 입력해주세요."
        allClear = false
    } else {
        document.getElementById("err_password2").innerText = ""
    }

    if(password !== password2){
        document.getElementById("err_password").innerText = "비밀번호가 일치하지 않습니다."
        document.getElementById("err_password2").innerText = "비밀번호가 일치하지 않습니다."
        allClear = false
    } 

    if(location === "0"){
        document.getElementById("err_location").innerText = "지역을 선택해주세요."
        allClear = false
    } else {
        document.getElementById("err_location").innerText = ""
    }

    if(female === false && male === false) {
        document.getElementById("err_gender").innerText = "성별을 입력해주세요."
        allClear = false
    } else {
        document.getElementById("err_gender").innerText = ""
    }

    if(allClear == true) {
        alert("코드캠프 가입을 축하합니다.")
    }
}
    