import React from "react";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  const {
    city,
    main: { temp, feels_like, humidity, pressure },
    wind: { speed },
  } = data;

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
          <img
            alt="weather"
            className="weather-icon"
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          />
        </div>
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like </span>
            <span className="parameter-value">{Math.round(feels_like)} °C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind </span>
            <span className="parameter-value">{speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity </span>
            <span className="parameter-value">{humidity} %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure </span>
            <span className="parameter-value">{pressure}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
