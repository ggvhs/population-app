import React from 'react'
import '../styles.css'
import Form from './Form';

function CityDisplay({city}) {
    const loaded = () =>{
       
  return (
    <div>
        {city.map((city,index)=> (
            <div key={index}>
              <h1 >{city.type}</h1>
              <h1 >{city.name}</h1>
              <h1 >{city.population}</h1>
              </div>
        ))}
  
    </div>
  )
};

const loading = () =>{
    return <h1>Enter City</h1>
   
}


return city? loaded() : loading ()
}


export default CityDisplay