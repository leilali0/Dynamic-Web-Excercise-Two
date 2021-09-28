import React, { useMemo } from "react";


function Home(){

const { weaterType } = useMemo(() => {
  return {
    couldyness: 100,
    currentTemp: `76`,
    highTemp: `80`,
    humidity: 100,
    lowTemp: `80`,
    weatherType: "Cloudy",
    windSpeed: `10mph`,
  }
})

  return (
    <main ClassName="App">
      <header>Weather App</header>
      <section>Weather Data</section>
    </main>
  );
}

export default Home;