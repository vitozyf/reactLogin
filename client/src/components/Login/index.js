import React, { Component } from 'react';
import LoginForm from './LoginForm'
import './style/login.css'

class Login extends Component {
  componentWillMount () {

  }
  render() {
    return (
      <div className = "blog-login">
        <LoginForm history={ this.props.history } />
      </div>
    )
  }
}

export default Login;