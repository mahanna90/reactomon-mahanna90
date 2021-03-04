import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default class Pagination extends Component {
    

    render() {

        const src = {previous: this.props.previous, next: this.props.next};

        return (
            <div className="pagination" >
                {/* {this.props.previous ? 
                <Link to={this.props.previous} className="btn">Previous</Link> : ""}
                {this.props.next ?
                <Link to={this.props.next} className="btn">Next</Link> : ""} */}

                {this.props.previous ? 
                <button className="btn" onClick={this.props.changePage.bind(this, src)} >Previous</button> : ""}
                {this.props.next ?
                <button className="btn" onClick={this.props.changePage.bind(this, src)} >Next</button> : ""}
                
            </div>
        )
    }
}

// Pagination.propTypes = {
//     next: PropTypes.object.isRequired,
//     previous: PropTypes.object.isRequired
// }
