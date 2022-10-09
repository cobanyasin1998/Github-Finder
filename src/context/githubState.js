import React, { useReducer } from "react";
import githubReducer from "./githubReducer";
import GithubContext from "./githubContext";
const Githubstate = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);


  const searchUsers =(keyword) =>{
    setLoading(true);
        setTimeout(() => {
          axios
            .get(`https://api.github.com/search/users?q=${keyword}`)
            .then((response) =>
              {
                setUsers(res.data.items)
                setLoading(false);
    
              }
            );
        }, 1000);
      }

      const setLoading = () =>{
        dispatch({
            type:"SET_LOADING"
        })
      }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default Githubstate