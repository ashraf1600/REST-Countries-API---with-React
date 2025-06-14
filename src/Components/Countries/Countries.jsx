import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,area,cca3')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    if (!visitedCountries.find(c => c.cca3 === country.cca3)) {
      setVisitedCountries([...visitedCountries, country]);
    }
  };

  return (
    <div className="countries-wrapper">
      <h1>Total Countries: {countries.length}</h1>

      <div className="layout">
        <div className="visited-section">
          <h2>Visited Countries ({visitedCountries.length})</h2>
          <ul>
            {visitedCountries.map((vc) => (
              <li key={vc.cca3}>{vc.name.common}</li>
            ))}
          </ul>
        </div>

        <div className="countries-grid">
          {countries.map((country) => (
            <Country
              key={country.cca3}
              country={country}
              handleVisitedCountries={handleVisitedCountries}
              visited={visitedCountries.some(c => c.cca3 === country.cca3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Countries;
