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
		<section
			className="WeatherCard"
			style={{
				backgroundColor: `rgba(100, 120, 160, ${cloudiness / 100})`,
			}}
		>
			<div className="tempWrapper">
				<div className="currentWeatherWrapper">
					<div className="weatherImageWrapper">
						<WeatherImage weatherType={weatherType} />
					</div>
				</div>

				<p className="currentTempNumber">{currentTemp}</p>

				<div className="highLowTempWrapper">
					<p className="text">{highTemp}</p>
					<p class="solid"></p>
					<p className="text">{lowTemp}</p>
				</div>
			</div>

			<p className="text"
			style={{
				color: `rgb(${cloudiness * 2.55},  ${cloudiness * 2.55}, ${cloudiness * 2.55})`,
			}}
			>Cloudiness: {cloudiness}</p>

			<p className="text">Humidity: {humidity}</p>

			<p className="text">Weather Type: {weatherType}</p>

			<p className="text">Wind Speed: {windSpeed}</p>
		</section>
	);
}

export default WeatherCard;
