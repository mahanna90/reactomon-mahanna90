import React, { useContext } from 'react';
import Picture from '../images/pikachu.png';
import {CatchedContext} from '../context/CatchedContext';
import PokemonCard from './PokemonCard';
import styled from 'styled-components';

const CatchedPokemons = () => {

    const [catched, setCatched] = useContext(CatchedContext);

    const Pikachu = styled.div`
        max-width: 300px;
        margin: 30px;
        float: left;
    `;

    const Catched = styled.div`
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 110px;
        max-width: 70%;
    `;

    return (
        <Catched>
            <Pikachu>
                <img src={Picture} alt="pikachu_in_ball" />
            </Pikachu>
            <div className="container pokemonlist">
                {catched.map((pokemon, i) => (
                <PokemonCard key={i} pokemon={pokemon} fromCatched={true} />))}
            </div>
        </Catched>
    )
}

export default CatchedPokemons;
