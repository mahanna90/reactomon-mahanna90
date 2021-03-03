import React, { Component } from 'react';
import PokemonDetail from './PokemonDetail';
import PropTypes from 'prop-types';

export default class PokemonList extends Component {
    render() {
        return this.props.pokemons.map((pokemon) => (
            <PokemonDetail key={pokemon.id} pokemon={pokemon} />
        ))
            
        
    }
}


PokemonList.propTypes = {
    pokemons: PropTypes.array.isRequired
}
