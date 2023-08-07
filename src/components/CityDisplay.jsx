import React from 'react'
import '../styles.css'


function CityDisplay({cityData}) {
    const loaded = () =>{
       
  return (
    <div>
        {cityData.map((city,index)=> (
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


return cityData? loaded() : loading ()
}


export default CityDisplay