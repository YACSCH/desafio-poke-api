import React from 'react';
import Card from 'react-bootstrap/Card';

const PokeCard = ({ pokeData }) => {

  
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pokeData.sprites.front_default} />
        <Card.Body>
          <Card.Title>{pokeData.name}</Card.Title>
          <Card.Text>
            <p>Especie: {pokeData.species.name}</p>
            <p>Estado: {pokeData.status}</p>
            {/* Add more details based on your needs */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PokeCard;