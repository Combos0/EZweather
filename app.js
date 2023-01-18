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
    scale: '',
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
currentInfo.scale = 'kelvin';
};

function kelvinToFahrenheit(K) {
    let anwser = (1.8 * (K - 273.15) + 32);
    currentInfo.scale = 'Fahrenheit';
    return anwser;
};

function fahrenheitToCelcius(F) {
    let anwser = (((F - 32) * 5) / 9);
    currentInfo.scale = 'Celcius';
    return anwser;
};

function celciusToFahrenheit(C) {
    let anwser = (((C * 9) / 5) + 32);
    currentInfo.scale = 'Fahrenheit';
    return anwser;
};

function printsTemps() {
    console.log(`currentScale: ${currentInfo.scale}, currentTemp: ${currentInfo.currentTemp}, dailyHigh: ${currentInfo.dailyHigh}, dailyLow: ${currentInfo.dailyLow}`)
}

function getsRidOfKelvin() {
    currentInfo.currentTemp = kelvinToFahrenheit(currentInfo.currentTemp);
    currentInfo.dailyHigh = kelvinToFahrenheit(currentInfo.dailyHigh);
    currentInfo.dailyLow = kelvinToFahrenheit(currentInfo.dailyLow);
    console.log(currentInfo.currentTemp, currentInfo.dailyHigh, currentInfo.dailyLow);
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
        getsRidOfKelvin();
        console.log(currentInfo);
    } catch (err) {
        console.log(err);
    };
};