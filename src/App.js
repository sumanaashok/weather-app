import './App.css';
import { useState } from "react";
import Search from './sections/search_city/search_city';
import Currentweather from './sections/display_weather/display_weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from "./sections/api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const handleOnSearchChange = (searchData) =>{
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      .catch(console.log);

  }
  return (
    <div className="Container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && < Currentweather data={currentWeather} />}
    </div>
  );
}

export default App;
