import "./Countries.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";

const BASE_URL = "https://restcountries.com/v3.1";

const Countries = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/all`)
            .then((res) => {
                console.log(res.data[0]);
                setData(
                    res.data.sort((a, b) => {
                        return a.name.common > b.name.common;
                    })
                );
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            <div>{isLoading ? <p>Loading...</p> : <p>Total Countries Recorder: {data.length}</p>}</div>

            <div className="Countries">
                {data.map((country, index) => {
                    return <Country key={index} country={country} />;
                })}
            </div>
        </div>
    );
};

export default Countries;
