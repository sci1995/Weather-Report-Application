const fetch = require('node-fetch');

const apiKey = 'd0844d8ecf0fcfcd5c319cc72c20feda';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

/**
 * Fetch weather data from OpenWeatherMap API.
 * @param {string} cityName - Name of the city.
 * @param {string} countryCode - Country code (e.g., US).
 * @returns {Promise<object>} - Weather data.
 */
async function getWeather(cityName, countryCode) {
  const url = `${apiUrl}?q=${cityName},${countryCode}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    return null;
  }
}

/**
 * Format weather data into a readable string.
 * @param {string} cityName - Name of the city.
 * @param {string} countryCode - Country code.
 * @param {object} data - Weather data.
 * @returns {string} - Formatted weather string.
 */
function formatWeatherResults(cityName, countryCode, data) {
  if (!data) {
    return `Unable to retrieve weather data for ${cityName}, ${countryCode}.`;
  }

  const { description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  return `The current weather in ${cityName}, ${countryCode}: ${description} with a temperature of ${temp}°C (humidity ${humidity}% and wind speed ${speed} m/s).`;
}

module.exports = { getWeather, formatWeatherResults };