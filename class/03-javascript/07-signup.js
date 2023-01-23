const checkValidation = function () {

    let email = document.getElementById("email").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value

    // 이때 if(email&&pw1&&pw2){ 값은 문자열 0이 아닌, 
    // 숫자열 "0"로 반환되므로 true값을 반환함
    if(email&&pw1&&pw2){
        // 모든 input이 비어있지 않을 때
        document.getElementById("submit").disabled = false
    } else {
        // 하나라도 비어있을 때
        document.getElementById("submit").disabled = true
    }
}
