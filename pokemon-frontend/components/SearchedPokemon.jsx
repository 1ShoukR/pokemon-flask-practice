import React from "react";
import { useSelector } from "react-redux";

const SearchedPokemon = () => {
    const searchedPokemonData = useSelector((state) => state.pokeReducer.pokemonSearch);
  return (
		<div>
			<div>
				<h1>Results</h1>
			</div>
			<div>
				<h4>{searchedPokemonData?.name}</h4>
			</div>
			{searchedPokemonData?.sprites?.front_default ? (
			<div>
				<img src={searchedPokemonData?.sprites?.front_default} alt={`Pokemon image of ${searchedPokemonData?.name}`} />
			</div>

            ) : (
                <>
                </>
            )}
		</div>
	);
};

export default SearchedPokemon;
