// import React, { Component } from 'react';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import Pagination from './Pagination';

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);
    const [nextPage, setNextPage] = useState("");
    const [prevPage, setPrevPage] = useState("");
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [isLoading, setIsLoading] = useState(true);

    const getPokemonIdFromUrl= (url) => {
        const urlParts = url.split("/");
        return urlParts[urlParts.length-2];
    }

    const goToNextPage = () => {
        setCurrentPage(nextPage)
    }

    const goToPrevPage = () => {
        setCurrentPage(prevPage)
    }

    useEffect(() => {
        setIsLoading(true);
        let cancel;

        const fetchPokemons = async () => {
            await axios.get(currentPage, {
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
            .then(response => {
            setIsLoading(false);
            setPokemons(response.data.results);
            setNextPage(response.data.next);
            setPrevPage(response.data.previous);
            })
            .then(() => {
            setPokemons(pokemons => pokemons.map((pokemon) => {
                const pokemonId = getPokemonIdFromUrl(pokemon.url);
                return {...pokemon, id: pokemonId}}))
            })
            .catch((error) => console.log(error));
        }

        fetchPokemons();     

        return () => cancel()

    }, [currentPage])

    if (isLoading) return "Content is loading...";

    return (
        <>
            <div className="container pokemonlist">
                {pokemons.map((pokemon, i) => (
                <PokemonCard key={i} pokemon={pokemon} />))}
            </div>  
            <Pagination goToNextPage={nextPage ? goToNextPage : null} goToPrevPage={prevPage ? goToPrevPage : null} />
        </>
    )
}

export default PokemonList;




// export default class PokemonList extends Component {

//     state = {
//         pokemons: [],
//         next: "",
//         previous: "",
//         current: "https://pokeapi.co/api/v2/pokemon/"
//     }


//     setPokemonIds = () => {
//         let urlParts = [];
//         let currentUrl = "";
//         let pokemonIds = [];
//         this.state.pokemons.map((pokemon) => {
//           currentUrl = pokemon.url;
//           urlParts = currentUrl.split("/");
//           pokemonIds.push(urlParts[urlParts.length-2]);
//           return pokemon;
//         });
    
//         const newData = this.state.pokemons.map((pokemon, i) => {
//           return {...pokemon, id: pokemonIds[i]};
//         });
    
//         this.setState({pokemons: newData });
//     }

//     changePage = (src) => {
//         console.log(src);
//         if (src.next || src.previous) {
//             if (src.next) {
//                 this.setState({current: src.next }, () => console.log(this.state));
//             } else if (src.previous) {
//                 this.setState({current: src.previous }, () => console.log(this.state));
//             }
//         }
//     }

//     componentDidMount() {
//         axios.get(this.state.current)
//           .then(response => this.setState({pokemons: response.data.results, next: response.data.next, previous: response.data.previous}, () => console.log("running componentMount")))
//           .then(this.setPokemonIds);
    
//     }

//     setPokemons = () => {
//         axios.get(this.state.current)
//           .then(response => this.setState({pokemons: response.data.results, next: response.data.next, previous: response.data.previous}, () => console.log("running setPokemons")))
//           .then(this.setPokemonIds);
//     }


//     render() {
//         return (
//             <>
//                 <div className="container pokemonlist">
//                     {this.state.pokemons.map((pokemon) => (
//                     <PokemonCard key={pokemon.id} pokemon={pokemon} getPokemonDetails={this.props.getPokemonDetails} />))}
//                 </div>  
//                 <Pagination next={this.state.next} previous={this.state.previous} changePage={this.changePage} />
//             </>)
        
//     }
// }


