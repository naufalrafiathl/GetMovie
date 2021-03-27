export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_LIKES":
        return{
            ...state,
            likes: [action.payload, ...state.likes],
        }
        case "ADD_MOVIE_TO_BOOKMARKS":
            return{
            ...state,
            bookmarks:[action.payload, ...state.bookmarks],

        }
        case "REMOVE_MOVIE_FROM_LIKES":
            return {
                ...state,
                likes: state.likes.filter(movies=>movies.id!==action.payload)
            }
        case "REMOVE_MOVIE_FROM_BOOKMARKS":
            return {
                ...state,
                bookmarks: state.bookmarks.filter(movies=>movies.id!==action.payload)
            }
        default:
            return state;
    }
}
