$(document).ready(function () {
    //AJAX call to openWeather
    let weatherObj = $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID, //API key
        q: "San Antonio, US",
        units: "imperial"
    }).done(function (data) {
console.log(data)
        let weatherArr = [];
        for (var i = 0; i < 1; i++) {
            weatherArr[0] = {};
            weatherArr[0].timeStamp = data.list[i].dt_txt
            weatherArr[0].tempMin = data.list[i].main.temp_min
            weatherArr[0].tempMax = data.list[i].main.temp_max
            weatherArr[0].description = data.list[i].weather[0].description
            weatherArr[0].humidity = data.list[i].main.humidity
            weatherArr[0].wind = data.list[i].wind.speed
            weatherArr[0].pressure = data.list[i].main.pressure
            weatherArr[0].city = data.city.name
            weatherArr[0].icon = data.list[i].weather[0].icon

            // let iconUrl = `http://openweathermap.org/img/wn${weatherObj.icon}@2x.png`;
            // let iconImage = `<img src=${iconUrl} width="50 height="50>`

            $('#city').append(" " + weatherArr[0].city);
            $("#date1").append(weatherArr[0].timeStamp);
            $("#temp1").append(weatherArr[0].tempMin + "/" + weatherArr[0].tempMax);
            $("#description1").append("Description: " + weatherArr[0].description);
            $("#humidity1").append("Humidity: " + weatherArr[0].humidity);
            $("#wind1 ").append("Wind: " + weatherArr[0].wind + "mph");
            $("#pressure1").append("Pressure: " + weatherArr[0].pressure);

            //card 2 info
            $("#date2").append(weatherArr[0].timeStamp);
            $("#temp2").append(weatherArr[0].tempMin + "/" + weatherArr[0].tempMax);
            $("#description2").append("Description: " + weatherArr[0].description);
            $("#humidity2").append("Humidity: " + weatherArr[0].humidity);
            $("#wind2").append("Wind: " + weatherArr[0].wind + "mph");
            $("#pressure2").append("Pressure: " + weatherArr[0].pressure);
        }

        // let iconUrl = `http://openweathermap.org/img/wn${weatherArr[i].}@2x.png`;
        // let iconImage = `<img src=${iconUrl} width="50 height="50>`
        //
        // $('#city').append(weatherArr.city)
        //
        // $("#date1").append(weatherObj.timeStamp)
        // $("#temp1").append(data.list[0].main.temp + iconImage)
        // $("#description1").append("Description: " + data.list[0].weather[0].description)
        // $("#humidity1").append("Humidity: " + data.list[0].main.humidity);
        // $("#wind1 ").append("Wind: " + data.list[0].wind.speed + "mph")
        // $("#pressure1").append("Pressure: " + data.list[0].main.pressure)
        //
        // //card 2 info
        // $("#date2").append(data.list[7].dt_txt)
        // $("#temp2").append(data.list[7].main.temp + iconImage)
        // $("#description2").append("Description: " + data.list[7].weather[0].description)
        // $("#humidity2").append("Humidity: " + data.list[7].main.humidity);
        // $("#wind2").append("Wind: " + data.list[7].wind.speed + "mph")
        // $("#pressure2").append("Pressure: " + data.list[7].main.pressure)
        //
        // //card 3 info
        // $("#date3").append(data.list[15].dt_txt)
        // $("#temp3").append(data.list[15].main.temp)
        // $("#description3").append("Description: " + data.list[15].weather[0].description)
        // $("#humidity3").append("Humidity: " + data.list[15].main.humidity);
        // $("#wind3").append("Wind: " + data.list[15].wind.speed + "mph")
        // $("#pressure3").append("Pressure: " + data.list[15].main.pressure)
        //
        // //card 4 info
        // $("#date4").append(data.list[23].dt_txt)
        // $("#temp4").append(data.list[23].main.temp + iconImage)
        // $("#description4").append("Description: " + data.list[23].weather[0].description)
        // $("#humidity4").append("Humidity: " + data.list[23].main.humidity);
        // $("#wind4").append("Wind: " + data.list[23].wind.speed + "mph")
        // $("#pressure4").append("Pressure: " + data.list[23].main.pressure)
        //
        // //card 5 info
        // $("#date5").append(data.list[31].dt_txt)
        // $("#temp5").append(data.list[15].main.temp + iconImage)
        // $("#description5").append("Description: " + data.list[31].weather[0].description)
        // $("#humidity5").append("Humidity: " + data.list[31].main.humidity);
        // $("#wind5").append("Wind: " + data.list[31].wind.speed + "mph")
        // $("#pressure5").append("Pressure: " + data.list[31].main.pressure)
    });
});

