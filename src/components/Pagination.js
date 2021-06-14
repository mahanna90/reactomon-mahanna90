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
