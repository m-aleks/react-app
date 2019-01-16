import React from 'react';
import FilmMenu from './FilmMenu.jsx';

export default function List(props) {
    return (
        <React.Fragment>
            <h2>List of available films</h2>
            <ul className="films_list">
                {props.filmsArray.map(film => {
                    return <li key={film.id} className="films_list_item">
                        <h3 className="films_list_item_title">{film.title}</h3>
                        <FilmMenu id={film.id} />
                    </li>
                })}
            </ul>
        </React.Fragment>
    )
}