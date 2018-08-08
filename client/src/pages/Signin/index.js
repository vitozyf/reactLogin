import React, { Component } from 'react';
import SigninForm from './SigninForm'
import './style/blog-signin.scss'

class Signin extends Component {
  render() {
    return (
      <div className = "blog-signin"  >
        <SigninForm history={ this.props.history } />
      </div>
    )
  }
}

export default Signin;