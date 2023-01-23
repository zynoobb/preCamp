let time = null;
let interval = null;

const auth = () => {
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("target").innerText = token
    document.getElementById("target").style.color = "#" + token
    // **추가한 내용 0:00초가 된 뒤, 다시 인증번호 전송버튼을 누를 시 시간 초기화 및 / 버튼 활성화
    document.getElementById("timer").innerText = "3:00"
    document.getElementById("complete").disabled = false
    timeReset()
    timeStart()
    }

let timeStart = () => {
    time = 179
    interval = setInterval(timeChecker, 1000)
}
let timeReset = () => {
    clearInterval(interval)
}

let timeChecker = () => {
    if(time>=0){
        // 3:0으로 나타나지 않기 위해, '나머지'를 문자열화 한 후, padStart 활용
        let min = Math.floor(time/60)
        let sec = String(time%60).padStart(2,"0")
        // 이때 원하는 위치인 id="timer"에 시간이 입력되게끔 함
        document.getElementById("timer").innerText = min + ":" + sec
        // 시간을 하나씩 빼는 것 잊지 않기
        time=time-1
        console.log("손끝으로돌리며시곗바늘아달려봐")
    } else {
        document.getElementById("complete").disabled = true
    }
    }