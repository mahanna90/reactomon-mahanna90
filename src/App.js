import React, { Component } from 'react';
import './App.css';
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

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Reactomon</h1>
        </header>
        <div className="container">
          <PokemonList pokemons={this.state.pokemons} />
        </div>
      </div>
    );
  }
}

