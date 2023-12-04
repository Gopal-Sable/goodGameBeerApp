// import logo from './logo.svg';
// import './App.css';

import React, { useState, useEffect } from 'react';
import BeerCard from './BeerCard';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.punkapi.com/v2/beers');
        const data = await response.json();
        setBeers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Beer App</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search beers..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="row">
        {filteredBeers.map((beer) => (
          <BeerCard beer={beer} />
          
        ))}
        {/* <div key={beer.id} className="col-md-4 mb-4">
            <BeerCard beer={beer} />
          </div> */}
      </div>
    </div>
  );
};

export default App;

