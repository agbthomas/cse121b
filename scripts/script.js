// Fetch weather data for a given city
async function fetchWeather(city) {
    const apiKey = 'your_api_key'; // Replace with your API key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
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
