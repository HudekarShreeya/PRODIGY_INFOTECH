function getWeather() {
  const location = document.getElementById('location-input').value;
  const apiKey = 'YOUR_API_KEY'; // Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const locationElement = document.getElementById('location');
      const temperatureElement = document.getElementById('temperature');
      const weatherDescriptionElement = document.getElementById('weather-description');
      const humidityElement = document.getElementById('humidity');
      const windSpeedElement = document.getElementById('wind-speed');

      locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
      temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
      weatherDescriptionElement.textContent = `Weather: ${data.weather[0].description}`;
      humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
      windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    })
    .catch(error => console.log('Error fetching weather data:', error));
}

function openTab(tabName) {
  const tabs = document.getElementsByClassName('tab-content');
  for (let tab of tabs) {
    tab.style.display = 'none';
  }

  const tabButtons = document.getElementsByClassName('tab-btn');
  for (let btn of tabButtons) {
    btn.classList.remove('active');
  }

  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.classList.add('active');
}
