import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Index from 'pages/Index'
import About from 'pages/About'
import Signin from 'pages/Signin'
import Login from 'pages/Login'
import Personal from 'pages/Personal'
import Test from 'pages/Test'

// import RouterConfig from 'routers/router-config.json'
// const Menus = RouterConfig.Menus

export default (
  <div className = "container" >
    <Switch>
      <Redirect exact from = "/" to = "/home"></Redirect>
      <Route  path = "/home" component = {Index}></Route>
      <Route exact path = "/about" component = {About}></Route>
      <Route exact path = "/signin" component = {Signin}></Route>
      <Route exact path = "/login" component = {Login}> </Route>
      <Route exact path = "/personal"  component = {Personal}></Route>
      <Route exact path = "/test" component = {Test}></Route>
    </Switch>
  </div>
)