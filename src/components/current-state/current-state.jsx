import React from "react";

export default function CurrentState({ data }) {
  return (
    <div className="CurrentState w-full h-auto bg-teal-700 text-white shadow-lg mt-6 md:w-3/4 md:h-40 mx-auto rounded md:rounded-lg p-4 flex flex-col sm:flex-row justify-between">
      <img
        alt="weather's icon"
        src={`icons/${data.weather[0].icon}.png`}
        className="w-[128px] h-[128px] mx-auto sm:mx-0 sm:my-auto"
      />
      <div className="top__part flex items-center justify-between sm:flex-col sm:items-start sm:justify-center">
        <div className="temp text-[3rem] sm:mb-2">
          {Math.round(data.main.temp)}°C
        </div>
        <div>
          <div className="CurrentState__title text-lg">
            {data.city.split(", ")[0]}
          </div>
          <div className="CurrentState__desc text-sm opacity-70">
            {data.weather[0].description}
          </div>
        </div>
      </div>
      <div className="botom__part flex flex-col w-full sm:w-1/3 space-y-1">
        <div className="details text-center">Details</div>
        <div className="detail_feel w-full flex justify-between">
          <div className="opacity-70">Feels like:</div>
          <div className="font-bold">{data.main.feels_like}°C</div>
        </div>
        <div className="detail_desc w-full flex justify-between">
          <div className="opacity-70">Humidity:</div>
          <div className="font-bold">{data.main.humidity}%</div>
        </div>
        <div className="detail_wind w-full flex justify-between">
          <div className="opacity-70">Wind:</div>
          <div className="font-bold">{data.wind.speed}m/s</div>
        </div>
        <div className="detail_pressure w-full flex justify-between">
          <div className="opacity-70">Pressure:</div>
          <div className="font-bold">{data.main.pressure}hPa</div>
        </div>
      </div>
    </div>
  );
}
