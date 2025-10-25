import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ListaNombres({ nombres, onEliminar }) {
  return (
    <div>
    <ul style={{ marginTop: '20px' }}>
      {nombres.map((n, index) => (
        <li key={index} className='mt-3'>
          {n}{' '}
          <Button variant="danger" size="sm" onClick={() => onEliminar(index)}>
            Eliminar
          </Button>
        </li>
      ))}
    </ul>
    </div>
  );
}