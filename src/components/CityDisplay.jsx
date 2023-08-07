import React from 'react'
import '../styles.css'

function CityDisplay({city}) {
    const loaded = () =>{
  return (
    <div>CityDisplay</div>
  )
};

const loading = () =>{
    return 
    <>
    <title>{city.type}</title>
    <h1>{city.name}</h1>
    <p></p>
    </>
    
}


return city? loaded() : loading ()
}


export default CityDisplay