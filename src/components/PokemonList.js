import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import Pagination from './Pagination';
import {PokemonContext} from '../context/PokemonContext';

const PokemonList = () => {

    const [pokemons, setPokemons] = useContext(PokemonContext);

    const [nextPage, setNextPage] = useState("");
    const [prevPage, setPrevPage] = useState("");
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [isLoading, setIsLoading] = useState(true);

    
    const getPokemonIdFromUrl= (url) => {
        const urlParts = url.split("/");
        return urlParts[urlParts.length-2];
    }

    const goToNextPage = () => {
        setCurrentPage(nextPage)
    }

    const goToPrevPage = () => {
        setCurrentPage(prevPage)
    }

    useEffect(() => {
        setIsLoading(true);
        let cancel;

        const fetchPokemons = async () => {
            await axios.get(currentPage, {
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
            .then(response => {
            setIsLoading(false);
            setPokemons(response.data.results.map((pokemon) => {
                const pokemonId = getPokemonIdFromUrl(pokemon.url);
                return {...pokemon, id: pokemonId}}));
           
            setNextPage(response.data.next);
            setPrevPage(response.data.previous);
            })
            .catch((error) => console.log(error));
        }

        fetchPokemons();     

        return () => cancel()

    }, [currentPage])

    if (isLoading) return "Content is loading...";

    return (
        <>
            <div className="container pokemonlist">
                {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} fromCatched={false} />))}
            </div>  
            <Pagination goToNextPage={nextPage ? goToNextPage : null} goToPrevPage={prevPage ? goToPrevPage : null} />
        </>
    )
}

export default PokemonList;
