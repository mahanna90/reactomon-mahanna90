import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar" >
            <Link to="/" className="btn" >Home</Link>
            <Link to="/pokemons" className="btn" >Pokemons</Link> 
            <Link to="/types" className="btn" >Types</Link> 
            <Link to="/catched" className="btn" >Caught</Link>
            <Link to="/about" className="btn" >About</Link>
        </div>
    )
}

export default NavBar;
