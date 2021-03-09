import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ballIcon from '../images/iconsmall.png';
import {CatchContext} from '../context/CatchContext';


const PokemonCard = ({ pokemon, fromCaught }) => {

    const [sprites, setSprites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCaught, setIsCaught] = useState(false);

    const [caught, setCaught] = useContext(CatchContext);

    useEffect(() => {
        setIsLoading(true);

        const fetchPokemon = async () => {
            await axios.get(pokemon.url)
                .then(response => {
                    setIsLoading(false);
                    setSprites(response.data.sprites);
                    const result = checkCatched();
                    if (result) {
                        setIsCaught(true);
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
        setIsCaught(true);
        setCaught([...caught, pokemon])
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
        e.currentTarget.classList.remove('hovered');
    }

    const checkCatched = () => {
        const filtered = caught.filter(caughtPokemon => caughtPokemon.id === pokemon.id);
        return filtered.length > 0 ? true : false;
    }

    if (isLoading) return "Content is loading...";

    return (
        <Link to={`/pokemons/${pokemon.id}`} key={pokemon.id} >
            <div className="card pokemon" key={pokemon.id} id={pokemon.id} 
                onDragOver={!fromCaught && !isCaught ? dragOver : null} 
                onDragEnter={!fromCaught && !isCaught ? dragEnter: null} 
                onDragLeave={!fromCaught && !isCaught ? dragLeave : null} 
                onDrop={!fromCaught && !isCaught ? drop : null}>
            <img src={isCaught && !fromCaught ? ballIcon : sprites ? sprites["front_default"] : ""} alt={ pokemon.name } />
            <h3 className="capitalize">{ pokemon.name }</h3>
            </div>
        </Link>
    )
}

export default PokemonCard;