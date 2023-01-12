async function getLocalWeather(city) {
    try {
        let result = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=0a7116bb4c058a3743fcaa50e8b100f6`, {mode: 'cors'});
        console.log(result);
    } catch (err) {
        console.log(err);
    };
};
