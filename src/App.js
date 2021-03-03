import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/header';
import PokemonList from './components/PokemonList';
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {

  state = {
    pokemons: [
      {
        name: "Pikachu",
        url: "xyz.hu",
        id: uuidv4()
      },
      {
        name: "Charmander",
        url: "asd.hu",
        id: uuidv4()
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

