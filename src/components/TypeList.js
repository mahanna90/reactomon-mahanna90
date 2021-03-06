// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Type from './Type';

const TypeList = () => {

    const [types, setTypes] = useState([]);
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
                setTypes(response.data.results);
            })
            .then(() => {
                setTypes(types => types.map((type) => {
                    const typeId = getTypeIdFromUrl(type.url);
                    return {...type, id: typeId}}))
            })
            .catch((error) => console.log(error));
        }

        fetchTypes();     

        return () => cancel()

    }, [])


    if (isLoading) return "Content is loading...";

    return (
        <div className="container">
            { console.log(types) }
            {types.map((type, i) => (
                <Type key={i} type={type} /> ))}
        </div>
    )
}

export default TypeList





// export default class TypeList extends Component {

//     state = {
//         types: []
//     }

//     setTypeIds = () => {
//         let urlParts = [];
//         let currentUrl = "";
//         let typeIds = [];
//         this.state.types.map((type) => {
//           currentUrl = type.url;
//           urlParts = currentUrl.split("/");
//           typeIds.push(urlParts[urlParts.length-2]);
//           return type;
//         });
    
//         const newData = this.state.types.map((type, i) => {
//           return {...type, id: typeIds[i]};
//         });
    
//         // this.setState({types: newData }, () => console.log(this.state));
//         this.setState({types: newData });
//     }

//     componentDidMount() {
//         axios.get('https://pokeapi.co/api/v2/type/')
//         .then(response => this.setState({types: response.data.results}))
//         .then(this.setTypeIds);
//     }

//     render() {

//         if (this.state.types == null) {
//             return null;
//         }

//         return (
//             <div className="container">
//                 {this.state.types.map((type) => (
//                     <Type key={type.id} type={type} getTypeDetails={this.props.getTypeDetails} />
//                     ))}
//             </div>)
//     }
// }

// TypeList.propTypes = {
//     types: PropTypes.array.isRequired
// }

