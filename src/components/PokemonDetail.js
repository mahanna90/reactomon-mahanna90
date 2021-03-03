import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PokemonDetail extends Component {
    
    render() {
        const { id, name, url } = this.props.pokemon;

        return (
            <div className="card" onClick={this.props.getPokemonDetails.bind(this, id)} >
                <h3>{ name }</h3>
                <p>{ url }</p>
            </div>
        )
    }
}

PokemonDetail.propTypes = {
    pokemon: PropTypes.object.isRequired
}
