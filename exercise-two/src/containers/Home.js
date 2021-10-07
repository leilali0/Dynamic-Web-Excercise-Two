import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";

const API_KEY = `7b6c554c1c80989ca3ba734820b0eed4`;

// URL Search Params...
// http://localhost:3000/?city=paris
function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

function Home() {
	const [city, setCity] = useState();
	const [weatherData, setWeatherData] = useState();
	let query = useQuery();

	const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

	useEffect(() => {
		const cityValue = query.get("city");
		setCity(cityValue);
	}, [query]);

	// Get weather Data from Weather API
	useEffect(() => {
		// Allows you to make HTTP requests
		// Promise... do asynchronous requests in JavaScript
		if (city) {
			axios
				.get(URL)
				.then(function (response) {
					// handle success
					setWeatherData(response.data);
				})
				.catch(function (error) {
					// handle error
					console.warn(error);
				});
		}
	}, [URL, city]);

	const {
		currentTemp,
		cloudiness,
		highTemp,
		humidity,
		lowTemp,
		weatherType,
		windSpeed,
	} = useMemo(() => {
		if (!weatherData) return {};
		return {
			currentTemp: kelvinToCelsius(weatherData.main.temp) + " \u00B0C",
			cloudiness: weatherData.clouds.all,
			highTemp: kelvinToCelsius(weatherData.main.temp_max) + " \u00B0C",
			humidity: weatherData.main.humidity,
			lowTemp: kelvinToCelsius(weatherData.main.temp_min) + " \u00B0C",
			weatherType: weatherData.weather[0].main,
			windSpeed: weatherData.wind.speed,
		};
	}, [weatherData]);

	return (
		<main className="App">
			<nav className="navigation">
				<a href="?city=Paris" className={city === "Paris" && "Active"}>
					Paris
				</a>
				<a href="?city=Tokyo" className={city === "Tokyo" && "Active"}>
					Tokyo
				</a>
				<a href="?city=Chengdu" className={city === "Chengdu" && "Active"}>
					Chengdu
				</a>
				<a href="?city=Seattle" className={city === "Seattle" && "Active"}>
					Seattle
				</a>
			</nav>
			<h1 className="title">{city}</h1>
			<WeatherCard
				currentTemp={currentTemp}
				cloudiness={cloudiness}
				highTemp={highTemp}
				humidity={humidity}
				lowTemp={lowTemp}
				weatherType={weatherType}
				windSpeed={windSpeed}
			/>
		</main>
	);
}

export default Home;
