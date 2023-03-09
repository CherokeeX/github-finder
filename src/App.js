import Navbar from "./companents/Navbar";
import User from "./companents/User";
import Userlist from "./companents/Userlist";
import Search from "./companents/Search";


import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props)

    
  
    this.state = {
      loading: false , 
       users : []
    }
  }

      componentDidMount(){

        this.setState({loading:true});

        setTimeout(()=> {
          fetch("https://api.github.com/users")
        .then(response=>response.json())
        .then(data => this.setState({users: data, loading:false}));

        },1500)

          
          


      }

  
  render() {


    
    return (
      
  <div>
  <Navbar />
  <Search />
  
    <div className="container mt-3">
    <Userlist users={this.state.users} loading={this.state.loading}/>
    
    </div>

  
  </div>

    ) 
  }
}

export default App


