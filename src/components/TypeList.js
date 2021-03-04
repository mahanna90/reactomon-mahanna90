import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Type from './Type';

export default class TypeList extends Component {


    render() {

        if (this.props.types == null) {
            return null;
        }

        return (
            <div className="container">
                {this.props.types.map((type) => (
                    <Type key={type.id} type={type} getTypeDetails={this.props.getTypeDetails} />
                    ))}
            </div>)
    }
}

TypeList.propTypes = {
    types: PropTypes.array.isRequired
}

