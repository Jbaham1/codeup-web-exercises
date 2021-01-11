"use strict";
mapboxgl.accessToken = mapBoxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-98.4916, 29.45252],
    zoom: 10
});

var start = {lng: -98.4916, lat: 29.45252}

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