import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from "./AppReducer"

const initialState = {
    likes:localStorage.getItem('likes') ? JSON.parse(localStorage.getItem('likes')):[],
    bookmarks:localStorage.getItem('bookmarks') ? JSON.parse(localStorage.getItem('bookmarks')):[],

};
export const GlobalContext = createContext(initialState)

export const GlobalProvider = (props) => { 
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('likes', JSON.stringify(state.likes))
        localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
    }, [state]);



    const addMovieToLikes = (movies)  =>{
        dispatch({type: "ADD_MOVIE_TO_LIKES", payload: movies })
    }

    return (
        <GlobalContext.Provider value={{ likes: state.likes, 
                                       bookmarks:state.bookmarks, 
                                       addMovieToLikes }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

