import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Users from "./Users";
import Alert from "./Alert";
import About from "./About";
import GithubState from "../context/githubState";
import UserDetails from "./UserDetails";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
  NavLink,
  BrowserRouter,
} from "react-router-dom";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   setTimeout(() => {
  //     axios
  //       .get("https://api.github.com/users")
  //       .then((response) =>
  //         this.setState({ users: response.data, loading: false })
  //       );
  //   }, 1000);
  // }

  const getUser = (username) => {
    setLoading(true);
    setTimeout(() => {
      axios.get(`https://api.github.com/users/${username}`).then((response) => {
        setUser(res.data);
        setLoading(false);
      });
    }, 1000);
  };
  const getUserRepos = (username) => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
          setLoading(false);
          setRepos(res.data);
        });
    }, 1000);
    console.log("Burası cevap : " + repos);
  };
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert({ alert: null });
    }, 3000);
  };

  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <>
      <GithubState>
        <Router>
          <Navbar title="Github Finder" icon="fa-brands fa-github" />
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <Search
                  
                    clearUsers={clearUsers}
                    setAlert={showAlert}
                    showClearButton={users.length > 0 ? true : false}
                  />
                  <Users />
                </>
              )}
            />
            <Route exact path="/about">
              <About />
            </Route>
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <UserDetails
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  repos={state.repos}
                  user={state.user}
                  loading={state.loading}
                />
              )}
            ></Route>
          </Switch>
        </Router>
      </GithubState>
    </>
  );
};

export default App;
