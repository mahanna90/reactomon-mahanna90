import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layouts/Header';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import NavBar from './components/NavBar';
import About from './components/About';
import PokemonDetail from './components/PokemonDetail';
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import CaughtPokemons from './components/CaughtPokemons';
import {PokemonProvider} from './context/PokemonContext';
import {TypeProvider} from './context/TypeContext';
import {DragProvider} from './context/DragContext';
import {CatchProvider} from './context/CatchContext';
import TypeDetail from './components/TypeDetail';


const App = () => {
  return (
    <Router>
        <div className="App">
          <DragProvider>
            <CatchProvider>
            <Header />
            <NavBar />
            <PokemonProvider>
              <TypeProvider>
                <Route exact path="/" render={(props) => (
                  <>
                    <Home />
                  </>
                )} />
                <Route exact path="/pokemons" render={(props) => (
                  <>
                    <PokemonList />
                  </>
                )} />
                <Route exact path="/types" render={(props) => (
                  <>
                    <TypeList />
                  </>
                )} />
                <Route exact path="/catched" render={(props) => (
                  <>
                    <CaughtPokemons />
                  </>
                )} />
                <Route exact path="/pokemons/:id" render={(props) => (
                  <>
                    <PokemonDetail />
                  </>
                )} />
                <Route exact path="/types/:id" render={(props) => (
                  <>
                    <TypeDetail />
                  </>
                )} />
              </TypeProvider>
            </PokemonProvider>

            {/* <Route exact path="/pokemons/:id" children={<PokemonDetail />} /> */}
            <Route exact path="/about" component={About} />     
            <Footer />
          </CatchProvider>
          </DragProvider>
        </div>
      </Router>
  )
}

export default App;