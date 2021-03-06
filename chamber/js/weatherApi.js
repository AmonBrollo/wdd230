const currentTemp = document.getElementById("temp");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector(".weather-type");
let windSpeed = document.getElementById("windSpeed");

const url =
  "";

// dotenv/config
function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  const bodyDesc = desc.slice(1);
  const slicedDesc = desc.slice(0, 1).toUpperCase();
  const capitalizedDesc = slicedDesc + bodyDesc;
  const speed = weatherData.wind.speed;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", capitalizedDesc);
  captionDesc.textContent = capitalizedDesc;
  windSpeed.textContent = speed;
}

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log("Data: ", data); 
      // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();