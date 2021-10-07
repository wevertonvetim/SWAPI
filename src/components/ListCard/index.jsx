import React from 'react';
import Card from '../Card';
import './estilo.css';

function ListCard({ swInfo }) {
  return swInfo ? (
    <div className="lista-notas">
      {swInfo.map((nota) => (
        <Card title={nota.titulo} infoText={nota.texto} name={nota.name} />
      ))}
    </div>
  ) : (
    <h1>Selecione um tema na barra de navegação</h1>
  );
}

export default ListCard;
