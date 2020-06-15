import React from 'react';

const Card = (props) => {
	return(
		<div className ='tc bg-light-green dib br3 pa3 ma2 grow bw 5 shadow-5'>
			{props.children}
		</div>
		);
}

export default Card;