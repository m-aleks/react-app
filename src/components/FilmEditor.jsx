import React from 'react';
import { connect } from 'react-redux'
import { editFilm } from '../ducks/filmsDb'
import { withRouter } from "react-router-dom";

class FilmEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      genre:"",
      poster:"",
      description:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  componentDidMount() {
    this.setState(this.props.getFilmById(this.props.match.params.id))
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editFilm({
      id:this.state.id,
      poster:this.state.poster,
      genre:this.state.genre,
      description:this.state.description
    })
    this.props.history.push("/dashboard");
  }

  handleCancel() {
    this.props.history.goBack();
  }

  render() {
    const editedFilm = this.state
    return (
      <React.Fragment>
        <h2>Edit film "{editedFilm.title}"</h2>
        <div className="editor_wrap">
          <form onSubmit={this.handleSubmit}>
            <label>
              Poster Url:<br />
              <input type="text" name="poster" value={editedFilm.poster} onChange={this.handleChange} className="editor_field editor_field_poster" /><br />
            </label>
            <label>
              Genre:<br />
              <input type="text" name="genre" value={editedFilm.genre} onChange={this.handleChange} className="editor_field editor_field_genre" /><br />
            </label>
            <label>
              Description:<br />
              <textarea name="description" value={editedFilm.description} onChange={this.handleChange} rows="5" className="editor_field editor_field_description" /><br />
            </label>
            <input type="submit" value="Submit" className="editor_button" /><br />
            <input type="button" value="Cancel" onClick={this.handleCancel} className="editor_button" />
          </form>
          <div className="editor_poster">
            <img src={this.state.poster} alt="Poster" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editFilm: (filmData) => dispatch(editFilm(filmData))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(FilmEditor))