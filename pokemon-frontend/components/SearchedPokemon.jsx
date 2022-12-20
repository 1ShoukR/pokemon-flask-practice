import React from "react";
import { useSelector } from "react-redux";
import handleAddToDatabase from "../actions/handleAddToDatabase";

const SearchedPokemon = () => {
    const searchedPokemonData = useSelector((state) => state.pokeReducer.pokemonSearch);
	const globalUserData = useSelector((state) => state?.pokemonSet?.pokemon);
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
                <div>
				    <img src={searchedPokemonData?.sprites?.front_default} alt={`Pokemon image of ${searchedPokemonData?.name}`} />
                </div>
                <div>
                    <button onClick={(e) => handleAddToDatabase(e, searchedPokemonData, globalUserData)}>Add to Database</button>
                </div>
		    </div>
            ) : (
                <>
                </>
            )}
		</div>
);
};

export default SearchedPokemon;
