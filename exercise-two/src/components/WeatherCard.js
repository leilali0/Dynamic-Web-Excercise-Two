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
				backgroundColor: `rgba(80, 90, 110, ${cloudiness / 100})`,
				color: `rgb(${cloudiness * 3}, ${cloudiness * 3}, ${cloudiness * 3})`,
				borderColor: `rgb(${cloudiness * 3},  ${cloudiness * 3}, ${cloudiness * 3})`,
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
					<p class="solid" style={{
						borderColor: `rgb(${cloudiness * 3},  ${cloudiness * 3}, ${cloudiness * 3})`,
					}}></p>
					<p className="text">{lowTemp}</p>
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
