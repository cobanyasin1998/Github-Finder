import React, { Component } from "react";
import User from "./User";

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
          name: "mojombo",
          html_url: "https://github.com/mojombo",

          login: "MDQ6VXNlcjE=",
        },
        {
          id: 2,
          avatarUrl: "https://avatars.githubusercontent.com/u/2?v=4",
          name: "MDQ6VXNlcjI=",
          html_url: "https://github.com/defunkt",

          login: "defunkt",
        },
        {
          id: 3,
          avatarUrl: "https://avatars.githubusercontent.com/u/3?v=4",
          name: "MDQ6VXNlcjI=",
          html_url: "https://github.com/pjhyett",

          login: "pjhyett",
        },
      ],
    };
  }
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
        {this.state.users.map((user) => (
        
          <User user={user} />
        ))}
        </div>
    
      </div>
    );
  }
}

export default Users;
