import React, { Component } from "react";
import { Loading } from "./Loading";
import Repos  from "./Repos";

export class UserDetails extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  render() {
    const { loading, repos } = this.props;
   
    const {
      name,
      avatar_url,
      location,
      html_url,
      blog,
      bio,
      followers,
      following,
      public_repos,
    } = this.props.user;
    if (loading) {
      return <Loading />;
    } else {
      return (
        <div>
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-3">
                <img src={avatar_url} className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">{name}</p>
                  <p>
                    <i class="fa-solid fa-location-dot"></i>
                    {location}
                  </p>
                  <p>
                    <a
                      className="btn btn-block btn-primary btn-sm"
                      href={html_url}
                    >
                      Github Profile
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card">
                  <div className="card-body">
                    {bio && (
                      <>
                        <p>About</p>
                        <h3>{bio}</h3>
                      </>
                    )}
                    {blog && (
                      <>
                        <p>Blog</p>
                        <h3>{blog}</h3>
                      </>
                    )}
                    <div>
                      <span className="badge rounded-pill text-bg-primary m-1">
                        Followers: {followers}
                      </span>
                      <span className="badge rounded-pill text-bg-danger m-1">
                        Following: {following}
                      </span>
                      <span className="badge rounded-pill text-bg-success m-1">
                        Public Repo: {public_repos}
                      </span>
                    </div>
                  </div>
                  <ul className="list-group list-group-flush">
                    <Repos repolar={repos} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default UserDetails;
