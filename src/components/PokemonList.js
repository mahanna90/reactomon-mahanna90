import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import Pagination from './Pagination';

export default class PokemonList extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         pokemons: [],
    //         next: "",
    //         previous: "",
    //         current: "https://pokeapi.co/api/v2/pokemon/"
    //     }
    // }

    state = {
        pokemons: [],
        next: "",
        previous: "",
        current: "https://pokeapi.co/api/v2/pokemon/"
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

    changePage = (src) => {
        console.log(src);
        if (src.next || src.previous) {
            if (src.next) {
                this.setState({current: src.next }, () => console.log(this.state));
            } else if (src.previous) {
                this.setState({current: src.previous }, () => console.log(this.state));
            }
            // this.componentDidMount();
            // this.refreshPage();
            // this.setPokemons();
        }
    }

    // refreshPage = () => {
    //     window.location.reload(false);
    // }

    componentDidMount() {
        axios.get(this.state.current)
          .then(response => this.setState({pokemons: response.data.results, next: response.data.next, previous: response.data.previous}, () => console.log("running componentMount")))
          .then(this.setPokemonIds);
    
    }

    setPokemons = () => {
        axios.get(this.state.current)
          .then(response => this.setState({pokemons: response.data.results, next: response.data.next, previous: response.data.previous}, () => console.log("running setPokemons")))
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


