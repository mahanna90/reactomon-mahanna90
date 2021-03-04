import React, { Component } from 'react';
import axios from 'axios';

export default class PokemonDetail extends Component {

    state = {
        pokemonDetails: []
    }
    
    getPokemonId = () => {
        const url = window.location.href;
        const urlArr = url.split("/");
        const id = urlArr[urlArr.length-1];
        return id;
    }

    componentDidMount() {
        console.log("running componentDidMount");
        const id = this.getPokemonId();
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
          .then(response => this.setState({pokemonDetails: response.data}));
    
    }

    render() {
        console.log("running render");
        
        return (
            <div className="container">
                <div className="bigcard">
                    <div>
                        <h1 className="capitalize">{ this.state.pokemonDetails.name }</h1>
                    </div>
                    <div>
                        <img src={this.state.pokemonDetails.sprites ? this.state.pokemonDetails.sprites.other["official-artwork"].front_default : ""} alt={ this.state.pokemonDetails.name } />
                    </div>
                    <div className="stats">                   
                        <div className="types">
                            <h3>Types</h3>
                            {this.state.pokemonDetails.types ? this.state.pokemonDetails.types.map((type) => (
                                <p key={type.type.name}>{ type.type.name }</p>
                            )) : "" }
                        </div>
                        <div className="abilities">
                        <h3>Abilities</h3>
                        {this.state.pokemonDetails.abilities ? this.state.pokemonDetails.abilities.map((ability) => (
                            <p key={ability.ability.name}>{ ability.ability.name }</p>
                            )) : "" }
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

