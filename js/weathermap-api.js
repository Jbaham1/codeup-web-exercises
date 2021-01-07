$(document).ready(function () {
    //AJAX call to openWeather
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID, //API key
        q: "San Antonio, US",
        units: "imperial"
    }).done(function (data) {
        console.log('5 day forecast', data);
        let iconImage = '<img src="http://openweathermap.org/img/wn/' + data.list[0].main.humidity + '@2x.png"/>';
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        $('#city').append(" " + data.city.name + " " + data.city.country)
            $("#forecast").append(date, +' ' )
    });


});