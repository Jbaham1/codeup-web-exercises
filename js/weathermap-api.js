$(document).ready(function () {
    //AJAX call to openWeather
    let weatherObj = $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID, //API key
        q: "San Antonio, US",
        units: "imperial"
    }).done(function (data) {
        console.log(data)
    });
});

