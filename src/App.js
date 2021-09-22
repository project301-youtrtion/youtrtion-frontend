import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Profile from "./Profile";
// import DietPlan from './components/dietPlan';
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Callback from "./components/Callback";
import Recipes from "./components/Recipes";

import './App.css'

import Header from "./components/Header";
import News from "./News";
import Footer from "./components/Footer";

export class App extends Component {
  render() {
    const isAuth = this.props.auth0.isAuthenticated;

    return (

      <div>
        <>
          <Router>


            {isAuth && <Header />}
            <Switch>
              <Route exact path="/">
                {isAuth ? <Recipes /> : <Login />}


              </Route>
              <Route exact path="/profile">
                {isAuth && <Profile />}
              </Route>
              <Route exact path="/callback">


                {isAuth && <Callback />}
              </Route>
              <Route exact path="/news">
                {isAuth && <News />}
              </Route>
            </Switch>
            
            {   isAuth &&  <Footer /> }
             
           
          </Router>
        </>

      </div>
    );
  }
}


export default withAuth0(App);

