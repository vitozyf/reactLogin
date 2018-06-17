import React, { Component } from 'react';
import { getCookie, setCookie, removeCookie } from 'utils/cookie';
import TestUI from './TestUI';
import http from 'utils/http'
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, {
    user: state.user
  }, ownProps)
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => {
      console.log(name)
      return dispatch({
        type: 'SetUserInfo',
        Name: name
      })
    }
  }
}

const AppComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestUI)

class App extends Component {

  SetCookie = () => {
    setCookie('test', '1111111')
  }

  GetCookie = () => {
    console.log(getCookie('test'))
    http.$post('test').then(res => {
      console.log(123, res)
    })
  }

  RemoveCookie = () => {
    removeCookie('test')
  }

  componentWillMount(){
  }

  render() {
    return (
      <div className="App">
        <AppComponent 
          SetCookie = { this.SetCookie } 
          GetCookie = { this.GetCookie } 
          RemoveCookie = { this.RemoveCookie }>
        </AppComponent>
      </div>
    );
  }
}

export default App;