function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  console.log(response.data);
}

let apiKey = "10b31b054e5fb8ac59f5740et53o1d30";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Uppsala&key=10b31b054e5fb8ac59f5740et53o1d30&units=metric";

axios.get(apiUrl).then(displayTemperature);
