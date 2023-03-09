import Navbar from "./companents/Navbar";
import User from "./companents/User";
import Userlist from "./companents/Userlist";


import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       users : []
    }
  }

      componentDidMount(){

          fetch("https://api.github.com/users")
          .then(response=>response.json())
          .then(data => this.setState({users: data}));
          


      }

  
  render() {


    
    return (
      
  <div>
  <Navbar />
    <div className="container mt-3">
    <Userlist users={this.state.users}/>
    
    </div>

  
  </div>

    ) 
  }
}

export default App


