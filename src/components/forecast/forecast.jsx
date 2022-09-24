import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Forecast({ data }) {
  const day = new Date().getDay();
  const forecastDay = weekDays
    .slice(day, weekDays.length)
    .concat(weekDays.slice(0, day));
  return (
    <div className="text-center mt-6 text-gray-800">
      <h1 className="text-[2rem] sm:text-[3rem]">Daily Forecast</h1>
      <div className="holder">
        <Accordion allowZeroExpanded className="space-y-4">
          {data.list.slice(0, 7).map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading className="bg-cyan-900 text-white rounded ">
                <AccordionItemButton className="flex items-center py-2 px-4">
                  <img
                    alt="weather's icon"
                    src={`icons/${item.weather[0].icon}.png`}
                    className="w-[40px] h-[40px] mr-4"
                  />
                  <div className="mr-auto">{forecastDay[index]}</div>
                  <div>{item.weather[0].description}</div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="bg-cyan-500 p-4 mt-1 rounded">
                <div className="flex justify-between">
                  Temperature:
                  <div className="font-bold">{item.main.temp}°C</div>
                </div>
                <div className="flex justify-between">
                  Feels like:
                  <div className="font-bold">{item.main.feels_like}°C</div>
                </div>
                <div className="flex justify-between">
                  Humidity:
                  <div className="font-bold">{item.main.humidity}%</div>
                </div>
                <div className="flex justify-between">
                  Pressure:
                  <div className="font-bold">{item.main.pressure} hPa</div>
                </div>
                <div className="flex justify-between">
                  Wind speed:
                  <div className="font-bold">{item.wind.speed} m/s</div>
                </div>
                <div className="flex justify-between">
                  Wind direction:
                  <div className="font-bold">{item.wind.deg}°</div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
