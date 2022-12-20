import React from "react";
import { useDispatch } from "react-redux";
import handleLoginClick from '../actions/handleLogin';

const Login = () => {
    const dispatch = useDispatch();
  return (
		<>
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
						<button onClick={(e) => handleLoginClick(dispatch, e)}>Login</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Login;
