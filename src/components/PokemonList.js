import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import PropTypes from 'prop-types';

export default class PokemonList extends Component {
    render() {
        return (
            <div className="container">
                {this.props.pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} getPokemonDetails={this.props.getPokemonDetails} />))}
            </div>)  
        
    }
}


PokemonList.propTypes = {
    pokemons: PropTypes.array.isRequired
}
