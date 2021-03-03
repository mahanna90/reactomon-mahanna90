import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class TypeList extends Component {


    render() {

        console.log("this");
        console.log(this);

        console.log("type props");
        console.log(this.props.types);
        const { name, id } = this.props.types;

        return (
            <div className="container">
                {this.props.types.map((type) => (
                    <Link to={`/types/${id}`} >
                        <div className="card" type={type} key={id} onClick={this.props.getTypeDetails.bind(this, id)} >
                            <h3>{ name }</h3>
                        </div>
                    </Link>))}
            </div>)
    }
}

TypeList.propTypes = {
    types: PropTypes.array.isRequired
}

