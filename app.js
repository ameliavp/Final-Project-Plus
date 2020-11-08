function showWeather(response) {
  let temperature = document.querySelector("temperature1");
  let city = document.querySelector("#city-input");
  document.querySelector("#city-input").innerHTML = response.data.name;
  document.querySelector(".temperature1").innerHTML = Math.round(
    response.data.main.temp
  );
  date.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "b9513445dda79c1ce65da05cdc1677c0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showWeather);

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
