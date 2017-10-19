import axios from 'axios';

const API_KEY='';
//Using ES6 string template to inject the api key into the URL below by using the
//back tick
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  //since this is an action it needs a type.  it also has the
  //optional attribute payload, which further describes the action


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
