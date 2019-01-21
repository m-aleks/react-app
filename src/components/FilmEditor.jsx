import React from 'react';
import { connect } from 'react-redux'
import { editFilm } from '../ducks/filmsDb'
import { withRouter } from "react-router-dom";
import { useState, useEffect, createRef } from 'react';

function FilmEditor(props) {
  let toFocus = createRef();

  useEffect(()=>{
    toFocus.current.focus()
  })

  const id=props.match.params.id
  const editedFilm =  props.getFilmById(id)

  const title = editedFilm.title
  const [genre, setGenre] = useState(editedFilm.genre)
  const [poster, setPoster] = useState(editedFilm.poster)
  const [description, setDescription] = useState(editedFilm.description)

  function handleSubmit(e) {
    e.preventDefault();
    props.editFilm({
      id,
      poster,
      genre,
      description
    })
    props.history.push("/dashboard");
  }

  function handleCancel() {
    props.history.goBack();
  }
  
  return (
    <React.Fragment>
      <h2>Edit film "{title}"</h2>
      <div className="editor_wrap">
        <form onSubmit={handleSubmit}>
          <label>
            Poster Url:<br />
            <input ref={toFocus} type="text" name="poster" value={poster} onChange={(e)=>setPoster(e.target.value)} className="editor_field editor_field_poster" /><br />
          </label>
          <label>
            Genre:<br />
            <input type="text" name="genre" value={genre} onChange={(e)=>setGenre(e.target.value)} className="editor_field editor_field_genre" /><br />
          </label>
          <label>
            Description:<br />
            <textarea name="description" value={description} onChange={(e)=>setDescription(e.target.value)} rows="5" className="editor_field editor_field_description" /><br />
          </label>
          <input type="submit" value="Submit" className="editor_button" /><br />
          <input type="button" value="Cancel" onClick={handleCancel} className="editor_button" />
        </form>
        <div className="editor_poster">
          <img src={poster} alt="Poster" />
        </div>
      </div>
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    editFilm: (filmData) => dispatch(editFilm(filmData))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(FilmEditor))