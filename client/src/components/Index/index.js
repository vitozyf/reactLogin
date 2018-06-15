import React, { Component } from 'react';
import { getCookie, setCookie, removeCookie } from 'utils/cookie';
import IndexComponent from './indexUI';

class App extends Component {

  SetCookie = () => {
    setCookie('test', '1111111')
  }

  GetCookie = () => {
    console.log(getCookie('test'))
  }

  RemoveCookie = () => {
    removeCookie('test')
  }

  render() {
    return (
      <div className="App">
        <IndexComponent 
          SetCookie = { this.SetCookie } 
          GetCookie = { this.GetCookie } 
          RemoveCookie = { this.RemoveCookie }>
        </IndexComponent>
      </div>
    );
  }
}

export default App;