import axios from "axios";
import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Users from "./Users";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
    };
    this.searchUsers = this.searchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);
  }
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
  searchUsers(keyword) {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((response) =>
          this.setState({ users: response.data.items, loading: false })
        );
    }, 1000);
  }
  clearUsers() {
    this.setState({ users: [] });
  }
  render() {
    return (
      <>
        <Navbar title="Github Finder" icon="fa-brands fa-github" />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClearButton={this.state.users.length > 0 ? true : false}
        />
        <Users users={this.state.users} loading={this.state.loading} />
      </>
    );
  }
}

export default App;
