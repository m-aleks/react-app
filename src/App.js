import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Forrest Gump",
      year: "1994",
      genre: "comedy-drama",
      actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    }
    //this.output = this.output.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="app_header">
            <h1>
              My React App
            </h1>
          </header>
          <section>
            <div className="section_heading">
              <h2>
                {this.state.title}
              </h2>
            </div>
            <div className="section_content">
              <div className="summary">
                <div className="summary_item">
                  <h4 className="summary_item_heading inline">Year:</h4>
                  <span className="summary_item_text">{this.state.year}</span>
                </div>
                <div className="summary_item">
                  <h4 className="summary_item_heading inline">Genre:</h4>
                  <span className="summary_item_text">{this.state.genre}</span>
                </div>
                <div className="summary_item">
                  <h4 className="summary_item_heading inline">Actors:</h4>
                  <span className="summary_item_text">{this.state.actors.join(", ")}</span>
                </div>
              </div>

            </div>

          </section>
        </div>
      </div>
    );
  }
}

export default App;
