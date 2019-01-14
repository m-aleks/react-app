import React from 'react';
import FilmMenu from './FilmMenu.jsx';

export default function Dashboard(props) {
    return (
        <ul>
            {props.filmsArray.map((film, i) => {
                if (i < 5) {
                    return <li key={film.id}>
                        <div>
                            <img src={film.poster} alt="" /><br />
                            {film.title}
                            <FilmMenu id={film.id} />
                        </div>
                    </li>
                }
            })}
        </ul>
    )
}