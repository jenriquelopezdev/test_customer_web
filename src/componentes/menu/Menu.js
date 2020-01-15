import React from "react";
import { NavLink } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

//import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <nav className=" navbar-expand-md navbar-dark fixed-top">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">DataMed</Typography>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Ventas{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/customer" className="nav-link">
                    Clientes{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/product" className="nav-link">
                    Productos{" "}
                  </NavLink>
                </li>
              </ul>
            </div>
          </Toolbar>
        </AppBar>
      </nav>
    );
  }
}

export default Menu;
