//96cd7781d3fa6e969bd321a39b003998 api key

window.onload = function()
{
    document.getElementById("weatherSubmit").addEventListener("click", function(event) {
        event.preventDefault();
        const value = document.getElementById("weatherInput").value;
        if (value === "")
          return;
        //console.log(value);

        const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=96cd7781d3fa6e969bd321a39b003998";
        fetch(url)
        .then(function(response) {
        return response.json();
        }).then(function(json) {
            console.log(json);	
            let results = "";
            results += '<h2>Weather in ' + json.name + "</h2>";
            for (let i=0; i < json.weather.length; i++) 
            {
              results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            results += '<h2>' + json.main.temp + " &deg;F</h2>"
            results += "<p>"
            // for (let i=0; i < json.weather.length; i++) 
            // {
            //   results += json.weather[i].description
            //   if (i !== json.weather.length - 1)
            //     results += ", "
            // }
            results += json.main.humidity + "% humidity, " + "wind blowing at " + json.wind.speed + " mph"
            results += "</p>";
            document.getElementById("weatherResults").innerHTML = results;

        const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=96cd7781d3fa6e969bd321a39b003998";
        fetch(url2)
            .then(function(response) {
            return response.json();
            }).then(function(json) {
                let forecast = "";
                for (let i=0; i < json.list.length; i++) 
                {
                  forecast += "<div class='card'><h3>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h a') + "</h3>";
                  forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                  forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';
                  forecast += "<p>" + json.list[i].main.humidity + "% humidity, " + "wind blowing at " + json.list[i].wind.speed + " mph" + "</p></div>"
                }
                document.getElementById("forecastResults").innerHTML = forecast;
            });    
    });

      });
}