import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
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

const ProductsDetailPage = (props) => {
    let { id } = useParams();

  return (
    <>
      <div>{ id }</div>
    </>
  );
};

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink exact  to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact  to="/products" activeClassName="active">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink  to="/products/12?order=asc" activeClassName="active">
              Product Details
            </NavLink>
          </li>
          <li>
            <NavLink  exact to="/contact" activeClassName="active">
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

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Switch>
          <Route  path="/contact">
            <Contact />
          </Route>
          <Route exact  path="/products">
            <Products />
          </Route>
          <Route  path="/products/:id">
            <ProductsDetailPage />
          </Route>
          <Route  path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
