import React from 'react';
import './Signin.css';


class Signin extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			emailInput :'',
			passwordInput:''
		}
	}

	
	onEmailChange = (event) => {
	    this.setState({emailInput:event.target.value});
 	}

 	onPasswordChange = (event) => {
	    this.setState({passwordInput:event.target.value});
  	}

  	onButtonSubmit = (event) => {

  		
  		fetch('http://localhost:3002/signin', {
  			method: 'post',
  			headers: { 'Content-Type': 'application/json' },
  			body: JSON.stringify({
  				email: this.state.emailInput,
  				password: this.state.passwordInput
  			})
  		})
  			.then(response => response.json())
  			.then(user => {
  				if(user.id) {
  					this.props.onRouteChange('home');
  					console.log(user)
  					this.props.loadUser(user);
  				}
  			})
  			.catch(err => console.log);
  	}

	render(){
		return(
			<div className="SigninDiv">
				<div>
					<input type="email" placeholder="email" onChange={this.onEmailChange} />   
				</div>
				<div>
			    	<input type="password" placeholder="password" onChange={this.onPasswordChange} />
			    </div>
			    <div>
			    	<button 
			    		type="submit"
			    		onClick={this.onButtonSubmit}
			    	>
			    		Sign In
			    	</button>
				</div>
				<div>
			    	<p onClick={ () => this.props.onRouteChange('register')}>Register</p>
				</div>
			</div>
		);
	}
}

export default Signin;