var city = "Boston"

$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=55454d6789810371ea394c209500de03"),
    Function(data) {
        //what is wrong here? "console:log(data);" expected
            console.log(data);

            var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            //description pulls full weather description rather than 
            var weather = data.weather[0].description;
            var temp = Math.floor(data.main.temp);

            $('.icon').attr("src", icon);
            $('.weather').append(weather);
            $('.temp').append(temp);

    }
);
