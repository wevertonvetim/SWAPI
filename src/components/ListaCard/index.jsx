import React from 'react';
import Card from '../Card';
import './estilo.css';

function ListaDeNotas({ notas }) {
  return (
    <div className="lista-notas">
      {notas.map((nota) => (
        <Card title={nota.titulo} infoText={nota.texto} name={nota.name} />
      ))}
    </div>
  );
}

export default ListaDeNotas;
