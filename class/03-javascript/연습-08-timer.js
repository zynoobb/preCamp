// // 시간 지연 함수 // 한번
// setTimeout(function(){
//     console.log("펑")
// },3000)

// // 시간 반복 함수 // 여러 번
// setInterval(function(){
//     console.log("퍼퍼펑퍼펑")
// },10000)

// // 10초까지만 타이머를 진행하게 할 수 있음
// let time = 10

// setInterval(function(){
//     if(time >= 0){
//     console.log(time)
//     time = time -1
//     }
// }, 1000)

let time = 180
setInterval(() => {
    if(time>=0){
        let min = Math.floor(time/60)
        let sec = String(time%60).padStart(2,"0")
        console.log(`${min}:${sec}`)
        time=time-1
    } 
}, 1000);