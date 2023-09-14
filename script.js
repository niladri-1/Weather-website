const apiKey = "1069dd6a282e752d58d1f1177e4c645d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
  const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (responce.status == 404) {
    document.querySelector(".error").style.display = "block";
    // document.querySelector(".weather").style.display = "none";
  } else {
    var data = await responce.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";



    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "img/clouds.png";
    }

    else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "img/clear.png";
    }

    else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "img/clear.png";
    }

    else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "img/drizzle.png";
    }

    else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "img/mist.png";
    }

  }

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});