import React, { Component } from 'react';
import './App.css';
// import Details from './components/details.jsx';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx';
import FilmEditor from './components/FilmEditor.jsx';
import { FilmsList, FilmsLDashboard } from './components/Films.jsx';
// import FilmsList from './components/Films.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <header className="app_header">
              <h1>
                My React App
                </h1>
            </header>
            <Route path="/" exact component={Home} />
            <Route path="/list" component={FilmsList} />
            <Route path="/dashboard" component={FilmsLDashboard} />
            <Route path="/edit/:id" component={FilmEditor} />
          </div>
        </div>
      </Router>
    );
  }
}



export default App;