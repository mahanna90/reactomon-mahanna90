import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PokemonDetail extends Component {

    getDetails = (e) => {
        console.log("clicked on pokemon");
        console.log(e.currentTarget);
    }
    
    render() {
        return (
            <div className="card" onClick={this.getDetails} >
                <h3>{ this.props.pokemon.name }</h3>
                <p>{ this.props.pokemon.url }</p>
            </div>
        )
    }
}

PokemonDetail.propTypes = {
    pokemon: PropTypes.object.isRequired
}
