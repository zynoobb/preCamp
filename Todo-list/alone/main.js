const inputTodo = document.querySelector("#input_todo");
const ulList = document.querySelector("#ul_list");
const savedTodoList = JSON.parse(localStorage.getItem("saved-items-alone"));
const savedWeatherData = JSON.parse(
    localStorage.getItem("saved-weather-alone")
);

const render = function (storageData) {
    // 스토리지 데이터 render
    let todoContents = inputTodo.value;
    if (storageData) {
        todoContents = storageData.contents;
    }

    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    newBtn.addEventListener("click", () => {
        newLi.classList.toggle("complete");
        saveItemsFn();
    });
    newLi.addEventListener("dblclick", () => {
        newLi.remove();
        saveItemsFn();
    });
    // 스토리지 데이터 complete // 옵셔널 체이닝
    if (storageData?.complete) {
        newLi.classList.add("complete");
    }
    newSpan.textContent = todoContents;
    newLi.classList.add("li_class");
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    ulList.appendChild(newLi);
    inputTodo.value = "";
    saveItemsFn();
};

const keyCodeCheck = function () {
    if (window.event.keyCode == 13 && inputTodo.value.trim() !== "") {
        render();
    }
};

const deleteAll = function () {
    const liListAll = document.querySelectorAll("li");
    for (let i = 0; i < liListAll.length; i++) {
        liListAll[i].remove();
    }
    saveItemsFn();
};
// 객체에 저장 / 로컬스토리지 저장
const saveItemsFn = function () {
    const saveItems = [];
    for (let i = 0; i < ulList.children.length; i++) {
        const todoObj = {
            contents: ulList.children[i].querySelector("span").textContent,
            complete: ulList.children[i].classList.contains("complete"),
        };
        saveItems.push(todoObj);
    }

    saveItems.length == 0
        ? localStorage.removeItem("saved-items-alone")
        : localStorage.setItem("saved-items-alone", JSON.stringify(saveItems));
};

if (savedTodoList) {
    for (let i = 0; i < savedTodoList.length; i++) {
        render(savedTodoList[i]);
    }
}
const weatherDataActive = function ({ location, weather, temp }) {
    const weatherMainList = [
        "Clear",
        "Clouds",
        "Drizzle",
        "Fog",
        "Rain",
        "Snow",
        "Thunderstorm",
    ];
    weather = weatherMainList.includes(weather) ? weather : "Fog";

    const locationNameTag = document.querySelector("#location_name_tag");
    const locationTempTag = document.querySelector("#location_temp_tag");
    const tempC = (temp - 273.15).toFixed(1);

    document.querySelector(
        ".outdoor"
    ).style.backgroundImage = `url(./images/${weather}.jpg)`;
    locationNameTag.textContent = location;
    locationTempTag.textContent = `${tempC}도`;

    if (
        !savedWeatherData ||
        savedWeatherData.location !== location ||
        savedWeatherData.weather !== weather ||
        savedWeatherData.temp !== temp
    ) {
        localStorage.setItem(
            "saved-weather-alone",
            JSON.stringify({ location, weather, temp })
        );
    }
};

const weatherSearch = function ({ latitude, longitude }) {
    const openWeatherRes = fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6c411b7af62db250e78fb02b0ec6519a`
    )
        .then((res) => {
            // header 가 있으면 JSON.parse 안 먹힘
            return res.json();
        })
        .then((json) => {
            const weatherData = {
                location: json.name,
                weather: json.weather[0].main,
                temp: json.main.temp,
            };
            weatherDataActive(weatherData);
        })
        .catch((err) => {
            // then 을 수행하는 과정 중 에러가 발생하면 catch 발생
            console.log(err);
        });
};

// geo
const accessToGeo = function ({ coords }) {
    const { latitude, longitude } = coords;
    const positionObj = {
        latitude,
        longitude,
    };
    weatherSearch(positionObj);
};

// geo
const askForLocation = function () {
    navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
        console.log(err);
    });
};
askForLocation();

if (savedWeatherData) {
    weatherDataActive(savedWeatherData);
}
