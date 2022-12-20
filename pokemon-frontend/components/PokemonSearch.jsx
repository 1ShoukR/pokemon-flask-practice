import React from "react";
import { useDispatch, useSelector } from "react-redux";
import searchForPokemon from "../actions/searchForPokemon";
import PokemonCard from "./PokemonCard";

const PokemonSearch = () => {
    const globalUserData = useSelector((state) => state?.pokemonSet?.pokemon);
    const dispatch = useDispatch()
  return (
		<div>
			<div>
				<h1>Search for pokemon</h1>
			</div>
			<div>
				<form action="">
					<div>
						<input type="pokemon-name" placeholder="Search Pokemon" />
					</div>
					<div>
						<button onClick={(e) => searchForPokemon(dispatch, e)}>Search</button>
					</div>
				</form>
			</div>
			<div>
                <PokemonCard globalUserData={globalUserData} />
			</div>
		</div>
	);
};

export default PokemonSearch;
