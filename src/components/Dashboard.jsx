import React from 'react';
import FilmMenu from './FilmMenu.jsx';

export default function Dashboard(props) {
    return (
        <React.Fragment>
            <h2>Top 5 films dashboard</h2>
            <ul className="films_dashboard">
                {props.filmsArray.map((film, i) => {
                    if (i < 5) {
                        return (
                            <li key={film.id} className="films_dashboard_item">
                                <div className="films_dashboard_item_inner">
                                    <img src={film.poster} alt="" className="films_dashboard_item_poster" /><br />
                                    <h4 className="films_dashboard_item_title">{film.title}</h4>
                                    <FilmMenu id={film.id} />
                                </div>
                            </li>
                        )
                    }
                })}
            </ul>
        </React.Fragment>
    )
}