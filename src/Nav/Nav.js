import React from 'react';
import './Nav.css';

const Nav = ({onRouteChange, route}) => {
	if(route === 'home'){
		return(
			<div className="navDiv">
				<h2 onClick={()=>onRouteChange('signin')} >{"sign out"}</h2>
			</div>
		);
	} else {
		return(
			<div className="navDiv">
				<h2 onClick={()=>onRouteChange('signin')} >{"sign in"}</h2>
			</div>
		);
	}
}

export default Nav;