"use strict";

function getWeather() {
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lat: 38.627809633783436,
        lon: -90.18716564726147,
        units: "imperial"
    }).done(function (data) {
        console.log(data.daily);
        for (var i = 0; i < 5; i++) {
            //create string for div id
            var divId = "#day" + (i + 1)
            var utcSeconds = data.daily[i].dt;
            var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
            d.setUTCSeconds(utcSeconds);
            var imageIcon = "<img src'http://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '@2x.png'>"

            $(divId + " .date").html(d.getMonth() + 1 + "-" + d.getDate() + "-" + d.getFullYear())
            $(divId + " .temperature span").html(data.daily[i].temp.min + "/" + data.daily[i].temp.max)
            $(divId + " .image").html(imageIcon)
        }
    });
}

getWeather()