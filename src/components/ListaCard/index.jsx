import React from 'react';
import Card from '../Card';
import './estilo.css';

function ListaDeNotas(props) {
  return (
    <ul className="lista-notas">
      {props.notas.map((nota, index) => (
        <li className="lista-notas_item" key={index}>
          <Card titulo={nota.titulo} texto={nota.texto} />
        </li>
      ))}
    </ul>
  );
}

export default ListaDeNotas;
