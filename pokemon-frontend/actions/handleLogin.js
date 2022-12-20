import axios from 'axios';

const handleLoginClick = async (dispatch, e) => {
	e.preventDefault();
	let input = {
		username: e.target.form[0].value,
		password: e.target.form[1].value,
	};
	console.log(input);
	// function is working. now just need to post to backend and database.
	axios
		.post('http://127.0.0.1:5000/login-confirm', input)
		.then(function (response) {
			console.log(response);
            dispatch({type: "SET_POKEMON", payload: response.data})
		})
		.catch(function (error) {
			console.log(error);
		});
};
export default handleLoginClick;
