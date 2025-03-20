import { useState } from "react";
import "./Country.css";
import commaNumber from "comma-number";

const Country = (props) => {
    const offsetDate = (offset) => {
        offset = parseInt(offset.split("UTC")[1].split(":")[0]);
        var d = new Date(new Date().getTime() + offset * 1000);
        var hrs = d.getUTCHours();
        var mins = d.getUTCMinutes();
        var secs = d.getUTCSeconds();

        return `${hrs}:${mins}:${secs}`;
    };

    const [countryTime, setCountryTime] = useState(offsetDate(props.country.timezones[0]));

    setInterval(() => {
        setCountryTime(offsetDate(props.country.timezones[0]));
    }, 1000);

    return (
        <div className="Country">
            <img src={props.country.flags.svg} alt="Country Flag" />
            <p>
                {props.country.name.common} with {commaNumber(props.country.population)} 👥
            </p>
            <p>{props.country.continents[0]}</p>
            <p>{countryTime}</p>
            <a href={props.country.maps.googleMaps} target="_blank">
                Map
            </a>
        </div>
    );
};

export default Country;
