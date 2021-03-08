import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ballIcon from '../images/iconsmall.png';
import {CatchedContext} from '../context/CatchedContext';


const PokemonCard = ({ pokemon, fromCatched }) => {

    const [sprites, setSprites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCatched, setIsCatched] = useState(false);

    const [catched, setCatched] = useContext(CatchedContext);

    useEffect(() => {
        setIsLoading(true);

        const fetchPokemon = async () => {
            await axios.get(pokemon.url)
                .then(response => {
                    setIsLoading(false);
                    setSprites(response.data.sprites);
                    const result = checkCatched();
                    if (result) {
                        setIsCatched(true);
                    }
                })
                .catch((error) => console.log(error))
        }

        fetchPokemon();

    } , [pokemon])

    const dragOver = (e) => {
        e.preventDefault();
        e.currentTarget.classList.add('hovered');
    }

    const drop = (e) => {
        e.preventDefault();
        const pokemonId = e.currentTarget.id;

        setIsCatched(true);
        setCatched([...catched, pokemon])
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
        e.currentTarget.classList.remove('hovered');
    }

    const checkCatched = () => {
        const filtered = catched.filter(catchedPokemon => catchedPokemon.id === pokemon.id);
        return filtered.length > 0 ? true : false;
    }

    if (isLoading) return "Content is loading...";

    return (
        <Link to={`/pokemons/${pokemon.id}`} key={pokemon.id} >
            <div className="card pokemon" key={pokemon.id} id={pokemon.id} 
                onDragOver={!fromCatched && !isCatched ? dragOver : null} 
                onDragEnter={!fromCatched && !isCatched ? dragEnter: null} 
                onDragLeave={!fromCatched && !isCatched ? dragLeave : null} 
                onDrop={!fromCatched && !isCatched ? drop : null}>
            <img src={isCatched && !fromCatched ? ballIcon : sprites ? sprites["front_default"] : ""} alt={ pokemon.name } />
            <h3 className="capitalize">{ pokemon.name }</h3>
            </div>
        </Link>
    )
}

export default PokemonCard;