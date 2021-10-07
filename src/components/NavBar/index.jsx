import React from 'react';
import './estilo.css';

function NavBar(props) {
  return (
    <header className="cabecalhoPrincipal">
      <div className="container__nav">
        <h1 className="cabecalhoPrincipal__titulo">SWAPI</h1>
        <nav className="cabecalhoPrincipal__nav">
          <button
            className="cabecalhoPrincipal__nav__link"
            type="button"
            onClick={props.fazFetch('https://swapi.dev/api/people/')}
          >
            people
          </button>
          <button
            className="cabecalhoPrincipal__nav__link"
            type="button"
            onClick={props.fazFetch('https://swapi.dev/api/starships/')}
          >
            starships
          </button>
          <button
            className="cabecalhoPrincipal__nav__link"
            type="button"
            onClick={props.fazFetch('https://swapi.dev/api/planets/')}
          >
            planets
          </button>
          <button
            className="cabecalhoPrincipal__nav__link"
            type="button"
            onClick={props.fazFetch('https://swapi.dev/api/species/')}
          >
            species
          </button>
          <button
            className="cabecalhoPrincipal__nav__link"
            type="button"
            onClick={props.fazFetch('https://swapi.dev/api/films/')}
          >
            films
          </button>
          <button
            className="cabecalhoPrincipal__nav__link"
            type="button"
            onClick={props.fazFetch('https://swapi.dev/api/vehicles/')}
          >
            vehicles
          </button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
