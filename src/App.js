import React, {Component} from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Logo from './Logo/Logo';
import ImageSearchForm from './ImageSearchForm/ImageSearchForm';
import ImageZone from './ImageZone/ImageZone';
import Signin from './Signin/Signin';
import Register from './Register/Register';
import Greeting from './Greeting/Greeting';



const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  emailInput: '',
  PasswordInput: '',
  user: {
    id: 0,
    name: '',
    email: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  

  onButtonSubmit = (event) => {
    event.preventDefault();
    this.setState({imageUrl: this.state.input});

    fetch('http://localhost:3002/image', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        imageUrl: this.state.input
      })
    })
      .then(response => response.json())
      .then(data => this.caculateFaceLocation(data)) 
  }

  loadUser = (user) => {
    this.setState({user: user});
  } 

  caculateFaceLocation = (data) => {
    const imageInput = document.getElementById("imageInput");
    const faceLocation = {
      top: imageInput.height * data.top_row,
      right: imageInput.width - imageInput.width * data.right_col,
      bottom: imageInput.height - imageInput.height * data.bottom_row,
      left: imageInput.width * data.left_col
    }
    this.setState({box: faceLocation});
  }




  render() {
    return (
      <div className="App">
        {this.state.route === 'home'
        ?(
          <div>
            <Nav onRouteChange={this.onRouteChange} route={this.state.route}/>
            <Logo />
            <ImageSearchForm onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <Greeting userInfo={this.state.user}/>
            <ImageZone imageUrl = {this.state.imageUrl} box = {this.state.box} />
          </div>
        )
          
        :this.state.route ==='signin'
        ?<Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
        :<Register onRouteChange={this.onRouteChange}/>
       }
        </div>
    )
  }
}

export default App;
