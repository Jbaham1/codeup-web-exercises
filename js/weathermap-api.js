$(document).ready(function () {
    //AJAX call to openWeather
    let weatherObj = $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID, //API key
        q: "San Antonio, US",
        units: "imperial"
    }).done(function (data) {
        console.log(data)
        let iconUrl = `http://openweathermap.org/img/wn${data.list[0].weather[0].icon}@2x.png`;
        let iconImage = `<img src=${iconUrl} width="50 height="50>`
        $('p').append(iconImage)
    });
});

