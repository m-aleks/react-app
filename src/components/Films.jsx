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

const FilmsList = getFilms(List);
const FilmsLDashboard = getFilms(Dashboard);

export default connect(mapStateToProps)(FilmsList);
// export const FilmsLDashboard = connect(mapStateToProps)(FilmsLDashboard);