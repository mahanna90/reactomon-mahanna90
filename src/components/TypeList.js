import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Type from './Type';

export default class TypeList extends Component {

    state = {
        types: []
    }

    setTypeIds = () => {
        let urlParts = [];
        let currentUrl = "";
        let typeIds = [];
        this.state.types.map((type) => {
          currentUrl = type.url;
          urlParts = currentUrl.split("/");
          typeIds.push(urlParts[urlParts.length-2]);
          return type;
        });
    
        const newData = this.state.types.map((type, i) => {
          return {...type, id: typeIds[i]};
        });
    
        // this.setState({types: newData }, () => console.log(this.state));
        this.setState({types: newData });
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/type/')
        .then(response => this.setState({types: response.data.results}))
        .then(this.setTypeIds);
    }

    render() {

        if (this.state.types == null) {
            return null;
        }

        return (
            <div className="container">
                {this.state.types.map((type) => (
                    <Type key={type.id} type={type} getTypeDetails={this.props.getTypeDetails} />
                    ))}
            </div>)
    }
}

// TypeList.propTypes = {
//     types: PropTypes.array.isRequired
// }

