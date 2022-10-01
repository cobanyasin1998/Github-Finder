import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    debugger;
  }
  render() {
    debugger;
    const { id, avatarUrl, name, htmlUrl, login } = this.props.user;
    debugger;
    return (
      <div className="col-md-4 col-sm-6 col-lg-3 mt-3">
       
          <div className="card">
            <img className="img-fluid" src={avatarUrl} alt="" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{name}.com</p>
              <p className="card-text">{login}.com</p>
              <a className="btn btn-primary btn-sm" href={htmlUrl}>
                Go Profile
              </a>
            </div>
          </div>
       
      </div>
    );
  }
}

export default User;
