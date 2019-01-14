import React from 'react';
import {connect, dispatch} from 'react-redux'
import {editFilm, EDIT_FILM} from '../ducks/filmsDb'

class FilmEditor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
    }
    componentDidMount(){
      this.setState(this.props.films.filter(item=>item.id == this.props.match.params.id)[0])
    }
  
    handleChange(e) {
      this.setState(Object.assign({}, this.state, {[e.target.name] : e.target.value}) );
    }
  
    handleSubmit(e) {
     e.preventDefault();
     this.props.editFilm(
        this.state.id,
        this.state.poster,
        this.state.genre, 
        this.state.description
      )
     //window.location.pathname = "/list"
    }

    handleCancel(){
        window.history.back();
    }
  
    render() {
        const {id} = this.props.match.params;
        // console.log("this.props.films=",this.props.films)
        const editedFilm = this.props.films.filter(item=>item.id == id)[0];
      return (
        //   <p>{id}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Poster Url:<br/>
            <input type="text" name="poster" defaultValue={editedFilm.poster} onChange={this.handleChange} /><br/>
          </label>
          <label>
            Genre:<br/>
            <input type="text" name="genre" defaultValue={editedFilm.genre} onChange={this.handleChange} /><br/>
          </label>
          <label>
            Description:<br/>
            <textarea name="description" defaultValue={editedFilm.description} onChange={this.handleChange} /><br/>
          </label>
          <input type="submit" value="Submit" /><br/>
          <input type="button" value="Cancel" onClick={this.handleCancel}/>
        </form>
      );
    }
  }

function mapStateToProps(state) {
  const { films } = state
  return { films }
}
const mapDispatchToProps = dispatch => {
  return {
    editFilm: (id, newPoster, newGenre, newDescription) => dispatch(editFilm(id, newPoster, newGenre, newDescription))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmEditor)