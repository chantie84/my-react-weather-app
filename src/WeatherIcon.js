import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "1d": "Clear_sky",
    "1n": "Clear_sky",
    "2d": "Cloudy",
    "2n": "Cloudy",
    "3d": "Cloudy",
    "3n": "Cloudy",
    "4d": "Broken_clouds",
    "4n": "Broken_clouds",
    "9d": "Shower_rain",
    "9n": "Shower_rain",
    "10d": "Rain",
    "10n": "Rain",
    "11d": "Thunderstorm",
    "11n": "Thunderstorm",
    "13d": "Snow",
    "13n": "Snow",
    "50d": "Fog",
    "50n": "Fog",
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
