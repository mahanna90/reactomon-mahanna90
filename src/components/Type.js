import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Type extends Component {



    render() {

        const { name, id } = this.props.type;

        return (
            <Link key={id} to={`/types/${id}`} >
                <div className="card" key={id} onClick={this.props.getTypeDetails.bind(this, id)} >
                    <h3>{ name }</h3>
                </div>
            </Link>
        )
    }
}

Type.propTypes = {
    type: PropTypes.object.isRequired
}