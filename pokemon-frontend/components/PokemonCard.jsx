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
			<p>{props?.globalUserData?.userAccountData?.[0]?.title}</p>
            <p>{props?.globalUserData?.userAccountData?.[0]?.description}</p>
		</div>
	</div>
);
};

export default PokemonCard;
