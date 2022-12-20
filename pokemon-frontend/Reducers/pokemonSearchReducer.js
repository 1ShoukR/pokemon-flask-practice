const initialState = {
    pokemonSearch: []
}


const pokemonSearchReducer = (state= initialState, action) => {
    switch(action.type) {
        case "SET_SEARCHED_POKEMON":
            return {
                ...state,
                pokemonSearch: action.payload
            }
        default:
            return state
    }
}

export default pokemonSearchReducer