const API_KEY ='99dbe65f9b8c7fb33a5eb3cb94684501';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}