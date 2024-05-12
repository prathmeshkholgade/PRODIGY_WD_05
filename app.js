const city = document.querySelector("input");
const btn = document.querySelector(".search-btn");

const temp = document.querySelector(".Tem");
const cityname = document.querySelector(".city-name");
const Humidity = document.querySelector(".Humidity");
const tepmin = document.querySelector(".tepmin");
const tepmax = document.querySelector(".max-tep");
const feelsLike = document.querySelector(".feels-like");
const weather = document.querySelector(".weather-info");

const apiKey = "8399cfa4163a9b47264821d0ec83611d";

// const apiURl =

async function getData(cityName) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8399cfa4163a9b47264821d0ec83611d&units=metric`;
  let WeatherData = await fetch(url);
  let JsonData = await WeatherData.json();
  let data = JsonData.main;
  temp.innerText = Math.floor(data.temp) + "°C";
  Humidity.innerText = Math.floor(data.humidity) + "°C";
  tepmax.innerText = Math.floor(data.temp_max) + "°C";
  tepmin.innerText = Math.floor(data.temp_max) + "°C";
  feelsLike.innerText = Math.floor(data.feels_like) + "°C";
  weather.innerText = JsonData.weather[0].main;
  cityname.innerText = JsonData.name;
  console.log(data);
  console.log(JsonData);
  console.log(JsonData.weather[0].main);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let cityName = city.value;
  console.log(cityName);
  city.value = "";
  getData(cityName);
});
