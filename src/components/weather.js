
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherFailure } from '../redux/actions';
import { getWeatherData } from '../weatherAPI';
import './weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const { loading, weatherData, error } = useSelector((state) => state);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(fetchWeatherRequest());
      const data = await getWeatherData(city);
      dispatch(fetchWeatherSuccess(data));
    } catch (err) {
      dispatch(fetchWeatherFailure(err.message));
    }
  };

  return (
    <>
      <div>
        <div className="row p-5">
          <div className="col-md-4"></div>
          <div className="col-md-4 p-3 formcss m-2">
            <div className=''>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter city name"
                  className="inputcss m-2"
                />
                <button type="submit" className="btn btn-primary">Search</button>
              </form>
              {loading && <div>Loading...</div>}
              {error && <div>Error: {error}</div>}
              {weatherData && (
                <div>
                  <h2 className='text-white'>{weatherData.name}</h2>
                  <p className='text-white'>Temperature: {weatherData.main.temp}°C</p>
                  <p className='text-white'>Weather: {weatherData.weather[0].description}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                    alt="Weather Icon"
                    style={{
                      width: '200px',
                      height: '200px'
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Weather;
