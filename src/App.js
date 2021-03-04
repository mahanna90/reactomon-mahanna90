import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';
import './App.css';
import Header from './components/layouts/header';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import NavBar from './components/NavBar';
import About from './components/About';
import PokemonDetail from './components/PokemonDetail';

export default class App extends Component {


  getPokemonDetails = (id) => {
    console.log(`clicked on pokemon: ${id}`);
  }

  getTypeDetails = (id) => {
    console.log(`clicked on type: ${id}`);
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
              <PokemonList getPokemonDetails={this.getPokemonDetails} />
            </>
          )} />
          <Route exact path="/types" render={(props) => (
            <>
              <TypeList getTypeDetails={this.getTypeDetails} />
            </>
          )} />
          <Route exact path="/pokemons/:id" render={(props) => (
            <>
              <PokemonDetail />
            </>
          )} />
          <Route exact path="/types/:id" render={(props) => (
            <>
              <h1>Type details page</h1>
            </>
          )} />

          {/* <Route exact path="/pokemons/:id" children={<PokemonDetail />} /> */}
          <Route exact path="/about" component={About} />     
          
        </div>
      </Router>
    );
  }
}

