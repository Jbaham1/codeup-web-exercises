$(document).ready(function(){
    //AJAX call to openWeather
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID, //API key
        q:     "San Antonio, US"
    }).done(function(data){
        console.log(data);
    })

});