import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/header';
import PokemonList from './components/PokemonList';

export default class App extends Component {

  state = {
    pokemons: [
      {
        name: "Pikachu",
        url: "xyz.hu",
        id: 1
      },
      {
        name: "Charmander",
        url: "asd.hu",
        id: 2
      }
    ]
  }

  getPokemonDetails = (id) => {
    console.log(`clicked on pokemon: ${id}`);
}

  render () {
    return (
      <div className="App">
        <Header />
        <PokemonList pokemons={this.state.pokemons} getPokemonDetails={this.getPokemonDetails} />
        
      </div>
    );
  }
}

