import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'
import Home from './components/Home.jsx';
import FilmEditor from './components/FilmEditor.jsx';
import { FilmsList, FilmsDashboard } from './components/Films.jsx';
import Details from './components/Details.jsx';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {films: this.props.films}
  }
  getFilmById=(id)=>{
   return this.props.films.filter(item => item.id == id)[0]
  }

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
              <Route path="/edit/:id" render={()=><FilmEditor getFilmById={this.getFilmById}/>}/>
              <Route path="/details/:id" render={()=><Details getFilmById={this.getFilmById}/>} />
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { films } = state
  return { films }
}

export default connect(mapStateToProps)(App);