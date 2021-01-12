"use strict";

function getWeather() {
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.41956949745878,
        lon: -98.48343218879837,
        units: "imperial"
    }).done(function (data) {
        console.log(data.daily);
        $('#autocomplete').autocomplete().disable();
        $('#autocomplete').autocomplete().setOptions(options);
        for (var i = 0; i < 5; i++) {
            //create string for div id
            var divId = "#day" + (i + 1)
            var utcSeconds = data.daily[i].dt;
            var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
            d.setUTCSeconds(utcSeconds);
            // var imageIcon = "<img src'http://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '@2x.png'>"

            $(divId + " .date").html(d.getMonth() + 1 + "-" + d.getDate() + "-" + d.getFullYear())
            $(divId + " .temperature span").html(data.daily[i].temp.min + " / " + data.daily[i].temp.max)
            // $(divId + " .image div").html(imageIcon)
            $(divId + " .description").html("<strong>Description: </strong>" + data.daily[i].weather[0].description)
            $(divId + " .wind").html("<strong>Wind: </strong>" + data.daily[i].wind_speed.toFixed() + "MPH")
            $(divId + " .pressure").html("<strong>Pressure:</strong>" + data.daily[i].pressure)
        }
    });
    mapboxgl.accessToken = mapBoxToken; // from key.js file
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
    center: [-98.48343218879837, 29.41956949745878],
    zoom: 10
});
}
//,
getWeather()