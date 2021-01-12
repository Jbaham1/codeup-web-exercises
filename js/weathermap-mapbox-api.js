"use strict";
$(document).ready(function () {
    //ajax call to open weather
    function getWeather(latitude, longitude) {
        $.ajax("https://api.openweathermap.org/data/2.5/forecast", {

            appid: OPEN_WEATHER_APPID,
            lat: latitude,
            lng: longitude
        }).done(function(weatherData){
            console.log(weatherData)
        })
    }
    getWeather(38.627067673102154, -90.20054787144404)

})