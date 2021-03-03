import React, { Component } from 'react'

export default class PokemonList extends Component {
    render() {
        return this.props.pokemons.map((pokemon) => (
            <div className="card" key={ pokemon.id } >
                <h3>{ pokemon.name }</h3>
                <p>{ pokemon.url }</p>
            </div>
        ))
            
        
    }
}


