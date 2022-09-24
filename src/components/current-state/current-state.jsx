import React from "react";
import sunny from "../../icons/01d.png";

export default function CurrentState() {
  return (
    <div className="CurrentState w-full h-auto bg-slate-700 text-white shadow-lg mt-8 md:w-3/4 md:h-40 mx-auto rounded md:rounded-lg p-4 flex flex-col sm:flex-row">
      <img
        alt="weather's icon"
        src={sunny}
        className="w-[128px] h-[128px] mx-auto sm:mx-0 sm:my-auto"
      />
      <div className="top__part flex items-center justify-between sm:flex-col sm:items-start sm:justify-center">
        <div className="temp text-[3rem]">25°C</div>
        <div>
          <div className="CurrentState__title text-lg">Cairo</div>
          <div className="CurrentState__desc text-sm opacity-70">Sunny</div>
        </div>
      </div>
      <div className="botom__part flex flex-col w-full sm:w-1/3 sm:ml-auto space-y-1">
        <div className="details text-center">Details</div>
        <div className="detail_feel w-full flex justify-between">
          <div className="opacity-70">Feels like:</div>
          <div className="font-bold">25°C</div>
        </div>
        <div className="detail_wind w-full flex justify-between">
          <div className="opacity-70">Wind:</div>
          <div className="font-bold">3 m/s</div>
        </div>
        <div className="detail_desc w-full flex justify-between">
          <div className="opacity-70">Humidity:</div>
          <div className="font-bold">22%</div>
        </div>
        <div className="detail_pressure w-full flex justify-between">
          <div className="opacity-70">Pressure:</div>
          <div className="font-bold">15 hPa</div>
        </div>
      </div>
    </div>
  );
}
