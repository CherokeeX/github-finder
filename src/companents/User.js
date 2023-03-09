import React, { Component } from "react";

export class User extends Component {
 
    
  render() {
    const {avatar_url,name,username,github_url,website}= this.props.user

    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-3">
                <img
                className="img-fluid rounded-start avatar "
                src={avatar_url}
                alt={name}
                />
          </div>
          <div className="col-md-9">
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p> {username}{<i class="bi bi-person-badge"></i>}</p>
                    
                    <a target ="_blank" className="btn btn-primary " href={github_url}> GitHUB PRofile</a>
                    <a target="_blank" className="btn btn-primary ms-2" href={website}> Web sayfasi {<i class="bi bi-robot"></i>}</a>
                </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default User;
