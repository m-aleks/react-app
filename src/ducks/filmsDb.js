import { db } from '../db';
const initialState = {films: db};

export const EDIT_FILM = 'EDIT_FILM'

export default function filmsDb (state = initialState, action){
    if(action.type === EDIT_FILM){
        const newDb=state.films.map(film=>{
            console.log("action.payload.id=",action.payload.id)
            if(film.id == action.payload.id){                
                film.poster = action.payload.poster
                film.genre = action.payload.genre
                film.description = action.payload.description
            }
            return film
        })
        return{films: newDb}
    }
    return state
}

export function editFilm(filmData){
    return {
        type: EDIT_FILM,
        payload:{
            id:filmData.id,
            poster: filmData.poster, 
            genre:filmData.genre, 
            description:filmData.description
        }

    }
}