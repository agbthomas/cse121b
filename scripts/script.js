// Fetch weather data for a given city
async function fetchWeather(city) {
    const apiKey = 'c84f13e895c1c6f8f3bed2d3b6bfb47f'; 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c84f13e895c1c6f8f3bed2d3b6bfb47f`);
    const data = await response.json();
    return data;
}

// Display weather information on the screen
function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>${weatherData.name}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Weather: ${weatherData.weather[0].main}</p>
    `;
}

// Event listener for the form submission
document.getElementById('weather-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const weatherData = await fetchWeather(city);
    displayWeather(weatherData);
});
