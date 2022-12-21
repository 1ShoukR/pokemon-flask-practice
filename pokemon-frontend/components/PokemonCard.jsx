import React from "react";
import axios from "axios"

const PokemonCard = (props) => {
console.log(`This is props:`, props)
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
