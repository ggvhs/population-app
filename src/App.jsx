import { useState } from 'react'
import { useEffect } from 'react'
import Form from "./components/Form"
import './styles.css'
import CityDisplay from './components/CityDisplay'


function App() {
  //Two use states to Dynamically change my data and serch term
  //Set search Term will be passed as props to my Form 
  //City Data will be passed to my city display
  const [cityData, setCityData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCityData = async () => {
      const APIKEY = import.meta.env.VITE_API_KEY;

      const url = `https://spott.p.rapidapi.com/places?type=CITY&skip=0&country=US%2CCA&limit=1&q=${searchTerm}`;
      
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': APIKEY,
          'X-RapidAPI-Host': 'spott.p.rapidapi.com',
        },
      };


      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setCityData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (searchTerm){
    fetchCityData();
  }
  }, [searchTerm]);

  return (
    <div>
      <Form setSearchTerm={setSearchTerm} />
      <CityDisplay cityData={cityData} />
    </div>
  );
}

export default App;






