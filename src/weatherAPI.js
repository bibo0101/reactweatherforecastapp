import axios from 'axios';
const API_KEY = 'b67ebc0b819e908edc15716caab830a0';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data.');
  }
};