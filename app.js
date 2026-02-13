const API_KEY = "52dff822b0c046e9b0c155600251312";
const BASE_URL =
  `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}`;

const sumbitBtn = document.querySelector("#submit")

let input = document.querySelector("#input-city");

    let user_city = document.querySelector(".city");
    let country = document.querySelector(".country");
    let c = document.querySelector(".weather-c");
    let f = document.querySelector(".weather-f");

sumbitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    try{
        let city = input.value;
        let URL = `${BASE_URL}&q=${city}`;
        let response = await fetch(URL);
        let data = await response.json();
        user_city.innerText = data.location.name;
        country.innerText = data.location.country;
        c.innerText = `${data.current.temp_c} °C`;
        f.innerText = `${data.current.temp_f} °F`;
    }
    catch(error){
        console.error(error)
    }
    
    
})

// {"location":{"name":"London","region":"City of London, Greater London","country":"United Kingdom","lat":51.5171,"lon":-0.1062,"tz_id":"Europe/London","localtime_epoch":1770968085,"localtime":"2026-02-13 07:34"},"current":{"last_updated_epoch":1770967800,"last_updated":"2026-02-13 07:30","temp_c":6.1,"temp_f":43.0,"is_day":1,"condition":{"text":"Partly cloudy","icon":"//cdn.weatherapi.com/weather/64x64/day/116.png","code":1003},"wind_mph":2.5,"wind_kph":4.0,"wind_degree":136,"wind_dir":"SE","pressure_mb":989.0,"pressure_in":29.21,"precip_mm":0.01,"precip_in":0.0,"humidity":93,"cloud":50,"feelslike_c":5.8,"feelslike_f":42.3,"windchill_c":5.5,"windchill_f":41.9,"heatindex_c":5.8,"heatindex_f":42.5,"dewpoint_c":4.6,"dewpoint_f":40.3,"vis_km":10.0,"vis_miles":6.0,"uv":0.0,"gust_mph":3.8,"gust_kph":6.1},"forecast":{"forecastday":[]}}

// Response {type: 'cors', url: 'https://api.weatherapi.com/v1/forecast.json?key=52dff822b0c046e9b0c155600251312&q=Dhaka', redirected: false, status: 200, ok: true, …}
// app.js:20 {name: 'Dhaka', region: '', country: 'Bangladesh', lat: 23.7231, lon: 90.4086, …}