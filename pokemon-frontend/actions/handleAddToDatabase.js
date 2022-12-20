import axios from "axios"

const handleAddToDatabase = async (e, searchedPokemonData) => {
    console.log("This is searched pokemon data", searchedPokemonData)
	console.log('I am working');
    axios({
			method: 'post',
			url: 'http://127.0.0.1:5000/add-pokemon',
			data: {
				firstName: 'Fred',
				lastName: 'Flintstone',
			},
		});
};

export default handleAddToDatabase