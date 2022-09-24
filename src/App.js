import Search from "./components/search/search";
import CurrentState from "./components/current-state/current-state";
import {
  currentWeatherState,
  currentWeatherStateApiKey,
  forecastUrl,
} from "./Api";
import { useState } from "react";
import Forecast from "./components/forecast/forecast";
export default function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleSearchChange = (searchValue) => {
    const [lat, lon] = searchValue.value.split(" ");
    const currentWeatherStateFetch = fetch(
      `${currentWeatherState}?lat=${lat}&lon=${lon}&appid=${currentWeatherStateApiKey}&units=metric`
    );
    const forecastFetch = fetch(
      `${forecastUrl}?lat=${lat}&lon=${lon}&appid=${currentWeatherStateApiKey}&units=metric`
    );
    Promise.all([currentWeatherStateFetch, forecastFetch])
      .then(async (res) => {
        const [currentWeatherStateRes, forecastRes] = res;
        const currentWeatherStateData = await currentWeatherStateRes.json();
        const forecastData = await forecastRes.json();
        setCurrentWeather({
          city: searchValue.label,
          ...currentWeatherStateData,
        });
        setForecast({ city: searchValue.label, ...forecastData });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(currentWeather);
    console.log(forecast);
  };
  return (
    <div className="container min-h-screen w-screen mx-auto p-6">
      <div className="text-[2rem] sm:text-[3rem] w-full text-center mb-4">
        Weather App
      </div>
      <Search onSearchChange={handleSearchChange} className="mb-8" />
      {currentWeather ? (
        <CurrentState data={currentWeather} />
      ) : (
        <div className="w-full bg-cyan-600 text-white h-16 flex flex-col items-center justify-center mt-6 rounded">
          try your location ☝
          <div className="text-cyan-300">Your data will be displayed here</div>
        </div>
      )}
      {forecast ? <Forecast data={forecast} /> : null}
    </div>
  );
}
