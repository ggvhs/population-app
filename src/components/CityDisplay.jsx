import React from 'react'
import '../styles.css'




function CityDisplay({cityData}) {
    const loaded = () =>{
       
  return (
    <div>
        {cityData.map((cityObject,index)=> (
            <div key={index}>
              {/* <h1 >{cityObject.type}</h1> */}
              <h1 >City: {cityObject.name}</h1>
              <h1 >Population: {cityObject.population}</h1>
              <h1>State: {cityObject.adminDivision1.name}</h1>
              </div>
        ))}
  
    </div>
  )
};

const loading = () =>{
    return <h1>Enter City</h1>
   
}


//Turnary Operator 
return cityData? loaded() : loading ()
}


export default CityDisplay