import './App.css';
import { useState } from "react";
import SearchCity from './sections/search_city/search_city';
import DisplayWeather from './sections/display_weather/display_weather';
import { OPEN_WEATHER_API_URL, OPEN_WEATHER_API_KEY } from "./sections/api";


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    // fetching weather data from open weather api using lat and lon of the city
    const currentWeatherFetch = fetch(
      `${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      .catch(console.log);

  }
  return (
    <div>
      <div className="title">Weather App</div>
      <div className="Display_blocks">
        <SearchCity onSearchChange={handleOnSearchChange} />
        {currentWeather && < DisplayWeather data={currentWeather} />}
      </div>
    </div>
  );
}

export default App;
