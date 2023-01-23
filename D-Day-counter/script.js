const messageContainer = document.querySelector("#d-day-message")
const container = document.querySelector("#d-day-counter")
const intervalIdArr = []

const savedDate = localStorage.getItem("saved-date")

const dateFormMaker = function () {
    const inputYear = document.querySelector("#target-year-input").value;
    const inputMonth = document.querySelector("#target-month-input").value;
    const inputDate = document.querySelector("#target-date-input").value;

    // const dateFormat = inputYear + "-" + inputMonth + "-" + inputDate
    const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
    const inputDataformat = document.querySelector("#input-data-format")
    inputDataformat.textContent = `${dateFormat} 까지`
    // 탬플릿 리터럴
    return dateFormat;
    // console.log(inputYear, inputMonth, inputDate)
};

const counterMaker = function (data) {
    if(data !== savedDate) {
        localStorage.setItem("saved-date",data)
    }
    container.style.display = "flex"
    const nowDate = new Date();
    const targetDate = new Date(data).setHours(0, 0, 0, 0);
    const remaining = (targetDate - nowDate) / 1000;
    if (remaining <= 0) {
        container.style.display = "none"
        messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>"
        messageContainer.style.display = "flex"
        setClearInterval()
        return;
    } else if (isNaN(remaining)) {
        container.style.display = "none"
        messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>"
        messageContainer.style.display = "flex"
        setClearInterval()
        return;
    }

    const remainingObj = {
        remainingDate : Math.floor(remaining / 3600 / 24),
        remainingHours : Math.floor(remaining / 3600) % 24,
        remainingMin : Math.floor(remaining / 60) % 60,
        remainingSec : Math.floor(remaining) % 60
    }
    // for문을 활용하여 객체를 매칭시키기
    // const docKeys = Object.keys(documentObj)
    const timeKeys = Object.keys(remainingObj)
    const documentArr = ['days', 'hours', 'min', 'sec']
    
    const format = function (time) {
        if(time < 10) {
            return "0" + time;
        } else {
            return time
        }
    }

    // 배열 for out문
    let i=0;
    for (let tag of documentArr){
        const remainingTime = format(remainingObj[timeKeys[i]])
        document.getElementById(tag).textContent = remainingTime
        i++
    }

};

const starter = function (targetDateInput) {
    setClearInterval();
    console.log(targetDateInput)
    if(!targetDateInput) {
        targetDateInput = dateFormMaker()
    }
    
    container.style.display = "flex"
    messageContainer.style.display = "none"
    counterMaker(targetDateInput)
    const intervalId = setInterval(() => {
    counterMaker(targetDateInput), 1000})
    intervalIdArr.push(intervalId)
    console.log(intervalIdArr)
}

const setClearInterval = function() {
    localStorage.removeItem("saved-date")
    for(let i = 0; i < intervalIdArr.length ; i++){
        clearInterval(intervalIdArr[i])
    }
}

const resetTimer = function () {
    container.style.display = "none"
    messageContainer.style.display = "flex"
    messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>"
    setClearInterval()
}

// if truty
if(savedDate) {
    starter(savedDate)
} else {
    container.style.display = "none"
    messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>"
}

// const documentObj = {
//     days : document.querySelector("#days"),
//     hours : document.querySelector("#hours"),
//     min : document.querySelector("#min"),
//     sec : document.querySelector("#sec")
// }

// 객체에 사용 for in문
// let i = 0;
// for(let key in documentObj) {
//     documentObj[key].textContent = remainingObj[timeKeys[i]]
//     i++
// }

// for(let i = 0 ; i< timeKeys.length; i = i+1){
//     documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]]
// }

// documentObj["days"].textContent = remainingObj["remainingDate"]
// documentObj["hours"].textContent = remainingObj["remainingHours"]
// documentObj["min"].textContent = remainingObj["remainingMin"]
// documentObj["sec"].textContent = remainingObj["remainingSec"]
