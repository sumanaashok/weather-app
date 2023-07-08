// The search city component of the weather app

import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoDBOptions, GEODB_API_URL } from "../api"

const SearchCity = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(
            // fetching data from rapid api for cities with population os 100000 and above
            `${GEODB_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
            geoDBOptions
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            });
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);

    };

    // Using Aysync Paginate to load options into the search box
    return (
        <AsyncPaginate
            placeholder="Search for City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />

    );
};

export default SearchCity;

