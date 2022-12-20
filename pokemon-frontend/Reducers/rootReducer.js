const initialState = {
    pokemon: []
}




const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_POKEMON":
            return {
                ...state, 
                pokemon: action.payload
            }
        case "REMOVE_POKEMON":
            return {
                ...state,
                pokemon: action.payload
            }
        default:
            return state
    }
}   


export default rootReducer