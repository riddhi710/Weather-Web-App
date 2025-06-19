const apiKey = 'adfd1474b3d913b348bd7a1be582046f';

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    const { main, weather, name } = data;

    resultDiv.innerHTML = `
      <h2>Weather in ${name}</h2>
      <p><strong>Temperature:</strong> ${main.temp}°C</p>
      <p><strong>Humidity:</strong> ${main.humidity}%</p>
      <p><strong>Condition:</strong> ${weather[0].description}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
