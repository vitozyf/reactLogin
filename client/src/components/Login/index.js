import React, { Component } from 'react';
import LoginForm from './LoginForm'
import './style/login.css'

class Login extends Component {
  render() {
    return (
      <div className = "blog-login">
        <LoginForm />
      </div>
    )
  }
}

export default Login;