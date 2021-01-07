var weatherObj = $(document).ready(function () {
    //AJAX call to openWeather
    let weatherObj = $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID, //API key
        q: "San Antonio, US",
        units: "imperial"
    }).done(function (data) {
        let iconImage = '<img src="http://openweathermap.org/img/wn/' + data.list[0].main.humidity + '@2x.png"/>';
        console.log(data)

        $('#city').append(" " + data.city.name + " " + data.city.country)
        // card 1 info
        $("#date1").append(data.list[0].dt_txt)
        $("#temp1").append(data.list[0].main.temp)
        $("#description1").append("Description: " + data.list[0].weather[0].description)
        $("#humidity1").append("Humidity: " + data.list[0].main.humidity);
        $("#wind1 ").append("Wind: " + data.list[0].wind.speed + "mph")
        $("#pressure1").append("Pressure: " + data.list[0].main.pressure)

        //card 2 info
        $("#date2").append(data.list[7].dt_txt)
        $("#temp2").append(data.list[7].main.temp)
        $("#description2").append("Description: " + data.list[7].weather[0].description)
        $("#humidity2").append("Humidity: " + data.list[7].main.humidity);
        $("#wind2").append("Wind: " + data.list[7].wind.speed + "mph")
        $("#pressure2").append("Pressure: " + data.list[7].main.pressure)

        //card 3 info
        $("#date3").append(data.list[15].dt_txt)
        $("#temp3").append(data.list[15].main.temp)
        $("#description3").append("Description: " + data.list[15].weather[0].description)
        $("#humidity3").append("Humidity: " + data.list[15].main.humidity);
        $("#wind3").append("Wind: " + data.list[15].wind.speed + "mph")
        $("#pressure3").append("Pressure: " + data.list[15].main.pressure)
    });
});
