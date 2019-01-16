import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx';
import FilmEditor from './components/FilmEditor.jsx';
import { FilmsList, FilmsDashboard } from './components/Films.jsx';
import Details from './components/Details.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <header className="app_header">
              <h1>
                <Link to="/">My React App</Link>
              </h1>
            </header>
            <main className="main_content">
              <Route path="/" exact component={Home} />
              <Route path="/list" component={FilmsList} />
              <Route path="/dashboard" component={FilmsDashboard} />
              <Route path="/edit/:id" component={FilmEditor} />
              <Route path="/details/:id" component={Details} />
            </main>
          </div>
        </div>
      </Router>
    );
  }
}



export default App;