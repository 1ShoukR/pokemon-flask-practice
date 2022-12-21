import React from "react";
import removeFromDatabase from "../actions/removeFromDatabase";
import { useSelector, useDispatch } from "react-redux";

const PokemonCard = (props) => {
console.log(`This is props:`, props)
const dispatch = useDispatch()
const globalUserData = useSelector((state) => state?.pokemonSet?.pokemon);
return (
	<div>
		<div>
			<h4>Pokemon in your database</h4>
		</div>
		<div>
			{props?.globalUserData?.userAccountData?.map((item, id) => {
				return (
				<>
					<div>
						<p key={id}>{item.title}</p>
						<p key={id}>{item.description}</p>
						<img key={id} src={item.image} alt={item.title + "image"} />
					</div>
					<div>
						<button onClick={(e) => removeFromDatabase(dispatch, globalUserData, e)}>Remove from Database</button>
					</div>
				</>
					)
			})}
			{/* <p>{props?.globalUserData?.userAccountData?.[0]?.title}</p>
			<p>{props?.globalUserData?.userAccountData?.[0]?.description}</p>
			<img src={props?.globalUserData?.userAccountData?.[0]?.image} alt="" /> */}
		</div>
	</div>
);
};

export default PokemonCard;
