import Navbar from "./companents/Navbar";

import Userlist from "./companents/Userlist";
import Search from "./companents/Search";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
      error: null
    };
  }

  searchUsers = (keyword) => {
    this.setState({ loading: true });

    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then((response) => response.json())
        .then((data) => this.setState({ users: data.items, loading: false }));
    }, 1000);
  };
    clearResults = ()=> {
        this.setState({users : []});

    }
displayAlert = (msg,type)=> {this.setState ({msg:msg , type:type});}

  /*
      componentDidMount(){

        this.setState({loading:true});

        setTimeout(()=> {
          fetch("https://api.github.com/users")
        .then(response=>response.json())
        .then(data => this.setState({users: data, loading:false}));

        },1500)

          
          


      }

  */
  render() {
    return (
      <div>
        <Navbar />
        <Search searchUsers={this.searchUsers} clearResults={this.clearResults} showClearButton={this.state.users.length > 0 ? true:false} displayAlert={this.displayAlert}/>

        <div className="container mt-3">
          <Userlist users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
