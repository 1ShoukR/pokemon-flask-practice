import axios from "axios"

const handleAddToDatabase = async (e, searchedPokemonData, globalUserData) => {
    console.log("This is searched pokemon data", searchedPokemonData)
    console.log("This is global user data", globalUserData)
	console.log('I am working');
    axios({
			method: 'post',
			url: 'http://127.0.0.1:5000/add-pokemon',
			data: {
				user_id: globalUserData.id,
				title: searchedPokemonData.name,
                description: "description"
			},
		});
};

export default handleAddToDatabase