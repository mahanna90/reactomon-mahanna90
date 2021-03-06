// import React, { Component } from 'react';
import React from 'react';

const Pagination = ({next, previous, changePage}) => {

    const src = {previous: previous, next: next};

    return (
        <div className="pagination" >
            {previous && <button className="btn prev" onClick={changePage.bind(this, src)} >Prev</button> }
            {next && <button className="btn next" onClick={changePage.bind(this, src)} >Next</button>} 
        </div>
    )
}

export default Pagination;


// export default class Pagination extends Component {
    

//     render() {

//         const src = {previous: this.props.previous, next: this.props.next};

//         return (
//             <div className="pagination" >
//                 {this.props.previous ? 
//                 <button className="btn prev" onClick={this.props.changePage.bind(this, src)} >Prev</button> : ""}
//                 {this.props.next ?
//                 <button className="btn next" onClick={this.props.changePage.bind(this, src)} >Next</button> : ""} 
//             </div>
//         )
//     }
// }





