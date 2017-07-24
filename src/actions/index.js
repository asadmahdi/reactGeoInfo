import axios from 'axios';

const API_KEY = '0c6ab8fb95417ee14b04c31e33d6b803';
//const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const BACK_HALF = '&appid=0c6ab8fb95417ee14b04c31e33d6b803';
//Dallas&appid=0c6ab8fb95417ee14b04c31e33d6b803

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_COUNTRY = 'fetch_country';

export function fetchWeather(city){

  const url = `${ROOT_URL}${city}${BACK_HALF}`;
  const request = axios.get(url); //request is the promise
  //console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload:  request
  };
}

export function fetchCountry(countryName){


  //console.log("fetch country????");
  return {
    type: FETCH_COUNTRY,
    payload: countryName
  }
}
