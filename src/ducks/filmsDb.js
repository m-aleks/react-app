import { db } from '../db';
const initialState = {films: db};

export const EDIT_FILM = 'EDIT_FILM'

export default function filmsDb (state = initialState, action){
    if(action.type == EDIT_FILM){
        const newDb=state.films.map(film=>{
            if(film.id == action.payload.id){
                film.poster = action.payload.newPoster
                film.genre = action.payload.newGenre
                film.description = action.payload.newDescription
            }
            return film
        })
        return{films: newDb}
    }
    return state
}

export function editFilm(id, newPoster, newGenre, newDescription){
    return {
        type: EDIT_FILM,
        payload:{
            id,
            newPoster, 
            newGenre, 
            newDescription
        }

    }
}