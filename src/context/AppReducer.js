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
        default:
            return state;
    }
}
