import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import Index from 'pages/Index'
// import About from 'pages/About'
// import Signin from 'pages/Signin'
// import Login from 'pages/Login'
// import Personal from 'pages/Personal'
// import Test from 'pages/Test'

import RouterConfig from 'routers/router-config.json'
const Menus = RouterConfig.Menus

export default (
  <div className = "container" >
    <Switch>
      <Redirect exact from = "/" to = "/home"></Redirect>
      {
        Menus.map(item => {
          return (
            <Route 
              exact = {!item.children} 
              path = { item.path } 
              component = { require(`pages/${item.name}`).default }
              key = {item.name}>
            </Route>
          )
        })
      }
    </Switch>
  </div>
)