const { getWeather, formatWeatherResults } = require('./weather');
const { getUserChoice } = require('./userInput');

/**
 * Main function to interact with the user and display weather data.
 */
async function main() {
  let continueLoop = true;

  while (continueLoop) {
    const city = await getUserChoice('Enter a city name: ');
    const countryCode = await getUserChoice('Enter a country code (e.g., US): ');
    const weatherData = await getWeather(city, countryCode);
    const weatherString = formatWeatherResults(city, countryCode, weatherData);
    console.log(weatherString);

    const secondChoice = await getUserChoice('Would you like to try another city? Y/N: ');

    if (secondChoice.toUpperCase() === 'N') {
      continueLoop = false;
    }
  }
}

main();