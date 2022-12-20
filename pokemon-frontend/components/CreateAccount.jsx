import React from "react";
import axios from "axios"

const CreateAccount = () => {
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
      })
      .catch(function (error) {
        console.log(error);
      });
	}


  const handleLoginClick = async (e) => {
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
			})
			.catch(function (error) {
				console.log(error);
			});
	}
  return (
		<div>
			<div>
				<h1>Create an Account</h1>
			</div>
			<div>
				<form >
					<div>
						<input type="username" placeholder="username" />
						<input type="password" placeholder="password" />
					</div>
					<div>
						<button onClick={handleCreateAccountClick}>create an account</button>
					</div>
				</form>
			</div>
			<div>
				<h1>Already have an account? Login here.</h1>
			</div>
			<div>
				<form>
					<div>
						<input type="username" placeholder="username" />
						<input type="password" placeholder="password" />
					</div>
          <div>
            <button onClick={handleLoginClick}>Login</button>
          </div>
				</form>
			</div>
		</div>
	);
};

export default CreateAccount;
