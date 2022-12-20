import React from "react";
import searchForPokemon from "../actions/searchForPokemon";

const PokemonSearch = () => {
  return (
    <div>
        <div>
            <h1>Search for pokemon</h1>
        </div>
        <div>
            <form action="">
                <div>
                    <input type="pokemon-name" placeholder="Search Pokemon"/>
                </div>
                <div>
                    <button onClick={(e) => searchForPokemon(e)}>Search</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default PokemonSearch;
