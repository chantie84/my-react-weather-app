import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = `e1e10606109dc39aa96a4o5b4facfd3t`;
  let city = props.city;
  let apirUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  Axios.get(apirUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          {" "}
          <div className="WeatherForecast-day"> Thu</div>{" "}
          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-max-temp">19°</span>
            <span className="WeatherForecast-min-temp">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
