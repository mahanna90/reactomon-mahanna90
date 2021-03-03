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
    console.log(this.state.pokemons);
    return (
      <div className="App">
        <header className="App-header">
          <PokemonList />
        </header>
      </div>
    );
  }
}

