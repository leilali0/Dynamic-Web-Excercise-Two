import React from "react";

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
			<p className="currentTemp">
				Current Temp:
				<p className="currentTempNumber">{currentTemp}</p>
			</p>

			<p className="text">Cloudiness: {cloudiness}</p>

			<p className="text">High Temp: {highTemp}</p>

			<p className="text">Humidity: {humidity}</p>

			<p className="text">Low Temp: {lowTemp}</p>

			<p className="text">Weather Type: {weatherType}</p>

			<p className="text">Wind Speed: {windSpeed}</p>
		</section>
	);
}

export default WeatherCard;
