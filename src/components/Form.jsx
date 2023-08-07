import React from 'react'
import {useState} from 'react'
import '../styles.css'
import CityDisplay from './CityDisplay';

function Form() {

    const APIKEY = import.meta.env.VITE_API_KEY;

    const [city,setCity] = useState(null) 
  
    const url = `https://spott.p.rapidapi.com/places?type=CITY&skip=0&country=US%2CCA&limit=10&q=${city}`;
    const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': APIKEY,
          'X-RapidAPI-Host': 'spott.p.rapidapi.com'
      }
  };
  
    const citySearch =async () => {
      try{
        const response = await fetch(url,options)
        const city = await response.json();
        console.log(city)
        setCity(city)
  
  
      } catch (error){
        console.log(error)
      }
    }

    const [form , setForm] = useState({
        searchTerm: '',
    })

    const handleChange = (e) =>{
        console.log(e.target.value)
        setCity(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        citySearch(city);
    }

  return (
    <div>
    <form  >
        <input type="text"  onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
    </form>
    {/* <CityDisplay city={city}/> */}
    </div>

  )
}

export default Form