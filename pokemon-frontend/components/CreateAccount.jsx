import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import handleLoginClick from "../actions/handleLogin";
import handleCreateAccountClick from "../actions/handleCreateAccountClick";

const CreateAccount = () => {
  const dispatch = useDispatch()
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
						<button onClick={(e) => handleCreateAccountClick(e)}>create an account</button>
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
            <button onClick={(e) =>handleLoginClick(dispatch, e)}>Login</button>
          </div>
				</form>
			</div>
		</div>
	);
};

export default CreateAccount;
