import axios from "axios";
import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import User from "./User";
import Users from "./Users";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get("https://api.github.com/users")
        .then((response) =>
          this.setState({ users: response.data, loading: false })
        );
    }, 3000);
  }
  render() {
    return (
      <>
        <Navbar title="Github Finder" icon="fa-brands fa-github" />
        <Users users={this.state.users} loading={this.state.loading} />
      </>
    );
  }
}

export default App;
