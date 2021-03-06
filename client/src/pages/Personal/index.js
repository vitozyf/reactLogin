import React, { Component } from 'react';
import PersonalDetails from 'pages/Personal/PersonalDetails/index';
import {connect} from 'react-redux';
import http from 'utils/http';
import './style/index.scss';

const PersonalUI = connect((state, props) => {
  return {user:state.user, ...props}
}, dispatch => {
  return {
    SetUserInfo: (userInfo) => {
      return dispatch({
        type: 'SetUserInfo',
        userInfo: userInfo
      })
    }
  }
})(PersonalDetails)

const config = {
  getUserInfo: '/getUserInfo'
}

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    }
  }

  componentWillMount () {
    http.$post(config.getUserInfo).then(data => {
      data && this.setState({
        userInfo: data.UserInfo
      })
    })
  }

 render () {
   return (
     <div className="Personal">
       <PersonalUI userInfo={this.state.userInfo} />
     </div>
   )
 }
}

export default Personal