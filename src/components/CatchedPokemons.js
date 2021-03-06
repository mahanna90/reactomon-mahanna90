import React from 'react';
import Picture from '../images/pikachu.png';

const CatchedPokemons = () => {
    return (
        <div className="catched">
            <div className="pikachupic">
                <img src={Picture} alt="pikachu_in_ball" />
            </div>
            <div className="container pokemonlist">
                <h1>Catched pokemons</h1>
            </div>
        </div>
    )
}

export default CatchedPokemons;
