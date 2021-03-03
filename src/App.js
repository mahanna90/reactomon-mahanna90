import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import './App.css';
import Header from './components/layouts/header';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import NavBar from './components/NavBar';
import About from './components/About';

export default class App extends Component {

  state = {
    pokemons: []
  }

  getPokemonDetails = (id) => {
    console.log(`clicked on pokemon: ${id}`);
  }

  setIds = () => {
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
    console.log("newData");
    console.log(newData);

    this.setState({pokemons: newData });
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => this.setState({pokemons: response.data.results}))
      .then(this.setIds)
  }

  render () {

    return (
      <Router>
        <div className="App">
          <Header />
          <NavBar />
          <Route exact path="/" render={(props) => (
            <>
              <h1>Main page</h1>
            </>
          )} />
          <Route exact path="/pokemons" render={(props) => (
            <>
              <PokemonList pokemons={this.state.pokemons} getPokemonDetails={this.getPokemonDetails} />
            </>
          )} />
          <Route exact path="/types" render={(props) => (
            <>
              <TypeList />
            </>
          )} />
          {/* <Route exact path="/pokemons/:id" children={<PokemonDetail />} /> */}
          <Route exact path="/pokemons/:id" render={(props) => (
            <>
              <h1>Pokemon details page</h1>
            </>
          )} />


          <Route exact path="/about" component={About} />     
          
        </div>
      </Router>
    );
  }
}

