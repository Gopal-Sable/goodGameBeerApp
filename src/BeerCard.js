// src/BeerCard.js
import React from 'react';

const BeerCard = ({ beer }) => {
  return (
    <div className="card mb-3" >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={beer.image_url}
            className="img-fluid rounded-start"
            alt={beer.name}
            style={{ height: '275px' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{beer.name}</h5>
            <p className="card-text">{beer.tagline}</p>
            <p className="card-text">{beer.description}</p>
            <p className="card-text">ABV: {beer.abv}%</p>
            <p className="card-text">IBU: {beer.ibu}</p>
            <p className="card-text">First Brewed: {beer.first_brewed}</p>
            {/* Add other relevant information as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
