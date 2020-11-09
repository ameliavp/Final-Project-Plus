function showWeather(response) {
  let temperature = document.querySelector("temperature1");
  let city = document.querySelector("#city-input");
  let icon.innerHTML = document.querySelector("#icon");
  document.querySelector("#city-input").innerHTML = response.data.name;
  document.querySelector(".temperature1").innerHTML = Math.round(
    response.data.main.temp
  );
  date.innerHTML = formatDate(response.data.dt * 1000);
  document.querySelector("#icon").setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  document.querySelector("#icon").setAttribute("alt", response.data.weather[0].icon);
}

function search(city){
let apiKey = "b9513445dda79c1ce65da05cdc1677c0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showWeather);
}

function submit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input");
    search(city.value);
    console.log(city.value);
}

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

 let form = document.querySelector("#search-form");
 form.addEventListener("submit", submit);

function displayFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature1");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperature.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsius(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperature = document.querySelector("#temperature1");
  temperature.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;