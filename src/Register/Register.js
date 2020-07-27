import React from 'react';
import './Register.css';




class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email :'',
			password :'',
			name :''
		}
	}

	onEmailChange = (event) => {
		this.setState({email:event.target.value});
	}
	
	onPasswordChange = (event) => {
		this.setState({password:event.target.value});
	}

	onNameChange = (event) => {
		this.setState({name:event.target.value});
	}

	onButtonSubmit = () => {
		const {email, password, name} = this.state;

	    fetch('http://localhost:3002/register', {
	      method: 'post',
	      headers: {
	        'Content-Type' : 'application/json'
	      },
	      body: JSON.stringify({
	        email,
	        password,
	        name
	      })
	    })
	    .then(response => response.json())
	    .then(user => {
	    	console.log(user);
	    	if (user.id) {
	    		this.props.onRouteChange('home');
	    	}
	    })
	}

	render(){
		return(
			<div className="RegisterDiv">
				<div>
					<input type="text" placeholder="name" onChange={this.onNameChange} />   
				</div>
				<div>
					<input type="email" placeholder="email" onChange={this.onEmailChange}/>   
				</div>
				<div>
			    	<input type="password" placeholder="password" onChange={this.onPasswordChange} />
			    </div>
			    <div>
			    	<button type="submit" onClick={this.onButtonSubmit}>
			    		Register
			    	</button>
				</div>
			</div>
		);
	}
}

export default Register;
