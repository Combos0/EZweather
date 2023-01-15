const elements = {
    input: document.getElementById('city'),
    button: document.querySelector('button'),
};

let currentInfo = {
    name: '',
    lat: '',
    lon: '',
    currentTemp: '',
    dailyHigh: '',
    dailyLow: '',
    humidity: '',
    windDeg: '',
    windSpeed: '',
};

function storesFetchedData(cityObject) {
currentInfo.name = cityObject.name;
currentInfo.lat = cityObject.coord.lat;
currentInfo.lon = cityObject.coord.lon;
currentInfo.currentTemp = cityObject.main.temp;
currentInfo.dailyHigh = cityObject.main.temp_max;
currentInfo.dailyLow = cityObject.main.temp_min;
currentInfo.humidity = cityObject.main.humidity;
currentInfo.windDeg = cityObject.wind.deg;
currentInfo.windSpeed = cityObject.wind.speed;
};

const elementsHandlers = (() => {
    elements.button.addEventListener('click', getLocalWeather);
})();

async function getLocalWeather() {
    try {
        let location = elements.input.value;
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0a7116bb4c058a3743fcaa50e8b100f6`, {mode: 'cors'});
        let cityInfo = await response.json();
        storesFetchedData(cityInfo);
        console.log(currentInfo);
    } catch (err) {
        console.log(err);
    };
};