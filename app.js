async function getLocalWeather() {
    try {
        let location = elements.input.value;
        let result = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=0a7116bb4c058a3743fcaa50e8b100f6`, {mode: 'cors'});
        let cityName = await result.json();
        let lat = cityName[0].lat;
        let lon = cityName[0].lon;
        console.log(lat, lon);
    } catch (err) {
        console.log(err);
    };
};

const elements = {
    input: document.getElementById('city'),
    button: document.querySelector('button'),
};

const elementsHandlers = (() => {
    elements.button.addEventListener('click', getLocalWeather);
})();