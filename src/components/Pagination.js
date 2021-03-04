import React, { Component } from 'react';

export default class Pagination extends Component {
    

    render() {

        const src = {previous: this.props.previous, next: this.props.next};

        return (
            <div className="pagination" >
                {this.props.previous ? 
                <button className="btn prev" onClick={this.props.changePage.bind(this, src)} >Prev</button> : ""}
                {this.props.next ?
                <button className="btn next" onClick={this.props.changePage.bind(this, src)} >Next</button> : ""} 
            </div>
        )
    }
}

