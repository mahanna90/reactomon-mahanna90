import React from 'react';
import { Link } from 'react-router-dom';

const Type = ({type}) => {
    return (
        <Link key={type.id} to={`/types/${type.id}`} >
            <div className="card" key={type.id} >
                <h3 className="capitalize">{ type.name }</h3>
            </div>
        </Link>
    )
}

export default Type
