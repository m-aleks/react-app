import React from 'react';
import FilmMenu from './FilmMenu.jsx';

export default function List(props){
    return (
        <ul>
            {props.filmsArray.map(film=>{
                return <li key={film.id}>
                {film.title}
                <FilmMenu id={film.id} />
                </li>
            })}
        </ul>
    )
}