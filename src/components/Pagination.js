// import React, { Component } from 'react';
import React from 'react';

const Pagination = ({goToNextPage, goToPrevPage}) => {

    return (
        <div className="pagination" >
            {goToPrevPage && <button className="btn prev" onClick={goToPrevPage} >Prev</button> }
            {goToNextPage && <button className="btn next" onClick={goToNextPage} >Next</button>} 
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





