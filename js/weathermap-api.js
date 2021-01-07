$(document).ready(function () {
    //AJAX call to openWeather
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID, //API key
        q: "San Antonio, US",
        units: "imperial"
    }).done(function (data) {
        console.log(data);
        let iconImage = '<img src="http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png"/>';
        $("body").append(iconImage)
    });


});