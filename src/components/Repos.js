import React from "react";
import Repo from "./Repo";

const Repos = ({ repolar }) => {
  console.log("burası repos"+repolar)
  return repolar.map((repos) => 
    <Repo repo={repos} key={repos.id} />
  );
};
export default Repos;
