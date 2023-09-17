import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    const { name, population, region, flags, subregion } = props.country;
    return (
        <div className='country'>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Continent: {region}</small></p>
            <p><small>Subcontinent: {subregion}</small></p>
        </div>
    );
};

export default Country;