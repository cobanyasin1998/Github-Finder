import React, { useState } from "react";

const Search = ({ searchUsers, clearUsers, setAlert, showClearButton }) => {
  const [keyword, SetKeyword] = useState("");

  const onChange = (e) => {
    SetKeyword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (keyword === "") {
      setAlert("Lütfen bir anahtar kelime giriniz", "danger");
    } else {
      searchUsers(keyword);
      SetKeyword("");
    }
  };

  return (
    <div className="container my-3">
      <form onSubmit={onSubmit}>
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
      {showClearButton && (
        <button
          onClick={clearUsers}
          className="w-100 btn btn-secondary btn-sm btn-block mt-2"
        >
          Clear Results
        </button>
      )}
    </div>
  );
};

export default Search;
