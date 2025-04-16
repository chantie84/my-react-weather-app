import React, { useState } from "react";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }
  function search() {
    const apiKey = `e1e10606109dc39aa96a4o5b4facfd3t`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}&unts=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                autoFocus="on"
                type="search"
                placeholder="Enter a city.."
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-light w-100"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <Weatherinfo data={WeatherData} />
        <WeatherForecast city={WeatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
