import React, { useState, createContext} from 'react';


export const TypeContext = createContext();


export const TypeProvider = (props) => {

    const [types, setTypes] = useState([]);

    return(
        <TypeContext.Provider value={[types, setTypes]}>
            {props.children}
        </TypeContext.Provider>        
    );
}