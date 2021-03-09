import React, { useContext } from 'react';
import Picture from '../images/pikachu.png';
import {CatchContext} from '../context/CatchContext';
import PokemonCard from './PokemonCard';
import styled from 'styled-components';

const CaughtPokemons = () => {

    const [caught, setCaught] = useContext(CatchContext);

    const Pikachu = styled.div`
        max-width: 300px;
        margin: 50px 10px;

    `;

    const Catched = styled.div`
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 110px;
        max-width: 70%;
        flex: 0 auto;
    `;

    return (
        <Catched>
            <Pikachu>
                <img src={Picture} alt="pikachu_in_ball" />
            </Pikachu>
            <div className="container pokemonlist">
                {caught.map((pokemon, i) => (
                <PokemonCard key={i} pokemon={pokemon} fromCaught={true} />))}
            </div>
        </Catched>
    )
}

export default CaughtPokemons;
