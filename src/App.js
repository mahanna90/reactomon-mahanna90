import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layouts/header';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import NavBar from './components/NavBar';
import About from './components/About';
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
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={(props) => (
            <>
              <NavBar />
            </>
          )} />
          <Route exact path="/pokemons" render={(props) => (
            <>
              <NavBar />
              <PokemonList pokemons={this.state.pokemons} getPokemonDetails={this.getPokemonDetails} />
            </>
          )} />
          <Route exact path="/types" render={(props) => (
            <>
              <NavBar />
              <TypeList />
            </>
          )} />

          
          <Route exact path="/about" component={About} />     
          
        </div>
      </Router>
    );
  }
}

