import React, { useState, createContext} from 'react';


export const CatchContext = createContext();


export const CatchProvider = (props) => {

    const [caught, setCaught] = useState([]);

    return(
        <CatchContext.Provider value={[caught, setCaught]}>
            {props.children}
        </CatchContext.Provider>        
    );
}