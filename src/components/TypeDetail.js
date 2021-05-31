import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';


const TypeDetail = () => {

    const [typeDetails, setTypeDetails] = useState([]);
    const [typeName, setTypeName] = useState("");

    const getTypeId = () => {
        const url = window.location.href;
        const urlArr = url.split("/");
        const id = urlArr[urlArr.length-1];
        return id;
    }

    const getPokemonIdFromUrl= (url) => {
        const urlParts = url.split("/");
        return urlParts[urlParts.length-2];
    }

    useEffect(() => {
        const id = getTypeId();
        axios.get(`https://pokeapi.co/api/v2/type/${id}/`)
            .then(response => {
                setTypeName(response.data.name)
                setTypeDetails(response.data.pokemon.map((pokemon) => {
                    const pokemonId = getPokemonIdFromUrl(pokemon.pokemon.url);
                    return {...pokemon.pokemon, id: pokemonId}}));
          });
    }, [])


    return (
        <>
            <h1>Type name: {typeName}</h1>
            <div className="container">
                {typeDetails.map((pokemon, i) => (
                <PokemonCard key={i} pokemon={pokemon} />))}
            </div>
        </>
    )
}

export default TypeDetail
