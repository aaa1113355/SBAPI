import React from 'react';
import './Logo.css';
import ImageFile from "./capture.PNG"

const Logo = () => {
	return(
		<div className="logoDiv">
			<img alt='' src={ImageFile} />
		</div>
	);
}

export default Logo;