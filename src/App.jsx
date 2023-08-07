import { useState } from 'react'
import { useEffect } from 'react'
import Form from "./components/Form"
import MovieDisplay from "./components/CityDisplay"
import './styles.css'
import CityDisplay from './components/CityDisplay'


function App() {
  const APIKEY = import.meta.env.VITE_API_KEY;

  const [city,setCity] = useState(null) 

  const url = 'https://spott.p.rapidapi.com/places?type=CITY&skip=0&country=US%2CCA&limit=10&q=New%20York';
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': APIKEY,
		'X-RapidAPI-Host': 'spott.p.rapidapi.com'
	}
};

  const getCity =async (searchCityTerm) => {
    try{
      const response = await fetch(url,options)
      const city = await response.json();
      console.log(city)
      setCity(city)


    } catch (error){
      console.log(error)
    }
  }

  // useEffect(() =>{
  //   getCity('Detroit')
  // },[])
  

  return (
    <div>
      <Form citySearch={getCity} ></Form>
      <CityDisplay city={city} />

    </div>
  )
}

export default App
