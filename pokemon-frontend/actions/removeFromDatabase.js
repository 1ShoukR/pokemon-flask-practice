import axios from "axios"

const removeFromDatabase = async (dispatch, globalUserData, e) => {
    console.log(e)
    axios
		.post('http://127.0.0.1:5000/remove-pokemon', {
			user_id: globalUserData.id,
			// title: globalUserData.title,
			// description: globalUserData,
			// poke_image: globalUserData.sprites.front_default,

            // need to have id of pokemon, id of user, query the database for pokemon based on the account id, and remove the pokemon 
		})
		.then(function (response) {
			console.log(response);
			// dispatch({ type: 'SET_POKEMON' , payload: response.data});
		})
		.catch(function (error) {
			console.log(error);
		});
}

export default removeFromDatabase