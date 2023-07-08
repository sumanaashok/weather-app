export const geoDBOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RapidAPI_Key,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEODB_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const OPEN_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const OPEN_WEATHER_API_KEY = process.env.REACT_APP_open_weather_api;