import React, { useState, createContext} from 'react';


export const DragContext = createContext();


export const DragProvider = (props) => {

    const [isDragging, setIsDragging] = useState(false);

    return(
        <DragContext.Provider value={[isDragging, setIsDragging]}>
            {props.children}
        </DragContext.Provider>        
    );
}