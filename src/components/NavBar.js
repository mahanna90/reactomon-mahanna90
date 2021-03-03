import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to="/" className="btn" >Home</Link>
                <Link to="/pokemons" className="btn" >Pokemons</Link> 
                <Link to="/types" className="btn" >Types</Link>
                <Link to="/about" className="btn" >About</Link>
            </div>
        )
    }
}

