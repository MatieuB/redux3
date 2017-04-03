import axios from 'axios';

const api_key = 'f5985949b628f60e8b3bc4fae7158b9d';
const root_url = `http://api.openweathermap.org/data/2.5/forecast?appId=${api_key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${root_url}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
