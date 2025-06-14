import { useEffect, useState } from "react"
import Country from "../Country/Country";
import './Countries.css';

function Countries() {

      const [countries , setCountries  ]  = useState([]);
      const [visitedCountries , setVisitedCountries] = useState([]);


      useEffect (()=>{
        fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,area,cca3')
        .then(res => res.json())
        .then( data => setCountries(data));

      },[])

      const handleVisitedCountries = country => {
    //     console.log('Add this to your visited country');
    //    console.log(country);
   // visitedCountries.push(country);
   const newVisitedCountries = [...visitedCountries , country];
   setVisitedCountries(newVisitedCountries);


      }

  return (
    <div className="countries-wrapper">
         <h1> Total Countries : {countries.length} </h1>
    <div className="countries-grid">
        <h2>Visited Countries : {visitedCountries.length}</h2>
        <ul>
            {
              visitedCountries.map( Vcountry =>
                <li>{Vcountry.name.common}</li>

               )  
            }
        </ul>

     
      {
        countries.map( country => <Country
        key={ country.name.common} 
        handleVisitedCountries ={handleVisitedCountries}
        country={country}


        ></Country>)
        
        
         
      }

    </div>
    </div>
  )
}

export default Countries