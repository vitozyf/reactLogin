import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RouterConfig from 'routers/router-config.json'

import Index from 'pages/Index'
import About from 'pages/About'
import Signin from 'pages/Signin'
import Login from 'pages/Login'
import Personal from 'pages/Personal'
import Test from 'pages/Test'
import TopicDetails from 'components/TopicDetails/index';

const Menus = RouterConfig.Menus

export default (
  <div className = "container" >
    <Switch>
      <Route exact  path = "/" component = {Index}></Route>
      <Route 
        exact 
        path = "/about" 
   
        render = {({history,location,match}) => (
          <div history={history} location={location} match={location}>
              <Route path="/about" exact component={About} />
              <Route path="/about/pro" exact component={TopicDetails} />
          </div>
        )}
        >
      </Route>
      <Route exact path = "/signin" component = {Signin}></Route>
      <Route exact path = "/login" component = {Login}> </Route>
      <Route exact path = "/personal"  component = {Personal}></Route>
      <Route exact path = "/test" component = {Test}></Route>
    </Switch>
    {/*{
      Menus.map(item => {
        const Component = require(`pages/${item.name}`).default
        return (
          <Route 
            exact 
            key = {item.name} 
            path = { item.path } 
            component = {Component}>
          </Route>
        )
      })
    }*/}
  </div>
)