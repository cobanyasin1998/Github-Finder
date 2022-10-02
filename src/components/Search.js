import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      keyword: "",
    };
  }
  onChange(e) {
    this.setState({
      keyword: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.state.keyword === "") {
      this.props.setAlert("Lütfen bir anahtar kelime giriniz", "danger");
    } else {
      this.props.searchUsers(this.state.keyword);
      this.setState({
        keyword: "",
      });
    }
  }
  render() {
    return (
      <div className="container my-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={this.state.keyword}
              onChange={this.onChange}
              className="form-control"
              name=""
              id=""
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
        {this.props.showClearButton && (
          <button
            onClick={this.props.clearUsers}
            className="w-100 btn btn-secondary btn-sm btn-block mt-2"
          >
            Clear Results
          </button>
        )}
      </div>
    );
  }
}

export default Search;
