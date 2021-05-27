import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Router Component/navbar";
import Products from "./Router Component/products";
import Posts from "./Router Component/posts";
import Home from "./Router Component/home";
import Dashboard from "./Router Component/admin/dashboard";
import ProductDetails from "./Router Component/productDetails";
import NotFound from "./Router Component/notFound";
import Movie from "./component/movie";
import LoginForm from "./Router Component/loginForm";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Register from './Router Component/register';
import MovieForm from "./component/common/movieForm";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={LoginForm} />
        <Route path="/movies/:id" component={MovieForm} />
        <Route path="/products/:id/:name" component={ProductDetails} />
        <Route path="/admin" component={Dashboard} />
        <Route path="/products" render={(props) => <Products SortBy="latest" {...props} />}/>
        <Route path="/posts/:year?/:month?" component={Posts} />
        <Route path="/movie" component={Movie} />
        <Route path="/" exact component={Home} />
        <Route path="/notFound" exact component={NotFound} />
        <Redirect to="/notFound" />
      </Switch>
      {/* <Movie/> */}
    </>
  );
}
export default App;
