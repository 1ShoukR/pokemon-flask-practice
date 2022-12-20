const searchForPokemon = async (dispatch, e) => {
	e.preventDefault();
	console.log('I am working');
    let url = `https://pokeapi.co/api/v2/pokemon/${e.target.form[0].value}`;
	let response = await fetch(url)
    let json = await response.json()
    console.log("This is json", json)
    if (!json) {
        window.alert("This Pokemon does not exist.")
    } else {
        dispatch({ type: 'SET_SEARCHED_POKEMON' , payload: json});
    }
}

export default searchForPokemon