import axios from "axios"

const handleAddToDatabase = async (e, searchedPokemonData, globalUserData, dispatch) => {
    // console.log("This is searched pokemon data", searchedPokemonData)
    // console.log("This is global user data", globalUserData)
	e.preventDefault()
	axios
		.post('http://127.0.0.1:5000/add-pokemon', {
			user_id: globalUserData.id,
			title: searchedPokemonData.name,
			description: searchedPokemonData.types[0].type.name,
			poke_image: searchedPokemonData.sprites.front_default,
		})
		.then(function (response) {
			console.log(response);
			dispatch({ type: 'SET_POKEMON' , payload: response.data});
		})
		.catch(function (error) {
			console.log(error);
		});
};

export default handleAddToDatabase