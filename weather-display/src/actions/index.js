import axios from 'axios';

const API_KEY ='99dbe65f9b8c7fb33a5eb3cb94684501';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},de`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}