import React from "react";
import "./Weather.css";

function Weather(props) {
  const forecast = props.data.forecast;
  const [city, state] = props.data.location.split("\n");

  return (
    <div className="weather-widget">
      <h1>
        {city}, {state}
      </h1>
      <div className="today-forecast">
        <img
          className="weather-icon"
          alt="Weather Icon"
          src={
            "http://openweathermap.org/img/wn/" + props.data.icon + "@2x.png"
          }
        />
        <span className="today-description">{props.data.condition}</span>
        <span className="current">{props.data.current} &deg;</span>
        <div id="today-stats">
          <div className="today-temp">
            <span className="min-max">Min: {props.data.min}&deg;</span>
            <span className="min-max">Max: {props.data.max}&deg;</span>
          </div>
          <div className="today-temp">
            <span className="min-max">
              Humidity: {props.data.humidity.replace("percent", "\xB0")}
            </span>
            <span className="min-max">Wind: {props.data.wind}</span>
          </div>
        </div>
      </div>

      <div className="forecast">
        <div className="forecast-item">
          <span>{forecast.first[0].date}</span>
          <span className="min-max">Min: {forecast.first[0].min}&deg;</span>
          <span className="min-max">Max: {forecast.first[0].max}&deg;</span>
        </div>
        <div className="forecast-item">
          <span>{forecast.first[1].date}</span>
          <span className="min-max">Min: {forecast.first[1].min}&deg;</span>
          <span className="min-max">Max: {forecast.first[1].max}&deg;</span>
        </div>
        <div className="forecast-item">
          <span>{forecast.second[0].date}</span>
          <span className="min-max">Min: {forecast.second[0].min}&deg;</span>
          <span className="min-max">Max: {forecast.second[0].max}&deg;</span>
        </div>
        <div className="forecast-item">
          <span>{forecast.second[1].date}</span>
          <span className="min-max">Min: {forecast.second[1].min}&deg;</span>
          <span className="min-max">Max: {forecast.second[1].max}&deg;</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;
