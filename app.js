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

const elementsHandlers = (() => {
    elements.button.addEventListener('click', getLocalWeather);
})();

async function getLocalWeather() {
    try {
        let location = elements.input.value;
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0a7116bb4c058a3743fcaa50e8b100f6`, {mode: 'cors'});
        let cityInfo = await response.json();
        console.log(cityInfo);
    } catch (err) {
        console.log(err);
    };
};