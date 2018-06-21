import React from 'react';
import { Route } from 'react-router-dom';
import RouterConfig from 'routers/router-config.json'

const Menus = RouterConfig.Menus

export default (
  <div className = "container" >
    {
      Menus.map(item => {
        return (
          <Route 
            exact 
            key = {item.name} 
            path = { item.path } 
            component = { 
              require(`pages/${item.name}`).default
            }>
          </Route>
        )
      })
    }
  </div>
)