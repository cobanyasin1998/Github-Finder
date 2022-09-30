import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "73795714",
      name: "Yasin Çoban",
      login: "cobanyasin1998",
      avatarUrl: "https://avatars.githubusercontent.com/u/73795714?v=4",
      htmlUrl: "https://github.com/cobanyasin1998",
    };
  }
  render() {
    const {avatarUrl,name,htmlUrl} = this.state;
    return (
      <div>
        <div className="card m-2">
          <div className="row">
            <div className="col-md-3">
              <img className="card-img" src={avatarUrl} alt="" />
            </div>
            <div className="col-md-3">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{name}.com</p>
              <p className="card-text">{login}.com</p>
              <a className="btn btn-primary btn-sm" href={htmlUrl}>Go Profile</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
