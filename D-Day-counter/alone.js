// starter 함수
// interval / clearInterval
// 로컬스토리지
const focus1 = () => {
    let inputYear = document.querySelector("#input-year").value
    if(inputYear.length == 4){
        document.querySelector("#input-month").focus();
    }
}
const focus2 = () => {
    let inputMonth = document.querySelector("#input-month").value
    if(inputMonth.length == 2){
        document.querySelector("#input-days").focus();
    }
}
const focus3 = () => {
    let inputDays = document.querySelector("#input-days").value
    if(inputDays.length == 2){
        document.querySelector("#start-btn").click();
        console.log("카운트다운 버튼 클릭")
    }
}

// input시간 - 현재시간 = 남은 시간
console.log(new Date("mar 1, 1994"))
console.log(new Date("1994-03-01").setHours(0, 0, 0, 0))
console.log(new Date("2022-12-27").setHours(0, 0, 0, 0))
console.log((new Date("2016").setHours(0, 0, 0, 0))/36000000)

// input
const dateformMaker = function () {
    let inputYear = document.querySelector("#input-year").value
    let inputMonth = document.querySelector("#input-month").value
    let inputDays = document.querySelector("#input-days").value
    let inputDateForm = `${inputYear}-${inputMonth}-${inputDays}`
    return inputDateForm
}
// 현재
const counterMaker = function () {
    const inputDate = dateformMaker()
    let nowDate = new Date
    let targetDate = new Date(inputDate).setHours(0, 0, 0, 0)
    let remainingDate = (targetDate - nowDate)/1000
    document.querySelector(".container").style = "display:flex";
    let wrongInput = document.querySelector("#wrongInput")
    wrongInput.innerHTML = ""
    if (remainingDate <= 0) {
        wrongInput.innerHTML = "<h3>타이머가 종료되었습니다.</h3>"
        document.querySelector(".container").style = "display:none";
    } else if (isNaN(remainingDate)) {
        wrongInput.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>"
        document.querySelector(".container").style = "display:none";
    }
    
    remainingObj = {
        remainingDays : Math.floor((remainingDate / 3600) / 24),
        remainingHours : Math.floor((remainingDate / 3600) % 24),
        remainingMins : Math.floor((remainingDate / 60) % 60),
        remainingSecs : Math.floor(remainingDate % 60)
    }

    documentObj = {
        days : document.querySelector("#days"),
        hours : document.querySelector("#hours"),
        mins : document.querySelector("#mins"),
        secs : document.querySelector("#secs")
    }

    const remainKeys = Object.keys(remainingObj)
    const docuKeys = Object.keys(documentObj)
    
    for(let i = 0; i<remainKeys.length; i++){
        documentObj[docuKeys[i]].textContent = remainingObj[remainKeys[i]]
    }

    console.log(documentObj.days)
    console.log(documentObj["days"])
    console.log(remainingObj.remainingDays)
    console.log(remainingObj["remainingDays"])
    
}


