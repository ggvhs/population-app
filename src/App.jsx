import { useState } from 'react'
import { useEffect } from 'react'
import Form from "./components/Form"
import './styles.css'
import CityDisplay from './components/CityDisplay'
import CubeScene from './components/CubeScene'
import Cube from './components/Cube'

function App() {
  //Two use states to Dynamically change my data and serch term
  //Set search Term will be passed as props to my Form 
  //City Data will be passed to my city display
  const [cityData, setCityData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCityData = async () => {
      const APIKEY = import.meta.env.VITE_API_KEY;

      //url that specifies users search term
      const url = `https://spott.p.rapidapi.com/places?type=CITY&skip=0&country=US%2CCA&limit=1&q=${searchTerm}`;
      
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': APIKEY,
          'X-RapidAPI-Host': 'spott.p.rapidapi.com',
        },
      };

      //try catch block given  my url and options that hold my API key
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


  //Passing props to my form and city display components
  //In this instaciation I am passing the function set search term to Form
  return (
    <div>
      <Form setSearchTerm={setSearchTerm} />
      <CityDisplay cityData={cityData} />
      {/* <Cube /> */}
      <CubeScene />
    </div>
  );
}

export default App;






