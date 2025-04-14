import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "Clear sky",
    "clear-sky-night": "Clear sky",
    "few-clouds-day": "Few clouds",
    "few-clouds-night": "Few clouds",
    "scattered-clouds-day": "Scattered clouds",
    "scattered-clouds-night": "Scattered clouds",
    "broken-clouds-day": "Broken clouds",
    "broken-clouds-night": "Broken clouds",
    "shower-rain-day": "Shower rain",
    "shower-rain-night": "Shower rain",
    "rain-day": "Rain",
    "rain-night": "Rain",
    "thunderstorm-day": "Thunderstorm",
    "thunderstorm-night": "Thunderstorm",
    "snow-day": "Snow",
    "snow-night": "Snow",
    "mist-day": "Mist",
    "mist-night": "Mist",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#212121"
      size={52}
      animate={true}
    />
  );
}
