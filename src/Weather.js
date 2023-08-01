import React from "react";

export default function Weather() {
  let weatherData = {
    city: "Košice",
    day: "Thursday, July, 20",
    temp: "28",
    maxNightTemp: "28°/19°",
    windSpeed: "13",
    humidity: "68",
    currentTime: "11:12",
    weatherIcon: <span>☁️</span>,
    weatherDescription: "scattered clouds"
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <form id="text-form" className="enterCityBtn">
                <input
                  size="12"
                  type="text"
                  id="city-input"
                  placeholder="Enter the city"
                />
                <input type="submit" value="🔍" />
              </form>
            </div>

            <div className="col-5">
              <button type="button" className="locationBtn">
                📍 Current location
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-7">
            <h2 className="city">{weatherData.city}</h2>
            <h4 className="day">{weatherData.day}</h4>
            <h1 title="click to change unit" className="actualTemperature">
              <span id="temp">{weatherData.temp}</span>
              <span id="unit">°C</span>
            </h1>
            <h3 className="maxNightTemp">{weatherData.maxNightTemp}</h3>
            <h5 className="wind">
              wind speed: <span id="windSpeed">{weatherData.windSpeed}</span>{" "}
              km/h
              <br />
              humidity: <span id="humidity">{weatherData.humidity}</span> %
            </h5>
          </div>
          <div className="col">
            <p className="currentTime">{weatherData.currentTime}</p>
            <p className="weatherIcon">{weatherData.weatherIcon}</p>
            <p className="weatherDescription">
              {weatherData.weatherDescription}
            </p>
          </div>
        </div>
        <div id="forecast">{weatherData.forecast}</div>
      </div>
    </div>
  );

}

