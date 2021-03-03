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

  constructor() {
    super();
    this.state = {
      pokemons: [],
      types: []
    }
  }
  

  getPokemonDetails = (id) => {
    console.log(`clicked on pokemon: ${id}`);
  }

  getTypeDetails = (id) => {
    console.log(`clicked on type: ${id}`);
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

  setTypeIds = () => {
    let urlParts = [];
    let currentUrl = "";
    let typeIds = [];
    this.state.types.map((type) => {
      currentUrl = type.url;
      urlParts = currentUrl.split("/");
      typeIds.push(urlParts[urlParts.length-2]);
      return type;
    });

    const newData = this.state.types.map((type, i) => {
      return {...type, id: typeIds[i]};
    });

    this.setState({types: newData });
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => this.setState({pokemons: response.data.results}))
      .then(this.setPokemonIds);

    axios.get('https://pokeapi.co/api/v2/type/')
    .then(response => this.setState({types: response.data.results}))
    .then(this.setTypeIds);;

  }

  render () {
    console.log(this.state);

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
              <TypeList tpyes={this.state.types} getTypeDetails={this.getTypeDetails} />
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

