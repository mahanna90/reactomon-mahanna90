import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const PokemonCard = ({ pokemon }) => {

    const [sprites, setSprites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const fetchPokemon = async () => {
            await axios.get(pokemon.url)
                .then(response => {
                    setIsLoading(false);
                    setSprites(response.data.sprites);
                })
                .catch((error) => console.log(error))
        }

        fetchPokemon();

    } , [pokemon])

    if (isLoading) return "Content is loading...";

    return (
        <Link to={`/pokemons/${pokemon.id}`} key={pokemon.id} >
            <div className="card" key={pokemon.id} >
            <img src={sprites ? sprites["front_default"] : ""} alt={ pokemon.name } />
            <h3 className="capitalize">{ pokemon.name }</h3>
            </div>
        </Link>
    )
}

export default PokemonCard;