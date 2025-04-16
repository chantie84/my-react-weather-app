import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `{$temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `{$temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Teu", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day"> {day()}</div>
      <WeatherIcon code={props.data[0].condition.icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max-temp">{maxTemperature()}</span>
        <span className="WeatherForecast-min-temp">{minTemperature()}</span>
      </div>
    </div>
  );
}
