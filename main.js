$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Oregon&units=imperial&appid=7976a294696117738d3f4102e7df0152",

    function (data) {
        console.log(data)

        let icon
        let img = data.weather[0].icon
        switch (img) {
            case "01d":
                icon = "weather/sun.png"
                break;
            case "02d":
                icon = "weather/sun-cloud.png"
                break;
            case "03d":
                icon = "weather/cloud.png"
                break;
            case "04d":
                icon = "weather/clouds.png"
                break;
            case "09d":
                icon = "weather/rain.png"
                break;
            default:
                icon = "https://openweathermap.org/img/w/" + img + ".png"
        }
        let temp = Math.floor(data.main.temp);
        let humidity = data.main.humidity
        let weather = data.weather[0].main;
        $(".icon").attr("src", icon);

        $(".weather").append(weather);
        $(".temp").append(temp + " °F");
        $(".humidity").append(humidity);

        if (temp > 55 && humidity >= 10 && humidity <= 50) {
            $("#msg").append('Good day to take a nice walk with your buddy!');
        }
    })
