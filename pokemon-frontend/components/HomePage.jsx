import React from "react";
import PokemonSearch from "./PokemonSearch";
import SearchedPokemon from "./SearchedPokemon";

const HomePage = () => {
  return (
    <div>
      <div>
      <PokemonSearch />
      </div>
      <div>
        <SearchedPokemon />
      </div>
    </div>
  );
};

export default HomePage;
