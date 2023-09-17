import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    return (
        <div>
            <h2>Hi to all countries</h2>
            <p>Number of countries: {countries.length}</p>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                    // name={country.name.common}
                    // population={country.population}
                    // region={country.region}
                    ></Country>)
                }
            </div>
        </div>
    );
};

/* function Country(props) {
    // console.log(props);
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Population: {props.population}</p>
            <p>Continent: {props.region}</p>
        </div>
    );
} */

export default Countries;