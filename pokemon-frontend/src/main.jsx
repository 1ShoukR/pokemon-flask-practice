import React from 'react'
import ReactDOM from 'react-dom/client'
import CreateAccount from '../components/CreateAccount';
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../Reducers/setPokemonReducer';
import logger from 'redux-logger';
import Navbar from "../components/Navbar";

const store = createStore(rootReducer, applyMiddleware(logger)); 

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<Navbar />
			<Routes>
				<Route path="/" element={<App />} />
        <Route path="/create_account" element={<CreateAccount/>} />
			</Routes>
		</Provider>
	</BrowserRouter>
);
