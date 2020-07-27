import React from 'react';

const Greeting = ({userInfo}) => {
	return (
		<h1>{`Hi, ${userInfo.name}!, ${userInfo.id}`}</h1>
	);
}

export default Greeting;