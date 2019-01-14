import React from 'react';
import { Link } from 'react-router-dom';

export default function FilmMenu(props) {
    return (
        <React.Fragment>
            <Link to={`/edit/${props.id}`}>Edit</Link>
            <Link to={`/details/${props.id}`}>Details</Link>
        </React.Fragment>
    )
}