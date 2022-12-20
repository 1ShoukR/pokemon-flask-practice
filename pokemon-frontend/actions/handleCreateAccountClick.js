import axios from 'axios';

const handleCreateAccountClick = async (e) => {
	e.preventDefault();
	let input = {
		username: e.target.form[0].value,
		password: e.target.form[1].value,
	};
	console.log(input);
	axios
		.post('http://127.0.0.1:5000/create-account-confirm', input)
		.then(function (response) {
			console.log(response);
            window.alert("Account has been created!")
		})
		.catch(function (error) {
			console.log(error);
		});
};
export default handleCreateAccountClick;
