let isStarted = false;

const auth = () => {

    if(isStarted === false){
        // 타이머가 작동 중이 아닐 때
    isStarted = true
    document.getElementById("complete").disabled = false
    document.getElementById("")
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("target").innerText = token
    document.getElementById("target").style.color = "#" + token
    
    let time = 180
    let timer

    timer = setInterval(() => {
        if(time>=0){
            let min = Math.floor(time/60)
            // 3:0으로 나타나지 않기 위해, '나머지'를 문자열화 한 후, padStart 활용
            let sec = String(time%60).padStart(2,"0")
            // 이때 원하는 위치인 id="timer"에 시간이 입력되게끔 함
            document.getElementById("timer").innerText = min + ":" + sec
            // 시간을 하나씩 빼는 것 잊지 않기
            time=time-1
        } else {
            document.getElementById("complete").disabled = true
            isStarted = false;
            clearInterval(timer)
        }
        }, 1000);

    } else {
    // 타이머가 작동 중일 때


    }
}