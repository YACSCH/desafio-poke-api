import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PokemonList = () => {

  const [name, setName] = useState("");
  const [pokeName, setPokeName] = useState([]);

  const navigate = useNavigate();

  const irAlPokemon = () => {
   
    navigate(`/pokemones/${name}`);
  };



  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await res.json();
     
      if (data && data.results) {
        const getPokeName = data.results.map((data) => { return data.name; });
        setPokeName(getPokeName);
      }
    };
    getPokemon();
  }, []);

  return (
    <>
      <h1>Elija un pokemon de la lista</h1>
      <select onChange={(e) => setName(e.target.value)}>
      <option>Pokemones</option>
        {pokeName.map((name, index) => (
          <option key={index}>{name}</option>
        ))}
      </select>
      <button onClick={irAlPokemon}>Ir al pokemon</button>
    </>
  );
};

export default PokemonList;
