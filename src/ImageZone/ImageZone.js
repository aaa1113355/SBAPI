import React from 'react';
import './ImageZone.css';
import ImageFile from './1595523767.jpg'

const ImageZone = ({imageUrl, box}) => {

	const {top, right, bottom, left} = box;
	return(
		<div className="imageZoneDiv">
			<img id='imageInput' alt='' src= {imageUrl} />
			<div 
				className="bounding-box"
				style = {{top:top, bottom:bottom, right:right, left:left}}
			>
			</div>
		</div>
	);
}

export default ImageZone;