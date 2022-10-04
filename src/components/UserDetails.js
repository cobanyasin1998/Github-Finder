import React, { Component } from "react";
import { Loading } from "./Loading";

export class UserDetails extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const { loading } = this.props;
    const { name, avatar_url } = this.props.user;
    if (loading) {
      return <Loading />;
    } else {
      return (
        <div>
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-3">
                <img src={avatar_url} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default UserDetails;
