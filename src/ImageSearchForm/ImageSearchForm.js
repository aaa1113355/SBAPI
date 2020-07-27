import React from 'react';
import './ImageSearchForm.css';


const ImageSearchForm = ( {onInputChange, onButtonSubmit}) => {
	return(
		<div className="imageSearchFormDiv">
			<form>
				<input onChange={onInputChange} type='text' placeholder='Enter url'/>
				<button onClick={onButtonSubmit} >Search</button>
			</form>
		</div>
	);
}

export default ImageSearchForm;