import React from 'react';
import './estilo.css';

function Card() {
  return (
    <header className="card">
      <div className="container__card">
        <div className="titulo">
          <h3 className="card__titulo">Visualizador SWAPI</h3>
        </div>
        <ul className="card__lista">
          <li className="card__lista__informacoes">nome</li>
          <li className="card__lista__informacoes">informação</li>
          <li className="card__lista__informacoes">informação</li>
          <li className="card__lista__informacoes">informação</li>
        </ul>
      </div>
    </header>
  );
}

export default Card;
