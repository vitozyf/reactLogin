import React, { Component } from 'react';
import SigninForm from './SigninForm'
import './style/blog-signin.css'

class Signin extends Component {
  render() {
    return (
      <div className = "blog-signin">
        <SigninForm />
      </div>
    )
  }
}

export default Signin;