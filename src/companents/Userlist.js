import React, { Component } from 'react'
import User from './User'

export class Userlist extends Component {
constructor(props) {
  super(props)

  this.state = {
     users : [
        {
            id: "111304795",
            name: "Seref Badi",
            username: "CherokeeX",
            avatar_url: "https://avatars.githubusercontent.com/u/111304795?v=4",
            github_url: "https://github.com/CherokeeX",
            website: "www.serefbadi.com",
            icon:""
          },
          {
            id: "1",
            name: "SPSyco",
            username: "mojombo",
            avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
            github_url: "https://github.com/mojombo",
            website: "www.serefbadi.com",
            icon:""
          },{
            id: "2",
            name: "Wild-Thing",
            username: "defunkt",
            avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
            github_url: "https://api.github.com/users/defunkt",
            website: "www.serefbadi.com",
            icon:""
          },{
            id: "3",
            name: "pjhyett",
            username: "pjhyet",
            avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
            github_url: "https://api.github.com/users/defunkt",
            website: "www.serefbadi.com",
            icon:""
          }

     ]
  }
}

  render() {
    return (
      <div>{this.state.users.map(user  => ( 
        <User user={user}  key={user.id}  />

      ))
      }
      </div>
    )
  }
}

export default Userlist