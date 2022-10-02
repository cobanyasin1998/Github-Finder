import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./components/App";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

const Home = () => {
  return <h2>Home</h2>;
};
const Contact = () => {
  return <h2>Contact</h2>;
};
const Products = () => {
  return <h2>Products</h2>;
};
const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}

          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/products" activeClassName="active">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

const Header = () => {
  return (
    <header>
      <h1>GitHub Finder</h1>
    </header>
  );
};

export default function Appies() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// ReactDOM.render(routes, document.getElementById("root"));
ReactDOM.render(<Appies />, document.getElementById("root"));
