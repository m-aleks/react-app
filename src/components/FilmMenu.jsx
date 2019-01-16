import React from 'react';
import { Link } from 'react-router-dom';

export default function FilmMenu(props) {
    return (
        <div className="film_menu">
            <Link className="film_menu_link" to={`/edit/${props.id}`}>Edit</Link>
            <Link className="film_menu_link" to={`/details/${props.id}`}>Details</Link>
        </div>
    )
}