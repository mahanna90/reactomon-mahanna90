import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class PokemonDetail extends Component {
    
    render() {
        const { name, id } = this.props.pokemon;

        return (
            <Link to={`/pokemons/${id}`} >
                <div className="card" key={id} onClick={this.props.getPokemonDetails.bind(this, id)} >
                    <h3>{ name }</h3>
                </div>
            </Link>
        )
    }
}

PokemonDetail.propTypes = {
    pokemon: PropTypes.object.isRequired
}
