const searchForPokemon = async (dispatch, e) => {
	e.preventDefault();
	console.log('I am working');
    let url = `https://pokeapi.co/api/v2/pokemon/${e.target.form[0].value}`;
	let response = await fetch(url)
    const json = await response.json()
    if (json = null) {
        window.alert("This Pokemon does not exist.")
    } else {
        dispatch({type})
    }
}

export default searchForPokemon