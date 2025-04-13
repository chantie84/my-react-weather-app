import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                autoFocus="on"
                type="search"
                placeholder="Enter a city.."
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-primary w-100"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <h1>{WeatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={WeatherData.date} />
          </li>
          <li className="text-capitalize">{WeatherData.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={WeatherData.iconUrl}
                alt={WeatherData.description}
                className="float-start"
              />
              <div className="float-start">
                <span className="temperature">
                  {Math.round(WeatherData.temperature)}
                </span>
                <span className="unit">C°</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {WeatherData.humidity}%</li>
              <li>Wind:{WeatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `e1e10606109dc39aa96a4o5b4facfd3t`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}}&key=${apiKey}&unts=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
