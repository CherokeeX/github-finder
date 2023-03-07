import React, { Component } from "react";

export class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "111304795",
      name: "Seref Badi",
      username: "CherokeeX",
      avatar_url: "https://avatars.githubusercontent.com/u/111304795?v=4",
      github_url: "https://github.com/CherokeeX",
      website: "www.serefbadi.com",
      icon:""
    };
  }

  render() {
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-3">
                <img
                className="img-fluid rounded-start"
                src={this.state.avatar_url}
                alt={this.state.name}
                />
          </div>
          <div className="col-md-9">
                <div className="card-body">
                    <h3 className="card-title">{this.state.name}</h3>
                    <p> {this.state.username}</p>
                    
                    <a target ="_blank" className="btn btn-primary " href={this.state.github_url}> GitHUB PRofile</a>
                    <a target="_blank" className="btn btn-primary ms-2" href={this.state.website}> Web sayfasi {<i class="bi bi-robot"></i>}</a>
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
