export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_LIKES":
        return{
            ...state,
            likes: [action.payload, ...state.likes]
        }
        default:
            return state;
    }
}
