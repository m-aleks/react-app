import React from 'react';
import List from './List.jsx';
import Dashboard from './Dashboard.jsx';
import {connect} from 'react-redux'

function getFilms(Component){
    return (props)=> <Component filmsArray={props.films} />
}

// function getFilmsWrapped(props){
//     return (Component)=>(props)=><Component filmsArray={props.films} />
// }

function mapStateToProps(state) {
    const { films } = state
    return { films }
}
// const getFilms = connect(mapStateToProps)(getFilmsWrapped);
// export const FilmsList = getFilms(List);
// export const FilmsLDashboard = getFilms(Dashboard);

const FilmsListToConnect = getFilms(List);
const FilmsLDashboardToConnect = getFilms(Dashboard);

export const FilmsList = connect(mapStateToProps)(FilmsListToConnect);
export const FilmsLDashboard = connect(mapStateToProps)(FilmsLDashboardToConnect);