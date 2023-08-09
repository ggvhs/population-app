import React, { useState } from 'react';
import '../styles.css';
import CityDisplay from './CityDisplay';

function Form() {
  const APIKEY = import.meta.env.VITE_API_KEY;

  const [searchTerm, setSearchTerm] = useState('');
  const [cityData, setCityData] = useState(null);

  const url = `https://spott.p.rapidapi.com/places?type=CITY&skip=0&country=US%2CCA&limit=1&q=${searchTerm}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': APIKEY,
      'X-RapidAPI-Host': 'spott.p.rapidapi.com',
    },
  };

  const citySearch = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setCityData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    citySearch();
  };

  return (
    <div>
      <form>
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
      </form>
      <CityDisplay cityData={cityData} />
    </div>
  );
}

export default Form;