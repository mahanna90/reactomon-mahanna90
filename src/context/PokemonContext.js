import React, { useState, createContext} from 'react';


export const PokemonContext = createContext();


export const PokemonProvider = (props) => {

    const [pokemons, setPokemons] = useState([]);

    return(
        <PokemonContext.Provider value={[pokemons, setPokemons]}>
            {props.children}
        </PokemonContext.Provider>        
    );
}
