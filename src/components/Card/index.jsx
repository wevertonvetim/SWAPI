import React from 'react';
import './estilo.css';

function Card({ title, name, infoText }) {
  return (
    <div className="card">
      <div className="card-display">
        <div className="titulo">
          <h3 className="card__titulo">{title}</h3>
        </div>
        <div className="card-body">
          <h2>{name}</h2>
          <p>{infoText}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
