import React from "react";
import Card from "react-bootstrap/Card";

const PokeCard = ({ pokeData }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pokeData.sprites.front_default} />
        <Card.Body>
          <Card.Title className="text-center">
            <h1>{pokeData.name}</h1>
          </Card.Title>
          <Card.Text>
            <ul>
              <li>
                {pokeData.stats[0].stat.name}: {pokeData.stats[0].base_stat}
              </li>
              <li>
                {pokeData.stats[1].stat.name}: {pokeData.stats[1].base_stat}
              </li>
              <li>
                {pokeData.stats[2].stat.name}: {pokeData.stats[2].base_stat}
              </li>
              <li>
                {pokeData.stats[3].stat.name}: {pokeData.stats[3].base_stat}
              </li>
              <li>
                {pokeData.stats[4].stat.name}: {pokeData.stats[4].base_stat}
              </li>
              <li>
                {pokeData.stats[5].stat.name}: {pokeData.stats[5].base_stat}
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default PokeCard;
