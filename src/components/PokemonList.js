import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
// import PropTypes from 'prop-types';

export default class PokemonList extends Component {

    state = {
        pokemons: []
    }


    setPokemonIds = () => {
        let urlParts = [];
        let currentUrl = "";
        let pokemonIds = [];
        this.state.pokemons.map((pokemon) => {
          currentUrl = pokemon.url;
          urlParts = currentUrl.split("/");
          pokemonIds.push(urlParts[urlParts.length-2]);
          return pokemon;
        });
    
        const newData = this.state.pokemons.map((pokemon, i) => {
          return {...pokemon, id: pokemonIds[i]};
        });
    
        this.setState({pokemons: newData });
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
          .then(response => this.setState({pokemons: response.data.results}))
          .then(this.setPokemonIds);
    
    }


    render() {
        return (
            <div className="container">
                {this.state.pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} getPokemonDetails={this.props.getPokemonDetails} />))}
            </div>)  
        
    }
}


// PokemonList.propTypes = {
//     pokemons: PropTypes.array.isRequired
// }
