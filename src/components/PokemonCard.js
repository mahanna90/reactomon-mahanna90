import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class PokemonCard extends Component {

    state = {
        sprites: []
    }

    componentDidMount() {
        const id = this.props.pokemon.id;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
          .then(response => this.setState({sprites: response.data.sprites}, () => console.log(this.state.sprites)));
    
    }
    
    render() {
        const { name, id } = this.props.pokemon;

        return (
            <Link to={`/pokemons/${id}`} key={id} >
                <div className="card" key={id} onClick={this.props.getPokemonDetails.bind(this, id)} >
                    <img src={this.state.sprites ? this.state.sprites["front_default"] : ""} alt={ name } />
                    <h3 className="capitalize">{ name }</h3>
                </div>
            </Link>
        )
    }
}

PokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired
}
