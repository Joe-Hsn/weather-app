import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";

import { geoAPIOptions, geoAPIUrl } from "../../Api";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);
  const handleOnChange = (searchValue) => {
    setSearch(searchValue);
    onSearchChange(searchValue);
  };
  const loadOptions = async (inputOption) => {
    try {
      const response = await fetch(
        `${geoAPIUrl}/cities?minPopulation&namePrefix=${inputOption}`,
        geoAPIOptions
      );
      const secondRespond = await response.json();
      return {
        options: secondRespond.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.country}`,
          };
        }),
      };
    } catch (err) {
      return console.error(err);
    }
  };
  return (
    <AsyncPaginate
      placeholder="Search for a city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}
