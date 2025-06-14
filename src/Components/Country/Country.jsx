import { useState } from 'react';
import './Country.css';

function Country({ country, handleVisitedCountries}) {
  const { name, capital, region, population, flags, area, cca3 } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  // console.log(handleVisitedCountries)
  const passWithParams = ()=>{
    handleVisitedCountries(country);


  }

  return (
    <div className={`country-card ${visited ? 'visited' : ''}`}>
      <img src={flags.png} alt={`Flag of ${name.common}`} className="flag" />
      <div className="country-details">
        <h3>{name.common}</h3>
        <p><strong>Capital:</strong> {capital ? capital[0] : "N/A"}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Area:</strong> {area} km² | <strong>Population:</strong> {population.toLocaleString()}</p>
        <p><strong>Code:</strong> {cca3}</p>

        <button onClick={passWithParams}> Add Visited Countries </button>
        
        <button onClick={handleVisited}>
          {visited ? 'Mark as Not Visited' : 'Mark as Visited'}
        </button>

        {visited ? (
          <p className="visited-message">✅ I have visited this country</p>
        ) : (
          <p style={{ marginTop: '10px', color: '#f59e0b' }}>🧳 I want to visit this country</p>
        )}
      </div>
    </div>
  );
}

export default Country;
