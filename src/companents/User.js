import React, { Component } from "react";

export class User extends Component {
 
    
  render() {
    const {avatar_url,login,username,html_url,subscriptions_url}= this.props.user

    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-3">
                <img
                className="img-fluid rounded-start avatar "
                src={avatar_url}
                alt={login }
                />
          </div>
          <div className="col-md-9">
                <div className="card-body">
                    <h3 className="card-title">{login}</h3>
                    <p> {username}{<i class="bi bi-person-badge"></i>}</p>
                    
                    <a target ="_blank" rel="noreferrer"className="btn btn-primary " href={html_url}> GitHUB PRofile</a>
                    <a target="_blank"rel="noreferrer" className="btn btn-primary ms-2" href={subscriptions_url}> Web sayfasi {<i class="bi bi-robot"></i>}</a>
                </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default User;
