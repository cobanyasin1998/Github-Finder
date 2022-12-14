import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, avatar_url, name, html_url, login } = this.props.user;

    return (
      <div className="col-md-4 col-sm-6 col-lg-3 mt-3">
        <div className="card">
          <img className="img-fluid" src={avatar_url} alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{name}.com</p>
            <p className="card-text">{login}.com</p>

            <Link exact to={`/user/${login}`} className="btn btn-primary btn-sm">
              Go Profile
            </Link>

            {/* <a className="btn btn-primary btn-sm" href={html_url}>
                Go Profile
              </a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default User;
