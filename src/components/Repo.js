import React from "react";

const Repo = ({ repo }) => {
  return (
    <li className="list-group-item">
      <i class="fa-solid fa-circle-dot"></i>
      <a href={repo.html_url}> {repo.name}</a>
    </li>
  );
};
export default Repo;
