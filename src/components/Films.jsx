import React from 'react';
import List from './List.jsx';
import Dashboard from './Dashboard.jsx';
import {connect} from 'react-redux'

function mapStateToProps(state) {
    const { films } = state
    return { films }
}

function withFilms(Component){
    return connect(mapStateToProps)((props)=><Component filmsArray={props.films} />);
}

export const FilmsList = withFilms(List);
export const FilmsDashboard = withFilms(Dashboard);