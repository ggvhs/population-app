import React from 'react'
import '../styles.css'

function CityDisplay({city}) {
    const loaded = () =>{
  return (
    <>
    <h1>{city.type}</h1>
    <h1>{city.name}</h1>
    <p>{city.population}</p>
    </>
  )
};

const loading = () =>{
    return <h1>Enter City</h1>
   
}


return city? loaded() : loading ()
}


export default CityDisplay