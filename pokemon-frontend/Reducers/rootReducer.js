import { combineReducers } from "redux";
import pokemonSearchReducer from "./pokemonSearchReducer";
import setPokemonReducer from "./setPokemonReducer";



const rootReducer = combineReducers({
    pokeReducer:pokemonSearchReducer,
    pokemonSet: setPokemonReducer
})

export default rootReducer