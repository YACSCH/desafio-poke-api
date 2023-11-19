import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card"; 

export default function PokemonDetail() {
  const { name } = useParams();

  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getPokemonDetail = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        setPokeData(data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
        setLoading(false);
      }
    };

    getPokemonDetail();

  }, []); 

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!pokeData) {
    return <div>No se encontró el registro!!!!!!</div>;
  }

  return (
    <div className='card-item'>
       <Card pokeData = {pokeData}  /> 
    </div>
  );
}

