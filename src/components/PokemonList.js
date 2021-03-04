import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import Pagination from './Pagination';

export default class PokemonList extends Component {

    constructor() {
        super();
        this.state = {
            pokemons: [],
            next: "",
            previous: "",
            current: "https://pokeapi.co/api/v2/pokemon/"
        }
    }

    // state = {
    //     pokemons: [],
    //     next: "",
    //     previous: ""
    // }


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

    changePage = (src) => {
        console.log(src);
    }

    componentDidMount() {
        axios.get(this.state.current)
          .then(response => this.setState({pokemons: response.data.results, next: response.data.next, previous: response.data.previous}))
          .then(this.setPokemonIds);
    
    }


    render() {
        return (
            <>
                <div className="container pokemonlist">
                    {this.state.pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} getPokemonDetails={this.props.getPokemonDetails} />))}
                </div>  
                <Pagination next={this.state.next} previous={this.state.previous} changePage={this.changePage} />
            </>)
        
    }
}


