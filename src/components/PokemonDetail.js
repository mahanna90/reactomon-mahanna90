import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PokemonDetail = () => {

    const [pokemonDetails, setPokemonDetails] = useState([]);

    const getPokemonId = () => {
        const url = window.location.href;
        const urlArr = url.split("/");
        const id = urlArr[urlArr.length-1];
        return id;
    }

    useEffect(() => {
        const id = getPokemonId();
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(response => {
                setPokemonDetails(response.data);
          });
    }, [])


    return (
        <div className="container">
            <div className="bigcard">
                <div>
                    <h1 className="capitalize">{ pokemonDetails.name }</h1>
                </div>
                <div>
                    <img src={pokemonDetails.sprites ? pokemonDetails.sprites.other["official-artwork"].front_default : ""} alt={ pokemonDetails.name } />
                </div>
                <div className="stats">                   
                    <div className="types">
                        <h3>Types</h3>
                        {pokemonDetails.types ? pokemonDetails.types.map((type) => (
                            <p key={type.type.name}>{ type.type.name }</p>
                        )) : "" }
                    </div>
                    <div className="abilities">
                    <h3>Abilities</h3>
                    {pokemonDetails.abilities ? pokemonDetails.abilities.map((ability) => (
                        <p key={ability.ability.name}>{ ability.ability.name }</p>
                        )) : "" }
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default PokemonDetail