import React from 'react';
import './estilo.css';

function NavBar() {
  return (
    <header className="cabecalho">
      <div className="cabecalho__titulo">
        <img className="cabecalho__icone" alt="header-icon" />
        <h3 className="cabecalho__titulo">VSWAPI</h3>
      </div>
      <nav>
        {/* TODO: Add links */}
        <a href="foo">personagem</a>
        <a href="foo">nave</a>
        <a href="foo">planeta</a>
      </nav>
    </header>
  );
}

export default NavBar;
