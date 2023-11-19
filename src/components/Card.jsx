import React from "react";
import Card from "react-bootstrap/Card";

const PokeCard = ({ pokeData }) => {
  return (
    <>
       <Card >
          <Card.Img src= {pokeData.sprites.front_default} />
          <Card.Body>
            <Card.Title className="text-center"><h1>{pokeData.name}</h1></Card.Title>
            <Card.Text>
              <p>Especie: {pokeData.species.name}</p>
              <p>Estado: {pokeData.status}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      
    </>
  );
};

export default PokeCard;
