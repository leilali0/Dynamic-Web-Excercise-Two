import React from "react";

function WeatherCard({
  cloudiness = "Unknown", 
  currentTemp = "Unknown", 
  highTemp = "Unknown", 
  humidity = "Unknown", 
  lowTemp = "Unknown", 
  weatherType = "Unknown", //default value 
  windSpeed = "Unknown",  
}){
  return <section className="WeatherCard">
    
    <p className="text">Cloudiness: {cloudiness}</p>

    <p className="text">CurrentTemp: {currentTemp}</p>

    <p className="text">HighTemp: {highTemp}</p>

    <p className="text">Humidity: {humidity}</p>

    <p className="text">LowTemp: {lowTemp}</p>

    <p className="text">WeatherType: {weatherType}</p>

    <p className="text">WindSpeed: {windSpeed}</p>

  </section>
}

export default WeatherCard;