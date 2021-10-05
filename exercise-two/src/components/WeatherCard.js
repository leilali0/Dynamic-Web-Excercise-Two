import React from "react";
import WeatherImage from "./WeatherImage";

function WeatherCard({
	cloudiness = "Unknown",
	currentTemp = "Unknown",
	highTemp = "Unknown",
	humidity = "Unknown",
	lowTemp = "Unknown",
	weatherType = "Unknown", //default value
	windSpeed = "Unknown",
}) {
	return (
		<section className="WeatherCard">
			<div className="tempWrapper">
				<div className="currentWeatherWrapper">
				<div className="weatherImageWrapper">
					<WeatherImage weatherType={weatherType} />
				</div>
				<p className="currentTemp">Current Temp:</p>
				<p className="currentTempNumber">{currentTemp}</p>
				</div>

				<div className="highLowTempWrapper">
					<p className="text">High Temp: {highTemp}</p>
					<p className="text">Low Temp: {lowTemp}</p>
				</div>
			</div>

			<p className="text">Cloudiness: {cloudiness}</p>

			<p className="text">Humidity: {humidity}</p>

			<p className="text">Weather Type: {weatherType}</p>

			<p className="text">Wind Speed: {windSpeed}</p>
		</section>
	);
}

export default WeatherCard;
