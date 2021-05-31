// import React, { Component } from 'react';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Type from './Type';
import {TypeContext} from '../context/TypeContext';

const TypeList = () => {

    const [types, setTypes] = useContext(TypeContext);

    const [isLoading, setIsLoading] = useState(true);

    const getTypeIdFromUrl = (url) => {
        const urlParts = url.split("/");
        return urlParts[urlParts.length-2];
    }

    useEffect(() => {
        setIsLoading(true);
        let cancel;

        const fetchTypes = async () => {
            await axios.get('https://pokeapi.co/api/v2/type/', {
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
            .then(response => {
                setIsLoading(false);
                setTypes(response.data.results.map((type) => {
                    const typeId = getTypeIdFromUrl(type.url);
                    return {...type, id: typeId}
                }));
            })
            .catch((error) => console.log(error));
        }

        fetchTypes();     

        return () => cancel()

    }, [])


    if (isLoading) return "Content is loading...";

    return (
        <div className="container">
            {types.map((type, i) => (
                <Type key={i} type={type} /> ))}
        </div>
    )
}

export default TypeList
