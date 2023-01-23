const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")

const savedTodoList = JSON.parse(localStorage.getItem("saved-items"))
const savedWeatherData = JSON.parse(localStorage.getItem('saved-weather'));

const createTodo = function (storageData) {
    let todoContents = todoInput.value
    if(storageData){
        todoContents = storageData.contents
    }

    const newLi = document.createElement('li')
    const newSpan = document.createElement('span')
    const newBtn = document.createElement('button')

    newBtn.addEventListener('click', ()=> {
        newLi.classList.toggle('complete')
        saveItemsFn()
    })
    
    newLi.addEventListener('dblclick',()=> {
        newLi.remove()
        saveItemsFn()
    })

    // 옵셔널 체이닝
    if(storageData?.complete) {
        newLi.classList.add('complete')
    }

    newSpan.textContent = todoContents;
    newLi.appendChild(newBtn)
    newLi.appendChild(newSpan)
    todoList.appendChild(newLi)
    todoInput.value = "";
    saveItemsFn()
}

const keyCodeCheck = function () {
    if(window.event.keyCode === 13 && todoInput.value.trim() !== ""){
        createTodo()
    }
}

const deleteAll = function () {
    const liList = document.querySelectorAll('li')
    for(let i = 0; i<liList.length ; i++){
        liList[i].remove()
    }
    saveItemsFn()
}

const saveItemsFn = function () {
    const saveItems = [];
    for(let i = 0 ; i < todoList.children.length; i++) {
        const todoObj = {
            contents : todoList.children[i].querySelector('span').textContent,
            complete : todoList.children[i].classList.contains('complete')
        }
        saveItems.push(todoObj)
    }

    saveItems.length === 0 
    ? localStorage.removeItem('saved-items') 
    : localStorage.setItem('saved-items', JSON.stringify(saveItems))
    // 빈 공간이면 걍 지워버림
    // if(saveItems.length === 0){
    //     localStorage.removeItem('saved-items')
    // } else {
    // localStorage.setItem('saved-items', JSON.stringify(saveItems))
    // }
}

// createTodo 호이스팅 때문에 맨 아래로 내려주었음
if(savedTodoList){
    for(let i=0; i<savedTodoList.length; i++) {
        createTodo(savedTodoList[i])
    }
}

const weatherDataActive = function ({location, weather}) {
    const weatherMainList = [
        'Clear',
        'Clouds',
        'Drizzle',
        'Fog',
        'Rain',
        'Snow',
        'Thunderstorm',
    ]
    // 가지고 있지 않은 이름이 들어왔을 때, fog로 설정
    weather = weatherMainList.includes(weather) ? weather : "fog"
    const locationNameTag = document.querySelector("#location-name-tag")
    locationNameTag.textContent = location;
    console.log(weather)
    document.body.style.backgroundImage = `url(./images/${weather}.jpg)`

    // 저장되어 있는 날씨 데이터가 없거나, 위치와 날씨가 다르다면 저장
    if(!savedWeatherData || 
        savedWeatherData.location !== location ||
        savedWeatherData.weather !== weather) {
        localStorage.setItem('saved-weather', JSON.stringify({ location, weather }));
    } 
}

// API key = 6c411b7af62db250e78fb02b0ec6519a
// weather API
const weatherSearch = function ({latitude, longitude}) {
    const openWeatherRes = 
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6c411b7af62db250e78fb02b0ec6519a`
    ).then((res)=> {
        return res.json()
    }).then((json) => {
        const weatherData = {
            location : json.name,
            weather : json.weather[0].main
        }
        weatherDataActive(weatherData)
    })
    .catch((err) => {
        console.error(err)
    })
}


// 구조 분해할당
const accessToGeo = function ({coords}) {
    const {latitude, longitude} = coords
    // shorthand property
    const positionObj = {
        latitude,
        longitude,
    }
    weatherSearch(positionObj)
}

// latitude 위도 // longitude 경도 geolocation API
const askForLocation = function () {
    navigator.geolocation.getCurrentPosition(accessToGeo, (err)=> {
        console.log(err)
    })    
}
askForLocation()

if(savedWeatherData) {
    weatherDataActive(savedWeatherData);
}