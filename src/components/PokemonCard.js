// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const PokemonCard = ({ pokemon }) => {

    const [sprites, setSprites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const fetchPokemon = async () => {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`)
                .then(response => {
                    setIsLoading(false);
                    setSprites(response.data.sprites);
                })
                .catch((error) => console.log(error))
        }

        fetchPokemon();

    } , [pokemon])

    if (isLoading) return "Content is loading...";

    return (
        <Link to={`/pokemons/${pokemon.id}`} key={pokemon.id} >
            <div className="card" key={pokemon.id} >
            <img src={sprites ? sprites["front_default"] : ""} alt={ pokemon.name } />
            <h3 className="capitalize">{ pokemon.name }</h3>
            </div>
        </Link>
    )
}

export default PokemonCard;




// export default class PokemonCard extends Component {

//     state = {
//         sprites: []
//     }

//     async componentDidMount() {
//         const id = this.props.pokemon.id;
//         try {
//             await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//                 .then(response => this.setState({sprites: response.data.sprites}));
//         } catch (error) {
//             console.log(error);
//         }


//     }

//     render() {
//         const { name, id } = this.props.pokemon;

//         return (
//             <Link to={`/pokemons/${id}`} key={id} >
//                 <div className="card" key={id} onClick={this.props.getPokemonDetails.bind(this, id)} >
//                     <img src={this.state.sprites ? this.state.sprites["front_default"] : ""} alt={ name } />
//                     <h3 className="capitalize">{ name }</h3>
//                 </div>
//             </Link>
//         )
//     }
// }

// PokemonCard.propTypes = {
//     pokemon: PropTypes.object.isRequired
// }
