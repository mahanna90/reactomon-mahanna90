import React, { Component } from 'react';
import Picture from '../images/pikachu.png';

export default class CatchedPokemons extends Component {
    render() {
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
}

