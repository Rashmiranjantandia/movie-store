import React from "react";
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand font-weight-bold" to="/">The Movie DB</Link>
        <button className="navbar-toggler bg-success" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ml-auto text-uppercase">            
              <NavLink exact to="/" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarNav.show">Home</NavLink>                     
              <NavLink to="/movie" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarNav.show">Movies</NavLink>       
              <NavLink to="/products" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarNav.show">Products</NavLink>
              <NavLink to="/admin" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarNav.show">Admin</NavLink>
              <NavLink to="/posts/2018/06" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarNav.show">Posts</NavLink>
              <NavLink to="/login" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarNav.show">Login</NavLink>
              <NavLink to="/register" className="nav-item nav-link" data-toggle="collapse" data-target="#navbarNav.show">Register</NavLink>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


