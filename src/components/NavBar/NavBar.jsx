import React from 'react';
import './estilo.css';

function NavBar() {
  return (
    <header className="cabecalho">
      <div className="cabecalho__titulo">
        <img className="cabecalho__icone"></img>
        <h3 className="cabecalho__titulo"></h3>
      </div>
      <nav>
        <a href="">personagem</a><a href="">nave</a><a href="">planeta</a>
      </nav>
      
    </header>
  );
}

export default NavBar;
