import React, { Component } from 'react';
import LoginForm from './LoginForm'
import { connect } from 'react-redux';
import './style/login.scss'

const LoginUI = connect((state, props) => {
  return Object.assign({}, {pageLoading: state.pageLoading}, props) 
}, dispatch => {
  return {
    SetUserInfo: (IsLogin) => {
      return dispatch({
        type: 'SetUserInfo',
        IsLogin: IsLogin
      })
    }
  }
})(LoginForm)

class Login extends Component {
  componentWillMount () {

  }

  toSignin = () => {
    this.props.history.push('/signin') 
  }

  render() {
    return (
      <div className = "blog-login">
        <LoginUI history={ this.props.history } toSignin = { this.toSignin }/>
      </div>
    )
  }
}

export default Login;